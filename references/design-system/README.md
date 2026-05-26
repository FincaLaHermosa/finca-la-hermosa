# Finca La Hermosa — Design System

> **Live site:** https://fincalahermosa.onhercules.app  
> **Platform:** Hercules (onhercules.app)  
> **Assets provided:** SVG logos × 4, Against Regular font, brand screenshots, brand brief

---

## Company Overview

**Finca La Hermosa** is a family-owned estate converted into a destination-experience venue. Located in the Mexican countryside, the finca offers a unique blend of gardens, pool, salon, terrace, open spaces, and warm hospitality — not just a rental space, but a complete emotional experience. Founded as a family dream, it now hosts weddings, quinceañeras, birthday parties, retreats, corporate team-building events, and intimate private stays.

**Central concept:** *"Un lugar donde los sueños se celebran."*

**Core services:**
1. **Eventos Sociales** — Bodas, XV años, cumpleaños, aniversarios, bautizos
2. **Corporativos y Equipos** — Workshops, team building, reuniones de equipo
3. **Retiros y Campamentos** — Multi-day experiences for youth, faith, or wellness groups
4. **Estancia Privada** — Full finca rental for small/medium groups, day or overnight
5. **One Day Experience** — Curated events by the finca: cine al aire libre, fogatas, cenas especiales

---

## Brand Personality

| Trait | Description |
|---|---|
| Natural | Trees, gardens, water, fire, open sky |
| Elegante | Refined, clean, never ostentatious |
| Familiar | Warm, human, hospitable |
| Soñadora | New beginnings, memory, union |
| Versátil | Adapts to every event type |

---

## Content Fundamentals

### Voice & Tone
The brand speaks like an **attentive host**: warm, clear, elegant, and reliable. It inspires without exaggerating; it sells without being aggressive.

- **Person:** "tú" (second-person informal). Speaks directly to the visitor.
- **Language:** Spanish. Mostly formal-casual — not stiff, not slangy.
- **Casing:** Navigation and overlines in UPPERCASE CAPS. Titles in sentence case with emotional line-breaks.
- **Emoji:** Not used. Thin line icons preferred over emoji.
- **Punctuation:** Minimal. Clean. Let images breathe.

### Correct tone example
> *"Un espacio rodeado de naturaleza para celebrar, descansar y compartir momentos que se quedan en la memoria."*

### Avoid
> ~~"¡El mejor lugar para tus eventos con alberca, salón y jardines!"~~ — Generic, commercial, undifferentiated.

### Key brand words
Celebrar · compartir · vivir · soñar · reunirse · descansar · naturaleza · experiencia · hospitalidad · jardines · momentos · recuerdos · encuentro · calma · belleza

### Words to use carefully
Renta · barato · promoción · salón económico · todo incluido · paquete básico

---

## Visual Foundations

### Color System
| Name | Value | Use |
|---|---|---|
| Crema Clara | `#fffdf8` | Default page background |
| Crema Cálida | `#f5f0e8` | Alternate section backgrounds |
| Crema Media | `#ede6d6` | Dividers, borders |
| Verde Finca | `#2d4949` | Primary institutional color — nav, CTA buttons, footers |
| Verde Oscuro | `#1e3232` | Footer bg, deep accents |
| Verde Medio | `#4a6e6e` | Hover states on verde |
| Terracota | `#c07a5a` | Accent — icons, overlines, italic accents, secondary buttons |
| Terracota Claro | `#e8c4ad` | Hover bg for terracota elements, tags |
| Texto Cuerpo | `#5a5040` | All body copy — warmer than black |
| Texto Suave | `#8c7d68` | Captions, meta, muted text |
| Carbón | `#1a1a1a` | High-contrast headings, emphasis |
| Frosted Header | `rgba(39,63,61,0.78)` | Sticky nav on scroll — backdrop-blur: 12px |

### Typography System
| Font | Role | Usage |
|---|---|---|
| **Against Regular** | Display / Identity | Hero titles, impactful CTA phrases. Use sparingly for maximum impact. |
| **Cormorant Garamond** | Editorial Serif | H2 section titles, subtitles, italic emotional accents, pull quotes |
| **Poppins Light/Regular** | Body / UI Sans | All body copy, nav links, buttons, labels, descriptions |

**Typographic signature pattern** (seen in all heroes):
```
[Against — white, large]     Cada experiencia,
[Cormorant italic — terracota]  diseñada para ti
```

### Layout & Spacing
- **Max content width:** ~1200px centered
- **Section padding:** 80–120px vertical, generous breathing room
- **Grid:** 3-column for package cards; 4-column for feature cards; 2-column for split sections
- **Much air:** Sections never feel crowded. White space is intentional.

### Backgrounds
- Alternate sections: crema-clara ↔ crema-cálida
- Dark sections: verde-finca or carbon with photo overlay
- **Full-bleed photos** used for hero sections and CTA breaks

### Cards
- Background: crema-clara
- Shadow: `0 2px 8px rgba(45,73,73,0.08), 0 8px 24px rgba(45,73,73,0.06)`
- Border radius: 8px (md) or 0 for full-bleed
- Package cards: image top + content body + full-width CTA button

