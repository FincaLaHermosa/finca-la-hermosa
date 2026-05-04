# Finca La Hermosa

## ★ Resumen ejecutivo
Venue multifuncional en Estado de México orientado a experiencias memorables en naturaleza. Objetivo de negocio: convertirse en un sistema sólido de adquisición de clientes con experiencias paquetizadas, posicionado por estética y experiencia — no por precio.

---

## ★ Tipo y contexto del proyecto

**Dominio:** Híbrido — Desarrollo web + Estrategia comercial + Contenido

**Contexto:** Profesional-personal — negocio propio, cliente directo

**Orientación para Claude Code:**
Proyecto empresarial propio. Priorizar velocidad de ejecución, diferenciación creativa y coherencia de marca. Las decisiones de diseño están cerradas — no proponer alternativas a la identidad visual. Sí proponer mejoras técnicas y de estructura.

---

## ★ Contexto y objetivos

- **Objetivo principal:** Construir sistema de adquisición de clientes + experiencias paquetizadas que generen leads constantes y conversión medible
- **Cliente / usuario final:** Grupos de 25–30 personas buscando experiencias de escape: celebraciones, retiros, convivencias, campamentos
- **Conversión principal:** Llenar formulario de cotización → recibir PDF personalizado por email + enlace wa.me
- **Entregables definitivos:** Sitio web con CMS propio (Supabase), paquetes definidos, funnel digital operativo
- **Hitos críticos:** Definición de paquetes y pricing → diseño visual (Fase 4 activa) → construcción en código → lanzamiento

---

## ★ Subproyectos y frentes activos

| Subproyecto | Descripción | Estado | Responsable |
|-------------|-------------|--------|-------------|
| Sitio web | Arquitectura aprobada — pasando a diseño visual (Fase 4) | 🔄 En desarrollo | Emanuel |
| CMS con Supabase | Panel de administración custom con código | ⏳ Por iniciar | Emanuel |
| Paquetes y pricing | Estructura de experiencias y precios escalables | ⏳ Pendiente | Emanuel |
| Identidad visual | Branding, paleta, tipografías, sistema de diseño | ✅ Definido | Emanuel |
| Funnel de adquisición | Leads → PDF personalizado → conversión medible | ⏳ Pendiente | Emanuel |
| Estrategia de contenido | Redes sociales, narrativa de marca | ⏳ Pendiente | Emanuel |

---

## ★ FOCO ACTIVO — Sitio web (Fase 4: Diseño visual)

### Objetivo de esta fase
Generar propuestas visuales del sitio usando Claude Design antes de construir en código. La arquitectura está aprobada — el siguiente paso es ver el diseño visual de las secciones clave para aprobar dirección antes de la Fase 6 (código).

### Antecedentes y decisiones previas
- Arquitectura completa aprobada en sesión 2026-05-04
- Stack técnico aprobado: Next.js 15 + Tailwind CSS + Framer Motion + Embla Carousel + Supabase + Resend + React-PDF + React Hook Form + Zod
- Sistema de cotización automatizado definido: formulario multi-step → check de disponibilidad en Supabase → PDF personalizado → Resend email + wa.me link
- Cotizador dual: versión corta embebida en home (3–4 campos) + versión completa en `/cotizar` (multi-step con resumen lateral)
- Estructura de 7 rutas públicas + `/admin`
- Modelo de datos Supabase con 9 tablas definidas

### Estado actual de Fase 4
- Prompt de Claude Design para página de inicio (/) listo y validado — cubre los 8 actos del home en orden exacto al plan aprobado
- Estrategia: página por página en Claude Design; contexto del design system se da una vez, cada página siguiente es solo un mensaje corto con su estructura
- Siguiente acción: pegar el prompt en Claude Design y traer el resultado para aprobación

### Orden de diseño en Claude Design
1. `/` Inicio — prompt listo ✅
2. `/experiencias` — pendiente de describir
3. `/espacios` — pendiente
4. `/nosotros` — pendiente
5. `/faq` — pendiente
6. `/cotizar` — pendiente

