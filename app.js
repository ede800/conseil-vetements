// Navigation par hash — compatible GitHub Pages.
// #/  #/vetement/<id>  #/matieres  #/maisons  #/maison/<slug>  #/conseils  #/methode

const app = document.getElementById("app");
const ROMAINS = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"];
const CRITERES = [
  { nom: "Matières", aide: "Qualité des fibres et des cuirs utilisés" },
  { nom: "Confection", aide: "Coutures, finitions, construction" },
  { nom: "Durabilité", aide: "Tenue dans le temps, réparabilité" },
  { nom: "Rapport qualité-prix", aide: "Ce que l'on obtient pour le prix payé" },
  { nom: "Éthique & transparence", aide: "Conditions de production, environnement, traçabilité" }
];
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
  document.querySelectorAll("[data-nav]").forEach((a) => a.classList.toggle("active", a.dataset.nav === name));
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
      <span class="ornament"></span>
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

function blocSources(cles, titre = "Sources") {
  const uniques = [...new Set(cles)].filter((k) => SOURCES[k]);
  if (!uniques.length) return "";
  return `
    <section class="sources">
      <div class="container">
        <div class="label">${titre}</div>
        <ol>
          ${uniques.map((k) => {
            const [t, url] = SOURCES[k];
            const domaine = new URL(url).hostname.replace(/^www\./, "");
            return `<li><a href="${url}" target="_blank" rel="noopener">${esc(t)}</a> <span>${domaine}</span></li>`;
          }).join("")}
        </ol>
        <p class="sources-note">Les classements de marques sont une synthèse éditoriale fondée sur ces sources, les retours de communautés spécialisées et l'examen des compositions et méthodes de fabrication. Voir <a href="#/methode">notre méthode</a>.</p>
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
        <div class="filters reveal" id="fam-filters">
          <button class="chip active" data-fam="">Toutes</button>
          ${FAMILLES.map((f) => `<button class="chip" data-fam="${f.id}">${f.nom}</button>`).join("")}
        </div>
        <div class="search-wrap reveal">
          <input class="search" type="search" placeholder="Rechercher une pièce" aria-label="Rechercher une pièce">
        </div>
        <div id="index"></div>
      </div>
    </section>

    <section class="trio">
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
  const draw = () => {
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
    reveal(index);
  };
  draw();
  app.querySelector(".search").addEventListener("input", (e) => { q = e.target.value; draw(); });
  document.querySelectorAll("#fam-filters .chip").forEach((c) => c.addEventListener("click", () => {
    document.querySelectorAll("#fam-filters .chip").forEach((x) => x.classList.toggle("active", x === c));
    fam = c.dataset.fam;
    draw();
  }));
  document.getElementById("to-pieces").addEventListener("click", () =>
    document.getElementById("pieces").scrollIntoView({ behavior: "smooth" }));
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
    <div class="crumbs label"><a href="#/">Les pièces</a> &nbsp;/&nbsp; ${famille(v.famille).nom} &nbsp;/&nbsp; ${esc(v.nom)}</div>
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
    <div class="tabs" role="tablist">
      <button class="tab" data-tab="matieres" role="tab"><span class="roman">I.</span>Les matières</button>
      <button class="tab" data-tab="marques" role="tab"><span class="roman">II.</span>Les maisons</button>
    </div>
    <section class="section"><div class="container" id="panel"></div></section>
    ${blocSources([...v.sources, ...SOURCES_MARQUES])}
    <nav class="piece-nav">
      <a href="#/vetement/${prev.id}"><span class="label">← Pièce précédente</span><span class="pn-name">${esc(prev.nom)}</span></a>
      <a href="#/vetement/${next.id}"><span class="label">Pièce suivante →</span><span class="pn-name">${esc(next.nom)}</span></a>
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
              <p>${esc(m.pourquoi)}</p>
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
        <div class="house-meta"><span>${esc(m.pays)}</span><span>${fmt(m.moyenne)} / 5</span></div>
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
                <span class="tier-letter">${t}</span>
                <div>
                  <div class="tier-title">${TIER_NOMS[t]}</div>
                  <div class="tier-sub">${TIER_INFO[t]}</div>
                </div>
              </div>
              <div class="houses">${tiers[t].map(maison).join("")}</div>
            </div>`).join("")}
        </div>
      </div>`;
    panel.querySelectorAll(".budget-btn").forEach((btn) =>
      btn.addEventListener("click", () => { budget = btn.dataset.budget; showMarques(); }));
    reveal(panel);
  };

  const select = (t) => {
    app.querySelectorAll(".tab").forEach((b) => {
      const on = b.dataset.tab === t;
      b.classList.toggle("active", on);
      b.setAttribute("aria-selected", on);
    });
    t === "marques" ? showMarques() : showMatieres();
  };

  app.querySelectorAll(".tab").forEach((b) => b.addEventListener("click", () => select(b.dataset.tab)));
  select(onglet === "maisons" ? "marques" : "matieres");
  reveal();
}

// ---------- Fiche d'une maison ----------
function renderMaison(s) {
  const nom = SLUGS[s];
  if (!nom) return renderMaisons();
  const m = MARQUES[nom];
  const classements = CLASSEMENTS[nom];
  setActiveNav("maisons");
  document.title = `${nom} — Bien Vêtu`;

  const compte = { S: 0, A: 0, B: 0, C: 0 };
  classements.forEach((c) => compte[c.tier]++);

  app.innerHTML = `
    <div class="crumbs label"><a href="#/maisons">Les maisons</a> &nbsp;/&nbsp; ${esc(nom)}</div>
    ${pageHead(`${esc(m.pays)} · ${GAMMES[m.gamme]}`, esc(nom), esc(m.desc))}

    <section class="section brand-score-wrap" style="padding-top:0">
      <div class="container brand-grid">
        <div class="score-card reveal">
          <div class="label">Note globale</div>
          <div class="score-big">${fmt(m.moyenne)}<small>/ 5</small></div>
          <div class="score-verdict">${verdict(m.moyenne)}</div>
          <div class="score-meta">
            <div><span class="label">Origine</span>${esc(m.pays)}</div>
            <div><span class="label">Gamme</span>${m.gamme} · ${GAMMES[m.gamme]}</div>
          </div>
        </div>
        <div class="criteria reveal">
          <div class="label">Évaluation détaillée</div>
          ${CRITERES.map((c, i) => `
            <div class="criterion">
              <div class="crit-text"><strong>${c.nom}</strong><span>${c.aide}</span></div>
              ${jauge(m.notes[i])}
              <span class="crit-val">${m.notes[i]}/5</span>
            </div>`).join("")}
        </div>
      </div>
    </section>

    <section class="section manifesto">
      <div class="container notes notes-dark">
        <div class="note-block tips reveal">
          <div class="label">Ce que nous apprécions</div>
          <h3>Points forts</h3>
          <ul><li>${esc(m.forts)}</li></ul>
        </div>
        <div class="note-block avoid reveal">
          <div class="label">Ce qui nous retient</div>
          <h3>Points faibles</h3>
          <ul><li>${esc(m.faibles)}</li></ul>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        ${sectionHead("Dans nos classements", `Présente dans <em>${classements.length}</em> classement${classements.length > 1 ? "s" : ""}`)}
        <div class="tier-count reveal">
          ${["S", "A", "B", "C"].map((t) => `<div class="tc tier-${t}"><span class="tier-letter">${t}</span><span>${compte[t]} × ${TIER_NOMS[t]}</span></div>`).join("")}
        </div>
        <ul class="rank-list">
          ${classements.map((c) => `
            <li class="rank-row reveal tier-${c.tier}">
              <span class="tier-letter">${c.tier}</span>
              <a href="#/vetement/${c.v.id}" class="rank-piece">${esc(c.v.nom)}${c.nom !== nom ? ` <small>(${esc(c.nom.replace(nom, "").replace(/[()]/g, "").trim() || c.nom)})</small>` : ""}</a>
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
        <div class="filters" id="gamme-filters">
          <button class="chip active" data-g="">Toutes</button>
          ${Object.entries(GAMMES).map(([g, n]) => `<button class="chip" data-g="${g}">${g} ${n}</button>`).join("")}
        </div>
        <div class="dir-tools">
          <input class="search" type="search" placeholder="Rechercher une maison ou un pays" aria-label="Rechercher une maison">
          <select class="sort" aria-label="Trier">
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
        <span class="dir-name">${esc(n)}</span>
        <span class="dir-meta">${esc(m.pays)} · ${m.gamme}</span>
        <span class="dir-score">${fmt(m.moyenne)}</span>
      </a>`;
  };
  const draw = () => {
    const s = q.trim().toLowerCase();
    let liste = noms.filter((n) => (!g || MARQUES[n].gamme === g) && (n + " " + MARQUES[n].pays).toLowerCase().includes(s));
    if (!liste.length) { dir.innerHTML = `<p class="empty">Aucune maison trouvée.</p>`; return; }
    if (tri === "note") {
      liste = liste.sort((a, b) => MARQUES[b].moyenne - MARQUES[a].moyenne);
      dir.innerHTML = `<div class="dir-grid">${liste.map(carte).join("")}</div>`;
      return;
    }
    const groupes = {};
    liste.forEach((n) => (groupes[lettre(n)] ||= []).push(n));
    dir.innerHTML = `
      <nav class="letters">${Object.keys(groupes).map((l) => `<a href="#" data-l="${l}">${l}</a>`).join("")}</nav>
      ${Object.entries(groupes).map(([l, ns]) => `
        <div class="dir-letter" id="lettre-${l === "#" ? "num" : l}">
          <h3>${l}</h3>
          <div class="dir-grid">${ns.map(carte).join("")}</div>
        </div>`).join("")}`;
    dir.querySelectorAll(".letters a").forEach((a) => a.addEventListener("click", (e) => {
      e.preventDefault();
      document.getElementById("lettre-" + (a.dataset.l === "#" ? "num" : a.dataset.l)).scrollIntoView({ behavior: "smooth" });
    }));
  };
  draw();
  app.querySelector(".search").addEventListener("input", (e) => { q = e.target.value; draw(); });
  app.querySelector(".sort").addEventListener("change", (e) => { tri = e.target.value; draw(); });
  document.querySelectorAll("#gamme-filters .chip").forEach((c) => c.addEventListener("click", () => {
    document.querySelectorAll("#gamme-filters .chip").forEach((x) => x.classList.toggle("active", x === c));
    g = c.dataset.g;
    draw();
  }));
  reveal();
}

