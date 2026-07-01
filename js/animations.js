/* =========================================================
   animations.js — Vida para a página:
   • reveal ao rolar (IntersectionObserver)
   • contadores animados
   • barras de skill que enchem ao aparecer
   • efeito "digitando" no hero
   • partículas conectadas no fundo do hero
   Respeita "prefers-reduced-motion".
   ========================================================= */

window.AnimModule = {
  reduced: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  observer: null,

  init() {
    this.setupObserver();
    this.observe(document.querySelectorAll(".reveal"));
    this.typeEffect();
    if (!this.reduced) this.particles();
  },

  /* ---- Reveal + gatilhos (contadores, barras) ---- */
  setupObserver() {
    if (this.reduced) return; // reveal já fica visível via CSS
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          el.classList.add("is-visible");

          if (el.matches(".stat")) this.countUp(el.querySelector(".stat__num"));
          if (el.matches(".skill-card")) this.fillBars(el);

          this.observer.unobserve(el);
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -40px 0px" }
    );
  },

  observe(nodes) {
    if (this.reduced || !this.observer) return;
    nodes.forEach((n) => this.observer.observe(n));
  },

  /* ---- Contadores numéricos ---- */
  countUp(el) {
    if (!el) return;
    const target = parseInt(el.dataset.count, 10) || 0;
    const suffix = el.dataset.suffix || "";
    const dur = 1600;
    const start = performance.now();
    const step = (now) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      el.textContent = Math.round(eased * target) + suffix;
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  },

  /* ---- Barras de habilidade ---- */
  fillBars(card) {
    card.querySelectorAll(".skill-bar").forEach((bar, i) => {
      const level = bar.dataset.level || 0;
      const fill = bar.querySelector("i");
      setTimeout(() => { if (fill) fill.style.width = level + "%"; }, i * 150);
    });
  },

  /* ---- Efeito de digitação no hero ---- */
  typeEffect() {
    const el = document.getElementById("typed");
    if (!el || !SITE_DATA.typedPhrases.length) return;
    const phrases = SITE_DATA.typedPhrases;

    if (this.reduced) { el.textContent = phrases[0]; return; }

    let pi = 0, ci = 0, deleting = false;
    const tick = () => {
      const word = phrases[pi];
      el.textContent = word.slice(0, ci);
      if (!deleting && ci < word.length) {
        ci++; setTimeout(tick, 70);
      } else if (!deleting && ci === word.length) {
        deleting = true; setTimeout(tick, 1500);
      } else if (deleting && ci > 0) {
        ci--; setTimeout(tick, 35);
      } else {
        deleting = false; pi = (pi + 1) % phrases.length; setTimeout(tick, 300);
      }
    };
    tick();
  },

  /* ---- Partículas conectadas no fundo do hero ---- */
  particles() {
    const canvas = document.getElementById("particles");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let w, h, pts = [];
    const COUNT = window.innerWidth < 700 ? 28 : 60;

    const accent = () =>
      getComputedStyle(document.documentElement).getPropertyValue("--accent").trim() || "#2f7d8f";

    function resize() {
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
    }
    function make() {
      pts = Array.from({ length: COUNT }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4
      }));
    }
    function draw() {
      ctx.clearRect(0, 0, w, h);
      const color = accent();
      pts.forEach((p) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.8, 0, Math.PI * 2);
        ctx.fillStyle = color + "cc";
        ctx.fill();
      });
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
          const dist = Math.hypot(dx, dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = color + Math.floor((1 - dist / 120) * 40).toString(16).padStart(2, "0");
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(draw);
    }

    resize(); make(); draw();
    window.addEventListener("resize", () => { resize(); make(); }, { passive: true });
  }
};
