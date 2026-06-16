import { addons, basePrice, busyDates, eventTypes } from "@/lib/cotizar-data";
import { espacios, venueAssets } from "@/lib/espacios-data";
import { experienceAddons, experiencePackages } from "@/lib/experiencias-data";
import { faqCategories } from "@/lib/faq-data";
import { homeExperiences, homeSpaces, homeTestimonials } from "@/lib/home-data";
import { commitments, teamMembers, timelineItems, values } from "@/lib/nosotros-data";
import type { CmsEspaciosData, CmsExperienciasData, CmsFaqData, CmsHomeData, CmsNosotrosData, CmsQuoteData, SiteConfig } from "@/lib/cms/types";

export const defaultSiteConfig: SiteConfig = {
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5215500000000",
  phoneLabel: "+52 (55) 0000-0000",
  phoneHref: "+5215500000000",
  email: "hola@fincalahermosa.com",
  instagramUrl: "https://instagram.com/",
  facebookUrl: "https://facebook.com/",
  addressLabel: "Isidro Fabela, Estado de México",
  mapsUrl: "https://maps.google.com/?q=Finca+La+Hermosa,+Isidro+Fabela,+Estado+de+Mexico",
  footerText: "Una finca familiar convertida en destino de experiencias. Naturaleza, hospitalidad y celebración.",
  responseTimeLabel: "24 h",
  copyrightLabel: "© 2026 Finca La Hermosa",
};

export const defaultHomeData: CmsHomeData = {
  experiences: homeExperiences,
  spaces: homeSpaces,
  testimonials: homeTestimonials,
};

export const defaultExperienciasData: CmsExperienciasData = {
  packages: experiencePackages,
  addons: experienceAddons,
};

export const defaultEspaciosData: CmsEspaciosData = {
  spaces: espacios,
  amenities: venueAssets,
};

export const defaultFaqData: CmsFaqData = {
  categories: faqCategories,
};

export const defaultNosotrosData: CmsNosotrosData = {
  timelineItems,
  values,
  teamMembers,
  commitments,
};

export const defaultQuoteData: CmsQuoteData = {
  basePrice,
  eventTypes,
  addons,
  busyDates,
  durations: [
    { id: "dia", label: "Un día (10:00 – 20:00 h)", summaryLabel: "Un día" },
    { id: "finde", label: "Fin de semana completo (vie–dom)", summaryLabel: "Fin de semana" },
    { id: "personalizado", label: "Personalizado", summaryLabel: "Personalizado" },
  ],
  successMessage: {
    title: "¡Recibimos tu solicitud!",
    subtitle: "Te contactaremos en menos de 24 horas.",
    body: "Revisaremos tu fecha, invitados y extras para enviarte una propuesta clara por WhatsApp y, si lo compartiste, también por correo.",
  },
};
