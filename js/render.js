/* =========================================================
   render.js — Monta as seções dinâmicas a partir do data.js
   (tags, projetos, filtros, timeline e serviços).
   ========================================================= */

window.RenderModule = {
  init() {
    this.renderTags();
    this.renderProjects();
    this.renderTimeline();
    this.renderServices();
  },

  renderTags() {
    const wrap = document.getElementById("skillTags");
    if (!wrap) return;
    wrap.innerHTML = SITE_DATA.skillTags
      .map((t) => `<span class="tag reveal">${t}</span>`)
      .join("");
  },

  renderProjects() {
    const grid = document.getElementById("projectsGrid");
    const filters = document.getElementById("projectFilters");
    if (!grid) return;

    // Filtros únicos a partir das categorias
    const cats = ["Todos", ...new Set(SITE_DATA.projects.map((p) => p.category))];
    if (filters) {
      filters.innerHTML = cats
        .map(
          (c, i) =>
            `<button class="filter-btn ${i === 0 ? "is-active" : ""}" data-filter="${c}">${c}</button>`
        )
        .join("");
    }

    const cardHTML = (p) => `
      <article class="project-card reveal" data-cat="${p.category}">
        <div class="project-card__cover"><span>${p.icon}</span></div>
        <div class="project-card__body">
          <span class="project-card__cat">${p.category}</span>
          <h3 class="project-card__title">${p.title}</h3>
          <p class="project-card__desc">${p.desc}</p>
          <div class="project-card__stack">
            ${p.stack.map((s) => `<span>${s}</span>`).join("")}
          </div>
          <div class="project-card__result">📈 <b>${p.result}</b></div>
        </div>
      </article>`;

    const paint = (filter) => {
      const list =
        filter === "Todos"
          ? SITE_DATA.projects
          : SITE_DATA.projects.filter((p) => p.category === filter);
      grid.innerHTML = list.map(cardHTML).join("");
      // Reaplica animação de entrada nos novos cards
      if (window.AnimModule) window.AnimModule.observe(grid.querySelectorAll(".reveal"));
    };

    paint("Todos");

    if (filters) {
      filters.addEventListener("click", (e) => {
        const btn = e.target.closest(".filter-btn");
        if (!btn) return;
        filters.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("is-active"));
        btn.classList.add("is-active");
        paint(btn.dataset.filter);
      });
    }
  },

  renderTimeline() {
    const wrap = document.getElementById("timeline");
    if (!wrap) return;
    wrap.innerHTML = SITE_DATA.timeline
      .map(
        (t) => `
      <div class="timeline__item reveal">
        <span class="timeline__year">${t.year}</span>
        <h3 class="timeline__role">${t.role}</h3>
        <p class="timeline__desc">${t.desc}</p>
      </div>`
      )
      .join("");
  },

  renderServices() {
    const grid = document.getElementById("servicesGrid");
    if (!grid) return;
    grid.innerHTML = SITE_DATA.services
      .map(
        (s) => `
      <article class="service-card reveal">
        <div class="service-card__icon">${s.icon}</div>
        <h3 class="service-card__title">${s.title}</h3>
        <p class="service-card__desc">${s.desc}</p>
      </article>`
      )
      .join("");
  }
};
