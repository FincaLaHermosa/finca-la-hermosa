# SESSION - 2026-05-22

## Objetivo actual

Migrar los prototipos HTML aprobados de `sitio/` a una base Next.js 15 en carpeta local fuera de OneDrive.

## Workspace activo

Ruta activa: `C:\dev\finca-la-hermosa`.
Rama activa: `nextjs-site-migration`.

La carpeta anterior en OneDrive queda como referencia/backup, pero el desarrollo debe continuar en la ruta local para evitar problemas de sync con `node_modules`, `.next`, watchers y builds.

## Hecho

- `master` en el repo de OneDrive recibió por fast-forward la rama `codex/responsive-site-adapt`.
- Se eliminó la rama `codex/responsive-site-adapt`.
- Se clonó el proyecto a `C:\dev\finca-la-hermosa`.
- Se creó la rama `nextjs-site-migration`.
- Se montó base Next.js 15.5.18 con App Router.
- Se instalaron dependencias base: React 19, Framer Motion, Embla, Lucide, Supabase, React Hook Form, Zod, React PDF y Tailwind/PostCSS.
- Se copiaron assets aprobados a `public/assets` y `public/fonts`.
- Se crearon rutas públicas iniciales:
  - `/`
  - `/experiencias`
  - `/espacios`
  - `/nosotros`
  - `/faq`
  - `/cotizar`
  - `/cotizar/listo`
- Se creó contenido estructurado inicial en `data/site.ts`.
- Se crearon componentes base: nav, footer, hero, headers, cards, FAQ y cotizador.
- Commit creado: `b39a47c Start Next.js site migration`.

## Verificación realizada

- `npm run build` pasa correctamente.
- Servidor local Next activo en `http://localhost:8083/`.
- URL LAN Wi-Fi: `http://192.168.100.7:8083/`.
- Browser integrado validó:
  - rutas principales renderizan sin overlay;
  - `/cotizar` no tiene overflow horizontal en 390x844;
  - el hero mobile no se encima con el nav;
  - el cotizador avanza de paso 1 a paso 2;
  - el copy quedó como `Fecha invitados.` sin la `e`.

## No incluir / pendientes locales

- `AGENTS.md` y `CLAUDE.md` siguen modificados localmente por instrucciones del proyecto; no se incluyeron en el commit de migración.
- El servidor genera logs `output-next-8083.*.log`, ya ignorados por `.gitignore`.
- `npm audit` reporta 2 vulnerabilidades moderadas transitivas; no se aplicó `audit fix --force` porque puede subir majors.

## Siguiente paso recomendado

Hacer una pasada de fidelidad visual página por página contra los prototipos de `sitio/`, empezando por `/cotizar` y `/espacios`, y después preparar el inventario de contenido editable para el CMS.
