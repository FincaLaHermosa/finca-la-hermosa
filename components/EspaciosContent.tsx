"use client";

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
              Recorre los nueve espacios de la finca y encuentra el escenario ideal para tu celebración.
            </p>
            <div className="hero-folio-actions txt-reveal" data-d="4">
              <a href="#sg-section" className="btn-accent">Explorar espacios</a>
              <a href="/cotizar" className="btn-outline-dark">
                Solicitar propuesta
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
  const [lightboxImageIndex, setLightboxImageIndex] = useState(0);
  const [lightboxEspacioIndex, setLightboxEspacioIndex] = useState<number | null>(null);
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
  const lightboxEspacio = lightboxEspacioIndex === null ? null : espacios[lightboxEspacioIndex];
  const lightboxGallery = lightboxEspacio?.gallery?.length ? lightboxEspacio.gallery : lightboxEspacio ? [lightboxEspacio.img] : [];

  const openLightbox = (index: number) => {
    stopAutoAdvance();
    setLightboxEspacioIndex(index);
    setLightboxImageIndex(0);
  };

  const closeLightbox = useCallback(() => {
    setLightboxEspacioIndex(null);
    setLightboxImageIndex(0);
  }, []);

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
    if (lightboxEspacioIndex === null) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLightbox();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeLightbox, lightboxEspacioIndex]);

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
    }, 1450);
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

  const handleGalleryClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement;
    if (target.closest(".sg-progress")) return;
    openLightbox(activeIndex);
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

          <div className="sg-right" onClick={handleGalleryClick} onWheel={handleWheel} onTouchStart={handleTouchStart} onTouchEnd={handleHorizontalTouchEnd}>
            <div id="sg-img-track" style={{ transform: `translateX(-${activeIndex * slideWidth}%)` }}>
              {espacios.map((espacio, index) => (
                <div key={espacio.nombre} className="sg-img-slide">
                  <button className="sg-image-open" type="button" aria-label={`Abrir galería de ${espacio.nombre}`} onClick={(event) => { event.stopPropagation(); openLightbox(index); }}>
                    <img
                      src={espacio.img}
                      alt={espacio.nombre}
                      loading={index === 0 ? "eager" : "lazy"}
                      style={{ transform: isMobile ? "scale(1.34)" : `translateY(calc(-6% + ${Math.max(-7, Math.min(7, (activeIndex - index) * 5))}%))` }}
                    />
                  </button>
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
            <div className="sg-mobile-swipe-cue" aria-hidden="true">
              <ChevronLeftIcon />
              <ChevronRightIcon />
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
      {lightboxEspacio ? (
        <div className="space-lightbox" role="dialog" aria-modal="true" aria-label={`Galería de ${lightboxEspacio.nombre}`}>
          <button className="space-lightbox-backdrop" type="button" aria-label="Cerrar galería" onClick={closeLightbox} />
          <div className="space-lightbox-panel">
            <div className="space-lightbox-head">
              <div>
                <span>{formatIndex(lightboxEspacioIndex ?? 0)}</span>
                <h2>{lightboxEspacio.nombre}</h2>
              </div>
              <button className="space-lightbox-close" type="button" aria-label="Cerrar galería" onClick={closeLightbox}>
                <CloseIcon />
              </button>
            </div>
            <div className="space-lightbox-image">
              <img src={lightboxGallery[lightboxImageIndex]} alt={lightboxEspacio.nombre} />
            </div>
            <div className="space-lightbox-thumbs" aria-label="Imágenes del espacio">
              {lightboxGallery.map((image, index) => (
                <button
                  key={`${image}-${index}`}
                  className={`space-lightbox-thumb${index === lightboxImageIndex ? " active" : ""}`}
                  type="button"
                  aria-label={`Ver imagen ${index + 1}`}
                  aria-pressed={index === lightboxImageIndex}
                  onClick={() => setLightboxImageIndex(index)}
                >
                  <img src={image} alt="" />
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : null}
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
    <section id="cta-section" className="espacios-contact-section">
      <div style={{ maxWidth: 520, margin: "0 auto" }}>
        <div className="txt-reveal" style={{ marginBottom: 16 }}>
          <div className="overline overline-dark" style={{ justifyContent: "center" }}>¿Tienes otra pregunta?</div>
        </div>
        <div className="txt-reveal" data-d="1" style={{ marginBottom: 14 }}>
          <div style={{ fontFamily: "'Against',serif", fontSize: "clamp(2rem,3.5vw,3.2rem)", lineHeight: 0.92, letterSpacing: "-0.025em", color: "var(--verde-dark)" }}>Estamos aquí</div>
          <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(1.6rem,2.8vw,2.6rem)", fontStyle: "italic", fontWeight: 300, lineHeight: 1, color: "var(--terracota)", marginTop: 4 }}>para responderte.</div>
        </div>
        <p className="txt-reveal" data-d="2" style={{ fontFamily: "'Jost',sans-serif", fontSize: "0.86rem", fontWeight: 300, lineHeight: 1.85, color: "var(--muted)", marginBottom: 32 }}>
          Escríbenos por WhatsApp o solicita una propuesta. Te ayudamos a resolver disponibilidad, espacios y siguientes pasos antes de decidir.
        </p>
        <div className="txt-reveal espacios-contact-actions" data-d="3">
          <a href="https://wa.me/5215500000000" className="btn-primary" target="_blank" rel="noopener">
            <WhatsAppSmallIcon />
            Escribir por WhatsApp
          </a>
          <a href="/cotizar" className="btn-outline-dark">Solicitar propuesta</a>
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

function ChevronLeftIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 6 9 12 15 18" /></svg>;
}

function ChevronRightIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 6 15 12 9 18" /></svg>;
}

function CloseIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>;
}

function WhatsAppSmallIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>;
}

function CalendarIcon() {
  return <svg className="cta-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>;
}

function MessageIcon() {
  return <svg className="cta-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>;
}
