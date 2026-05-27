"use client";

import { useEffect } from "react";
import { commitments, teamMembers, timelineItems, values } from "@/lib/nosotros-data";

export function NosotrosContent() {
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
    const imageObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("in");
          imageObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.1 },
    );

    document.querySelectorAll(".nosotros-page-react .txt-reveal").forEach((el) => revealObserver.observe(el));
    document.querySelectorAll(".nosotros-page-react .img-reveal").forEach((el) => imageObserver.observe(el));

    const heroTimer = window.setTimeout(() => {
      document.querySelectorAll(".hero-nosotros .txt-reveal, .hero-nosotros .img-reveal").forEach((el) => el.classList.add("in"));
    }, 120);

    return () => {
      window.clearTimeout(heroTimer);
      revealObserver.disconnect();
      imageObserver.disconnect();
    };
  }, []);

  return (
    <main className="prototype-route nosotros-page-react">
      <HeroSection />
      <StorySection />
      <ValuesSection />
      <TimelineSection />
      <TeamSection />
      <PromiseSection />
      <CtaSection />
    </main>
  );
}

function HeroSection() {
  return (
    <section className="hero-nosotros">
      <div style={{ position: "absolute", inset: 0, zIndex: 0, background: "radial-gradient(ellipse at 20% 60%,rgba(192,122,90,0.08) 0%,transparent 55%)", pointerEvents: "none" }} />
      <div className="arch-label" style={{ left: 52, bottom: 40, zIndex: 1, color: "rgba(255,253,248,0.04)", fontSize: "clamp(6rem,10vw,13rem)" }}>NOSOTROS</div>

      <div className="hero-left">
        <div className="txt-reveal" style={{ marginBottom: 28 }}>
          <div className="overline overline-light">Nuestra historia</div>
        </div>
        <div className="txt-reveal" data-d="1" style={{ marginBottom: 24 }}>
          <div className="hero-title-display" style={{ color: "var(--crema)" }}>La historia</div>
          <div className="hero-title-italic" style={{ color: "var(--terracota)", marginTop: 6 }}>que hace el lugar.</div>
        </div>
        <p className="txt-reveal" data-d="2" style={{ fontFamily: "'Jost',sans-serif", fontSize: "0.9rem", fontWeight: 300, lineHeight: 1.9, color: "rgba(255,253,248,0.6)", maxWidth: 440, marginBottom: 36 }}>
          Finca La Hermosa nació de una familia con raíces en Isidro Fabela y el deseo de compartir lo que durante décadas fue solo suyo. Hoy, cada evento que vivimos aquí es una extensión de ese mismo espíritu.
        </p>
        <div className="txt-reveal" data-d="3" style={{ display: "flex", gap: 14, alignItems: "center" }}>
          <a href="/experiencias" className="btn-accent" style={{ textDecoration: "none" }}>Ver experiencias</a>
          <a href="#story" className="btn-outline" style={{ fontFamily: "'Jost',sans-serif", fontSize: "0.72rem", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,253,248,0.65)", background: "transparent", border: "1px solid rgba(255,255,255,0.22)", padding: "13px 28px", borderRadius: 999, textDecoration: "none", transition: "all 0.22s ease" }}>Conocer más ↓</a>
        </div>
        <div className="txt-reveal" data-d="4" style={{ display: "flex", gap: 36, marginTop: 56, paddingTop: 36, borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <HeroMiniStat value="200" suffix="+" label="familias celebradas" />
          <HeroMiniStat value="10" suffix="+" label="años de historia" />
          <HeroMiniStat value="14" suffix="+" label="espacios únicos" />
        </div>
      </div>

      <div className="hero-right">
        <div className="img-reveal" style={{ position: "absolute", inset: 0, height: "100%" }}>
          <div className="reveal-cover" style={{ background: "var(--verde-dark)" }} />
          <img src="/assets/hero-wedding.jpg" alt="Finca La Hermosa" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%" }} />
        </div>
      </div>
    </section>
  );
}

function HeroMiniStat({ value, suffix, label }: { value: string; suffix: string; label: string }) {
  return (
    <div>
      <div style={{ fontFamily: "'Against',serif", fontSize: "2.2rem", color: "var(--crema)", lineHeight: 1 }}>{value}<span style={{ fontFamily: "'Cormorant Garamond',serif", fontStyle: "italic", fontSize: "1.3rem", color: "var(--terracota)" }}>{suffix}</span></div>
      <div style={{ fontFamily: "'Jost',sans-serif", fontSize: "0.65rem", fontWeight: 300, letterSpacing: "0.08em", color: "rgba(255,253,248,0.4)", marginTop: 4 }}>{label}</div>
    </div>
  );
}

function StorySection() {
  return (
    <section id="story" className="story-section">
      <div className="story-inner">
        <div className="txt-reveal">
          <div className="story-photo">
            <div className="story-year-badge">
              <div style={{ fontFamily: "'Against',serif", fontSize: "2rem", lineHeight: 1, color: "#fff" }}>2013</div>
              <div style={{ fontFamily: "'Jost',sans-serif", fontSize: "0.6rem", fontWeight: 300, letterSpacing: "0.1em", color: "rgba(255,255,255,0.7)", marginTop: 2 }}>Fundación</div>
            </div>
            <div className="img-reveal" style={{ borderRadius: 4 }}>
              <div className="reveal-cover" />
              <img src="/assets/photo-jardines.jpg" alt="Jardines de Finca La Hermosa" className="story-photo-main" />
            </div>
            <div className="img-reveal" style={{ position: "absolute", bottom: -32, right: -32, width: "55%", borderRadius: 4, border: "6px solid var(--crema)", boxShadow: "0 20px 60px rgba(0,0,0,0.15)", aspectRatio: "1/1" }}>
              <div className="reveal-cover" />
              <img src="/assets/photo-alberca.jpg" alt="Alberca" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 2 }} />
            </div>
          </div>
        </div>

        <div className="story-text" style={{ paddingBottom: 60 }}>
          <div className="txt-reveal"><div className="overline overline-dark">Nuestro origen</div></div>
          <div className="txt-reveal" data-d="1">
            <div style={{ fontFamily: "'Against',serif", fontSize: "clamp(2.4rem,3.5vw,4rem)", lineHeight: 0.95, letterSpacing: "-0.02em", color: "var(--verde-dark)" }}>De finca familiar</div>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(1.8rem,2.8vw,3rem)", fontStyle: "italic", fontWeight: 300, color: "var(--terracota)", marginTop: 4 }}>a destino compartido.</div>
          </div>
          <p className="story-body txt-reveal" data-d="2">Todo comenzó con una propiedad en el corazón del bosque de Isidro Fabela — un espacio que la familia había cuidado por generaciones. Los fines de semana, reuniones familiares y celebraciones íntimas llenaban cada rincón con la calidez de lo genuino.</p>
          <div className="pull-quote txt-reveal" data-d="2">"Nos dimos cuenta de que este lugar tenía algo especial que merecía compartirse. No como un salón de eventos, sino como una experiencia que la gente pudiera hacer propia."</div>
          <p className="story-body txt-reveal" data-d="3">En 2013, abrimos las puertas formalmente. La filosofía siempre fue la misma: hospitalidad auténtica, naturaleza sin alterar, y el cuidado que solo una familia puede ofrecer. Hoy, más de 200 familias han celebrado aquí sus momentos más importantes — y cada uno de ellos lleva un pedazo de La Hermosa consigo.</p>
          <div className="txt-reveal" data-d="3" style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a href="/espacios" className="btn-outline-dark" style={{ textDecoration: "none" }}>Conocer los espacios</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ValuesSection() {
  return (
    <section className="values-section">
      <div style={{ position: "absolute", top: "-10%", right: "15%", width: 600, height: 400, background: "radial-gradient(ellipse,rgba(192,122,90,0.06) 0%,transparent 65%)", borderRadius: "50%", zIndex: 0, pointerEvents: "none" }} />
      <div className="arch-label" style={{ right: -20, top: 60, zIndex: 0, color: "rgba(255,253,248,0.025)", fontSize: "clamp(7rem,12vw,16rem)" }}>FILOSOFÍA</div>
      <div className="values-inner" style={{ position: "relative", zIndex: 1 }}>
        <div className="values-header">
          <div>
            <div className="txt-reveal"><div className="overline overline-light">Lo que nos define</div></div>
            <div className="txt-reveal" data-d="1" style={{ marginTop: 16 }}>
              <div style={{ fontFamily: "'Against',serif", fontSize: "clamp(2.8rem,4.5vw,5.5rem)", lineHeight: 0.92, letterSpacing: "-0.025em", color: "var(--crema)" }}>Tres principios,</div>
              <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(2.2rem,3.5vw,4.5rem)", fontStyle: "italic", fontWeight: 300, color: "var(--terracota)", marginTop: 4 }}>una sola promesa.</div>
            </div>
          </div>
          <p className="txt-reveal" data-d="2" style={{ fontFamily: "'Jost',sans-serif", fontSize: "0.88rem", fontWeight: 300, lineHeight: 1.9, color: "rgba(255,253,248,0.5)", alignSelf: "end", paddingBottom: 4 }}>Todo lo que hacemos en La Hermosa nace de tres convicciones simples. No son claims de marketing — son la forma en que llevamos más de una década operando este lugar.</p>
        </div>
        <div className="values-grid txt-reveal" data-d="1">
          {values.map((value, index) => (
            <div key={value.title} className="value-card">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div className="value-num">{String(index + 1).padStart(2, "0")}</div>
                <ValueIcon name={value.icon} />
              </div>
              <div className="value-title">{value.title}</div>
              <div className="value-body">{value.body}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineSection() {
  return (
    <section className="timeline-section">
      <div className="timeline-inner">
        <div className="timeline-header">
          <div className="txt-reveal"><div className="overline overline-dark" style={{ justifyContent: "center" }}>El camino recorrido</div></div>
          <div className="txt-reveal" data-d="1" style={{ marginTop: 16 }}>
            <div style={{ fontFamily: "'Against',serif", fontSize: "clamp(2.4rem,3.5vw,4rem)", lineHeight: 0.95, letterSpacing: "-0.02em", color: "var(--verde-dark)", textAlign: "center" }}>Cada año,</div>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(1.8rem,2.8vw,3rem)", fontStyle: "italic", fontWeight: 300, color: "var(--terracota)", textAlign: "center" }}>una nueva historia.</div>
          </div>
        </div>
        <div className="timeline">
          {timelineItems.map((item, index) => (
            <div key={`${item.year}-${item.title}`} className="tl-item txt-reveal">
              {index % 2 === 0 ? (
                <>
                  <TimelineContent item={item} />
                  <TimelineDot current={item.current} />
                  <div className="tl-empty" />
                </>
              ) : (
                <>
                  <div className="tl-empty" />
                  <TimelineDot current={item.current} />
                  <TimelineContent item={item} />
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineContent({ item }: { item: (typeof timelineItems)[number] }) {
  return (
    <div className="tl-content">
      <div className="tl-year" style={item.current ? { color: "var(--verde)" } : undefined}>{item.year}</div>
      <div className="tl-title">{item.title}</div>
      <div className="tl-desc">{item.desc}</div>
    </div>
  );
}

function TimelineDot({ current }: { current?: boolean }) {
  return <div className="tl-dot"><div className="tl-dot-inner" style={current ? { background: "var(--verde)", boxShadow: "0 0 0 1px var(--verde)" } : undefined} /></div>;
}

function TeamSection() {
  return (
    <section className="team-section" style={{ padding: "80px 0", background: "var(--verde-dark)", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "-20%", left: "20%", width: 700, height: 500, background: "radial-gradient(ellipse,rgba(192,122,90,0.07) 0%,transparent 65%)", borderRadius: "50%", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "-10%", right: "10%", width: 500, height: 400, background: "radial-gradient(ellipse,rgba(74,110,110,0.15) 0%,transparent 65%)", borderRadius: "50%", pointerEvents: "none" }} />
      <div className="team-inner" style={{ position: "relative", zIndex: 1 }}>
        <div className="txt-reveal" style={{ marginBottom: 48, display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div className="overline overline-light">Las personas detrás de la finca</div>
            <div style={{ fontFamily: "'Against',serif", fontSize: "clamp(2rem,3vw,3.2rem)", lineHeight: 0.95, letterSpacing: "-0.02em", color: "var(--crema)" }}>El equipo</div>
          </div>
          <p style={{ fontFamily: "'Jost',sans-serif", fontSize: "0.8rem", fontWeight: 300, color: "rgba(255,253,248,0.45)", maxWidth: 300, lineHeight: 1.8, alignSelf: "flex-end" }}>Cada persona conoce la finca de memoria. Eso se nota en cada evento.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: 16, alignItems: "start" }}>
          {teamMembers.map((member, index) => (
            <div key={member.role} className="team-glass-card txt-reveal" data-d={index || undefined} style={member.featured ? { aspectRatio: "auto" } : undefined}>
              <div className="team-glass-img" style={member.featured ? { aspectRatio: "4/5" } : undefined}>
                <img src={member.img} alt={member.alt} />
                <div className="team-glass-overlay" />
              </div>
              <div className="team-glass-info">
                <div className="team-glass-role">{member.role}</div>
                <div className="team-glass-name">{member.name}</div>
                <div className="team-glass-desc">{member.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PromiseSection() {
  return (
    <section className="promesa-section">
      <div className="promesa-inner">
        <div className="txt-reveal">
          <div className="promesa-visual">
            <div className="img-reveal promesa-img-wrap">
              <div className="reveal-cover" />
              <img src="/assets/photo-terraza.jpg" alt="Terraza Finca La Hermosa" />
            </div>
            <div className="promesa-badge">
              <CheckIcon color="white" />
              <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "0.85rem", fontStyle: "italic", fontWeight: 300, color: "#fff", lineHeight: 1.3, textAlign: "center" }}>Sin letra pequeña</div>
            </div>
          </div>
        </div>
        <div className="promesa-text">
          <div className="txt-reveal"><div className="overline overline-dark">Lo que puedes esperar</div></div>
          <div className="txt-reveal" data-d="1">
            <div style={{ fontFamily: "'Against',serif", fontSize: "clamp(2.2rem,3.2vw,3.8rem)", lineHeight: 0.95, letterSpacing: "-0.02em", color: "var(--verde-dark)" }}>Nuestra promesa</div>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(1.6rem,2.4vw,2.8rem)", fontStyle: "italic", fontWeight: 300, color: "var(--terracota)" }}>contigo, siempre.</div>
          </div>
          <div className="commitment-list txt-reveal" data-d="2">
            {commitments.map((item) => (
              <div key={item.title} className="commitment-item">
                <div className="commitment-icon"><CommitmentIcon name={item.icon} /></div>
                <div>
                  <div className="commitment-title">{item.title}</div>
                  <div className="commitment-desc">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section id="cta-section" className="cta-section">
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <img src="/assets/photo-cta-dark.jpg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.18 }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(160deg,var(--verde-dark) 0%,var(--verde) 30%,#1a2a1a 65%,#0e1e1e 100%)", opacity: 0.88 }} />
      </div>
      <div style={{ position: "absolute", bottom: "15%", left: "45%", width: 500, height: 280, background: "radial-gradient(ellipse,rgba(240,160,60,0.08) 0%,transparent 70%)", borderRadius: "50%", zIndex: 0, pointerEvents: "none" }} />
      <div style={{ position: "relative", zIndex: 1, maxWidth: 1500, margin: "0 auto", padding: "0 80px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div className="overline overline-light txt-reveal">Empieza a planear</div>
          <div className="txt-reveal" data-d="1">
            <div className="final-cta-title-main" style={{ fontFamily: "'Against',serif", fontSize: "clamp(3.2rem,5.5vw,6rem)", lineHeight: 0.92, letterSpacing: "-0.025em", color: "var(--crema)" }}>Celebra con</div>
            <div className="final-cta-title-sub" style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(2.6rem,4.5vw,5rem)", fontStyle: "italic", fontWeight: 300, lineHeight: 1, color: "var(--terracota)", marginTop: 6 }}>nosotros.</div>
          </div>
          <p className="txt-reveal" data-d="2" style={{ fontFamily: "'Jost',sans-serif", fontSize: "0.88rem", fontWeight: 300, lineHeight: 1.85, color: "rgba(255,253,248,0.62)", maxWidth: 360 }}>Lleva a tu familia o a tu equipo a vivir algo diferente. Cuéntanos sobre tu evento y te preparamos una propuesta en menos de 24 horas.</p>
          <div className="txt-reveal" data-d="3" style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 8 }}>
            {["Respuesta en 24 h", "PDF personalizado gratis", "Sin compromiso"].map((item) => (
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
            <a href="/cotizar" className="btn-accent" style={{ fontSize: "0.65rem", padding: "10px 20px", textDecoration: "none" }}>Cotizar ahora</a>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
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
              <a href="https://wa.me/5215500000000" target="_blank" rel="noopener" style={{ padding: "10px 20px", background: "#25D366", color: "#fff", border: "none", borderRadius: 999, fontFamily: "'Jost',sans-serif", fontSize: "0.65rem", fontWeight: 300, letterSpacing: "0.09em", textTransform: "uppercase", cursor: "pointer", textDecoration: "none", display: "inline-block", transition: "opacity 0.22s" }}>Escribir</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ValueIcon({ name }: { name: string }) {
  if (name === "home") return <svg className="value-icon" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>;
  if (name === "heart") return <svg className="value-icon" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>;
  return <svg className="value-icon" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>;
}

function CommitmentIcon({ name }: { name: string }) {
  if (name === "clock") return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>;
  if (name === "checkUser") return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><polyline points="17 11 19 13 23 9" /></svg>;
  if (name === "money") return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>;
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>;
}

function CheckIcon({ color = "currentColor" }: { color?: string }) {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>;
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
