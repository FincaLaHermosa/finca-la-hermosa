export type AdminField = {
  key: string;
  label: string;
  type: "text" | "textarea" | "number" | "boolean" | "json" | "text_array" | "image" | "date" | "select" | "multi_select";
  required?: boolean;
  folder?: string;
  options?: AdminOption[];
  allowCustom?: boolean;
  help?: string;
};

export type AdminOption = {
  value: string;
  label: string;
};

export const packageCategoryOptions: AdminOption[] = [
  { value: "social", label: "Eventos Sociales" },
  { value: "corporativo", label: "Corporativos" },
  { value: "retiro", label: "Retiros" },
  { value: "privado", label: "Estancia Privada" },
];

export const adminSectionOptions: AdminOption[] = [
  { value: "experiencias", label: "Experiencias" },
  { value: "cotizar", label: "Cotizador" },
];

export const addonIconOptions: AdminOption[] = [
  { value: "salon", label: "Salón" },
  { value: "fogata", label: "Fogata" },
  { value: "cine", label: "Cine" },
  { value: "coffee", label: "Coffee break" },
  { value: "av", label: "Audio / video" },
  { value: "hospedaje", label: "Hospedaje" },
];

export const faqCategoryOptions: AdminOption[] = [
  { value: "reservas", label: "Reservas" },
  { value: "espacios", label: "Espacios" },
  { value: "servicios", label: "Servicios" },
  { value: "pagos", label: "Pagos" },
  { value: "logistica", label: "Logística" },
];

export const faqGroupOptions: AdminOption[] = [
  { value: "Reservas y disponibilidad", label: "Reservas y disponibilidad" },
  { value: "Espacios y servicios", label: "Espacios y servicios" },
  { value: "Pagos y condiciones", label: "Pagos y condiciones" },
  { value: "Logística del evento", label: "Logística del evento" },
];

export const eventTypeOptions: AdminOption[] = [
  { value: "social", label: "Evento social" },
  { value: "corporativo", label: "Evento corporativo" },
  { value: "retiro", label: "Retiro" },
  { value: "privado", label: "Estancia privada" },
  { value: "boda", label: "Boda" },
  { value: "cumpleanos", label: "Cumpleaños" },
  { value: "otro", label: "Otro" },
];

export const testimonialBackgroundOptions: AdminOption[] = [
  { value: "#fffdf5", label: "Crema" },
  { value: "#f5f0e8", label: "Crema cálido" },
  { value: "#f1dfd4", label: "Terracota claro" },
  { value: "#e6ece4", label: "Verde claro" },
];

export const testimonialPinOptions: AdminOption[] = [
  { value: "#9d563d", label: "Terracota" },
  { value: "#2d4949", label: "Verde" },
  { value: "#6f634f", label: "Oliva" },
];

export const testimonialRotationOptions: AdminOption[] = [
  { value: "rotate(-2deg)", label: "Inclinado izquierda" },
  { value: "rotate(0deg)", label: "Recto" },
  { value: "rotate(2deg)", label: "Inclinado derecha" },
];

export type AdminResource = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  group: "site" | "content" | "commercial" | "system";
  table: string;
  idKey: string;
  orderKey?: string;
  listFields: string[];
  fields: AdminField[];
};

export const adminResourceGroups: Array<{ id: AdminResource["group"]; label: string }> = [
  { id: "site", label: "Sitio" },
  { id: "commercial", label: "Comercial" },
  { id: "content", label: "Contenido" },
  { id: "system", label: "Sistema" },
];

