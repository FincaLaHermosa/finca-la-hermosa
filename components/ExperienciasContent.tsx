"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import {
  experienceAddons,
  experiencePackages,
  packageFilters,
  type ExperienceAddon,
  type ExperiencePackage,
  type PackageFilter,
} from "@/lib/experiencias-data";

const proofItems = ["Respuesta en 24 h", "PDF personalizado gratis", "Sin compromiso"];

export function ExperienciasContent() {
  const [activeFilter, setActiveFilter] = useState<PackageFilter>("social");
  const visiblePackages = useMemo(
    () => experiencePackages.filter((item) => item.filters.includes(activeFilter)),
    [activeFilter],
  );

  useEffect(() => {
    const revealObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.querySelectorAll(".txt-reveal").forEach((el) => el.classList.add("in"));
          entry.target.querySelectorAll(".img-reveal").forEach((el) => {
            window.setTimeout(() => el.classList.add("in"), 120);
          });
        });
      },
      { threshold: 0.15 },
    );

    document.querySelectorAll(".experiencias-page-react section").forEach((section) => revealObs.observe(section));

    const heroTimer = window.setTimeout(() => {
      const hero = document.querySelector(".experiencias-page-react section");
      hero?.querySelectorAll(".txt-reveal").forEach((el) => el.classList.add("in"));
      hero?.querySelectorAll(".img-reveal").forEach((el) => el.classList.add("in"));
    }, 180);

    return () => {
      window.clearTimeout(heroTimer);
      revealObs.disconnect();
    };
  }, []);

  const scrollToCta = useCallback(() => {
    document.getElementById("cta-section")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const askPackage = useCallback((packageName: string) => {
    const message = `Hola, quiero más información sobre el paquete ${packageName} de Finca La Hermosa.`;
    window.open(`https://wa.me/5215500000000?text=${encodeURIComponent(message)}`, "_blank", "noopener");
  }, []);

  const openWhatsapp = useCallback(() => {
    window.open("https://wa.me/5215500000000", "_blank", "noopener");
  }, []);

  return (
    <main className="prototype-route experiencias-page-react">
      <HeroSection onQuote={scrollToCta} />
      <CatalogSection activeFilter={activeFilter} packages={visiblePackages} onFilter={setActiveFilter} onAskPackage={askPackage} />
      <AddonsSection onQuote={scrollToCta} />
      <FinalCtaSection onWhatsapp={openWhatsapp} />
    </main>
  );
}

function HeroSection({ onQuote }: { onQuote: () => void }) {
  return (
    <section className="exp-hero" style={{ minHeight: "65vh", background: "var(--verde-dark)", display: "flex", alignItems: "center", position: "relative", overflow: "hidden", paddingTop: 86 }}>
      <div className="img-reveal exp-hero-media" style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "52%", zIndex: 0 }}>
        <div className="reveal-cover" />
        <div className="img-bg" style={{ position: "absolute", inset: 0 }}>
          <img src="/assets/hero-wedding.jpg" alt="Experiencias en Finca La Hermosa" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%" }} />
        </div>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right,var(--verde-dark) 0%,transparent 35%)", zIndex: 1 }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom,transparent 50%,rgba(14,26,24,0.5) 100%)", zIndex: 1 }} />
      </div>

      <div className="arch-label" style={{ right: 0, bottom: 0, color: "rgba(255,253,248,0.03)", fontSize: "clamp(6rem,10vw,12rem)" }}>EXPERIENCIAS</div>

      <div className="exp-hero-inner" style={{ position: "relative", zIndex: 2, maxWidth: 1500, width: "100%", margin: "0 auto", padding: "60px 52px 72px" }}>
        <div className="exp-hero-copy" style={{ maxWidth: 560 }}>
          <div className="overline overline-light txt-reveal" style={{ marginBottom: 24 }}>Catálogo de paquetes</div>
          <div className="txt-reveal hero-title-display" data-d="1" style={{ color: "#fffdf8" }}>Experiencias,</div>
          <div className="txt-reveal hero-title-italic" data-d="2" style={{ color: "var(--terracota)", marginTop: 4 }}>diseñadas para celebrar.</div>
          <p className="txt-reveal" data-d="3" style={{ fontFamily: "'Jost',sans-serif", fontSize: "0.92rem", fontWeight: 300, lineHeight: 1.85, color: "rgba(255,253,248,0.68)", marginTop: 28, maxWidth: 420 }}>
            Elige el paquete que mejor se adapta a tu evento. Cada experiencia incluye atención personalizada, espacios únicos y todo el entorno natural de la finca.
          </p>
          <div className="txt-reveal exp-hero-actions" data-d="4" style={{ display: "flex", gap: 12, marginTop: 36, flexWrap: "wrap" }}>
            <a href="#catalogo" className="btn-accent">Ver todos los paquetes</a>
            <button className="btn-ghost" type="button" onClick={onQuote}>Cotizar ahora</button>
          </div>
          <div className="txt-reveal exp-social-proof" data-d="5" style={{ display: "flex", alignItems: "center", gap: 14, marginTop: 40, paddingTop: 32, borderTop: "1px solid rgba(255,255,255,0.1)" }}>
            <div style={{ display: "flex" }}>
              {["V·D", "F·S", "R·A"].map((item, index) => (
                <div key={item} style={{ width: 32, height: 32, borderRadius: "50%", background: index === 0 ? "rgba(192,122,90,0.6)" : index === 1 ? "rgba(74,110,110,0.6)" : "rgba(45,73,73,0.8)", border: "2px solid var(--verde-dark)", marginRight: index < 2 ? -8 : 0, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Jost,sans-serif", fontSize: "0.55rem", fontWeight: 300, color: "#fff", letterSpacing: "0.04em" }}>{item}</div>
              ))}
            </div>
            <div>
              <div style={{ fontFamily: "'Jost',sans-serif", fontSize: "0.78rem", fontWeight: 400, color: "rgba(255,253,248,0.82)" }}>+200 familias han celebrado aquí</div>
              <div style={{ fontFamily: "'Jost',sans-serif", fontSize: "0.68rem", fontWeight: 300, color: "rgba(255,253,248,0.4)", marginTop: 1 }}>Isidro Fabela, Estado de México</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CatalogSection({
  activeFilter,
  packages,
  onFilter,
  onAskPackage,
}: {
  activeFilter: PackageFilter;
  packages: ExperiencePackage[];
  onFilter: (filter: PackageFilter) => void;
  onAskPackage: (packageName: string) => void;
}) {
  return (
    <section id="catalogo" className="exp-catalog" style={{ background: "var(--crema)", padding: "100px 0 80px", position: "relative", overflow: "hidden" }}>
      <div className="arch-label" style={{ right: -20, top: 40 }}>PAQUETES</div>
      <div className="exp-container" style={{ maxWidth: 1500, margin: "0 auto", padding: "0 52px" }}>
        <div className="exp-section-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 48, gap: 40 }}>
          <div>
            <div className="overline overline-dark txt-reveal" style={{ marginBottom: 14 }}>Nuestros paquetes</div>
            <div className="txt-reveal" data-d="1" style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(2.4rem,4vw,3.8rem)", fontWeight: 300, color: "var(--carbon)", lineHeight: 1.05, letterSpacing: "-0.02em" }}>
              Cada paquete, diseñado<br /><em style={{ color: "var(--terracota)", fontStyle: "italic" }}>para tu momento.</em>
            </div>
          </div>
          <div className="txt-reveal" data-d="2" style={{ flexShrink: 0 }}>
            <p style={{ fontFamily: "'Jost',sans-serif", fontSize: "0.84rem", fontWeight: 300, lineHeight: 1.75, color: "var(--muted)", maxWidth: 300, textAlign: "right" }}>
              Tarifa base: día completo para hasta 220 personas. Incluye staff dedicado.
            </p>
          </div>
        </div>

        <div className="tabs-bar txt-reveal" data-d="2" style={{ marginBottom: 40 }} role="tablist" aria-label="Filtrar paquetes">
          {packageFilters.map((filter) => (
            <button key={filter.id} className={`tab-btn${activeFilter === filter.id ? " active" : ""}`} type="button" role="tab" aria-selected={activeFilter === filter.id} onClick={() => onFilter(filter.id)}>
              {filter.label}
            </button>
          ))}
        </div>

        <div id="pkg-grid" className="txt-reveal" data-d="3">
          {packages.map((item) => (
            <PackageCard key={item.id} item={item} onAskPackage={onAskPackage} />
          ))}
        </div>

        {packages.length === 0 && (
          <div id="pkg-empty" style={{ textAlign: "center", padding: "80px 0" }}>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.8rem", fontWeight: 300, color: "var(--muted)", marginBottom: 12 }}>No hay paquetes para este filtro.</div>
            <p style={{ fontFamily: "'Jost',sans-serif", fontSize: "0.84rem", fontWeight: 300, color: "var(--muted)" }}>Contáctanos para un paquete a medida.</p>
          </div>
        )}

        <div className="txt-reveal exp-pricing-note" style={{ marginTop: 44, padding: "22px 28px", background: "var(--crema-warm)", borderRadius: 10, border: "1px solid var(--crema-border)", display: "flex", gap: 16, alignItems: "flex-start" }}>
          <InfoIcon />
          <p style={{ fontFamily: "'Jost',sans-serif", fontSize: "0.8rem", fontWeight: 300, lineHeight: 1.75, color: "var(--muted)" }}>
            Todos los precios son por día completo e incluyen el staff dedicado del venue. Los add-ons se contratan por separado. Precios sujetos a disponibilidad - cotiza tu fecha para confirmar.
          </p>
        </div>
      </div>
    </section>
  );
}

function PackageCard({ item, onAskPackage }: { item: ExperiencePackage; onAskPackage: (packageName: string) => void }) {
  return (
    <article className="pkg-card" data-type={item.filters.join(" ")}>
      <div className="pkg-img-wrap">
        {item.badge && <div className="pkg-badge">{item.badge}</div>}
        <img src={item.image} alt={item.imageAlt} />
      </div>
      <div className="pkg-body">
        <span className="pkg-over">{item.overline}</span>
        <h3 className="pkg-title">{item.title}</h3>
        <div className="pkg-price">
          {item.price} <span style={{ fontSize: "0.72rem", fontWeight: 300, color: "var(--muted)" }}>{item.unit}</span>
        </div>
        <div className="pkg-capacity">{item.capacity}</div>
        <div className="pkg-divider" />
        <ul className="pkg-features">
          {item.features.map((feature) => <li key={feature}>{feature}</li>)}
        </ul>
        <div className="pkg-btn-wrap">
          <button className="pkg-btn" type="button" onClick={() => onAskPackage(item.title)}>{item.cta}</button>
        </div>
      </div>
    </article>
  );
}

function AddonsSection({ onQuote }: { onQuote: () => void }) {
  return (
    <section className="exp-addons" style={{ background: "var(--crema-warm)", padding: "100px 0", position: "relative", overflow: "hidden" }}>
      <div className="arch-label" style={{ left: -20, bottom: 0, color: "rgba(45,73,73,0.035)" }}>ADD·ONS</div>
      <div className="exp-container" style={{ maxWidth: 1500, margin: "0 auto", padding: "0 52px" }}>
        <div className="exp-addons-header" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "flex-end", marginBottom: 56 }}>
          <div>
            <div className="overline overline-dark txt-reveal" style={{ marginBottom: 14 }}>Personaliza tu experiencia</div>
            <div className="txt-reveal" data-d="1" style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(2.2rem,3.8vw,3.5rem)", fontWeight: 300, color: "var(--carbon)", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
              Cada detalle,<br /><em style={{ color: "var(--terracota)", fontStyle: "italic" }}>solamente tuyo.</em>
            </div>
          </div>
          <div className="txt-reveal" data-d="2">
            <p style={{ fontFamily: "'Jost',sans-serif", fontSize: "0.88rem", fontWeight: 300, lineHeight: 1.8, color: "var(--body-clr)" }}>
              Complementa cualquier paquete con los extras que hacen la diferencia. Cada add-on se suma automáticamente a tu cotización personalizada.
            </p>
          </div>
        </div>

        <div className="txt-reveal exp-addons-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }} data-d="3">
          {experienceAddons.map((addon) => <AddonCard key={addon.id} item={addon} />)}
        </div>

        <div className="txt-reveal exp-addon-note" style={{ marginTop: 44, textAlign: "center" }}>
          <p style={{ fontFamily: "'Jost',sans-serif", fontSize: "0.82rem", fontWeight: 300, color: "var(--muted)", marginBottom: 18 }}>Los add-ons se agregan en el proceso de cotización. Precio por evento, no por persona.</p>
          <button className="btn-primary" type="button" onClick={onQuote}>Cotizar con add-ons</button>
        </div>
      </div>
    </section>
  );
}

