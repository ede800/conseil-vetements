// Navigation par hash — compatible GitHub Pages.
// #/  #/vetement/<id>  #/matieres  #/maisons  #/maison/<slug>  #/conseils  #/methode

const app = document.getElementById("app");
const ROMAINS = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"];
const CRITERES = [
  { nom: "Matières", aide: "Qualité des fibres et des cuirs utilisés", niveaux: [
    "Matières bas de gamme majoritaires : acrylique, polyester bon marché, simili-cuir.",
    "Matières ordinaires, avec beaucoup de mélanges synthétiques.",
    "Matières correctes : fibres naturelles courantes, quelques mélanges.",
    "Bonnes matières : fibres naturelles de qualité, cuirs pleine fleur.",
    "Matières d'exception : fibres longues ou rares, laines fines, cuirs de premier choix."
  ] },
  { nom: "Confection", aide: "Coutures, finitions, construction", niveaux: [
    "Coutures fragiles, finitions bâclées, défauts fréquents.",
    "Confection basique : coutures simples, semelles collées, vestes thermocollées.",
    "Confection correcte et régulière, sans défaut notable.",
    "Confection soignée : coutures serrées, entoilage, montage cousu.",
    "Savoir-faire artisanal : travail à la main, finitions irréprochables."
  ] },
  { nom: "Durabilité", aide: "Tenue dans le temps, réparabilité", niveaux: [
    "Se déforme ou s'use en quelques mois.",
    "Tient une à deux saisons.",
    "Tient plusieurs années avec un entretien normal.",
    "Dure de nombreuses années, souvent réparable.",
    "Pensé pour durer des décennies : réparation ou garantie à vie."
  ] },
  { nom: "Rapport qualité-prix", aide: "Ce que l'on obtient pour le prix payé", niveaux: [
    "Très cher pour ce que l'on obtient : on paie surtout l'image.",
    "Prix supérieur à la qualité réelle.",
    "Prix cohérent avec la qualité.",
    "Bon rapport qualité-prix.",
    "Exceptionnel : une qualité nettement supérieure à ce que le prix laisse attendre."
  ] },
  { nom: "Éthique & transparence", aide: "Conditions de production, environnement, traçabilité", niveaux: [
    "Pratiques sociales ou environnementales fortement critiquées, grande opacité.",
    "Peu d'informations publiques, modèle à fort impact (mode rapide).",
    "Engagements partiels, informations de base sur la production.",
    "Production tracée, fabrication locale ou engagements vérifiés.",
    "Exemplaire : transparence totale, réparation, certification ou modèle engagé."
  ] }
];

// Logo d'une maison : icône officielle si disponible, sinon monogramme
function logo(nom, taille = "s") {
  const initiales = nom.replace(/[^\p{L}\p{N} ]/gu, " ").split(/\s+/).filter(Boolean).slice(0, 2).map((m) => m[0]).join("").toUpperCase();
  const largeur = typeof LOGOS !== "undefined" ? LOGOS[nom] : 0;
  if (largeur) {
    // Une petite icône (32 px) n'est jamais agrandie, pour rester nette
    const classe = largeur < 64 ? " logo-petit" : "";
    return `<span class="logo-mark logo-${taille}${classe}"><img src="logos/${slug(nom)}.png" alt="${taille === "l" ? "Logo de " + esc(nom) : ""}" loading="lazy" decoding="async" width="${largeur}" height="${largeur}"></span>`;
  }
  return `<span class="logo-mark logo-${taille} monogramme" aria-hidden="true">${esc(initiales)}</span>`;
}
const GAMMES = { "€": "Petit prix", "€€": "Milieu de gamme", "€€€": "Haut de gamme", "€€€€": "Luxe" };

const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
}[c]));
const num = (i) => String(i + 1).padStart(2, "0");
const slug = (s) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const fmt = (n) => n.toFixed(1).replace(".", ",");
const famille = (id) => FAMILLES.find((f) => f.id === id);

// ---------- Index des maisons ----------
function resoudre(nom) {
  if (ALIAS[nom]) return ALIAS[nom];
  if (MARQUES[nom]) return nom;
  const base = nom.replace(/\s*\(.*\)$/, "");
  return MARQUES[base] ? base : null;
}

const SLUGS = {};
const CLASSEMENTS = {};
for (const nom in MARQUES) {
  SLUGS[slug(nom)] = nom;
  CLASSEMENTS[nom] = [];
  const n = MARQUES[nom].notes;
  MARQUES[nom].moyenne = n.reduce((a, b) => a + b, 0) / n.length;
}
for (const v of VETEMENTS) {
  for (const b of BUDGETS) {
    for (const t of ["S", "A", "B", "C"]) {
      for (const [nom, note] of v.tiers[b.id][t] || []) {
        const cle = resoudre(nom);
        if (cle) CLASSEMENTS[cle].push({ v, budget: b, tier: t, note, nom });
      }
    }
  }
}

function verdict(m) {
  if (m >= 4.3) return "Maison d'excellence";
  if (m >= 3.7) return "Très bonne maison";
  if (m >= 3.1) return "Maison correcte";
  if (m >= 2.4) return "Maison mitigée";
  return "Maison à éviter";
}

// ---------- Utilitaires d'affichage ----------
function setActiveNav(name) {
  document.querySelectorAll("[data-nav]").forEach((a) => {
    const on = a.dataset.nav === name;
    a.classList.toggle("active", on);
    if (on) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
  });
}

// Message lu par les lecteurs d'écran (zone role="status")
function annoncer(msg) {
  const zone = document.getElementById("annonce");
  zone.textContent = "";
  setTimeout(() => { zone.textContent = msg; }, 50);
}
const pluriel = (n, mot) => `${n} ${mot}${n > 1 ? "s" : ""}`;

// Boutons de filtre : état actif visible et annoncé
function activerChip(groupe, chip) {
  groupe.forEach((x) => {
    x.classList.toggle("active", x === chip);
    x.setAttribute("aria-pressed", x === chip);
  });
}

const observer = "IntersectionObserver" in window
  ? new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("in"); observer.unobserve(e.target); }
      });
    }, { threshold: 0.08 })
  : null;

function reveal(root = app) {
  root.querySelectorAll(".reveal:not(.in)").forEach((el) => (observer ? observer.observe(el) : el.classList.add("in")));
}

function sectionHead(label, titre) {
  return `
    <div class="section-head reveal">
      <div class="label">${label}</div>
      <h2>${titre}</h2>
      <span class="ornament" aria-hidden="true"></span>
    </div>`;
}

function pageHead(label, titre, texte) {
  return `
    <header class="piece-head">
      <div class="label reveal">${label}</div>
      <h1 class="reveal">${titre}</h1>
      ${texte ? `<p class="reveal">${texte}</p>` : ""}
    </header>`;
}

function blocSources(cles, titre = "Sources", noteMarques = true) {
  const uniques = [...new Set(cles)].filter((k) => SOURCES[k]);
  if (!uniques.length) return "";
  return `
    <section class="sources">
      <div class="container">
        <h2 class="label">${titre}</h2>
        <ol>
          ${uniques.map((k) => {
            const [t, url] = SOURCES[k];
            const domaine = new URL(url).hostname.replace(/^www\./, "");
            return `<li><a href="${url}" target="_blank" rel="noopener"${url.includes("en.wikipedia") ? ' hreflang="en"' : ""}>${esc(t)}<span class="sr-only"> (nouvel onglet)</span></a> <span>${domaine}</span></li>`;
          }).join("")}
        </ol>
        ${noteMarques ? "" : "<!--"}<p class="sources-note">Les classements de marques sont une synthèse éditoriale fondée sur ces sources, les retours de communautés spécialisées et l'examen des compositions et méthodes de fabrication. Voir <a href="#/methode">notre méthode</a>.</p>${noteMarques ? "" : "-->"}
      </div>
    </section>`;
}

