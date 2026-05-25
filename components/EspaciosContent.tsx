"use client";

import Link from "next/link";
import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { espacios, venueAssets } from "@/lib/espacios-data";

const slideWidthDesktop = 88;

export function EspaciosContent() {
  return (
    <main className="prototype-route espacios-page-react">
      <HeroFolio />
      <StatsTerra />
      <ScrollGallery />
      <InventorySection />
      <CtaSection />
    </main>
  );
}

function HeroFolio() {
  return (
    <section className="hero-folio">
      <div className="hero-folio-ghost" aria-hidden="true">ESPACIOS</div>
      <div className="hero-folio-container">
        <div className="hero-folio-grid">
          <div className="hero-folio-text">
            <div className="hero-folio-id txt-reveal">El venue</div>
            <h1 style={{ margin: 0, fontWeight: 400 }}>
              <span className="hero-folio-display hero-title-display txt-reveal" data-d="1">Espacios</span>
              <span className="hero-folio-italic hero-title-italic txt-reveal" data-d="2">que cuentan historias.</span>
            </h1>
            <p className="hero-folio-body txt-reveal" data-d="3">
              Cada rincón de la finca está pensado para vivirse plenamente. Desplázate por los nueve espacios y encuentra el escenario perfecto para tu celebración.
            </p>
            <div className="hero-folio-actions txt-reveal" data-d="4">
              <a href="#sg-section" className="btn-accent">Explorar espacios</a>
              <a href="#cta-section" className="btn-outline-dark">
                Cotizar ahora
                <ArrowRightIcon />
              </a>
            </div>
          </div>

          <div className="hero-folio-photo-col">
            <div className="hero-photo-frame img-reveal">
              <div className="reveal-cover" style={{ background: "var(--terracota)" }} />
              <div className="img-bg hero-photo-inner">
                <img src="/assets/photo-jardines.jpg" alt="Jardines de la finca" />
              </div>
              <div className="hero-photo-meta">
                <span>Pl. 01</span>
                <span>—</span>
                <span>Jardines norte</span>
              </div>
            </div>
            <div className="hero-photo-caption-text txt-reveal" data-d="3">
              <em>Naturaleza</em><br />como escenario.
            </div>
          </div>
        </div>

        <div className="hero-toc-strip txt-reveal">
          {["Jardines", "Casa", "Salón", "Terraza", "Alberca", "Rooftop", "Puente", "Fogata", "Entorno"].map((item, index) => (
            <span key={item}><i>{formatIndex(index)}</i>{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatsTerra() {
  const stats = [
    { num: "9", label: "Espacios únicos" },
    { num: "2,500", suffix: "m²", label: "Terreno natural" },
    { num: "220", suffix: "pers.", label: "Capacidad máxima" },
  ];

  return (
    <section className="stats-terra">
      <div className="stats-terra-container">
        <div className="stats-terra-grid">
          {stats.map((stat, index) => (
            <div key={stat.label} className="stat-terra txt-reveal" data-d={index || undefined}>
              <div className="stat-terra-num">{stat.num}{stat.suffix ? <em>{stat.suffix}</em> : null}</div>
              <div className="stat-terra-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ScrollGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [listOffset, setListOffset] = useState(0);
  const [autoStopped, setAutoStopped] = useState(false);
  const [isGalleryVisible, setIsGalleryVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const listViewportRef = useRef<HTMLDivElement | null>(null);
  const listItemRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const wheelAccumRef = useRef(0);
  const wheelTimerRef = useRef<number | null>(null);
  const autoTimerRef = useRef<number | null>(null);
  const touchStartRef = useRef({ x: 0, y: 0 });
  const activeEspacio = espacios[activeIndex];
  const slideWidth = isMobile ? 100 : slideWidthDesktop;

  const goTo = useCallback((nextIndex: number) => {
    setActiveIndex(Math.max(0, Math.min(espacios.length - 1, nextIndex)));
  }, []);

  const stopAutoAdvance = useCallback(() => {
    setAutoStopped(true);
    if (autoTimerRef.current) window.clearInterval(autoTimerRef.current);
    autoTimerRef.current = null;
  }, []);

  const goToByUser = useCallback((nextIndex: number) => {
    stopAutoAdvance();
    goTo(nextIndex);
  }, [goTo, stopAutoAdvance]);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 760px)");
    const update = () => setIsMobile(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.querySelectorAll(".txt-reveal").forEach((el) => el.classList.add("in"));
          entry.target.querySelectorAll(".img-reveal").forEach((el) => window.setTimeout(() => el.classList.add("in"), 120));
        });
      },
      { threshold: 0.12 },
    );

    document.querySelectorAll(".espacios-page-react section:not(.sg-section)").forEach((section) => revealObserver.observe(section));

    const heroTimer = window.setTimeout(() => {
      const hero = document.querySelector(".espacios-page-react section");
      hero?.querySelectorAll(".txt-reveal").forEach((el) => el.classList.add("in"));
      hero?.querySelectorAll(".img-reveal").forEach((el) => el.classList.add("in"));
    }, 180);

    return () => {
      window.clearTimeout(heroTimer);
      revealObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setIsGalleryVisible(entry.isIntersecting));
      },
      { threshold: 0.45 },
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isMobile || !isGalleryVisible || autoStopped || autoTimerRef.current) return;
    autoTimerRef.current = window.setInterval(() => {
      setActiveIndex((value) => (value + 1) % espacios.length);
    }, 1800);
    return () => {
      if (autoTimerRef.current) window.clearInterval(autoTimerRef.current);
      autoTimerRef.current = null;
    };
  }, [autoStopped, isGalleryVisible, isMobile]);

  useLayoutEffect(() => {
    const viewport = listViewportRef.current;
    const activeItem = listItemRefs.current[activeIndex];
    if (!viewport || !activeItem) return;
    const viewportMid = viewport.offsetHeight / 2;
    const activeMid = activeItem.offsetTop + activeItem.offsetHeight / 2;
    setListOffset(viewportMid - activeMid);
  }, [activeIndex, isMobile]);

  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    const direction = event.deltaY > 0 ? 1 : -1;
    const nextIndex = activeIndex + direction;
    const canMoveCarousel = nextIndex >= 0 && nextIndex < espacios.length;

    if (!canMoveCarousel) {
      wheelAccumRef.current = 0;
      return;
    }

    event.preventDefault();
    event.stopPropagation();
    wheelAccumRef.current += event.deltaY;

    if (wheelTimerRef.current) window.clearTimeout(wheelTimerRef.current);
    wheelTimerRef.current = window.setTimeout(() => {
      wheelAccumRef.current = 0;
    }, 250);

    if (Math.abs(wheelAccumRef.current) < 50) return;
    wheelAccumRef.current = 0;
    if (wheelTimerRef.current) window.clearTimeout(wheelTimerRef.current);
    goToByUser(nextIndex);
  };

  const handleTouchStart = (event: React.TouchEvent) => {
    const touch = event.changedTouches[0];
    touchStartRef.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleHorizontalTouchEnd = (event: React.TouchEvent) => {
    const touch = event.changedTouches[0];
    const dx = touch.clientX - touchStartRef.current.x;
    const dy = touch.clientY - touchStartRef.current.y;
    if (Math.abs(dx) < 36 || Math.abs(dx) < Math.abs(dy)) return;
    goToByUser(activeIndex + (dx < 0 ? 1 : -1));
  };

  const handleListTouchEnd = (event: React.TouchEvent) => {
    const touch = event.changedTouches[0];
    const dx = touch.clientX - touchStartRef.current.x;
    const dy = touch.clientY - touchStartRef.current.y;
    if (Math.abs(dy) < 30 || Math.abs(dy) < Math.abs(dx)) return;
    goToByUser(activeIndex + (dy < 0 ? 1 : -1));
  };

  return (
    <section className="sg-section" id="sg-section" ref={sectionRef}>
      <div id="sg-track">
        <div className="sg-sticky">
          <div className="sg-left" onTouchStart={handleTouchStart} onTouchEnd={handleHorizontalTouchEnd}>
            <div className="sg-header">
              <div className="sg-header-overline">Espacios del venue</div>
              <div className="sg-header-title">Cada rincón,<br /><em>diseñado para vivirse.</em></div>
            </div>
            <div className="sg-list-viewport" ref={listViewportRef}>
              <div id="sg-list" style={{ transform: `translateY(${listOffset}px)` }}>
                {espacios.map((espacio, index) => {
                  const distance = Math.abs(index - activeIndex);
                  return (
                    <button
                      key={espacio.nombre}
                      ref={(node) => { listItemRefs.current[index] = node; }}
                      className={`sg-list-item${distance === 0 ? " active" : ""}${distance === 1 ? " near" : ""}`}
                      type="button"
                      onClick={() => goToByUser(index)}
                    >
                      <span className="sg-item-num">{formatIndex(index)}</span>
                      <span className="sg-item-bar" />
                      <span className="sg-item-name">{espacio.nombre}</span>
                    </button>
                  );
                })}
              </div>
            </div>
            {!isMobile ? <GalleryDescription espacio={activeEspacio} /> : null}
          </div>

          <div className="sg-right" onWheel={handleWheel} onTouchStart={handleTouchStart} onTouchEnd={handleHorizontalTouchEnd}>
            <div id="sg-img-track" style={{ transform: `translateX(-${activeIndex * slideWidth}%)` }}>
              {espacios.map((espacio, index) => (
                <div key={espacio.nombre} className="sg-img-slide">
                  <img
                    src={espacio.img}
                    alt={espacio.nombre}
                    loading={index === 0 ? "eager" : "lazy"}
                    style={{ transform: isMobile ? "scale(1.34)" : `translateY(calc(-6% + ${Math.max(-7, Math.min(7, (activeIndex - index) * 5))}%))` }}
                  />
                </div>
              ))}
            </div>
            <div className="sg-img-gradient" />
            <div className="sg-img-peek-hint" />
            <div className="sg-img-caption">
              <span id="sg-caption-num">{formatIndex(activeIndex)}</span>
              <span id="sg-caption-name">{activeEspacio.nombre}</span>
              <span id="sg-caption-sub">{activeEspacio.caption}</span>
            </div>
            <div className="sg-progress" id="sg-progress">
              {espacios.map((espacio, index) => (
                <button key={espacio.nombre} className={`sg-dot${activeIndex === index ? " active" : ""}`} type="button" aria-label={`Ver ${espacio.nombre}`} onClick={() => goToByUser(index)} />
              ))}
            </div>
            <div className={`sg-scroll-hint${activeIndex > 0 ? " hidden" : ""}`} id="sg-scroll-hint">
              <div className="sg-scroll-hint-text">Scroll</div>
              <div className="sg-scroll-hint-line" />
            </div>
          </div>

          {isMobile ? <GalleryDescription espacio={activeEspacio} /> : null}
        </div>
      </div>
    </section>
  );
}

function GalleryDescription({ espacio }: { espacio: (typeof espacios)[number] }) {
  return (
    <div className="sg-desc-area">
      <ul id="sg-desc-text">
        {espacio.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
      </ul>
      <div id="sg-desc-cap">{espacio.capacidad}</div>
    </div>
  );
}

function InventorySection() {
  const splitIndex = Math.ceil(venueAssets.length / 2);
  const columns = [venueAssets.slice(0, splitIndex), venueAssets.slice(splitIndex)];

  return (
    <section className="inventario-section">
      <div className="inv-left txt-reveal">
        <div className="inv-left-eyebrow">Inventario completo</div>
        <div>
          <div className="inv-left-display">La finca completa,</div>
          <div className="inv-left-italic">a tu disposición.</div>
        </div>
        <p className="inv-left-body">Cuando reservas Finca La Hermosa, todos los espacios son tuyos. Sin restricciones, sin exclusiones.</p>
        <div className="inv-left-tally">
          <span className="inv-tally-num">12</span>
          <span className="inv-tally-label">áreas /<br />amenidades</span>
        </div>
      </div>

      <div className="inv-right">
        <div className="inv-scroll-cue txt-reveal" aria-hidden="true">
          <ChevronDownIcon />
        </div>
        <div className="inv-section-label txt-reveal">Activos del venue</div>
        <div className="inv-cols txt-reveal" data-d="1">
          {columns.map((column, columnIndex) => (
            <div key={columnIndex}>
              {column.map((asset, index) => (
                <div key={asset.nombre} className="inv-item">
                  <span className="inv-item-num">{formatIndex(columnIndex * splitIndex + index)}</span>
                  <div className="inv-item-body">
                    <span className="inv-item-name">{asset.nombre}</span>
                    <span className="inv-item-detail">{asset.detalle}</span>
                  </div>
                  {asset.addon ? <span className="inv-addon">add-on</span> : null}
                </div>
              ))}
            </div>
          ))}
        </div>
        <p className="inv-footer-line txt-reveal" data-d="2">"Cuando reservas, el espacio es exclusivo para tu evento. <em>Sin distracciones.</em>"</p>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section id="cta-section" className="exp-cta" style={{ background: "#0d1918", padding: "100px 0", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <img src="/assets/photo-cta-dark.jpg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.22 }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(160deg,#1e3232 0%,#2d4949 28%,#1a2a1a 60%,#0e1e1e 100%)", opacity: 0.85 }} />
      </div>
      <div style={{ position: "absolute", bottom: "20%", left: "50%", transform: "translateX(-50%)", width: 400, height: 250, background: "radial-gradient(ellipse,rgba(240,160,60,0.1) 0%,transparent 70%)", borderRadius: "50%", zIndex: 0, pointerEvents: "none" }} />

      <div className="cta-outer exp-cta-inner" style={{ position: "relative", zIndex: 1, maxWidth: 1500, width: "100%", margin: "0 auto", padding: "0 52px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div className="overline overline-light txt-reveal">Reserva tu fecha</div>
          <div className="txt-reveal" data-d="1">
            <div className="final-cta-title-main" style={{ fontFamily: "'Against',serif", fontSize: "clamp(3.5rem,6vw,6.5rem)", lineHeight: 0.92, letterSpacing: "-0.025em", color: "#fffdf8" }}>La finca te espera,</div>
            <div className="final-cta-title-sub" style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(2.8rem,5vw,5rem)", fontStyle: "italic", fontWeight: 300, lineHeight: 1, color: "var(--terracota)", marginTop: 6 }}>¿cuándo celebramos?</div>
          </div>
          <p className="txt-reveal" data-d="2" style={{ fontFamily: "'Jost',sans-serif", fontSize: "0.88rem", fontWeight: 300, lineHeight: 1.8, color: "rgba(255,253,248,0.62)", maxWidth: 380 }}>
            Cotiza tu evento, agenda una visita o escríbenos directo por WhatsApp. Respuesta en menos de 24 horas.
          </p>
        </div>

        <div className="txt-reveal" data-d="2" style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div className="cta-card">
            <DocumentIcon />
            <div className="cta-card-title">Cotizar en línea</div>
            <p className="cta-card-sub">Cuéntanos sobre tu evento y recibe una propuesta personalizada.</p>
            <Link href="/cotizar" className="btn-accent" style={{ fontSize: "0.65rem", padding: "10px 20px" }}>Cotizar ahora</Link>
          </div>
          <div className="cta-small-grid exp-cta-card-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            <div className="cta-card">
              <CalendarIcon />
              <div className="cta-card-title">Agendar visita</div>
              <p className="cta-card-sub">Ven a conocer la finca antes de decidir.</p>
              <a href="https://wa.me/5215500000000" className="btn-accent" target="_blank" rel="noopener" style={{ fontSize: "0.65rem", padding: "10px 20px" }}>Agendar</a>
            </div>
            <div className="cta-card">
              <MessageIcon />
              <div className="cta-card-title">WhatsApp</div>
              <p className="cta-card-sub">Respuesta rápida y directa.</p>
              <a href="https://wa.me/5215500000000" className="btn-accent" target="_blank" rel="noopener" style={{ fontSize: "0.65rem", padding: "10px 20px", background: "#25D366" }}>Escribir</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function formatIndex(index: number) {
  return String(index + 1).padStart(2, "0");
}

function ArrowRightIcon() {
  return <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>;
}

function ChevronDownIcon() {
  return <svg className="scroll-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>;
}

function DocumentIcon() {
  return <svg className="cta-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="9" y1="13" x2="15" y2="13" /><line x1="9" y1="17" x2="15" y2="17" /></svg>;
}

function CalendarIcon() {
  return <svg className="cta-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>;
}

function MessageIcon() {
  return <svg className="cta-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>;
}
