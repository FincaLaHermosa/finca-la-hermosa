# SESSION - 2026-05-22

## Objetivo actual

Migrar los prototipos HTML aprobados de `sitio/` a Next.js 15 con fidelidad visual y funcional, trabajando fuera de OneDrive.

## Workspace activo

Ruta activa: `C:\Users\limin\dev\finca-la-hermosa`.
Rama activa: `nextjs-site-migration`.

La carpeta en OneDrive queda como referencia/backup. La copia intermedia en `C:\dev` fue retirada; el desarrollo debe continuar en `C:\Users\limin\dev\finca-la-hermosa` para evitar errores de sync con `node_modules`, `.next`, watchers y builds.

## Hecho

- Se creó la organización de GitHub `FincaLaHermosa`.
- Se creó el repo privado `FincaLaHermosa/finca-la-hermosa`.
- Se configuró `origin` y se subieron `main` y `nextjs-site-migration`.
- Se agregó `.env.example` con variables previstas para URLs públicas, WhatsApp, Supabase, Resend y analytics.
- Se creó el proyecto Vercel `finca-la-hermosa` y quedó `READY` en `https://finca-la-hermosa-6oum5z4we-emacevedo17-1600s-projects.vercel.app/`.
- Se agregó `fincalahermosa.com` y `www.fincalahermosa.com` a Vercel.
- Se configuró DNS en Cloudflare con registros `A` DNS-only a `76.76.21.21` para raíz y `www`.
- Se asignaron aliases Vercel para `https://fincalahermosa.com` y `https://www.fincalahermosa.com`; ambos responden HTTP 200.
- Se agregó redirect canónico en Next: `www.fincalahermosa.com/*` redirige permanentemente a `https://fincalahermosa.com/*`.
- Se verificó dominio productivo:
  - `https://fincalahermosa.com` responde HTTP 200.
  - `https://www.fincalahermosa.com` redirige HTTP 308 a `https://fincalahermosa.com/`.
- Se movió el proyecto activo a `C:\Users\limin\dev\finca-la-hermosa`.
- Se creó worktree de referencia en `C:\Users\limin\dev\finca-la-hermosa-reference` apuntando al commit `9b7b444`.
- Side-by-side local activo:
  - Referencia visual: `http://localhost:8083`
  - Migración React: `http://localhost:8084`
  - Ambos abiertos en Google Chrome para comparación.
- Se mantuvo la rama `nextjs-site-migration`.
- Se reemplazó el scaffold genérico de Next por un adaptador de prototipos:
  - `lib/prototype.ts`
  - `components/PrototypePage.tsx`
  - `components/PrototypeScriptRunner.tsx`
- Las rutas públicas ahora renderizan directamente los HTML aprobados de `sitio/`:
  - `/`
  - `/experiencias`
  - `/espacios`
  - `/nosotros`
  - `/faq`
  - `/cotizar`
- Se normalizaron rutas de assets, fuentes, enlaces internos y footer parcial para funcionar en Next.
- Se reactivaron scripts inline del prototipo dentro del ciclo de vida de React/Next.
- Se corrigió la inicialización de scripts que dependían de `document.DOMContentLoaded`.
- Se añadieron handlers robustos para tabs, filtros, FAQ, carruseles básicos, cotizador multi-step y envío simulado del cotizador.
- Se dejó `/cotizar/listo` con una pantalla de confirmación visualmente alineada a la marca.
- Se eliminó el scaffold visual anterior que no respetaba los prototipos: componentes genéricos de cards, nav, footer, hero, FAQ, cotizador y `data/site.ts`.
- Se inició la migración final por partes:
  - `components/SiteHeader.tsx` contiene la navegación React con estado mobile, activo por ruta y CTA contextual.
  - `components/WhatsAppFloat.tsx` contiene el botón flotante global.
  - `components/SiteFooter.tsx` contiene el footer React.
  - `app/layout.tsx` monta header, WhatsApp y footer globales.
  - `lib/prototype.ts` ya no inyecta nav, WhatsApp ni footer desde los HTML.
- Se migró `/experiencias` a React real:
  - `app/experiencias/page.tsx` ya no usa `PrototypePage`.
  - `components/ExperienciasContent.tsx` renderiza hero, filtros, cards, add-ons y CTA.
  - `lib/experiencias-data.ts` centraliza paquetes, filtros y add-ons para futuro CMS.
  - Se conserva el CSS del prototipo como capa visual temporal para mantener fidelidad.
- Se migró `/faq` a React real:
  - `app/faq/page.tsx` ya no usa `PrototypePage`.
  - `components/FaqContent.tsx` renderiza hero, tabs de categorías, acordeón, bloque de contacto y CTA final.
  - `lib/faq-data.ts` centraliza categorías y preguntas para futuro CMS.
  - Se conserva el CSS del prototipo como capa visual temporal para mantener fidelidad.
  - Se corrigió el reset visual de los botones del acordeón para mantener alineación y estilo idénticos al prototipo.
- Se migró `/espacios` a React real:
  - `app/espacios/page.tsx` ya no usa `PrototypePage`.
  - `components/EspaciosContent.tsx` renderiza hero, stats, galería interactiva, inventario y CTA final.
  - `lib/espacios-data.ts` centraliza espacios, fotos, bullets, capacidades y amenidades para futuro CMS.
  - La galería se porta a estado React con clicks, dots, wheel, touch/swipe y autoavance móvil solo cuando la sección entra en vista.
  - Se mantiene la capa CSS del prototipo para conservar fidelidad visual.
