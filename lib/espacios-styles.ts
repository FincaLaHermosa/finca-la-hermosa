export const espaciosStyles = String.raw`
@font-face { font-family:'Against'; src:url('/fonts/against-regular.otf') format('opentype'); }

:root {
  --crema:#fffdf8; --crema-warm:#f5f0e8; --crema-border:#ede6d6;
  --verde:#2d4949; --verde-dark:#1e3232; --verde-mid:#4a6e6e;
  --terracota:#9d563d; --terra-light:#e8c4ad;
  --body-clr:#5a5040; --muted:#6f634f; --carbon:#1a1a1a;
  --ease-out:cubic-bezier(0.22,1,0.36,1);
  --ease-snap:cubic-bezier(0.76,0,0.24,1);
}
*,*::before,*::after{margin:0;padding:0;box-sizing:border-box;}
html{font-size:16px;scroll-behavior:smooth;}
body{font-family:'Jost',sans-serif;background:var(--crema);color:var(--body-clr);overflow-x:hidden;}

/* ── NAV ──────────────────────────────────────── */
#site-nav{position:fixed;top:0;left:0;right:0;z-index:200;display:flex;justify-content:center;padding:14px 24px;pointer-events:none;}
.nav-pill{width:100%;max-width:1500px;height:58px;display:flex;align-items:center;justify-content:space-between;padding:0 28px;border-radius:999px;background:rgba(18,28,24,0.12);border:1px solid rgba(255,255,255,0.1);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);box-shadow:0 8px 32px rgba(0,0,0,0.18),inset 0 1px 0 rgba(255,255,255,0.07);transition:background 0.4s,border-color 0.4s;pointer-events:all;}
.nav-pill.scrolled{background:rgba(28,46,44,0.92);border-color:rgba(255,255,255,0.13);box-shadow:0 8px 40px rgba(0,0,0,0.32);}
.nav-logo img{height:32px;}
.nav-links{display:flex;gap:28px;align-items:center;}
.nav-links a{font-family:'Jost',sans-serif;font-size:0.69rem;font-weight:300;letter-spacing:0.12em;text-transform:uppercase;color:rgba(255,253,248,0.72);text-decoration:none;border-bottom:1px solid transparent;padding-bottom:2px;transition:color 0.22s,border-color 0.22s;}
.nav-links a:hover{color:var(--crema);border-color:rgba(255,253,248,0.4);}
.nav-links a.active{color:var(--crema);border-color:rgba(192,122,90,0.6);}
.nav-cta{font-family:'Jost',sans-serif;font-size:0.67rem;font-weight:300;letter-spacing:0.13em;text-transform:uppercase;color:var(--crema);background:rgba(255,253,248,0.09);border:1px solid rgba(255,255,255,0.2);padding:8px 20px;border-radius:999px;cursor:pointer;transition:all 0.22s;}
.nav-cta:hover{background:rgba(192,122,90,0.9);border-color:rgba(192,122,90,0.6);}

/* ── WA ────────────────────────────────────────── */
.wa-float{position:fixed;bottom:32px;right:32px;z-index:150;width:50px;height:50px;border-radius:50%;background:#128c4a;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 16px rgba(0,0,0,0.2);transition:transform 0.26s,box-shadow 0.26s;text-decoration:none;}
.wa-float:hover{transform:translateY(-3px);box-shadow:0 8px 24px rgba(0,0,0,0.28);}

/* ── BUTTONS ───────────────────────────────────── */
.btn-primary{font-family:'Jost',sans-serif;font-size:0.75rem;font-weight:500;letter-spacing:0.1em;text-transform:uppercase;color:var(--crema);background:var(--verde);border:none;padding:13px 28px;border-radius:999px;cursor:pointer;text-decoration:none;display:inline-flex;align-items:center;gap:8px;transition:all 0.22s;}
.btn-primary:hover{background:var(--verde-mid);transform:scale(1.04);}
.btn-accent{font-family:'Jost',sans-serif;font-size:0.75rem;font-weight:500;letter-spacing:0.1em;text-transform:uppercase;color:var(--crema);background:var(--terracota);border:none;padding:13px 28px;border-radius:999px;cursor:pointer;text-decoration:none;display:inline-block;transition:all 0.22s;}
.btn-accent:hover{background:#a8664a;transform:scale(1.04);}
.btn-ghost{font-family:'Jost',sans-serif;font-size:0.75rem;font-weight:500;letter-spacing:0.1em;text-transform:uppercase;color:rgba(255,253,248,0.75);background:transparent;border:1px solid rgba(255,255,255,0.2);padding:13px 28px;border-radius:999px;cursor:pointer;text-decoration:none;display:inline-block;transition:all 0.22s;}
.btn-ghost:hover{color:var(--crema);border-color:rgba(255,255,255,0.5);}
.btn-outline-dark{font-family:'Jost',sans-serif;font-size:0.75rem;font-weight:500;letter-spacing:0.1em;text-transform:uppercase;color:var(--verde);background:transparent;border:1px solid rgba(45,73,73,0.35);padding:12px 26px;border-radius:999px;cursor:pointer;text-decoration:none;display:inline-flex;align-items:center;gap:8px;transition:all 0.22s;}
.btn-outline-dark:hover{border-color:var(--verde);background:var(--verde);color:var(--crema);}

/* ── OVERLINE ──────────────────────────────────── */
.overline{font-family:'Jost',sans-serif;font-size:0.67rem;font-weight:500;letter-spacing:0.16em;text-transform:uppercase;display:flex;align-items:center;gap:10px;}
.overline::before{content:'';display:block;width:20px;height:1px;flex-shrink:0;}
.overline-dark{color:var(--terracota);}
.overline-dark::before{background:var(--terra-light);}
.overline-light{color:rgba(232,196,173,0.8);}
.overline-light::before{background:rgba(232,196,173,0.5);}

/* ── REVEAL ────────────────────────────────────── */
.txt-reveal{opacity:0;transform:translateY(28px);transition:opacity 0.85s var(--ease-snap),transform 0.85s var(--ease-snap);}
.txt-reveal.in{opacity:1;transform:translateY(0);}
.txt-reveal[data-d="1"]{transition-delay:0.10s;}
.txt-reveal[data-d="2"]{transition-delay:0.22s;}
.txt-reveal[data-d="3"]{transition-delay:0.36s;}
.txt-reveal[data-d="4"]{transition-delay:0.50s;}
.img-reveal{position:relative;overflow:hidden;}
.img-reveal .reveal-cover{position:absolute;inset:0;z-index:2;background:var(--verde-dark);transform:translateY(0);transition:transform 1.3s var(--ease-snap);}
.img-reveal.in .reveal-cover{transform:translateY(-100%);}
.img-reveal .img-bg{transform:scale(1.08);transition:transform 1.6s var(--ease-snap);}
.img-reveal.in .img-bg{transform:scale(1);}
@keyframes arrow-pulse {
  0%, 100% { transform: translateY(0); opacity: 0.5; }
  50% { transform: translateY(7px); opacity: 1; }
}
.scroll-arrow { animation: arrow-pulse 1.8s ease-in-out infinite; }

/* ── CTA CARDS ─────────────────────────────────── */
.cta-card{padding:28px 24px;background:rgba(255,255,255,0.07);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,0.11);border-radius:12px;display:flex;flex-direction:column;gap:12px;align-items:flex-start;transition:background 0.26s,border-color 0.26s;}
.cta-card:hover{background:rgba(255,255,255,0.11);border-color:rgba(255,255,255,0.18);}
.cta-card-icon{width:26px;height:26px;color:rgba(255,253,248,0.7);}
.cta-card-title{font-family:'Cormorant Garamond',serif;font-size:1.15rem;font-weight:400;color:#fff;}
.cta-card-sub{font-family:'Jost',sans-serif;font-size:0.75rem;font-weight:300;color:rgba(255,253,248,0.52);line-height:1.65;flex:1;}

/* ── CONTACT NUDGE ─────────────────────────────── */
.espacios-contact-section{background:var(--crema-warm);padding:88px 40px;text-align:center;}
.espacios-contact-actions{display:flex;gap:12px;justify-content:center;flex-wrap:wrap;}
.espacios-contact-actions a{min-height:44px;display:inline-flex;align-items:center;justify-content:center;text-align:center;padding-left:16px!important;padding-right:16px!important;}

@media (max-width:760px){
  #cta-section .cta-small-grid.exp-cta-card-grid{
    display:grid!important;
    grid-template-columns:repeat(2,minmax(0,1fr))!important;
    gap:14px!important;
  }
  #cta-section .cta-small-grid.exp-cta-card-grid .cta-card{
    min-width:0;
    padding:18px 14px!important;
  }
  #cta-section .cta-small-grid.exp-cta-card-grid .cta-card-title{
    font-size:1rem!important;
    line-height:1.15!important;
  }
  #cta-section .cta-small-grid.exp-cta-card-grid .cta-card-sub{
    display:none!important;
  }
  #cta-section .cta-small-grid.exp-cta-card-grid .btn-accent,
  #cta-section .cta-small-grid.exp-cta-card-grid button{
    width:100%;
    min-height:42px;
    box-sizing:border-box;
    padding-left:12px!important;
    padding-right:12px!important;
    text-align:center;
  }
}



/* ══════════════════════════════════════════════
   HERO FOLIO
══════════════════════════════════════════════ */
.hero-folio {
  background: var(--crema);
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.hero-folio-ghost {
  font-family: 'Against', serif;
  font-size: clamp(12rem, 22vw, 26rem);
  line-height: 0.85;
  letter-spacing: -0.04em;
  color: rgba(45, 73, 73, 0.04);
  position: absolute;
  right: -40px;
  bottom: -30px;
  pointer-events: none;
  user-select: none;
  z-index: 0;
}
.hero-folio-container {
  max-width: 1500px;
  width: 100%;
  margin: 0 auto;
  padding: 100px 60px 52px;
  display: flex;
  flex-direction: column;
  gap: 48px;
  flex: 1;
  position: relative;
  z-index: 1;
}
.hero-folio-bar {
  display: flex;
  align-items: center;
  gap: 0;
  font-family: 'Jost', sans-serif;
  font-size: 0.6rem;
  font-weight: 400;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--muted);
  border-bottom: 1px solid rgba(45, 73, 73, 0.14);
  padding-bottom: 16px;
}
.hero-folio-bar span { margin-right: 28px; }
.hero-folio-bar-spacer { flex: 1; }
.hero-folio-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 60px;
  align-items: start;
  flex: 1;
}
.hero-folio-text {
  display: flex;
  flex-direction: column;
  gap: 0;
  padding-top: 20px;
}
.hero-folio-id {
  font-family: 'Jost', sans-serif;
  font-size: 0.6rem;
  font-weight: 400;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--terracota);
  margin-bottom: 18px;
}
.hero-folio-display {
  font-family: 'Against', serif;
  font-size: clamp(3.8rem, 6.5vw, 7rem);
  line-height: 0.92;
  letter-spacing: -0.025em;
  color: var(--carbon);
  display: block;
}
.hero-folio-italic {
  font-family: 'Cormorant Garamond', serif;
  font-style: italic;
  font-weight: 300;
  font-size: clamp(3.2rem, 5.5vw, 5.8rem);
  line-height: 1;
  color: var(--terracota);
  display: block;
  margin-top: 4px;
}
.hero-folio-body {
  font-family: 'Jost', sans-serif;
  font-size: 0.9rem;
  font-weight: 300;
  line-height: 1.8;
  color: var(--muted);
  max-width: 420px;
  margin-top: 28px;
}
.hero-folio-actions {
  display: flex;
  gap: 12px;
  margin-top: 36px;
  flex-wrap: wrap;
}
.hero-folio-photo-col {
  padding-top: 30px;
}
.hero-photo-frame {
  position: relative;
  background: var(--crema-warm);
  border-radius: 4px;
  transform: rotate(-1.2deg);
  box-shadow: 0 30px 60px -25px rgba(45,73,73,0.28);
  overflow: hidden;
}
.hero-photo-inner {
  position: relative;
}
.hero-photo-inner img {
  width: 100%;
  height: 380px;
  object-fit: cover;
  display: block;
}
.hero-photo-corner {
  position: absolute;
  top: 22px;
  right: 22px;
  font-family: 'Jost', sans-serif;
  font-size: 0.58rem;
  font-weight: 400;
  letter-spacing: 0.18em;
  color: rgba(255,253,248,0.78);
  background: rgba(14,26,24,0.55);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  padding: 6px 10px;
  z-index: 2;
}
.hero-photo-meta {
  background: var(--crema-warm);
  padding: 12px 18px;
  border-top: 1px solid var(--crema-border);
  font-family: 'Jost', sans-serif;
  font-size: 0.6rem;
  font-weight: 400;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--body-clr);
  display: flex;
  gap: 10px;
  align-items: center;
}
.hero-photo-meta span:first-child { color: var(--terracota); }
.hero-photo-caption-text {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.2rem;
  font-weight: 400;
  color: var(--body-clr);
  line-height: 1.3;
  margin-top: 22px;
  padding-left: 4px;
}
.hero-photo-caption-text em {
  font-style: italic;
  color: var(--terracota);
}
.hero-toc-strip {
  border-top: 1px solid rgba(45,73,73,0.18);
  padding: 22px 4px 26px;
  display: flex;
  flex-wrap: wrap;
  gap: 26px 32px;
  font-family: 'Cormorant Garamond', serif;
  font-size: 1rem;
  font-weight: 400;
  color: var(--body-clr);
}
.hero-toc-strip span {
  display: inline-flex;
  align-items: baseline;
  gap: 9px;
  transition: color 0.3s;
  cursor: default;
}
.hero-toc-strip span:hover { color: var(--terracota); }
.hero-toc-strip i {
  font-family: 'Jost', sans-serif;
  font-style: normal;
  font-size: 0.6rem;
  letter-spacing: 0.18em;
  color: var(--terracota);
  text-transform: uppercase;
  font-weight: 400;
}

/* ══════════════════════════════════════════════
   STATS TERRA
══════════════════════════════════════════════ */
.stats-terra {
  background: var(--verde-dark);
  padding: 72px 0 68px;
  color: #fff;
  position: relative;
  overflow: hidden;
}
.stats-terra::before,.stats-terra::after {
  content: '';
  position: absolute;
  left: 0; right: 0;
  height: 1px;
  background: rgba(255,253,248,0.18);
}
.stats-terra::before { top: 0; }
.stats-terra::after { bottom: 0; }
.stats-terra-container {
  max-width: 1500px;
  margin: 0 auto;
  padding: 0 52px;
}
.stats-terra-head {
  text-align: center;
  font-family: 'Jost', sans-serif;
  font-size: 0.6rem;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: rgba(255,253,248,0.85);
  margin-bottom: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
}
.stats-terra-head::before,.stats-terra-head::after {
  content: '';
  display: block;
  width: 32px;
  height: 1px;
  background: rgba(255,253,248,0.5);
}
.stats-terra-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0;
  align-items: end;
}
.stat-terra {
  text-align: center;
  padding: 0 20px;
  position: relative;
}
.stat-terra:not(:last-child)::after {
  content: '';
  position: absolute;
  right: 0;
  top: 14%; bottom: 14%;
  width: 1px;
  background: rgba(255,253,248,0.3);
}
.stat-terra-num {
  font-family: 'Against', serif;
  font-size: clamp(1.6rem, 2.4vw, 2.2rem);
  line-height: 1;
  letter-spacing: -0.02em;
  color: var(--crema);
}
.stat-terra-num em {
  font-family: 'Cormorant Garamond', serif;
  font-style: italic;
  font-weight: 300;
  font-size: 0.42em;
  vertical-align: super;
  margin-left: 4px;
  letter-spacing: 0;
  color: rgba(255,253,248,0.85);
}
.stat-terra-label {
  font-family: 'Jost', sans-serif;
  font-size: 0.58rem;
  font-weight: 400;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(255,253,248,0.6);
  margin-top: 6px;
}
.stats-terra-quote {
  text-align: center;
  font-family: 'Cormorant Garamond', serif;
  font-style: italic;
  font-weight: 300;
  font-size: clamp(1.05rem, 1.4vw, 1.35rem);
  color: rgba(255,253,248,0.92);
  margin: 44px auto 0;
  padding-top: 30px;
  border-top: 1px solid rgba(255,253,248,0.2);
  max-width: 600px;
  line-height: 1.5;
}
.stats-terra-quote::before { content: '"'; opacity: 0.5; margin-right: 4px; }
.stats-terra-quote::after  { content: '"'; opacity: 0.5; margin-left: 4px; }

/* ══════════════════════════════════════════════
   SCROLL GALLERY
══════════════════════════════════════════════ */
.sg-section { position: relative; background: var(--crema); height: 100vh; overflow: hidden; scroll-margin-top: 0; }
#sg-track   { position: relative; height: 100%; }

.sg-sticky {
  position: sticky;
  top: 0;
  height: 100vh;
  overflow: hidden;
  display: grid;
  grid-template-columns: 40% 60%;
}

/* ── LEFT ── */
.sg-left {
  background: var(--crema);
  display: flex;
  flex-direction: column;
  padding: 72px 52px 60px 60px;
  position: relative;
  overflow: hidden;
  border-right: 1px solid var(--crema-border);
}
.sg-header { margin-bottom: 36px; flex-shrink: 0; }
.sg-header-overline {
  font-family: 'Jost', sans-serif;
  font-size: 0.65rem;
  font-weight: 500;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--terracota);
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}
.sg-header-overline::before {
  content: '';
  display: block;
  width: 18px;
  height: 1px;
  background: var(--terra-light);
  flex-shrink: 0;
}
.sg-header-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(1.6rem, 2.4vw, 2.2rem);
  font-weight: 300;
  color: var(--carbon);
  line-height: 1.15;
  letter-spacing: -0.01em;
}
.sg-header-title em { font-style: italic; color: var(--terracota); }

.sg-list-viewport {
  flex: 1;
  overflow: hidden;
  position: relative;
  -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%);
  mask-image: linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%);
}
#sg-list {
  display: flex;
  flex-direction: column;
  will-change: transform;
  transition: transform 0.45s var(--ease-snap);
}
.sg-list-item {
  min-height: 80px;
  display: flex;
  align-items: center;
  gap: 14px;
  cursor: pointer;
  padding: 0 6px;
  opacity: 0.22;
  transition: opacity 0.28s var(--ease-snap);
  user-select: none;
}
.sg-list-item.near  { opacity: 0.55; }
.sg-list-item.active { opacity: 1; }

.sg-item-num {
  font-family: 'Jost', sans-serif;
  font-size: 0.6rem;
  font-weight: 300;
  letter-spacing: 0.1em;
  color: var(--terracota);
  min-width: 22px;
  opacity: 0;
  transition: opacity 0.4s;
  flex-shrink: 0;
}
.sg-list-item.active .sg-item-num { opacity: 1; }

.sg-item-name {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.2rem;
  font-weight: 300;
  color: var(--muted);
  transition: font-size 0.25s var(--ease-snap), color 0.22s;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 0;
  flex: 1;
  line-height: 1.1;
}
.sg-list-item.active .sg-item-name {
  white-space: normal;
  overflow: visible;
}
.sg-list-item.near .sg-item-name  { font-size: 1.65rem; color: var(--body-clr); }
.sg-list-item.active .sg-item-name { font-size: 2.3rem; color: var(--carbon); }
.sg-list-item:hover:not(.active) .sg-item-name { color: var(--body-clr); }

.sg-item-bar {
  width: 2px;
  height: 28px;
  background: var(--terracota);
  border-radius: 2px;
  flex-shrink: 0;
  transform: scaleY(0);
  transform-origin: center;
  transition: transform 0.22s var(--ease-snap);
}
.sg-list-item.active .sg-item-bar { transform: scaleY(1); }

.sg-desc-area {
  flex-shrink: 0;
  padding-top: 24px;
  border-top: 1px solid var(--crema-border);
  margin-top: 8px;
  min-height: 110px;
}
#sg-desc-text {
  font-family: 'Jost', sans-serif;
  font-size: 1.1rem;
  font-weight: 300;
  line-height: 1.9;
  color: var(--muted);
  list-style: none;
  padding: 0;
  transition: opacity 0.3s;
}
#sg-desc-text li::before {
  content: '—';
  margin-right: 8px;
  color: var(--terracota);
  opacity: 0.7;
}
#sg-desc-cap {
  font-family: 'Jost', sans-serif;
  font-size: 0.63rem;
  font-weight: 300;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--terracota);
  margin-top: 10px;
  transition: opacity 0.3s;
}

/* ── RIGHT ── */
.sg-right {
  background: var(--verde-dark);
  position: relative;
  overflow: hidden;
}
#sg-img-track {
  display: flex;
  height: 100%;
  will-change: transform;
  transition: transform 1s var(--ease-snap);
}
.sg-img-slide {
  min-width: 88%;
  height: 100%;
  position: relative;
  flex-shrink: 0;
  overflow: hidden;
}
.sg-image-open {
  position: absolute;
  inset: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  display: block;
  padding: 0;
  border: 0;
  background: transparent;
  cursor: zoom-in;
}
.sg-img-slide img {
  width: 100%;
  height: 112%;
  object-fit: cover;
  display: block;
  will-change: transform;
  transform-origin: center center;
  transform: translateY(-6%);
}
.sg-img-gradient {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(14,26,24,0.72) 0%, rgba(14,26,24,0.1) 40%, transparent 65%);
  z-index: 2;
  pointer-events: none;
}
.sg-img-gradient::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(45deg, rgba(14,26,24,0.82) 0%, rgba(14,26,24,0.62) 22%, rgba(14,26,24,0.28) 42%, transparent 62%);
  pointer-events: none;
}
.sg-img-peek-hint {
  position: absolute;
  top: 0; bottom: 0; right: 0;
  width: 80px;
  background: linear-gradient(to right, transparent, rgba(14,26,24,0.5));
  z-index: 3;
  pointer-events: none;
}
.sg-img-caption {
  position: absolute;
  bottom: 28px;
  left: 44px;
  z-index: 4;
  pointer-events: none;
}
#sg-caption-num {
  font-family: 'Against', serif;
  font-size: clamp(7.5rem, 10vw, 12rem);
  line-height: 1;
  color: rgba(255,253,248,0.16);
  letter-spacing: -0.05em;
  margin-bottom: -22px;
  display: block;
}
#sg-caption-name {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.7rem;
  font-weight: 300;
  color: var(--crema);
  line-height: 1.1;
  display: block;
  transition: opacity 0.3s;
}
#sg-caption-sub {
  font-family: 'Jost', sans-serif;
  font-size: 0.64rem;
  font-weight: 300;
  letter-spacing: 0.13em;
  text-transform: uppercase;
  color: rgba(255,253,248,0.45);
  margin-top: 8px;
  display: block;
  transition: opacity 0.3s;
}
.sg-mobile-swipe-cue {
  display: none;
}
.sg-progress {
  position: absolute;
  top: 50%;
  right: 28px;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 8px;
  z-index: 4;
}
.sg-dot {
  width: 4px;
  height: 4px;
  border-radius: 2px;
  background: rgba(255,253,248,0.2);
  cursor: pointer;
  transition: all 0.4s var(--ease-snap);
}
.sg-dot.active { background: var(--terracota); height: 22px; }
.sg-dot:hover:not(.active) { background: rgba(255,253,248,0.45); }

.sg-scroll-hint {
  position: absolute;
  bottom: 44px;
  right: 60px;
  z-index: 4;
  display: flex;
  align-items: center;
  gap: 8px;
  opacity: 0.45;
  pointer-events: none;
  transition: opacity 0.5s;
}
.sg-scroll-hint.hidden { opacity: 0; }
.sg-scroll-hint-text {
  font-family: 'Jost', sans-serif;
  font-size: 0.6rem;
  font-weight: 300;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(255,253,248,0.7);
  writing-mode: vertical-rl;
  transform: rotate(180deg);
}
.sg-scroll-hint-line {
  width: 1px;
  height: 40px;
  background: rgba(255,253,248,0.35);
  position: relative;
  overflow: hidden;
}
.sg-scroll-hint-line::after {
  content: '';
  position: absolute;
  top: -100%;
  left: 0; right: 0;
  height: 100%;
  background: rgba(255,253,248,0.7);
  animation: scrollLine 1.8s ease-in-out infinite;
}
@keyframes scrollLine {
  0%   { top: -100%; }
  100% { top: 100%; }
}

.space-lightbox {
  position: fixed;
  inset: 0;
  z-index: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 28px;
}
.space-lightbox-backdrop {
  position: absolute;
  inset: 0;
  border: 0;
  background:
    radial-gradient(circle at 50% 18%, rgba(157, 86, 61, 0.18), transparent 34%),
    rgba(13, 25, 24, 0.72);
  backdrop-filter: blur(16px) saturate(1.12);
  -webkit-backdrop-filter: blur(16px) saturate(1.12);
  cursor: zoom-out;
}
.space-lightbox-panel {
  position: relative;
  z-index: 1;
  width: min(620px, calc(100vw - 56px));
  max-height: calc(100svh - 56px);
  display: grid;
  grid-template-rows: auto minmax(0, 1fr) auto;
  gap: 14px;
  padding: 18px;
  border-radius: 22px;
  background: rgba(255, 253, 248, 0.1);
  border: 1px solid rgba(255, 253, 248, 0.18);
  box-shadow: 0 28px 90px rgba(0, 0, 0, 0.34);
  backdrop-filter: blur(20px) saturate(1.18);
  -webkit-backdrop-filter: blur(20px) saturate(1.18);
}
.space-lightbox-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  color: var(--crema);
}
.space-lightbox-head span {
  display: block;
  margin-bottom: 4px;
  font-family: 'Jost', sans-serif;
  font-size: 0.62rem;
  font-weight: 300;
  letter-spacing: 0.14em;
  color: var(--terra-light);
}
.space-lightbox-head h2 {
  margin: 0;
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(1.7rem, 3vw, 2.7rem);
  font-weight: 300;
  line-height: 1;
}
.space-lightbox-close {
  width: 48px;
  height: 48px;
  flex: 0 0 48px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  border: 1px solid rgba(255, 253, 248, 0.18);
  background: rgba(255, 253, 248, 0.08);
  color: var(--crema);
  cursor: pointer;
}
.space-lightbox-close svg {
  width: 22px;
  height: 22px;
}
.space-lightbox-image {
  min-height: 0;
  width: 100%;
  aspect-ratio: 3 / 4;
  overflow: hidden;
  border-radius: 16px;
  background: rgba(14, 26, 24, 0.7);
}
.space-lightbox-image img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}
.space-lightbox-thumbs {
  display: flex;
  gap: 10px;
  overflow-x: auto;
  padding: 2px 0 1px;
}
.space-lightbox-thumb {
  width: 92px;
  aspect-ratio: 1 / 1;
  flex: 0 0 92px;
  padding: 0;
  overflow: hidden;
  border-radius: 12px;
  border: 1px solid rgba(255, 253, 248, 0.18);
  background: rgba(255, 253, 248, 0.08);
  opacity: 0.58;
  cursor: pointer;
  transition: opacity 0.2s, border-color 0.2s, transform 0.2s;
}
.space-lightbox-thumb.active {
  opacity: 1;
  border-color: var(--terra-light);
  transform: translateY(-1px);
}
.space-lightbox-thumb img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}

/* ══════════════════════════════════════════════
   INVENTARIO — SPLIT ARCHIVE
══════════════════════════════════════════════ */
.inventario-section {
  display: grid;
  grid-template-columns: 40% 60%;
  min-height: 68vh;
}
.inv-left {
  background: var(--verde-dark);
  padding: 96px 64px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  overflow: hidden;
}
.inv-left::after {
  content: '12';
  font-family: 'Against', serif;
  font-size: clamp(9rem, 16vw, 20rem);
  line-height: 0.85;
  letter-spacing: -0.04em;
  color: rgba(255,253,248,0.04);
  position: absolute;
  bottom: -16px;
  right: -12px;
  pointer-events: none;
  user-select: none;
}
.inv-left-eyebrow {
  font-family: 'Jost', sans-serif;
  font-size: 0.6rem;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: var(--terra-light);
  margin-bottom: 26px;
  display: flex;
  align-items: center;
  gap: 12px;
  opacity: 0.7;
}
.inv-left-eyebrow::before {
  content: '';
  display: block;
  width: 22px;
  height: 1px;
  background: var(--terra-light);
  flex-shrink: 0;
}
.inv-left-display {
  font-family: 'Against', serif;
  font-size: clamp(2.6rem, 4vw, 4.6rem);
  line-height: 0.92;
  letter-spacing: -0.025em;
  color: var(--crema);
}
.inv-left-italic {
  font-family: 'Cormorant Garamond', serif;
  font-style: italic;
  font-weight: 300;
  font-size: clamp(2rem, 3.2vw, 3.8rem);
  line-height: 1;
  color: var(--terracota);
  margin-top: 8px;
}
.inv-left-body {
  font-family: 'Jost', sans-serif;
  font-size: 0.84rem;
  font-weight: 300;
  line-height: 1.8;
  color: rgba(255,253,248,0.5);
  max-width: 320px;
  margin-top: 24px;
}
.inv-left-tally {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 38px;
  padding-top: 26px;
  border-top: 1px solid rgba(255,253,248,0.1);
}
.inv-tally-num {
  font-family: 'Against', serif;
  font-size: 2.6rem;
  line-height: 1;
  letter-spacing: -0.03em;
  color: var(--terracota);
}
.inv-tally-label {
  font-family: 'Jost', sans-serif;
  font-size: 0.66rem;
  font-weight: 300;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(255,253,248,0.35);
  line-height: 1.25;
}
.inv-right {
  background: var(--crema);
  padding: 80px 64px 80px 68px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.inv-scroll-cue {
  display: none;
  justify-content: center;
  margin-bottom: 24px;
  color: var(--verde-mid);
}
.inv-scroll-cue svg {
  width: 28px;
  height: 28px;
  opacity: 0.7;
}
.inv-section-label {
  font-family: 'Jost', sans-serif;
  font-size: 0.72rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--terracota);
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 26px;
}
.inv-section-label::after {
  content: '';
  flex: 1;
  height: 1px;
  background: rgba(45,73,73,0.13);
}
.inv-cols {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 44px;
}
.inv-item {
  display: flex;
  align-items: baseline;
  gap: 12px;
  padding: 12px 0;
  border-bottom: 1px solid rgba(45,73,73,0.06);
  transition: transform 0.22s var(--ease-out);
  cursor: default;
}
.inv-item:hover { transform: translateX(5px); }
.inv-item-num {
  font-family: 'Against', serif;
  font-size: 1rem;
  line-height: 1;
  color: rgba(192,122,90,0.5);
  flex-shrink: 0;
  min-width: 24px;
  letter-spacing: -0.01em;
}
.inv-item-body { flex: 1; min-width: 0; }
.inv-item-name {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.06rem;
  font-weight: 400;
  color: var(--carbon);
  line-height: 1.2;
  display: block;
}
.inv-item-detail {
  font-family: 'Jost', sans-serif;
  font-size: 0.67rem;
  font-weight: 300;
  color: var(--muted);
  display: block;
  margin-top: 2px;
  line-height: 1.3;
}
.inv-addon {
  font-family: 'Jost', sans-serif;
  font-size: 0.55rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--terracota);
  background: rgba(192,122,90,0.09);
  padding: 2px 7px;
  border-radius: 99px;
  flex-shrink: 0;
  align-self: center;
}
.inv-footer-line {
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid rgba(45,73,73,0.1);
  font-family: 'Cormorant Garamond', serif;
  font-style: italic;
  font-weight: 300;
  font-size: clamp(0.95rem, 1.25vw, 1.15rem);
  color: var(--muted);
  line-height: 1.6;
}
.inv-footer-line em { color: var(--terracota); }

@media(prefers-reduced-motion:reduce){
  .txt-reveal{transition-duration:0.3s;}
  .img-reveal .reveal-cover{transition-duration:0.4s;}
  #sg-list{transition:none;}
  .sg-dot{transition:none;}
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



/* Route-owned responsive layer */
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

@media (min-width: 761px) {
  .sg-right {
    overscroll-behavior: contain;
  }
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
.nav-toggle span { position: relative; }
.nav-toggle span::before,
.nav-toggle span::after { position: absolute; left: 0; }
.nav-toggle span::before { top: -6px; }
.nav-toggle span::after { top: 6px; }
.nav-pill.nav-open .nav-toggle span { background: transparent; }
.nav-pill.nav-open .nav-toggle span::before { transform: translateY(6px) rotate(45deg); }
.nav-pill.nav-open .nav-toggle span::after { transform: translateY(-6px) rotate(-45deg); }

.espacios-page-react button.sg-list-item {
  appearance: none;
  border: 0;
  background: transparent;
  color: inherit;
  font: inherit;
  width: 100%;
  text-align: left;
}
.espacios-page-react button.sg-dot {
  appearance: none;
  border: 0;
  padding: 0;
}
.espacios-page-react .hero-folio-display {
  font-size: clamp(56px, 8vw, 104px) !important;
  line-height: 0.92 !important;
  letter-spacing: -0.025em !important;
}
.espacios-page-react .hero-folio-italic {
  font-size: clamp(52px, 7.5vw, 96px) !important;
  line-height: 1 !important;
}

@media (max-width: 1100px) {
  .hero-folio-grid { grid-template-columns: 1fr !important; }
  .stats-terra-grid { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
}

@media (max-width: 760px) {
  html { font-size: 16px; }
  html, body { max-width: 100%; overflow-x: clip; }
  img, video, canvas, svg { max-width: 100%; }
  section { scroll-margin-top: 88px; }
  #sg-section { scroll-margin-top: 0 !important; }

  #site-nav { padding: 10px 12px !important; }
  .nav-pill { height: 54px !important; padding: 0 10px 0 0 !important; align-items: center; }
  .nav-logo { display: flex; align-items: center; min-width: 0; transform: translateX(-10px); }
  .nav-logo img { height: 28px !important; max-width: 184px; }
  .nav-toggle { display: flex; flex-shrink: 0; }
  .nav-links, .nav-right { display: none !important; }
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
  .nav-pill.nav-open .nav-logo { transform: none; }
  .nav-pill.nav-open .nav-links { order: 3; width: 100%; display: flex !important; flex-direction: column; align-items: stretch; gap: 0; margin-top: 12px; padding-top: 10px; border-top: 1px solid rgba(255, 255, 255, 0.12); }
  .nav-pill.nav-open .nav-links a { min-height: 44px; display: flex; align-items: center; border-bottom: 1px solid rgba(255, 255, 255, 0.08); padding: 0; font-size: 0.74rem; color: rgba(255, 253, 248, 0.84); }
  .nav-pill.nav-open .nav-links a:last-child { border-bottom: 0; }
  .nav-pill.nav-open .nav-right { order: 4; width: 100%; display: flex !important; margin-top: 10px; }
  .nav-pill.nav-open .nav-cta { width: 100%; min-height: 44px; display: flex; align-items: center; justify-content: center; text-align: center; }

  .wa-float { width: 46px !important; height: 46px !important; right: 18px !important; bottom: 18px !important; }
  .btn-primary, .btn-accent, .btn-outline-dark, .btn-ghost, .nav-cta { min-height: 44px; display: inline-flex; align-items: center; justify-content: center; text-align: center; }
  .site-footer { padding: 56px 22px 30px !important; text-align: left !important; }
  .footer-grid { grid-template-columns: 1fr !important; gap: 36px !important; margin-bottom: 38px !important; justify-items: start !important; }
  .footer-brand { align-items: flex-start !important; }
  .footer-brand img { height: 56px !important; width: auto !important; }
  .footer-brand p { max-width: none !important; }
  .footer-social-group, .footer-contact-group { text-align: left !important; }
  .footer-bottom { flex-direction: column !important; align-items: flex-start !important; gap: 12px !important; }
  .arch-label, .hero-folio-ghost { display: none !important; }

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
    display: grid !important;
    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
    align-items: stretch;
    gap: 8px !important;
    margin-top: 30px !important;
  }

  .hero-folio-actions .btn-accent,
  .hero-folio-actions .btn-outline-dark {
    width: 100%;
    min-width: 0;
    padding-left: 12px !important;
    padding-right: 12px !important;
    font-size: var(--type-button, 0.75rem) !important;
    letter-spacing: var(--tracking-button, 0.1em) !important;
    white-space: normal;
  }

  .hero-folio-actions .btn-outline-dark svg {
    display: none;
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
    padding: 24px 22px 18px !important;
    border-right: 0 !important;
    overflow: visible !important;
  }

  .sg-right {
    order: 2;
    min-height: 0 !important;
    aspect-ratio: 1 / 1;
    height: auto !important;
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
    bottom: 38px !important;
  }

  #sg-caption-num {
    font-size: clamp(5.4rem, 24vw, 7rem) !important;
    color: rgba(255,253,248,0.16) !important;
    margin-bottom: -16px !important;
  }

  #sg-caption-name {
    font-size: 1.45rem !important;
    max-width: 16rem;
  }

  #sg-caption-sub {
    font-size: 0.58rem !important;
    line-height: 1.35 !important;
  }

  .sg-mobile-swipe-cue {
    position: absolute;
    right: 22px;
    bottom: 44px;
    z-index: 5;
    display: flex;
    align-items: center;
    gap: 2px;
    color: rgba(255,253,248,0.74);
    pointer-events: none;
  }

  .sg-mobile-swipe-cue svg {
    width: 20px;
    height: 20px;
    filter: drop-shadow(0 2px 8px rgba(14,26,24,0.44));
  }

  .sg-header {
    margin-bottom: 14px !important;
  }

  .sg-header-title {
    font-size: clamp(2rem, 10vw, 2.75rem) !important;
  }

  .sg-list-viewport {
    flex: 0 0 132px !important;
    height: 132px !important;
    min-height: 132px;
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
    height: 44px !important;
    min-height: 44px !important;
    padding: 0 !important;
    gap: 8px !important;
    opacity: 0.46;
  }

  .sg-item-num {
    opacity: 1 !important;
    min-width: 22px !important;
    font-size: 0.54rem !important;
  }

  .sg-item-name,
  .sg-list-item.near .sg-item-name,
  .sg-list-item.active .sg-item-name {
    font-size: 1.02rem !important;
    white-space: normal !important;
    overflow: visible !important;
    line-height: 1.08 !important;
  }

  .sg-list-item.active .sg-item-name {
    font-size: 1.38rem !important;
  }

  .sg-list-item.active .sg-item-bar {
    height: 20px !important;
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

  .espacios-page-react .hero-folio-display {
    font-size: clamp(34px, 10.8vw, 44px) !important;
    line-height: 0.92 !important;
    letter-spacing: 0 !important;
  }
  .espacios-page-react .hero-folio-italic {
    font-size: clamp(38px, 12vw, 54px) !important;
    line-height: 1 !important;
  }
}

@media (max-width: 520px) {
  .nav-logo img { max-width: 148px; }
  .hero-folio-display { font-size: clamp(3.8rem, 6.5vw, 7rem) !important; }
  .hero-folio-italic { font-size: clamp(3.2rem, 5.5vw, 5.8rem) !important; }
  .hero-photo-inner img { height: 240px !important; }
  .hero-folio-container,
  .stats-terra-container,
  .exp-cta-inner { padding-left: 18px !important; padding-right: 18px !important; }
  .stats-terra-grid { grid-template-columns: repeat(3, minmax(0, 1fr)) !important; }
}`;

