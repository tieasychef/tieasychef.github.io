/* =========================================================
   main.js — Ponto de entrada. Inicializa todos os módulos
   depois que a página carrega.
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  // Ano do rodapé
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Inicializa módulos (ordem importa: render antes de animar)
  if (window.ThemeModule) window.ThemeModule.init();
  if (window.NavModule) window.NavModule.init();
  if (window.RenderModule) window.RenderModule.init();
  if (window.AnimModule) window.AnimModule.init();
  if (window.FormModule) window.FormModule.init();
});
