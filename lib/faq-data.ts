export type FaqCategoryId = "reservaciones" | "espacios" | "precios" | "logistica" | "experiencias";

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type FaqCategory = {
  id: FaqCategoryId;
  label: string;
  groupLabel: string;
  items: FaqItem[];
};

export const faqCategories: FaqCategory[] = [
  {
    id: "reservaciones",
    label: "Reservaciones",
    groupLabel: "Reservaciones",
    items: [
      {
        id: "anticipacion",
        question: "¿Con cuánto tiempo de anticipación debo reservar?",
        answer:
          "Recomendamos reservar con al menos 3 a 6 meses de anticipación, especialmente para temporada alta: mayo, noviembre y diciembre. Si tienes una fecha cercana en mente, escríbenos igual - a veces hay disponibilidad de último momento que no está publicada en línea.",
      },
      {
        id: "confirmar-fecha",
        question: "¿Cómo confirmo y reservo mi fecha?",
        answer:
          "Tu fecha queda reservada con el pago del 50% del total. El resto se liquida 30 días antes del evento. Al confirmar recibirás un contrato digital y un PDF con el desglose completo de tu reservación y los próximos pasos.",
      },
      {
        id: "cancelar-mover",
        question: "¿Puedo cancelar o mover mi fecha?",
        answer:
          "Cancelaciones con más de 60 días de anticipación recuperan el 50% del anticipo pagado. Con menos tiempo, el anticipo se convierte en crédito válido por 12 meses para reagendar en cualquier fecha disponible. Entendemos que los planes cambian.",
      },
      {
        id: "visita-previa",
        question: "¿Puedo visitar la finca antes de reservar?",
        answer:
          "Por supuesto. Coordinamos visitas de lunes a viernes entre 10 y 17 horas. Es la mejor forma de conocer los espacios en persona y resolver dudas directamente. Escríbenos por WhatsApp y agendamos en menos de 24 horas.",
      },
    ],
  },
  {
    id: "espacios",
    label: "Espacios",
    groupLabel: "Espacios y capacidad",
    items: [
      {
        id: "capacidad",
        question: "¿Cuántas personas puede recibir la finca?",
        answer:
          "La finca puede recibir hasta 220 personas en eventos. Para grupos medianos el jardín, terraza y alberca son suficientes; para grupos más grandes incorporamos el salón techado como eje del evento y configuramos el espacio completo.",
      },
      {
        id: "precio-espacios",
        question: "¿El precio base incluye todos los espacios?",
        answer:
          "Sí. El precio base incluye acceso completo a jardines, alberca, terraza panorámica, asador, puente colgante, columpio y todas las áreas comunes. El salón techado de 22×14 metros es un add-on opcional para eventos que requieran espacio cubierto.",
      },
      {
        id: "casa-principal",
        question: "¿La casa principal está incluida en el paquete?",
        answer:
          "La casa principal con 6 habitaciones está disponible como add-on de hospedaje para hasta 30 personas. Ideal para bodas de fin de semana o familias que quieren quedarse la noche. Se coordina como extensión del paquete contratado.",
      },
      {
        id: "dos-dias",
        question: "¿Se puede usar la finca dos días consecutivos?",
        answer:
          "Sí. Tenemos tarifas especiales para paquetes de fin de semana completo - de viernes noche a domingo. Es una opción muy popular para retiros familiares y equipos que quieren desconectarse. Pregunta por disponibilidad al cotizar.",
      },
    ],
  },
  {
    id: "precios",
    label: "Precios y pagos",
    groupLabel: "Precios y pagos",
    items: [
      {
        id: "pagos",
        question: "¿Cómo funciona el esquema de pagos?",
        answer:
          "Solicitamos el 50% del total para reservar la fecha, y el 50% restante se liquida 30 días antes del evento. Aceptamos transferencia bancaria y tarjeta de crédito. Al confirmar el pago recibirás recibo y contrato digital.",
      },
      {
        id: "base",
        question: "¿Qué incluye el precio base de $13,000 MXN?",
        answer:
          "El precio base cubre 14 horas de uso exclusivo de la finca (8:00 a 22:00 h), staff de limpieza y mantenimiento durante el evento, estacionamiento para 40 vehículos, y acceso completo a jardines, alberca, terraza, asador y áreas comunes - en un solo evento por día, sin compartir espacios.",
      },
      {
        id: "addons-obligatorios",
        question: "¿Los add-ons son obligatorios?",
        answer:
          "No, son completamente opcionales. Eliges exactamente lo que necesitas: salón techado, equipo de audio y proyección, servicio de fogata, cine al aire libre, coffee break, entre otros. Nada se cobra sin tu aprobación explícita.",
      },
      {
        id: "costos-ocultos",
        question: "¿Hay costos ocultos o cargos sorpresa?",
        answer:
          "Ninguno. Tu cotización refleja el total exacto que vas a pagar. Si durante la planeación agregas algo, te informamos el costo antes de confirmarlo. Transparencia total desde el primer contacto.",
      },
    ],
  },
  {
    id: "logistica",
    label: "Logística",
    groupLabel: "Logística",
    items: [
      {
        id: "horas-uso",
        question: "¿Cuántas horas tengo de uso de la finca?",
        answer:
          "El acceso estándar es de 8:00 a 22:00 horas - 14 horas en total. Si necesitas más tiempo para montaje o desmontaje, podemos coordinar acceso desde las 7:00 h o extender hasta las 23:00 h con un cargo adicional según disponibilidad.",
      },
      {
        id: "musica",
        question: "¿Hasta qué hora puede haber música?",
        answer:
          "Por reglamento municipal, la música debe reducir volumen a partir de las 22:00 h y cesar completamente a las 23:00 h en espacios abiertos. El salón techado tiene mejor aislamiento acústico y permite cierta flexibilidad. Lo coordinamos desde la planeación para que no haya sorpresas el día del evento.",
      },
      {
        id: "estacionamiento",
        question: "¿Cuántos autos caben en el estacionamiento?",
        answer:
          "El estacionamiento interior tiene capacidad para 40 vehículos. Para eventos más grandes hay una zona adicional a 200 metros con espacio para 30 autos más. Para grupos muy grandes podemos coordinar valet o transporte desde un punto de encuentro cercano.",
      },
      {
        id: "proveedores",
        question: "¿Puedo traer mis propios proveedores?",
        answer:
          "Sí, trabajamos con lista abierta de proveedores. Puedes traer tu propio catering, DJ, decorador, fotógrafo o cualquier otro proveedor - solo pedimos que los registres con anticipación para coordinar el acceso. Si prefieres recomendaciones, tenemos alianzas con proveedores locales verificados que conocen bien la finca.",
      },
    ],
  },
  {
    id: "experiencias",
    label: "Experiencias",
    groupLabel: "Experiencias",
    items: [
      {
        id: "personalizar",
        question: "¿Puedo personalizar mi paquete?",
        answer:
          "Completamente. Los paquetes son el punto de partida, no el límite. Agregas o quitas add-ons según tus necesidades, y tu cotización refleja exactamente lo que elegiste. La idea es que cada evento aquí se sienta único, no genérico.",
      },
      {
        id: "catering",
        question: "¿Ofrecen servicio de catering o banquetes?",
        answer:
          "No gestionamos catering directamente, pero tenemos alianza con proveedores locales de cocina regional que conocen perfectamente la logística de la finca. Si lo deseas, te los presentamos en tu cotización. También puedes traer el proveedor de tu preferencia - la cocina equipada y el asador están disponibles para uso externo.",
      },
      {
        id: "tipo-eventos",
        question: "¿Qué tipo de eventos pueden organizar?",
        answer:
          "Bodas, XV años, graduaciones, cumpleaños, reuniones familiares, retiros corporativos, baby showers, convivios de empresa y sesiones fotográficas. Si tu evento no está en esta lista, escríbenos - casi siempre encontramos la forma de hacerlo funcionar en La Hermosa.",
      },
    ],
  },
];
