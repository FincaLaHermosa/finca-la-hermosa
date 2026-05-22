import { Flame, Heart, Home, Landmark, Leaf, Sparkles, Star, Users } from "lucide-react";

export const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Experiencias", href: "/experiencias" },
  { label: "Espacios", href: "/espacios" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "FAQ", href: "/faq" },
];

export const experiences = [
  {
    slug: "boda",
    title: "Boda",
    label: "Eventos sociales",
    description: "Ceremonia y recepción en entorno natural privado.",
    price: "$13,000",
    icon: Heart,
    image: "/assets/hero-wedding.jpg",
  },
  {
    slug: "xv",
    title: "XV Años",
    label: "Celebraciones",
    description: "Una celebración única, digna de la protagonista.",
    price: "$21,000",
    icon: Star,
    image: "/assets/photo-eventos.jpg",
  },
  {
    slug: "corporativo",
    title: "Corporativo",
    label: "Equipos",
    description: "Retiros de equipo, convivios y eventos de empresa.",
    price: "$13,000",
    icon: Landmark,
    image: "/assets/photo-terraza.jpg",
  },
  {
    slug: "familiar",
    title: "Reunión familiar",
    label: "Grupos privados",
    description: "Cumpleaños, aniversarios, graduaciones y posadas.",
    price: "$13,000",
    icon: Users,
    image: "/assets/photo-jardines.jpg",
  },
  {
    slug: "retiro",
    title: "Retiro",
    label: "Bienestar",
    description: "Fin de semana de descanso, bienestar o creatividad.",
    price: "$13,000",
    icon: Home,
    image: "/assets/photo-alberca.jpg",
  },
  {
    slug: "one-day",
    title: "One Day Experience",
    label: "Día de campo",
    description: "Un día completo de naturaleza sin reservar todo.",
    price: "$13,000",
    icon: Sparkles,
    image: "/assets/photo-hero.jpg",
  },
];

export const spaces = [
  { name: "Jardines", detail: "Dos áreas verdes para ceremonia, convivencia y montaje flexible.", image: "/assets/photo-jardines.jpg" },
  { name: "Alberca", detail: "Punto central para días de descanso, familia y celebraciones relajadas.", image: "/assets/photo-alberca.jpg" },
  { name: "Salón de eventos", detail: "22 x 14 m para eventos cubiertos, comidas largas y clima variable.", image: "/assets/photo-salon.jpg" },
  { name: "Terraza", detail: "Transición natural entre interior, jardín y celebración al aire libre.", image: "/assets/photo-terraza.jpg" },
  { name: "Casa principal", detail: "Seis habitaciones, estancia y base cómoda para reuniones privadas.", image: "/assets/photo-paquete.jpg" },
  { name: "Área de fogata", detail: "Cierre nocturno para conversaciones, café, cine o convivencia íntima.", image: "/assets/photo-cta-dark.jpg" },
];

export const packages = [
  {
    name: "Esencial",
    tag: "Finca base",
    price: "$13,000",
    text: "Finca completa un día, hasta 80 personas. Todo el acceso base incluido.",
  },
  {
    name: "Completo con salón",
    tag: "Evento cubierto",
    price: "$21,000",
    text: "Base de finca más salón de eventos para montaje formal o clima variable.",
  },
  {
    name: "Premium All-In",
    tag: "Experiencia extendida",
    price: "$28,000",
    text: "Una experiencia más completa con add-ons seleccionados para celebrar sin fricción.",
  },
];

export const timeline = [
  ["2010", "La finca familiar", "Un espacio pensado primero para compartir en familia y descansar en la naturaleza."],
  ["2015", "El salón de eventos", "Se construye el salón de 22 x 14 m con terraza contigua."],
  ["2020", "Más experiencias", "La finca empieza a recibir celebraciones privadas y reuniones de grupos cercanos."],
  ["Hoy", "Un venue versátil", "Casa, jardines, salón, alberca y bosque reunidos para eventos con intención."],
];

export const faqs = [
  { category: "Reservaciones", q: "¿Con cuánto tiempo debo reservar?", a: "Mientras antes mejor, especialmente para fines de semana. Puedes solicitar una fecha tentativa y revisamos disponibilidad contigo." },
  { category: "Reservaciones", q: "¿La cotización me compromete a comprar?", a: "No. La propuesta sirve para entender precio, disponibilidad y paquete recomendado antes de tomar una decisión." },
  { category: "Espacios", q: "¿Qué incluye la renta base?", a: "Incluye acceso a la finca, jardines, alberca, casa principal, puente, estacionamiento, asador y staff base." },
  { category: "Espacios", q: "¿El salón tiene costo adicional?", a: "Sí. El salón funciona como add-on para eventos que necesitan montaje cubierto o mayor estructura." },
  { category: "Logística", q: "¿Puedo llevar proveedores externos?", a: "Sí, con coordinación previa para cuidar horarios, accesos, montaje y operación del evento." },
  { category: "Logística", q: "¿Cuál es la capacidad?", a: "Para eventos, la referencia máxima es 220 personas. Para hospedaje, la casa funciona mejor hasta 30 personas." },
];

export const addons = [
  { name: "Salón", price: 8000, icon: Landmark },
  { name: "Fogata", price: 700, icon: Flame },
  { name: "Coffee break", price: 700, icon: Leaf },
  { name: "AV básico", price: 700, icon: Sparkles },
];
