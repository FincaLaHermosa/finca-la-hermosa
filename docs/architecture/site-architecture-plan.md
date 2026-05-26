# Plan — Arquitectura del sitio web Finca La Hermosa

## Contexto

El sitio web es la herramienta principal de adquisición de clientes para Finca La Hermosa. Recibirá tráfico desde **Instagram** (visitantes con curiosidad pero baja intención) y **Google** (visitantes con intención más alta). La conversión principal es **llenar un formulario de cotización** que dispare un envío automatizado de un **PDF personalizado** con el paquete que mejor le acomoda al usuario, vía **email o WhatsApp**.

El reto: que la respuesta automática se sienta **personalizada** sin perder velocidad de respuesta. Esto convierte al sitio no solo en una landing, sino en un **funnel de cotización inteligente**.

El sistema visual ya está definido (paleta cálida, tipografía Against + Cormorant + Jost, estética editorial con glassmorphism). El sitio debe sentirse **muy dinámico, animado, elegante**, y construido sobre referencias editoriales de venues naturales (TUMA), arquitectura premium (REFORM, ARCH.MONO) y portafolios fotográficos (CREACY).

---

## Propuesta de arquitectura

### Estructura de páginas — multi-página editorial con cotizador como pieza central

```
/                  Landing principal (hace el 80% del trabajo de conversión)
/experiencias      Catálogo completo de paquetes + cotizador
/espacios          Galería editorial de los activos del venue
/nosotros          Historia familiar y diferenciadores
/faq               Preguntas frecuentes
/cotizar           Cotizador completo (multi-step form)
                   ↓ submit
/cotizar/listo     Pantalla de confirmación + opciones de contacto
```

### Elementos globales presentes en todas las páginas
- Nav glassmorphism sticky con cambio en scroll
- Botón flotante de WhatsApp
- Botón "Cotizar ahora" persistente en nav
- Footer con isotipo, redes, contacto, mapa

---

## Sección crítica — `/` Inicio (la página que más vende)

Pensada como **scroll-narrativa de 8 actos**, donde cada sección tiene su rol:

| # | Sección | Animación clave | Rol funcional |
|---|---------|----------------|---------------|
| 1 | **Hero full-bleed** | Parallax-lite en imagen + fade-in escalonado del título Against → Cormorant italic | Inspirar y engantar. CTA primario "Cotizar mi experiencia" |
| 2 | **Tipos de experiencia** (pills/tabs) | Tab switch con cross-fade de imagen + slide del contenido | Filtrar audiencia (boda vs corporativo vs retiro) |
| 3 | **Espacios en un vistazo** | Horizontal scroll con cards que crecen en hover | Mostrar el venue sin saturar |
| 4 | **Cómo funciona** (3 pasos) | Reveal numérico secuencial al hacer scroll | Reducir fricción mental antes del cotizador |
| 5 | **Cotizador embebido** (formulario corto en línea, no modal) | Aparición progresiva de campos al avanzar | **Conversión principal in-page** — no requiere ir a otra ruta |
| 6 | **Paquetes destacados** | Cards con hover lift + carrusel horizontal | Mostrar variedad de oferta |
| 7 | **Testimonios** | Carrusel con auto-rotación + transición sutil | Prueba social |
| 8 | **CTA final dark** | Sección oscura con frosted overlay | Última oportunidad de conversión |

---

## Sistema de cotización automatizada (el core de conversión)

### Flujo del usuario
1. Usuario llena formulario corto (3–5 pasos): tipo de evento → **fecha → check de disponibilidad en tiempo real** → invitados → add-ons → contacto
2. Si fecha está ocupada: alert con sugerencia de fechas cercanas (±3 días) disponibles, usuario debe elegir otra antes de continuar
3. Si fecha está disponible: submit dispara backend (Supabase Edge Function o API route)
4. Sistema **identifica el paquete óptimo** basado en respuestas + genera PDF personalizado con leyenda "fecha tentativa, sujeta a confirmación"
5. PDF se envía vía **email automático** + botón `wa.me` con mensaje pre-armado
6. Lead queda guardado en Supabase con estado `nuevo` para seguimiento manual

