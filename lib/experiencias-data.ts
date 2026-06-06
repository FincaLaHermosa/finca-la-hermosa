export type PackageFilter = "social" | "corporativo" | "retiro" | "privado";

export type ExperiencePackage = {
  id: string;
  filters: PackageFilter[];
  image: string;
  imageAlt: string;
  badge?: string;
  overline: string;
  title: string;
  price: string;
  unit: string;
  capacity: string;
  features: string[];
  cta: string;
};

export type ExperienceAddon = {
  id: string;
  icon: "salon" | "fogata" | "cine" | "coffee" | "av" | "hospedaje";
  name: string;
  description: string;
  price: string;
  dashed?: boolean;
  accentPrice?: boolean;
};

export const packageFilters: Array<{ id: PackageFilter; label: string }> = [
  { id: "social", label: "Eventos Sociales" },
  { id: "corporativo", label: "Corporativos" },
  { id: "retiro", label: "Retiros" },
  { id: "privado", label: "Estancia Privada" },
];

export const experiencePackages: ExperiencePackage[] = [
  {
    id: "esencial",
    filters: ["social"],
    image: "/assets/photo-alberca.jpg",
    imageAlt: "Paquete Esencial",
    overline: "Eventos Sociales",
    title: "Esencial",
    price: "Desde $13,000",
    unit: "MXN / día",
    capacity: "Hasta 220 personas",
    features: [
      "Jardines y 2 áreas exteriores completas",
      "Alberca con área de convivencia",
      "Casa principal: 6 habitaciones",
      "Puente colgante y columpio",
      "Asador y área de fogata",
      "Estacionamiento privado",
      "Anfitrión + coordinadora de atención",
    ],
    cta: "Solicitar propuesta",
  },
  {
    id: "retiro-bosque",
    filters: ["retiro"],
    image: "/assets/photo-jardines.jpg",
    imageAlt: "Retiro Bosque",
    overline: "Retiros · Bienestar",
    title: "Retiro Bosque",
    price: "Desde $13,000",
    unit: "MXN / día",
    capacity: "Hasta 220 personas",
    features: [
      "Circuito tipo ciclopista en entorno boscoso",
      "Área de fogata + puente colgante",
      "Espacios al aire libre para yoga o meditación",
      "Rooftop / mirador panorámico",
      "Casa principal con 6 habitaciones",
      "Alberca y jardines",
      "Staff respetuoso de tu espacio",
    ],
    cta: "Solicitar propuesta",
  },
  {
    id: "corporativo-creativo",
    filters: ["corporativo"],
    image: "/assets/photo-terraza.jpg",
    imageAlt: "Corporativo Creativo",
    overline: "Corporativos · Teambuilding",
    title: "Corporativo Creativo",
    price: "Desde $13,000",
    unit: "MXN / día",
    capacity: "Hasta 220 personas",
    features: [
      "Terraza cubierta para sesiones de trabajo",
      "Rooftop para dinámicas en altura",
      "Jardines y alberca para actividades",
      "Circuito ciclopista para teambuilding",
      "Área de asador para comidas de equipo",
      "WiFi + tomas eléctricas exteriores",
      "Coordinadora para logística del día",
    ],
    cta: "Pedir detalles",
  },
  {
    id: "completo-salon",
    filters: ["social", "corporativo"],
    image: "/assets/photo-eventos.jpg",
    imageAlt: "Completo con Salón",
    badge: "Más popular",
    overline: "Sociales · Corporativos",
    title: "Completo con Salón",
    price: "Desde $21,000",
    unit: "MXN / día",
    capacity: "Hasta 220 personas",
    features: [
      "Todo lo del paquete Esencial",
      "Salón de eventos 22×14 m con cocineta",
      "Mobiliario completo incluido",
      "Terraza contigua al salón (3.5 m)",
      "Iluminación ambiental interior/exterior",
      "Acceso a café pequeño del venue",
      "Staff ampliado: anfitrión + 2 asistentes",
    ],
    cta: "Solicitar propuesta",
  },
  {
    id: "estancia-privada",
    filters: ["privado"],
    image: "/assets/photo-paquete.jpg",
    imageAlt: "Estancia Privada",
    overline: "Hospedaje · Escape familiar",
    title: "Estancia Privada",
    price: "Desde $21,000",
    unit: "MXN / noche",
    capacity: "Hasta 220 personas",
    features: [
      "Casa principal completa · 6 habitaciones",
      "Acceso exclusivo a todos los espacios",
      "Alberca, jardines y rooftop",
      "Cocina equipada para uso propio",
      "Asador, fogata y columpio",
      "Privacidad total, sin eventos paralelos",
      "Staff disponible sin interrumpir",
    ],
    cta: "Consultar estancia",
  },
  {
    id: "premium-all-in",
    filters: ["social", "corporativo", "retiro"],
    image: "/assets/photo-salon.jpg",
    imageAlt: "Premium All-In",
    overline: "Premium · Todo incluido",
    title: "Premium All-In",
    price: "Desde $28,000",
    unit: "MXN / día",
    capacity: "Hasta 220 personas",
    features: [
      "Todo lo del paquete Completo con Salón",
      "Fogata + cine al aire libre incluidos",
      "Coffee break completo incluido",
      "Equipo audiovisual profesional",
      "Decoración base de bienvenida",
      "Coordinadora exclusiva todo el día",
      "Prioridad en fechas y check-in anticipado",
    ],
    cta: "Pedir propuesta",
  },
];

export const experienceAddons: ExperienceAddon[] = [
  {
    id: "salon",
    icon: "salon",
    name: "Salón de eventos + cocineta",
    description: "Salón 22x14 m con cocineta y mobiliario incluido.",
    price: "+ $8,000 MXN",
  },
  {
    id: "fogata",
    icon: "fogata",
    name: "Fogata nocturna",
    description: "Fogata con leña, área preparada y encendido inicial.",
    price: "+ $700 MXN",
  },
  {
    id: "cine",
    icon: "cine",
    name: "Cine al aire libre",
    description: "Pantalla exterior, proyector HD y audio incluido.",
    price: "+ $700 MXN",
  },
  {
    id: "coffee",
    icon: "coffee",
    name: "Coffee break completo",
    description: "Café, té, agua y botanas con montaje incluido.",
    price: "+ $700 MXN",
  },
  {
    id: "av",
    icon: "av",
    name: "Equipo audiovisual",
    description: "Pantalla LED, micrófono y bocinas para presentaciones.",
    price: "+ $700 MXN",
  },
  {
    id: "hospedaje",
    icon: "hospedaje",
    name: "Hospedaje nocturno",
    description: "Casa completa con 6 habitaciones para pasar la noche.",
    price: "Consultar disponibilidad",
    dashed: true,
    accentPrice: true,
  },
];