### Entregable esperado de Fase 4
Propuestas visuales aprobadas de las 6 páginas públicas. Al aprobar → avanzar a Fase 5 (GitHub repo) y Fase 6 (construcción en código).

### Criterios y límites
- Identidad visual cerrada: no proponer paletas ni tipografías alternativas
- La arquitectura de páginas y secciones NO se reabre
- Paquetes y precios aún son placeholder — no bloquean el diseño visual

### Recursos disponibles
- Design system completo: `Finca La Hermosa Design System/colors_and_type.css`
- Assets SVG: `Finca La Hermosa Design System/assets/` (logos × 3 colores, isotipos × 3 colores)
- Fuente display: `Finca La Hermosa Design System/fonts/against-regular.otf`
- Prototipo HTML funcional: `Finca La Hermosa Design System/ui_kits/website/index.html`
- Referencias de estilo: TUMA, REFORM, ARCH.MONO, CREACY

### Próximos pasos
1. Aprobar propuestas visuales de Claude Design
2. Crear repositorio GitHub con Next.js 15 + Tailwind base (Fase 5)
3. Configurar proyecto Supabase y aplicar schema (Fase 6 inicio)
4. Definir paquetes y pricing (paralelo al desarrollo)

---

## ★ Fases del proyecto global

| # | Fase | Contenido | Estado | Responsable |
|---|------|-----------|--------|-------------|
| 1 | Estrategia | Propuesta de valor, tipologías, modelo de ingresos | ✅ Completada | Emanuel |
| 2 | Identidad visual | Branding, paleta, tipografías, sistema de diseño | ✅ Completada | Emanuel |
| 3 | Arquitectura | Estructura de páginas, secciones, modelo de datos, stack | ✅ Completada | Emanuel |
| 4 | Diseño visual | Propuestas en Claude Design, aprobación de dirección visual | 🔄 En curso | Emanuel |
| 5 | GitHub / repo base | Crear repo, estructura Next.js, variables de entorno | ⏳ Pendiente | Emanuel |
| 6 | Construcción en código | Sitio público + panel /admin + conexión Supabase | ⏳ Pendiente | Emanuel |
| 7 | Retoques visuales | Refinamiento, responsive, animaciones | ⏳ Pendiente | Emanuel |
| 8 | Vercel + deploy | Despliegue, dominio, variables de producción | ⏳ Pendiente | Emanuel |
| 9 | Analytics / marketing | GTM, GA4, Meta Pixel, conversiones | ⏳ Pendiente | Emanuel |
| 10 | Paquetes y pricing | Definición de experiencias y estructura comercial | 🔄 En curso | Emanuel |

---

## ★ Stack técnico aprobado

| Capa | Tecnología | Estado |
|------|-----------|--------|
| Framework | Next.js 15 (App Router) | Aprobado |
| Styling | Tailwind CSS + variables CSS del design system | Aprobado |
| Animaciones | Framer Motion (whileInView, AnimatePresence, staggerChildren) | Aprobado |
| Carruseles | Embla Carousel | Aprobado |
| CMS / Backend | Supabase (DB + Auth + Storage + Edge Functions) | Aprobado |
| Email transaccional | Resend (gratis hasta 3K/mes) | Aprobado (Fase 1) |
| WhatsApp | wa.me link con mensaje pre-armado | Aprobado (Fase 1, sin costo) |
| PDFs | React-PDF o Puppeteer con plantilla CSS design tokens | Aprobado |
| Formularios | React Hook Form + Zod | Aprobado |
| Hosting | Vercel | Aprobado |
| Analytics | GTM + GA4 + Meta Pixel (Instagram) | Pendiente de configurar |

---

## Sistema de diseño

**Estilo:** Minimalista, elegante, editorial tipo Apple. Fotografías full-bleed protagonistas. Glassmorphism en UI. Paleta cálida crema + verde oscuro + terracota.

**Concepto de marca:** *"Un lugar donde los sueños se celebran."*

