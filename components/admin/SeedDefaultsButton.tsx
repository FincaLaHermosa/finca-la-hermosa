"use client";

import { useState } from "react";
import { defaultEspaciosData, defaultExperienciasData, defaultFaqData, defaultHomeData, defaultNosotrosData, defaultQuoteData, defaultSiteConfig } from "@/lib/cms/defaults";
import { createClient } from "@/lib/supabase/client";

export function SeedDefaultsButton() {
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const seed = async () => {
    if (!confirm("Esto cargará el contenido actual como base editable del CMS. ¿Continuar?")) return;
    setLoading(true);
    setMessage(null);

    const supabase = createClient();

    const baseOperations = [
      supabase.from("site_config").upsert({
        id: "main",
        whatsapp_number: defaultSiteConfig.whatsappNumber,
        phone_label: defaultSiteConfig.phoneLabel,
        phone_href: defaultSiteConfig.phoneHref,
        email: defaultSiteConfig.email,
        instagram_url: defaultSiteConfig.instagramUrl,
        facebook_url: defaultSiteConfig.facebookUrl,
        address_label: defaultSiteConfig.addressLabel,
        maps_url: defaultSiteConfig.mapsUrl,
        footer_text: defaultSiteConfig.footerText,
        response_time_label: defaultSiteConfig.responseTimeLabel,
        copyright_label: defaultSiteConfig.copyrightLabel,
        visible: true,
      }),
      supabase.from("packages").upsert(defaultExperienciasData.packages.map((item, index) => ({
        id: item.id,
        filters: item.filters,
        image: item.image,
        image_alt: item.imageAlt,
        badge: item.badge,
        overline: item.overline,
        title: item.title,
        price: item.price,
        unit: item.unit,
        capacity: item.capacity,
        features: item.features,
        cta: item.cta,
        sort_order: index + 1,
        visible: true,
      }))),
      supabase.from("addons").upsert(defaultQuoteData.addons.map((item, index) => ({
        id: item.id,
        icon: item.icon,
        name: item.name,
        description: item.sub,
        price_label: item.quoteOnly ? "Consultar disponibilidad" : `+ $${item.price.toLocaleString()} MXN`,
        price_amount: item.price,
        quote_only: Boolean(item.quoteOnly),
        dashed: Boolean(item.quoteOnly),
        accent_price: Boolean(item.quoteOnly),
        appears_in: ["experiencias", "cotizar"],
        sort_order: index + 1,
        visible: true,
      }))),
      supabase.from("spaces").upsert(defaultEspaciosData.spaces.map((item, index) => ({
        id: slugify(item.nombre),
        name: item.nombre,
        bullets: item.bullets,
        capacity: item.capacidad,
        image: item.img,
        image_alt: item.nombre,
        gallery: item.gallery,
        caption: item.caption,
        sort_order: index + 1,
        visible: true,
      }))),
      supabase.from("amenities").upsert(defaultEspaciosData.amenities.map((item, index) => ({
        id: slugify(item.nombre),
        name: item.nombre,
        detail: item.detalle,
        addon: Boolean(item.addon),
        sort_order: index + 1,
        visible: true,
      }))),
      supabase.from("about_sections").upsert([
        { id: "timeline", label: "Timeline", content: defaultNosotrosData.timelineItems, sort_order: 1, visible: true },
        { id: "values", label: "Valores", content: defaultNosotrosData.values, sort_order: 2, visible: true },
        { id: "team", label: "Equipo", content: defaultNosotrosData.teamMembers, sort_order: 3, visible: true },
        { id: "commitments", label: "Compromisos", content: defaultNosotrosData.commitments, sort_order: 4, visible: true },
      ]),
      supabase.from("quote_settings").upsert({
        id: "main",
        base_price: defaultQuoteData.basePrice,
        event_types: defaultQuoteData.eventTypes,
        durations: defaultQuoteData.durations,
        success_message: defaultQuoteData.successMessage,
        visible: true,
      }),
    ];

    const baseResults = await Promise.all(baseOperations);
    let error = baseResults.find((result) => result.error)?.error;

    if (!error) {
      const categoriesResult = await supabase.from("faq_categories").upsert(defaultFaqData.categories.map((item, index) => ({
        id: item.id,
        label: item.label,
        group_label: item.groupLabel,
        sort_order: index + 1,
        visible: true,
      })));
      error = categoriesResult.error;
    }

    if (!error) {
      const faqsResult = await supabase.from("faqs").upsert(defaultFaqData.categories.flatMap((category) => category.items.map((item, index) => ({
        id: item.id,
        category_id: category.id,
        question: item.question,
        answer: item.answer,
        sort_order: index + 1,
        visible: true,
      }))));
      error = faqsResult.error;
    }

    if (!error) {
      const existingTestimonials = await supabase.from("testimonials").select("id").limit(1);
      if (!existingTestimonials.data?.length) {
        const testimonialsResult = await supabase.from("testimonials").insert(defaultHomeData.testimonials.map((item, index) => ({
          quote: item.quote,
          author: item.author,
          event_label: item.event,
          background: item.background,
          rotation: item.rotation,
          pin: item.pin,
          sort_order: index + 1,
          visible: true,
        })));
        error = testimonialsResult.error;
      }
    }

    setLoading(false);
    setMessage(error ? error.message : "Contenido base cargado.");
  };

  return (
    <div className="admin-card" style={{ padding: 22, display: "grid", gap: 12 }}>
      <h2 style={{ margin: 0, fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 400 }}>Contenido inicial</h2>
      <p style={{ margin: 0, color: "#6f634f" }}>Carga en Supabase los datos actuales del sitio como punto de partida editable.</p>
      <button className="admin-primary" type="button" onClick={seed} disabled={loading}>{loading ? "Cargando..." : "Cargar contenido actual"}</button>
      {message ? <div className="admin-message">{message}</div> : null}
    </div>
  );
}

function slugify(value: string) {
  return value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}
