// Navigation par hash (#/, #/vetement/<id>, #/matieres, #/conseils) — compatible GitHub Pages.

const app = document.getElementById("app");

const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
}[c]));

function setActiveNav(name) {
  document.querySelectorAll("[data-nav]").forEach((a) => {
    a.classList.toggle("active", a.dataset.nav === name);
  });
}

// --- Accueil : liste des vêtements ---
function renderHome() {
  setActiveNav("accueil");
  document.title = "Bien Vêtu — Guide d'achat de vêtements";
  app.innerHTML = `
    <section class="hero">
      <h1>Acheter mieux, pas plus.</h1>
      <p>Pour chaque vêtement : les matières à privilégier et pourquoi, puis les meilleures marques selon votre budget.</p>
    </section>
    <input class="search" type="search" placeholder="Rechercher un vêtement…" aria-label="Rechercher un vêtement">
    <div class="grid" id="grid"></div>
  `;
  const grid = document.getElementById("grid");
  const draw = (q = "") => {
    const n = q.trim().toLowerCase();
    const list = VETEMENTS.filter((v) => (v.nom + " " + v.resume).toLowerCase().includes(n));
    grid.innerHTML = list.length
      ? list.map((v) => `
          <a class="card" href="#/vetement/${v.id}">
            <div class="icon" aria-hidden="true">${v.icone}</div>
            <h3>${esc(v.nom)}</h3>
            <p>${esc(v.resume)}</p>
          </a>`).join("")
      : `<p class="empty">Aucun vêtement trouvé.</p>`;
  };
  draw();
  app.querySelector(".search").addEventListener("input", (e) => draw(e.target.value));
}

// --- Page d'un vêtement ---
function renderVetement(id, tab = "matieres", budget = "moyen") {
  const v = VETEMENTS.find((x) => x.id === id);
  if (!v) return renderHome();
  setActiveNav("accueil");
  document.title = `${v.nom} — Bien Vêtu`;

  app.innerHTML = `
    <a class="back" href="#/">← Tous les vêtements</a>
    <div class="detail-head">
      <h1>${v.icone} ${esc(v.nom)}</h1>
      <p>${esc(v.resume)}</p>
    </div>
    <div class="tabs" role="tablist">
      <button class="tab" data-tab="matieres" role="tab">Matières conseillées</button>
      <button class="tab" data-tab="marques" role="tab">Tier list des marques</button>
    </div>
    <div id="tab-content"></div>
  `;

  const content = document.getElementById("tab-content");

  const showMatieres = () => {
    content.innerHTML = `
      <h2 class="section-title">Quelles matières choisir ?</h2>
      <div class="materials">
        ${v.matieres.map((m) => `
          <div class="material">
            <h3>${esc(m.nom)}</h3>
            <p>${esc(m.pourquoi)}</p>
          </div>`).join("")}
      </div>
      <div class="two-cols">
        <div class="box avoid">
          <h3>À éviter</h3>
          <ul>${v.eviter.map((e) => `<li>${esc(e)}</li>`).join("")}</ul>
        </div>
        <div class="box tips">
          <h3>Astuces</h3>
          <ul>${v.astuces.map((a) => `<li>${esc(a)}</li>`).join("")}</ul>
        </div>
      </div>
    `;
  };

  const showMarques = (b) => {
    budget = b;
    const tiers = v.tiers[b];
    content.innerHTML = `
      <h2 class="section-title">Quelle marque pour votre budget ?</h2>
      <div class="budget-switch" role="group" aria-label="Budget">
        ${BUDGETS.map((x) => `
          <button class="budget-btn ${x.id === b ? "active" : ""}" data-budget="${x.id}">
            ${x.label}<small>${esc(v.budgets[x.id])}</small>
          </button>`).join("")}
      </div>
      <div class="tierlist">
        ${["S", "A", "B", "C"].filter((t) => tiers[t]?.length).map((t) => `
          <div class="tier tier-${t}">
            <div class="tier-label">${t}</div>
            <div class="tier-body">
              <div class="tier-desc">${TIER_INFO[t]}</div>
              <div class="brands">
                ${tiers[t].map(([nom, note]) => `
                  <div class="brand"><strong>${esc(nom)}</strong><span>${esc(note)}</span></div>`).join("")}
              </div>
            </div>
          </div>`).join("")}
      </div>
    `;
    content.querySelectorAll(".budget-btn").forEach((btn) =>
      btn.addEventListener("click", () => showMarques(btn.dataset.budget)));
  };

  const select = (t) => {
    tab = t;
    app.querySelectorAll(".tab").forEach((b) => {
      const on = b.dataset.tab === t;
      b.classList.toggle("active", on);
      b.setAttribute("aria-selected", on);
    });
    t === "marques" ? showMarques(budget) : showMatieres();
  };

  app.querySelectorAll(".tab").forEach((b) => b.addEventListener("click", () => select(b.dataset.tab)));
  select(tab);
}

