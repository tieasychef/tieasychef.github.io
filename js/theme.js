/* =========================================================
   theme.js — Alternância de tema claro/escuro
   Lembra a escolha do visitante (localStorage) e respeita
   a preferência do sistema operacional.
   ========================================================= */

(function () {
  const STORAGE_KEY = "michel-theme";
  const root = document.documentElement;

  function apply(theme) {
    root.setAttribute("data-theme", theme);
  }

  // Tema inicial: salvo > preferência do SO > claro
  const saved = localStorage.getItem(STORAGE_KEY);
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  apply(saved || (prefersDark ? "dark" : "light"));

  // Expõe o toggle para o main.js inicializar
  window.ThemeModule = {
    init() {
      const btn = document.getElementById("themeToggle");
      if (!btn) return;
      btn.addEventListener("click", () => {
        const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
        apply(next);
        localStorage.setItem(STORAGE_KEY, next);
      });
    }
  };
})();
