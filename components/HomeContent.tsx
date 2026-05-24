"use client";

import type { CSSProperties, ReactNode, RefObject } from "react";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { homeExperiences, homePackages, homeSpaces, homeTestimonials, quickQuoteOptions } from "@/lib/home-data";

type IconName = "users" | "briefcase" | "home" | "heart" | "clock" | "more" | "file" | "mail" | "calendar" | "whatsapp";

export function HomeContent() {
  const [activeTab, setActiveTab] = useState(0);
  const [processActive, setProcessActive] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const revealObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.querySelectorAll(".txt-reveal").forEach((el) => el.classList.add("in"));
          entry.target.querySelectorAll(".img-reveal").forEach((el) => {
            window.setTimeout(() => el.classList.add("in"), 100);
          });
        });
      },
      { threshold: 0.25 },
    );

    document.querySelectorAll(".home-page-react [data-sec]").forEach((section) => revealObs.observe(section));

    const heroTimer = window.setTimeout(() => {
      const hero = document.querySelector('.home-page-react [data-sec="hero"]');
      hero?.querySelectorAll(".txt-reveal").forEach((el) => el.classList.add("in"));
      hero?.querySelectorAll(".img-reveal").forEach((el) => el.classList.add("in"));
    }, 180);

    const processObs = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          window.setTimeout(() => setProcessActive(true), 600);
          processObs.disconnect();
        }
      },
      { threshold: 0.5 },
    );
    if (processRef.current) processObs.observe(processRef.current);

    return () => {
      window.clearTimeout(heroTimer);
      revealObs.disconnect();
      processObs.disconnect();
    };
  }, []);

  useEffect(() => {
    const grid = testimonialsRef.current;
    if (!grid || window.innerWidth > 760) return;
    let animationFrame = 0;
    let paused = false;

    const tick = () => {
      if (!paused) {
        grid.scrollLeft += 0.4;
        if (grid.scrollLeft + grid.clientWidth >= grid.scrollWidth - 2) grid.scrollLeft = 0;
      }
      animationFrame = window.requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          animationFrame = window.requestAnimationFrame(tick);
        } else {
          window.cancelAnimationFrame(animationFrame);
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(grid);

    const pause = () => {
      paused = true;
      window.setTimeout(() => {
        paused = false;
      }, 2500);
    };
    grid.addEventListener("touchstart", pause, { passive: true });
    grid.addEventListener("click", pause);

    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(animationFrame);
      grid.removeEventListener("touchstart", pause);
      grid.removeEventListener("click", pause);
    };
  }, []);

  const scrollCarousel = useCallback((direction: number) => {
    carouselRef.current?.scrollBy({ left: direction * 290, behavior: "smooth" });
  }, []);

  return (
    <main className="prototype-route home-page-react">
      <HeroSection />
      <ExperiencesSection activeTab={activeTab} onTabChange={setActiveTab} />
      <SpacesSection carouselRef={carouselRef} onScroll={scrollCarousel} />
      <ProcessSection active={processActive} processRef={processRef} />
      <QuickQuoteSection />
      <PackagesSection />
      <TestimonialsSection testimonialsRef={testimonialsRef} />
      <FinalCtaSection />
    </main>
  );
}

