# CMS Finca La Hermosa

## Variables necesarias

Configurar en local y Vercel:

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

No usar `SUPABASE_SERVICE_ROLE_KEY` en el navegador.

## Base de datos

Aplicar la migración:

```bash
supabase/migrations/202606160001_cms_foundation.sql
```

La migración crea:

- tablas del CMS
- RLS
- grants explícitos para Data API
- bucket público `site-images`
- políticas para lectura pública y escritura autenticada

## Acceso admin

Ruta:

```txt
/admin/login
```

Crear usuarios desde Supabase Auth. Cualquier usuario autenticado puede administrar contenido en esta fase.

## Módulos

- Configuración general
- Páginas
- Paquetes
- Add-ons
- Espacios
- Amenidades
- FAQ
- Categorías FAQ
- Testimonios
- Nosotros
- Cotizador
- Fechas ocupadas

## Cargar contenido actual

Después de entrar a `/admin`, usar el botón **Cargar contenido actual**.

Esto copia los datos actuales del sitio a Supabase para empezar a editar desde el CMS sin capturar todo manualmente.

## Imágenes

Las imágenes se suben desde el formulario del admin al bucket `site-images`.

Carpetas usadas:

- `packages/`
- `spaces/`
- `testimonials/`
- carpetas adicionales según el campo configurado

Para galerías, pegar una URL por línea.

## Fallback

Si Supabase no está configurado, no responde o una tabla está vacía, el sitio usa los datos locales actuales. Esto evita romper producción durante la migración.
