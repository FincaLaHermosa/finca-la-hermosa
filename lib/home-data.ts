export type HomeExperience = {
  label: string;
  eyebrow: string;
  title: string;
  body: string;
  image: string;
  imageAlt: string;
  caption: string;
  bullets: string[];
  cta: string;
  special?: boolean;
};

export type HomeSpace = {
  name: string;
  caption: string;
  image?: string;
  alt: string;
  gradient?: string;
};

export type HomePackage = {
  name: string;
  price: string;
  capacity: string;
  image: string;
  alt: string;
  badge?: string;
  overlay: string;
  features: string[];
};

export type HomeTestimonial = {
  quote: string;
  author: string;
  event: string;
  background: string;
  rotation: string;
  pin: string;
};

export const homeExperiences: HomeExperience[] = [
  {
    label: "Eventos Sociales",
    eyebrow: "Bodas · XV Años · Cumpleaños",
    title: "El escenario perfecto para tu celebración más especial",
    body: "Cada detalle importa. Nuestros jardines, alberca y salón se transforman para hacer de tu evento un momento único e irrepetible.",
    image: "/assets/photo-eventos.jpg",
    imageAlt: "Eventos sociales",
    caption: "Bodas · Celebraciones · XV Años",
    bullets: ["Jardines y alberca disponibles todo el día", "Salón de eventos 22 × 14 m con cocineta", "Staff dedicado y coordinadora de atención"],
    cta: "Ver paquetes sociales",
  },
  {
    label: "Corporativos",
    eyebrow: "Juntas · Teambuilding · Lanzamientos",
    title: "Un espacio profesional en un entorno natural único",
    body: "Inspira a tu equipo con un ambiente diferente. Salón equipado, áreas al aire libre y toda la tranquilidad que necesitas para conectar y crear.",
    image: "/assets/photo-salon.jpg",
    imageAlt: "Eventos corporativos",
    caption: "Juntas · Teambuilding · Lanzamientos",
    bullets: ["Salón con equipo audiovisual disponible", "Coffee break y servicio de catering", "Rooftop y terraza para dinámicas al aire libre"],
    cta: "Ver paquetes corporativos",
  },
  {
    label: "Retiros/Campamentos",
    eyebrow: "Meditación · Yoga · Bienestar",
    title: "Reconéctate contigo y con la naturaleza",
    body: "El entorno boscoso de la finca ofrece el silencio y la belleza perfectos para retiros espirituales, de bienestar y reconexión personal o grupal.",
    image: "/assets/photo-jardines.jpg",
    imageAlt: "Retiros",
    caption: "Meditación · Yoga · Bienestar",
    bullets: ["Áreas naturales y sendero tipo ciclopista", "Fogata, puente colgante y área de columpio", "Casa con 6 habitaciones para hospedaje"],
    cta: "Ver paquetes de retiro",
  },
  {
    label: "Estancia Privada",
    eyebrow: "Hospedaje · Escape · Familia",
    title: "La finca es toda tuya. Sin horarios ni interrupciones.",
    body: "Ideal para familias o grupos de amigos que quieren escapar y descansar en un entorno privado y seguro, con toda la comodidad de un hogar.",
    image: "/assets/photo-terraza.jpg",
    imageAlt: "Estancia privada",
    caption: "Hospedaje exclusivo",
    bullets: ["Casa principal con 6 habitaciones", "Acceso completo a todos los espacios del venue", "Staff disponible sin interrumpir tu privacidad"],
    cta: "Ver estancias disponibles",
  },
];

export const homeSpaces: HomeSpace[] = [
  { name: "Jardines", caption: "Exterior · Toda ocasión", image: "/assets/photo-jardines.jpg", alt: "Jardines" },
  { name: "Alberca", caption: "Exterior · Verano", image: "/assets/photo-alberca.jpg", alt: "Alberca" },
  { name: "Salón de Eventos", caption: "Interior · 22 × 14 m", image: "/assets/photo-salon.jpg", alt: "Salón de eventos" },
  { name: "Terraza", caption: "Exterior · Vista panorámica", image: "/assets/photo-terraza.jpg", alt: "Terraza" },
  { name: "Rooftop", caption: "Exterior · Noches especiales", alt: "Rooftop", gradient: "linear-gradient(135deg,#1e2d1e 0%,#3a5028 20%,#607040 40%,#a09050 60%,#c8b060 75%,#3d4a2a 100%)" },
  { name: "Puente Colgante", caption: "Exterior · Aventura", alt: "Puente colgante", gradient: "linear-gradient(160deg,#2d4020 0%,#4a6a30 25%,#3a5525 50%,#6a8a40 70%,#2d4020 100%)" },
];