const jauge = (n) => `<span class="gauge" aria-hidden="true">${[1, 2, 3, 4, 5].map((i) => `<i class="${i <= n ? "on" : ""}"></i>`).join("")}</span>`;

// ---------- Accueil ----------
function renderHome() {
  setActiveNav("accueil");
  document.title = "Bien Vêtu — Guide d'achat de vêtements";
  const nbMarques = Object.keys(MARQUES).length;
  app.innerHTML = `
    <section class="hero">
      <div class="label reveal">Le guide de l'élégance durable</div>
      <h1 class="reveal">Acheter mieux,<br><em>pas plus.</em></h1>
      <p class="reveal">Pour chaque pièce de votre garde-robe : les matières à privilégier, les raisons de ce choix, et les maisons qui méritent votre confiance, quel que soit votre budget.</p>
      <button class="btn reveal" id="to-pieces">Découvrir les pièces</button>
      <span class="scroll-hint" aria-hidden="true"></span>
    </section>

    <section class="stats">
      <div class="stat reveal"><span>${VETEMENTS.length}</span>pièces décryptées</div>
      <div class="stat reveal"><span>${MATIERES.length}</span>matières expliquées</div>
      <div class="stat reveal"><span>${nbMarques}</span>maisons évaluées</div>
      <div class="stat reveal"><span>3</span>niveaux de budget</div>
    </section>

    <section class="section manifesto">
      <div class="container">
        ${sectionHead("Notre philosophie", "Trois principes, <em>une exigence</em>")}
        <div class="pillars">
          <div class="pillar reveal"><span class="num">I.</span><h3>La matière</h3><p>Tout commence par la fibre. Une belle laine, un coton à longues fibres, un cuir pleine fleur : c'est elle qui décide de la durée de vie d'un vêtement.</p></div>
          <div class="pillar reveal"><span class="num">II.</span><h3>La façon</h3><p>Coutures serrées, entoilage, montage Goodyear : les détails invisibles distinguent un vêtement qui dure d'un vêtement qui se déforme.</p></div>
          <div class="pillar reveal"><span class="num">III.</span><h3>Le juste prix</h3><p>Le luxe n'est pas une étiquette. Nous classons les maisons selon ce qu'elles offrent réellement, à chaque niveau de budget.</p></div>
        </div>
      </div>
    </section>

    <section class="section" id="pieces">
      <div class="container">
        ${sectionHead("La collection", "Les <em>pièces</em>")}
        <div class="filters reveal" id="fam-filters" role="group" aria-label="Filtrer par famille">
          <button class="chip active" aria-pressed="true" data-fam="">Toutes</button>
          ${FAMILLES.map((f) => `<button class="chip" aria-pressed="false" data-fam="${f.id}">${f.nom}</button>`).join("")}
        </div>
        <div class="search-wrap reveal">
          <label class="sr-only" for="q-pieces">Rechercher une pièce</label><input class="search" id="q-pieces" type="search" placeholder="Rechercher une pièce">
        </div>
        <div id="index"></div>
      </div>
    </section>

    <section class="trio" aria-labelledby="titre-trio">
      <h2 id="titre-trio" class="sr-only">Explorer le guide</h2>
      <a class="duo-card reveal" href="#/matieres">
        <div class="label">Le guide</div>
        <h3>Les <em>matières</em></h3>
        <p>${MATIERES.length} fibres, cuirs et étoffes décryptés : qualités, défauts, usages et entretien.</p>
        <span class="link-u">Explorer</span>
      </a>
      <a class="duo-card reveal" href="#/maisons">
        <div class="label">L'annuaire</div>
        <h3>Les <em>maisons</em></h3>
        <p>${nbMarques} marques notées sur cinq critères : matières, confection, durabilité, prix et éthique.</p>
        <span class="link-u">Consulter</span>
      </a>
      <a class="duo-card reveal" href="#/conseils">
        <div class="label">Le savoir-faire</div>
        <h3>L'art <em>d'acheter</em></h3>
        <p>Les bons réflexes et un lexique simple pour comprendre les étiquettes et reconnaître la qualité.</p>
        <span class="link-u">Lire</span>
      </a>
    </section>
  `;

  const index = document.getElementById("index");
  let fam = "";
  let q = "";
  const draw = (annonce = false) => {
    const n = q.trim().toLowerCase();
    const groupes = FAMILLES.filter((f) => !fam || f.id === fam).map((f) => ({
      f,
      items: VETEMENTS.map((v, i) => ({ v, i }))
        .filter(({ v }) => v.famille === f.id && (v.nom + " " + v.resume).toLowerCase().includes(n))
    })).filter((g) => g.items.length);
    index.innerHTML = groupes.length
      ? groupes.map(({ f, items }) => `
          <div class="index-group">
            <h3 class="index-family reveal">${f.nom}</h3>
            <ul class="index-list">
              ${items.map(({ v, i }) => `
                <li class="index-item reveal">
                  <a href="#/vetement/${v.id}">
                    <span class="num">${num(i)}</span>
                    <span class="name">${esc(v.nom)}</span>
                    <span class="desc">${esc(v.resume)}</span>
                    <span class="arrow" aria-hidden="true">→</span>
                  </a>
                </li>`).join("")}
            </ul>
          </div>`).join("")
      : `<p class="empty">Aucune pièce ne correspond à votre recherche.</p>`;
    if (annonce) annoncer(pluriel(groupes.reduce((t, g) => t + g.items.length, 0), "pièce") + " affichée(s)");
    reveal(index);
  };
  draw();
  app.querySelector(".search").addEventListener("input", (e) => { q = e.target.value; draw(true); });
  document.querySelectorAll("#fam-filters .chip").forEach((c) => c.addEventListener("click", () => {
    activerChip(document.querySelectorAll("#fam-filters .chip"), c);
    fam = c.dataset.fam;
    draw(true);
  }));
  document.getElementById("to-pieces").addEventListener("click", () => {
    const h = document.querySelector("#pieces h2");
    h.setAttribute("tabindex", "-1");
    h.focus({ preventScroll: true });
    document.getElementById("pieces").scrollIntoView({ behavior: "smooth" });
  });
  reveal();
}