**Assets disponibles:** Carpeta `Finca La Hermosa Design System/` en la raíz del proyecto.
Contiene: `colors_and_type.css` (tokens CSS listos), fuente `Against Regular`, logos SVG × 3 versiones de color, prototipo HTML funcional completo, previews HTML de cada componente.

---

### Personalidad de marca

| Rasgo | Descripción |
|---|---|
| Natural | Árboles, jardines, agua, fuego, cielo abierto |
| Elegante | Refinado, limpio, nunca ostentoso |
| Familiar | Cálido, humano, hospitalario |
| Soñador | Nuevos comienzos, memoria, unión |
| Versátil | Se adapta a cada tipo de evento |

---

### Voz y tono

- **Persona gramatical:** "tú" (segunda persona informal directa)
- **Idioma:** Español. Formal-casual — no rígido, no coloquial
- **Casing:** Navegación y overlines en MAYÚSCULAS. Títulos en sentence case con saltos de línea emocionales
- **Emoji:** No se usan. Se prefieren íconos de línea delgada
- **Palabras clave de marca:** celebrar · compartir · vivir · soñar · reunirse · descansar · naturaleza · experiencia · hospitalidad · jardines · momentos · recuerdos · encuentro · calma · belleza
- **Evitar:** renta · barato · promoción · salón económico · todo incluido · paquete básico

**Tono correcto:** *"Un espacio rodeado de naturaleza para celebrar, descansar y compartir momentos que se quedan en la memoria."*
**Evitar:** ~~"¡El mejor lugar para tus eventos con alberca, salón y jardines!"~~

---

### Paleta de colores

| Token CSS | Valor | Uso |
|---|---|---|
| `--color-crema-clara` | `#fffdf8` | Fondo de página por defecto |
| `--color-crema-calida` | `#f5f0e8` | Fondos de secciones alternas |
| `--color-crema-media` | `#ede6d6` | Divisores, bordes |
| `--color-verde-finca` | `#2d4949` | Color institucional principal — nav, botones CTA, footers |
| `--color-verde-dark` | `#1e3232` | Footer bg, acentos profundos |
| `--color-verde-light` | `#4a6e6e` | Hover states sobre verde |
| `--color-terracota` | `#c07a5a` | Acento — íconos, overlines, cursivas, botones secundarios |
| `--color-terracota-light` | `#e8c4ad` | Hover bg terracota, tags |
| `--color-texto-cuerpo` | `#5a5040` | Todo el body copy — más cálido que negro |
| `--color-texto-suave` | `#8c7d68` | Captions, meta, texto apagado |
| `--color-carbon` | `#1a1a1a` | Títulos de alto contraste, énfasis |
| `--color-frosted-header` | `rgba(39,63,61,0.78)` | Nav sticky en scroll — backdrop-blur: 12px |

Secciones alternan: crema-clara ↔ crema-cálida. Secciones oscuras: verde-finca o carbon con overlay fotográfico.

---

### Tipografías

| Fuente | Rol | Uso |
|---|---|---|
| **Against Regular** | Display / Identidad | Títulos hero, frases CTA impactantes. Usar con moderación para máximo impacto |
| **Cormorant Garamond** | Editorial Serif | H2 de sección, subtítulos, cursivas emocionales, pull quotes |
| **Jost Light/Regular** | Body / UI Sans | Todo el body copy, nav links, botones, labels, descripciones |

**Firma tipográfica** (patrón en todos los heroes):
```
[Against — blanco, grande]        Cada experiencia,
[Cormorant italic — terracota]    diseñada para ti
```

**Escala de tamaños:**
- `--text-hero`: `clamp(3.5rem, 8vw, 7rem)` — Against hero
- `--text-4xl`: `4rem` — H1 display
- `--text-3xl`: `3rem` — H2 display
- `--text-2xl`: `2.25rem` — H2 editorial
- `--text-xl`: `1.75rem` — H3 / card headings
- `--text-base`: `1rem` — body

---