### Sistema de disponibilidad de fechas
- Tabla `eventos_confirmados` (id, fecha_inicio, fecha_fin, tipo, notas)
- Calendar admin en `/admin/calendario` con vista mensual; click en día → marcar como ocupado
- Endpoint `/api/disponibilidad?fecha=YYYY-MM-DD` que retorna `{ disponible: bool, sugerencias: [...] }`
- En el cotizador, el campo de fecha hace fetch al endpoint en cada cambio (debounced)
- Visual: día disponible verde sutil, día ocupado tachado, día sugerido con highlight terracota

### El PDF personalizado — atajos de "personalización" sin trabajo manual
- **Saludo con el nombre** del usuario
- **Fecha tentativa** del usuario impresa en el PDF
- **Cálculo automático del precio total** según invitados + add-ons elegidos
- **Una hoja por paquete** que aplica al usuario (mostrar 1–2 alternativas con upgrade)
- **Hoja final con próximo paso**: link a calendar para agendar visita
- **Diseño editorial** (no tabla aburrida) — cada hoja con foto fullbleed + datos del paquete + lista de incluidos

### Stack técnico para PDF + envío automatizado
- **PDF**: React-PDF o Puppeteer + plantilla HTML con tokens CSS del design system
- **Email**: Resend (gratis hasta 3K/mes, fácil API)
- **WhatsApp**: WhatsApp Business API vía Twilio o WATI (alternativa: link `wa.me` con mensaje pre-armado + PDF como adjunto en email)
- **Backend**: Supabase Edge Functions
- **Storage de PDFs**: Supabase Storage

---

## Páginas secundarias (mapa abreviado)

### `/experiencias`
- Hero compacto con título grande
- Pills tabs con los 5 tipos (Eventos Sociales / Corporativos / Retiros / Estancia / One Day)
- Grid de paquetes con precio + foto + lista de incluidos
- Sección de add-ons en grid
- CTA para abrir el cotizador con el tipo pre-seleccionado

### `/espacios`
- Hero editorial con frase de introducción
- Cada espacio como sección split (foto grande + nombre + descripción + capacidad)
- Numerado tipo (01) (02) — referencia CREACY/ARCH.MONO
- **Lightbox para galería expandida por espacio** (overlay fullscreen con flechas + ESC). Si no convence visualmente, alternativa lista para cambiar: carrusel horizontal por espacio
- CTA final: "Conoce la finca en persona" → agendar visita

### `/nosotros`
- Hero editorial con frase de origen
- Split historia + foto familiar
- Diferenciadores en cards numeradas
- Mapa con ubicación
- CTA suave hacia experiencias

### `/faq`
- Acordeón agrupado por categoría
- Búsqueda simple
- CTA al final hacia cotizador o WhatsApp

### `/cotizar`
- Versión completa del cotizador (más pasos, más detalle)
- Progress bar
- Resumen lateral en desktop con lo que se ha elegido
- Validación en tiempo real

---

## Sistema de animaciones — claves de implementación

| Tipo | Cuándo | Tecnología sugerida |
|------|--------|---------------------|
| Fade-in al scroll | Cada sección al entrar viewport | Framer Motion `whileInView` o IntersectionObserver |
| Parallax-lite | Imágenes hero | CSS `transform` + scroll listener |
| Cross-fade tabs | Cambio entre tipos de experiencia | Framer Motion `AnimatePresence` |
| Hover lift | Cards de paquetes y espacios | CSS `transform: translateY` |
| Stagger reveal | Listas de incluidos en paquetes | Framer Motion `staggerChildren` |
| Carrusel suave | Espacios y testimonios | Embla Carousel o Swiper |
| Number counter | Stats si se incluyen (ej. "300 eventos celebrados") | CountUp.js |

**Regla**: ninguna animación pasa de 420ms · ease curves nunca bouncy · todo respeta `prefers-reduced-motion`.

---

## Stack técnico recomendado

| Capa | Tecnología | Razón |
|------|-----------|-------|
| Framework | **Next.js 15** (App Router) | SEO crítico para Google, server components |
| Styling | **Tailwind CSS** + variables CSS del design system | Velocidad + tokens existentes |
| Animaciones | **Framer Motion** | Estándar de calidad para animaciones declarativas |
| Carruseles | **Embla Carousel** | Ligero, accesible |
| Backend / DB / Auth | **Supabase** | Ya decidido en CLAUDE.md |
| Email transaccional | **Resend** | Sencillo, generoso en free tier |
| WhatsApp | **WhatsApp Business API (Twilio o WATI)** o `wa.me` link | Por evaluar costo |
| PDFs | **React-PDF** o **Puppeteer** | Plantilla customizable con design system |
| Forms | **React Hook Form** + **Zod** | Validación robusta |
| Hosting | **Vercel** | Ya decidido |
| Analytics | **GTM** + **GA4** + **Meta Pixel** (Instagram) | Crítico para campañas |