// ---------- Fiche d'une pièce ----------
function renderVetement(id, onglet = "matieres") {
  const idx = VETEMENTS.findIndex((x) => x.id === id);
  if (idx < 0) return renderHome();
  const v = VETEMENTS[idx];
  const prev = VETEMENTS[(idx - 1 + VETEMENTS.length) % VETEMENTS.length];
  const next = VETEMENTS[(idx + 1) % VETEMENTS.length];
  let budget = "moyen";

  setActiveNav("accueil");
  document.title = `${v.nom} — Bien Vêtu`;

  app.innerHTML = `
    <nav class="crumbs label" aria-label="Fil d'Ariane"><a href="#/">Les pièces</a> <span aria-hidden="true">&nbsp;/&nbsp;</span> ${famille(v.famille).nom} <span aria-hidden="true">&nbsp;/&nbsp;</span> <span aria-current="page">${esc(v.nom)}</span></nav>
    ${pageHead(`${famille(v.famille).nom} · Pièce N° ${num(idx)}`, esc(v.nom), esc(v.resume))}
    <section class="essentiel-wrap">
      <div class="narrow">
        <p class="intro reveal">${esc(v.intro)}</p>
        <div class="essentiel reveal">
          <div class="label">L'essentiel en trois points</div>
          <ol>${v.essentiel.map((e) => `<li>${esc(e)}</li>`).join("")}</ol>
        </div>
      </div>
    </section>
    <div class="tabs" role="tablist" aria-label="Contenu de la fiche">
      <button class="tab" id="tab-matieres" data-tab="matieres" role="tab" aria-controls="panel"><span class="roman" aria-hidden="true">I.</span>Les matières</button>
      <button class="tab" id="tab-marques" data-tab="marques" role="tab" aria-controls="panel"><span class="roman" aria-hidden="true">II.</span>Les maisons</button>
    </div>
    <section class="section"><div class="container" id="panel" role="tabpanel" tabindex="0"></div></section>
    ${blocSources([...v.sources, ...SOURCES_MARQUES])}
    <nav class="piece-nav" aria-label="Pièces voisines">
      <a href="#/vetement/${prev.id}"><span class="label"><span aria-hidden="true">← </span>Pièce précédente</span><span class="pn-name">${esc(prev.nom)}</span></a>
      <a href="#/vetement/${next.id}"><span class="label">Pièce suivante<span aria-hidden="true"> →</span></span><span class="pn-name">${esc(next.nom)}</span></a>
    </nav>
  `;

  const panel = document.getElementById("panel");

  const showMatieres = () => {
    panel.innerHTML = `
      <div class="tab-panel">
        ${sectionHead("Chapitre I", "Quelles <em>matières</em> choisir ?")}
        <ol class="mat-list">
          ${v.matieres.map((m, i) => `
            <li class="mat-row reveal">
              <span class="num">${num(i)}</span>
              <h3>${esc(m.nom)}</h3>
              <div>
                <p>${esc(m.pourquoi)}</p>
                ${(() => { const f = matierePour(m.nom); return f ? `<a class="mat-link" href="#/matiere/${slug(f.nom)}">Fiche matière : ${esc(f.nom)}<span aria-hidden="true"> →</span></a>` : ""; })()}
              </div>
            </li>`).join("")}
        </ol>
        <div class="notes">
          <div class="note-block avoid reveal">
            <div class="label">Mises en garde</div>
            <h3>À éviter</h3>
            <ul>${v.eviter.map((e) => `<li>${esc(e)}</li>`).join("")}</ul>
          </div>
          <div class="note-block tips reveal">
            <div class="label">Le conseil</div>
            <h3>Astuces de connaisseur</h3>
            <ul>${v.astuces.map((a) => `<li>${esc(a)}</li>`).join("")}</ul>
          </div>
        </div>
      </div>`;
    reveal(panel);
  };

  const maison = ([nom, note]) => {
    const cle = resoudre(nom);
    if (!cle) return `<div class="house generic"><h4>${esc(nom)}</h4><p>${esc(note)}</p></div>`;
    const m = MARQUES[cle];
    return `
      <a class="house" href="#/maison/${slug(cle)}">
        ${logo(cle)}
        <div class="house-meta"><span>${esc(m.pays)}</span><span><span class="sr-only">note globale </span>${fmt(m.moyenne)}<span aria-hidden="true"> / 5</span><span class="sr-only"> sur 5</span></span></div>
        <h4>${esc(nom)} <span class="go" aria-hidden="true">→</span></h4>
        <p>${esc(note)}</p>
      </a>`;
  };

  const showMarques = () => {
    const tiers = v.tiers[budget];
    panel.innerHTML = `
      <div class="tab-panel">
        ${sectionHead("Chapitre II", "Les <em>maisons</em> de référence")}
        <p class="hint">Choisissez votre budget, puis cliquez sur une maison pour découvrir sa fiche détaillée.</p>
        <div class="budget-switch" role="group" aria-label="Budget">
          ${BUDGETS.map((b) => `
            <button class="budget-btn ${b.id === budget ? "active" : ""}" data-budget="${b.id}" aria-pressed="${b.id === budget}">
              <span class="b-name">${b.label}</span>
              <span class="b-price">${esc(v.budgets[b.id])}</span>
            </button>`).join("")}
        </div>
        <div class="tierlist">
          ${["S", "A", "B", "C"].filter((t) => tiers[t]?.length).map((t) => `
            <div class="tier tier-${t} reveal">
              <div class="tier-mark">
                <span class="tier-letter" aria-hidden="true">${t}</span>
                <div>
                  <h3 class="tier-title"><span class="sr-only">Rang ${t} : </span>${TIER_NOMS[t]}</h3>
                  <div class="tier-sub">${TIER_INFO[t]}</div>
                </div>
              </div>
              <div class="houses">${tiers[t].map(maison).join("")}</div>
            </div>`).join("")}
        </div>
      </div>`;
    panel.querySelectorAll(".budget-btn").forEach((btn) =>
      btn.addEventListener("click", () => {
        budget = btn.dataset.budget;
        showMarques();
        panel.querySelector(".budget-btn.active").focus();
        annoncer("Classement " + BUDGETS.find((b) => b.id === budget).label.toLowerCase() + " affiché");
      }));
    reveal(panel);
  };

  const onglets = [...app.querySelectorAll(".tab")];
  const select = (t) => {
    onglets.forEach((b) => {
      const on = b.dataset.tab === t;
      b.classList.toggle("active", on);
      b.setAttribute("aria-selected", on);
      b.tabIndex = on ? 0 : -1;
    });
    panel.setAttribute("aria-labelledby", "tab-" + t);
    t === "marques" ? showMarques() : showMatieres();
  };

  onglets.forEach((b, i) => {
    b.addEventListener("click", () => select(b.dataset.tab));
    b.addEventListener("keydown", (e) => {
      const cible = { ArrowRight: i + 1, ArrowLeft: i - 1, Home: 0, End: onglets.length - 1 }[e.key];
      if (cible === undefined) return;
      e.preventDefault();
      const o = onglets[(cible + onglets.length) % onglets.length];
      o.focus();
      select(o.dataset.tab);
    });
  });
  select(onglet === "maisons" ? "marques" : "matieres");
  reveal();
}

