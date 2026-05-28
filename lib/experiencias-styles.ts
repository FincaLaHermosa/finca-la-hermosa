export const experienciasStyles = String.raw`
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
  --ease-out:     cubic-bezier(0.22,1,0.36,1);
  --ease-snap:    cubic-bezier(0.76,0,0.24,1);
}

*, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }
html { font-size:16px; scroll-behavior:smooth; }

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
  padding: 0 28px;
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
  background: rgba(28,46,44,0.92);
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
.nav-links a:hover { color: var(--crema); border-color: rgba(255,253,248,0.4); }
.nav-links a.active { color: var(--crema); border-color: rgba(192,122,90,0.6); }
.nav-right { display: flex; align-items: center; }
.nav-cta {
  font-family: 'Jost', sans-serif;
  font-size: 0.67rem; font-weight: 300;
  letter-spacing: 0.13em; text-transform: uppercase;
  color: var(--crema);
  background: rgba(255,253,248,0.09);
  border: 1px solid rgba(255,255,255,0.2);
  padding: 8px 20px; border-radius: 999px;
  cursor: pointer;
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
  letter-spacing: 0.1em; text-transform: uppercase; color: var(--verde);
  background: transparent; border: 1px solid var(--crema-border);
  padding: 13px 28px; border-radius: 999px; cursor: pointer;
  text-decoration: none; display: inline-block;
  transition: all 0.22s ease;
}
.btn-outline-dark:hover { background: var(--verde); color: var(--crema); border-color: var(--verde); transform: scale(1.04); }

.btn-ghost {
  font-family: 'Jost', sans-serif; font-size: 0.75rem; font-weight: 500;
  letter-spacing: 0.1em; text-transform: uppercase; color: rgba(255,253,248,0.75);
  background: transparent; border: 1px solid rgba(255,255,255,0.2);
  padding: 13px 28px; border-radius: 999px; cursor: pointer;
  text-decoration: none; display: inline-block;
  transition: all 0.22s ease;
}
.btn-ghost:hover { color: var(--crema); border-color: rgba(255,255,255,0.5); }

/* ── OVERLINE ─────────────────────────────────────────────── */
.overline {
  font-family: 'Jost', sans-serif;
  font-size: 0.67rem; font-weight: 500;
  letter-spacing: 0.16em; text-transform: uppercase;
  display: flex; align-items: center; gap: 10px;
}
.overline::before { content: ''; display: block; width: 20px; height: 1px; flex-shrink: 0; }
.overline-dark { color: var(--terracota); }
.overline-dark::before { background: var(--terra-light); }
.overline-light { color: rgba(232,196,173,0.8); }
.overline-light::before { background: rgba(232,196,173,0.5); }

/* ── ANIMATIONS ──────────────────────────────────────────── */
.txt-reveal {
  opacity: 0;
  transform: translateY(32px);
  transition: opacity 0.85s var(--ease-snap), transform 0.85s var(--ease-snap);
}
.txt-reveal.in { opacity: 1; transform: translateY(0); }
.txt-reveal[data-d="1"] { transition-delay: 0.10s; }
.txt-reveal[data-d="2"] { transition-delay: 0.22s; }
.txt-reveal[data-d="3"] { transition-delay: 0.36s; }
.txt-reveal[data-d="4"] { transition-delay: 0.52s; }
.txt-reveal[data-d="5"] { transition-delay: 0.68s; }

.img-reveal { position: relative; overflow: hidden; }
.img-reveal .reveal-cover {
  position: absolute; inset: 0; z-index: 2;
  background: var(--verde-dark);
  transform: translateY(0);
  transition: transform 1.3s var(--ease-snap);
}
.img-reveal.in .reveal-cover { transform: translateY(-100%); }
.img-reveal .img-bg {
  transform: scale(1.08);
  transition: transform 1.6s var(--ease-snap);
}
.img-reveal.in .img-bg { transform: scale(1); }

/* ── ARCH.MONO LABEL ─────────────────────────────────────── */
.arch-label {
  font-family: 'Against', serif;
  font-size: clamp(5rem, 8vw, 9rem);
  font-weight: 400; line-height: 0.9; letter-spacing: -0.03em;
  color: rgba(45,73,73,0.04); pointer-events: none; user-select: none;
  position: absolute;
}

/* ── PACKAGE CARDS ───────────────────────────────────────── */
.pkg-card {
  background: var(--crema); border-radius: 12px; overflow: hidden;
  box-shadow: 0 2px 8px rgba(45,73,73,0.07), 0 8px 28px rgba(45,73,73,0.06);
  transition: transform 0.28s var(--ease-out), box-shadow 0.28s ease;
  cursor: pointer; display: flex; flex-direction: column;
  border: 1px solid var(--crema-border);
}
.pkg-card:hover {
  transform: translateY(-6px) scale(1.01);
  box-shadow: 0 16px 48px rgba(45,73,73,0.13);
}
.pkg-img-wrap { height: 200px; overflow: hidden; position: relative; flex-shrink: 0; }
.pkg-img-wrap img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease; }
.pkg-card:hover .pkg-img-wrap img { transform: scale(1.06); }
.pkg-badge {
  position: absolute; top: 14px; left: 14px;
  background: var(--terracota); color: var(--crema);
  font-family: 'Jost', sans-serif; font-size: 0.6rem; font-weight: 500;
  letter-spacing: 0.1em; text-transform: uppercase;
  padding: 5px 12px; border-radius: 999px;
}
.pkg-body { padding: 24px 24px 26px; flex: 1; display: flex; flex-direction: column; gap: 7px; }
.pkg-over { font-family:'Jost',sans-serif; font-size:0.63rem; font-weight:300; letter-spacing:0.14em; text-transform:uppercase; color:var(--terracota); }
.pkg-title { font-family:'Cormorant Garamond',serif; font-size:1.5rem; font-weight:300; color:var(--verde-dark); line-height:1.15; }
.pkg-price { font-family:'Jost',sans-serif; font-size:1.15rem; font-weight:500; color:var(--verde); letter-spacing:-0.01em; margin-top:2px; }
.pkg-capacity { font-family:'Jost',sans-serif; font-size:0.73rem; font-weight:300; color:var(--muted); }
.pkg-divider { width:100%; height:1px; background:var(--crema-border); margin:10px 0; }
.pkg-features { list-style:none; display:flex; flex-direction:column; gap:7px; flex:1; }
.pkg-features li {
  font-family:'Jost',sans-serif; font-size:0.79rem; font-weight:300; color:var(--body-clr);
  display:flex; gap:8px; align-items:flex-start; line-height:1.45;
}
.pkg-features li::before { content:'·'; color:var(--terracota); font-size:1.2rem; line-height:0.9; flex-shrink:0; }
.pkg-btn-wrap { margin-top:18px; }
.pkg-btn {
  width:100%; padding:13px;
  font-family:'Jost',sans-serif; font-size:0.67rem; font-weight:300;
  letter-spacing:0.1em; text-transform:uppercase;
  color:var(--crema); background:var(--verde); border:none; border-radius:999px;
  cursor:pointer; transition:background 0.22s, transform 0.22s;
}
.pkg-btn:hover { background:var(--verde-mid); transform:scale(1.02); }

/* ── TABS ────────────────────────────────────────────────── */
.tabs-bar {
  display: flex; gap: 6px; flex-wrap: wrap;
}
.tab-btn {
  font-family: 'Jost', sans-serif; font-size: 0.72rem; font-weight: 400;
  letter-spacing: 0.05em; text-transform: uppercase;
  padding: 9px 20px; border-radius: 999px;
  border: 1px solid rgba(90,80,64,0.25);
  color: var(--body-clr); background: transparent; cursor: pointer;
  transition: all 0.22s;
}
.tab-btn:hover { border-color: var(--terracota); color: var(--terracota); }
.tab-btn.active { background: var(--verde); color: var(--crema); border-color: var(--verde); }

/* ── PKG GRID ────────────────────────────────────────────── */
#pkg-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}
.pkg-card.hidden { display: none; }

/* ── ADDON CARDS ─────────────────────────────────────────── */
.addon-card {
  background: var(--crema);
  border: 1px solid var(--crema-border);
  border-radius: 12px;
  padding: 28px 24px;
  display: flex; flex-direction: column; gap: 12px;
  transition: border-color 0.22s, box-shadow 0.22s, transform 0.22s;
}
.addon-card:hover {
  border-color: var(--terra-light);
  box-shadow: 0 6px 24px rgba(192,122,90,0.1);
  transform: translateY(-3px);
}
.addon-icon { width: 36px; height: 36px; color: var(--terracota); }
.addon-name { font-family:'Cormorant Garamond',serif; font-size:1.2rem; font-weight:400; color:var(--carbon); line-height:1.2; }
.addon-desc { font-family:'Jost',sans-serif; font-size:0.79rem; font-weight:300; color:var(--muted); line-height:1.6; flex:1; }
.addon-price { font-family:'Jost',sans-serif; font-size:0.9rem; font-weight:500; color:var(--verde); letter-spacing:-0.01em; }

/* ── CTA CARDS ───────────────────────────────────────────── */
.cta-card {
  padding: 28px 24px;
  background: rgba(255,255,255,0.07);
  backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.11);
  border-radius: 12px;
  display: flex; flex-direction: column; gap: 12px; align-items: flex-start;
  transition: background 0.26s, border-color 0.26s;
}
.cta-card:hover { background: rgba(255,255,255,0.11); border-color: rgba(255,255,255,0.18); }
.cta-card-icon { width: 26px; height: 26px; color: rgba(255,253,248,0.7); }
.cta-card-title { font-family:'Cormorant Garamond',serif; font-size:1.15rem; font-weight:400; color:#fff; }
.cta-card-sub { font-family:'Jost',sans-serif; font-size:0.75rem; font-weight:300; color:rgba(255,253,248,0.52); line-height:1.65; flex:1; }



@media (prefers-reduced-motion: reduce) {
  .txt-reveal { transition-duration: 0.3s; }
  .img-reveal .reveal-cover { transition-duration: 0.4s; }
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

.pkg-features li::before {
  content: "";
  width: 3px;
  height: 3px;
  margin-top: 0.62em;
  border-radius: 999px;
  background: var(--terracota);
  flex: 0 0 3px;
}

@media (max-width: 760px) {
  html { font-size: 16px; }
  html, body { max-width: 100%; overflow-x: clip; }
  img, video, canvas, svg { max-width: 100%; }
  section { scroll-margin-top: 88px; }

  #site-nav { padding: 10px 12px !important; }
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
  .nav-pill.nav-open .nav-links a:last-child { border-bottom: 0; }
  .nav-pill.nav-open .nav-right { order: 4; width: 100%; display: flex !important; margin-top: 10px; }
  .nav-pill.nav-open .nav-cta { width: 100%; min-height: 44px; display: flex; align-items: center; justify-content: center; text-align: center; }

  .wa-float { width: 46px !important; height: 46px !important; right: 18px !important; bottom: 18px !important; }
  .btn-primary, .btn-accent, .btn-outline-dark, .btn-ghost, .nav-cta {
    min-height: 44px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .site-footer { padding: 56px 22px 30px !important; text-align: left !important; }
  .footer-grid { grid-template-columns: 1fr !important; gap: 36px !important; margin-bottom: 38px !important; justify-items: start !important; }
  .footer-brand { align-items: flex-start !important; }
  .footer-brand img { height: 56px !important; width: auto !important; }
  .footer-brand p { max-width: none !important; }
  .footer-social-group, .footer-contact-group { text-align: left !important; }
  .footer-bottom { flex-direction: column !important; align-items: flex-start !important; gap: 12px !important; }
  .arch-label { display: none !important; }

 .exp-hero {
    min-height: auto !important;
    padding-top: 86px !important;
    align-items: flex-start !important;
  }

  .experiencias-page-react .txt-reveal,
  .experiencias-page-react .img-reveal,
  .experiencias-page-react .img-reveal .img-bg {
    opacity: 1 !important;
    transform: none !important;
  }

  .experiencias-page-react .img-reveal .reveal-cover {
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

  .experiencias-page-react .exp-addons-grid,
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
    width: 100% !important;
    max-width: 100% !important;
    overflow: hidden;
    box-sizing: border-box;
  }

  .exp-cta-inner > div {
    min-width: 0;
    width: 100%;
  }

  .exp-cta-title-main {
    font-size: clamp(2.5rem, 9vw, 3.2rem) !important;
    line-height: 0.92 !important;
    letter-spacing: 0 !important;
    max-width: 100%;
    overflow-wrap: normal;
  }

  .exp-cta-title-sub {
    font-size: clamp(2.8rem, 5vw, 5rem) !important;
    line-height: 1 !important;
    max-width: 100%;
  }

  .exp-cta-proof {
    flex-direction: column !important;
    align-items: flex-start !important;
    gap: 8px !important;
  }

  .exp-cta-card-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
    gap: 14px !important;
  }

  .cta-card,
  .exp-cta-card-grid .cta-card {
    width: 100% !important;
    max-width: 100% !important;
    min-width: 0 !important;
    padding: 18px 14px !important;
    overflow: hidden;
  }

  .cta-card-sub,
  .exp-cta-card-grid .cta-card-sub {
    display: none !important;
  }

  .cta-card .btn-accent,
  .cta-card button {
    width: auto;
    max-width: 100%;
    min-height: 42px;
    white-space: normal;
    padding-left: 12px !important;
    padding-right: 12px !important;
  }
}

@media (max-width: 760px) {
  .experiencias-page-react div.exp-addons-grid.txt-reveal[style*="grid-template-columns"] {
    display: grid !important;
    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
    gap: 10px !important;
  }

  .experiencias-page-react div.cta-small-grid.exp-cta-card-grid[style*="grid-template-columns"] {
    display: grid !important;
    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
    gap: 14px !important;
  }

  .experiencias-page-react .cta-small-grid .cta-card {
    padding: 18px 14px !important;
    min-width: 0;
  }

  .experiencias-page-react .cta-small-grid .cta-card-title {
    font-size: 1rem !important;
    line-height: 1.15 !important;
  }

  .experiencias-page-react .cta-small-grid .cta-card-sub {
    display: none !important;
  }

  .experiencias-page-react .cta-small-grid .cta-card button {
    width: auto;
    max-width: 100%;
    min-height: 42px;
    padding-left: 12px !important;
    padding-right: 12px !important;
  }

  .experiencias-page-react .cta-card .btn-accent {
    width: auto;
    max-width: 100%;
    min-height: 42px;
    padding-left: 12px !important;
    padding-right: 12px !important;
    text-align: center;
  }
}

@media (max-width: 520px) {
  .nav-logo img { max-width: 148px; }
  .exp-container,
  .exp-cta-inner,
  .exp-hero-inner {
    padding-left: 18px !important;
    padding-right: 18px !important;
  }
}`;

