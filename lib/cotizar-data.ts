export type EventTypeId = "boda" | "xv" | "corporativo" | "familiar" | "retiro" | "otro";
export type DurationId = "dia" | "finde";

export type EventType = {
  id: EventTypeId;
  value: string;
  name: string;
  desc: string;
  icon: "heart" | "star" | "briefcase" | "users" | "home" | "info";
};

export type Addon = {
  id: string;
  value: string;
  name: string;
  sub: string;
  price: number;
  quoteOnly?: boolean;
  icon: "home" | "fire" | "film" | "coffee" | "audio" | "bed";
};

export const basePrice = 13000;

export const eventTypes: EventType[] = [
  { id: "boda", value: "Boda", name: "Boda", desc: "Ceremonia y recepción en entorno natural privado.", icon: "heart" },
  { id: "xv", value: "XV Años", name: "XV Años", desc: "Una celebración única, digna de la protagonista.", icon: "star" },
  { id: "corporativo", value: "Corporativo", name: "Corporativo", desc: "Retiros de equipo, convivios y eventos de empresa.", icon: "briefcase" },
  { id: "familiar", value: "Reunión familiar", name: "Reunión familiar", desc: "Cumpleaños, aniversarios, graduaciones, posadas.", icon: "users" },
  { id: "retiro", value: "Retiro", name: "Retiro", desc: "Fin de semana de descanso, bienestar o creatividad.", icon: "home" },
  { id: "otro", value: "Otro", name: "Otro", desc: "Sesión fotográfica, baby shower u ocasión especial.", icon: "info" },
];

export const addons: Addon[] = [
  { id: "salon", value: "Salón techado", name: "Salón techado 22×14 m", sub: "Espacio cubierto climatizado · hasta 220 personas · montaje incluido", price: 8000, icon: "home" },
  { id: "fogata", value: "Fogata", name: "Noche de fogata", sub: "Área de fogata preparada con leña · ambiente nocturno perfecto", price: 700, icon: "fire" },
  { id: "cine", value: "Cine al aire libre", name: "Cine al aire libre", sub: "Pantalla grande · proyector · ideal para cierre de noche", price: 700, icon: "film" },
  { id: "coffee", value: "Coffee break", name: "Coffee break", sub: "Servicio de café, infusiones y snacks · montaje en mesa", price: 700, icon: "coffee" },
  { id: "av", value: "Audio y proyección", name: "Audio y proyección", sub: "Sistema de sonido · micrófono · pantalla · ideal para presentaciones", price: 700, icon: "audio" },
  { id: "hospedaje", value: "Hospedaje", name: "Hospedaje (casa principal)", sub: "6 habitaciones · hasta 30 personas · cotizamos según noches", price: 0, quoteOnly: true, icon: "bed" },
];

export const busyDates = [
  "2025-07-05",
  "2025-07-12",
  "2025-07-19",
  "2025-07-26",
  "2025-08-09",
  "2025-08-16",
  "2025-09-06",
  "2025-09-13",
  "2025-12-20",
  "2025-12-27",
];