// ---------- Fiche d'une maison ----------
function renderMaison(s) {
  const nom = SLUGS[s];
  if (!nom) return renderMaisons();
  const m = MARQUES[nom];
  const inf = INFOS[nom] || {};
  const classements = CLASSEMENTS[nom];
  setActiveNav("maisons");
  document.title = `${nom} — Bien Vêtu`;

  const compte = { S: 0, A: 0, B: 0, C: 0 };
  classements.forEach((c) => compte[c.tier]++);

  const identite = [
    ["Fondée en", inf.a],
    ["Fondateur(s)", inf.f],
    ["Siège", inf.s],
    ["Groupe", inf.g],
    ["Fabrication", inf.fab],
    ["Pièce emblématique", inf.ico],
    ["Gamme de prix", `${m.gamme} · ${GAMMES[m.gamme]}`],
    ["Site officiel", inf.w ? `<a href="https://${inf.w}" target="_blank" rel="noopener">${esc(inf.w)}<span class="sr-only"> (nouvel onglet)</span></a>` : ""]
  ].filter(([, v]) => v);

  app.innerHTML = `
    <nav class="crumbs label" aria-label="Fil d'Ariane"><a href="#/maisons">Les maisons</a> <span aria-hidden="true">&nbsp;/&nbsp;</span> <span aria-current="page">${esc(nom)}</span></nav>
    <header class="piece-head brand-head">
      <div class="reveal">${logo(nom, "l")}</div>
      <div class="label reveal">${esc(m.pays)} · ${GAMMES[m.gamme]}${inf.a ? " · depuis " + inf.a : ""}</div>
      <h1 class="reveal">${esc(nom)}</h1>
      <p class="reveal">${esc(m.desc)}</p>
    </header>

    <section class="section brand-score-wrap" style="padding-top:0">
      <div class="container brand-grid">
        <div class="score-card reveal">
          <div class="label">Note globale</div>
          <div class="score-big"><span aria-hidden="true">${fmt(m.moyenne)}<small>/ 5</small></span><span class="sr-only">${fmt(m.moyenne)} sur 5</span></div>
          <div class="score-verdict">${verdict(m.moyenne)}</div>
          <p class="score-hint">Moyenne des cinq critères ci-contre.</p>
        </div>
        <div class="criteria reveal">
          <h2 class="label">Évaluation détaillée</h2>
          ${CRITERES.map((c, i) => `
            <div class="criterion">
              <div class="crit-text"><strong>${c.nom}</strong><span>${c.aide}</span></div>
              ${jauge(m.notes[i])}
              <span class="crit-val"><span aria-hidden="true">${m.notes[i]}/5</span><span class="sr-only">${m.notes[i]} sur 5</span></span>
              <p class="crit-level">${c.niveaux[m.notes[i] - 1]}</p>
              <details class="crit-scale">
                <summary>Voir l'échelle de 1 à 5<span class="sr-only"> pour ${c.nom.toLowerCase()}</span></summary>
                <ol>${c.niveaux.map((n, j) => `<li class="${j + 1 === m.notes[i] ? "current" : ""}"><span class="scale-n">${j + 1}</span>${n}${j + 1 === m.notes[i] ? '<span class="sr-only"> (niveau de cette maison)</span>' : ""}</li>`).join("")}</ol>
              </details>
            </div>`).join("")}
        </div>
      </div>
    </section>

    <section class="section brand-story">
      <div class="container brand-info-grid">
        <div class="reveal">
          <h2 class="label">Carte d'identité</h2>
          <dl class="identity">
            ${identite.map(([k, v]) => `<div><dt>${k}</dt><dd>${k === "Site officiel" ? v : esc(String(v))}</dd></div>`).join("")}
          </dl>
        </div>
        <div class="brand-texts">
          ${inf.h ? `<article class="reveal"><h2 class="label">Son histoire</h2><p class="story">${esc(inf.h)}</p></article>` : ""}
          ${inf.q ? `<article class="reveal"><h2 class="label">Qualité des produits</h2><p>${esc(inf.q)}</p></article>` : ""}
          ${inf.c ? `<article class="reveal tip-box"><h2 class="label">Le conseil d'achat</h2><p>${esc(inf.c)}</p></article>` : ""}
        </div>
      </div>
    </section>

    <section class="section manifesto">
      <div class="container notes notes-dark">
        <div class="note-block tips reveal">
          <div class="label">Ce que nous apprécions</div>
          <h2>Points forts</h2>
          <ul><li>${esc(m.forts)}</li></ul>
        </div>
        <div class="note-block avoid reveal">
          <div class="label">Ce qui nous retient</div>
          <h2>Points faibles</h2>
          <ul><li>${esc(m.faibles)}</li></ul>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        ${sectionHead("Dans nos classements", `Présente dans <em>${classements.length}</em> classement${classements.length > 1 ? "s" : ""}`)}
        <div class="tier-count reveal">
          ${["S", "A", "B", "C"].map((t) => `<div class="tc tier-${t}"><span class="tier-letter" aria-hidden="true">${t}</span><span>${compte[t]} <span aria-hidden="true">×</span><span class="sr-only">fois au rang ${t},</span> ${TIER_NOMS[t]}</span></div>`).join("")}
        </div>
        <ul class="rank-list">
          ${classements.map((c) => `
            <li class="rank-row reveal tier-${c.tier}">
              <span class="tier-letter"><span class="sr-only">Rang </span>${c.tier}</span>
              <a href="#/vetement/${c.v.id}/maisons" class="rank-piece">${esc(c.v.nom)}${c.nom !== nom ? ` <small>(${esc(c.nom.replace(nom, "").replace(/[()]/g, "").trim() || c.nom)})</small>` : ""}</a>
              <span class="rank-budget">${c.budget.label} · ${esc(c.v.budgets[c.budget.id])}</span>
              <span class="rank-note">${esc(c.note)}</span>
            </li>`).join("")}
        </ul>
      </div>
    </section>
    ${blocSources(SOURCES_MARQUES)}
  `;
  reveal();
}

// ---------- Fiche d'une matière ----------
const normaliserCle = (t) => t.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
const contientMot = (texte, cle) => new RegExp("(^|[^a-z])" + cle.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "([^a-z]|$)").test(texte);

// Retrouve la fiche matière la plus précise correspondant à un intitulé (ex. « Laine mérinos » → Laine mérinos)
function matierePour(intitule) {
  const t = normaliserCle(intitule);
  let meilleure = null, longueur = 0;
  for (const m of MATIERES) {
    for (const cle of FICHES[m.nom]?.cles || []) {
      const c = normaliserCle(cle);
      if (c.length > longueur && contientMot(t, c)) { meilleure = m; longueur = c.length; }
    }
  }
  return meilleure;
}

function renderMatiere(s) {
  const idx = MATIERES.findIndex((m) => slug(m.nom) === s);
  if (idx < 0) return renderMatieres();
  const m = MATIERES[idx];
  const f = FICHES[m.nom] || {};
  const prev = MATIERES[(idx - 1 + MATIERES.length) % MATIERES.length];
  const next = MATIERES[(idx + 1) % MATIERES.length];
  const famille = FAMILLES_MATIERES.find((x) => x.id === m.famille).nom;
  setActiveNav("matieres");
  document.title = `${m.nom} — Bien Vêtu`;

  const pieces = VETEMENTS.filter((v) => v.matieres.some((x) => matierePour(x.nom) === m));

  const identite = [
    ["Famille", famille],
    ["Principaux pays producteurs", f.pays],
    ["Prix brut indicatif", f.prix],
    ["Production mondiale", f.production]
  ].filter(([, v]) => v && v !== "—");

  const sections = [
    ["Comment c'est fabriqué", f.origine],
    ["Un peu d'histoire", f.histoire],
    ["Impact environnemental", f.impact],
    ["Comment la reconnaître", f.reconnaitre]
  ].filter(([, v]) => v);

  app.innerHTML = `
    <nav class="crumbs label" aria-label="Fil d'Ariane"><a href="#/matieres">Les matières</a> <span aria-hidden="true">&nbsp;/&nbsp;</span> ${famille} <span aria-hidden="true">&nbsp;/&nbsp;</span> <span aria-current="page">${esc(m.nom)}</span></nav>
    ${pageHead(famille, esc(m.nom), esc(m.bref))}

    <section class="section" style="padding-top:0">
      <div class="container brand-info-grid">
        <div class="reveal">
          <h2 class="label">Fiche d'identité</h2>
          <dl class="identity">
            ${identite.map(([k, v]) => `<div><dt>${k}</dt><dd>${esc(v)}</dd></div>`).join("")}
            <div><dt>Notre note</dt><dd class="mat-score">${jauge(m.note)} <span><span aria-hidden="true">${m.note}/5</span><span class="sr-only">${m.note} sur 5</span></span></dd></div>
          </dl>
          <p class="price-note">Les prix sont des ordres de grandeur pour la matière première (2024–2025). Ils varient selon la qualité, les cours mondiaux et les volumes, et ne représentent qu'une petite partie du prix d'un vêtement.</p>
        </div>
        <div class="brand-texts">
          ${sections.map(([t, v]) => `<article class="reveal"><h2 class="label">${t}</h2><p>${esc(v)}</p></article>`).join("")}
          ${f.anecdote ? `<article class="reveal tip-box"><h2 class="label">Le saviez-vous ?</h2><p class="story">${esc(f.anecdote)}</p></article>` : ""}
        </div>
      </div>
    </section>

    <section class="section manifesto">
      <div class="container notes notes-dark">
        <div class="note-block tips reveal">
          <div class="label">Pourquoi la choisir</div>
          <h2>Qualités</h2>
          <ul><li>${esc(m.plus)}</li></ul>
        </div>
        <div class="note-block avoid reveal">
          <div class="label">À savoir</div>
          <h2>Faiblesses</h2>
          <ul><li>${esc(m.moins)}</li></ul>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="mat-uses">
          <div class="reveal"><h2 class="label">Idéale pour</h2><p class="story">${esc(m.usage)}</p></div>
          <div class="reveal"><h2 class="label">Entretien</h2><p class="story">${esc(m.entretien)}</p></div>
        </div>
        ${pieces.length ? `
          ${sectionHead("Dans le guide", `Où la <em>trouver</em>`)}
          <ul class="index-list">
            ${pieces.map((v) => `
              <li class="index-item reveal">
                <a href="#/vetement/${v.id}">
                  <span class="num">${num(VETEMENTS.indexOf(v))}</span>
                  <span class="name">${esc(v.nom)}</span>
                  <span class="desc">${esc(v.resume)}</span>
                  <span class="arrow" aria-hidden="true">→</span>
                </a>
              </li>`).join("")}
          </ul>` : ""}
      </div>
    </section>
    ${blocSources([...(f.sources || []), ...m.sources], "Sources", false)}
    <nav class="piece-nav" aria-label="Matières voisines">
      <a href="#/matiere/${slug(prev.nom)}"><span class="label"><span aria-hidden="true">← </span>Matière précédente</span><span class="pn-name">${esc(prev.nom)}</span></a>
      <a href="#/matiere/${slug(next.nom)}"><span class="label">Matière suivante<span aria-hidden="true"> →</span></span><span class="pn-name">${esc(next.nom)}</span></a>
    </nav>
  `;
  reveal();
}

// ---------- Annuaire des maisons ----------
function renderMaisons() {
  setActiveNav("maisons");
  document.title = "Les maisons — Bien Vêtu";
  const noms = Object.keys(MARQUES).sort((a, b) => a.localeCompare(b, "fr", { sensitivity: "base" }));
  const lettre = (n) => n.normalize("NFD")[0].toUpperCase().replace(/[^A-Z]/, "#");
  app.innerHTML = `
    ${pageHead("L'annuaire", "Les maisons", `${noms.length} marques évaluées sur cinq critères : qualité des matières, confection, durabilité, rapport qualité-prix, éthique et transparence.`)}
    <section class="section" style="padding-top:0">
      <div class="container">
        <div class="filters" id="gamme-filters" role="group" aria-label="Filtrer par gamme de prix">
          <button class="chip active" aria-pressed="true" data-g="">Toutes</button>
          ${Object.entries(GAMMES).map(([g, n]) => `<button class="chip" aria-pressed="false" data-g="${g}">${g} ${n}</button>`).join("")}
        </div>
        <div class="dir-tools">
          <label class="sr-only" for="q-maisons">Rechercher une maison ou un pays</label><input class="search" id="q-maisons" type="search" placeholder="Rechercher une maison ou un pays">
          <label class="sr-only" for="tri-maisons">Trier les maisons</label><select class="sort" id="tri-maisons">
            <option value="az">Ordre alphabétique</option>
            <option value="note">Meilleures notes</option>
          </select>
        </div>
        <div id="dir"></div>
      </div>
    </section>
    ${blocSources(SOURCES_MARQUES)}
  `;
  const dir = document.getElementById("dir");
  let g = "", q = "", tri = "az";
  const carte = (n) => {
    const m = MARQUES[n];
    return `
      <a class="dir-item" href="#/maison/${slug(n)}">
        ${logo(n)}
        <span class="dir-name">${esc(n)}</span>
        <span class="dir-meta">${esc(m.pays)} · ${m.gamme}</span>
        <span class="dir-score"><span class="sr-only">note </span>${fmt(m.moyenne)}<span class="sr-only"> sur 5</span></span>
      </a>`;
  };
  const draw = (annonce = false) => {
    const s = q.trim().toLowerCase();
    let liste = noms.filter((n) => (!g || MARQUES[n].gamme === g) && (n + " " + MARQUES[n].pays).toLowerCase().includes(s));
    if (annonce) annoncer(pluriel(liste.length, "maison") + " affichée(s)");
    if (!liste.length) { dir.innerHTML = `<p class="empty">Aucune maison trouvée.</p>`; return; }
    if (tri === "note") {
      liste = liste.sort((a, b) => MARQUES[b].moyenne - MARQUES[a].moyenne);
      dir.innerHTML = `<div class="dir-grid">${liste.map(carte).join("")}</div>`;
      return;
    }
    const groupes = {};
    liste.forEach((n) => (groupes[lettre(n)] ||= []).push(n));
    dir.innerHTML = `
      <nav class="letters" aria-label="Accès par lettre">${Object.keys(groupes).map((l) => `<button type="button" data-l="${l}" aria-label="Lettre ${l === "#" ? "chiffres" : l}">${l}</button>`).join("")}</nav>
      ${Object.entries(groupes).map(([l, ns]) => `
        <div class="dir-letter" id="lettre-${l === "#" ? "num" : l}">
          <h2 class="dir-lettre"><span class="sr-only">Lettre </span>${l === "#" ? "#" : l}</h2>
          <div class="dir-grid">${ns.map(carte).join("")}</div>
        </div>`).join("")}`;
    dir.querySelectorAll(".letters button").forEach((a) => a.addEventListener("click", () => {
      const cible = document.getElementById("lettre-" + (a.dataset.l === "#" ? "num" : a.dataset.l)).querySelector("h2");
      cible.setAttribute("tabindex", "-1");
      cible.focus({ preventScroll: true });
      cible.scrollIntoView({ behavior: "smooth" });
    }));
  };
  draw();
  app.querySelector(".search").addEventListener("input", (e) => { q = e.target.value; draw(true); });
  app.querySelector(".sort").addEventListener("change", (e) => { tri = e.target.value; draw(true); });
  document.querySelectorAll("#gamme-filters .chip").forEach((c) => c.addEventListener("click", () => {
    activerChip(document.querySelectorAll("#gamme-filters .chip"), c);
    g = c.dataset.g;
    draw(true);
  }));
  reveal();
}

// ---------- Guide des matières ----------
function renderMatieres(cible) {
  setActiveNav("matieres");
  document.title = "Les matières — Bien Vêtu";
  app.innerHTML = `
    ${pageHead("Le guide", "Les matières", `${MATIERES.length} fibres, cuirs et étoffes : ce qu'il faut savoir de chacun, en termes simples.`)}
    <section class="section" style="padding-top:0">
      <div class="container">
        <div class="legend reveal">
          <p><strong>Végétales et animales</strong> : fibres naturelles (coton, lin, laine…). <strong>Artificielles</strong> : fabriquées à partir de bois ou de cellulose (viscose, lyocell…). <strong>Synthétiques</strong> : issues du pétrole (polyester, nylon…). Les <strong>étoffes</strong> désignent la façon dont le fil est tissé ou tricoté (jersey, denim, flanelle…).</p>
        </div>
        <div class="filters" id="mat-filters" role="group" aria-label="Filtrer par famille de matières">
          <button class="chip active" aria-pressed="true" data-f="">Toutes</button>
          ${FAMILLES_MATIERES.map((f) => `<button class="chip" aria-pressed="false" data-f="${f.id}">${f.nom}</button>`).join("")}
        </div>
        <div class="search-wrap"><label class="sr-only" for="q-matieres">Rechercher une matière</label><input class="search" id="q-matieres" type="search" placeholder="Rechercher une matière"></div>
        <div class="fibres" id="fibres"></div>
      </div>
    </section>
    ${blocSources(MATIERES.flatMap((m) => m.sources))}
  `;
  const list = document.getElementById("fibres");
  const choisie = cible && MATIERES.find((m) => slug(m.nom) === cible);
  let f = "", q = choisie ? choisie.nom : "";
  if (choisie) app.querySelector(".search").value = choisie.nom;
  const nomFam = (id) => FAMILLES_MATIERES.find((x) => x.id === id).nom;
  const draw = (annonce = false) => {
    const s = q.trim().toLowerCase();
    const liste = MATIERES.filter((m) => (!f || m.famille === f) && (m.nom + " " + m.bref + " " + m.usage).toLowerCase().includes(s));
    if (annonce) annoncer(pluriel(liste.length, "matière") + " affichée(s)");
    list.innerHTML = liste.length ? liste.map((m) => `
      <article class="fibre reveal">
        <div class="fibre-top"><span class="label">${nomFam(m.famille)}</span><span class="rating">${jauge(m.note)}<span class="fibre-note"><span aria-hidden="true">${m.note}/5</span><span class="sr-only">intérêt ${m.note} sur 5</span></span></span></div>
        <h2 class="fibre-titre"><a class="fibre-lien" href="#/matiere/${slug(m.nom)}">${esc(m.nom)}</a></h2>
        <p class="fibre-bref">${esc(m.bref)}</p>
        <dl>
          <dt>Qualités</dt><dd>${esc(m.plus)}</dd>
          <dt>Faiblesses</dt><dd>${esc(m.moins)}</dd>
          <dt>Idéal pour</dt><dd>${esc(m.usage)}</dd>
          <dt>Entretien</dt><dd>${esc(m.entretien)}</dd>
        </dl>
        <span class="fibre-more" aria-hidden="true">Fiche complète →</span>
      </article>`).join("") : `<p class="empty">Aucune matière trouvée.</p>`;
    reveal(list);
  };
  draw();
  app.querySelector(".search").addEventListener("input", (e) => { q = e.target.value; draw(true); });
  document.querySelectorAll("#mat-filters .chip").forEach((c) => c.addEventListener("click", () => {
    activerChip(document.querySelectorAll("#mat-filters .chip"), c);
    f = c.dataset.f;
    draw(true);
  }));
  reveal();
}

// ---------- L'art d'acheter ----------
const LEXIQUE = [
  ["Grammage", "Poids du tissu au mètre carré (g/m²). Plus il est élevé, plus le tissu est épais et généralement durable."],
  ["Boulochage", "Petites boules de fibres qui se forment par frottement. Fréquent avec les fibres courtes et les synthétiques."],
  ["Coton peigné", "Coton dont on a retiré les fibres courtes avant de filer : plus doux et plus solide."],
  ["Fibres longues", "Coton dont les fibres dépassent 3,5 cm (Supima, Pima, égyptien) : plus fin, plus résistant."],
  ["Mercerisé", "Coton traité pour être plus lisse, brillant et résistant (fil d'Écosse)."],
  ["Laine vierge", "Laine utilisée pour la première fois, non recyclée."],
  ["Super 100's, 120's…", "Indice de finesse de la laine. Plus il est élevé, plus la laine est fine et fragile."],
  ["Entoilage", "Toile cousue à l'intérieur d'une veste pour lui donner forme. Mieux que le thermocollage (toile collée)."],
  ["Thermocollage", "Toile collée à chaud à l'intérieur d'une veste. Moins cher, plus rigide, peut faire des bulles."],
  ["Montage Goodyear", "Semelle cousue sur une bande de cuir (trépointe) : chaussure solide et ressemelable."],
  ["Montage Blake", "Semelle cousue directement à la tige : chaussure fine et ressemelable."],
  ["Pleine fleur", "Cuir dont la surface naturelle est intacte : le plus solide et le plus beau en vieillissant."],
  ["Tannage végétal", "Transformation de la peau en cuir avec des extraits d'écorces : cuir ferme qui se patine."],
  ["Selvedge", "Lisière propre d'un denim tissé sur un ancien métier à navette."],
  ["Denim brut", "Jean non lavé après tissage, qui se patine selon vos mouvements."],
  ["Once (oz)", "Unité de poids du denim. 12 à 16 oz = jean robuste."],
  ["Pouvoir gonflant (cuin)", "Capacité du duvet à gonfler : 600 est bon, 800 est excellent."],
  ["Denier", "Épaisseur du fil d'un collant : plus il est élevé, plus il est opaque et solide."],
  ["Déperlant", "Traitement qui fait perler l'eau. Différent d'imperméable, qui bloque totalement l'eau."],
  ["Respirant", "Qui laisse s'échapper la vapeur de transpiration."],
  ["Maille / tissu", "La maille est tricotée (t-shirt, pull) et s'étire ; le tissu est tissé (chemise, jean) et s'étire peu."]
];

function renderConseils() {
  setActiveNav("conseils");
  document.title = "L'art d'acheter — Bien Vêtu";
  const chapitres = [
    ["Lire l'étiquette", `<p>La composition est le premier indice de qualité. Privilégiez les fibres naturelles (coton, laine, lin) et méfiez-vous des pulls ou manteaux riches en acrylique ou en polyester. Pour un manteau, visez au moins 70 % de laine. L'étiquette indique aussi le pays de fabrication : ce n'est pas un gage de qualité à lui seul, mais il renseigne sur la chaîne de production.</p>`],
    ["Toucher, observer", `<ul>
        <li><strong>Le poids</strong> : un tissu plus dense est généralement plus durable.</li>
        <li><strong>La transparence</strong> : face à la lumière, un tissu trop fin trahit une usure rapide.</li>
        <li><strong>Les coutures</strong> : serrées, droites, sans fil qui dépasse. Tirez légèrement : elles ne doivent pas s'écarter.</li>
        <li><strong>L'élasticité</strong> : une maille de qualité reprend sa forme après avoir été étirée.</li>
        <li><strong>Les finitions</strong> : boutons bien cousus, fermetures en métal, intérieur propre.</li>
      </ul>`],
    ["Penser coût par port", `<p>Un pull à 120 € porté 200 fois revient à 0,60 € par port. Un pull à 25 € porté 15 fois avant de boulocher revient à 1,70 €. Le bon achat n'est pas toujours le moins cher : divisez le prix par le nombre de fois où vous porterez la pièce.</p>`],
    ["Acheter au bon moment", `<ul>
        <li>Les soldes de janvier et de juillet ouvrent l'accès au budget supérieur.</li>
        <li>Outlets et ventes privées des belles maisons valent souvent mieux que le neuf bas de gamme.</li>
        <li>La seconde main est idéale pour les pièces durables : jeans bruts, manteaux de laine, souliers cousus Goodyear.</li>
      </ul>`],
    ["Prendre soin", `<ul>
        <li>Lavez moins souvent et à basse température : 30 °C suffit presque toujours.</li>
        <li>Évitez le sèche-linge, surtout pour la laine et le coton.</li>
        <li>Séchez les mailles à plat, suspendez les manteaux sur des cintres larges.</li>
        <li>Embauchoirs en cèdre et rotation des paires pour vos souliers.</li>
      </ul>`],
    ["Faire réparer", `<p>Un bouton, un ourlet, une semelle, une couture : la plupart des vêtements de qualité se réparent facilement. Beaucoup de marques (Patagonia, Nudie Jeans, Barbour, Levi's) proposent des réparations, et la France a mis en place un « bonus réparation » chez les cordonniers et retoucheurs labellisés.</p>`]
  ];
  app.innerHTML = `
    ${pageHead("Le savoir-faire", "L'art d'acheter", "Les bons réflexes pour reconnaître la qualité, et un lexique pour comprendre les termes techniques.")}
    <section class="section" style="padding-top:0">
      <div class="narrow">
        ${chapitres.map(([titre, corps], i) => `
          <article class="chapter reveal">
            <span class="big-num" aria-hidden="true">${ROMAINS[i]}.</span>
            <div><h2>${titre}</h2>${corps}</div>
          </article>`).join("")}
      </div>
    </section>
    <section class="section manifesto">
      <div class="narrow">
        <p class="quote reveal">« La qualité se souvient longtemps après que le prix est oublié. »</p>
      </div>
    </section>
    <section class="section">
      <div class="container">
        ${sectionHead("Pour tout comprendre", "Le <em>lexique</em>")}
        <dl class="lexique">
          ${LEXIQUE.map(([t, d]) => `<div class="lex reveal"><dt>${t}</dt><dd>${d}</dd></div>`).join("")}
        </dl>
      </div>
    </section>
    ${blocSources(["fabric_weight", "pilling", "super100", "canvassing", "goodyear", "blake", "selvedge", "fill_power", "tannage", "ademe", "refashion", "fastfashion", "modeethique", "fashionrev"])}
  `;
  reveal();
}

