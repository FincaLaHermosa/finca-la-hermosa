"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { faqCategories, type FaqCategoryId, type FaqItem } from "@/lib/faq-data";

const proofItems = ["Respuesta en 24 h", "PDF personalizado gratis", "Sin compromiso"];

export function FaqContent() {
  const [activeCategory, setActiveCategory] = useState<FaqCategoryId>("reservaciones");
  const [openItem, setOpenItem] = useState<string | null>(null);
  const category = useMemo(
    () => faqCategories.find((item) => item.id === activeCategory) ?? faqCategories[0],
    [activeCategory],
  );

  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("in");
          revealObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.12 },
    );

    document.querySelectorAll(".faq-page-react .txt-reveal").forEach((el) => revealObserver.observe(el));

    const heroTimer = window.setTimeout(() => {
      document.querySelectorAll(".hero-faq .txt-reveal").forEach((el) => el.classList.add("in"));
    }, 120);

    return () => {
      window.clearTimeout(heroTimer);
      revealObserver.disconnect();
    };
  }, []);

  const changeCategory = (nextCategory: FaqCategoryId) => {
    setActiveCategory(nextCategory);
    setOpenItem(null);
  };

  return (
    <main className="prototype-route faq-page-react">
      <HeroFaq />
      <FaqSection activeCategory={activeCategory} openItem={openItem} items={category.items} groupLabel={category.groupLabel} onCategory={changeCategory} onToggle={setOpenItem} />
      <ContactSection />
      <FinalCtaSection />
    </main>
  );
}