export const adminResources: AdminResource[] = [
  {
    slug: "config",
    title: "Configuración general",
    eyebrow: "Datos globales",
    description: "Edita los datos de contacto, redes, dirección, WhatsApp y textos globales del sitio.",
    group: "site",
    table: "site_config",
    idKey: "id",
    listFields: ["id", "email", "phone_label", "whatsapp_number"],
    fields: [
      { key: "id", label: "Identificador interno", type: "text", required: true },
      { key: "whatsapp_number", label: "Número de WhatsApp", type: "text", required: true },
      { key: "phone_label", label: "Teléfono mostrado", type: "text", required: true },
      { key: "phone_href", label: "Teléfono para enlace", type: "text", required: true },
      { key: "email", label: "Correo de contacto", type: "text", required: true },
      { key: "instagram_url", label: "Enlace de Instagram", type: "text" },
      { key: "facebook_url", label: "Enlace de Facebook", type: "text" },
      { key: "address_label", label: "Dirección mostrada", type: "text" },
      { key: "maps_url", label: "Enlace de Google Maps", type: "text" },
      { key: "footer_text", label: "Texto del footer", type: "textarea" },
      { key: "response_time_label", label: "Texto de tiempo de respuesta", type: "text" },
      { key: "copyright_label", label: "Texto de copyright", type: "text" },
    ],
  },
  {
    slug: "pages",
    title: "Páginas",
    eyebrow: "Contenido por ruta",
    description: "Ajusta contenido avanzado por página: hero, secciones y datos SEO.",
    group: "site",
    table: "pages",
    idKey: "slug",
    orderKey: "slug",
    listFields: ["slug", "title", "visible"],
    fields: [
      { key: "slug", label: "Ruta interna", type: "text", required: true },
      { key: "title", label: "Título interno", type: "text", required: true },
      { key: "hero", label: "Hero avanzado", type: "json" },
      { key: "sections", label: "Secciones avanzadas", type: "json" },
      { key: "seo", label: "SEO avanzado", type: "json" },
      { key: "visible", label: "Publicar en el sitio", type: "boolean" },
    ],
  },
  {
    slug: "packages",
    title: "Paquetes",
    eyebrow: "Oferta comercial",
    description: "Edita los paquetes que aparecen en Experiencias: precio, capacidad, imagen e incluidos.",
    group: "commercial",
    table: "packages",
    idKey: "id",
    orderKey: "sort_order",
    listFields: ["title", "price", "capacity", "visible"],
    fields: [
      { key: "id", label: "Identificador interno", type: "text", required: true },
      { key: "filters", label: "Categorías donde aparece", type: "multi_select", options: packageCategoryOptions, allowCustom: true, help: "Las categorías nuevas se guardan, pero para mostrarlas como filtro público hay que conectar después la navegación pública." },
      { key: "image", label: "Imagen", type: "image", folder: "packages" },
      { key: "image_alt", label: "Descripción de la imagen", type: "text" },
      { key: "badge", label: "Etiqueta destacada", type: "text" },
      { key: "overline", label: "Texto superior", type: "text" },
      { key: "title", label: "Nombre", type: "text", required: true },
      { key: "price", label: "Precio visible", type: "text" },
      { key: "unit", label: "Unidad", type: "text" },
      { key: "capacity", label: "Capacidad", type: "text" },
      { key: "features", label: "Incluidos", type: "text_array" },
      { key: "cta", label: "Texto del botón", type: "text" },
      { key: "sort_order", label: "Posición en la lista", type: "number" },
      { key: "visible", label: "Publicar en el sitio", type: "boolean" },
    ],
  },
  {
    slug: "addons",
    title: "Add-ons",
    eyebrow: "Extras",
    description: "Edita los extras que pueden sumarse a una propuesta o cotización.",
    group: "commercial",
    table: "addons",
    idKey: "id",
    orderKey: "sort_order",
    listFields: ["name", "price_label", "quote_only", "visible"],
    fields: [
      { key: "id", label: "Identificador interno", type: "text", required: true },
      { key: "icon", label: "Icono", type: "select", options: addonIconOptions, allowCustom: true },
      { key: "name", label: "Nombre", type: "text", required: true },
      { key: "description", label: "Descripción", type: "textarea" },
      { key: "price_label", label: "Precio visible", type: "text" },
      { key: "price_amount", label: "Precio para el cálculo", type: "number" },
      { key: "quote_only", label: "Solo bajo cotización", type: "boolean" },
      { key: "dashed", label: "Borde punteado", type: "boolean" },
      { key: "accent_price", label: "Resaltar precio", type: "boolean" },
      { key: "appears_in", label: "Secciones donde aparece", type: "multi_select", options: adminSectionOptions, allowCustom: true },
      { key: "sort_order", label: "Posición en la lista", type: "number" },
      { key: "visible", label: "Publicar en el sitio", type: "boolean" },
    ],
  },
  {
    slug: "spaces",
    title: "Espacios",
    eyebrow: "Venue",
    description: "Edita los espacios principales de la finca, sus imágenes, capacidad y galería.",
    group: "content",
    table: "spaces",
    idKey: "id",
    orderKey: "sort_order",
    listFields: ["name", "capacity", "visible"],
    fields: [
      { key: "id", label: "Identificador interno", type: "text", required: true },
      { key: "name", label: "Nombre", type: "text", required: true },
      { key: "bullets", label: "Puntos destacados", type: "text_array" },
      { key: "capacity", label: "Capacidad", type: "text" },
      { key: "image", label: "Imagen principal", type: "image", folder: "spaces" },
      { key: "image_alt", label: "Descripción de la imagen", type: "text" },
      { key: "gallery", label: "Galería", type: "text_array", folder: "spaces" },
      { key: "caption", label: "Texto bajo la imagen", type: "text" },
      { key: "sort_order", label: "Posición en la lista", type: "number" },
      { key: "visible", label: "Publicar en el sitio", type: "boolean" },
    ],
  },
  {
    slug: "amenities",
    title: "Amenidades",
    eyebrow: "Inventario",
    description: "Edita amenidades incluidas y servicios disponibles como extra.",
    group: "content",
    table: "amenities",
    idKey: "id",
    orderKey: "sort_order",
    listFields: ["name", "detail", "addon", "visible"],
    fields: [
      { key: "id", label: "Identificador interno", type: "text", required: true },
      { key: "name", label: "Nombre", type: "text", required: true },
      { key: "detail", label: "Detalle", type: "text" },
      { key: "addon", label: "Es un extra", type: "boolean" },
      { key: "sort_order", label: "Posición en la lista", type: "number" },
      { key: "visible", label: "Publicar en el sitio", type: "boolean" },
    ],
  },
  {
    slug: "faqs",
    title: "Preguntas frecuentes",
    eyebrow: "Dudas",
    description: "Edita las preguntas y respuestas que ayudan a resolver dudas antes de cotizar.",
    group: "content",
    table: "faqs",
    idKey: "id",
    orderKey: "sort_order",
    listFields: ["category_id", "question", "visible"],
    fields: [
      { key: "id", label: "Identificador interno", type: "text", required: true },
      { key: "category_id", label: "Categoría", type: "select", required: true, options: faqCategoryOptions, allowCustom: true, help: "Si escribes una categoría nueva, crea también su registro en Categorías FAQ para que aparezca publicada." },
      { key: "question", label: "Pregunta", type: "textarea", required: true },
      { key: "answer", label: "Respuesta", type: "textarea", required: true },
      { key: "sort_order", label: "Posición en la lista", type: "number" },
      { key: "visible", label: "Publicar en el sitio", type: "boolean" },
    ],
  },
  {
    slug: "faq-categories",
    title: "Categorías FAQ",
    eyebrow: "Dudas",
    description: "Edita los grupos que organizan las preguntas frecuentes.",
    group: "content",
    table: "faq_categories",
    idKey: "id",
    orderKey: "sort_order",
    listFields: ["label", "group_label", "visible"],
    fields: [
      { key: "id", label: "Identificador interno", type: "text", required: true },
      { key: "label", label: "Nombre de la categoría", type: "text", required: true },
      { key: "group_label", label: "Título de grupo", type: "select", required: true, options: faqGroupOptions, allowCustom: true },
      { key: "sort_order", label: "Posición en la lista", type: "number" },
      { key: "visible", label: "Publicar en el sitio", type: "boolean" },
    ],
  },
  {
    slug: "testimonials",
    title: "Testimonios",
    eyebrow: "Confianza",
    description: "Edita testimonios que refuerzan confianza en Home y secciones comerciales.",
    group: "content",
    table: "testimonials",
    idKey: "id",
    orderKey: "sort_order",
    listFields: ["author", "event_label", "featured", "visible"],
    fields: [
      { key: "id", label: "Identificador interno", type: "text" },
      { key: "quote", label: "Cita", type: "textarea", required: true },
      { key: "author", label: "Nombre", type: "text", required: true },
      { key: "event_label", label: "Evento o fecha", type: "text" },
      { key: "image", label: "Imagen", type: "image", folder: "testimonials" },
      { key: "background", label: "Color fondo", type: "select", options: testimonialBackgroundOptions, allowCustom: true },
      { key: "rotation", label: "Rotación CSS", type: "select", options: testimonialRotationOptions, allowCustom: true },
      { key: "pin", label: "Color del pin", type: "select", options: testimonialPinOptions, allowCustom: true },
      { key: "featured", label: "Marcar como destacado", type: "boolean" },
      { key: "sort_order", label: "Posición en la lista", type: "number" },
      { key: "visible", label: "Publicar en el sitio", type: "boolean" },
    ],
  },
  {
    slug: "about",
    title: "Nosotros",
    eyebrow: "Historia",
    description: "Edita historia, valores, equipo, compromisos y contenido institucional.",
    group: "content",
    table: "about_sections",
    idKey: "id",
    orderKey: "sort_order",
    listFields: ["id", "label", "visible"],
    fields: [
      { key: "id", label: "Identificador interno", type: "text", required: true },
      { key: "label", label: "Nombre de la sección", type: "text", required: true },
      { key: "content", label: "Contenido avanzado", type: "json" },
      { key: "sort_order", label: "Posición en la lista", type: "number" },
      { key: "visible", label: "Publicar en el sitio", type: "boolean" },
    ],
  },
  {
    slug: "quote-settings",
    title: "Cotizador",
    eyebrow: "Conversión",
    description: "Edita precio base, tipos de evento, duraciones y mensajes del cotizador.",
    group: "commercial",
    table: "quote_settings",
    idKey: "id",
    listFields: ["id", "base_price", "visible"],
    fields: [
      { key: "id", label: "Identificador interno", type: "text", required: true },
      { key: "base_price", label: "Precio base", type: "number" },
      { key: "event_types", label: "Tipos de evento", type: "json" },
      { key: "durations", label: "Opciones de duración", type: "json" },
      { key: "hero", label: "Texto inicial del cotizador", type: "json" },
      { key: "success_message", label: "Mensaje al enviar cotización", type: "json" },
      { key: "visible", label: "Usar esta configuración", type: "boolean" },
    ],
  },
  {
    slug: "confirmed-events",
    title: "Fechas ocupadas",
    eyebrow: "Disponibilidad",
    description: "Bloquea fechas ocupadas para mostrarlas en la disponibilidad del cotizador.",
    group: "system",
    table: "confirmed_events",
    idKey: "id",
    orderKey: "date_start",
    listFields: ["date_start", "date_end", "event_type", "visible"],
    fields: [
      { key: "id", label: "Identificador interno", type: "text" },
      { key: "date_start", label: "Fecha inicio", type: "date", required: true },
      { key: "date_end", label: "Fecha fin", type: "date" },
      { key: "event_type", label: "Tipo", type: "select", options: eventTypeOptions, allowCustom: true },
      { key: "notes", label: "Notas", type: "textarea" },
      { key: "visible", label: "Bloquear esta fecha", type: "boolean" },
    ],
  },
];

export function getAdminResource(slug: string) {
  return adminResources.find((resource) => resource.slug === slug);
}