### Layout y espaciado

- **Ancho máximo de contenido:** ~1200px centrado
- **Padding de sección:** 80–120px vertical — respiración generosa
- **Grid:** 3 columnas para package cards · 4 columnas para feature cards · 2 columnas para split sections
- **Aire:** Las secciones nunca se sienten apretadas. El espacio en blanco es intencional.

---

### Componentes clave

**Glassmorphism (nav sticky):**
- `backdrop-filter: blur(12px)`
- Color: `rgba(39, 63, 61, 0.78)` (verde-finca al 78% de opacidad)
- Usos: navbar en scroll, overlay cards de CTA, overlays sobre imagen

**Cards:**
- Fondo: crema-clara
- Sombra: `0 2px 8px rgba(45,73,73,0.08), 0 8px 24px rgba(45,73,73,0.06)`
- Border radius: 8px (md) o 0 para full-bleed
- Package cards: imagen arriba + cuerpo de contenido + botón CTA full-width

**Border radius:**
- `--radius-sm`: 4px (botones)
- `--radius-md`: 8px (cards)
- `--radius-lg`: 16px (hero overlays)
- `--radius-pill`: 999px (tags/badges)

**Animaciones e interacciones:**
- Transiciones: sutiles, 260ms ease — nunca con rebote
- Hover: cambio de color (verde → verde-light) o reducción de opacidad (0.8)
- Botones: oscurecimiento leve en hover; sin transforms de escala
- Scroll: parallax-lite en hero; fade-in por sección
- Sin animaciones agresivas — la marca es calmada y refinada

**Sistema de animaciones (Framer Motion):**

| Tipo | Cuándo | Implementación |
|------|--------|----------------|
| Fade-in al scroll | Cada sección al entrar viewport | `whileInView` + IntersectionObserver |
| Parallax-lite | Imágenes hero | CSS `transform` + scroll listener |
| Cross-fade tabs | Cambio entre tipos de experiencia | `AnimatePresence` |
| Hover lift | Cards de paquetes y espacios | CSS `transform: translateY` |
| Stagger reveal | Listas de incluidos en paquetes | `staggerChildren` |
| Carrusel suave | Espacios y testimonios | Embla Carousel |

**Regla:** ninguna animación pasa de 420ms · ease nunca bouncy · respetar `prefers-reduced-motion`.

---

### Iconografía

- **Estilo:** SVG stroke-based, peso delgado (~1.5px), minimal, orgánico. Nunca filled/solid.
- **Librería de referencia:** Lucide icons (CDN): `https://unpkg.com/lucide@latest/dist/umd/lucide.min.js`
- El **isotipo** (arco con motivo vegetal) funciona como: favicon, icono de redes, marca de agua, logo de footer.

**Assets SVG disponibles en `Finca La Hermosa Design System/assets/`:**
- `logo-terracota.svg` — Wordmark completo en terracota
- `logo-verde.svg` — Wordmark completo en verde finca
- `logo-blanco.svg` — Wordmark completo en blanco
- `isotipo-terracota.svg` — Solo isotipo en terracota
- `isotipo-verde.svg` — Solo isotipo en verde finca
- `isotipo-blanco.svg` — Solo isotipo en blanco

---

### Fotografía

- **Estilo:** Cálida, aspiracional, real — no muy saturada, no inmobiliaria
- **Contenido:** Jardines con buena luz, alberca en contexto natural, salón preparado, terraza, flores, fuego, agua, caminos, personas conviviendo, tardes con luz cálida
- **Tono de color:** Hora dorada, teroso, verdes naturales — sin tonos azul frío
- La fotografía es esencial — la marca vive en sus imágenes
- **Fase 1:** Placeholders con fotos reales de venues similares (Unsplash/Pexels curadas). Producción fotográfica del venue real se coordina en paralelo.

---

## Arquitectura del sitio web (aprobada)

### Rutas públicas