// ---------- Guide des matières ----------
function renderMatieres() {
  setActiveNav("matieres");
  document.title = "Les matières — Bien Vêtu";
  app.innerHTML = `
    ${pageHead("Le guide", "Les matières", `${MATIERES.length} fibres, cuirs et étoffes : ce qu'il faut savoir de chacun, en termes simples.`)}
    <section class="section" style="padding-top:0">
      <div class="container">
        <div class="legend reveal">
          <p><strong>Végétales et animales</strong> : fibres naturelles (coton, lin, laine…). <strong>Artificielles</strong> : fabriquées à partir de bois ou de cellulose (viscose, lyocell…). <strong>Synthétiques</strong> : issues du pétrole (polyester, nylon…). Les <strong>étoffes</strong> désignent la façon dont le fil est tissé ou tricoté (jersey, denim, flanelle…).</p>
        </div>
        <div class="filters" id="mat-filters">
          <button class="chip active" data-f="">Toutes</button>
          ${FAMILLES_MATIERES.map((f) => `<button class="chip" data-f="${f.id}">${f.nom}</button>`).join("")}
        </div>
        <div class="search-wrap"><input class="search" type="search" placeholder="Rechercher une matière" aria-label="Rechercher une matière"></div>
        <div class="fibres" id="fibres"></div>
      </div>
    </section>
    ${blocSources(MATIERES.flatMap((m) => m.sources))}
  `;
  const list = document.getElementById("fibres");
  let f = "", q = "";
  const nomFam = (id) => FAMILLES_MATIERES.find((x) => x.id === id).nom;
  const draw = () => {
    const s = q.trim().toLowerCase();
    const liste = MATIERES.filter((m) => (!f || m.famille === f) && (m.nom + " " + m.bref + " " + m.usage).toLowerCase().includes(s));
    list.innerHTML = liste.length ? liste.map((m) => `
      <article class="fibre reveal">
        <div class="fibre-top"><span class="label">${nomFam(m.famille)}</span><span class="rating" aria-label="Note ${m.note} sur 5">${jauge(m.note)}</span></div>
        <h3>${esc(m.nom)}</h3>
        <p class="fibre-bref">${esc(m.bref)}</p>
        <dl>
          <dt>Qualités</dt><dd>${esc(m.plus)}</dd>
          <dt>Faiblesses</dt><dd>${esc(m.moins)}</dd>
          <dt>Idéal pour</dt><dd>${esc(m.usage)}</dd>
          <dt>Entretien</dt><dd>${esc(m.entretien)}</dd>
        </dl>
      </article>`).join("") : `<p class="empty">Aucune matière trouvée.</p>`;
    reveal(list);
  };
  draw();
  app.querySelector(".search").addEventListener("input", (e) => { q = e.target.value; draw(); });
  document.querySelectorAll("#mat-filters .chip").forEach((c) => c.addEventListener("click", () => {
    document.querySelectorAll("#mat-filters .chip").forEach((x) => x.classList.toggle("active", x === c));
    f = c.dataset.f;
    draw();
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
            <span class="big-num">${ROMAINS[i]}.</span>
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
          <span class="big-num">I.</span>
          <div><h2>Trois budgets</h2><p>Chaque pièce est classée sur trois niveaux de prix, avec des fourchettes propres à chaque vêtement (un t-shirt et un manteau n'ont pas les mêmes prix). Une maison est comparée uniquement à celles de sa tranche de prix : un « S » en petit budget n'est pas comparable à un « S » en haut de gamme.</p></div>
        </article>
        <article class="chapter reveal">
          <span class="big-num">II.</span>
          <div><h2>Quatre rangs</h2><ul>
            ${["S", "A", "B", "C"].map((t) => `<li><strong>${t} — ${TIER_NOMS[t]}</strong> : ${TIER_INFO[t].toLowerCase()}.</li>`).join("")}
          </ul></div>
        </article>
        <article class="chapter reveal">
          <span class="big-num">III.</span>
          <div><h2>Cinq critères par maison</h2><ul>
            ${CRITERES.map((c) => `<li><strong>${c.nom}</strong> : ${c.aide.toLowerCase()}.</li>`).join("")}
          </ul><p>Chaque critère est noté sur 5 ; la note globale en est la moyenne. Une maison peut avoir une très bonne note globale et être classée « C » sur une pièce précise si son prix y est injustifié.</p></div>
        </article>
        <article class="chapter reveal">
          <span class="big-num">IV.</span>
          <div><h2>Nos sources</h2><p>Les évaluations synthétisent des sources encyclopédiques sur les fibres et les techniques, les publications des organismes textiles et des labels, les tests de médias spécialisés et l'expérience partagée de communautés de passionnés. Elles constituent un avis éditorial général : la qualité d'une maison peut varier selon les modèles, les usines et les années. Vérifiez toujours la composition de la pièce que vous achetez.</p></div>
        </article>
        <article class="chapter reveal">
          <span class="big-num">V.</span>
          <div><h2>Indépendance</h2><p>Bien Vêtu ne perçoit aucune commission et ne contient aucun lien affilié. Les marques citées n'ont ni payé ni été consultées.</p></div>
        </article>
      </div>
    </section>
    ${blocSources(Object.keys(SOURCES), "Toutes nos sources")}
  `;
  reveal();
}

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
  else if (page === "matieres") renderMatieres();
  else if (page === "conseils") renderConseils();
  else if (page === "methode") renderMethode();
  else renderHome();
}

window.addEventListener("hashchange", route);
route();
