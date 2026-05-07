# Finca La Hermosa

Venue multifuncional en Isidro Fabela, EDOMEX. Objetivo: sistema de adquisición de clientes con experiencias paquetizadas, posicionado por estética — no por precio.

**Criterio operativo:** Decisiones de diseño cerradas. Se permiten mejoras tecnicas. Prioridad: velocidad sobre perfeccion.

---

## ★ FOCO ACTIVO — Fase 4: Prototipos HTML

Diseño visual página por página en HTML/CSS/JS vanilla antes de migrar a Next.js.

| Página | Archivo | Estado |
|--------|---------|--------|
| `/` Inicio | `sitio/index.html` | ✅ Completo (8 secciones, snap-scroll) |
| `/experiencias` | `sitio/experiencias.html` | ✅ Completo (catálogo filtrable, add-ons) |
| `/espacios` | `sitio/espacios.html` | ✅ Completo (v2 FOLIO editorial: hero crema, stats verde-dark compacto, galería wheel-hijack con snap por dirección, bullets por espacio, inventario, CTA) |
| `/nosotros` | `sitio/nosotros.html` | ✅ Completo (hero, historia, valores, timeline, equipo glass cards, promesa) |
| `/faq` | `sitio/faq.html` | ✅ Completo (hero dark, acordeón 19 preguntas × 5 categorías, CTA) |
| `/cotizar` | `sitio/cotizar.html` | ✅ Completo (multi-step 4 pasos, resumen lateral, check disponibilidad, success state) |

**Patrones establecidos en `sitio/index.html` (reusar en todas las páginas):**
- CSS tokens en `:root` (cremas, verdes, terracota, ease curves)
- Nav pill glassmorphism + `.scrolled` state
- `.txt-reveal` + IntersectionObserver para fade-in por sección
- `.img-reveal` con cover que sube al entrar viewport
- `.btn-primary/.btn-accent/.btn-ghost/.btn-outline-dark`
- `.overline-dark / .overline-light`
- `.arch-label` (texto Against de fondo decorativo)
- `.cta-card` para sección final dark
- Footer HTML idéntico en todas las páginas

**Servidor preview:** `npx serve sitio -p 3333` — URLs sin `/sitio/` prefix (e.g. `localhost:3333/experiencias.html`)

---

## ★ Fases del proyecto

| # | Fase | Estado |
|---|------|--------|
| 1–3 | Estrategia + Identidad + Arquitectura | ✅ Completadas |
| 4 | Diseño visual (prototipos HTML) | ✅ Completada |
| 5 | GitHub repo + Next.js base | ⏳ |
| 5.5 | Inventario de contenido editable | ⏳ |
| 6 | Construcción en código (Next.js) | ⏳ |
| 7 | Responsive + retoques | ⏳ |
| 8 | Vercel + deploy | ⏳ |
| 9 | Analytics (GTM + GA4 + Meta Pixel) | ⏳ |
| 10 | Paquetes y pricing definitivos | 🔄 En curso |

---

## ★ Stack técnico aprobado

Next.js 15 (App Router) · Tailwind CSS · Framer Motion · Embla Carousel · Supabase (DB+Auth+Storage+Edge) · Resend (email, gratis 3K/mes) · React-PDF · React Hook Form + Zod · Vercel

---

## ★ Sistema de diseño

**Referencia completa:** `Finca La Hermosa Design System/colors_and_type.css`
**Assets:** `Finca La Hermosa Design System/assets/` — logos y isotipos × 3 colores (blanco, verde, terracota)

**Tipografías:**
- `Against Regular` — display/hero (local: `sitio/fonts/against-regular.otf`)
- `Cormorant Garamond` — editorial serif, H2, cursivas emocionales
- `Jost` — body, UI, nav, botones (Google Fonts)

**Firma tipográfica** (todos los heroes):
```
Against blanco grande   →  "Cada experiencia,"
Cormorant italic terra  →  "diseñada para ti."
```

**Colores clave:**
- Verde finca: `#2d4949` · Verde dark: `#1e3232` · Verde mid: `#4a6e6e`
- Terracota: `#c07a5a` · Terra light: `#e8c4ad`
- Crema: `#fffdf8` · Crema warm: `#f5f0e8` · Crema border: `#ede6d6`
- Body text: `#5a5040` · Muted: `#8c7d68` · Carbon: `#1a1a1a`

**Estilo:** Minimalista editorial tipo Apple · glassmorphism en nav · fotografía full-bleed · SVG stroke Lucide icons

**Voz:** "tú" informal · español formal-casual · nav en MAYÚSCULAS · sin emojis
Palabras OK: celebrar, compartir, naturaleza, experiencia, momentos, recuerdos
Palabras NO: renta, barato, promoción, paquete básico, todo incluido

