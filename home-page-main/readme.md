# Alarado — Landing Page

Landing page responsiva com suporte a tema claro/escuro e menu mobile.

<img width="1882" height="870" alt="{BCBB8780-8F41-4069-8E74-BB1985BD3705}" src="https://github.com/user-attachments/assets/4a836feb-ae2c-4e7c-a15e-4a274254f66a" />

<img width="1863" height="841" alt="{19EB85D7-E677-4CA9-8E3F-83B28C622B7B}" src="https://github.com/user-attachments/assets/394d0a4d-2ffa-4ee7-85a0-370116d9b467" />

---

## Estrutura do projeto

```
alarado/
├── index.html
├── styles.css
├── script.js
├── README.md
└── assets/
    └── images/
        ├── logo-light.svg
        ├── hamburger-button.svg
        ├── close-button.svg
        ├── hero-image-simple-homepage.png
        ├── Moon_fill_light.svg
        ├── Sun_fill.svg
        └── Done_ring_round_fill.svg
```

---

## Funcionalidades

- **Tema claro/escuro** — toggle no header alterna entre os dois modos usando o atributo `data-theme` no elemento `<html>`
- **Menu hambúrguer (mobile)** — painel lateral com overlay ao fundo, fechado pelo botão X ou clicando fora
- **Layout responsivo** — adapta de desktop (≥ 768px) para mobile (< 768px) via media queries
- **Toggle sincronizado** — o switch de tema aparece no header no desktop e dentro do menu no mobile, ambos sempre em sincronia

---

## Como rodar

Não há dependências nem build. Basta abrir o arquivo diretamente no navegador:

```bash
# Opção 1 — abrindo o arquivo diretamente
open index.html

# Opção 2 — servidor local com Python (recomendado para evitar erros de CORS com assets)
python -m http.server 8000
# Acesse: http://localhost:8000
```

> **Por que usar um servidor local?** Alguns navegadores bloqueiam o carregamento de arquivos locais (como SVGs e fontes) quando a página é aberta via `file://`. Com um servidor local isso não acontece.

---

## Tecnologias usadas

| Tecnologia | Uso |
|---|---|
| HTML5 | Estrutura semântica da página |
| CSS3 | Estilização, variáveis de tema, media queries |
| JavaScript (ES6) | Interatividade (tema e menu mobile) |
| Google Fonts | Fonte Poppins |

---

## Como o tema claro/escuro funciona

O tema é controlado pelo atributo `data-theme` no elemento raiz `<html>`:

```html
<html data-theme="light"> <!-- ou "dark" -->
```

No CSS, as cores são definidas como variáveis dentro de `:root` (tema claro) e `[data-theme="dark"]` (tema escuro):

```css
:root {
    --bg-color: #F2F9FE;
    --text-color: #223344;
}

[data-theme="dark"] {
    --bg-color: #111729;
    --text-color: #FFFFFF;
}
```

O JavaScript altera esse atributo ao clicar no toggle:

```js
function applyTheme(isLight) {
    document.documentElement.setAttribute('data-theme', isLight ? 'light' : 'dark');
}
```

---

## Como o menu mobile funciona

No mobile, a lista de navegação fica escondida por padrão (`display: none`) e recebe a classe `.active` ao clicar no botão hambúrguer, tornando-se visível como painel lateral:

```js
function openMenu() {
    navList.classList.add('active');
    overlay.classList.add('active');
}

function closeMenu() {
    navList.classList.remove('active');
    overlay.classList.remove('active');
}
```

O overlay é um `<div>` que cobre toda a tela atrás do menu — ao clicar nele, o menu fecha.

---

## Personalização

Para trocar as cores principais, edite as variáveis em `styles.css`:

```css
:root {
    --bg-color: #F2F9FE;   /* fundo */
    --text-color: #223344; /* texto */
    --main-blue: #2A4DD0;  /* cor de destaque (links, botões ativos) */
}
```

Para trocar a fonte, substitua o link do Google Fonts em `index.html` e atualize a propriedade `font-family` no CSS.
