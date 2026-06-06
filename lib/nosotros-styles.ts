export const nosotrosStyles = String.raw`
/* ── TOKENS ─────────────────────────────────────────────── */
@font-face {
  font-family: 'Against';
  src: url('/fonts/against-regular.otf') format('opentype');
  font-weight: 400;
}

:root {
  --crema:        #fffdf8;
  --crema-warm:   #f5f0e8;
  --crema-border: #ede6d6;
  --verde:        #2d4949;
  --verde-dark:   #1e3232;
  --verde-mid:    #4a6e6e;
  --terracota:    #9d563d;
  --terra-light:  #e8c4ad;
  --body-clr:     #5a5040;
  --muted:        #6f634f;
  --carbon:       #1a1a1a;
  --ease-snap:    cubic-bezier(0.76,0,0.24,1);
  --ease-out:     cubic-bezier(0.22,1,0.36,1);
}

*, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }
html { font-size: 16px; }

body {
  font-family: 'Jost', sans-serif;
  background: var(--crema);
  color: var(--body-clr);
  overflow-x: hidden;
}

/* ── NAV PILL ────────────────────────────────────────────── */
#site-nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 200;
  display: flex;
  justify-content: center;
  padding: 14px 24px;
  pointer-events: none;
}
.nav-pill {
  width: 100%;
  max-width: 1500px;
  height: 58px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 28px 0 18px;
  border-radius: 999px;
  background: rgba(18,28,24,0.12);
  border: 1px solid rgba(255,255,255,0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.07);
  transition: background 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease;
  pointer-events: all;
}
.nav-pill.scrolled {
  background: rgba(28,46,44,0.88);
  border-color: rgba(255,255,255,0.13);
  box-shadow: 0 8px 40px rgba(0,0,0,0.32), inset 0 1px 0 rgba(255,255,255,0.09);
}
.nav-logo img { height: 32px; }
.nav-links { display: flex; gap: 28px; align-items: center; }
.nav-links a {
  font-family: 'Jost', sans-serif;
  font-size: 0.69rem; font-weight: 300;
  letter-spacing: 0.12em; text-transform: uppercase;
  color: rgba(255,253,248,0.72);
  text-decoration: none;
  border-bottom: 1px solid transparent;
  padding-bottom: 2px;
  transition: color 0.22s, border-color 0.22s;
}
.nav-links a:hover,
.nav-links a.active { color: var(--crema); border-color: rgba(255,253,248,0.4); }
.nav-right { display: flex; align-items: center; gap: 14px; }
.nav-cta {
  font-family: 'Jost', sans-serif;
  font-size: 0.67rem; font-weight: 300;
  letter-spacing: 0.13em; text-transform: uppercase;
  color: var(--crema);
  background: rgba(255,253,248,0.09);
  border: 1px solid rgba(255,255,255,0.2);
  padding: 8px 20px; border-radius: 999px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.22s ease;
}
.nav-cta:hover { background: rgba(192,122,90,0.9); border-color: rgba(192,122,90,0.6); }

/* ── WA FLOAT ────────────────────────────────────────────── */
.wa-float {
  position: fixed;
  bottom: 32px; right: 32px;
  z-index: 150;
  width: 50px; height: 50px;
  border-radius: 50%;
  background: #128c4a;
  display: flex; align-items: center; justify-content: center;
  box-shadow: 0 4px 16px rgba(0,0,0,0.2);
  transition: transform 0.26s, box-shadow 0.26s;
  text-decoration: none;
}
.wa-float:hover { transform: translateY(-3px); box-shadow: 0 8px 24px rgba(0,0,0,0.28); }

/* ── BUTTONS ─────────────────────────────────────────────── */
.btn-primary {
  font-family: 'Jost', sans-serif; font-size: 0.75rem; font-weight: 500;
  letter-spacing: 0.1em; text-transform: uppercase;
  color: var(--crema); background: var(--verde); border: none;
  padding: 13px 28px; border-radius: 999px; cursor: pointer;
  text-decoration: none; display: inline-block;
  transition: all 0.22s ease;
}
.btn-primary:hover { background: var(--verde-mid); transform: scale(1.04); }

.btn-accent {
  font-family: 'Jost', sans-serif; font-size: 0.75rem; font-weight: 500;
  letter-spacing: 0.1em; text-transform: uppercase;
  color: var(--crema); background: var(--terracota); border: none;
  padding: 13px 28px; border-radius: 999px; cursor: pointer;
  text-decoration: none; display: inline-block;
  transition: all 0.22s ease;
}
.btn-accent:hover { background: #a8664a; transform: scale(1.04); }

.btn-outline-dark {
  font-family: 'Jost', sans-serif; font-size: 0.75rem; font-weight: 500;
  letter-spacing: 0.1em; text-transform: uppercase; color: var(--terracota);
  background: transparent; border: 1px solid var(--terra-light);
  padding: 13px 28px; border-radius: 999px; cursor: pointer;
  text-decoration: none; display: inline-block;
  transition: all 0.22s ease;
}
.btn-outline-dark:hover { background: var(--terracota); color: var(--crema); transform: scale(1.04); }

/* ── OVERLINE ─────────────────────────────────────────────── */
.overline {
  font-family: 'Jost', sans-serif;
  font-size: 0.67rem; font-weight: 500;
  letter-spacing: 0.16em; text-transform: uppercase;
  display: flex; align-items: center; gap: 10px;
}
.overline::before { content: ''; display: block; width: 20px; height: 1px; flex-shrink: 0; }
.overline-light { color: rgba(232,196,173,0.8); }
.overline-light::before { background: rgba(232,196,173,0.5); }
.overline-dark { color: var(--terracota); }
.overline-dark::before { background: var(--terra-light); }

/* ── ARCH LABEL ─────────────────────────────────────────── */
.arch-label {
  font-family: 'Against', serif;
  font-size: clamp(5rem,8vw,9rem);
  font-weight: 400; line-height: 0.9; letter-spacing: -0.03em;
  pointer-events: none; user-select: none;
  position: absolute;
}

/* ── TXT REVEAL ─────────────────────────────────────────── */
.txt-reveal {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.85s var(--ease-out), transform 0.85s var(--ease-out);
}
.txt-reveal[data-d="1"] { transition-delay: 0.1s; }
.txt-reveal[data-d="2"] { transition-delay: 0.22s; }
.txt-reveal[data-d="3"] { transition-delay: 0.34s; }
.txt-reveal[data-d="4"] { transition-delay: 0.46s; }
.txt-reveal.in { opacity: 1; transform: none; }

/* ── IMG REVEAL ─────────────────────────────────────────── */
.img-reveal { position: relative; overflow: hidden; }
.reveal-cover {
  position: absolute; inset: 0; z-index: 2;
  background: var(--crema-warm);
  transform-origin: top;
  transition: transform 0.95s cubic-bezier(0.76,0,0.24,1);
}
.img-reveal.in .reveal-cover { transform: scaleY(0); }

/* ── CTA CARD ────────────────────────────────────────────── */
.cta-card {
  padding: 30px 26px;
  background: rgba(255,255,255,0.07);
  backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.11);
  border-radius: 12px;
  display: flex; flex-direction: column; gap: 13px; align-items: flex-start;
  transition: background 0.26s, border-color 0.26s;
}
.cta-card:hover { background: rgba(255,255,255,0.11); border-color: rgba(255,255,255,0.18); }
.cta-card-icon { width: 26px; height: 26px; color: rgba(255,253,248,0.75); }
.cta-card-title { font-family: 'Cormorant Garamond', serif; font-size: 1.15rem; font-weight: 400; color: #fff; }
.cta-card-sub { font-family: 'Jost', sans-serif; font-size: 0.75rem; font-weight: 400; color: rgba(255,253,248,0.52); line-height: 1.65; flex: 1; }



/* ══ NOSOTROS ESTILOS PROPIOS ════════════════════════════ */

/* ── Hero ─────────────────────────────────────────────── */
.hero-nosotros {
  min-height: 65vh;
  background: var(--verde-dark);
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: stretch;
}
.hero-left {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 120px 64px 80px;
  position: relative;
  z-index: 2;
}
.hero-right {
  width: 45%;
  position: relative;
  flex-shrink: 0;
}
.hero-right img {
  width: 100%; height: 100%;
  object-fit: cover;
  object-position: center 30%;
}
.hero-right::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(270deg, transparent 60%, var(--verde-dark) 100%);
}

/* ── Story section ───────────────────────────────────── */
.story-section {
  background: var(--crema);
  padding: 100px 0;
  overflow: hidden;
}
.story-inner {
  max-width: 1500px;
  margin: 0 auto;
  padding: 0 80px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}
.story-photo {
  position: relative;
}
.story-photo-main {
  width: 100%;
  aspect-ratio: 4/5;
  object-fit: cover;
  border-radius: 4px;
  display: block;
}
.story-photo-accent {
  position: absolute;
  bottom: -32px;
  right: -32px;
  width: 55%;
  aspect-ratio: 1/1;
  object-fit: cover;
  border-radius: 4px;
  border: 6px solid var(--crema);
  box-shadow: 0 20px 60px rgba(0,0,0,0.15);
}
.story-year-badge {
  position: absolute;
  top: 24px;
  left: -20px;
  background: var(--terracota);
  color: #fff;
  padding: 14px 20px;
  border-radius: 4px;
  text-align: center;
}
.story-text { display: flex; flex-direction: column; gap: 28px; padding-left: 20px; }
.story-body {
  font-family: 'Jost', sans-serif;
  font-size: 0.9rem;
  font-weight: 300;
  line-height: 1.9;
  color: var(--body-clr);
}
.pull-quote {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(1.4rem, 2.2vw, 1.85rem);
  font-style: italic;
  font-weight: 300;
  color: var(--verde);
  line-height: 1.45;
  padding: 20px 24px;
  background: var(--crema-warm);
  border-radius: 2px;
}

/* ── Timeline ────────────────────────────────────────── */
.timeline-section {
  background: var(--crema-warm);
  padding: 100px 0;
  overflow: hidden;
  position: relative;
}
.timeline-inner {
  max-width: 1500px;
  margin: 0 auto;
  padding: 0 80px;
}
.timeline-header { text-align: center; margin-bottom: 72px; }
.timeline {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0;
  max-width: 800px;
  margin: 0 auto;
}
.timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0; bottom: 0;
  width: 1px;
  background: var(--crema-border);
  transform: translateX(-50%);
}
.tl-item {
  display: grid;
  grid-template-columns: 1fr 60px 1fr;
  align-items: start;
  gap: 0;
  padding: 32px 0;
}
.tl-item:nth-child(odd) .tl-content { grid-column: 1; text-align: right; padding-right: 40px; }
.tl-item:nth-child(odd) .tl-dot   { grid-column: 2; }
.tl-item:nth-child(odd) .tl-empty { grid-column: 3; }
.tl-item:nth-child(even) .tl-empty   { grid-column: 1; }
.tl-item:nth-child(even) .tl-dot     { grid-column: 2; }
.tl-item:nth-child(even) .tl-content { grid-column: 3; text-align: left; padding-left: 40px; }
.tl-dot {
  display: flex;
  justify-content: center;
  padding-top: 6px;
}
.tl-dot-inner {
  width: 12px; height: 12px;
  border-radius: 50%;
  background: var(--terracota);
  border: 3px solid var(--crema-warm);
  box-shadow: 0 0 0 1px var(--terracota);
  flex-shrink: 0;
}
.tl-year {
  font-family: 'Against', serif;
  font-size: 1.6rem;
  letter-spacing: -0.02em;
  color: var(--terracota);
  line-height: 1;
  margin-bottom: 8px;
}
.tl-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.1rem;
  font-weight: 400;
  color: var(--verde-dark);
  margin-bottom: 6px;
}
.tl-desc {
  font-family: 'Jost', sans-serif;
  font-size: 0.78rem;
  font-weight: 300;
  line-height: 1.7;
  color: var(--muted);
}
.tl-empty { min-height: 10px; }

/* ── Values section ──────────────────────────────────── */
.values-section {
  background: var(--verde-dark);
  padding: 100px 0;
  position: relative;
  overflow: hidden;
}
.values-inner {
  max-width: 1500px;
  margin: 0 auto;
  padding: 0 80px;
}
.values-header {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: end;
  margin-bottom: 72px;
}
.values-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2px;
}
.value-card {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.06);
  padding: 44px 36px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  transition: background 0.3s;
  cursor: default;
}
.value-card:hover { background: rgba(255,255,255,0.07); }
.value-num {
  font-family: 'Against', serif;
  font-size: 3.5rem;
  line-height: 1;
  color: rgba(192,122,90,0.18);
  letter-spacing: -0.03em;
}
.value-icon { color: var(--terracota); }
.value-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.5rem;
  font-weight: 400;
  color: var(--crema);
  line-height: 1.2;
}
.value-body {
  font-family: 'Jost', sans-serif;
  font-size: 0.8rem;
  font-weight: 300;
  line-height: 1.8;
  color: rgba(255,253,248,0.5);
}

/* ── Stats band ──────────────────────────────────────── */
.stats-band {
  background: var(--verde);
  padding: 64px 80px;
}
.stats-inner {
  max-width: 1500px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 8px;
  overflow: hidden;
}
.stat-item {
  padding: 44px 36px;
  border-right: 1px solid rgba(255,255,255,0.1);
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;
}
.stat-item:last-child { border-right: none; }
.stat-num {
  font-family: 'Against', serif;
  font-size: clamp(2.8rem, 4vw, 4rem);
  line-height: 0.95;
  letter-spacing: -0.03em;
  color: var(--crema);
}
.stat-unit {
  display: inline;
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.5rem;
  font-style: italic;
  color: var(--terracota);
}
.stat-label {
  font-family: 'Jost', sans-serif;
  font-size: 0.72rem;
  font-weight: 300;
  letter-spacing: 0.06em;
  color: rgba(255,253,248,0.45);
  margin-top: 4px;
}
.stat-divider {
  position: absolute;
  top: 32px; bottom: 32px;
  right: 0;
  width: 1px;
  background: rgba(255,255,255,0.08);
}

/* ── Equipo section ──────────────────────────────────── */
.team-section { overflow: hidden; }
.team-inner {
  max-width: 1500px;
  margin: 0 auto;
  padding: 0 80px;
}

/* ── Team glass cards ────────────────────────────────── */
.team-glass-card {
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  cursor: default;
}
.team-glass-img {
  position: relative;
  aspect-ratio: 3/4;
  overflow: hidden;
}
.team-glass-img img {
  width: 100%; height: 100%;
  object-fit: cover;
  object-position: center 20%;
  transition: transform 0.7s var(--ease-out);
  display: block;
}
.team-glass-card:hover .team-glass-img img { transform: scale(1.06); }
.team-glass-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(14,26,24,0.75) 0%, rgba(14,26,24,0.15) 55%, transparent 100%);
}
.team-glass-info {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  padding: 20px 20px 22px;
  background: rgba(255,255,255,0.08);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-top: 1px solid rgba(255,255,255,0.12);
  display: flex;
  flex-direction: column;
  gap: 4px;
  transition: background 0.3s;
}
.team-glass-card:hover .team-glass-info {
  background: rgba(255,255,255,0.13);
}
.team-glass-role {
  font-family: 'Jost', sans-serif;
  font-size: 0.58rem;
  font-weight: 500;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--terra-light);
}
.team-glass-name {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.1rem;
  font-weight: 400;
  color: var(--crema);
  line-height: 1.2;
}
.team-glass-desc {
  font-family: 'Jost', sans-serif;
  font-size: 0.72rem;
  font-weight: 300;
  line-height: 1.6;
  color: rgba(255,253,248,0.58);
  margin-top: 2px;
}
.team-name {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.15rem;
  font-weight: 400;
  color: var(--verde-dark);
  line-height: 1.2;
}
.team-desc {
  font-family: 'Jost', sans-serif;
  font-size: 0.76rem;
  font-weight: 300;
  line-height: 1.75;
  color: var(--muted);
}

/* ── Promesa section ─────────────────────────────────── */
.promesa-section {
  background: var(--crema);
  padding: 100px 0;
  overflow: hidden;
  position: relative;
}
.promesa-inner {
  max-width: 1500px;
  margin: 0 auto;
  padding: 0 80px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}
.promesa-visual {
  position: relative;
}
.promesa-img-wrap {
  aspect-ratio: 5/4;
  overflow: hidden;
  border-radius: 4px;
}
.promesa-img-wrap img {
  width: 100%; height: 100%;
  object-fit: cover;
}
.promesa-badge {
  position: absolute;
  bottom: -24px;
  right: -24px;
  width: 130px; height: 130px;
  border-radius: 50%;
  background: var(--terracota);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  gap: 2px;
  padding: 16px;
}
.promesa-text { display: flex; flex-direction: column; gap: 28px; }
.commitment-list { display: flex; flex-direction: column; gap: 20px; }
.commitment-item {
  display: flex;
  gap: 18px;
  align-items: flex-start;
}
.commitment-icon {
  width: 40px; height: 40px;
  border-radius: 8px;
  background: var(--crema-warm);
  border: 1px solid var(--crema-border);
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
  color: var(--terracota);
}
.commitment-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.05rem;
  font-weight: 400;
  color: var(--verde-dark);
  margin-bottom: 4px;
}
.commitment-desc {
  font-family: 'Jost', sans-serif;
  font-size: 0.78rem;
  font-weight: 300;
  line-height: 1.7;
  color: var(--muted);
}

/* ── CTA dark ────────────────────────────────────────── */
.cta-section {
  background: #0d1918;
  padding: 100px 0;
  position: relative;
  overflow: hidden;
}


.site-footer{background:var(--verde-dark);padding:88px 80px 40px;position:relative;z-index:5;}
.footer-grid{display:grid;grid-template-columns:1.5fr 1fr 1.2fr;gap:72px;margin:0 auto 56px;max-width:1500px;align-items:start;}
.footer-brand{display:flex;flex-direction:column;}
.footer-brand img{height:38px;margin-bottom:22px;opacity:0.92;}
.footer-brand p{font-family:'Jost',sans-serif;font-size:0.82rem;font-weight:300;color:rgba(255,253,248,0.5);line-height:1.78;max-width:300px;}
.footer-head{font-family:'Jost',sans-serif;font-size:0.6rem;font-weight:500;letter-spacing:0.18em;text-transform:uppercase;color:rgba(255,253,248,0.4);margin-bottom:24px;display:block;}
.footer-social-group{display:flex;flex-direction:column;}
.social-row{display:flex;gap:14px;}
.social-circle{width:50px;height:50px;border-radius:50%;border:1px solid rgba(255,253,248,0.18);display:flex;align-items:center;justify-content:center;color:rgba(255,253,248,0.7);transition:background 0.32s var(--ease-out),border-color 0.32s var(--ease-out),color 0.32s var(--ease-out),transform 0.32s var(--ease-out);text-decoration:none;}
.social-circle svg{width:19px;height:19px;transition:transform 0.32s var(--ease-out);}
.social-circle:hover{background:var(--terracota);border-color:var(--terracota);color:var(--crema);transform:translateY(-3px);}
.social-circle:hover svg{transform:scale(1.08);}
.footer-contact-group{display:flex;flex-direction:column;}
.footer-contact-line{font-family:'Jost',sans-serif;font-size:0.84rem;font-weight:300;color:rgba(255,253,248,0.62);line-height:1.85;display:block;}
.footer-contact-line a{color:inherit;text-decoration:none;transition:color 0.22s;border-bottom:1px solid transparent;padding-bottom:1px;}
.footer-contact-line a:hover{color:var(--terra-light);border-bottom-color:rgba(232,196,173,0.4);}
.footer-bottom{border-top:1px solid rgba(255,253,248,0.08);padding-top:24px;display:flex;justify-content:space-between;align-items:center;max-width:1500px;margin:0 auto;}
.footer-copy{font-family:'Jost',sans-serif;font-size:0.68rem;font-weight:300;letter-spacing:0.04em;color:rgba(255,253,248,0.3);}
.footer-copy a{color:inherit;text-decoration:none;transition:color 0.2s;}
.footer-copy a:hover{color:rgba(255,253,248,0.65);}
@media(max-width:900px){.site-footer{padding:64px 32px 32px;}.footer-grid{grid-template-columns:1fr;gap:48px;}.footer-bottom{flex-direction:column;gap:10px;align-items:flex-start;}}


/* Mobile adaptation layer for static prototypes */

.nav-toggle {
  display: none;
  width: 42px;
  height: 42px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 999px;
  background: rgba(255, 253, 248, 0.08);
  color: var(--crema);
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.22s, border-color 0.22s;
}

.nav-toggle span,
.nav-toggle span::before,
.nav-toggle span::after {
  content: "";
  display: block;
  width: 16px;
  height: 1px;
  background: currentColor;
  border-radius: 1px;
  transition: transform 0.24s var(--ease-out), opacity 0.2s, background 0.2s;
}

.nav-toggle span {
  position: relative;
}

.nav-toggle span::before,
.nav-toggle span::after {
  position: absolute;
  left: 0;
}

.nav-toggle span::before { top: -6px; }
.nav-toggle span::after { top: 6px; }

.nav-pill.nav-open .nav-toggle span { background: transparent; }
.nav-pill.nav-open .nav-toggle span::before { transform: translateY(6px) rotate(45deg); }
.nav-pill.nav-open .nav-toggle span::after { transform: translateY(-6px) rotate(-45deg); }

@media (max-width: 760px) {
  html { font-size: 16px; }

  /* Padding lateral mobile: sobreescribe inline styles del HTML */
  [style*="padding:0 52px"],
  [style*="padding:0 80px"] {
    padding-left: 20px !important;
    padding-right: 20px !important;
  }

  /* Títulos con space-between: apila verticalmente en mobile */
  .snap-section[data-sec="espacios"] [style*="justify-content:space-between"],
  .snap-section[data-sec="proceso"] [style*="justify-content:space-between"],
  .snap-section[data-sec="experiencias"] [style*="justify-content:space-between"],
  .snap-section[data-sec="paquetes"] [style*="justify-content:space-between"] {
    flex-direction: column !important;
    align-items: flex-start !important;
    gap: 12px !important;
  }

  /* Testimonios: menos espacio entre cita y autor */
  .postit {
    gap: 10px !important;
    padding: 20px 16px 16px !important;
  }

  /* Testimonios: reduce espaciado exterior */
  .snap-section[data-sec="testimonios"] [style*="margin-bottom:32px"] {
    margin-bottom: 0 !important;
  }
  .snap-section[data-sec="testimonios"] {
    padding-top: 40px !important;
    padding-bottom: 40px !important;
  }

  /* Testimonios: copy más pequeño en mobile */
  .postit-q {
    font-size: 0.95rem !important;
  }
  .postit-author strong {
    font-size: 0.68rem !important;
  }
  .postit-author span {
    font-size: 0.58rem !important;
  }

  /* Testimonios: 2 filas con scroll horizontal, borde a borde */
  .snap-section[data-sec="testimonios"] [style*="grid-template-columns:repeat(4"] {
    grid-template-rows: 1fr 1fr !important;
    grid-template-columns: unset !important;
    grid-auto-flow: column !important;
    grid-auto-columns: 52vw !important;
    overflow-x: auto !important;
    scroll-snap-type: x mandatory !important;
    scrollbar-width: none !important;
    gap: 12px !important;
    padding: 40px 20px !important;
    margin-left: -20px !important;
    margin-right: -20px !important;
    width: calc(100% + 40px) !important;
  }

  /* Proceso: copy derecho → izquierda en mobile */
  .snap-section[data-sec="proceso"] { padding-bottom: 32px !important; }

  .snap-section[data-sec="proceso"] [style*="text-align:right"] {
    text-align: left !important;
    max-width: 100% !important;
  }

  /* Cotizador: colapsa grid a una columna */
  .snap-section[data-sec="cotizador"] [style*="grid-template-columns:1fr 1fr"][style*="gap:80px"] {
    grid-template-columns: 1fr !important;
    gap: 32px !important;
  }

  /* Cotizador: título no se desborda */
  .snap-section[data-sec="cotizador"] [style*="font-family:'Against'"] {
    font-size: clamp(2.5rem, 9vw, 3.2rem) !important;
  }

  /* CTA: colapsa outer grid, preserva tarjetas internas y oculta copys secundarios */
  .snap-section[data-sec="cta"] .cta-outer {
    grid-template-columns: 1fr !important;
    gap: 24px !important;
  }
  .snap-section[data-sec="cta"] .cta-small-grid {
    grid-template-columns: 1fr 1fr !important;
    gap: 14px !important;
  }
  .snap-section[data-sec="cta"] .cta-card-sub {
    display: none !important;
  }

  /* CTA: "Tu momento perfecto" más chico */
  .snap-section[data-sec="cta"] #illum-text {
    font-size: clamp(2.5rem, 9vw, 3.2rem) !important;
  }


  /* Cotizador: botones quiz en 2 columnas con gap reducido */
  #q-grid {
    grid-template-columns: 1fr 1fr !important;
    gap: 8px !important;
  }

  /* Cotizador: acerca solo "en 3 minutos" al título */
  .snap-section[data-sec="cotizador"] [style*="flex-direction:column"][style*="gap:20px"] > [style*="Cormorant Garamond"] {
    margin-top: -12px !important;
  }


  /* Carrusel espacios: sin padding para llegar a los bordes */
  #s3-carousel {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }

  /* Cards más angostas en mobile para mostrar peek de la siguiente */
  #s3-carousel > div {
    flex: 0 0 85vw !important;
    width: 85vw !important;
  }

  body {
    overflow-x: hidden;
  }

  html,
  body {
    max-width: 100%;
    overflow-x: clip;
  }

  #site-nav {
    padding: 10px 12px !important;
  }

  .nav-pill {
    height: 54px !important;
    padding: 0 10px 0 0 !important;
    align-items: center;
  }

  .nav-logo {
    display: flex;
    align-items: center;
    min-width: 0;
    transform: translateX(-10px);
  }

  .nav-logo img {
    height: 28px !important;
    max-width: 184px;
  }

  .nav-toggle {
    display: flex;
    flex-shrink: 0;
  }

  .nav-links,
  .nav-right {
    display: none !important;
  }

  .nav-pill.nav-open {
    height: auto !important;
    min-height: 54px;
    align-items: center;
    flex-wrap: wrap;
    border-radius: 24px;
    padding: 10px 12px 14px 16px !important;
    background: rgba(28, 46, 44, 0.96) !important;
    box-shadow: 0 18px 60px rgba(0, 0, 0, 0.34), inset 0 1px 0 rgba(255, 255, 255, 0.08);
  }

  .nav-pill.nav-open .nav-links {
    order: 3;
    width: 100%;
    display: flex !important;
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    margin-top: 12px;
    padding-top: 10px;
    border-top: 1px solid rgba(255, 255, 255, 0.12);
  }

  .nav-pill.nav-open .nav-links a {
    min-height: 44px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    padding: 0;
    font-size: 0.74rem;
    color: rgba(255, 253, 248, 0.84);
  }

  .nav-pill.nav-open .nav-links a:last-child {
    border-bottom: 0;
  }

  .nav-pill.nav-open .nav-right {
    order: 4;
    width: 100%;
    display: flex !important;
    margin-top: 10px;
  }

  .nav-pill.nav-open .nav-cta {
    width: 100%;
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .wa-float {
    width: 46px !important;
    height: 46px !important;
    right: 18px !important;
    bottom: 18px !important;
  }

  .btn-primary,
  .btn-accent,
  .btn-outline,
  .btn-outline-dark,
  .btn-ghost,
  .btn-glass,
  .btn-next,
  .btn-prev,
  .btn-submit,
  .nav-cta {
    min-height: 44px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    white-space: normal;
  }

  .site-footer {
    padding: 56px 22px 30px !important;
    text-align: left !important;
  }

  .footer-grid {
    grid-template-columns: 1fr !important;
    gap: 36px !important;
    margin-bottom: 38px !important;
    justify-items: start !important;
  }

  .footer-brand {
    align-items: flex-start !important;
  }

  .footer-brand img {
    height: 56px !important;
    width: auto !important;
  }

  .footer-brand p {
    max-width: none !important;
  }

  .footer-social-group,
  .footer-contact-group {
    text-align: left !important;
  }

  .footer-bottom {
    flex-direction: column !important;
    align-items: flex-start !important;
    gap: 12px !important;
  }

  .arch-label,
  .arch-bg,
  .hero-folio-ghost {
    display: none !important;
  }

  div[style*="grid-template-columns"],
  section[style*="grid-template-columns"] {
    grid-template-columns: 1fr !important;
    gap: 32px !important;
  }

}

@media (max-width: 760px) {
  body:has(#scroll-wrap) {
    height: auto !important;
    overflow: auto !important;
    background: var(--crema);
  }

  #scroll-wrap {
    height: auto !important;
    overflow: visible !important;
    overscroll-behavior-y: auto !important;
    max-width: 100vw;
  }

  .snap-section {
    height: auto !important;
    min-height: auto !important;
    overflow: visible !important;
    display: block !important;
    padding-top: 88px !important;
    padding-bottom: 72px !important;
    max-width: 100vw;
  }

  .snap-section[data-sec="hero"] {
    min-height: 100svh !important;
    display: flex !important;
    padding-left: 0 !important;
    padding-right: 0 !important;
  }

  .snap-section[data-sec="hero"] .img-reveal {
    inset: 0 !important;
  }

  .snap-section[data-sec="hero"] > div[style*="max-width:1500px"] {
    padding: 100px 22px 0 !important;
  }

  .snap-section[data-sec="hero"] [style*="max-width:820px"] {
    max-width: 100% !important;
  }

  .snap-section[data-sec="hero"] [style*="font-family:'Against'"] {
    font-size: clamp(34px, 10.8vw, 44px) !important;
    letter-spacing: 0 !important;
    overflow-wrap: normal;
  }

  .snap-section[data-sec="hero"] [style*="font-family:'Cormorant Garamond'"] {
    font-size: clamp(38px, 12vw, 54px) !important;
  }

  .snap-section[data-sec="hero"] [style*="grid-template-columns:1fr 1fr"] {
    grid-template-columns: 1fr !important;
    gap: 24px !important;
  }

  .snap-section[data-sec="hero"] [style*="justify-content:flex-end"] {
    justify-content: flex-start !important;
    flex-wrap: wrap;
  }

  #s3-carousel {
    contain: layout paint;
    max-width: 100%;
  }

  [style*="width:400px"] {
    width: calc(100vw - 36px) !important;
  }

  .scroll-indicator {
    display: none !important;
  }

  .tab2-panel.active,
  .proc-cols,
  .proc-dots-row,
  .tipo-grid,
  .form-row,
  .cotizar-main,
  .hero-folio-grid,
  .stats-terra-grid,
  .inventory-grid,
  .team-grid,
  .promise-grid,
  .timeline-item,
  .qa-grid,
  .exp-grid {
    grid-template-columns: 1fr !important;
  }

  .proc-track,
  .proc-track-wrap,
  .proc-dots-row {
    display: none !important;
  }

  .snap-section[data-sec="paquetes"] .pkg-featured-grid {
    display: flex !important;
    grid-template-columns: none !important;
    gap: 14px !important;
    overflow-x: auto !important;
    overflow-y: hidden !important;
    scroll-snap-type: x mandatory;
    margin-left: -22px;
    margin-right: -22px;
    padding: 4px 22px 16px !important;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
  }

  .snap-section[data-sec="paquetes"] .pkg-featured-grid::-webkit-scrollbar {
    display: none;
  }

  .snap-section[data-sec="paquetes"] .pkg-featured-grid .pkg-card {
    flex: 0 0 min(82vw, 340px);
    scroll-snap-align: start;
  }

  .proc-col {
    padding: 0 0 24px !important;
    border-right: 0 !important;
    border-bottom: 1px solid var(--crema-border);
  }

  .summary-wrap {
    position: static !important;
  }

  .progress-labels {
    display: none !important;
  }
}

@media (max-width: 760px) {
  .hero-folio {
    min-height: auto !important;
    padding-top: 74px !important;
  }

  .hero-folio-container {
    padding: 26px 22px 50px !important;
    gap: 28px !important;
  }

  .hero-folio-bar {
    overflow-x: auto;
    white-space: nowrap;
    padding-bottom: 12px;
    gap: 24px;
    scrollbar-width: none;
    -webkit-overflow-scrolling: touch;
  }

  .hero-folio-bar::-webkit-scrollbar {
    display: none;
  }

  .hero-folio-bar span {
    margin-right: 0 !important;
    flex: 0 0 auto;
  }

  .hero-folio-text {
    padding-top: 4px !important;
  }

  .hero-folio-display {
    font-size: clamp(3.8rem, 6.5vw, 7rem) !important;
    line-height: 0.92 !important;
    letter-spacing: -0.025em !important;
  }

  .hero-folio-italic {
    font-size: clamp(3.2rem, 5.5vw, 5.8rem) !important;
    line-height: 1 !important;
  }

  .hero-folio-body {
    max-width: 31rem !important;
    font-size: 0.96rem !important;
    line-height: 1.72 !important;
    margin-top: 24px !important;
  }

  .hero-folio-actions {
    flex-direction: column;
    align-items: stretch;
    gap: 10px !important;
    margin-top: 30px !important;
  }

  .hero-folio-actions .btn-accent,
  .hero-folio-actions .btn-outline-dark {
    width: 100%;
  }

  .hero-folio-photo-col {
    padding-top: 2px !important;
  }

  .hero-photo-frame {
    transform: none !important;
    border-radius: 8px !important;
  }

  .hero-photo-meta {
    padding: 11px 14px !important;
    gap: 8px !important;
    letter-spacing: 0.14em !important;
    white-space: nowrap;
    overflow: hidden;
  }

  .hero-photo-inner img {
    height: 300px !important;
    object-position: center 42%;
  }

  .hero-photo-caption-text {
    margin-top: 16px !important;
    font-size: 1.08rem !important;
  }

  .hero-toc-strip {
    display: none !important;
    flex-wrap: nowrap !important;
    gap: 12px !important;
    overflow-x: auto;
    margin-left: -22px;
    margin-right: -22px;
    padding: 18px 22px 8px !important;
    scrollbar-width: none;
    -webkit-overflow-scrolling: touch;
  }

  .hero-toc-strip::-webkit-scrollbar {
    display: none;
  }

  .hero-toc-strip span {
    flex: 0 0 auto;
    min-height: 36px;
    align-items: center;
    padding: 0 13px;
    border: 1px solid rgba(45, 73, 73, 0.12);
    border-radius: 999px;
    background: rgba(245, 240, 232, 0.72);
  }

  .stats-terra {
    padding: 42px 0 !important;
  }

  .stats-terra-container {
    padding: 0 14px !important;
  }

  .stats-terra-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
  }

  .stat-terra {
    padding: 0 12px !important;
  }

  .stat-terra:not(:last-child)::after {
    left: auto;
    right: 0;
    top: 10%;
    bottom: 10%;
    width: 1px;
    height: auto;
  }

  .stat-terra-num {
    font-size: clamp(1.15rem, 7vw, 1.65rem) !important;
  }

  .stat-terra-num em {
    font-size: 0.36em !important;
    margin-left: 2px !important;
  }

  .stat-terra-label {
    font-size: 0.48rem !important;
    line-height: 1.35 !important;
    letter-spacing: 0.11em !important;
    margin-top: 8px !important;
  }

  .sg-section {
    height: auto !important;
    min-height: auto !important;
    overflow: visible !important;
    background: var(--crema);
  }

  .sg-sticky {
    position: relative !important;
    height: auto !important;
    min-height: auto !important;
    display: flex !important;
    flex-direction: column;
  }

  .sg-left {
    order: 1;
    min-height: auto !important;
    padding: 34px 22px 30px !important;
    border-right: 0 !important;
    overflow: visible !important;
  }

  .sg-right {
    order: 2;
    min-height: 0 !important;
    height: min(64svh, 520px) !important;
    min-width: 0 !important;
    width: 100% !important;
    overflow: hidden !important;
  }

  #sg-img-track {
    min-width: 0 !important;
    max-width: 100% !important;
    height: 100% !important;
  }

  .sg-img-slide {
    min-width: 100% !important;
    width: 100% !important;
    flex: 0 0 100% !important;
  }

  .sg-img-slide img {
    height: 100% !important;
    transform: scale(1.34) !important;
    transform-origin: 47% 22%;
    object-position: center 22%;
  }

  .sg-img-peek-hint {
    display: none !important;
  }

  .sg-img-caption {
    left: 22px !important;
    right: 22px !important;
    bottom: 66px !important;
  }

  #sg-caption-num {
    font-size: 3.2rem !important;
    margin-bottom: -2px !important;
  }

  #sg-caption-name {
    font-size: 1.45rem !important;
    max-width: 16rem;
  }

  #sg-caption-sub {
    font-size: 0.58rem !important;
    line-height: 1.35 !important;
  }

  .sg-header {
    margin-bottom: 24px !important;
  }

  .sg-header-title {
    font-size: clamp(2rem, 10vw, 2.75rem) !important;
  }

  .sg-list-viewport {
    flex: 0 0 156px !important;
    height: 156px !important;
    min-height: 156px;
    overflow: hidden !important;
    touch-action: pan-y;
    -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%) !important;
    mask-image: linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%) !important;
  }

  #sg-list {
    gap: 0;
    will-change: transform;
  }

  .sg-list-item {
    height: 52px !important;
    min-height: 52px !important;
    padding: 0 !important;
    gap: 10px !important;
    opacity: 0.46;
  }

  .sg-item-num {
    opacity: 1 !important;
    min-width: 24px !important;
  }

  .sg-item-name,
  .sg-list-item.near .sg-item-name,
  .sg-list-item.active .sg-item-name {
    font-size: 1.18rem !important;
    white-space: normal !important;
    overflow: visible !important;
    line-height: 1.08 !important;
  }

  .sg-list-item.active .sg-item-name {
    font-size: 1.6rem !important;
  }

  .sg-list-item.active .sg-item-bar {
    height: 24px !important;
  }

  .sg-desc-area {
    order: 3;
    margin-top: 0 !important;
    padding: 26px 22px 46px !important;
    min-height: 0 !important;
    background: var(--crema);
    border-top: 1px solid var(--crema-border);
  }

  #sg-desc-text {
    font-size: 0.8rem !important;
    line-height: 1.58 !important;
  }

  .sg-progress {
    bottom: 22px !important;
    left: 22px !important;
    right: 22px !important;
    width: auto !important;
  }

  .sg-scroll-hint {
    display: none !important;
  }
}

@media (max-width: 520px) {
  .hero-folio-display {
    font-size: clamp(3.8rem, 6.5vw, 7rem) !important;
  }

  .hero-folio-italic {
    font-size: clamp(3.2rem, 5.5vw, 5.8rem) !important;
  }

  .hero-photo-inner img {
    height: 240px !important;
  }
}

@media (max-width: 1100px) {
  .cotizar-main,
  .hero-folio-grid,
  .story-inner,
  .promesa-inner {
    grid-template-columns: 1fr !important;
  }

  .summary-wrap {
    position: static !important;
  }

  .pkg-grid,
  .values-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
  }
}

@media (max-width: 900px) {
  .nav-links {
    gap: 16px !important;
  }

  .hero-nosotros {
    grid-template-columns: 1fr !important;
    min-height: auto !important;
  }

  .hero-left,
  .hero-right {
    min-height: auto !important;
  }

  .hero-right {
    aspect-ratio: 4 / 3;
  }

  .values-header,
  .timeline-header {
    grid-template-columns: 1fr !important;
    gap: 24px !important;
  }

  .team-inner [style*="grid-template-columns"],
  .promise-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
  }
}

@media (max-width: 760px) {
  img,
  video,
  canvas,
  svg {
    max-width: 100%;
  }

  h1,
  h2,
  h3,
  .hero-title,
  .step-title,
  .step-sub,
  .faq-hero-title,
  .section-title,
  .pkg-title {
    overflow-wrap: anywhere;
  }

  section {
    scroll-margin-top: 88px;
  }

  .hero-cotizar,
  .hero-faq,
  .hero-nosotros,
  .hero-folio {
    padding-top: 88px !important;
  }

  .hero-nosotros {
    min-height: auto !important;
    display: flex !important;
    flex-direction: column !important;
    align-items: stretch !important;
  }

  .hero-nosotros .hero-left {
    width: 100% !important;
    flex: none !important;
    padding: 34px 22px 46px !important;
  }

  .hero-nosotros .hero-right {
    display: none !important;
  }

  .hero-nosotros .hero-left > [style*="display:flex"][style*="gap:14px"],
  .hero-nosotros .hero-left > [style*="display:flex"][style*="gap:36px"] {
    width: 100%;
  }

  .hero-nosotros .hero-left > [style*="display:flex"][style*="gap:14px"] {
    flex-direction: column !important;
    align-items: stretch !important;
    gap: 10px !important;
  }

  .hero-nosotros .hero-left > [style*="display:flex"][style*="gap:14px"] a {
    width: 100%;
  }

  .hero-nosotros .hero-left > [style*="display:flex"][style*="gap:36px"] {
    display: grid !important;
    grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
    gap: 12px !important;
    margin-top: 38px !important;
    padding-top: 24px !important;
  }

  .hero-nosotros .hero-left > [style*="display:flex"][style*="gap:36px"] > div {
    min-width: 0;
  }

  .hero-nosotros .hero-left > [style*="display:flex"][style*="gap:36px"] [style*="font-size:2.2rem"] {
    font-size: clamp(1.25rem, 7vw, 1.65rem) !important;
  }

  .hero-nosotros .hero-left > [style*="display:flex"][style*="gap:36px"] [style*="font-size:0.65rem"] {
    font-size: 0.52rem !important;
    line-height: 1.35 !important;
    letter-spacing: 0.08em !important;
  }

  .hero-cotizar-content,
  .faq-inner,
  .values-inner,
  .timeline-inner,
  .team-inner,
  .promesa-inner {
    padding-left: 22px !important;
    padding-right: 22px !important;
  }

  .hero-cotizar {
    min-height: 58svh !important;
    align-items: flex-end !important;
    padding: 118px 0 62px !important;
  }

  .hero-cotizar-content {
    max-width: none !important;
    margin: 0 !important;
  }

  .hero-cotizar-content .overline {
    justify-content: flex-start !important;
  }

  .hero-cotizar-content p {
    max-width: 20rem !important;
    font-size: 1rem !important;
    line-height: 1.8 !important;
  }

  .hero-cotizar-content [style*="font-family:'Against'"],
  .hero-faq [style*="font-family:'Against'"],
  .hero-nosotros [style*="font-family:'Against'"] {
    font-size: clamp(2.85rem, 12.4vw, 3.45rem) !important;
    letter-spacing: 0 !important;
    overflow-wrap: normal;
  }

  .hero-cotizar-content [style*="font-family:'Cormorant Garamond'"],
  .hero-faq [style*="font-family:'Cormorant Garamond'"],
  .hero-nosotros [style*="font-family:'Cormorant Garamond'"] {
    font-size: clamp(2.25rem, 10vw, 3.1rem) !important;
  }

  .pkg-grid,
  .values-grid,
  .promise-grid {
    grid-template-columns: 1fr !important;
  }

  .team-inner [style*="grid-template-columns"] {
    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
    gap: 12px !important;
  }

  .pkg-card,
  .cta-card,
  .team-glass-card,
  .value-card,
  .summary-card {
    max-width: 100%;
  }

  .value-card {
    padding: 24px 20px !important;
    gap: 12px !important;
  }

  .value-num {
    font-size: 2.35rem !important;
  }

  .value-icon {
    width: 22px !important;
    height: 22px !important;
  }

  .value-title {
    font-size: 1.22rem !important;
  }

  .value-body {
    font-size: 0.74rem !important;
    line-height: 1.62 !important;
  }

  .pkg-img-wrap,
  .team-glass-img,
  .promesa-img-wrap {
    min-height: 0 !important;
  }

  .faq-tabs {
    display: flex !important;
    gap: 10px !important;
    overflow-x: auto;
    padding-bottom: 12px;
    margin-left: -22px;
    margin-right: -22px;
    padding-left: 22px;
    padding-right: 22px;
    -webkit-overflow-scrolling: touch;
  }

  .faq-tab {
    flex: 0 0 auto;
    min-height: 42px;
    white-space: nowrap;
  }

  .faq-question {
    gap: 14px;
    align-items: flex-start !important;
  }

  .faq-q-text {
    min-width: 0;
    line-height: 1.45;
  }

  .faq-icon {
    flex: 0 0 auto;
  }

  .faq-item.open .faq-answer {
    max-height: 520px !important;
  }

  .faq-answer-inner {
    padding-bottom: 22px !important;
  }

  .tabs-bar {
    justify-content: flex-start !important;
    overflow-x: auto;
    margin-left: -22px;
    margin-right: -22px;
    padding-left: 22px !important;
    padding-right: 22px !important;
    -webkit-overflow-scrolling: touch;
  }

  .tab-btn {
    flex: 0 0 auto;
  }

  .inventario-section {
    grid-template-columns: 1fr !important;
  }

  .inv-cols {
    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
    gap: 0 14px !important;
  }

  .inv-cols > div {
    display: contents;
  }

  .inv-left,
  .inv-right {
    min-width: 0 !important;
    padding-left: 22px !important;
    padding-right: 22px !important;
  }

  .inventario-section {
    min-height: auto !important;
  }

  .inv-left {
    padding-top: 68px !important;
    padding-bottom: 60px !important;
    justify-content: flex-start !important;
  }

  .inv-left-eyebrow {
    margin-bottom: 18px !important;
  }

  .inv-left-body {
    margin-top: 18px !important;
    line-height: 1.7 !important;
  }

  .inv-left-tally {
    margin-top: 26px !important;
    padding-top: 20px !important;
  }

  .inv-scroll-cue {
    display: flex !important;
  }

  .inv-right {
    padding-top: 34px !important;
  }

  .inv-item {
    gap: 8px !important;
    align-items: flex-start !important;
  }

  .inv-item-num {
    min-width: 22px !important;
  }

  .inv-item-name {
    line-height: 1.15 !important;
  }

  .inv-addon {
    align-self: flex-start;
    margin-top: 2px;
  }

  .inv-left::after {
    display: none !important;
  }

  .timeline::before {
    left: 16px !important;
  }

  .tl-item,
  .tl-item:nth-child(odd),
  .tl-item:nth-child(even) {
    grid-template-columns: 36px 1fr !important;
    gap: 16px !important;
    align-items: start !important;
    padding: 30px 0 !important;
  }

  .tl-empty {
    display: none !important;
  }

  .tl-dot,
  .tl-item:nth-child(odd) .tl-dot,
  .tl-item:nth-child(even) .tl-dot {
    grid-column: 1 !important;
    grid-row: 1 !important;
    justify-self: center !important;
    align-self: start !important;
    margin-top: 3px !important;
  }

  .tl-content,
  .tl-item:nth-child(odd) .tl-content,
  .tl-item:nth-child(even) .tl-content {
    grid-column: 2 !important;
    grid-row: 1 !important;
    text-align: left !important;
    padding-left: 0 !important;
    padding-right: 0 !important;
  }

  .team-glass-card:first-child {
    grid-column: auto !important;
  }

  .story-section {
    padding-top: 68px !important;
    padding-bottom: 74px !important;
  }

  .story-inner {
    padding-left: 22px !important;
    padding-right: 22px !important;
    gap: 54px !important;
  }

  .story-text {
    padding-left: 0 !important;
    padding-bottom: 0 !important;
    gap: 24px !important;
  }

  .story-photo-accent,
  .story-photo [style*="position:absolute"][style*="bottom:-32px"] {
    bottom: -20px !important;
    right: -8px !important;
    width: 48% !important;
    border-width: 4px !important;
  }

  .story-year-badge {
    left: 12px !important;
    top: 12px !important;
    padding: 11px 15px !important;
  }

  .pull-quote {
    padding: 18px 18px !important;
    font-size: 1.22rem !important;
  }

  .values-section,
  .timeline-section,
  .team-section,
  .promesa-section,
  .cta-section {
    padding-top: 72px !important;
    padding-bottom: 76px !important;
  }

  .values-header,
  .team-inner > [style*="justify-content:space-between"] {
    display: flex !important;
    flex-direction: column !important;
    align-items: flex-start !important;
    gap: 18px !important;
  }

  .team-inner > [style*="justify-content:space-between"] p {
    max-width: 100% !important;
    align-self: flex-start !important;
  }

  .team-glass-img {
    aspect-ratio: 4 / 4.6 !important;
  }

  .team-glass-info {
    padding: 14px 12px !important;
  }

  .team-glass-role {
    font-size: 0.52rem !important;
    letter-spacing: 0.12em !important;
  }

  .team-glass-name {
    font-size: 1rem !important;
    line-height: 1.12 !important;
  }

  .team-glass-desc {
    display: none !important;
  }

  .promesa-badge {
    position: absolute !important;
    right: 14px !important;
    bottom: -42px !important;
    width: 108px !important;
    height: 108px !important;
    margin-top: 0 !important;
    padding: 14px !important;
    border-radius: 50% !important;
  }

  .promesa-inner {
    gap: 42px !important;
  }

  .promesa-text {
    gap: 24px !important;
  }

  .commitment-item {
    align-items: flex-start !important;
    gap: 14px !important;
  }

  .cta-section > div[style*="max-width:1500px"] {
    padding-left: 22px !important;
    padding-right: 22px !important;
    grid-template-columns: 1fr !important;
    gap: 32px !important;
  }

  .cta-section .cta-card {
    padding: 22px 18px !important;
  }

  .cta-section .cta-card-sub {
    display: none !important;
  }

  .cta-section div[style*="grid-template-columns:1fr 1fr"][style*="gap:14px"] {
    display: grid !important;
    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
    gap: 14px !important;
  }

  .cta-section .cta-card .btn-accent,
  .cta-section .cta-card a[style*="background:#128c4a"],
  .cta-section .cta-card button {
    width: 100% !important;
    min-height: 42px;
    padding-left: 12px !important;
    padding-right: 12px !important;
  }

  .cotizar-main {
    padding-left: 22px !important;
    padding-right: 22px !important;
    gap: 36px !important;
  }

  .tipo-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
    gap: 12px !important;
  }

  .tipo-card {
    min-height: 150px;
    padding: 18px 14px !important;
  }

  .tipo-icon {
    width: 34px !important;
    height: 34px !important;
  }

  .tipo-name {
    font-size: 1.08rem !important;
    line-height: 1.1 !important;
  }

  .tipo-desc {
    font-size: 0.74rem !important;
    line-height: 1.42 !important;
  }

  .step-panel {
    padding: 28px 14px !important;
  }

  .step-title {
    font-size: clamp(2.45rem, 12vw, 3.25rem) !important;
    line-height: 0.92 !important;
  }

  .step-sub {
    font-size: clamp(1.65rem, 8vw, 2.25rem) !important;
    line-height: 1 !important;
    margin-bottom: 36px !important;
  }

  .step-nav {
    grid-template-columns: 1fr !important;
    gap: 12px !important;
  }

  .btn-prev,
  .btn-next,
  .btn-submit {
    width: 100%;
  }

  .summary-row,
  .summary-total-row {
    gap: 14px;
  }

  .summary-card {
    padding: 32px 28px !important;
  }

  .summary-title {
    font-size: clamp(1.25rem, 7vw, 2rem) !important;
    line-height: 0.95 !important;
    margin-bottom: 0 !important;
  }

  .summary-sub {
    font-size: clamp(2rem, 10vw, 2.8rem) !important;
    line-height: 0.95 !important;
    margin-bottom: 30px !important;
  }

  .summary-key {
    font-size: 0.82rem !important;
    line-height: 1.35 !important;
  }

  .summary-val {
    font-size: 1rem !important;
    line-height: 1.35 !important;
  }

  .summary-total-key {
    font-size: 0.78rem !important;
  }

  .summary-total-sub {
    font-size: 0.72rem !important;
    line-height: 1.35 !important;
    text-align: left !important;
  }

  .summary-total-val {
    font-size: clamp(2rem, 8.8vw, 2.45rem) !important;
    white-space: nowrap !important;
  }

  .paquete-rec {
    display: none !important;
    padding: 24px 22px !important;
  }

  .paquete-rec-label {
    font-size: 0.7rem !important;
  }

  .paquete-rec-name {
    font-size: 1.45rem !important;
  }

  .paquete-rec-desc {
    font-size: 0.88rem !important;
    line-height: 1.7 !important;
  }

  .summary-val,
  .summary-total-val {
    text-align: right;
    overflow-wrap: normal;
  }

  input,
  select,
  textarea {
    font-size: 16px !important;
  }

  .optional-label {
    font-size: 0.76rem !important;
    font-weight: 400 !important;
    text-transform: none !important;
    letter-spacing: 0.01em !important;
    color: var(--muted) !important;
    margin-left: 4px;
  }

  .exp-hero {
    min-height: auto !important;
    padding-top: 86px !important;
    align-items: flex-start !important;
  }

  .experiencias-page .txt-reveal,
  .experiencias-page .img-reveal,
  .experiencias-page .img-reveal .img-bg {
    opacity: 1 !important;
    transform: none !important;
  }

  .experiencias-page .img-reveal .reveal-cover {
    display: none !important;
  }

  .exp-hero-media {
    inset: 0 !important;
    width: 100% !important;
  }

  .exp-hero-media img {
    object-position: 58% 30% !important;
  }

  .exp-hero-media::after {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 1;
    background:
      linear-gradient(to bottom, rgba(30, 50, 50, 0.26) 0%, rgba(30, 50, 50, 0.68) 52%, var(--verde-dark) 100%),
      linear-gradient(to right, rgba(30, 50, 50, 0.76), rgba(30, 50, 50, 0.18));
    pointer-events: none;
  }

  .exp-hero-inner {
    padding: 30px 22px 42px !important;
  }

  .exp-hero-copy {
    max-width: 100% !important;
  }

  .exp-hero-copy [style*="font-family:'Against'"] {
    font-size: clamp(2.1rem, 10.7vw, 2.72rem) !important;
    line-height: 0.94 !important;
    letter-spacing: 0 !important;
  }

  .exp-hero-copy [style*="font-family:'Cormorant Garamond'"] {
    font-size: clamp(2.35rem, 10.5vw, 3rem) !important;
    line-height: 0.96 !important;
  }

  .exp-hero-copy p {
    max-width: 32rem !important;
    font-size: 0.98rem !important;
    line-height: 1.7 !important;
    color: rgba(255, 253, 248, 0.78) !important;
  }

  .exp-hero-actions {
    flex-direction: column !important;
    align-items: stretch !important;
    gap: 10px !important;
    margin-top: 28px !important;
  }

  .exp-hero-actions .btn-accent,
  .exp-hero-actions .btn-ghost {
    width: 100%;
  }

  .exp-social-proof {
    align-items: flex-start !important;
    margin-top: 28px !important;
    padding-top: 22px !important;
  }

  .exp-catalog,
  .exp-addons,
  .exp-cta {
    padding-top: 64px !important;
    padding-bottom: 64px !important;
  }

  .exp-container,
  .exp-cta-inner {
    padding-left: 22px !important;
    padding-right: 22px !important;
  }

  .exp-section-header,
  .exp-addons-header,
  .exp-cta-inner {
    grid-template-columns: 1fr !important;
    flex-direction: column !important;
    align-items: flex-start !important;
    gap: 22px !important;
    margin-bottom: 34px !important;
  }

  .exp-section-header p,
  .exp-addons-header p {
    max-width: none !important;
    text-align: left !important;
  }

  .exp-section-header [style*="font-family:'Cormorant Garamond'"],
  .exp-addons-header [style*="font-family:'Cormorant Garamond'"] {
    font-size: clamp(2.25rem, 11vw, 3rem) !important;
    line-height: 1.04 !important;
  }

  .tabs-bar {
    margin-bottom: 28px !important;
    scrollbar-width: none;
  }

  .tabs-bar::-webkit-scrollbar {
    display: none;
  }

  .tab-btn {
    min-height: 42px;
    padding: 9px 16px !important;
    font-size: 0.68rem !important;
  }

  .experiencias-page .exp-addons-grid,
  div.exp-addons-grid[style*="grid-template-columns"] {
    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
    gap: 10px !important;
  }

  #pkg-grid {
    display: flex !important;
    grid-template-columns: none !important;
    gap: 14px !important;
    overflow-x: auto !important;
    overflow-y: hidden !important;
    scroll-snap-type: x mandatory;
    scroll-padding-left: 22px;
    margin-left: -22px;
    margin-right: -22px;
    padding: 0 22px 14px !important;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
  }

  #pkg-grid::-webkit-scrollbar {
    display: none;
  }

  #pkg-grid .pkg-card {
    flex: 0 0 min(82vw, 340px);
    scroll-snap-align: start;
  }

  .pkg-card {
    border-radius: 10px !important;
  }

  .pkg-img-wrap {
    height: 190px !important;
  }

  .pkg-body {
    padding: 21px 20px 22px !important;
    gap: 6px !important;
  }

  .pkg-title {
    font-size: 1.58rem !important;
    overflow-wrap: normal !important;
  }

  .pkg-features {
    gap: 6px !important;
  }

  .pkg-features li {
    font-size: 0.84rem !important;
    line-height: 1.42 !important;
  }

  .pkg-btn {
    min-height: 44px;
  }

  .exp-pricing-note {
    margin-top: 30px !important;
    padding: 18px 16px !important;
    gap: 12px !important;
  }

  .addon-card {
    padding: 18px 14px !important;
    border-radius: 10px !important;
    gap: 8px !important;
  }

  .addon-icon {
    width: 28px !important;
    height: 28px !important;
  }

  .addon-name {
    font-size: 1.08rem !important;
    line-height: 1.16 !important;
  }

  .addon-desc {
    font-size: 0.75rem !important;
    line-height: 1.45 !important;
  }

  .addon-price {
    font-size: 0.78rem !important;
  }

  .exp-addon-note {
    margin-top: 34px !important;
    text-align: left !important;
  }

  .exp-addon-note .btn-primary {
    width: 100%;
  }

  .exp-cta-inner {
    gap: 34px !important;
  }

  .exp-cta-inner [style*="font-family:'Against'"] {
    font-size: clamp(2.05rem, 10.5vw, 2.6rem) !important;
    line-height: 0.95 !important;
    letter-spacing: 0 !important;
  }

  .exp-cta-inner [style*="font-family:'Cormorant Garamond'"] {
    font-size: clamp(2.35rem, 11vw, 3.35rem) !important;
    line-height: 0.98 !important;
  }

  .exp-cta-proof {
    flex-direction: column !important;
    align-items: flex-start !important;
    gap: 8px !important;
  }

  .exp-cta-card-grid {
    grid-template-columns: 1fr 1fr !important;
    gap: 10px !important;
  }

  .exp-cta-card-grid .cta-card {
    padding: 18px 14px !important;
  }

  .exp-cta-card-grid .cta-card-sub {
    display: none !important;
  }

  .cta-card button {
    width: 100%;
    min-height: 42px;
    white-space: normal;
  }
}

@media (max-width: 760px) {
  body.experiencias-page div.exp-addons-grid.txt-reveal[style*="grid-template-columns"] {
    display: grid !important;
    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
    gap: 10px !important;
  }

  body.experiencias-page div.cta-small-grid.exp-cta-card-grid[style*="grid-template-columns"] {
    display: grid !important;
    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
    gap: 14px !important;
  }

  body.experiencias-page .cta-small-grid .cta-card {
    padding: 18px 14px !important;
    min-width: 0;
  }

  body.experiencias-page .cta-small-grid .cta-card-title {
    font-size: 1rem !important;
    line-height: 1.15 !important;
  }

  body.experiencias-page .cta-small-grid .cta-card-sub {
    display: none !important;
  }

  body.experiencias-page .cta-small-grid .cta-card button {
    width: 100%;
    min-height: 42px;
    padding-left: 12px !important;
    padding-right: 12px !important;
  }
}

@media (max-width: 520px) {
  .nav-logo img {
    max-width: 148px;
  }


  .hero-cotizar-content,
  .faq-inner,
  .values-inner,
  .timeline-inner,
  .team-inner,
  .promesa-inner {
    padding-left: 18px !important;
    padding-right: 18px !important;
  }

  .hero-folio-container,
  .stats-terra-container,
  .cotizar-main {
    padding-left: 18px !important;
    padding-right: 18px !important;
  }

  .stats-inner,
  .stats-terra-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
  }

  .faq-tabs {
    margin-left: -18px;
    margin-right: -18px;
    padding-left: 18px;
    padding-right: 18px;
  }
}


`;

