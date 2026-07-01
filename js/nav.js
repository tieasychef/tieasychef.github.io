/* =========================================================
   nav.js — Navegação: menu mobile, efeito ao rolar,
   link ativo conforme a seção visível e barra de progresso.
   ========================================================= */

window.NavModule = {
  init() {
    const nav = document.getElementById("nav");
    const burger = document.getElementById("navBurger");
    const links = document.getElementById("navLinks");
    const navLinks = Array.from(document.querySelectorAll(".nav__link"));
    const progress = document.getElementById("scrollProgress");
    const sections = navLinks
      .map((l) => document.querySelector(l.getAttribute("href")))
      .filter(Boolean);

    // Menu mobile
    if (burger && links) {
      burger.addEventListener("click", () => {
        const open = links.classList.toggle("is-open");
        burger.classList.toggle("is-open", open);
        burger.setAttribute("aria-expanded", String(open));
      });
      links.addEventListener("click", (e) => {
        if (e.target.classList.contains("nav__link")) {
          links.classList.remove("is-open");
          burger.classList.remove("is-open");
          burger.setAttribute("aria-expanded", "false");
        }
      });
    }

    // Efeito ao rolar + barra de progresso + link ativo
    function onScroll() {
      const y = window.scrollY;
      if (nav) nav.classList.toggle("nav--scrolled", y > 40);

      if (progress) {
        const h = document.documentElement.scrollHeight - window.innerHeight;
        progress.style.width = (h > 0 ? (y / h) * 100 : 0) + "%";
      }

      // Link ativo
      let current = "";
      sections.forEach((sec) => {
        if (y >= sec.offsetTop - 120) current = "#" + sec.id;
      });
      navLinks.forEach((l) =>
        l.classList.toggle("is-active", l.getAttribute("href") === current)
      );
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }
};
