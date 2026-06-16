import type { Addon, EventType } from "@/lib/cotizar-data";
import type { Espacio, VenueAsset } from "@/lib/espacios-data";
import type { ExperienceAddon, ExperiencePackage } from "@/lib/experiencias-data";
import type { FaqCategory } from "@/lib/faq-data";
import type { HomeExperience, HomeSpace, HomeTestimonial } from "@/lib/home-data";

export type SiteConfig = {
  whatsappNumber: string;
  phoneLabel: string;
  phoneHref: string;
  email: string;
  instagramUrl: string;
  facebookUrl: string;
  addressLabel: string;
  mapsUrl: string;
  footerText: string;
  responseTimeLabel: string;
  copyrightLabel: string;
};

export type CmsPage = {
  slug: string;
  title: string;
  hero: Record<string, unknown>;
  sections: Record<string, unknown>;
  seo: Record<string, unknown>;
};

export type CmsHomeData = {
  experiences: HomeExperience[];
  spaces: HomeSpace[];
  testimonials: HomeTestimonial[];
};

export type CmsExperienciasData = {
  packages: ExperiencePackage[];
  addons: ExperienceAddon[];
};

export type CmsEspaciosData = {
  spaces: Espacio[];
  amenities: VenueAsset[];
};

export type CmsFaqData = {
  categories: FaqCategory[];
};

export type CmsNosotrosData = {
  timelineItems: Array<{ year: string; title: string; desc: string; current?: boolean }>;
  values: Array<{ title: string; body: string; icon: string }>;
  teamMembers: Array<{ role: string; name: string; desc: string; img: string; alt: string; featured?: boolean }>;
  commitments: Array<{ title: string; desc: string; icon: string }>;
};

export type CmsQuoteData = {
  basePrice: number;
  eventTypes: EventType[];
  addons: Addon[];
  busyDates: string[];
  durations: Array<{ id: string; label: string; summaryLabel: string }>;
  successMessage: {
    title: string;
    subtitle: string;
    body: string;
  };
};
