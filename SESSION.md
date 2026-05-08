# SESSION — 2026-05-07 (sesión 3)

## Objetivo actual

Continuar adaptación responsive página por página. Esta sesión: `experiencias.html` mobile completado con `$impeccable adapt`.

## Estatus

Rama activa: `codex/responsive-site-adapt`. `experiencias.html` mobile revisado y ajustado. Quedan pendientes las páginas `espacios.html`, `nosotros.html`, `faq.html` y `cotizar.html`.

## Qué se hizo

**Experiencias mobile:**
- Se agregaron clases semánticas en `sitio/experiencias.html` para controlar hero, catálogo, add-ons y CTA sin depender solo de selectores por estilos inline.
- Hero mobile convertido a imagen full-bleed con overlay oscuro, texto visible en el primer viewport y CTAs a ancho completo.
- Ajustada escala tipográfica para evitar recortes en 390px y 320px.
- Catálogo adaptado a una columna, tabs táctiles con scroll horizontal y tarjetas de paquete compactas.
- Add-ons adaptados a una columna con cards más legibles y botón final a ancho completo.
- CTA final ajustado para mobile, con prueba social en vertical y títulos sin desbordar.
- En mobile de `experiencias`, los elementos `.txt-reveal` quedan visibles por defecto para evitar pantallas en blanco por IntersectionObserver y mejorar rendimiento.

## Verificación

- Servidor local: `http://127.0.0.1:3333/experiencias.html`.
- Playwright CLI verificó capturas en `390x844` y `320x844`.
- Resultado visual: sin recorte en hero, tabs, cards, add-ons ni CTA final en 320px.
- Capturas temporales generadas en `output/` no deben commitearse.

## Archivos modificados

- `sitio/experiencias.html`
- `sitio/responsive.css`
- `SESSION.md`

## Próximo paso

1. Revisar `espacios.html` mobile.
2. Continuar con `nosotros.html`, `faq.html` y `cotizar.html`.
3. Al terminar todas las páginas, mergear `codex/responsive-site-adapt` hacia `master`.
