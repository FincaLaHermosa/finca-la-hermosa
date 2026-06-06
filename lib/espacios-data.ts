export type Espacio = {
  nombre: string;
  bullets: string[];
  capacidad: string;
  img: string;
  gallery: string[];
  caption: string;
};

export type VenueAsset = {
  nombre: string;
  detalle: string;
  addon?: boolean;
};

export const espacios: Espacio[] = [
  {
    nombre: "Jardines y áreas verdes",
    bullets: ["Dos jardines con árboles maduros", "Zonas de descanso y convivencia", "Ideal para ceremonias al aire libre"],
    capacidad: "2 jardines · espacios al aire libre",
    img: "/assets/photo-jardines.jpg",
    gallery: ["/assets/photo-jardines.jpg", "/assets/hero-wedding.jpg", "/assets/photo-hero.jpg"],
    caption: "Naturaleza como escenario",
  },
  {
    nombre: "Casa principal",
    bullets: ["6 habitaciones completamente equipadas", "Hospedaje para anfitriones e invitados VIP", "Sin salir de la finca"],
    capacidad: "6 habitaciones · hospedaje completo",
    img: "/assets/photo-eventos.jpg",
    gallery: ["/assets/photo-eventos.jpg", "/assets/photo-cta-dark.jpg", "/assets/photo-terraza.jpg"],
    caption: "Tu hogar durante la celebración",
  },
  {
    nombre: "Salón de eventos",
    bullets: ["300 m² versátiles y adaptables", "Bodas, corporativos y celebraciones", "Disponible como add-on"],
    capacidad: "22×14 m · 300 m² · add-on",
    img: "/assets/photo-salon.jpg",
    gallery: ["/assets/photo-salon.jpg", "/assets/photo-eventos.jpg", "/assets/photo-paquete.jpg"],
    caption: "300 m² de posibilidades",
  },
  {
    nombre: "Terraza continua",
    bullets: ["3.5 m de ancho a lo largo de la fachada", "Transición fluida entre interior y jardín", "Cubierta y protegida"],
    capacidad: "3.5 m de ancho · cubierta",
    img: "/assets/photo-terraza.jpg",
    gallery: ["/assets/photo-terraza.jpg", "/assets/photo-jardines.jpg", "/assets/photo-eventos.jpg"],
    caption: "Entre lo interior y lo exterior",
  },
  {
    nombre: "Alberca",
    bullets: ["El corazón social de la finca", "Área de convivencia y descanso", "Perfecta para reuniones en verano"],
    capacidad: "Área de convivencia y descanso",
    img: "/assets/photo-alberca.jpg",
    gallery: ["/assets/photo-alberca.jpg", "/assets/photo-hero.jpg", "/assets/photo-jardines.jpg"],
    caption: "Donde el tiempo se detiene",
  },
  {
    nombre: "Rooftop y mirador",
    bullets: ["El punto más alto de la finca", "Vistas panorámicas del bosque de Isidro Fabela", "Cierre memorable para cualquier evento"],
    capacidad: "Vistas panorámicas · acceso libre",
    img: "/assets/photo-paquete.jpg",
    gallery: ["/assets/photo-paquete.jpg", "/assets/photo-cta-dark.jpg", "/assets/photo-jardines.jpg"],
    caption: "El mejor panorama del bosque",
  },
  {
    nombre: "Puente colgante",
    bullets: ["Experiencia única en el bosque", "El elemento más fotogénico de la finca", "Acceso libre incluido"],
    capacidad: "En entorno boscoso natural",
    img: "/assets/hero-wedding.jpg",
    gallery: ["/assets/hero-wedding.jpg", "/assets/photo-jardines.jpg", "/assets/photo-hero.jpg"],
    caption: "El momento más memorable",
  },
  {
    nombre: "Área de fogata",
    bullets: ["Cierre nocturno de cualquier evento", "Ambiente íntimo y memorable", "Disponible como add-on"],
    capacidad: "Experiencia nocturna · add-on",
    img: "/assets/photo-hero.jpg",
    gallery: ["/assets/photo-hero.jpg", "/assets/photo-cta-dark.jpg", "/assets/photo-jardines.jpg"],
    caption: "Noches que no se olvidan",
  },
  {
    nombre: "Entorno natural",
    bullets: ["Ciclopista y senderos forestales", "Hectáreas de bosque alrededor", "La finca como destino completo"],
    capacidad: "Ciclopista · bosque · senderos",
    img: "/assets/photo-cta-dark.jpg",
    gallery: ["/assets/photo-cta-dark.jpg", "/assets/photo-jardines.jpg", "/assets/photo-paquete.jpg"],
    caption: "La naturaleza como anfitriona",
  },
];

export const venueAssets: VenueAsset[] = [
  { nombre: "Casa principal", detalle: "6 habitaciones · hospedaje" },
  { nombre: "Jardines amplios", detalle: "2 áreas verdes" },
  { nombre: "Salón de eventos", detalle: "22×14 m", addon: true },
  { nombre: "Terraza continua", detalle: "3.5 m de ancho" },
  { nombre: "Alberca", detalle: "área de convivencia" },
  { nombre: "Rooftop / Mirador", detalle: "vistas panorámicas" },
  { nombre: "Café interior", detalle: "espacio de descanso" },
  { nombre: "Puente colgante", detalle: "entorno boscoso" },
  { nombre: "Área de fogata", detalle: "experiencia nocturna", addon: true },
  { nombre: "Columpio alto", detalle: "atracción única" },
  { nombre: "Asador", detalle: "área exterior equipada" },
  { nombre: "Circuito ciclopista", detalle: "sendero natural · bosque" },
];