- Se migró `/nosotros` a React real:
  - `app/nosotros/page.tsx` ya no usa `PrototypePage`.
  - `components/NosotrosContent.tsx` renderiza hero, historia, valores, timeline, equipo, promesa y CTA final.
  - `lib/nosotros-data.ts` centraliza timeline, valores, equipo y promesas para futuro CMS.
  - Los reveals de texto e imagen se portaron a React con `IntersectionObserver`.
  - Se mantiene la capa CSS del prototipo para conservar fidelidad visual.
  - Se corrigió el orden DOM del timeline para que los dots queden alineados con la línea central.
- Se migró `/cotizar` a React real:
  - `app/cotizar/page.tsx` ya no usa `PrototypePage`.
  - `components/CotizarContent.tsx` renderiza el cotizador multi-step con estado React.
  - `lib/cotizar-data.ts` centraliza tipos de evento, add-ons, precio base y fechas ocupadas simuladas.
  - El resumen lateral se recalcula desde estado React: tipo, fecha, invitados, duración, add-ons y total.
  - El correo se mantiene opcional; nombre y WhatsApp/teléfono son obligatorios.
  - Se mantiene la capa CSS del prototipo para conservar fidelidad visual.
- Se corrigió el adaptador de prototipos para que no redispare listeners antiguos de `DOMContentLoaded` al navegar entre páginas; esto evita errores como `filterPkgs` intentando operar sobre DOM de otra ruta.
- Se desactivó `devIndicators` de Next en `next.config.ts` para evitar el bug de devtools/webpack `SegmentViewNode` / `__webpack_modules__[moduleId] is not a function` en desarrollo.

## Verificación realizada

- `npm run build` pasa correctamente.
- Tras extraer chrome global, `npm run build` vuelve a pasar correctamente.
- DOM real en `http://localhost:8084/experiencias` verificado: 1 `site-nav`, 1 `site-footer`, 1 `wa-float`.
- Comparación headless Chrome contra `http://localhost:8083/experiencias` en mobile 390×844 y desktop 1440×1000 se mantiene visualmente alineada.
- En `/experiencias`, filtro React validado en Chrome: Social muestra `Esencial | Completo con Salón | Premium All-In`; al cambiar a Corporativos muestra `Corporativo Creativo | Completo con Salón | Premium All-In`.
- En `/faq`, tabs y acordeón React validados en Chrome: inicia en `Reservaciones`, cambia a `Espacios y capacidad` y abre `¿Cuántas personas puede recibir la finca?`.
- En `/faq`, se verificó por DOM que `.faq-question` no conserva borde/fondo nativo de botón y ocupa el mismo ancho que `.faq-item`.
- En `/espacios`, validación headless mobile 390×844: 9 items, 9 slides, 9 dots, inicia en `Jardines y áreas verdes`, cambia a `Salón de eventos`, sin overflow horizontal y nav oscuro.
- En `/espacios`, validación headless desktop 1440×1000: inicia en `Jardines y áreas verdes`, 9 items/slides, sin overflow horizontal, nav oscuro y galería con altura correcta.
- En `/nosotros`, validación headless mobile 390×844: 7 secciones, 6 timeline items, 4 team cards, grid de equipo en 2 columnas, descripciones ocultas en mobile, sin overflow horizontal.
- En `/nosotros`, validación headless desktop 1440×1000: 7 secciones, 6 timeline items, 4 team cards, grid 1.4fr/1fr/1fr/1fr, descripciones visibles, nav activo en `Nosotros`, sin overflow horizontal.
- En `/nosotros`, validación headless desktop confirma que los 6 dots del timeline comparten el mismo centro X y coinciden con el centro de `.timeline`.
- En `/cotizar`, validación headless mobile 390×844: selecciona Boda, fecha 20 jun 2026, 60 invitados, add-on Salón, total `$21,000`, submit exitoso con correo vacío y sin overflow horizontal.
- `npm run build` pasa después de migrar `/cotizar`; la ruta `/cotizar` queda en 6.51 kB y First Load JS 112 kB.
- `http://localhost:8084/` y `http://localhost:8084/experiencias` responden HTTP 200 tras el fix de listeners.
- `http://localhost:8084/`, `/experiencias` y `/faq` vuelven a responder HTTP 200 tras limpiar `.next` y reiniciar el servidor con `devIndicators: false`.
- Servidor local de referencia activo en `http://localhost:8083/`.
- Servidor local de migración activo en `http://localhost:8084/`.
- Browser integrado validó:
  - home mobile sin overflow horizontal y con hero/nav del prototipo;
  - menú móvil abre y cierra con el botón visible;
  - `/experiencias` inicializa filtros en `Eventos Sociales` y filtra a `Corporativos` con click visible;
  - `/faq` inicializa en `Reservaciones` y filtra a `Espacios` con click visible;
  - `/cotizar` avanza de paso 1 a paso 2, actualiza resumen y no tiene overflow horizontal;
  - `/espacios` inicializa la galería con 9 elementos, caption y dots.

## No incluir / pendientes locales

- `AGENTS.md` y `CLAUDE.md` siguen modificados localmente por instrucciones del proyecto; no pertenecen al commit de migración.
- Los logs `output-next-8083.*.log` son artefactos locales del servidor y no se deben versionar.
- Vercel CLI quedó autenticado como `emacevedo17-1600`; el proyecto está importado desde GitHub y despliega desde `main`.
- El CMS sigue pendiente; la migración actual prioriza fidelidad del sitio público.

## Siguiente paso recomendado

Revisar `/cotizar` manualmente side-by-side. Si queda aprobado, continuar con home `/` a React real o preparar integración backend/Supabase según prioridad.
