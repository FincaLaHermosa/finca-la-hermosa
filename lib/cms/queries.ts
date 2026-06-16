import type { SupabaseClient } from "@supabase/supabase-js";
import { createClient } from "@/lib/supabase/server";
import {
  defaultEspaciosData,
  defaultExperienciasData,
  defaultFaqData,
  defaultHomeData,
  defaultNosotrosData,
  defaultQuoteData,
  defaultSiteConfig,
} from "@/lib/cms/defaults";
import type {
  CmsEspaciosData,
  CmsExperienciasData,
  CmsFaqData,
  CmsHomeData,
  CmsNosotrosData,
  CmsQuoteData,
  SiteConfig,
} from "@/lib/cms/types";
import type { Addon, EventType } from "@/lib/cotizar-data";
import type { Espacio, VenueAsset } from "@/lib/espacios-data";
import type { ExperienceAddon, ExperiencePackage, PackageFilter } from "@/lib/experiencias-data";
import type { FaqCategory } from "@/lib/faq-data";
import type { HomeTestimonial } from "@/lib/home-data";

async function getSupabase() {
  return createClient();
}

function compact<T>(items: Array<T | null | undefined>) {
  return items.filter(Boolean) as T[];
}

export async function getSiteConfig(): Promise<SiteConfig> {
  const supabase = await getSupabase();
  if (!supabase) return defaultSiteConfig;

  const { data, error } = await supabase.from("site_config").select("*").eq("id", "main").maybeSingle();
  if (error || !data) return defaultSiteConfig;

  return {
    whatsappNumber: data.whatsapp_number || defaultSiteConfig.whatsappNumber,
    phoneLabel: data.phone_label || defaultSiteConfig.phoneLabel,
    phoneHref: data.phone_href || defaultSiteConfig.phoneHref,
    email: data.email || defaultSiteConfig.email,
    instagramUrl: data.instagram_url || defaultSiteConfig.instagramUrl,
    facebookUrl: data.facebook_url || defaultSiteConfig.facebookUrl,
    addressLabel: data.address_label || defaultSiteConfig.addressLabel,
    mapsUrl: data.maps_url || defaultSiteConfig.mapsUrl,
    footerText: data.footer_text || defaultSiteConfig.footerText,
    responseTimeLabel: data.response_time_label || defaultSiteConfig.responseTimeLabel,
    copyrightLabel: data.copyright_label || defaultSiteConfig.copyrightLabel,
  };
}

export async function getHomeData(): Promise<CmsHomeData> {
  const supabase = await getSupabase();
  if (!supabase) return defaultHomeData;

  const testimonials = await getTestimonialsFromClient(supabase);
  return {
    experiences: defaultHomeData.experiences,
    spaces: defaultHomeData.spaces,
    testimonials: testimonials.length ? testimonials : defaultHomeData.testimonials,
  };
}

export async function getExperienciasData(): Promise<CmsExperienciasData> {
  const supabase = await getSupabase();
  if (!supabase) return defaultExperienciasData;

  const [packagesResult, addonsResult] = await Promise.all([
    supabase.from("packages").select("*").eq("visible", true).order("sort_order", { ascending: true }),
    supabase.from("addons").select("*").eq("visible", true).contains("appears_in", ["experiencias"]).order("sort_order", { ascending: true }),
  ]);

  const packages = compact((packagesResult.data || []).map((row) => ({
    id: row.id,
    filters: row.filters as PackageFilter[],
    image: row.image,
    imageAlt: row.image_alt,
    badge: row.badge || undefined,
    overline: row.overline,
    title: row.title,
    price: row.price,
    unit: row.unit,
    capacity: row.capacity,
    features: row.features || [],
    cta: row.cta || "Solicitar propuesta",
  } satisfies ExperiencePackage)));

  const addons = compact((addonsResult.data || []).map((row) => ({
    id: row.id,
    icon: row.icon,
    name: row.name,
    description: row.description,
    price: row.price_label,
    dashed: row.dashed,
    accentPrice: row.accent_price,
  } as ExperienceAddon)));

  return {
    packages: packages.length ? packages : defaultExperienciasData.packages,
    addons: addons.length ? addons : defaultExperienciasData.addons,
  };
}

export async function getEspaciosData(): Promise<CmsEspaciosData> {
  const supabase = await getSupabase();
  if (!supabase) return defaultEspaciosData;

  const [spacesResult, amenitiesResult] = await Promise.all([
    supabase.from("spaces").select("*").eq("visible", true).order("sort_order", { ascending: true }),
    supabase.from("amenities").select("*").eq("visible", true).order("sort_order", { ascending: true }),
  ]);

  const spaces = compact((spacesResult.data || []).map((row) => ({
    nombre: row.name,
    bullets: row.bullets || [],
    capacidad: row.capacity,
    img: row.image,
    gallery: row.gallery || [],
    caption: row.caption,
  } satisfies Espacio)));

  const amenities = compact((amenitiesResult.data || []).map((row) => ({
    nombre: row.name,
    detalle: row.detail,
    addon: row.addon,
  } satisfies VenueAsset)));

  return {
    spaces: spaces.length ? spaces : defaultEspaciosData.spaces,
    amenities: amenities.length ? amenities : defaultEspaciosData.amenities,
  };
}