// ---------- Méthode ----------
function renderMethode() {
  setActiveNav("");
  document.title = "Notre méthode — Bien Vêtu";
  app.innerHTML = `
    ${pageHead("Transparence", "Notre méthode", "Comment nous classons les maisons et évaluons les matières.")}
    <section class="section" style="padding-top:0">
      <div class="narrow">
        <article class="chapter reveal">
          <span class="big-num" aria-hidden="true">I.</span>
          <div><h2>Trois budgets</h2><p>Chaque pièce est classée sur trois niveaux de prix, avec des fourchettes propres à chaque vêtement (un t-shirt et un manteau n'ont pas les mêmes prix). Une maison est comparée uniquement à celles de sa tranche de prix : un « S » en petit budget n'est pas comparable à un « S » en haut de gamme.</p></div>
        </article>
        <article class="chapter reveal">
          <span class="big-num" aria-hidden="true">II.</span>
          <div><h2>Quatre rangs</h2><ul>
            ${["S", "A", "B", "C"].map((t) => `<li><strong>${t} — ${TIER_NOMS[t]}</strong> : ${TIER_INFO[t].toLowerCase()}.</li>`).join("")}
          </ul></div>
        </article>
        <article class="chapter reveal">
          <span class="big-num" aria-hidden="true">III.</span>
          <div><h2>Cinq critères par maison</h2>
            ${CRITERES.map((c) => `
              <h3 class="scale-title">${c.nom} <span>— ${c.aide.toLowerCase()}</span></h3>
              <ol class="scale">${c.niveaux.map((n, i) => `<li><span class="scale-n">${i + 1}</span>${n}</li>`).join("")}</ol>`).join("")}<p>Chaque critère est noté sur 5 ; la note globale en est la moyenne. Une maison peut avoir une très bonne note globale et être classée « C » sur une pièce précise si son prix y est injustifié.</p></div>
        </article>
        <article class="chapter reveal">
          <span class="big-num" aria-hidden="true">IV.</span>
          <div><h2>Nos sources</h2><p>Les évaluations synthétisent des sources encyclopédiques sur les fibres et les techniques, les publications des organismes textiles et des labels, les tests de médias spécialisés et l'expérience partagée de communautés de passionnés. Elles constituent un avis éditorial général : la qualité d'une maison peut varier selon les modèles, les usines et les années. Vérifiez toujours la composition de la pièce que vous achetez.</p></div>
        </article>
        <article class="chapter reveal">
          <span class="big-num" aria-hidden="true">V.</span>
          <div><h2>Indépendance</h2><p>Bien Vêtu ne perçoit aucune commission et ne contient aucun lien affilié. Les marques citées n'ont ni payé ni été consultées.</p></div>
        </article>
      </div>
    </section>
    ${blocSources(Object.keys(SOURCES), "Toutes nos sources")}
  `;
  reveal();
}