```
/                  Landing principal (80% del trabajo de conversión)
/experiencias      Catálogo de paquetes + cotizador con tipo pre-seleccionado
/espacios          Galería editorial de los activos del venue
/nosotros          Historia familiar y diferenciadores
/faq               Preguntas frecuentes con búsqueda y acordeón
/cotizar           Cotizador completo multi-step
/cotizar/listo     Pantalla de confirmación + opciones de contacto
```

### Rutas admin

```
/admin/login
/admin/paquetes
/admin/espacios
/admin/testimonios
/admin/faq
/admin/cotizaciones     ← Inbox de leads
/admin/calendario       ← Marcar fechas ocupadas
/admin/config
```

### API routes

```
/api/cotizar            ← Recibe form, genera PDF, envía email
/api/disponibilidad     ← Check fecha + sugerencias cercanas (±3 días)
/api/pdf/[id]           ← Genera PDF on-demand
```

### Inicio — 8 actos de scroll-narrativa

| # | Sección | Animación | Rol |
|---|---------|-----------|-----|
| 1 | Hero full-bleed | Parallax-lite + fade-in escalonado Against → Cormorant italic | Inspirar. CTA primario "Cotizar mi experiencia" |
| 2 | Tipos de experiencia (tabs/pills) | Cross-fade de imagen + slide de contenido | Filtrar audiencia |
| 3 | Espacios en un vistazo | Horizontal scroll con cards que crecen en hover | Mostrar venue sin saturar |
| 4 | Cómo funciona (3 pasos) | Reveal numérico secuencial al scroll | Reducir fricción mental |
| 5 | Cotizador embebido | Aparición progresiva de campos | Conversión principal in-page |
| 6 | Paquetes destacados | Cards con hover lift + carrusel horizontal | Mostrar oferta |
| 7 | Testimonios | Carrusel con auto-rotación sutil | Prueba social |
| 8 | CTA final dark | Sección oscura con frosted overlay | Última oportunidad |

---

## Sistema de cotización automatizada

### Flujo
1. Usuario llena cotizador (3–5 pasos): tipo de evento → fecha → check disponibilidad → invitados → add-ons → contacto
2. Si fecha ocupada: alerta con sugerencias cercanas (±3 días) — debe elegir otra antes de continuar
3. Si disponible: submit → Edge Function → identifica paquete óptimo → genera PDF → envía por Resend
4. PDF incluye: nombre del usuario, fecha tentativa, precio calculado (invitados + add-ons), 1–2 alternativas de paquete, hoja final con CTA para agendar visita
5. Lead queda en Supabase con estado `nuevo` para seguimiento manual

### Sistema de disponibilidad
- Tabla `eventos_confirmados` con fecha_inicio, fecha_fin, tipo, notas
- Admin en `/admin/calendario` — vista mensual, click para marcar ocupado
- Endpoint `/api/disponibilidad?fecha=YYYY-MM-DD` → `{ disponible: bool, sugerencias: [...] }`
- Campo de fecha en cotizador hace fetch al endpoint en cada cambio (debounced)

### PDF personalizado
- Saludo con nombre del usuario
- Fecha tentativa impresa + leyenda "sujeta a confirmación"
- Precio total calculado automáticamente (invitados + add-ons)
- 1–2 páginas con paquetes que aplican al usuario
- Hoja final con próximo paso: link para agendar visita
- Diseño editorial con foto fullbleed + datos del paquete

---

## Modelo de datos Supabase

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

## Activos del venue

- Casa principal (6 habitaciones)
- 2 jardines amplios
- Salón de eventos (~22 × 14 m)
- Terraza continua (~3.5 m ancho)
- Alberca
- Rooftop / mirador
- Café pequeño
- Puente colgante
- Área de fogata
- Columpio alto
- Asador
- Estacionamiento
- Circuito tipo ciclopista
- Entorno boscoso

---

## Modelo de ingresos (base actual)

**Tarifa base:** $13,000 MXN / día · 25–30 personas

**Incluye:** Jardines, casa principal, alberca, puente colgante, estacionamiento, asador

