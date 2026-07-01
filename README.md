# Site Pessoal — Michel Schmidt

Portfólio pessoal em HTML + CSS + JavaScript, com arquivos separados e organizados para facilitar a manutenção. Feito para publicar no **GitHub Pages**.

## 📁 Estrutura dos arquivos

```
sitepessoal/
├── index.html          → a página (estrutura)
├── css/
│   └── styles.css      → todo o visual (cores, layout, tema claro/escuro)
└── js/
    ├── data.js         → ⭐ SEU CONTEÚDO (edite aqui: projetos, textos, WhatsApp)
    ├── theme.js        → alternância claro/escuro
    ├── nav.js          → menu e navegação
    ├── render.js       → monta as seções a partir do data.js
    ├── animations.js   → animações (digitação, partículas, contadores)
    ├── form.js         → formulário que abre o WhatsApp
    └── main.js         → liga tudo
```

## ✏️ Como editar (sem saber programar)

Quase tudo que você vai querer mudar está em **`js/data.js`**. Abra com qualquer editor de texto:

- **Projetos:** edite a lista `projects` (título, descrição, resultado, tecnologias).
- **Serviços:** edite a lista `services`.
- **Experiência:** edite a lista `timeline`.
- **Tecnologias (tags):** edite `skillTags`.
- **Frases que aparecem digitando:** edite `typedPhrases`.
- **Número do WhatsApp:** edite `whatsappNumber` (só números, começando com 55).

Outros ajustes rápidos:
- **Nome, e-mail, telefone e redes sociais:** estão no `index.html` (procure por "michelschmidt.dev", "LinkedIn", "GitHub").
- **Sua foto:** coloque uma imagem em `assets/foto.jpg` e, no `index.html`, troque o bloco `about__photo-placeholder` por `<img src="assets/foto.jpg" alt="Michel">`.
- **Cores:** no topo do `css/styles.css`, na parte `:root`, você pode mudar a cor de destaque (`--accent`).

> ⚠️ O e-mail está como um exemplo (`contato@michelschmidt.dev`). Troque pelo seu e-mail pessoal real.

## 👀 Ver o site no seu computador

É só dar dois cliques no arquivo `index.html` — ele abre no navegador.

## 🚀 Publicar no GitHub Pages

1. Crie uma conta em [github.com](https://github.com) (se ainda não tiver).
2. Crie um repositório novo. Para o site ficar no endereço `seu-usuario.github.io`, dê ao repositório exatamente esse nome: **`seu-usuario.github.io`**.
3. Envie todos os arquivos desta pasta para o repositório (pode arrastar e soltar na página do GitHub, botão **"Add file" → "Upload files"**).
4. No repositório, vá em **Settings → Pages**.
5. Em **Branch**, escolha `main` e a pasta `/ (root)` e clique **Save**.
6. Aguarde 1–2 minutos. Seu site estará no ar em `https://seu-usuario.github.io`.

Pronto! Toda vez que você atualizar os arquivos no GitHub, o site se atualiza sozinho.