export async function getFaqData(): Promise<CmsFaqData> {
  const supabase = await getSupabase();
  if (!supabase) return defaultFaqData;

  const [categoriesResult, faqsResult] = await Promise.all([
    supabase.from("faq_categories").select("*").eq("visible", true).order("sort_order", { ascending: true }),
    supabase.from("faqs").select("*").eq("visible", true).order("sort_order", { ascending: true }),
  ]);

  if (categoriesResult.error || faqsResult.error || !categoriesResult.data?.length) return defaultFaqData;

  const categories = categoriesResult.data.map((category) => ({
    id: category.id,
    label: category.label,
    groupLabel: category.group_label,
    items: (faqsResult.data || [])
      .filter((item) => item.category_id === category.id)
      .map((item) => ({ id: item.id, question: item.question, answer: item.answer })),
  })) as FaqCategory[];

  return { categories: categories.some((category) => category.items.length) ? categories : defaultFaqData.categories };
}

export async function getNosotrosData(): Promise<CmsNosotrosData> {
  const supabase = await getSupabase();
  if (!supabase) return defaultNosotrosData;

  const { data, error } = await supabase.from("about_sections").select("*").eq("visible", true);
  if (error || !data?.length) return defaultNosotrosData;

  const byId = Object.fromEntries(data.map((item) => [item.id, item.content]));

  return {
    timelineItems: Array.isArray(byId.timeline) ? byId.timeline : defaultNosotrosData.timelineItems,
    values: Array.isArray(byId.values) ? byId.values : defaultNosotrosData.values,
    teamMembers: Array.isArray(byId.team) ? byId.team : defaultNosotrosData.teamMembers,
    commitments: Array.isArray(byId.commitments) ? byId.commitments : defaultNosotrosData.commitments,
  };
}

export async function getQuoteData(): Promise<CmsQuoteData> {
  const supabase = await getSupabase();
  if (!supabase) return defaultQuoteData;

  const [settingsResult, addonsResult, eventsResult] = await Promise.all([
    supabase.from("quote_settings").select("*").eq("id", "main").maybeSingle(),
    supabase.from("addons").select("*").eq("visible", true).contains("appears_in", ["cotizar"]).order("sort_order", { ascending: true }),
    supabase.from("confirmed_events").select("date_start,date_end").eq("visible", true),
  ]);

  const settings = settingsResult.data;
  const quoteAddons = compact((addonsResult.data || []).map((row) => ({
    id: row.id,
    value: row.name,
    name: row.name,
    sub: row.description,
    price: row.price_amount || 0,
    quoteOnly: row.quote_only,
    icon: row.icon,
  } as Addon)));

  const busyDates = compact((eventsResult.data || []).flatMap((row) => expandDateRange(row.date_start, row.date_end)));

  return {
    basePrice: settings?.base_price || defaultQuoteData.basePrice,
    eventTypes: Array.isArray(settings?.event_types) && settings.event_types.length ? settings.event_types as EventType[] : defaultQuoteData.eventTypes,
    addons: quoteAddons.length ? quoteAddons : defaultQuoteData.addons,
    busyDates: busyDates.length ? busyDates : defaultQuoteData.busyDates,
    durations: Array.isArray(settings?.durations) && settings.durations.length ? settings.durations : defaultQuoteData.durations,
    successMessage: settings?.success_message && Object.keys(settings.success_message).length ? settings.success_message : defaultQuoteData.successMessage,
  };
}

async function getTestimonialsFromClient(supabase: SupabaseClient): Promise<HomeTestimonial[]> {
  const { data, error } = await supabase.from("testimonials").select("*").eq("visible", true).order("sort_order", { ascending: true });
  if (error || !data) return [];

  return data.map((row) => ({
    quote: row.quote,
    author: row.author,
    event: row.event_label,
    background: row.background,
    rotation: row.rotation,
    pin: row.pin,
  }));
}

function expandDateRange(start: string | null, end: string | null) {
  if (!start) return [];
  if (!end || end <= start) return [start];

  const dates: string[] = [];
  const cursor = new Date(`${start}T00:00:00`);
  const last = new Date(`${end}T00:00:00`);

  while (cursor <= last) {
    dates.push(cursor.toISOString().slice(0, 10));
    cursor.setDate(cursor.getDate() + 1);
  }

  return dates;
}