function HeroFaq() {
  return (
    <section className="hero-faq">
      <div style={{ position: "absolute", inset: 0, zIndex: 0, background: "radial-gradient(ellipse at 28% 55%,rgba(192,122,90,0.07) 0%,transparent 58%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", inset: 0, zIndex: 0, background: "radial-gradient(ellipse at 76% 38%,rgba(74,110,110,0.12) 0%,transparent 52%)", pointerEvents: "none" }} />
      <div className="arch-label" style={{ left: "50%", top: "50%", transform: "translate(-50%,-50%)", zIndex: 1, color: "rgba(255,253,248,0.025)", fontSize: "clamp(9rem,18vw,24rem)", whiteSpace: "nowrap", letterSpacing: "-0.04em" }}>FAQ</div>

      <div style={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column", alignItems: "center", gap: 24, padding: "120px 40px 80px", maxWidth: 700, textAlign: "center" }}>
        <div className="txt-reveal">
          <div className="overline overline-light" style={{ justifyContent: "center" }}>Todo lo que necesitas saber</div>
        </div>
        <div className="txt-reveal" data-d="1">
          <div className="hero-title-display" style={{ color: "#fffdf8" }}>Preguntas</div>
          <div className="hero-title-italic" style={{ color: "var(--terracota)", marginTop: 6 }}>frecuentes.</div>
        </div>
        <p className="txt-reveal" data-d="2" style={{ fontFamily: "'Jost',sans-serif", fontSize: "0.88rem", fontWeight: 300, lineHeight: 1.9, color: "rgba(255,253,248,0.52)", maxWidth: 420 }}>
          Resolvemos las dudas más comunes sobre reservaciones, espacios, precios y logística. Si no encuentras lo que buscas, escríbenos.
        </p>
        <div className="txt-reveal" data-d="3">
          <a href="#faq-content" style={{ fontFamily: "'Jost',sans-serif", fontSize: "0.67rem", fontWeight: 300, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,253,248,0.4)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8, transition: "color 0.22s" }}>
            Ver preguntas
            <ArrowDownIcon />
          </a>
        </div>
        <div className="txt-reveal" data-d="4" style={{ display: "flex", gap: 44, marginTop: 36, paddingTop: 32, borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <HeroStat value="19" label="preguntas respondidas" />
          <HeroStat value="5" label="categorías" />
          <div style={{ textAlign: "center" }}>
            <div style={{ fontFamily: "'Against',serif", fontSize: "1.9rem", color: "#fffdf8", lineHeight: 1 }}>24<span style={{ fontFamily: "'Cormorant Garamond',serif", fontStyle: "italic", fontSize: "1.05rem", color: "var(--terracota)" }}>h</span></div>
            <div style={{ fontFamily: "'Jost',sans-serif", fontSize: "0.61rem", fontWeight: 300, letterSpacing: "0.08em", color: "rgba(255,253,248,0.32)", marginTop: 4 }}>tiempo de respuesta</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroStat({ value, label }: { value: string; label: string }) {
  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ fontFamily: "'Against',serif", fontSize: "1.9rem", color: "#fffdf8", lineHeight: 1 }}>{value}</div>
      <div style={{ fontFamily: "'Jost',sans-serif", fontSize: "0.61rem", fontWeight: 300, letterSpacing: "0.08em", color: "rgba(255,253,248,0.32)", marginTop: 4 }}>{label}</div>
    </div>
  );
}

function FaqSection({
  activeCategory,
  openItem,
  items,
  groupLabel,
  onCategory,
  onToggle,
}: {
  activeCategory: FaqCategoryId;
  openItem: string | null;
  items: FaqItem[];
  groupLabel: string;
  onCategory: (category: FaqCategoryId) => void;
  onToggle: (id: string | null) => void;
}) {
  return (
    <section className="faq-section" id="faq-content">
      <div className="faq-inner">
        <div className="faq-tabs txt-reveal" role="tablist" aria-label="Categorías de preguntas frecuentes">
          {faqCategories.map((category) => (
            <button key={category.id} className={`faq-tab${activeCategory === category.id ? " active" : ""}`} type="button" role="tab" aria-selected={activeCategory === category.id} onClick={() => onCategory(category.id)}>
              {category.label}
            </button>
          ))}
        </div>

        <div className="faq-group txt-reveal" data-category={activeCategory}>
          <div className="faq-group-label">{groupLabel}</div>
          {items.map((item) => (
            <FaqAccordionItem key={item.id} item={item} isOpen={openItem === item.id} onToggle={() => onToggle(openItem === item.id ? null : item.id)} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqAccordionItem({ item, isOpen, onToggle }: { item: FaqItem; isOpen: boolean; onToggle: () => void }) {
  const answerId = `faq-answer-${item.id}`;

  return (
    <div className={`faq-item${isOpen ? " open" : ""}`}>
      <button className="faq-question" type="button" aria-expanded={isOpen} aria-controls={answerId} onClick={onToggle}>
        <span className="faq-q-text">{item.question}</span>
        <div className="faq-icon">
          <PlusIcon />
        </div>
      </button>
      <div id={answerId} className="faq-answer" style={{ maxHeight: isOpen ? 300 : 0 }}>
        <div className="faq-answer-inner">
          <p className="faq-a-text">{item.answer}</p>
        </div>
      </div>
    </div>
  );
}

function ContactSection() {
  return (
    <section className="faq-contact-section">
      <div style={{ maxWidth: 520, margin: "0 auto" }}>
        <div className="txt-reveal" style={{ marginBottom: 16 }}>
          <div className="overline overline-dark" style={{ justifyContent: "center" }}>¿Tienes otra pregunta?</div>
        </div>
        <div className="txt-reveal" data-d="1" style={{ marginBottom: 14 }}>
          <div style={{ fontFamily: "'Against',serif", fontSize: "clamp(2rem,3.5vw,3.2rem)", lineHeight: 0.92, letterSpacing: "-0.025em", color: "var(--verde-dark)" }}>Estamos aquí</div>
          <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(1.6rem,2.8vw,2.6rem)", fontStyle: "italic", fontWeight: 300, lineHeight: 1, color: "var(--terracota)", marginTop: 4 }}>para responderte.</div>
        </div>
        <p className="txt-reveal" data-d="2" style={{ fontFamily: "'Jost',sans-serif", fontSize: "0.86rem", fontWeight: 300, lineHeight: 1.85, color: "var(--muted)", marginBottom: 32 }}>
          Escríbenos por WhatsApp o solicita una cotización y con gusto resolvemos cualquier duda antes de que tomes tu decisión.
        </p>
        <div className="txt-reveal" data-d="3" style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="https://wa.me/5215500000000" className="btn-primary" target="_blank" rel="noopener">
            <WhatsAppSmallIcon />
            Escribir por WhatsApp
          </a>
          <Link href="/cotizar" className="btn-outline-dark">Solicitar cotización</Link>
        </div>
      </div>
    </section>
  );
}

function FinalCtaSection() {
  return (
    <section className="cta-section">
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <img src="/assets/photo-cta-dark.jpg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.18 }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(160deg,#1e3232 0%,#2d4949 30%,#1a2a1a 65%,#0e1e1e 100%)", opacity: 0.88 }} />
      </div>
      <div style={{ position: "absolute", bottom: "15%", left: "45%", width: 500, height: 280, background: "radial-gradient(ellipse,rgba(240,160,60,0.08) 0%,transparent 70%)", borderRadius: "50%", zIndex: 0, pointerEvents: "none" }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: 1500, margin: "0 auto", padding: "0 80px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div className="overline overline-light txt-reveal">Empieza a planear</div>
          <div className="txt-reveal" data-d="1">
            <div style={{ fontFamily: "'Against',serif", fontSize: "clamp(3.2rem,5.5vw,6rem)", lineHeight: 0.92, letterSpacing: "-0.025em", color: "#fffdf8" }}>Tu evento,</div>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(2.6rem,4.5vw,5rem)", fontStyle: "italic", fontWeight: 300, lineHeight: 1, color: "var(--terracota)", marginTop: 6 }}>hecho a tu medida.</div>
          </div>
          <p className="txt-reveal" data-d="2" style={{ fontFamily: "'Jost',sans-serif", fontSize: "0.88rem", fontWeight: 300, lineHeight: 1.85, color: "rgba(255,253,248,0.62)", maxWidth: 360 }}>
            ¿Ya tienes todo más claro? Cuéntanos sobre tu evento y te preparamos una propuesta personalizada con PDF en menos de 24 horas.
          </p>
          <div className="txt-reveal" data-d="3" style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 8 }}>
            {proofItems.map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: "'Jost',sans-serif", fontSize: "0.72rem", fontWeight: 300, color: "rgba(255,253,248,0.5)" }}>
                <CheckIcon />
                {item}
              </div>
            ))}
          </div>
          <div className="txt-reveal" data-d="4" style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 4 }}>
            <Link href="/cotizar" className="btn-accent">Cotizar mi evento</Link>
            <a href="https://wa.me/5215500000000" target="_blank" rel="noopener" style={{ fontFamily: "'Jost',sans-serif", fontSize: "0.69rem", fontWeight: 300, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,253,248,0.65)", background: "transparent", border: "1px solid rgba(255,255,255,0.22)", padding: "13px 28px", borderRadius: 999, textDecoration: "none", transition: "all 0.22s ease" }}>WhatsApp</a>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <Link href="/experiencias" className="cta-card" style={{ textDecoration: "none" }}>
            <div className="cta-card-icon"><ShieldIcon /></div>
            <div className="cta-card-title">Ver experiencias y paquetes</div>
            <div className="cta-card-sub">Explora los paquetes y add-ons disponibles. Cada uno diseñado para un tipo de celebración.</div>
            <div style={{ fontFamily: "'Jost',sans-serif", fontSize: "0.65rem", fontWeight: 300, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(192,122,90,0.8)", marginTop: 4 }}>Explorar →</div>
          </Link>
          <Link href="/espacios" className="cta-card" style={{ textDecoration: "none" }}>
            <div className="cta-card-icon"><GridIcon /></div>
            <div className="cta-card-title">Conocer los espacios</div>
            <div className="cta-card-sub">Jardines, salón, alberca, terraza y más. Galería completa de cada rincón de la finca.</div>
            <div style={{ fontFamily: "'Jost',sans-serif", fontSize: "0.65rem", fontWeight: 300, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(192,122,90,0.8)", marginTop: 4 }}>Ver galería →</div>
          </Link>
        </div>
      </div>
    </section>
  );
}

function PlusIcon() {
  return <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>;
}

function ArrowDownIcon() {
  return <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="12" y1="5" x2="12" y2="19" /><polyline points="19 12 12 19 5 12" /></svg>;
}

function CheckIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="20 6 9 17 4 12" /></svg>;
}

function WhatsAppSmallIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>;
}

function ShieldIcon() {
  return <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>;
}

function GridIcon() {
  return <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" /></svg>;
}