export const quickQuoteOptions = ["Evento Social", "Corporativo", "Retiro", "Estancia Privada", "No sé aún"];

export const homePackages: HomePackage[] = [
  {
    name: "Esencial",
    price: "Desde $13,000",
    capacity: "1 día · hasta 30 personas",
    image: "/assets/photo-jardines.jpg",
    alt: "Paquete Esencial",
    badge: "Más popular",
    overlay: "linear-gradient(to bottom,transparent 50%,rgba(10,18,8,0.45) 100%)",
    features: ["Jardines y alberca", "Casa principal", "Asador y estacionamiento", "Staff incluido"],
  },
  {
    name: "Completo",
    price: "Desde $21,000",
    capacity: "1 día · hasta 30 personas",
    image: "/assets/photo-salon.jpg",
    alt: "Paquete Completo",
    overlay: "linear-gradient(to bottom,transparent 50%,rgba(20,12,5,0.45) 100%)",
    features: ["Todo el paquete Esencial", "Salón de eventos 22 × 14 m", "Cocineta y mobiliario", "Rooftop y terraza"],
  },
  {
    name: "Experiencia",
    price: "Desde $21,700",
    capacity: "1 día · hasta 30 personas",
    image: "/assets/photo-paquete.jpg",
    alt: "Paquete Experiencia",
    overlay: "linear-gradient(to bottom,transparent 50%,rgba(15,12,8,0.5) 100%)",
    features: ["Todo el paquete Completo", "Fogata o cine al aire libre", "Coffee break incluido", "Equipo audiovisual"],
  },
];

export const homeTestimonials: HomeTestimonial[] = [
  { quote: "Un espacio que supera cualquier expectativa.", author: "Valeria y Diego", event: "Boda · Abril 2025", background: "#fffdf5", rotation: "rotate(-1.8deg)", pin: "#9d563d" },
  { quote: "La atención fue impecable. Mi fiesta fue perfecta en todo.", author: "Fernanda Salazar", event: "XV Años · Diciembre 2024", background: "#f7f3eb", rotation: "rotate(1.2deg)", pin: "#2d4949" },
  { quote: "El retiro fue transformador. La naturaleza hizo todo el trabajo.", author: "Roberto Ángeles", event: "Retiro Corporativo · Feb 2025", background: "#fffdf5", rotation: "rotate(-0.8deg)", pin: "#9d563d" },
  { quote: "El jardín al atardecer es simplemente mágico.", author: "María José Reyes", event: "Cumpleaños · Octubre 2024", background: "#f2ede3", rotation: "rotate(2.1deg)", pin: "#2d4949" },
  { quote: "Nos cuidaron cada detalle. Solo disfrutamos.", author: "Alejandro Fuentes", event: "Evento Corporativo · Ene 2025", background: "#f2ede3", rotation: "rotate(1.6deg)", pin: "#2d4949" },
  { quote: "Naturaleza y elegancia en perfecta armonía.", author: "Sofía y Emilio", event: "Boda · Marzo 2025", background: "#fffdf5", rotation: "rotate(-2.3deg)", pin: "#9d563d" },
  { quote: "El silencio, la naturaleza, la hospitalidad. Todo.", author: "Grupo La Paloma", event: "Retiro Espiritual · Nov 2024", background: "#f7f3eb", rotation: "rotate(0.9deg)", pin: "#9d563d" },
  { quote: "Vinimos un día y ya reservamos nuestra próxima visita.", author: "Claudia Hernández", event: "Visita familiar · Enero 2025", background: "#fffdf5", rotation: "rotate(-1.4deg)", pin: "#2d4949" },
];
