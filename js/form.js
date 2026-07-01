/* =========================================================
   form.js — Formulário de contato.
   Como o GitHub Pages não tem servidor, o formulário monta
   uma mensagem e abre o WhatsApp já preenchido.
   ========================================================= */

window.FormModule = {
  init() {
    const form = document.getElementById("contactForm");
    if (!form) return;
    const status = document.getElementById("formStatus");

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = form.cname.value.trim();
      const company = form.company.value.trim();
      const message = form.message.value.trim();

      if (!name || !message) {
        if (status) status.textContent = "Por favor, preencha nome e mensagem.";
        return;
      }

      let text = `Olá Michel! Meu nome é ${name}`;
      if (company) text += ` (${company})`;
      text += `.%0A%0A${message}`;

      const url = `https://wa.me/${SITE_DATA.whatsappNumber}?text=${encodeURIComponent(
        `Olá Michel! Meu nome é ${name}${company ? ` (${company})` : ""}.\n\n${message}`
      )}`;

      if (status) status.textContent = "Abrindo o WhatsApp... 🚀";
      window.open(url, "_blank", "noopener");
      form.reset();
    });
  }
};
