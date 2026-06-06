export const cotizarStyles = String.raw`
/* ── TOKENS ─────────────────────────────────────────────── */
@font-face { font-family:'Against'; src:url('/fonts/against-regular.otf') format('opentype'); }
:root {
  --crema:#fffdf8; --crema-warm:#f5f0e8; --crema-border:#ede6d6;
  --verde:#2d4949; --verde-dark:#1e3232; --verde-mid:#4a6e6e;
  --terracota:#9d563d; --terra-light:#e8c4ad;
  --body-clr:#5a5040; --muted:#6f634f; --carbon:#1a1a1a;
  --state-success-bg:#edf5f0; --state-success-text:#2d5a3d; --state-success-border:#c4dece;
  --state-error-bg:#fdf0eb; --state-error-text:#8a3a20; --state-error-border:#f0c4b0;
  --ease-snap:cubic-bezier(0.76,0,0.24,1); --ease-out:cubic-bezier(0.22,1,0.36,1);
}
*,*::before,*::after{margin:0;padding:0;box-sizing:border-box;}
html{font-size:16px;}
body{font-family:'Jost',sans-serif;background:var(--crema);color:var(--body-clr);overflow-x:hidden;}
.cotizar-page-react{accent-color:var(--verde);}
.cotizar-page-react ::selection{background:rgba(45,73,73,0.18);color:var(--carbon);}
.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;}

/* ── NAV ─────────────────────────────────────────────────── */
#site-nav{position:fixed;top:0;left:0;right:0;z-index:200;display:flex;justify-content:center;padding:14px 24px;pointer-events:none;}
.nav-pill{width:100%;max-width:1500px;height:58px;display:flex;align-items:center;justify-content:space-between;padding:0 28px 0 18px;border-radius:999px;background:rgba(18,28,24,0.12);border:1px solid rgba(255,255,255,0.1);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);box-shadow:0 8px 32px rgba(0,0,0,0.18),inset 0 1px 0 rgba(255,255,255,0.07);transition:background .4s,border-color .4s,box-shadow .4s;pointer-events:all;}
.nav-pill.scrolled{background:rgba(28,46,44,0.88);border-color:rgba(255,255,255,0.13);box-shadow:0 8px 40px rgba(0,0,0,0.32),inset 0 1px 0 rgba(255,255,255,0.09);}
.nav-logo img{height:32px;}
.nav-links{display:flex;gap:28px;align-items:center;}
.nav-links a{font-family:'Jost',sans-serif;font-size:0.69rem;font-weight:300;letter-spacing:0.12em;text-transform:uppercase;color:rgba(255,253,248,0.72);text-decoration:none;border-bottom:1px solid transparent;padding-bottom:2px;transition:color .22s,border-color .22s;}
.nav-links a:hover,.nav-links a.active{color:var(--crema);border-color:rgba(255,253,248,0.4);}
.nav-right{display:flex;align-items:center;gap:14px;}
.nav-cta{font-family:'Jost',sans-serif;font-size:0.67rem;font-weight:300;letter-spacing:0.13em;text-transform:uppercase;color:var(--crema);background:rgba(255,253,248,0.09);border:1px solid rgba(255,255,255,0.2);padding:8px 20px;border-radius:999px;cursor:pointer;text-decoration:none;transition:all .22s;}
.nav-cta:hover{background:rgba(192,122,90,0.9);border-color:rgba(192,122,90,0.6);}
.nav-cta.active-cta{background:var(--terracota);border-color:var(--terracota);}

/* ── WA FLOAT ────────────────────────────────────────────── */
.wa-float{position:fixed;bottom:32px;right:32px;z-index:150;width:50px;height:50px;border-radius:50%;background:#128c4a;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 16px rgba(0,0,0,0.2);transition:transform .26s,box-shadow .26s;text-decoration:none;}
.wa-float:hover{transform:translateY(-3px);box-shadow:0 8px 24px rgba(0,0,0,0.28);}

/* ── OVERLINE ────────────────────────────────────────────── */
.overline{font-family:'Jost',sans-serif;font-size:0.67rem;font-weight:500;letter-spacing:0.16em;text-transform:uppercase;display:flex;align-items:center;gap:10px;}
.overline::before{content:'';display:block;width:20px;height:1px;flex-shrink:0;}
.overline-light{color:rgba(232,196,173,0.8);}
.overline-light::before{background:rgba(232,196,173,0.5);}
.overline-dark{color:var(--terracota);}
.overline-dark::before{background:var(--terra-light);}

/* ── TXT REVEAL ──────────────────────────────────────────── */
.txt-reveal{opacity:0;transform:translateY(40px);transition:opacity .85s var(--ease-out),transform .85s var(--ease-out);}
.txt-reveal[data-d="1"]{transition-delay:.1s;}
.txt-reveal[data-d="2"]{transition-delay:.22s;}
.txt-reveal.in{opacity:1;transform:none;}



/* ══ COTIZAR ESTILOS ═════════════════════════════════════════ */

/* ── Hero compacto ──────────────────────────────────────── */
.hero-cotizar{
  min-height:50vh; background:var(--verde-dark);
  position:relative; overflow:hidden;
  display:flex; align-items:flex-end;
  padding:0 80px 60px;
}
.hero-cotizar-bg{position:absolute;inset:0;z-index:0;}
.hero-cotizar-bg img{width:100%;height:100%;object-fit:cover;opacity:0.12;}
.hero-cotizar-bg::after{content:'';position:absolute;inset:0;background:linear-gradient(180deg,var(--verde-dark) 0%,rgba(30,50,50,0.6) 40%,var(--verde-dark) 100%);}
.hero-cotizar-glow{position:absolute;inset:0;z-index:0;background:radial-gradient(ellipse at 70% 40%,rgba(192,122,90,0.08) 0%,transparent 60%);pointer-events:none;}
.hero-cotizar-content{position:relative;z-index:2;max-width:1500px;width:100%;}
.arch-bg{font-family:'Against',serif;font-size:clamp(9rem,14vw,18rem);line-height:0.85;letter-spacing:-0.04em;color:rgba(255,253,248,0.025);position:absolute;right:0;bottom:-20px;pointer-events:none;user-select:none;white-space:nowrap;}

/* ── Main layout ────────────────────────────────────────── */
.cotizar-main{
  max-width:1500px; margin:0 auto;
  padding:64px 80px 100px;
  display:grid; grid-template-columns:1fr 380px; gap:48px;
  align-items:start;
}

/* ── Progress bar ───────────────────────────────────────── */
.progress-wrap{margin-bottom:44px;}
.progress-steps{display:flex;align-items:center;gap:0;margin-bottom:20px;}
.progress-step{display:flex;align-items:center;flex:1;}
.step-dot{
  width:32px;height:32px;border-radius:50%;border:1.5px solid var(--crema-border);
  display:flex;align-items:center;justify-content:center;flex-shrink:0;
  font-family:'Jost',sans-serif;font-size:0.7rem;font-weight:400;
  color:var(--muted);background:var(--crema);
  transition:all .35s var(--ease-out);
}
.progress-step.done .step-dot{background:var(--verde);border-color:var(--verde);color:#fff;}
.progress-step.active .step-dot{background:var(--terracota);border-color:var(--terracota);color:#fff;box-shadow:0 0 0 4px rgba(192,122,90,0.15);}
.step-line{flex:1;height:1px;background:var(--crema-border);transition:background .35s;}
.progress-step.done .step-line{background:var(--verde);}
.step-label{font-family:'Jost',sans-serif;font-size:0.61rem;font-weight:300;letter-spacing:0.08em;color:var(--muted);text-transform:uppercase;margin-top:8px;text-align:center;}
.progress-step.active .step-label,.progress-step.done .step-label{color:var(--verde);}
.progress-labels{display:grid;grid-template-columns:repeat(4,1fr);gap:0;}
.progress-labels .step-label{
  justify-self:start;
  width:max-content;
  margin-left:16px;
  transform:translateX(-50%);
  text-align:center;
}

.step-heading{
  font-family:'Jost',sans-serif;font-size:0.62rem;font-weight:400;
  letter-spacing:0.14em;text-transform:uppercase;color:var(--terracota);
  margin-bottom:6px;
  scroll-margin-top:96px;
}
.step-title{
  font-family:'Cormorant Garamond',serif;font-size:clamp(2rem,2.7vw,2.75rem);
  font-weight:400;line-height:1;letter-spacing:0;color:var(--verde-dark);
  margin-bottom:4px;
}
.step-sub{
  font-family:'Cormorant Garamond',serif;font-size:clamp(1.1rem,1.6vw,1.4rem);
  font-style:italic;font-weight:300;color:var(--terracota);
  margin-bottom:32px;
}

/* ── Step panels ────────────────────────────────────────── */
.step-panel{display:none;}
.step-panel.active{display:block;}

/* Step 1 - Tipo evento */
.tipo-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;border:0;min-width:0;}
.tipo-grid[aria-invalid="true"] .tipo-card{border-color:var(--state-error-border);}
.tipo-card{
  border:1.5px solid var(--crema-border);border-radius:10px;
  padding:22px 18px;cursor:pointer;
  display:flex;flex-direction:column;gap:10px;
  background:var(--crema);
  transition:all .22s ease;
  position:relative;
}
.tipo-card:hover{border-color:var(--terra-light);background:var(--crema-warm);}
.tipo-card.selected{border-color:var(--verde);background:rgba(45,73,73,0.075);box-shadow:0 0 0 3px rgba(45,73,73,0.1);}
.tipo-card input[type=radio]{position:absolute;opacity:0;pointer-events:none;}
.tipo-icon{width:36px;height:36px;border-radius:8px;background:var(--crema-warm);display:flex;align-items:center;justify-content:center;color:var(--verde-mid);transition:all .22s;}
.tipo-card.selected .tipo-icon{background:var(--verde);color:#fff;}
.tipo-name{font-family:'Cormorant Garamond',serif;font-size:1rem;font-weight:400;color:var(--verde-dark);}
.tipo-desc{font-family:'Jost',sans-serif;font-size:0.72rem;font-weight:300;color:var(--muted);line-height:1.55;}
.tipo-check{position:absolute;top:12px;right:12px;width:18px;height:18px;border-radius:50%;background:var(--verde);display:flex;align-items:center;justify-content:center;opacity:0;transition:opacity .22s;}
.tipo-card.selected .tipo-check{opacity:1;}
.tipo-card.selected .tipo-check svg{animation:check-pop 0.18s var(--ease-out);}

/* Step 2 - Fecha e invitados */
.field-group{display:flex;flex-direction:column;gap:7px;margin-bottom:28px;}
.field-error{font-family:'Jost',sans-serif;font-size:0.72rem;font-weight:400;color:var(--state-error-text);background:var(--state-error-bg);border:1px solid var(--state-error-border);border-radius:6px;padding:8px 12px;display:none;margin-top:4px;}
.field-error.show{display:block;animation:error-nudge 0.24s var(--ease-out);}
@keyframes error-nudge{0%{transform:translateY(-3px);opacity:0;}100%{transform:translateY(0);opacity:1;}}
.field-label{font-family:'Jost',sans-serif;font-size:0.68rem;font-weight:400;letter-spacing:0.1em;text-transform:uppercase;color:var(--verde);}
.field-input{
  font-family:'Jost',sans-serif;font-size:0.9rem;font-weight:300;
  color:var(--carbon);background:var(--crema);
  border:1.5px solid var(--crema-border);border-radius:8px;
  padding:13px 16px;outline:none;width:100%;
  transition:border-color .22s,box-shadow .22s;
  appearance:none;-webkit-appearance:none;
}
.field-input:focus{border-color:var(--verde);box-shadow:0 0 0 3px rgba(45,73,73,0.1);background:rgba(45,73,73,0.035);}
.field-input[aria-invalid="true"]{border-color:var(--state-error-border);box-shadow:0 0 0 3px rgba(192,122,90,0.12);}
.field-input::placeholder{color:var(--muted);}
.availability-badge{
  display:none;align-items:center;gap:8px;padding:11px 14px;
  border-radius:8px;font-family:'Jost',sans-serif;font-size:0.78rem;font-weight:300;
  margin-top:4px;
}
.availability-badge.ok{display:flex;background:var(--state-success-bg);color:var(--state-success-text);border:1px solid var(--state-success-border);}
.availability-badge.busy{display:flex;background:var(--state-error-bg);color:var(--state-error-text);border:1px solid var(--state-error-border);}
.suggestions{margin-top:10px;display:none;flex-wrap:wrap;gap:8px;}
.suggestions.show{display:flex;}
.suggestion-chip{
  font-family:'Jost',sans-serif;font-size:0.72rem;font-weight:300;
  padding:6px 14px;border-radius:999px;
  border:1px solid var(--crema-border);background:var(--crema);
  color:var(--verde);cursor:pointer;transition:all .2s;
}
.suggestion-chip:hover{border-color:var(--verde);background:rgba(45,73,73,0.075);}

/* Invitados counter */
.counter-row{display:flex;align-items:center;gap:0;border:1.5px solid var(--crema-border);border-radius:8px;overflow:hidden;background:var(--crema);}
.counter-btn{
  width:48px;height:48px;border:none;background:transparent;
  font-family:'Jost',sans-serif;font-size:1.2rem;color:var(--verde);
  cursor:pointer;transition:background .18s;flex-shrink:0;
}
.counter-btn:hover{background:var(--crema-warm);}
.counter-val{
  flex:1;text-align:center;font-family:'Against',serif;
  font-size:1.6rem;color:var(--verde-dark);line-height:1;
  border:none;outline:none;background:transparent;
  width:100%;padding:0;
}

/* Step 3 - Add-ons */
.addon-list{display:flex;flex-direction:column;gap:10px;}
.addon-notes-field{margin-top:18px;margin-bottom:0;}
.addon-item{
  display:flex;align-items:center;gap:16px;
  border:1.5px solid var(--crema-border);border-radius:10px;
  padding:16px 18px;cursor:pointer;
  background:var(--crema);transition:all .22s;
  position:relative;
}
.addon-item:hover{border-color:var(--terra-light);background:var(--crema-warm);}
.addon-item.selected{border-color:var(--verde);background:rgba(45,73,73,0.075);}
.addon-item input[type=checkbox]{position:absolute;opacity:0;pointer-events:none;}
.addon-checkbox{
  width:20px;height:20px;border-radius:5px;border:1.5px solid var(--crema-border);
  flex-shrink:0;display:flex;align-items:center;justify-content:center;
  transition:all .22s;background:var(--crema);
}
.addon-item.selected .addon-checkbox{background:var(--verde);border-color:var(--verde);}
.addon-item.selected .addon-checkbox svg{animation:check-pop 0.18s var(--ease-out);}
.addon-icon{width:36px;height:36px;border-radius:8px;background:var(--crema-warm);display:flex;align-items:center;justify-content:center;color:var(--verde-mid);flex-shrink:0;transition:all .22s;}
.addon-item.selected .addon-icon{background:rgba(45,73,73,0.1);}
.addon-info{flex:1;}
.addon-name{font-family:'Cormorant Garamond',serif;font-size:1rem;font-weight:400;color:var(--verde-dark);}
.addon-sub{font-family:'Jost',sans-serif;font-size:0.72rem;font-weight:300;color:var(--muted);}
.addon-price{font-family:'Jost',sans-serif;font-size:0.8rem;font-weight:400;color:var(--terracota);white-space:nowrap;}

/* Step 4 - Contacto */
.form-row{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:20px;}
.form-row.full{grid-template-columns:1fr;}
textarea.field-input{resize:vertical;min-height:100px;line-height:1.65;}
.privacy-note{font-family:'Jost',sans-serif;font-size:0.72rem;font-weight:300;color:var(--muted);line-height:1.7;margin-top:16px;}
.privacy-note a{color:var(--verde);}

/* ── Nav buttons ────────────────────────────────────────── */
.step-nav{display:flex;justify-content:space-between;align-items:center;margin-top:22px;padding-bottom:28px;border-bottom:1px solid var(--crema-border);}
.btn-prev{
  font-family:'Jost',sans-serif;font-size:0.75rem;font-weight:400;
  letter-spacing:0.1em;text-transform:uppercase;
  color:var(--muted);background:transparent;border:1px solid var(--crema-border);
  padding:13px 24px;border-radius:999px;cursor:pointer;
  display:flex;align-items:center;gap:8px;
  transition:all .22s;
}
.btn-prev:hover{border-color:var(--verde-mid);color:var(--verde);}
.btn-next{
  font-family:'Jost',sans-serif;font-size:0.75rem;font-weight:500;
  letter-spacing:0.1em;text-transform:uppercase;
  color:var(--crema);background:var(--verde);border:none;
  padding:13px 28px;border-radius:999px;cursor:pointer;
  display:flex;align-items:center;gap:8px;
  transition:all .22s;
}
.btn-next:hover{background:var(--verde-mid);transform:scale(1.03);}
.btn-submit{
  font-family:'Jost',sans-serif;font-size:0.75rem;font-weight:500;
  letter-spacing:0.1em;text-transform:uppercase;
  color:var(--crema);background:var(--terracota);border:none;
  padding:13px 32px;border-radius:999px;cursor:pointer;
  display:flex;align-items:center;gap:8px;
  transition:all .22s;
}
.btn-submit:hover{background:#a8664a;transform:scale(1.03);}

/* ── Resumen lateral ────────────────────────────────────── */
.summary-wrap{position:static;}
.summary-card{
  background:var(--verde-dark);border-radius:16px;
  padding:28px;color:var(--crema);
  box-shadow:0 20px 60px rgba(30,50,50,0.2);
}
.summary-title{
  font-family:'Against',serif;font-size:1.5rem;
  line-height:0.95;letter-spacing:-0.02em;color:var(--crema);
  margin-bottom:4px;
}
.summary-sub{
  font-family:'Cormorant Garamond',serif;font-size:1.5rem;
  font-style:italic;font-weight:300;color:var(--terracota);
  margin-bottom:28px;line-height:1;
}
.summary-sep{height:1px;background:rgba(255,255,255,0.08);margin:16px 0;}
.summary-row{display:flex;justify-content:space-between;align-items:baseline;gap:8px;margin-bottom:8px;}
.summary-key{font-family:'Jost',sans-serif;font-size:0.7rem;font-weight:300;letter-spacing:0.06em;color:rgba(255,253,248,0.45);}
.summary-val{font-family:'Jost',sans-serif;font-size:0.82rem;font-weight:300;color:rgba(255,253,248,0.85);text-align:right;}
.summary-val.empty{color:rgba(255,253,248,0.2);font-style:italic;}
.summary-total-row{display:flex;justify-content:space-between;align-items:flex-start;margin-top:18px;padding-top:24px;border-top:1px solid rgba(255,255,255,0.12);}
.summary-total-key{font-family:'Jost',sans-serif;font-size:0.67rem;font-weight:400;letter-spacing:0.1em;text-transform:uppercase;color:rgba(255,253,248,0.5);}
.summary-total-val{font-family:'Against',serif;font-size:1.9rem;line-height:1;color:var(--crema);}
.summary-total-sub{font-family:'Jost',sans-serif;font-size:0.62rem;font-weight:300;color:rgba(255,253,248,0.3);text-align:right;margin-top:2px;}

/* Paquete recomendado */
.paquete-rec{
  margin-top:20px;padding:16px 18px;
  border-radius:10px;background:rgba(192,122,90,0.12);
  border:1px solid rgba(192,122,90,0.25);
}
.paquete-rec-label{font-family:'Jost',sans-serif;font-size:0.61rem;font-weight:400;letter-spacing:0.12em;text-transform:uppercase;color:rgba(192,122,90,0.8);margin-bottom:6px;}
.paquete-rec-name{font-family:'Cormorant Garamond',serif;font-size:1.1rem;font-weight:400;color:var(--crema);}
.paquete-rec-desc{font-family:'Jost',sans-serif;font-size:0.72rem;font-weight:300;color:rgba(255,253,248,0.5);line-height:1.55;margin-top:4px;}

/* Trust badges */
.trust-badges{margin-top:20px;display:flex;flex-direction:column;gap:9px;}
.trust-item{display:flex;align-items:center;gap:10px;font-family:'Jost',sans-serif;font-size:0.72rem;font-weight:300;color:rgba(255,253,248,0.45);}
.trust-item svg{flex-shrink:0;color:rgba(255,253,248,0.3);}

/* ── Success state ──────────────────────────────────────── */
.success-panel{
  display:none;padding:48px;text-align:center;
  background:var(--crema);border-radius:16px;
}
.success-panel.show{display:block;animation:success-enter 0.42s var(--ease-out);}
.success-icon{width:64px;height:64px;border-radius:50%;background:var(--state-success-bg);border:2px solid var(--state-success-border);display:flex;align-items:center;justify-content:center;margin:0 auto 24px;}
.success-panel.show .success-icon{animation:success-icon-enter 0.36s var(--ease-out) 0.08s both;}
@keyframes check-pop{0%{transform:scale(0.6);opacity:0;}100%{transform:scale(1);opacity:1;}}
@keyframes success-enter{0%{transform:translateY(12px);opacity:0;}100%{transform:translateY(0);opacity:1;}}
@keyframes success-icon-enter{0%{transform:scale(0.86);opacity:0;}100%{transform:scale(1);opacity:1;}}


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
    width: 100% !important;
    flex: none !important;
    aspect-ratio: 4 / 3 !important;
    min-height: 0 !important;
  }

  .hero-nosotros .hero-right .img-reveal {
    position: relative !important;
    inset: auto !important;
    height: 100% !important;
  }

  .hero-nosotros .hero-right::after {
    background: linear-gradient(180deg, var(--verde-dark) 0%, rgba(30, 50, 50, 0.08) 38%, transparent 100%) !important;
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
    margin-top: 18px !important;
  }

  .hero-cotizar-content p {
    max-width: 20rem !important;
    font-size: 1rem !important;
    line-height: 1.8 !important;
    margin-bottom: 28px !important;
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
    font-size: clamp(2rem, 10vw, 2.65rem) !important;
    line-height: 1 !important;
  }

  .step-sub {
    font-size: clamp(1.38rem, 6.8vw, 1.85rem) !important;
    line-height: 1 !important;
    margin-bottom: 30px !important;
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



.cotizar-page-react button.tipo-card,
.cotizar-page-react button.addon-item {
  appearance: none;
}
.cotizar-page-react .summary-wrap {
  position: static;
}

@media (min-width: 1101px) {
  .cotizar-page-react .summary-wrap {
    padding-top: 228px;
  }
}`;

