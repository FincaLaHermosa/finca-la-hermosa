# SESSION - 2026-05-25

## Objetivo actual

Migrar los prototipos HTML aprobados a Next.js 15 con fidelidad visual, avanzar hacia componentes React reales y mantener el proyecto fuera de OneDrive.

## Workspace activo

- Ruta: `C:\Users\limin\dev\FINCA LA HERMOSA\WEBSITE`
- Rama: `nextjs-site-migration`
- Referencia visual local: `http://localhost:8083`
- Migración React local: `http://localhost:8084`

El desarrollo debe seguir en `C:\Users\limin\dev\FINCA LA HERMOSA\WEBSITE` para evitar problemas de sync con `node_modules`, `.next`, watchers y builds. La carpeta raíz del negocio ahora es `C:\Users\limin\dev\FINCA LA HERMOSA`.

## Estado actual

- Repo privado en GitHub: `FincaLaHermosa/finca-la-hermosa`.
- Estructura local del negocio:
  - `WEBSITE` para el repo del sitio.
  - `BRANDING` para referencias visuales y marca.
  - `MARKETING`, `CONTABILIDAD`, `LEGAL`, `OPERACION`, `VENTAS`, `FOTOGRAFIA_VIDEO`, `DOCUMENTOS` para organizar archivos futuros del negocio.
- Dominio productivo configurado: `https://fincalahermosa.com`.
- `www.fincalahermosa.com` redirige al dominio raíz.
- Vercel y Cloudflare quedaron conectados/configurados.
- Rutas públicas migradas a React real:
  - `/`
  - `/experiencias`
  - `/espacios`
  - `/nosotros`
  - `/faq`
  - `/cotizar`
  - `/cotizar/listo`
- Componentes globales ya extraídos:
  - `components/SiteHeader.tsx`
  - `components/SiteFooter.tsx`
  - `components/WhatsAppFloat.tsx`
- Datos centralizados para futuro CMS:
  - `lib/home-data.ts`
  - `lib/experiencias-data.ts`
  - `lib/espacios-data.ts`
  - `lib/nosotros-data.ts`
  - `lib/faq-data.ts`
  - `lib/cotizar-data.ts`
- Las rutas públicas ya no dependen de `loadPrototype`, `PrototypePage` ni scripts de prototipo.
- Se conservan temporalmente estilos por página derivados del prototipo para preservar fidelidad visual mientras se limpian por partes.

## Hecho en este bloque

- Se retiró la capa de prototipo de home:
  - `/` ya no llama `loadPrototype("index")`.
  - Los estilos visuales de home se movieron a `lib/home-styles.ts`.
  - `app/page.tsx` renderiza solo `HomeContent` + `homeStyles`.
  - `lib/home-styles.ts` fue depurado de 2581 a 1230 líneas, eliminando reglas ajenas a home (`faq`, `nosotros`, `cotizar`, `experiencias`, `espacios/folio`, `sg`).
- Se hizo commit y push de home libre de prototipo: `a5200ba Detach home from prototype styles`.
- Se inició la retirada de la capa de prototipo de `/experiencias`:
  - `app/experiencias/page.tsx` ya no llama `loadPrototype("experiencias")`.
  - Los estilos de experiencias se movieron a `lib/experiencias-styles.ts`.
  - `lib/experiencias-styles.ts` quedó recortado a estilos base de experiencias, footer, nav responsive y responsive específico de experiencias.
- Se retiró la capa de prototipo del resto de rutas públicas:
  - `/espacios` usa `lib/espacios-styles.ts`.
  - `/nosotros` usa `lib/nosotros-styles.ts`.
  - `/faq` usa `lib/faq-styles.ts`.
  - `/cotizar` usa `lib/cotizar-styles.ts`.
- Se eliminaron archivos de runtime de prototipo sin uso:
  - `components/PrototypePage.tsx`.
  - `components/PrototypeScriptRunner.tsx`.
  - `lib/prototype.ts`.
- Home `/` quedó migrado a React real con hero, experiencias, espacios, proceso, paquetes, testimonios y CTA final.
- Se rediseñó la sección `Tu experiencia, en 3 minutos` usando criterio Impeccable:
  - video autoplay/muted/loop/playsInline;
  - video real en `public/assets/home-quote-loop.mp4`;
  - card glassmorphism flotante alineada a la izquierda;
  - CTA directo a `/cotizar`.
- Se ajustó esa sección:
  - overlay más limpio;
  - altura reducida;
  - títulos más contenidos;
  - sección posterior `De la idea a la celebración` más compacta.
- Se ajustó la sección de experiencias en home para subir heading y tabs en desktop.
- Se normalizó el padding lateral de home en mobile.
- Se unificó la firma hero de las páginas con la escala de inicio:
  - `.hero-title-display`
  - `.hero-title-italic`
- Se corrigió el flash de títulos enormes en navegación interna moviendo la escala de hero a `app/globals.css` con prioridad explícita.
- Se confirmó visualmente con el usuario que el bloque quedó bien.
- Se ajustó `/experiencias` mobile:
  - CTA final sin desborde horizontal.
  - Card principal + dos CTAs secundarios en dos columnas, como en inicio.
- Se unificó la escala de títulos de CTA final entre inicio, experiencias, espacios, nosotros y FAQ usando:
  - `.final-cta-title-main`.
  - `.final-cta-title-sub`.
- Se ajustó `/espacios`:
  - Botones del hero en mobile side by side.
  - En desktop, el carrusel cambia con wheel solo sobre la columna de imágenes.
  - La lista permite scroll normal de página y no cambia imagen con gesto vertical.
  - En mobile, las imágenes cambian solo con swipe horizontal; swipe vertical baja la página.

## Verificación reciente

- `npm run build` pasa tras retirar `loadPrototype` de `/`.
- `npm run build` pasa tras depurar `lib/home-styles.ts`.
- `npx tsc --noEmit` pasa tras retirar `loadPrototype` de `/experiencias`.
- `npm run build` pasa tras retirar `loadPrototype` de `/experiencias`.
- `npx tsc --noEmit` pasa.
- Servidor local `http://localhost:8084` responde HTTP 200.
- `/experiencias` responde HTTP 200 en `http://localhost:8084/experiencias`.
- Smoke test local en `8084`: `/`, `/experiencias`, `/espacios`, `/nosotros`, `/faq` y `/cotizar` responden HTTP 200.
- El usuario verificó mobile y confirmó que el ajuste visual quedó bien.
- `npx tsc --noEmit` pasa tras los últimos ajustes de `/espacios` y CTAs.
- `/espacios` y `/experiencias` responden HTTP 200 tras los últimos ajustes.

## Decisiones

- No incluir `AGENTS.md` ni `CLAUDE.md` en commits; son cambios locales de agente.
- Para builds limpios: parar servidor 8084, ejecutar `npm run build`, limpiar/reiniciar dev si hace falta.
- Mantener prioridad visual sobre refactor agresivo; extraer componentes compartidos cuando el patrón esté aprobado.

## Pendientes recomendados

1. Continuar validación visual en `/nosotros`, `/faq` y `/cotizar`.
2. Depurar estilos grandes por página (`nosotros`, `faq`, `cotizar`, `espacios`) y extraer estilos compartidos.
3. Preparar inventario CMS.
4. Más adelante: Supabase, Resend y analytics.

