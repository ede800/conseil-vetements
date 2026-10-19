// Construction du site : regroupe et compresse le JavaScript et le CSS, crée les miniatures de logos,
// pré-génère une page HTML par maison, matière et pièce (référencement), puis le plan du site.
//
// Usage : node outils/build.js
// Dépendances (à installer une fois, hors du dépôt) : esbuild, jsdom, sharp — via NODE_PATH si besoin.

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const esbuild = require("esbuild");
const { JSDOM } = require("jsdom");
const sharp = require("sharp");

const RACINE = path.join(__dirname, "..");
const URL_SITE = "https://ede800.github.io/conseil-vetements/";
const BASE = "/conseil-vetements/";
const lire = (f) => fs.readFileSync(path.join(RACINE, f), "utf8");
const ecrire = (f, contenu) => {
  fs.mkdirSync(path.dirname(path.join(RACINE, f)), { recursive: true });
  fs.writeFileSync(path.join(RACINE, f), contenu);
};
const empreinte = (texte) => crypto.createHash("sha1").update(texte).digest("hex").slice(0, 10);
const attr = (s) => String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

(async () => {
  // 1. JavaScript : concaténation puis compression
  const scripts = JSON.parse(lire("outils/scripts.json"));
  const source = scripts.map((f) => `// ${f}\n` + lire(f)).join("\n;\n");
  const js = esbuild.transformSync(source, { minify: true, target: "es2020", charset: "utf8" }).code;
  ecrire("site.min.js", js);
  const vJs = empreinte(js);

  // 2. CSS compressé
  const css = esbuild.transformSync(lire("style.css"), { loader: "css", minify: true, charset: "utf8" }).code;
  ecrire("style.min.css", css);
  const vCss = empreinte(css);
  console.log(`JS : ${(source.length / 1024).toFixed(0)} Ko → ${(js.length / 1024).toFixed(0)} Ko · CSS : ${(lire("style.css").length / 1024).toFixed(0)} Ko → ${(css.length / 1024).toFixed(0)} Ko`);

  // 3. Miniatures des logos (WebP 64 px) pour les listes
  const dossierLogos = path.join(RACINE, "logos");
  fs.mkdirSync(path.join(dossierLogos, "64"), { recursive: true });
  let miniatures = 0;
  for (const f of fs.readdirSync(dossierLogos).filter((f) => f.endsWith(".png"))) {
    const cible = path.join(dossierLogos, "64", f.replace(/\.png$/, ".webp"));
    if (fs.existsSync(cible) && fs.statSync(cible).mtimeMs > fs.statSync(path.join(dossierLogos, f)).mtimeMs) continue;
    await sharp(path.join(dossierLogos, f)).resize(64, 64, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 }, withoutEnlargement: true }).webp({ quality: 82 }).toFile(cible);
    miniatures++;
  }
  console.log(`Miniatures de logos créées : ${miniatures}`);

  // 4. Page d'accueil : un seul script et une seule feuille de style
  const gabarit = lire("outils/gabarit.html");
  const page = (opts) => gabarit
    .replace("{{TITRE}}", attr(opts.titre))
    .replace("{{DESCRIPTION}}", attr(opts.description))
    .replace("{{CANONIQUE}}", attr(opts.url))
    .replace("{{OG}}", `<meta property="og:title" content="${attr(opts.titre)}">
  <meta property="og:description" content="${attr(opts.description)}">
  <meta property="og:url" content="${attr(opts.url)}">
  <meta property="og:type" content="${opts.ogType || "website"}">
  <meta property="og:site_name" content="Bien Vêtu">
  <meta property="og:locale" content="fr_FR">${opts.image ? `\n  <meta property="og:image" content="${attr(opts.image)}">` : ""}`)
    .replace("{{BASE}}", opts.base ? `<base href="${BASE}">` : "")
    .replace("{{JSONLD}}", opts.jsonld ? `<script type="application/ld+json">${JSON.stringify(opts.jsonld).replace(/</g, "\\u003c")}</script>` : "")
    .replace("{{CONTENU}}", opts.contenu || "")
    .replace("{{PRERENDU}}", opts.route ? `<script>window.PRERENDU = ${JSON.stringify(opts.route)};</script>` : "")
    .replace("{{CSS}}", `style.min.css?v=${vCss}`)
    .replace("{{JS}}", `site.min.js?v=${vJs}`);

  ecrire("index.html", page({
    titre: "Bien Vêtu — Guide d'achat de vêtements : matières et meilleures marques",
    description: "Quelles matières choisir pour chaque vêtement, et quelles marques acheter selon votre budget : tier lists, fiches de 500 maisons et guide de 76 matières.",
    url: URL_SITE,
    jsonld: { "@context": "https://schema.org", "@type": "WebSite", name: "Bien Vêtu", url: URL_SITE, inLanguage: "fr" }
  }));

  // 5. Pré-rendu de chaque page avec un vrai DOM
  const dom = new JSDOM(lire("outils/gabarit.html").replace(/\{\{[A-Z]+\}\}/g, ""), { url: URL_SITE, runScripts: "outside-only", pretendToBeVisual: true });
  const w = dom.window;
  w.scrollTo = () => {};
  w.HTMLElement.prototype.scrollIntoView = () => {};
  w.eval(source + "\n;window.__ctx = { route, VETEMENTS, MARQUES, MATIERES, INFOS, HISTOIRES, LOGOS, slug, fmt };");
  const ctx = w.__ctx;
  const app = w.document.getElementById("app");

  const rendre = (route) => {
    w.history.replaceState(null, "", URL_SITE + route);
    ctx.route();
    return {
      titre: w.document.title,
      contenu: app.innerHTML.replace(/\s?\breveal\b/g, "").replace(/ class=""/g, "")
    };
  };

  // Accueil réécrit avec son contenu pré-rendu (liste des pièces lisible sans JavaScript)
  ecrire("index.html", page({
    titre: "Bien Vêtu — Guide d'achat de vêtements : matières et meilleures marques",
    description: "Quelles matières choisir pour chaque vêtement, et quelles marques acheter selon votre budget : tier lists, fiches de 500 maisons et guide de 76 matières.",
    url: URL_SITE,
    contenu: rendre("").contenu,
    jsonld: { "@context": "https://schema.org", "@type": "WebSite", name: "Bien Vêtu", url: URL_SITE, inLanguage: "fr" }
  }));

  const pages = [];
  const ajouter = (chemin, route, description, extra = {}) => {
    const r = rendre(route);
    const url = URL_SITE + chemin;
    ecrire(chemin + "index.html", page({ titre: r.titre, description, url, base: true, route, contenu: r.contenu, ...extra }));
    pages.push({ url, priorite: extra.priorite || "0.6" });
  };
  const fil = (elements) => ({
    "@type": "BreadcrumbList",
    itemListElement: elements.map(([nom, url], i) => ({ "@type": "ListItem", position: i + 1, name: nom, item: url }))
  });

  // Pages générales
  ajouter("matieres/", "#/matieres", "Le guide de 76 matières textiles : fibres naturelles, artificielles et synthétiques, cuirs et étoffes, avec leurs qualités, défauts et entretien.", { priorite: "0.8" });
  ajouter("maisons/", "#/maisons", "L'annuaire de 500 marques de vêtements notées sur cinq critères : matières, confection, durabilité, rapport qualité-prix, éthique.", { priorite: "0.8" });
  ajouter("conseils/", "#/conseils", "Les bons réflexes pour reconnaître un vêtement de qualité, et un lexique simple des termes techniques.", { priorite: "0.7" });
  ajouter("methode/", "#/methode", "Comment Bien Vêtu classe les marques : budgets, rangs S à C, cinq critères notés de 1 à 5 et sources.", { priorite: "0.4" });

  // Pièces
  for (const v of ctx.VETEMENTS) {
    ajouter(`vetement/${v.id}/`, `#/vetement/${v.id}`, `${v.nom} : ${v.resume} Les matières à choisir et les meilleures marques par budget.`, {
      priorite: "0.8",
      jsonld: { "@context": "https://schema.org", "@type": "Article", headline: `${v.nom} — guide d'achat`, inLanguage: "fr", description: v.resume, ...fil([["Accueil", URL_SITE], [v.nom, URL_SITE + `vetement/${v.id}/`]]) }
    });
  }

  // Maisons
  for (const nom of Object.keys(ctx.MARQUES)) {
    const m = ctx.MARQUES[nom];
    const inf = ctx.INFOS[nom] || {};
    const s = ctx.slug(nom);
    const logo = ctx.LOGOS[nom] ? URL_SITE + `logos/${s}.png` : undefined;
    ajouter(`maison/${s}/`, `#/maison/${s}`, `${nom} (${m.pays}) : avis, note ${ctx.fmt(m.moyenne)}/5, histoire${inf.a ? " depuis " + inf.a : ""}, qualité des produits et classements par budget. ${m.desc}`.slice(0, 300), {
      ogType: "article",
      image: logo,
      jsonld: {
        "@context": "https://schema.org",
        "@graph": [
          { "@type": "Brand", name: nom, description: m.desc, ...(logo ? { logo } : {}), ...(inf.w ? { sameAs: "https://" + inf.w } : {}) },
          fil([["Les maisons", URL_SITE + "maisons/"], [nom, URL_SITE + `maison/${s}/`]])
        ]
      }
    });
  }

  // Matières
  for (const mat of ctx.MATIERES) {
    const s = ctx.slug(mat.nom);
    ajouter(`matiere/${s}/`, `#/matiere/${s}`, `${mat.nom} : ${mat.bref} Fabrication, pays producteurs, prix, qualités, défauts et entretien.`, {
      ogType: "article",
      jsonld: { "@context": "https://schema.org", "@type": "Article", headline: mat.nom, description: mat.bref, inLanguage: "fr", ...fil([["Les matières", URL_SITE + "matieres/"], [mat.nom, URL_SITE + `matiere/${s}/`]]) }
    });
  }

  // 6. Plan du site et robots.txt
  const aujourdhui = new Date().toISOString().slice(0, 10);
  ecrire("sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>${URL_SITE}</loc><lastmod>${aujourdhui}</lastmod><priority>1.0</priority></url>
${pages.map((p) => `  <url><loc>${p.url}</loc><lastmod>${aujourdhui}</lastmod><priority>${p.priorite}</priority></url>`).join("\n")}
</urlset>
`);
  ecrire("robots.txt", `User-agent: *\nAllow: /\n\nSitemap: ${URL_SITE}sitemap.xml\n`);
  console.log(`Pages pré-générées : ${pages.length} (+ accueil) · sitemap.xml et robots.txt écrits`);
})();