function AddonCard({ item }: { item: ExperienceAddon }) {
  return (
    <article className="addon-card" style={item.dashed ? { borderStyle: "dashed" } : undefined}>
      <AddonIcon name={item.icon} />
      <div className="addon-name">{item.name}</div>
      <div className="addon-desc">{item.description}</div>
      <div className="addon-price" style={item.accentPrice ? { color: "var(--terracota)" } : undefined}>{item.price}</div>
    </article>
  );
}

function FinalCtaSection({ onWhatsapp }: { onWhatsapp: () => void }) {
  return (
    <section id="cta-section" className="exp-cta" style={{ background: "#0d1918", padding: "100px 0", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <img src="/assets/photo-cta-dark.jpg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.22 }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(160deg,#1e3232 0%,#2d4949 28%,#1a2a1a 60%,#0e1e1e 100%)", opacity: 0.85 }} />
      </div>
      <div style={{ position: "absolute", bottom: "20%", left: "50%", transform: "translateX(-50%)", width: 400, height: 250, background: "radial-gradient(ellipse,rgba(240,160,60,0.1) 0%,transparent 70%)", borderRadius: "50%", zIndex: 0, pointerEvents: "none" }} />
      <div className="arch-label" style={{ left: -40, bottom: 60, color: "rgba(255,253,248,0.03)" }}>CELEBRA</div>

      <div className="cta-outer exp-cta-inner" style={{ position: "relative", zIndex: 1, maxWidth: 1500, width: "100%", margin: "0 auto", padding: "0 52px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div className="overline overline-light txt-reveal">Empieza a planear</div>
          <div>
            <div className="final-cta-title-main exp-cta-title-main" style={{ fontFamily: "'Against',serif", fontSize: "clamp(3.5rem,6vw,6.5rem)", lineHeight: 0.92, letterSpacing: "-0.025em", color: "#fffdf8" }}>Tu experiencia,</div>
            <div className="final-cta-title-sub exp-cta-title-sub" style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(2.8rem,5vw,5rem)", fontStyle: "italic", fontWeight: 300, lineHeight: 1, color: "var(--terracota)", marginTop: 6 }}>empieza aquí.</div>
          </div>
          <p className="txt-reveal" data-d="2" style={{ fontFamily: "'Jost',sans-serif", fontSize: "0.88rem", fontWeight: 300, lineHeight: 1.8, color: "rgba(255,253,248,0.62)", maxWidth: 380 }}>
            Cuéntanos sobre tu evento, elige tu paquete y recibe una propuesta personalizada en menos de 24 horas.
          </p>
          <div className="txt-reveal exp-cta-proof" data-d="3" style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 8 }}>
            {proofItems.map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: "'Jost',sans-serif", fontSize: "0.72rem", fontWeight: 300, color: "rgba(255,253,248,0.5)" }}>
                <CheckIcon />
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="txt-reveal" data-d="2" style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div className="cta-card">
            <DocumentIcon />
            <div className="cta-card-title">Cotizar en línea</div>
            <p className="cta-card-sub">Cuéntanos sobre tu evento y recibe una propuesta con PDF personalizado.</p>
            <Link className="btn-accent" style={{ fontSize: "0.65rem", padding: "10px 20px" }} href="/cotizar">Cotizar ahora</Link>
          </div>
          <div className="cta-small-grid exp-cta-card-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            <div className="cta-card">
              <CalendarIcon />
              <div className="cta-card-title">Agendar visita</div>
              <p className="cta-card-sub">Ven a conocer la finca antes de decidir.</p>
              <Link className="btn-accent" style={{ fontSize: "0.65rem", padding: "10px 20px" }} href="/cotizar">Agendar</Link>
            </div>
            <div className="cta-card">
              <MessageIcon />
              <div className="cta-card-title">WhatsApp</div>
              <p className="cta-card-sub">Respuesta rápida y directa.</p>
              <button type="button" style={{ padding: "10px 20px", background: "#25D366", color: "#fff", border: "none", borderRadius: 999, fontFamily: "'Jost',sans-serif", fontSize: "0.65rem", fontWeight: 300, letterSpacing: "0.09em", textTransform: "uppercase", cursor: "pointer", transition: "opacity 0.22s" }} onClick={onWhatsapp}>Escribir</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AddonIcon({ name }: { name: ExperienceAddon["icon"] }) {
  const common = { className: "addon-icon", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  if (name === "salon") return <svg {...common}><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18" /><path d="M9 21V9" /></svg>;
  if (name === "fogata") return <svg {...common}><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" /><path d="M12 6v6l4 2" /></svg>;
  if (name === "cine") return <svg {...common}><rect x="2" y="7" width="20" height="15" rx="2" /><polyline points="17 2 12 7 7 2" /></svg>;
  if (name === "coffee") return <svg {...common}><path d="M18 8h1a4 4 0 0 1 0 8h-1" /><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" /><line x1="6" y1="1" x2="6" y2="4" /><line x1="10" y1="1" x2="10" y2="4" /><line x1="14" y1="1" x2="14" y2="4" /></svg>;
  if (name === "av") return <svg {...common}><polygon points="23 7 16 12 23 17 23 7" /><rect x="1" y="5" width="15" height="14" rx="2" /></svg>;
  return <svg {...common}><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>;
}

function InfoIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 1, color: "var(--terracota)" }}><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>;
}

function CheckIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="20 6 9 17 4 12" /></svg>;
}

function DocumentIcon() {
  return <svg className="cta-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="9" y1="13" x2="15" y2="13" /><line x1="9" y1="17" x2="15" y2="17" /></svg>;
}

function CalendarIcon() {
  return <svg className="cta-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>;
}

function MessageIcon() {
  return <svg className="cta-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>;
}
