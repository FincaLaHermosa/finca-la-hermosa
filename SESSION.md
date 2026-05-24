# SESSION - 2026-05-23

## Objetivo actual

Migrar los prototipos HTML aprobados a Next.js 15 con fidelidad visual, avanzar hacia componentes React reales y mantener el proyecto fuera de OneDrive.

## Workspace activo

- Ruta: `C:\Users\limin\dev\finca-la-hermosa`
- Rama: `nextjs-site-migration`
- Referencia visual local: `http://localhost:8083`
- Migración React local: `http://localhost:8084`

La carpeta en OneDrive queda como referencia/backup. El desarrollo debe seguir en `C:\Users\limin\dev\finca-la-hermosa` para evitar problemas de sync con `node_modules`, `.next`, watchers y builds.

## Estado actual

- Repo privado en GitHub: `FincaLaHermosa/finca-la-hermosa`.
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
- Se conserva temporalmente la capa CSS de prototipos por página para fidelidad visual mientras se limpia por partes.

## Hecho en este bloque

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

## Verificación reciente

- `npx tsc --noEmit` pasa.
- Servidor local `http://localhost:8084` responde HTTP 200.
- El usuario verificó mobile y confirmó que el ajuste visual quedó bien.

## Decisiones

- No incluir `AGENTS.md` ni `CLAUDE.md` en commits; son cambios locales de agente.
- Para builds limpios: parar servidor 8084, ejecutar `npm run build`, limpiar/reiniciar dev si hace falta.
- Mantener prioridad visual sobre refactor agresivo; extraer componentes compartidos cuando el patrón esté aprobado.

## Pendientes recomendados

1. Hacer build limpio y commit del bloque visual actual.
2. Push a GitHub para disparar deploy en Vercel.
3. Siguiente bloque: continuar limpieza/refactor de componentes repetibles y preparar inventario CMS.
4. Más adelante: conectar Supabase, Resend, analytics y CMS/admin.