### Frosted Glass
- Key UI pattern: sticky nav and CTA overlay cards use `backdrop-filter: blur(12px)`
- Color: `rgba(39, 63, 61, 0.78)` (verde finca at 78% opacity)
- Used for: scrolled navbar, CTA section overlay cards, image overlays

### Animations & Interactions
- **Transitions:** subtle, 260ms ease — never bouncy
- **Hover states:** color shift (verde → verde-light) or opacity reduction (0.8)
- **Buttons:** slight darkening on hover; no scale transforms
- **Scroll:** parallax-lite on hero images; fade-in for sections
- **No aggressive animations** — the brand is calm and refined

### Imagery
- **Style:** Warm, aspirational, real — not too saturated, not immobiliario
- **Content:** Gardens in good light, pool in natural context, prepared salon, terrace, flowers, fire, water, paths, people conviviendo, warm-light evenings
- **Color tone:** Warm golden hour, earthy, natural greens — no cold blue tones
- **Photography is essential** — the brand lives in its imagery

### Borders & Details
- Thin lines, 1–1.5px
- Terracota accent lines under active nav items
- No heavy borders or aggressive corner treatments
- Decorative: thin terracota ornamental dividers or dots

### Corner Radii
- Default cards: `8px`  
- Buttons: `4px` (slim, refined)  
- Pill tags/badges: `999px`  
- Hero overlays: `12–16px`  

---

## Iconography

The site uses **thin, linear SVG icons** — no icon font library identified. Icons are custom SVGs embedded inline.

**Icon style:** Stroke-based, thin weight (~1.5px), minimal, organic. Never filled/solid.

**Usage contexts:**
- Navigation category tabs (Eventos Sociales, Corporativos, Retiros, Estancia, One Day)
- "Experiencias extra" feature grid icons
- "Qué nos hace diferentes" differentiator cards
- Footer social icons (Instagram, Facebook, TikTok likely)

**The isotipo** (arch with leaf/plant motif) functions as:
- Favicon
- Social media profile icon
- Watermark / ornamental brand element
- Footer logo

**SVG assets available in `assets/`:**
- `logo-terracota.svg` — Full wordmark in terracota
- `logo-verde.svg` — Full wordmark in verde finca
- `isotipo-terracota.svg` — Mark only in terracota  
- `isotipo-verde.svg` — Mark only in verde finca

**No external icon library** was identified. For UI recreations, thin Lucide icons (CDN) are the closest match:
```html
<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"></script>
```

---

## File Index

```
/
├── README.md                    ← This file
├── SKILL.md                     ← Agent skill definition
├── colors_and_type.css          ← All CSS design tokens (fonts, colors, spacing, type)
├── fonts/
│   └── against-regular.otf     ← Against display font
├── assets/
│   ├── logo-terracota.svg       ← Full wordmark, terracota color
│   ├── logo-verde.svg           ← Full wordmark, verde finca color
│   ├── isotipo-terracota.svg    ← Brand mark only, terracota
│   ├── isotipo-verde.svg        ← Brand mark only, verde
│   └── screenshots/             ← Reference screenshots from live site
│       ├── home.png
│       ├── experiencias.png
│       ├── nosotros.png
│       └── concept.png
├── preview/                     ← Design system token cards
│   ├── colors-brand.html        ← Primary palette
│   ├── colors-neutrals.html     ← Neutrals & text colors
│   ├── colors-semantic.html     ← Background context examples
│   ├── type-display.html        ← Against specimen
│   ├── type-editorial.html      ← Cormorant Garamond specimen
│   ├── type-body.html           ← Poppins specimen
│   ├── spacing-scale.html       ← Spacing tokens
│   ├── spacing-radii.html       ← Border radius tokens
│   ├── spacing-shadows.html     ← Shadow tokens
│   ├── components-buttons.html  ← Button variants
│   ├── components-cards.html    ← Card variants
│   ├── components-badges.html   ← Badge/tag variants
│   ├── components-forms.html    ← Form inputs
│   ├── components-nav.html      ← Navigation bar variants
│   └── components-hero.html     ← Hero section example
└── ui_kits/
    └── website/
        ├── README.md            ← UI kit notes
        ├── index.html           ← Interactive website prototype
        └── App.jsx              ← All page & component definitions
```

---

## UI Kits

### Website (`ui_kits/website/`)
High-fidelity recreation of `fincalahermosa.onhercules.app`.

**Pages prototyped:**
- **Inicio** — Hero + features strip + services overview
- **Experiencias** — Category tabs + package cards + extras grid + CTA
- **Nosotros** — Story hero + split section + differentiators + location + CTA
- **FAQ** — Accordion-style questions

**Key patterns replicated:**
- Frosted-glass sticky navbar (transparent → glass on scroll)
- Against + Cormorant italic hero typography signature
- Category tab navigation
- Package cards with image, price overlay, and feature list
- Frosted-glass CTA overlay card
- Full-bleed section breaks with dark overlay