// ---------- Accessibilité ----------
function renderAccessibilite() {
  setActiveNav("");
  document.title = "Accessibilité — Bien Vêtu";
  app.innerHTML = `
    ${pageHead("Engagement", "Accessibilité", "Bien Vêtu vise la conformité au niveau AA des règles WCAG 2.1, sur lesquelles s'appuie le RGAA en France.")}
    <section class="section" style="padding-top:0">
      <div class="narrow">
        <article class="chapter reveal">
          <span class="big-num" aria-hidden="true">I.</span>
          <div><h2>Mesures mises en place</h2><ul class="a11y-list">
            <li>Contrastes de couleurs d'au moins 4,5:1 pour le texte, renforcés si votre système demande un contraste élevé.</li>
            <li>Navigation complète au clavier, avec un indicateur de focus visible et un lien « Aller au contenu ».</li>
            <li>Onglets utilisables aux flèches du clavier, filtres et boutons annonçant leur état.</li>
            <li>Changements de page et résultats de recherche annoncés aux lecteurs d'écran.</li>
            <li>Structure de titres hiérarchisée, zones de navigation nommées, fil d'Ariane.</li>
            <li>Notes et jauges accompagnées d'un équivalent textuel.</li>
            <li>Animations désactivées si votre système demande de réduire les mouvements.</li>
            <li>Mise en page adaptée aux petits écrans et au zoom jusqu'à 200 %.</li>
          </ul></div>
        </article>
        <article class="chapter reveal">
          <span class="big-num" aria-hidden="true">II.</span>
          <div><h2>Limites connues</h2><p>Les liens vers des sources externes mènent à des sites dont nous ne maîtrisons pas l'accessibilité. Certaines sources sont en anglais.</p></div>
        </article>
        <article class="chapter reveal">
          <span class="big-num" aria-hidden="true">III.</span>
          <div><h2>Signaler un problème</h2><p>Si un contenu ou une fonction vous est inaccessible, signalez-le en ouvrant un ticket sur <a href="https://github.com/ede800/conseil-vetements/issues" target="_blank" rel="noopener">la page du projet sur GitHub<span class="sr-only"> (nouvel onglet)</span></a>. Nous vous proposerons une alternative et corrigerons le problème.</p></div>
        </article>
      </div>
    </section>
  `;
  reveal();
}

