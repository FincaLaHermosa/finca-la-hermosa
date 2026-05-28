export const homeStyles = String.raw`
/* â”€â”€ TOKENS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
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
  background: var(--verde-dark);
  color: var(--body-clr);
  overflow: auto;
}

.snap-section {
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/* â”€â”€ NAVBAR PILL â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
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
.nav-links a:hover { color: var(--crema); border-color: rgba(255,253,248,0.4); }
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
  transition: all 0.22s ease;
}
.nav-cta:hover { background: rgba(192,122,90,0.9); border-color: rgba(192,122,90,0.6); }

/* â”€â”€ WA FLOAT â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
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

/* â”€â”€ BUTTONS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
.btn-glass {
  font-family: 'Jost', sans-serif; font-size: 0.75rem; font-weight: 400;
  letter-spacing: 0.13em; text-transform: uppercase; color: rgba(255,253,248,0.92);
  background: rgba(255,253,248,0.1); backdrop-filter: blur(16px);
  border: 1px solid rgba(255,255,255,0.18); padding: 13px 28px; border-radius: 999px;
  cursor: pointer; box-shadow: inset 0 1px 0 rgba(255,255,255,0.1);
  transition: all 0.22s ease;
}
.btn-glass:hover { background: rgba(255,253,248,0.18); transform: scale(1.04); }

.btn-primary {
  font-family: 'Jost', sans-serif; font-size: 0.75rem; font-weight: 500;
  letter-spacing: 0.1em; text-transform: uppercase;
  color: var(--crema); background: var(--verde); border: none;
  padding: 13px 28px; border-radius: 999px; cursor: pointer;
  transition: all 0.22s ease;
}
.btn-primary:hover { background: var(--verde-mid); transform: scale(1.04); }

.btn-accent {
  font-family: 'Jost', sans-serif; font-size: 0.75rem; font-weight: 500;
  letter-spacing: 0.1em; text-transform: uppercase;
  color: var(--crema); background: var(--terracota); border: none;
  padding: 13px 28px; border-radius: 999px; cursor: pointer;
  transition: all 0.22s ease;
}
.btn-accent:hover { background: #a8664a; transform: scale(1.04); }
.btn-wa { background: #128c4a !important; }
.btn-wa:hover { background: #1ebe5d !important; }

.btn-outline {
  font-family: 'Jost', sans-serif; font-size: 0.75rem; font-weight: 400;
  letter-spacing: 0.1em; text-transform: uppercase; color: rgba(255,253,248,0.65);
  background: transparent; border: 1px solid rgba(255,255,255,0.22);
  padding: 13px 28px; border-radius: 999px; cursor: pointer;
  transition: all 0.22s ease;
}
.btn-outline:hover { color: var(--crema); border-color: rgba(255,255,255,0.5); transform: scale(1.04); }

.btn-outline-dark {
  font-family: 'Jost', sans-serif; font-size: 0.75rem; font-weight: 500;
  letter-spacing: 0.1em; text-transform: uppercase; color: var(--terracota);
  background: transparent; border: 1px solid var(--terra-light);
  padding: 13px 28px; border-radius: 999px; cursor: pointer;
  transition: all 0.22s ease;
}
.btn-outline-dark:hover { background: var(--terracota); color: var(--crema); transform: scale(1.04); }

/* â”€â”€ OVERLINE â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
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

/* â”€â”€ SECTION NUMBER â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
.sec-num {
  font-family: 'Jost', sans-serif;
  font-size: 0.62rem; font-weight: 300;
  letter-spacing: 0.08em; color: var(--muted);
  display: flex; flex-direction: column; gap: 2px; line-height: 1.2;
}

/* â”€â”€ ARCH.MONO BG LABEL â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
.arch-label {
  font-family: 'Against', serif;
  font-size: clamp(5rem,8vw,9rem);
  font-weight: 400; line-height: 0.9; letter-spacing: -0.03em;
  color: rgba(255,253,248,0.06); pointer-events: none; user-select: none;
  position: absolute;
}

/* â”€â”€ ANIMATIONS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
@keyframes arrow-pulse {
  0%, 100% { transform: translateY(0);   opacity: 0.5; }
  50%       { transform: translateY(7px); opacity: 1;   }
}
.scroll-arrow { animation: arrow-pulse 1.8s ease-in-out infinite; }

@keyframes breathe {
  0%   { transform: scale(1.04); }
  100% { transform: scale(1.14); }
}
.bg-breathe { animation: breathe 20s ease-in-out infinite alternate; }

.txt-reveal {
  opacity: 0;
  transform: translateY(32px);
  transition: opacity 0.68s var(--ease-snap), transform 0.72s var(--ease-snap);
}
.txt-reveal.in { opacity: 1; transform: translateY(0); }
.txt-reveal[data-d="1"] { transition-delay: 0.08s; }
.txt-reveal[data-d="2"] { transition-delay: 0.18s; }
.txt-reveal[data-d="3"] { transition-delay: 0.30s; }
.txt-reveal[data-d="4"] { transition-delay: 0.42s; }
.txt-reveal[data-d="5"] { transition-delay: 0.54s; }

.illum-word {
  display: inline-block;
  color: rgba(255,253,248,0.18);
  transition: color 0.5s ease;
}
.illum-word.lit { color: var(--crema); }

.img-reveal { position: relative; overflow: hidden; }
.img-reveal .reveal-cover {
  position: absolute; inset: 0; z-index: 2;
  background: var(--verde-dark);
  transform: translateY(0);
  transition: transform 1.3s var(--ease-snap);
}
.img-reveal.in .reveal-cover { transform: translateY(-100%); }
.img-reveal .img-bg {
  transform: scale(1.12);
  transition: transform 1.6s var(--ease-snap);
}
.img-reveal.in .img-bg { transform: scale(1); }

/* â”€â”€ GLASS CARD â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
.glass-card {
  background: rgba(39,63,61,0.52);
  backdrop-filter: blur(18px) saturate(1.3);
  -webkit-backdrop-filter: blur(18px) saturate(1.3);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 14px;
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.08), 0 8px 32px rgba(0,0,0,0.2);
}

/* â”€â”€ CARD LIGHT â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
.card-light {
  background: var(--crema);
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(45,73,73,0.07), 0 8px 24px rgba(45,73,73,0.05);
  overflow: hidden;
  transition: transform 0.26s var(--ease-out), box-shadow 0.26s ease;
}
.card-light:hover {
  transform: translateY(-5px) scale(1.01);
  box-shadow: 0 12px 40px rgba(45,73,73,0.13);
}

/* â”€â”€ SCROLL INDICATOR â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
.scroll-indicator {
  position: absolute; bottom: 28px; left: 50%; transform: translateX(-50%);
  display: flex; flex-direction: column; align-items: center; gap: 6px; z-index: 3;
}
.scroll-indicator span {
  font-family: 'Jost', sans-serif; font-size: 0.56rem; font-weight: 300;
  letter-spacing: 0.16em; text-transform: uppercase; color: rgba(255,253,248,0.3);
}
.scroll-line {
  width: 1px; height: 36px;
  background: linear-gradient(to bottom, rgba(255,253,248,0.3), transparent);
  animation: scrollpulse 2s ease-in-out infinite;
}
@keyframes scrollpulse { 0%,100%{opacity:0.3} 50%{opacity:0.9} }

/* â”€â”€ TABS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
.tabs-bar {
  display: flex; gap: 6px; justify-content: center;
  padding: 0 0 32px;
}
.tab-btn {
  font-family: 'Jost', sans-serif; font-size: 0.72rem; font-weight: 500;
  letter-spacing: 0.06em; text-transform: uppercase;
  padding: 9px 20px; border-radius: 999px;
  border: 1px solid rgba(90,80,64,0.28);
  color: var(--body-clr); background: transparent; cursor: pointer;
  transition: all 0.22s;
}
.tab-btn:hover { border-color: var(--terracota); color: var(--terracota); }
.tab-btn.active { background: var(--verde); color: var(--crema); border-color: var(--verde); }
.tab-btn--special { background: transparent; color: var(--terracota); border-color: var(--terracota); }
.tab-btn--special:hover { background: transparent; border-color: var(--terracota); color: var(--terracota); opacity: 0.75; }
.tab-btn--special.active { background: var(--verde); border-color: var(--verde); color: var(--crema); opacity: 1; }

.tab2-panel { display: none; }
.tab2-panel.active { display: grid; grid-template-columns: 56fr 44fr; gap: 64px; align-items: center; }

/* â”€â”€ PKG CARD â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
.pkg-card {
  background: var(--crema); border-radius: 10px; overflow: hidden;
  box-shadow: 0 2px 8px rgba(45,73,73,0.07), 0 8px 24px rgba(45,73,73,0.05);
  transition: transform 0.26s var(--ease-out); cursor: pointer;
  display: flex; flex-direction: column;
}
.pkg-card:hover { transform: translateY(-5px) scale(1.01); }
.pkg-img-wrap { height: 190px; overflow: hidden; position: relative; }
.pkg-img-inner { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease; }
.pkg-card:hover .pkg-img-inner { transform: scale(1.06); }
.pkg-body { padding: 22px 22px 24px; flex: 1; display: flex; flex-direction: column; gap: 6px; }
.pkg-over { font-family:'Jost',sans-serif; font-size:0.65rem; font-weight:300; letter-spacing:0.14em; text-transform:uppercase; color:var(--terracota); }
.pkg-title { font-family:'Cormorant Garamond',serif; font-size:1.45rem; font-weight:300; color:var(--verde-dark); line-height:1.2; }
.pkg-price { font-family:'Jost',sans-serif; font-size:1.1rem; font-weight:500; color:var(--verde); letter-spacing:-0.01em; }
.pkg-capacity { font-family:'Jost',sans-serif; font-size:0.88rem; font-weight:300; color:rgba(90,80,64,0.82); line-height:1.5; }
.pkg-divider { width:100%; height:1px; background:var(--crema-border); margin:10px 0; }
.pkg-features { list-style:none; display:flex; flex-direction:column; gap:7px; flex:1; }
.pkg-features li {
  font-family:'Jost',sans-serif; font-size:14.08px; font-weight:300; color:rgba(90,80,64,0.78);
  display:flex; gap:8px; align-items:flex-start; line-height:1.8;
}
.pkg-features li::before {
  content: "";
  width: 3px;
  height: 3px;
  margin-top: 0.68em;
  border-radius: 50%;
  background: var(--terracota);
  flex-shrink: 0;
}
.pkg-btn-wrap { margin-top:16px; }
.pkg-btn {
  width:100%; padding:12px;
  font-family:'Jost',sans-serif; font-size:0.69rem; font-weight:300;
  letter-spacing:0.1em; text-transform:uppercase;
  color:var(--crema); background:var(--verde); border:none; border-radius:999px;
  cursor:pointer; transition:background 0.22s, transform 0.22s;
}
.pkg-btn:hover { background:var(--verde-mid); transform:scale(1.02); }

/* â”€â”€ PROCESS STEP â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
.proc-step { display:flex; flex-direction:column; gap:18px; padding:0 44px; border-right:1px solid var(--crema-border); }
.proc-step:last-child { border-right:none; }
.proc-step:first-child { padding-left:0; }
.proc-step:last-child  { padding-right:0; }
.proc-num { font-family:'Against',serif; font-size:3.8rem; font-weight:400; color:var(--terracota); line-height:1; opacity:0.8; }
.proc-divider { width:100%; height:1px; background:var(--terracota); opacity:0.25; }
.proc-icon { width:28px; height:28px; color:var(--terracota); }
.proc-title { font-family:'Cormorant Garamond',serif; font-size:1.5rem; font-weight:400; color:var(--carbon); line-height:1.2; }
.proc-body { font-family:'Jost',sans-serif; font-size:0.85rem; font-weight:300; line-height:1.8; color:var(--body-clr); }

/* â”€â”€ PROC TIMELINE â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
.proc-timeline { display:flex; flex-direction:column; gap:28px; }
.proc-track-wrap { position:relative; }
.proc-track {
  position:absolute; top:50%; left:20px; right:calc(100%/3 - 20px); height:1.5px;
  background:var(--verde); transform:translateY(-50%); z-index:0;
}
.proc-track-fill {
  position:absolute; left:0; top:0; height:100%; width:0;
  background:var(--terracota); border-radius:2px;
}
.proc-dots-row { position:relative; z-index:1; width:100%; display:grid; grid-template-columns:repeat(3,1fr); align-items:center; }
.proc-dot { display:flex; justify-content:flex-start; align-items:center; }
.proc-dot { }
.proc-dot-inner {
  width:80px; height:80px; border-radius:50%;
  border:1px solid var(--verde); background:var(--crema-warm);
  display:flex; align-items:center; justify-content:center;
  font-family:'Against',serif; font-size:0.85rem; color:var(--verde);
  transition: transform 0.72s var(--ease-out),
              background 0.5s ease, border-color 0.5s ease,
              color 0.4s ease, font-size 0.8s ease;
}
.proc-dot.active .proc-dot-inner {
  transform: scale(1.4);
  font-size:2rem;
  background:var(--terracota); border-color:var(--terracota); color:#fff;
}
.proc-cols { display:grid; grid-template-columns:repeat(3,1fr); gap:0; margin-top:8px; }
.proc-col { display:flex; flex-direction:column; gap:14px; padding:0 44px; border-right:1px solid var(--crema-border); }
.proc-col:first-child { padding-left:0; }
.proc-col:last-child { padding-right:0; border-right:none; }

/* â”€â”€ S5 COTIZADOR â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
.s5-opt {
  padding:20px 18px; background:rgba(255,255,255,0.05); border:1.5px solid rgba(255,255,255,0.1);
  border-radius:8px; display:flex; flex-direction:column; gap:10px; cursor:pointer;
  transition:all 0.22s; text-align:left;
}
.s5-opt:hover { border-color:var(--terracota); background:rgba(192,122,90,0.08); }
.s5-opt.selected { border-color:var(--terracota); background:rgba(192,122,90,0.13); }
.s5-opt-icon { color:rgba(255,253,248,0.6); width:20px; height:20px; }
.s5-opt-label { font-family:'Jost',sans-serif; font-size:0.83rem; font-weight:400; color:var(--crema); letter-spacing:0.02em; }

/* â”€â”€ TESTIMONIOS â€” POST-IT â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
.postit {
  position:relative;
  padding:28px 24px 22px;
  border-radius:3px;
  display:flex; flex-direction:column; gap:18px;
  box-shadow:
    2px 2px 0 rgba(0,0,0,0.04),
    4px 6px 12px rgba(45,35,20,0.10),
    0 18px 36px rgba(45,35,20,0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.postit:hover {
  transform: rotate(0deg) translateY(-6px) !important;
  box-shadow:
    2px 2px 0 rgba(0,0,0,0.04),
    6px 14px 28px rgba(45,35,20,0.16),
    0 28px 52px rgba(45,35,20,0.10);
  z-index:10;
}
.postit-pin {
  position:absolute; top:-10px; left:50%; transform:translateX(-50%);
  width:16px; height:16px; border-radius:50%;
  background:var(--pin, var(--terracota));
  box-shadow:0 2px 6px rgba(0,0,0,0.22), inset 0 1px 0 rgba(255,255,255,0.3);
}
.postit-pin::after {
  content:''; position:absolute; bottom:-4px; left:50%; transform:translateX(-50%);
  width:2px; height:6px; background:rgba(0,0,0,0.15); border-radius:1px;
}
.postit-q {
  font-family:'Cormorant Garamond',serif;
  font-size:1.25rem; font-style:italic; font-weight:400;
  line-height:1.5; color:var(--verde); flex:1;
}
.postit-author {
  border-top:1px solid rgba(90,80,64,0.12);
  padding-top:12px;
  display:flex; flex-direction:column; gap:3px;
}
.postit-author strong {
  font-family:'Jost',sans-serif; font-size:0.78rem; font-weight:500; color:var(--carbon);
}
.postit-author span {
  font-family:'Jost',sans-serif; font-size:0.68rem; font-weight:300; color:var(--muted);
}

/* â”€â”€ CTA CARD â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
.cta-card {
  padding:30px 26px;
  background:rgba(255,255,255,0.07);
  backdrop-filter:blur(12px); -webkit-backdrop-filter:blur(12px);
  border:1px solid rgba(255,255,255,0.11);
  border-radius:12px;
  display:flex; flex-direction:column; gap:13px; align-items:flex-start;
  transition:background 0.26s, border-color 0.26s;
}
.cta-card:hover { background:rgba(255,255,255,0.11); border-color:rgba(255,255,255,0.18); }
.cta-card-icon { width:26px; height:26px; color:rgba(255,253,248,0.75); }
.cta-card-title { font-family:'Cormorant Garamond',serif; font-size:1.15rem; font-weight:400; color:#fff; }
.cta-card-sub { font-family:'Jost',sans-serif; font-size:0.75rem; font-weight:400; color:rgba(255,253,248,0.52); line-height:1.65; flex:1; }

/* â”€â”€ DOT NAV â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
.dot-nav { display:flex; align-items:center; gap:8px; }
.dot { width:7px; height:7px; border-radius:50%; background:var(--crema-border); border:none; padding:0; cursor:pointer; transition:all 0.22s; }
.dot.active { background:var(--terracota); width:22px; border-radius:4px; }


/* â”€â”€ PHOTO UTIL â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
.photo-cover {
  width:100%; height:100%;
  object-fit:cover;
  position:absolute; inset:0;
}

@media (prefers-reduced-motion:reduce) {
  .txt-reveal { transition-duration:0.3s; }
  .img-reveal .reveal-cover { transition-duration:0.4s; }
  .bg-breathe { animation-duration:30s; }
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

  /* TÃ­tulos con space-between: apila verticalmente en mobile */
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

  /* Testimonios: copy mÃ¡s pequeÃ±o en mobile */
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

  /* Proceso: copy derecho â†’ izquierda en mobile */
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

  /* Cotizador: tÃ­tulo no se desborda */
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

  /* CTA: "Tu momento perfecto" mÃ¡s chico */
  .snap-section[data-sec="cta"] #illum-text {
    font-size: clamp(2.5rem, 9vw, 3.2rem) !important;
  }


  /* Cotizador: botones quiz en 2 columnas con gap reducido */
  #q-grid {
    grid-template-columns: 1fr 1fr !important;
    gap: 8px !important;
  }

  /* Cotizador: acerca solo "en 3 minutos" al tÃ­tulo */
  .snap-section[data-sec="cotizador"] [style*="flex-direction:column"][style*="gap:20px"] > [style*="Cormorant Garamond"] {
    margin-top: -12px !important;
  }


  /* Carrusel espacios: sin padding para llegar a los bordes */
  #s3-carousel {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }

  /* Cards mÃ¡s angostas en mobile para mostrar peek de la siguiente */
  #s3-carousel > a,
  #s3-carousel > div {
    flex: 0 0 78vw !important;
    width: 78vw !important;
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

  .arch-label {
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
  .proc-cols {
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

}




  .home-page-react .btn-glass,
  .home-page-react .btn-outline,
  .home-page-react .btn-outline-dark,
  .home-page-react .btn-primary,
  .home-page-react .btn-accent,
  .home-page-react .pkg-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
  }

  .home-page-react .s5-opt {
    appearance: none;
    width: 100%;
  }

  .home-page-react .quote-main-cta {
    white-space: nowrap;
    text-decoration: none;
    width: fit-content;
  }

  .home-page-react .quote-video-bg {
    position: absolute;
    inset: 0;
    overflow: hidden;
    background: var(--verde-dark);
  }

  .home-page-react .quote-video-media,
  .home-page-react .quote-video-poster {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  .home-page-react .quote-video-media {
    z-index: 1;
  }

  .home-page-react .quote-video-poster {
    z-index: 0;
    opacity: 0.9;
    transform: scale(1.04);
  }

  .home-page-react .quote-video-wash {
    position: absolute;
    inset: 0;
    z-index: 2;
    background: transparent;
    pointer-events: none;
  }

  .home-page-react .quote-video-section .overline::before {
    background: rgba(232,196,173,0.58);
  }

  .home-page-react .quote-glass-card {
    width: min(560px, 100%);
    min-height: 520px;
    padding: 56px 48px 46px;
    border: 1px solid rgba(255,253,248,0.2);
    border-radius: 18px;
    background: rgba(25,43,41,0.46);
    backdrop-filter: blur(24px) saturate(1.35);
    -webkit-backdrop-filter: blur(24px) saturate(1.35);
    box-shadow:
      0 34px 96px rgba(0,0,0,0.34),
      inset 0 1px 0 rgba(255,255,255,0.12);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 28px;
  }

  .home-page-react .quote-card-title {
    font-family: 'Against', serif;
    font-size: clamp(2.35rem, 3.3vw, 3.9rem);
    font-weight: 400;
    line-height: 0.9;
    letter-spacing: -0.025em;
    color: var(--crema);
  }

  .home-page-react .quote-card-subtitle {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(1.85rem, 2.65vw, 3rem);
    font-style: italic;
    font-weight: 300;
    line-height: 1;
    color: var(--terracota);
    margin-top: 6px;
  }

  .home-page-react .quote-card-copy {
    font-family: 'Jost', sans-serif;
    max-width: 410px;
    font-size: 0.98rem;
    font-weight: 300;
    line-height: 1.9;
    color: rgba(255,253,248,0.72);
  }

  .home-page-react .proc-dot.active:nth-child(1) .proc-dot-inner { transition-delay: 100ms; }
  .home-page-react .proc-dot.active:nth-child(2) .proc-dot-inner { transition-delay: 1100ms; }
  .home-page-react .proc-dot.active:nth-child(3) .proc-dot-inner { transition-delay: 2100ms; }

  .home-page-react .proc-timeline {
    gap: 0;
  }

  .home-page-react .proc-cols {
    gap: 34px;
    margin-top: 0;
  }

  .home-page-react .proc-col {
    position: relative;
    gap: 12px;
    padding: 0 34px 0 0;
    border-right: 0;
  }

  .home-page-react .proc-col:not(:last-child)::after {
    content: "";
    position: absolute;
    top: 18px;
    right: 0;
    width: 1px;
    height: calc(100% - 18px);
    background: linear-gradient(to bottom, rgba(192,122,90,0.42), rgba(237,230,214,0.22));
  }

  .home-page-react .proc-num {
    font-family: 'Against', serif;
    font-size: clamp(4.6rem, 7vw, 7.6rem);
    font-weight: 400;
    line-height: 0.78;
    letter-spacing: -0.04em;
    color: rgba(192,122,90,0.32);
    margin-bottom: 12px;
  }

  .home-page-react .proc-icon {
    width: 22px;
    height: 22px;
    color: var(--terracota);
    opacity: 0.72;
  }

  .home-page-react .proc-title {
    font-size: clamp(1.45rem, 2vw, 1.9rem);
  }

  @media (min-width: 761px) {
    .home-page-react .home-experiences-heading,
    .home-page-react .home-experiences-tabs {
      transform: translateY(-44px);
    }

    .home-page-react .home-experiences-tabs {
      margin-bottom: 22px;
    }
  }

  @media (max-width: 760px) {
    .home-page-react {
      --home-mobile-gutter: 18px;
    }

    .home-page-react .snap-section > div[style*="padding: 0 52px"],
    .home-page-react .snap-section > div[style*="padding:0 52px"] {
      padding-left: var(--home-mobile-gutter) !important;
      padding-right: var(--home-mobile-gutter) !important;
    }

    .home-page-react .snap-section[data-sec="hero"] > div[style*="max-width: 1500"],
    .home-page-react .snap-section[data-sec="hero"] > div[style*="max-width:1500"],
    .home-page-react .quote-video-inner,
    .home-page-react .cta-outer {
      padding-left: var(--home-mobile-gutter) !important;
      padding-right: var(--home-mobile-gutter) !important;
    }

    .home-page-react .tabs-bar,
    .home-page-react .snap-section[data-sec="testimonios"] [style*="grid-template-columns: repeat(4"],
    .home-page-react .snap-section[data-sec="testimonios"] [style*="grid-template-columns:repeat(4"],
    .home-page-react .snap-section[data-sec="paquetes"] .pkg-featured-grid {
      margin-left: calc(var(--home-mobile-gutter) * -1) !important;
      margin-right: calc(var(--home-mobile-gutter) * -1) !important;
      padding-left: var(--home-mobile-gutter) !important;
      padding-right: var(--home-mobile-gutter) !important;
      width: calc(100% + (var(--home-mobile-gutter) * 2)) !important;
    }

    .home-page-react .home-experiences-tabs {
      flex-direction: column !important;
      align-items: stretch !important;
      justify-content: flex-start !important;
      gap: 10px !important;
      overflow: visible !important;
      max-width: 100% !important;
      width: 100% !important;
      margin-left: 0 !important;
      margin-right: 0 !important;
      margin-bottom: 26px !important;
      padding-left: 0 !important;
      padding-right: 0 !important;
    }

    .home-page-react .home-experiences-tabs .tab-btn {
      width: 100% !important;
      justify-content: center !important;
      white-space: normal !important;
    }

    .home-page-react [data-sec="cotizador"] > div[style*="grid-template-columns"],
    .home-page-react [data-sec="cta"] .cta-outer {
      grid-template-columns: 1fr !important;
      gap: 36px !important;
    }

    .home-page-react .quote-gateway {
      min-height: auto !important;
      padding: 84px 0 64px;
    }

    .home-page-react .quote-video-inner {
      align-items: start !important;
    }

    .home-page-react .quote-video-wash {
      background: transparent;
    }

    .home-page-react .quote-glass-card {
      min-height: auto;
      padding: 34px 24px 30px;
      gap: 22px;
    }

    .home-page-react .quote-main-cta {
      width: 100%;
    }

    .home-page-react .process-compact-section {
      min-height: auto !important;
      padding: 72px 0 64px;
    }

    .home-page-react .process-compact-header {
      margin-bottom: 34px !important;
    }

    .home-page-react .process-compact-cta {
      margin-top: 30px !important;
    }

    .home-page-react .proc-cols {
      gap: 28px !important;
    }

    .home-page-react .proc-col {
      padding: 0 0 26px !important;
      border-bottom: 1px solid var(--crema-border) !important;
    }

    .home-page-react .proc-col:not(:last-child)::after {
      display: none;
    }

    .home-page-react .proc-num {
      font-size: clamp(4rem, 22vw, 5.8rem);
      margin-bottom: -10px;
    }

    .home-page-react .proc-icon {
      transform: translate(12px, -12px);
      margin-bottom: -8px;
    }
  }
`;


