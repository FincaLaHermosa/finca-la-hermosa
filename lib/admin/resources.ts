export type AdminField = {
  key: string;
  label: string;
  type: "text" | "textarea" | "number" | "boolean" | "json" | "text_array" | "image" | "date";
  required?: boolean;
  folder?: string;
};

export type AdminResource = {
  slug: string;
  title: string;
  table: string;
  idKey: string;
  orderKey?: string;
  listFields: string[];
  fields: AdminField[];
};

export const adminResources: AdminResource[] = [
  {
    slug: "config",
    title: "Configuración general",
    table: "site_config",
    idKey: "id",
    listFields: ["id", "email", "phone_label", "whatsapp_number"],
    fields: [
      { key: "id", label: "ID", type: "text", required: true },
      { key: "whatsapp_number", label: "WhatsApp", type: "text", required: true },
      { key: "phone_label", label: "Teléfono visible", type: "text", required: true },
      { key: "phone_href", label: "Teléfono para link", type: "text", required: true },
      { key: "email", label: "Email", type: "text", required: true },
      { key: "instagram_url", label: "Instagram", type: "text" },
      { key: "facebook_url", label: "Facebook", type: "text" },
      { key: "address_label", label: "Dirección visible", type: "text" },
      { key: "maps_url", label: "Google Maps", type: "text" },
      { key: "footer_text", label: "Texto footer", type: "textarea" },
      { key: "response_time_label", label: "Tiempo de respuesta", type: "text" },
      { key: "copyright_label", label: "Copyright", type: "text" },
    ],
  },
  {
    slug: "pages",
    title: "Páginas",
    table: "pages",
    idKey: "slug",
    orderKey: "slug",
    listFields: ["slug", "title", "visible"],
    fields: [
      { key: "slug", label: "Slug", type: "text", required: true },
      { key: "title", label: "Título interno", type: "text", required: true },
      { key: "hero", label: "Hero JSON", type: "json" },
      { key: "sections", label: "Secciones JSON", type: "json" },
      { key: "seo", label: "SEO JSON", type: "json" },
      { key: "visible", label: "Visible", type: "boolean" },
    ],
  },
  {
    slug: "packages",
    title: "Paquetes",
    table: "packages",
    idKey: "id",
    orderKey: "sort_order",
    listFields: ["title", "price", "capacity", "visible"],
    fields: [
      { key: "id", label: "ID", type: "text", required: true },
      { key: "filters", label: "Filtros/categorías", type: "text_array" },
      { key: "image", label: "Imagen", type: "image", folder: "packages" },
      { key: "image_alt", label: "Alt de imagen", type: "text" },
      { key: "badge", label: "Badge", type: "text" },
      { key: "overline", label: "Overline", type: "text" },
      { key: "title", label: "Nombre", type: "text", required: true },
      { key: "price", label: "Precio visible", type: "text" },
      { key: "unit", label: "Unidad", type: "text" },
      { key: "capacity", label: "Capacidad", type: "text" },
      { key: "features", label: "Incluidos", type: "text_array" },
      { key: "cta", label: "CTA", type: "text" },
      { key: "sort_order", label: "Orden", type: "number" },
      { key: "visible", label: "Visible", type: "boolean" },
    ],
  },
  {
    slug: "addons",
    title: "Add-ons",
    table: "addons",
    idKey: "id",
    orderKey: "sort_order",
    listFields: ["name", "price_label", "quote_only", "visible"],
    fields: [
      { key: "id", label: "ID", type: "text", required: true },
      { key: "icon", label: "Icono", type: "text" },
      { key: "name", label: "Nombre", type: "text", required: true },
      { key: "description", label: "Descripción", type: "textarea" },
      { key: "price_label", label: "Precio visible", type: "text" },
      { key: "price_amount", label: "Precio cálculo", type: "number" },
      { key: "quote_only", label: "A cotizar", type: "boolean" },
      { key: "dashed", label: "Borde punteado", type: "boolean" },
      { key: "accent_price", label: "Precio acento", type: "boolean" },
      { key: "appears_in", label: "Aparece en", type: "text_array" },
      { key: "sort_order", label: "Orden", type: "number" },
      { key: "visible", label: "Visible", type: "boolean" },
    ],
  },
  {
    slug: "spaces",
    title: "Espacios",
    table: "spaces",
    idKey: "id",
    orderKey: "sort_order",
    listFields: ["name", "capacity", "visible"],
    fields: [
      { key: "id", label: "ID", type: "text", required: true },
      { key: "name", label: "Nombre", type: "text", required: true },
      { key: "bullets", label: "Bullets", type: "text_array" },
      { key: "capacity", label: "Capacidad", type: "text" },
      { key: "image", label: "Imagen principal", type: "image", folder: "spaces" },
      { key: "image_alt", label: "Alt de imagen", type: "text" },
      { key: "gallery", label: "Galería", type: "text_array" },
      { key: "caption", label: "Caption", type: "text" },
      { key: "sort_order", label: "Orden", type: "number" },
      { key: "visible", label: "Visible", type: "boolean" },
    ],
  },
  {
    slug: "amenities",
    title: "Amenidades",
    table: "amenities",
    idKey: "id",
    orderKey: "sort_order",
    listFields: ["name", "detail", "addon", "visible"],
    fields: [
      { key: "id", label: "ID", type: "text", required: true },
      { key: "name", label: "Nombre", type: "text", required: true },
      { key: "detail", label: "Detalle", type: "text" },
      { key: "addon", label: "Add-on", type: "boolean" },
      { key: "sort_order", label: "Orden", type: "number" },
      { key: "visible", label: "Visible", type: "boolean" },
    ],
  },
  {
    slug: "faqs",
    title: "Preguntas frecuentes",
    table: "faqs",
    idKey: "id",
    orderKey: "sort_order",
    listFields: ["category_id", "question", "visible"],
    fields: [
      { key: "id", label: "ID", type: "text", required: true },
      { key: "category_id", label: "Categoría ID", type: "text", required: true },
      { key: "question", label: "Pregunta", type: "textarea", required: true },
      { key: "answer", label: "Respuesta", type: "textarea", required: true },
      { key: "sort_order", label: "Orden", type: "number" },
      { key: "visible", label: "Visible", type: "boolean" },
    ],
  },
  {
    slug: "faq-categories",
    title: "Categorías FAQ",
    table: "faq_categories",
    idKey: "id",
    orderKey: "sort_order",
    listFields: ["label", "group_label", "visible"],
    fields: [
      { key: "id", label: "ID", type: "text", required: true },
      { key: "label", label: "Etiqueta", type: "text", required: true },
      { key: "group_label", label: "Título de grupo", type: "text", required: true },
      { key: "sort_order", label: "Orden", type: "number" },
      { key: "visible", label: "Visible", type: "boolean" },
    ],
  },
  {
    slug: "testimonials",
    title: "Testimonios",
    table: "testimonials",
    idKey: "id",
    orderKey: "sort_order",
    listFields: ["author", "event_label", "featured", "visible"],
    fields: [
      { key: "id", label: "ID", type: "text" },
      { key: "quote", label: "Cita", type: "textarea", required: true },
      { key: "author", label: "Nombre", type: "text", required: true },
      { key: "event_label", label: "Evento/fecha", type: "text" },
      { key: "image", label: "Imagen", type: "image", folder: "testimonials" },
      { key: "background", label: "Color fondo", type: "text" },
      { key: "rotation", label: "Rotación CSS", type: "text" },
      { key: "pin", label: "Color pin", type: "text" },
      { key: "featured", label: "Destacado", type: "boolean" },
      { key: "sort_order", label: "Orden", type: "number" },
      { key: "visible", label: "Visible", type: "boolean" },
    ],
  },
  {
    slug: "about",
    title: "Nosotros",
    table: "about_sections",
    idKey: "id",
    orderKey: "sort_order",
    listFields: ["id", "label", "visible"],
    fields: [
      { key: "id", label: "ID", type: "text", required: true },
      { key: "label", label: "Etiqueta", type: "text", required: true },
      { key: "content", label: "Contenido JSON", type: "json" },
      { key: "sort_order", label: "Orden", type: "number" },
      { key: "visible", label: "Visible", type: "boolean" },
    ],
  },
  {
    slug: "quote-settings",
    title: "Cotizador",
    table: "quote_settings",
    idKey: "id",
    listFields: ["id", "base_price", "visible"],
    fields: [
      { key: "id", label: "ID", type: "text", required: true },
      { key: "base_price", label: "Precio base", type: "number" },
      { key: "event_types", label: "Tipos de evento JSON", type: "json" },
      { key: "durations", label: "Duraciones JSON", type: "json" },
      { key: "hero", label: "Hero JSON", type: "json" },
      { key: "success_message", label: "Mensaje éxito JSON", type: "json" },
      { key: "visible", label: "Visible", type: "boolean" },
    ],
  },
  {
    slug: "confirmed-events",
    title: "Fechas ocupadas",
    table: "confirmed_events",
    idKey: "id",
    orderKey: "date_start",
    listFields: ["date_start", "date_end", "event_type", "visible"],
    fields: [
      { key: "id", label: "ID", type: "text" },
      { key: "date_start", label: "Fecha inicio", type: "date", required: true },
      { key: "date_end", label: "Fecha fin", type: "date" },
      { key: "event_type", label: "Tipo", type: "text" },
      { key: "notes", label: "Notas", type: "textarea" },
      { key: "visible", label: "Visible", type: "boolean" },
    ],
  },
];

export function getAdminResource(slug: string) {
  return adminResources.find((resource) => resource.slug === slug);
}