---

## Modelo de datos preliminar (Supabase)

```
paquetes              (id, nombre, tipo, precio_base, incluidos[], imagen, visible, orden)
add_ons               (id, nombre, precio, icono, visible)
espacios              (id, nombre, descripcion, capacidad, fotos[], visible, orden)
testimonios           (id, nombre, texto, tipo_evento, foto, visible)
faq                   (id, pregunta, respuesta, categoria, orden, visible)
seo                   (id, pagina, meta_title, meta_description, og_image)
config                (id, whatsapp, instagram, facebook, email, direccion)
cotizaciones          (id, nombre, email, telefono, tipo_evento, fecha, invitados,
                       add_ons[], paquete_recomendado, pdf_url, estado, created_at)
eventos_confirmados   (id, fecha_inicio, fecha_fin, tipo, notas, created_at)
```

---

## Páginas/rutas críticas a construir

```
app/
├── (public)/
│   ├── page.tsx                  ← Inicio
│   ├── experiencias/page.tsx
│   ├── espacios/page.tsx
│   ├── nosotros/page.tsx
│   ├── faq/page.tsx
│   └── cotizar/
│       ├── page.tsx              ← Multi-step form
│       └── listo/page.tsx        ← Confirmación
├── (admin)/
│   ├── login/page.tsx
│   └── admin/
│       ├── paquetes/
│       ├── espacios/
│       ├── testimonios/
│       ├── faq/
│       ├── cotizaciones/         ← Inbox de leads
│       ├── calendario/           ← Marcar fechas ocupadas
│       └── config/
└── api/
    ├── cotizar/route.ts          ← Recibe form, genera PDF, envía email/WA
    ├── disponibilidad/route.ts   ← Check fecha + sugerencias cercanas
    └── pdf/[cotizacionId]/route.ts  ← Genera PDF on-demand
```

---

## Verificación end-to-end (cómo validar al final)

1. Abrir `/` desde Instagram simulando móvil — el hero carga rápido y el cotizador es accesible en menos de 2 scrolls
2. Llenar el cotizador embebido en home → recibir PDF en email funcional con datos personalizados (nombre, fecha, paquete)
3. Probar el cotizador completo en `/cotizar` con 3 combinaciones distintas → verificar que el paquete recomendado cambia
4. Validar que el lead aparece en `/admin/cotizaciones` con todos los datos
5. Probar `/admin` editando un paquete → cambio se refleja en sitio público sin redeploy
6. Lighthouse score >90 en Performance, Accessibility, SEO en `/`
7. Validar GTM disparando eventos: `view_home`, `start_cotizacion`, `submit_cotizacion`
8. Test mobile en dispositivos reales — animaciones fluidas, sin layout shift

---

## Decisiones cerradas tras revisión

- **Cotizador dual**: versión corta embebida en home (3–4 campos rápidos) + versión completa en `/cotizar` con flujo multi-step
- **Entrega del PDF (Fase 1)**: Resend para email automatizado + botón `wa.me` con mensaje pre-armado (sin costo de WhatsApp Business API por ahora; migrar después si vale la pena)
- **Fotografía**: usar placeholders con fotos reales de venues similares (Unsplash/Pexels curadas, NO bloques de color sólido) para ver la estética del sitio en contexto. Producción fotográfica del venue real se agenda como tarea paralela
- **Estructura aprobada**: 6 páginas públicas (Inicio, Experiencias, Espacios, Nosotros, FAQ, Cotizar) + `/admin`

---

## Riesgos abiertos

- **Paquetes y precios no están definidos** — `/experiencias` arranca con paquetes placeholder editables después desde `/admin`. La lógica de "paquete recomendado" del cotizador queda con reglas simples (por tipo + invitados) hasta tener data real
- **`colors_and_type.css` declara Poppins** — actualizar a Jost antes de iniciar Fase 6
- **Producción fotográfica del venue** — bloqueante para lanzamiento real, no para desarrollo. Coordinar fechas de sesión durante construcción