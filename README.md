# NOIR — The Dark Editorial Design System

> *Where the web gets serious.*

[![Live Demo](https://img.shields.io/badge/🖤%20Live%20Demo-noir--ui--kit.pages.dev-C4973D?style=for-the-badge)](https://noir-ui-kit.pages.dev/)
![Pure CSS](https://img.shields.io/badge/Pure-CSS-264de4?style=for-the-badge&logo=css3&logoColor=white)
![Zero JS](https://img.shields.io/badge/JavaScript-ZERO-4caf50?style=for-the-badge&logo=javascript)
![License](https://img.shields.io/badge/License-MIT-C4973D?style=for-the-badge)
![Size](https://img.shields.io/badge/Size-Under%2014kb-111111?style=for-the-badge)

**NOIR** is a dark editorial CSS design system for agencies, portfolios, and SaaS builders who want their work to feel polished, intentional, and distinct — not like another Tailwind starter template.

Clean borders. Gold accents. Editorial typography. Zero dependencies.

---

## ⚡ Installation

**No npm. No build step. No bundler.**

**Step 1 — Download**

Grab [`noir.css`](./css/noir.css) from this repo and drop it in your project.

**Step 2 — Link it**

```html
<head>
  <link rel="stylesheet" href="css/noir.css">
</head>
```

Done. Every NOIR class is ready. All classes are prefixed with `n-` to avoid conflicts.

---

## 🎨 Components (Free Tier)

### Buttons — `.n-btn`

```html
<button class="n-btn">Primary Gold</button>
<button class="n-btn n-btn--ghost">Ghost</button>
<button class="n-btn n-btn--outline">Outline</button>
<button class="n-btn n-btn--danger">Danger</button>
<button class="n-btn n-btn--sm">Small</button>
<button class="n-btn n-btn--lg">Large</button>
<button class="n-btn n-btn--full">Full Width</button>
```

### Cards — `.n-card`

```html
<!-- Standard -->
<div class="n-card">Your content</div>

<!-- Glass morphism -->
<div class="n-card n-card--glass">Your content</div>

<!-- Featured / highlighted -->
<div class="n-card n-card--featured">Your content</div>
```

### Badges — `.n-badge`

```html
<span class="n-badge">Gold</span>
<span class="n-badge n-badge--outline">Outline</span>
<span class="n-badge n-badge--success">Published</span>
<span class="n-badge n-badge--danger">Draft</span>
<span class="n-badge n-badge--warning">Review</span>
```

### Tags — `.n-tag`

```html
<span class="n-tag">Editorial</span>
<span class="n-tag">Portfolio</span>
```

### Forms

```html
<label class="n-label">Email</label>
<input type="email" class="n-input" placeholder="hello@yoursite.com">

<textarea class="n-input n-textarea" placeholder="Message..."></textarea>
```

### Typography

```html
<h1 class="n-display">Hero Title</h1>
<h2 class="n-h2">Section Heading</h2>
<p class="n-lead">Lead paragraph with muted tone.</p>
<span class="n-caption">Category Label</span>
<span class="n-gold">Gold accent text</span>
```

### Layout

```html
<div class="n-container">
  <section class="n-section">
    <div class="n-grid-3">
      <div class="n-card">...</div>
      <div class="n-card">...</div>
      <div class="n-card">...</div>
    </div>
  </section>
</div>
```

---

## 🏛 Tiers

### 🆓 Free — *This Repository*

- ✅ Core CSS framework (under 14kb)
- ✅ Buttons, cards, badges, tags, forms
- ✅ Typography scale + code blocks
- ✅ Grid system + layout utilities
- ✅ MIT License — use anywhere, including commercial projects

### 🎨 Artisan — $20 / ₹1,650

Full component library for serious builders:

- 💥 30+ components — navigation, drawers, modals, tables, progress bars, timeline, tabs, accordion, tooltips, alerts, skeleton loaders
- 📄 3 page templates (landing, pricing, portfolio)
- ✅ Commercial use license

### 🏛 Maison — $38 / ₹3,200

Agency-grade complete toolkit:

- 💥 Everything in Artisan
- ⚡ Full JS toolkit — TabController, ModalManager, ToastQueue, ScrollReveal
- 📄 6 page templates — landing, pricing, portfolio, dashboard, blog, agency
- 🚫 Attribution-free commercial license
- 📧 Priority email support

> **[→ See pricing and get the kit](https://noir-ui-kit.pages.dev/#pricing)**

---

## 🎨 Design Tokens

NOIR uses CSS custom properties for easy theming:

```css
:root {
  --n-bg:        #070707;  /* Page background */
  --n-surface:   #111111;  /* Card surfaces */
  --n-text:      #EDE8DF;  /* Primary text */
  --n-muted:     #7A756E;  /* Muted text */
  --n-gold:      #C4973D;  /* Brand accent */
  --n-gold-lt:   #E0B96A;  /* Light gold */
}
```

Override in your own CSS to customize:

```css
:root {
  --n-gold: #5B8FD6; /* swap gold for blue */
}
```

---

## 📋 Browser Support

| Browser | Support |
|---|---|
| Chrome / Edge (last 2) | ✅ Full |
| Firefox (last 2) | ✅ Full |
| Safari (last 2) | ✅ Full |
| iOS Safari | ✅ Full |
| IE 11 | 💀 No — not worth it |

---

## 🤝 Contributing

Open source and PRs welcome. Follow the `n-[component]__[element]--[modifier]` BEM pattern.

---

## 📄 License

NOIR (Free Tier) is MIT licensed. See [LICENSE](./LICENSE).

---

<div align="center">

**Built with precision by [@gorupa](https://github.com/gorupa)**

Also check out **[KABOOM! UI](https://github.com/Gorupa/kaboom-ui-kit)** — the bold retro comic book counterpart.

[Live Demo](https://noir-ui-kit.pages.dev/) · [Buy Premium](https://noir-ui-kit.pages.dev/#pricing) · [Report a Bug](../../issues)

</div>