// --- Guide des matières ---
function renderMatieres() {
  setActiveNav("matieres");
  document.title = "Matières — Bien Vêtu";
  const types = ["Toutes", "Naturelle", "Artificielle", "Synthétique"];
  app.innerHTML = `
    <section class="hero">
      <h1>Le guide des matières</h1>
      <p>Naturelles, artificielles (issues de la cellulose) ou synthétiques (issues du pétrole) : ce qu'il faut savoir sur chaque fibre.</p>
    </section>
    <div class="filters">
      ${types.map((t, i) => `<button class="chip ${i === 0 ? "active" : ""}" data-type="${t}">${t}s</button>`).join("")}
    </div>
    <div class="materials" id="mat-list"></div>
  `;
  const list = document.getElementById("mat-list");
  const stars = (n) => "★".repeat(n) + `<span class="off">${"★".repeat(5 - n)}</span>`;
  const draw = (type) => {
    list.innerHTML = MATIERES.filter((m) => type === "Toutes" || m.type === type).map((m) => `
      <div class="material mat-card">
        <h3>${esc(m.nom)} <span class="stars" aria-label="${m.note} sur 5">${stars(m.note)}</span></h3>
        <div class="mat-type">${esc(m.type)}</div>
        <dl>
          <dt>Points forts</dt><dd>${esc(m.plus)}</dd>
          <dt>Points faibles</dt><dd>${esc(m.moins)}</dd>
          <dt>Idéal pour</dt><dd>${esc(m.usage)}</dd>
        </dl>
      </div>`).join("");
  };
  draw("Toutes");
  app.querySelectorAll(".chip").forEach((c) => c.addEventListener("click", () => {
    app.querySelectorAll(".chip").forEach((x) => x.classList.toggle("active", x === c));
    draw(c.dataset.type);
  }));
}

// --- Conseils généraux ---
function renderConseils() {
  setActiveNav("conseils");
  document.title = "Conseils — Bien Vêtu";
  app.innerHTML = `
    <article class="prose">
      <section class="hero">
        <h1>Bien acheter, en 5 réflexes</h1>
        <p>Quelques habitudes simples pour reconnaître un vêtement de qualité et éviter les mauvais achats.</p>
      </section>

      <h2>1. Lisez toujours l'étiquette</h2>
      <p>La composition est le premier indice de qualité. Privilégiez les fibres naturelles (coton, laine, lin) et méfiez-vous des pulls ou manteaux contenant beaucoup d'acrylique ou de polyester. Sur un manteau, visez au moins 70 % de laine.</p>

      <h2>2. Touchez et observez</h2>
      <ul>
        <li><strong>Le poids</strong> : un tissu plus épais est généralement plus durable.</li>
        <li><strong>La transparence</strong> : tenez le tissu face à la lumière ; s'il est très transparent, il s'usera vite.</li>
        <li><strong>Les coutures</strong> : serrées, droites, sans fils qui dépassent. Tirez légèrement dessus : elles ne doivent pas s'écarter.</li>
        <li><strong>L'élasticité</strong> : une maille doit reprendre sa forme après avoir été étirée.</li>
      </ul>

      <h2>3. Pensez coût par port</h2>
      <p>Un pull à 120 € porté 200 fois revient à 0,60 € par port. Un pull à 25 € porté 15 fois avant de boulocher revient à 1,70 €. Le bon achat n'est pas toujours le moins cher.</p>

      <h2>4. Achetez au bon moment</h2>
      <ul>
        <li>Les soldes (janvier et juillet en France) permettent d'accéder au budget supérieur.</li>
        <li>Les outlets et ventes privées des marques de qualité sont souvent plus intéressants que le neuf bas de gamme.</li>
        <li>La seconde main (Vinted, friperies) est idéale pour les pièces durables : jeans, manteaux en laine, chaussures cousues Goodyear.</li>
      </ul>

      <h2>5. Entretenez vos vêtements</h2>
      <ul>
        <li>Lavez moins souvent et à basse température (30 °C suffit la plupart du temps).</li>
        <li>Évitez le sèche-linge, surtout pour la laine et le coton.</li>
        <li>Séchez les pulls à plat et suspendez les manteaux sur des cintres larges.</li>
        <li>Utilisez des embauchoirs pour vos chaussures et alternez les paires.</li>
      </ul>
    </article>
  `;
}

// --- Routeur ---
function route() {
  const parts = location.hash.replace(/^#\/?/, "").split("/");
  window.scrollTo(0, 0);
  if (parts[0] === "vetement" && parts[1]) renderVetement(parts[1]);
  else if (parts[0] === "matieres") renderMatieres();
  else if (parts[0] === "conseils") renderConseils();
  else renderHome();
}

window.addEventListener("hashchange", route);
route();