**Staff incluido:** Anfitrión principal + coordinadora de atención + asistente operativo

**Add-ons:**
- Salón de eventos + cocineta + mobiliario: +$8,000 MXN
- Extras unitarios ($700 MXN c/u): fogata, cine al aire libre, coffee break, equipo audiovisual

**Problema actual:** Sin paquetes definidos ni estructura comercial escalable. Resolver antes del lanzamiento web.

---

## Tipologías de uso

- **Eventos sociales:** graduaciones, cumpleaños, reuniones privadas, eventos familiares
- **Eventos estructurados:** campamentos, retiros, actividades grupales
- **Day-use:** grupos pequeños o medianos por día
- **Hospedaje:** estancia por noche tipo Airbnb (en evaluación)

---

## Decisiones tomadas (no reabrir)

- Posicionamiento: experiencia + estética, no competencia por precio
- Paleta de colores: verde-finca `#2d4949` + terracota `#c07a5a` + cremas `#fffdf8` / `#f5f0e8` (valores exactos del design system)
- Tipografías: Against Regular / Cormorant Garamond / Jost (Poppins descartado)
- Estilo: minimalista editorial tipo Apple con glassmorphism
- Arquitectura de sitio: 7 rutas públicas + /admin (estructura aprobada en sesión 2026-05-04)
- Backend/CMS: Supabase con código custom
- Hosting: Vercel
- Flujo de desarrollo: Claude Code → GitHub → Vercel
- Cotizador dual: versión corta embebida en home + versión completa en /cotizar
- Entrega de PDF Fase 1: Resend para email + botón wa.me (sin WhatsApp Business API por ahora)
- Fotografía Fase 1: placeholders con fotos reales de venues similares (Unsplash/Pexels curadas); producción fotográfica real se coordina en paralelo
- Galería /espacios: lightbox fullscreen (overlay con flechas + ESC); si no convence visualmente, alternar a carrusel horizontal
- No saturar el venue — priorizar experiencia íntima sobre volumen

---

## Principios del proyecto

- Diseñar experiencias, no rentar espacios
- No competir por precio
- Priorizar estética + funcionalidad en todo entregable
- Construir marca, no solo operación
- No saturar de gente — cuidar la experiencia

---

## Referencias visuales del sitio

- **TUMA** — venue natural editorial
- **REFORM** — arquitectura premium, espaciado generoso
- **ARCH.MONO** — numeración tipo (01)(02), editorial oscuro
- **CREACY** — portafolio fotográfico, galería fullbleed

---

## Riesgos abiertos

- **Paquetes y precios sin definir** — `/experiencias` arranca con paquetes placeholder editables desde `/admin`
- **`colors_and_type.css` declara Poppins** — actualizar a Jost antes de Fase 6
- **Producción fotográfica** — bloqueante para lanzamiento real, no para desarrollo

---

## Historial de cambios

`2026-05-04` — Prompt de Claude Design para página de inicio listo: 8 actos completos en orden fiel al plan aprobado. Estrategia de diseño página por página definida. FOCO ACTIVO actualizado con estado de Fase 4 y orden de diseño.
`2026-05-04` — Arquitectura del sitio web aprobada (7 rutas + admin). Stack técnico completo definido. Sistema de cotización automatizada y modelo de datos Supabase (9 tablas) documentados. Fases del proyecto reordenadas según flujo /arqweb. FOCO ACTIVO actualizado a Fase 4 (diseño visual). Ruta de assets SVG corregida a `Finca La Hermosa Design System/assets/`. Referencias visuales agregadas.
`2026-05-03` — Tipografía actualizada: Poppins → Jost. Ruta del design system actualizada a carpeta extraída. Poppins marcado como descartado en decisiones.
`2026-05-02` — Sistema de diseño completo integrado. Paleta corregida a valores exactos del design system. Sección expandida con voz/tono, tipografía, componentes, iconografía y fotografía.
`2026-05-02` — CLAUDE.md inicial generado. Contexto completo del proyecto volcado desde memoria de sesión.