function HeroSection() {
  return (
    <section className="snap-section" data-sec="hero" style={{ background: "#0e1a18" }}>
      <div className="img-reveal" style={{ position: "absolute", inset: "-60px 0", zIndex: 0 }}>
        <div className="reveal-cover" />
        <div className="img-bg bg-breathe" style={{ position: "absolute", inset: 0 }}>
          <img src="/assets/hero-wedding.jpg" alt="" className="photo-cover" style={{ objectPosition: "center 25%" }} />
        </div>
      </div>
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(165deg,rgba(14,26,24,0.28) 0%,rgba(14,26,24,0.65) 100%)", zIndex: 1 }} />
      <div className="arch-label" style={{ right: 60, bottom: 80, zIndex: 1 }}>LA HERMOSA</div>

      <div style={{ position: "relative", zIndex: 2, maxWidth: 1500, width: "100%", margin: "0 auto", padding: "100px 52px 0" }}>
        <div className="txt-reveal" data-d="1" style={{ marginBottom: 16 }}>
          <div className="overline overline-light">VENUE Y EXPERIENCIAS - MÉXICO</div>
        </div>
        <div style={{ maxWidth: 820 }}>
          <div className="txt-reveal hero-title-display" data-d="1" style={{ color: "#fffdf8" }}>Cada experiencia,</div>
          <div className="txt-reveal hero-title-italic" data-d="2" style={{ color: "var(--terracota)", marginTop: 4 }}>diseñada para ti.</div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, marginTop: 48, alignItems: "flex-end" }}>
          <p className="txt-reveal" data-d="3" style={{ fontFamily: "'Jost',sans-serif", fontSize: "0.95rem", fontWeight: 300, lineHeight: 1.8, color: "rgba(255,253,248,0.72)", maxWidth: 400 }}>
            Un espacio rodeado de naturaleza para celebrar, descansar y compartir momentos que se quedan en la memoria.
          </p>
          <div className="txt-reveal" data-d="4" style={{ display: "flex", gap: 12, justifyContent: "flex-end" }}>
            <Link className="btn-glass" href="/cotizar">Cotizar mi experiencia</Link>
            <Link className="btn-outline" href="/espacios">Ver espacios</Link>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-line" />
        <span>Explorar</span>
      </div>
    </section>
  );
}