// ---------- Recherche globale ----------
const normaliser = (t) => t.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

const INDEX_RECHERCHE = [
  ...VETEMENTS.map((v) => ({
    groupe: "Pièces", titre: v.nom, sous: famille(v.famille).nom + " · " + v.resume, url: "#/vetement/" + v.id,
    texte: [v.nom, v.resume, ...v.matieres.map((m) => m.nom)].join(" ")
  })),
  ...MATIERES.map((m) => ({
    groupe: "Matières", titre: m.nom, sous: FAMILLES_MATIERES.find((f) => f.id === m.famille).nom + " · " + m.bref, url: "#/matiere/" + slug(m.nom),
    texte: [m.nom, m.bref, m.usage].join(" ")
  })),
  ...Object.keys(MARQUES).map((n) => ({
    groupe: "Maisons", titre: n, sous: `${MARQUES[n].pays} · ${GAMMES[MARQUES[n].gamme]} · ${fmt(MARQUES[n].moyenne)}/5`, url: "#/maison/" + slug(n),
    texte: [n, MARQUES[n].pays, INFOS[n]?.f || "", INFOS[n]?.ico || "", INFOS[n]?.g || ""].join(" ")
  })),
  ...LEXIQUE.map(([t, d]) => ({
    groupe: "Lexique", titre: t, sous: d, url: "#/conseils", texte: t + " " + d
  }))
].map((e) => ({ ...e, nTitre: normaliser(e.titre), nTexte: normaliser(e.texte) }));