---

## ★ Arquitectura de rutas

**Públicas:** `/` · `/experiencias` · `/espacios` · `/nosotros` · `/faq` · `/cotizar` · `/cotizar/listo`
**Admin:** `/admin/login` `/admin/paquetes` `/admin/espacios` `/admin/testimonios` `/admin/faq` `/admin/cotizaciones` `/admin/calendario` `/admin/config`
**API:** `/api/cotizar` · `/api/disponibilidad?fecha=YYYY-MM-DD` · `/api/pdf/[id]`

---

## ★ Sistema de cotización

**Flujo:** tipo → fecha (check disponibilidad) → invitados → add-ons → contacto → PDF por Resend + link wa.me
**Si fecha ocupada:** alerta + sugerencias ±3 días antes de continuar
**PDF incluye:** nombre, fecha tentativa, precio calculado, 1–2 paquetes recomendados, CTA para visita
**Leads:** Supabase tabla `cotizaciones` con estado `nuevo`

**Cotizador dual:**
- Corto: home S5 (3–4 campos embebidos)
- Completo: `/cotizar` (multi-step + resumen lateral)

---

## ★ Modelo de datos Supabase

```
paquetes            (id, nombre, tipo, precio_base, incluidos[], imagen, visible, orden)
add_ons             (id, nombre, precio, icono, visible)
espacios            (id, nombre, descripcion, capacidad, fotos[], visible, orden)
testimonios         (id, nombre, texto, tipo_evento, foto, visible)
faq                 (id, pregunta, respuesta, categoria, orden, visible)
seo                 (id, pagina, meta_title, meta_description, og_image)
config              (id, whatsapp, instagram, facebook, email, direccion)
cotizaciones        (id, nombre, email, telefono, tipo_evento, fecha, invitados, add_ons[], paquete_recomendado, pdf_url, estado, created_at)
eventos_confirmados (id, fecha_inicio, fecha_fin, tipo, notas, created_at)
```

---

## ★ Modelo de ingresos

**Tarifa base:** $13,000 MXN / día · 25–30 personas (jardines + alberca + casa + puente + estacionamiento + asador + staff)
**Add-ons:** Salón +$8,000 · Fogata/Cine/Coffee break/AV: +$700 c/u
**Paquetes actuales (placeholder):** Esencial $13K · Completo $21K · Premium $28K

---

## ★ Activos del venue

Casa principal (6 hab) · 2 jardines · Salón 22×14 m · Terraza 3.5 m · Alberca · Rooftop/mirador · Café · Puente colgante · Fogata · Columpio · Asador · Estacionamiento · Circuito ciclopista · Entorno boscoso

---

## ★ Decisiones cerradas

- Stack: Next.js 15 + Supabase + Vercel + Resend + wa.me (sin WhatsApp Business API Fase 1)
- Tipografías: Against / Cormorant / Jost (Poppins descartado; `colors_and_type.css` ya corregido a Jost)
- `/espacios`: v2 FOLIO editorial con galería scroll-driven (panel sticky, índice flotante, 9 espacios) ✅ — lightbox descartado
- Fotografía Fase 1: placeholders Unsplash/Pexels curados
- Sistema de diseño documentado en `PRODUCT.md` (estrategia/marca) y `DESIGN.md` (tokens/componentes Stitch) — usar con `/impeccable`

---

## ★ Historial

`2026-05-06` — Critique `/nosotros` + unificación global: PRODUCT.md y DESIGN.md creados. Fixes: pull-quote sin border-left (fondo crema), equipo gradient→verde-dark sólido, grid asimétrico 1.4fr. Botones unificados 0.69→0.75rem, weight 300→500; btn-outline-dark hover→terracota real en los 6 HTMLs. Poppins→Jost corregido en colors_and_type.css.
`2026-05-05` — `espacios.html` refinado: stats verde-dark compacto sin título/quote, galería con wheel-hijack (derecha=carrusel, izquierda=scroll normal), snap por dirección, bullets por espacio (3 características), clic en lista instantáneo, transiciones de lista aceleradas.
`2026-05-05` — `espacios.html` consolidado a v2 FOLIO editorial (scroll-driven gallery sticky panel, 9 espacios, stats terra, inventario). v1 y v3 eliminadas.
`2026-05-05` — `cotizar.html` completo: hero compacto dark, 4 pasos (tipo evento cards, fecha+invitados con check disponibilidad simulado, add-ons con precio, datos de contacto), resumen lateral sticky con total en vivo + paquete recomendado dinámico, success state. Fase 4 HTML completada al 100%.
`2026-05-05` — `faq.html` completo: hero dark centrado, acordeón 19 preguntas × 5 categorías (tabs filtrables), sección contacto nudge, CTA dark estándar. Skill frontend-design activada.