function ExperiencesSection({ activeTab, onTabChange }: { activeTab: number; onTabChange: (index: number) => void }) {
  return (
    <section className="snap-section" data-sec="experiencias" style={{ background: "var(--crema-warm)", overflow: "hidden", paddingTop: 86 }}>
      <div style={{ maxWidth: 1500, width: "100%", margin: "0 auto", padding: "0 52px", display: "flex", flexDirection: "column", gap: 0 }}>
        <div className="txt-reveal home-experiences-heading" data-d="1" style={{ textAlign: "center", marginBottom: 16 }}>
          <div className="overline overline-dark" style={{ justifyContent: "center", marginBottom: 10 }}>Experiencias</div>
          <div style={sectionTitleStyle}>¿Qué quieres celebrar?</div>
        </div>
        <div className="tabs-bar txt-reveal home-experiences-tabs" data-d="2">
          {homeExperiences.map((experience, index) => (
            <button key={experience.label} className={`tab-btn ${experience.special ? "tab-btn--special" : ""} ${activeTab === index ? "active" : ""}`} onClick={() => onTabChange(index)}>
              {experience.label}
            </button>
          ))}
        </div>
        <div className="txt-reveal" data-d="3" style={{ flex: 1, overflow: "hidden" }}>
          {homeExperiences.map((experience, index) => (
            <div key={experience.label} className={`tab2-panel ${activeTab === index ? "active" : ""}`} data-panel={index}>
              <div style={{ borderRadius: 12, overflow: "hidden", height: 420, position: "relative" }}>
                <img src={experience.image} alt={experience.imageAlt} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <div style={imageOverlayStyle} />
                <div style={imageCaptionStyle}>{experience.caption}</div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <span style={eyebrowStyle}>{experience.eyebrow}</span>
                <h3 style={cardTitleStyle}>{experience.title}</h3>
                <p style={bodyCopyStyle}>{experience.body}</p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                  {experience.bullets.map((bullet) => <CheckItem key={bullet}>{bullet}</CheckItem>)}
                </ul>
                <Link className="btn-outline-dark" href="/experiencias" style={{ alignSelf: "flex-start", marginTop: 4 }}>{experience.cta}</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SpacesSection({ carouselRef, onScroll }: { carouselRef: RefObject<HTMLDivElement | null>; onScroll: (direction: number) => void }) {
  return (
    <section className="snap-section" data-sec="espacios" style={{ background: "var(--crema)", flexDirection: "column", justifyContent: "center", overflow: "hidden" }}>
      <div style={{ maxWidth: 1500, width: "100%", margin: "0 auto", padding: "0 52px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 40 }}>
          <div className="txt-reveal" data-d="1" style={{ lineHeight: 1 }}>
            <div style={sectionTitleStyle}>Un venue,</div>
            <div style={sectionItalicStyle}>infinitas posibilidades</div>
          </div>
          <div className="txt-reveal" data-d="2">
            <Link href="/espacios" style={smallLinkStyle}>Ver todos los espacios <ArrowIcon /></Link>
          </div>
        </div>
      </div>
      <div style={{ position: "relative" }}>
        <CarouselButton direction="left" onClick={() => onScroll(-1)} />
        <div id="s3-carousel" ref={carouselRef} style={{ display: "flex", gap: 16, overflowX: "auto", scrollSnapType: "x mandatory", scrollbarWidth: "none", padding: "4px 0 20px", scrollPaddingLeft: 0 }}>
          {homeSpaces.map((space) => <SpaceCard key={space.name} space={space} />)}
        </div>
        <CarouselButton direction="right" onClick={() => onScroll(1)} />
      </div>
    </section>
  );
}

function ProcessSection({ active, processRef }: { active: boolean; processRef: RefObject<HTMLDivElement | null> }) {
  const steps = [
    { title: "Cotiza en línea", body: "Llena nuestro formulario en 3 minutos y cuéntanos cómo imaginas tu evento.", icon: "file" as IconName },
    { title: "Recibe tu propuesta", body: "Te enviamos un PDF personalizado con el paquete que mejor se adapta a tu evento y presupuesto.", icon: "mail" as IconName },
    { title: "Confirma y celebra", body: "Agenda una visita, confirma los detalles y prepárate para vivir algo memorable.", icon: "calendar" as IconName },
  ];

  return (
    <section className="snap-section process-compact-section" data-sec="proceso" style={{ background: "var(--crema-warm)", minHeight: "72vh" }}>
      <div style={{ maxWidth: 1500, width: "100%", margin: "0 auto", padding: "0 52px" }}>
        <div className="process-compact-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 38 }}>
          <div className="txt-reveal" data-d="1" style={{ lineHeight: 1 }}>
            <div style={sectionTitleStyle}>De la idea</div>
            <div style={sectionItalicStyle}>a la celebración.</div>
          </div>
          <p className="txt-reveal" data-d="2" style={{ fontFamily: "'Jost',sans-serif", fontSize: "0.88rem", fontWeight: 300, color: "var(--muted)", maxWidth: 280, textAlign: "right", marginTop: "auto", lineHeight: 1.7 }}>Sin complicaciones. En 3 pasos.<br />Tu evento, tu ritmo.</p>
        </div>

        <div ref={processRef} className="proc-timeline txt-reveal" data-d="3">
          <div className="proc-track-wrap">
            <div className="proc-track">
              <div className="proc-track-fill" id="proc-fill" style={{ transition: active ? "width 2s linear" : undefined, width: active ? "100%" : 0 }} />
            </div>
            <div className="proc-dots-row">
              {[1, 2, 3].map((step, index) => (
                <div key={step} className={`proc-dot ${active ? "active" : ""}`} id={`proc-dot-${step}`} style={{ transitionDelay: `${index}s` }}>
                  <div className="proc-dot-inner">0{step}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="proc-cols">
            {steps.map((step) => (
              <div className="proc-col" key={step.title}>
                <Icon name={step.icon} className="proc-icon" />
                <div className="proc-title">{step.title}</div>
                <p className="proc-body">{step.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="txt-reveal process-compact-cta" data-d="4" style={{ marginTop: 34, display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
          <Link className="btn-primary" href="/cotizar">Cotizar ahora</Link>
          <svg className="scroll-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ width: 28, height: 28, color: "var(--verde-mid)", opacity: 0.7 }}><polyline points="6 9 12 15 18 9" /></svg>
        </div>
      </div>
    </section>
  );
}

function QuickQuoteSection() {
  return (
    <section className="snap-section quote-gateway quote-video-section" data-sec="cotizador" style={{ background: "var(--verde-dark)", minHeight: "76vh" }}>
      <div className="quote-video-bg" aria-hidden="true">
        <video className="quote-video-media" autoPlay muted loop playsInline preload="metadata" poster="/assets/photo-cta-dark.jpg">
          <source src="/assets/home-quote-loop.mp4" type="video/mp4" />
          <source src="/assets/home-quote-loop.webm" type="video/webm" />
        </video>
        <img className="quote-video-poster" src="/assets/photo-cta-dark.jpg" alt="" />
        <div className="quote-video-wash" />
      </div>
      <div className="arch-label" style={{ right: -30, bottom: 46, color: "rgba(255,253,248,0.035)" }}>COTIZA</div>
      <div className="quote-video-inner" style={{ position: "relative", zIndex: 4, maxWidth: 1500, width: "100%", margin: "0 auto", padding: "0 52px", display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
        <div className="txt-reveal quote-glass-card" data-d="2">
          <div className="overline overline-light">Cotización guiada</div>
          <div>
            <div className="quote-card-title">Tu experiencia,</div>
            <div className="quote-card-subtitle">en 3 minutos.</div>
          </div>
          <p className="quote-card-copy">
            Mira el ambiente, elige el punto de partida y continúa al cotizador completo. La propuesta final llega por WhatsApp con precio, paquete recomendado y próximos pasos.
          </p>
          <Link className="btn-accent quote-main-cta" href="/cotizar">Cotizar ahora</Link>
        </div>
      </div>
    </section>
  );
}

function PackagesSection() {
  return (
    <section className="snap-section" data-sec="paquetes" style={{ background: "var(--crema)", flexDirection: "column", justifyContent: "center", overflow: "hidden" }}>
      <div style={{ maxWidth: 1500, width: "100%", margin: "0 auto", padding: "0 52px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 44 }}>
          <div className="txt-reveal" data-d="1" style={{ lineHeight: 1 }}>
            <div style={sectionTitleStyle}>Experiencias</div>
            <div style={sectionItalicStyle}>para cada ocasión</div>
          </div>
          <div className="txt-reveal" data-d="2" style={{ textAlign: "right" }}>
            <p style={{ fontFamily: "'Jost',sans-serif", fontSize: "0.82rem", fontWeight: 300, color: "var(--muted)" }}>Desde $13,000 MXN · 25–30 personas</p>
            <Link href="/experiencias" style={{ ...smallLinkStyle, marginTop: 6 }}>Ver todos los paquetes <ArrowIcon /></Link>
          </div>
        </div>
        <div className="txt-reveal pkg-featured-grid" data-d="2" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
          {homePackages.map((item) => (
            <div className="pkg-card" key={item.name}>
              <div className="pkg-img-wrap">
                <img src={item.image} alt={item.alt} className="pkg-img-inner" style={{ height: 190 }} />
                <div style={{ position: "absolute", inset: 0, background: item.overlay }} />
                {item.badge ? <div style={{ position: "absolute", top: 14, left: 14, padding: "4px 12px", background: "var(--terra-light)", color: "var(--terracota)", fontFamily: "'Jost',sans-serif", fontSize: "0.62rem", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", borderRadius: 999 }}>{item.badge}</div> : null}
              </div>
              <div className="pkg-body">
                <div className="pkg-over">{item.name}</div>
                <div className="pkg-price">{item.price}</div>
                <div className="pkg-capacity">{item.capacity}</div>
                <div className="pkg-divider" />
                <ul className="pkg-features">{item.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
                <div className="pkg-btn-wrap"><Link className="pkg-btn" href="/experiencias">Ver más</Link></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection({ testimonialsRef }: { testimonialsRef: RefObject<HTMLDivElement | null> }) {
  return (
    <section className="snap-section" data-sec="testimonios" style={{ background: "var(--crema-warm)", flexDirection: "column", justifyContent: "center" }}>
      <div style={{ maxWidth: 1500, width: "100%", margin: "0 auto", padding: "0 52px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 32 }}>
          <div className="txt-reveal" data-d="1" style={{ lineHeight: 1 }}>
            <div style={sectionTitleStyle}>Lo que dicen</div>
            <div style={sectionItalicStyle}>quienes ya celebraron aquí.</div>
          </div>
          <div className="overline overline-dark txt-reveal" data-d="2">+50 eventos realizados</div>
        </div>
        <div ref={testimonialsRef} className="txt-reveal" data-d="2" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "20px 12px", padding: "8px 4px" }}>
          {homeTestimonials.map((item) => (
            <div key={`${item.author}-${item.event}`} className="postit" style={{ background: item.background, transform: item.rotation, "--pin": item.pin } as CSSProperties}>
              <div className="postit-pin" />
              <p className="postit-q">"{item.quote}"</p>
              <div className="postit-author"><strong>{item.author}</strong><span>{item.event}</span></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCtaSection() {
  return (
    <section className="snap-section" data-sec="cta" style={{ background: "#0d1918", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <img src="/assets/photo-cta-dark.jpg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.22 }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(160deg,#1e3232 0%,#2d4949 28%,#1a2a1a 60%,#0e1e1e 100%)", opacity: 0.85 }} />
      </div>
      <div style={{ position: "absolute", bottom: "20%", left: "50%", transform: "translateX(-50%)", width: 400, height: 250, background: "radial-gradient(ellipse,rgba(240,160,60,0.1) 0%,transparent 70%)", borderRadius: "50%", zIndex: 0, pointerEvents: "none" }} />
      <div className="arch-label" style={{ left: -40, bottom: 60, color: "rgba(255,253,248,0.03)" }}>CELEBRA</div>
      <div className="cta-outer" style={{ position: "relative", zIndex: 1, maxWidth: 1500, width: "100%", margin: "0 auto", padding: "0 52px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div>
            <div id="illum-text" style={{ fontFamily: "'Against',serif", fontSize: "clamp(3.5rem,6vw,6.5rem)", lineHeight: 0.92, letterSpacing: "-0.025em", color: "#fffdf8" }}>Tu momento perfecto,</div>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(2.8rem,5vw,5rem)", fontStyle: "italic", fontWeight: 300, lineHeight: 1, color: "var(--terracota)", marginTop: 6 }}>comienza aquí.</div>
          </div>
          <p className="txt-reveal" data-d="3" style={{ fontFamily: "'Jost',sans-serif", fontSize: "0.88rem", fontWeight: 300, lineHeight: 1.8, color: "rgba(255,253,248,0.62)", maxWidth: 380 }}>Agenda una visita, resuelve tus dudas o recibe tu cotización ahora mismo.</p>
        </div>
        <div className="txt-reveal" data-d="2" style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <CtaCard icon="file" title="Cotizar en línea" body="Cuéntanos sobre tu evento y recibe una propuesta personalizada en menos de 24 horas." href="/cotizar" label="Cotizar ahora" />
          <div className="cta-small-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            <CtaCard icon="calendar" title="Agendar visita" body="Ven a conocer la finca en persona antes de decidir." href="https://wa.me/5215500000000" label="Agendar" />
            <CtaCard icon="whatsapp" title="WhatsApp" body="Respuesta rápida y sin complicaciones." href="https://wa.me/5215500000000" label="Escribir" whatsapp />
          </div>
        </div>
      </div>
    </section>
  );
}

function CtaCard({ icon, title, body, href, label, whatsapp = false }: { icon: IconName; title: string; body: string; href: string; label: string; whatsapp?: boolean }) {
  const external = href.startsWith("http");
  const className = `btn-accent ${whatsapp ? "btn-wa" : ""}`;
  return (
    <div className="cta-card">
      <Icon name={icon} className="cta-card-icon" />
      <div className="cta-card-title">{title}</div>
      <p className="cta-card-sub">{body}</p>
      {external ? (
        <a className={className} href={href} target="_blank" rel="noopener" style={{ fontSize: "0.65rem", padding: "10px 20px" }}>{label}</a>
      ) : (
        <Link className={className} href={href} style={{ fontSize: "0.65rem", padding: "10px 20px" }}>{label}</Link>
      )}
    </div>
  );
}

function SpaceCard({ space }: { space: (typeof homeSpaces)[number] }) {
  return (
    <Link href="/espacios" style={spaceCardStyle}>
      <div style={{ height: 320, overflow: "hidden", position: "relative", background: space.gradient }}>
        {space.image ? <img src={space.image} alt={space.alt} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }} /> : null}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom,transparent 55%,rgba(10,18,10,0.5) 100%)" }} />
        <div style={imageCaptionStyle}>{space.caption}</div>
      </div>
      <div style={{ padding: "18px 20px 20px" }}><h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.3rem", fontWeight: 400, color: "var(--carbon)" }}>{space.name}</h3></div>
    </Link>
  );
}

function CarouselButton({ direction, onClick }: { direction: "left" | "right"; onClick: () => void }) {
  return (
    <button type="button" onClick={onClick} aria-label={direction === "left" ? "Anterior" : "Siguiente"} style={{ position: "absolute", top: "45%", [direction]: 10, transform: "translateY(-50%)", zIndex: 5, width: 42, height: 42, borderRadius: "50%", background: "rgba(255,253,248,0.9)", border: "1px solid var(--crema-border)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "var(--verde)", boxShadow: "0 2px 12px rgba(45,73,73,0.1)", transition: "all 0.22s" }}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <polyline points={direction === "left" ? "15 18 9 12 15 6" : "9 18 15 12 9 6"} />
      </svg>
    </button>
  );
}

function CheckItem({ children }: { children: ReactNode }) {
  return (
    <li style={{ fontFamily: "'Jost',sans-serif", fontSize: "0.82rem", fontWeight: 300, color: "var(--body-clr)", display: "flex", gap: 8, alignItems: "flex-start" }}>
      <span style={{ color: "var(--terracota)", fontSize: "0.75rem" }}>✓</span>{children}
    </li>
  );
}

function Icon({ name, className }: { name: IconName; className?: string }) {
  if (name === "whatsapp") {
    return <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12.05 21.785a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" /></svg>;
  }

  const paths: Record<Exclude<IconName, "whatsapp">, ReactNode> = {
    users: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></>,
    briefcase: <><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></>,
    home: <><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></>,
    heart: <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />,
    clock: <><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></>,
    more: <><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /><circle cx="5" cy="12" r="1" /></>,
    file: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="9" y1="13" x2="15" y2="13" /><line x1="9" y1="17" x2="15" y2="17" /></>,
    mail: <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></>,
    calendar: <><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></>,
  };

  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

function ArrowIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><polyline points="9 18 15 12 9 6" /></svg>;
}

const sectionTitleStyle: CSSProperties = { fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(3.4rem,6vw,5.2rem)", fontWeight: 300, letterSpacing: "-0.02em", color: "var(--carbon)", lineHeight: 1.05 };
const sectionItalicStyle: CSSProperties = { fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(2.4rem,4vw,3.8rem)", fontStyle: "italic", fontWeight: 300, color: "var(--terracota)" };
const imageOverlayStyle: CSSProperties = { position: "absolute", inset: 0, background: "linear-gradient(to bottom,transparent 55%,rgba(10,18,10,0.45) 100%)" };
const imageCaptionStyle: CSSProperties = { position: "absolute", bottom: 16, left: 16, fontFamily: "'Jost',sans-serif", fontSize: "0.62rem", fontWeight: 300, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,253,248,0.65)" };
const eyebrowStyle: CSSProperties = { fontFamily: "'Jost',sans-serif", fontSize: "0.65rem", fontWeight: 300, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--terracota)" };
const cardTitleStyle: CSSProperties = { fontFamily: "'Cormorant Garamond',serif", fontSize: "1.85rem", fontWeight: 300, lineHeight: 1.2, color: "var(--carbon)" };
const bodyCopyStyle: CSSProperties = { fontFamily: "'Jost',sans-serif", fontSize: "0.88rem", fontWeight: 300, lineHeight: 1.8, color: "var(--body-clr)" };
const smallLinkStyle: CSSProperties = { fontFamily: "'Jost',sans-serif", fontSize: "0.78rem", fontWeight: 300, letterSpacing: "0.06em", color: "var(--terracota)", display: "inline-flex", alignItems: "center", gap: 6, textDecoration: "none" };
const spaceCardStyle: CSSProperties = { flex: "0 0 340px", scrollSnapAlign: "start", borderRadius: 8, overflow: "hidden", background: "var(--crema)", boxShadow: "0 2px 8px rgba(45,73,73,0.07),0 8px 24px rgba(45,73,73,0.05)", cursor: "pointer", transition: "transform 0.26s var(--ease-out),box-shadow 0.26s", textDecoration: "none", color: "inherit" };