function chercher(requete) {
  const mots = normaliser(requete).split(/s+/).filter(Boolean);
  if (!mots.length) return [];
  return INDEX_RECHERCHE
    .filter((e) => mots.every((m) => e.nTexte.includes(m) || e.nTitre.includes(m)))
    .map((e) => {
      const q = mots.join(" ");
      const score = e.nTitre === q ? 0 : e.nTitre.startsWith(q) ? 1 : mots.every((m) => e.nTitre.includes(m)) ? 2 : 3;
      return { e, score };
    })
    .sort((a, b) => a.score - b.score || a.e.titre.localeCompare(b.e.titre, "fr"))
    .map((r) => r.e);
}

(function initialiserRecherche() {
  const dialogue = document.getElementById("recherche");
  if (!dialogue || !dialogue.showModal) return;
  const champ = document.getElementById("gs-input");
  const resultats = document.getElementById("gs-results");
  const statut = document.getElementById("gs-status");
  const ordre = ["Pièces", "Matières", "Maisons", "Lexique"];
  const MAX = 8;
  let minuterie;
  let declencheur = null;

  const surligner = (texte, mots) => {
    let html = esc(texte);
    const n = normaliser(texte);
    const zones = [];
    mots.forEach((m) => { let i = n.indexOf(m); if (i >= 0) zones.push([i, i + m.length]); });
    if (!zones.length) return html;
    zones.sort((a, b) => b[0] - a[0]);
    let brut = texte;
    zones.forEach(([a, b]) => { brut = brut.slice(0, a) + "" + brut.slice(a, b) + "" + brut.slice(b); });
    return esc(brut).replace(//g, "<mark>").replace(//g, "</mark>");
  };

  const afficher = () => {
    const requete = champ.value.trim();
    if (!requete) { resultats.innerHTML = ""; statut.textContent = ""; return; }
    const liste = chercher(requete);
    const mots = normaliser(requete).split(/s+/).filter(Boolean);
    if (!liste.length) {
      resultats.innerHTML = `<p class="gs-empty">Aucun résultat pour « ${esc(requete)} ».</p>`;
      clearTimeout(minuterie);
      minuterie = setTimeout(() => { statut.textContent = "Aucun résultat"; }, 400);
      return;
    }
    resultats.innerHTML = ordre.map((g) => {
      const items = liste.filter((e) => e.groupe === g);
      if (!items.length) return "";
      return `
        <section class="gs-group" aria-labelledby="gs-${slug(g)}">
          <h3 id="gs-${slug(g)}" class="label">${g} <span>(${items.length})</span></h3>
          <ul>
            ${items.slice(0, MAX).map((e) => `
              <li><a href="${e.url}"><span class="gs-title">${surligner(e.titre, mots)}</span><span class="gs-sub">${esc(e.sous)}</span></a></li>`).join("")}
          </ul>
          ${items.length > MAX && g === "Maisons" ? `<a class="gs-more" href="#/maisons">Voir les ${items.length} maisons dans l'annuaire</a>` : ""}
          ${items.length > MAX && g !== "Maisons" ? `<p class="gs-more">… et ${items.length - MAX} autre(s) : précisez votre recherche.</p>` : ""}
        </section>`;
    }).join("");
    clearTimeout(minuterie);
    minuterie = setTimeout(() => { statut.textContent = pluriel(liste.length, "résultat"); }, 400);
  };

  const ouvrir = () => {
    if (dialogue.open) return;
    declencheur = document.activeElement;
    dialogue.showModal();
    champ.focus();
    champ.select();
  };

  document.querySelectorAll(".search-toggle").forEach((b) => b.addEventListener("click", ouvrir));
  dialogue.querySelector(".gs-close").addEventListener("click", () => dialogue.close());
  // À la fermeture, le focus revient là où il était (sauf si un résultat a changé de page)
  dialogue.addEventListener("close", () => {
    setTimeout(() => {
      const perdu = !document.activeElement || document.activeElement === document.body || dialogue.contains(document.activeElement);
      if (perdu && declencheur && document.contains(declencheur)) declencheur.focus();
    }, 0);
  });
  champ.addEventListener("input", afficher);
  dialogue.querySelectorAll(".gs-hint button").forEach((b) => b.addEventListener("click", () => {
    champ.value = b.dataset.q;
    afficher();
    champ.focus();
  }));
  // Un clic sur un résultat ferme la fenêtre ; le changement de page place le focus sur le titre
  resultats.addEventListener("click", (e) => { if (e.target.closest("a")) dialogue.close(); });
  // Clic sur le fond assombri : fermeture
  dialogue.addEventListener("click", (e) => { if (e.target === dialogue) dialogue.close(); });
  // Entrée dans le champ : ouvre le premier résultat
  champ.addEventListener("keydown", (e) => {
    // Échap ferme directement (sinon le champ de recherche se contente de se vider)
    if (e.key === "Escape") { e.preventDefault(); dialogue.close(); return; }
    if (e.key !== "Enter") return;
    const premier = resultats.querySelector("a");
    if (premier) { e.preventDefault(); dialogue.close(); location.hash = premier.getAttribute("href"); }
  });
  // Raccourcis : « / » ou Ctrl+K
  document.addEventListener("keydown", (e) => {
    const saisie = /^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement.tagName);
    if ((e.key === "/" && !saisie) || ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k")) {
      e.preventDefault();
      ouvrir();
    }
  });
})();

// ---------- Routeur ----------
function route() {
  const parts = location.hash.replace(/^#\/?/, "").split("/");
  window.scrollTo(0, 0);
  app.style.animation = "none";
  void app.offsetWidth;
  app.style.animation = "";
  const [page, param, sous] = parts;
  if (page === "vetement" && param) renderVetement(param, sous);
  else if (page === "maison" && param) renderMaison(param);
  else if (page === "maisons") renderMaisons();
  else if (page === "matieres") renderMatieres(param);
  else if (page === "matiere" && param) renderMatiere(param);
  else if (page === "conseils") renderConseils();
  else if (page === "methode") renderMethode();
  else if (page === "accessibilite") renderAccessibilite();
  else renderHome();
}

// Lien d'évitement : place le focus sur le contenu sans modifier l'adresse
document.querySelector(".skip-link").addEventListener("click", (e) => {
  e.preventDefault();
  app.focus();
});

window.addEventListener("hashchange", () => {
  route();
  // Déplace le focus sur le titre de la nouvelle page pour les lecteurs d'écran et le clavier
  const h1 = app.querySelector("h1");
  if (h1) { h1.setAttribute("tabindex", "-1"); h1.focus({ preventScroll: true }); }
});
route();
