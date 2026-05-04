// pages.js — Page HTML generators

const WA_ICON = `<svg width="18" height="18" viewBox="0 0 24 24"><path fill="#fffdf8" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`;

const FOOTER_HTML = `
<div id="site-footer" class="snap-section">
  <div class="footer-grid">
    <div>
      <img src="../../assets/isotipo-blanco.svg?v=4" style="height:52px;filter:none;" alt="La Hermosa">
      <p class="footer-brand-desc">Una finca familiar convertida en destino de experiencias. Naturaleza, hospitalidad y celebración.</p>
      <div style="display:flex;gap:12px;margin-top:18px;">
        ${['ig','fb','tk'].map(s=>`<div style="width:30px;height:30px;border-radius:50%;border:1px solid rgba(255,253,248,0.18);display:flex;align-items:center;justify-content:center;cursor:pointer;"><span style="color:rgba(255,253,248,0.4);font-size:10px;">${s}</span></div>`).join('')}
      </div>
    </div>
    <div>
      <p class="footer-heading">Navegación</p>
      <div class="footer-links">
        ${['inicio','espacios','experiencias','nosotros','faq'].map(p=>`<button onclick="navigate('${p}')">${p.charAt(0).toUpperCase()+p.slice(1)}</button>`).join('')}
      </div>
    </div>
    <div>
      <p class="footer-heading">Experiencias</p>
      <div class="footer-links">
        ${['Eventos Sociales','Corporativos','Retiros','Estancia Privada','One Day'].map(l=>`<button>${l}</button>`).join('')}
      </div>
    </div>
    <div>
      <p class="footer-heading">Contacto</p>
      <div class="footer-links" style="gap:10px;">
        <span style="font-family:'Jost',sans-serif;font-size:13px;font-weight:300;color:rgba(255,253,248,0.55);">+1 (33) 994-7922</span>
        <span style="font-family:'Jost',sans-serif;font-size:13px;font-weight:300;color:rgba(255,253,248,0.55);">hola@fincalahermosa.com</span>
        <button class="btn-accent" onclick="navigate('experiencias')" style="margin-top:8px;align-self:flex-start;">Agendar visita</button>
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    <p class="footer-copy">© 2024 Finca La Hermosa. Todos los derechos reservados.</p>
    <p class="footer-copy">Privacidad · Términos</p>
  </div>
</div>`;

/* ═══════════════ INICIO ═══════════════ */
function pageInicio() {
  const services = [
    {icon:'💍',label:'Eventos Sociales',desc:'Bodas, XV años, cumpleaños y celebraciones.'},
    {icon:'🏢',label:'Corporativos',desc:'Team building y convivencia empresarial.'},
    {icon:'⛺',label:'Retiros',desc:'Experiencias de días para grupos y familias.'},
    {icon:'🔑',label:'Estancia Privada',desc:'Renta completa de la finca.'},
    {icon:'✨',label:'One Day',desc:'Cenas, fogatas, cine al aire libre.'},
  ];
  return `
  <!-- HERO -->
  <section class="snap-section" style="background:#111;">
    <div class="hero-bg img-reveal" style="inset:-60px 0;position:absolute;">
      <div class="img-bg bg-breathe" style="position:absolute;inset:0;background-image:url(../../assets/hero-wedding.jpg);background-size:cover;background-position:center 30%;"></div>
      <div class="reveal-cover"></div>
    </div>
    <div style="position:absolute;inset:0;background:linear-gradient(170deg,rgba(18,28,24,0.3) 0%,rgba(18,28,24,0.6) 100%);z-index:1;"></div>
    <div class="hero-content" style="z-index:2;padding-top:80px;">
      <div class="overline overline-light txt-reveal" data-delay="0" style="font-family:'Jost',sans-serif;font-size:10px;">Finca La Hermosa · Un lugar donde los sueños se celebran</div>
      <div class="display-title txt-reveal" data-delay="1" style="margin-top:18px;">Cada experiencia,</div>
      <div class="editorial-title txt-reveal" data-delay="2">diseñada para ti.</div>
      <p class="body-text txt-reveal" data-delay="3" style="max-width:440px;margin-top:20px;">Bodas, retiros, team buildings, estancias y experiencias únicas. Explora los paquetes y encuentra el que se ajusta a tu momento.</p>
      <div style="display:flex;gap:12px;margin-top:32px;" class="txt-reveal" data-delay="4">
        <button class="btn-glass" onclick="navigate('experiencias')">Explorar paquetes</button>
        <button class="btn-outline" onclick="navigate('nosotros')">Conocer la finca</button>
      </div>
    </div>
    <div class="scroll-indicator"><div class="scroll-line"></div><span>scroll</span></div>
  </section>

  <!-- SERVICES STRIP + INTRO -->
  <section class="snap-section" style="background:var(--crema);flex-direction:column;justify-content:center;">
    <div style="border-bottom:1px solid var(--crema-border);">
      <div class="services-grid">
        ${services.map(s=>`<div class="service-card" onclick="navigate('experiencias')"><div class="svc-icon">${s.icon}</div><p class="svc-label">${s.label}</p><p class="svc-desc">${s.desc}</p></div>`).join('')}
      </div>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:0;flex:1;">
      <div style="padding:60px 80px;display:flex;flex-direction:column;justify-content:center;">
        <div class="overline overline-dark txt-reveal">Más que un lugar</div>
        <h2 style="font-family:'Cormorant Garamond',serif;font-size:clamp(32px,3.5vw,48px);font-weight:300;line-height:1.2;color:#1e3232;margin:16px 0 20px;" class="txt-reveal" data-delay="1">Una experiencia<br/>para toda la vida.</h2>
        <p style="font-family:'Jost',sans-serif;font-size:14px;font-weight:300;line-height:1.8;color:var(--body);margin-bottom:24px;" class="txt-reveal" data-delay="2">Una finca familiar rodeada de naturaleza, diseñada para celebrar momentos importantes y conectar con lo que realmente importa.</p>
        <div class="txt-reveal" data-delay="3"><button class="btn-primary" onclick="navigate('nosotros')">Descubre más →</button></div>
      </div>
      <div class="img-reveal split-img">
        <div class="bg reveal-cover" style="z-index:2;position:absolute;inset:0;background:var(--verde-dark);transform:translateY(0);transition:transform 1.2s var(--ease-snap,cubic-bezier(0.76,0,0.24,1));"></div>
        <div class="bg bg-breathe" style="background-image:url(https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=80);transform:scale(1.1);transition:transform 1.5s cubic-bezier(0.76,0,0.24,1);"></div>
      </div>
    </div>
  </section>

  <!-- QUOTE + CTA -->
  <section class="snap-section" style="background:var(--verde);display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;padding:0 80px;">
    <div class="overline overline-light txt-reveal" style="justify-content:center;">Nuestra esencia</div>
    <blockquote style="font-family:'Cormorant Garamond',serif;font-size:clamp(28px,4vw,52px);font-style:italic;font-weight:300;color:#fffdf8;max-width:740px;line-height:1.3;margin:20px 0 16px;" class="txt-reveal" data-delay="1">"Aquí no solo rentas un espacio,<br/>vives una experiencia que se queda en tu historia."</blockquote>
    <div style="width:36px;height:1px;background:var(--terracota);margin:4px auto 32px;" class="txt-reveal" data-delay="2"></div>
    <div style="display:flex;gap:12px;justify-content:center;" class="txt-reveal" data-delay="3">
      <button class="btn-accent" onclick="navigate('experiencias')">Ver paquetes →</button>
      <button class="btn-outline" onclick="navigate('nosotros')">Conocer la finca</button>
    </div>
  </section>

  ${FOOTER_HTML}`;
}

/* ═══════════════ EXPERIENCIAS ═══════════════ */
function pageExperiencias() {
  const tabs = ['Eventos Sociales','Corporativos','Retiros','Estancia','One Day'];
  const pkgs = [
    [{title:'Boda Íntima',over:'Bodas',price:'$40,000',img:'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80',desc:'Una ceremonia íntima rodeada de jardines y naturaleza.',features:['Hasta 80 personas','Jardín y terraza','Coordinador incluido','Decoración base','Acceso total']},
     {title:'Quinceañera & Festejo',over:'Celebraciones',price:'$35,000',img:'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80',desc:'Espacios versátiles para festejos con alberca y jardines.',features:['Hasta 120 personas','Salón + jardín','Sonido e iluminación','Alberca disponible','Estacionamiento']},
     {title:'Social & Más',over:'Eventos',price:'$28,000',img:'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&q=80',desc:'Cumpleaños, aniversarios y reuniones familiares.',features:['Hasta 60 personas','Espacios al aire libre','Cocina disponible','Jardines y alberca','Personalizable']}],
    [{title:'Team Building',over:'Equipos',price:'$18,000',img:'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&q=80',desc:'Integración empresarial en entorno natural.',features:['Hasta 40 personas','Salón equipado','Proyector y pantalla','Coffee break','Áreas verdes']},
     {title:'Workshop & Capacitación',over:'Corporativo',price:'$14,000',img:'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80',desc:'Espacio privado para talleres y formaciones.',features:['Hasta 25 personas','WiFi de alta velocidad','Material incluido','Catering opcional','Privacidad total']},
     {title:'Convivencia Empresarial',over:'Empresas',price:'$22,000',img:'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&q=80',desc:'Un día de descanso y convivencia para tu equipo.',features:['Hasta 80 personas','Acceso completo','Alberca y jardines','Catering disponible','Fotografía opcional']}],
  ];

  const renderPkgs = (set) => set.map(p=>`
    <div class="pkg-card">
      <div class="pkg-img"><img src="${p.img}" alt="${p.title}" loading="lazy"></div>
      <div class="pkg-body">
        <p class="pkg-over">${p.over} · Desde ${p.price}</p>
        <h3 class="pkg-title">${p.title}</h3>
        <p class="pkg-desc">${p.desc}</p>
        <ul class="pkg-features">${p.features.map(f=>`<li>${f}</li>`).join('')}</ul>
        <button class="btn-primary" style="width:100%;text-align:center;">Consultar disponibilidad</button>
      </div>
    </div>`).join('');

  return `
  <!-- HERO -->
  <section class="snap-section" style="background:#111;">
    <div style="position:absolute;inset:-60px 0;" class="img-reveal">
      <div class="img-bg bg-breathe" style="position:absolute;inset:0;background-image:url(https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1600&q=80);background-size:cover;background-position:center;transform:scale(1.1);transition:transform 1.5s cubic-bezier(0.76,0,0.24,1);"></div>
      <div class="reveal-cover"></div>
    </div>
    <div style="position:absolute;inset:0;background:linear-gradient(170deg,rgba(18,28,24,0.35) 0%,rgba(18,28,24,0.65) 100%);z-index:1;"></div>
    <div class="hero-content" style="z-index:2;padding-top:80px;">
      <div class="overline overline-light txt-reveal">Finca La Hermosa · Experiencias & Paquetes</div>
      <div class="display-title txt-reveal" data-delay="1" style="margin-top:18px;">Cada experiencia,</div>
      <div class="editorial-title txt-reveal" data-delay="2">diseñada para ti.</div>
      <p class="body-text txt-reveal" data-delay="3" style="max-width:420px;margin-top:18px;">Bodas, retiros, team buildings, estancias y experiencias únicas. Encuentra el paquete que se ajusta a tu momento.</p>
      <div class="txt-reveal" data-delay="4" style="margin-top:28px;">
        <button class="btn-glass">Explorar paquetes ↓</button>
      </div>
    </div>
  </section>

  <!-- PACKAGES -->
  <section class="snap-section" style="background:var(--crema-warm);flex-direction:column;overflow:hidden;">
    <div class="tabs-bar" style="position:relative;top:auto;">
      ${tabs.map((t,i)=>`<button class="tab-btn ${i===0?'active':''}" onclick="switchTab(${i})">${t}</button>`).join('')}
    </div>
    <div style="flex:1;overflow-y:auto;padding:40px 80px;">
      ${pkgs.map((set,i)=>`<div class="tab-panel" style="display:${i===0?'grid':'none'};grid-template-columns:repeat(3,1fr);gap:20px;">${renderPkgs(set)}</div>`).join('')}
    </div>
  </section>

  <!-- EXTRAS + CTA -->
  <section class="snap-section" style="background:var(--crema);display:grid;grid-template-columns:1fr 1fr;overflow:hidden;">
    <div style="padding:80px;display:flex;flex-direction:column;justify-content:center;">
      <div class="overline overline-dark txt-reveal">Complementa tu experiencia</div>
      <h2 style="font-family:'Cormorant Garamond',serif;font-size:42px;font-weight:300;color:#1e3232;margin:16px 0 28px;line-height:1.2;" class="txt-reveal" data-delay="1">Experiencias extra</h2>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;" class="txt-reveal" data-delay="2">
        ${[['🎵','Música en Vivo'],['📸','Fotografía'],['🌸','Flores'],['🍽','Catering'],['🕯','Ambientación'],['🎂','Pastelería']].map(([i,l])=>`
        <div style="border:1px solid var(--crema-border);border-radius:8px;padding:16px;cursor:pointer;transition:border-color 0.2s;" onmouseenter="this.style.borderColor='var(--terracota)'" onmouseleave="this.style.borderColor='var(--crema-border)'">
          <div style="font-size:20px;margin-bottom:6px;">${i}</div>
          <p style="font-family:'Jost',sans-serif;font-size:12px;font-weight:300;color:var(--verde);">${l}</p>
        </div>`).join('')}
      </div>
    </div>
    <div style="position:relative;overflow:hidden;" class="img-reveal">
      <div class="img-bg bg-breathe" style="position:absolute;inset:0;background-image:url(https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80);background-size:cover;background-position:center;transform:scale(1.1);transition:transform 1.5s cubic-bezier(0.76,0,0.24,1);"></div>
      <div class="reveal-cover"></div>
      <div style="position:absolute;inset:0;background:rgba(18,28,24,0.45);z-index:2;display:flex;align-items:center;justify-content:center;">
        <div class="glass-card" style="padding:36px;text-align:center;max-width:300px;">
          <div class="overline overline-light txt-reveal" style="justify-content:center;margin-bottom:12px;">¿No encontraste lo que buscas?</div>
          <h3 style="font-family:'Against',serif;font-size:38px;color:#fffdf8;line-height:1;" class="txt-reveal" data-delay="1">Lo diseñamos</h3>
          <h3 style="font-family:'Cormorant Garamond',serif;font-size:38px;font-style:italic;font-weight:300;color:var(--terracota);line-height:1.1;margin-bottom:20px;" class="txt-reveal" data-delay="2">desde cero.</h3>
          <button class="btn-accent txt-reveal" data-delay="3">Agendar visita →</button>
        </div>
      </div>
    </div>
  </section>

  ${FOOTER_HTML}`;
}

/* ═══════════════ NOSOTROS ═══════════════ */
function pageNosotros() {
  const diffs = [
    {icon:'🌱',title:'Propiedad auténtica',desc:'Una finca familiar restaurada con historia y carácter propio.'},
    {icon:'✔',title:'Todo en un solo lugar',desc:'Casa, jardines, alberca, salón y terraza en una sola propiedad.'},
    {icon:'💚',title:'Hospitalidad genuina',desc:'Cada evento lo tratamos como si fuera nuestro.'},
    {icon:'🎯',title:'Diseño a medida',desc:'Nos adaptamos a tu evento, no al revés.'},
  ];
  return `
  <!-- HERO -->
  <section class="snap-section" style="background:#111;">
    <div style="position:absolute;inset:-60px 0;" class="img-reveal">
      <div class="img-bg bg-breathe" style="position:absolute;inset:0;background-image:url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80);background-size:cover;background-position:center;transform:scale(1.1);transition:transform 1.5s cubic-bezier(0.76,0,0.24,1);"></div>
      <div class="reveal-cover"></div>
    </div>
    <div style="position:absolute;inset:0;background:rgba(18,28,24,0.55);z-index:1;"></div>
    <div class="hero-content" style="z-index:2;padding-top:80px;">
      <div class="overline overline-light txt-reveal">Nuestra Historia</div>
      <div class="display-title txt-reveal" data-delay="1" style="margin-top:18px;">Más que una finca,</div>
      <div class="editorial-title txt-reveal" data-delay="2">un legado familiar.</div>
      <p class="body-text txt-reveal" data-delay="3" style="max-width:420px;margin-top:18px;">Una propiedad restaurada con amor y más de 25 años de historia familiar en el campo mexicano.</p>
      <div style="display:flex;gap:12px;margin-top:28px;" class="txt-reveal" data-delay="4">
        <button class="btn-glass">Nuestra historia ↓</button>
        <button class="btn-accent" onclick="navigate('experiencias')">Agendar visita</button>
      </div>
    </div>
  </section>

  <!-- STORY SPLIT -->
  <section class="snap-section split-section">
    <div class="split-img img-reveal">
      <div class="bg bg-breathe" style="background-image:url(https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=80);transform:scale(1.1);transition:transform 1.5s cubic-bezier(0.76,0,0.24,1);"></div>
      <div class="reveal-cover"></div>
    </div>
    <div class="split-content" style="background:var(--crema);">
      <div class="overline overline-dark txt-reveal">Nuestra historia</div>
      <h2 style="font-family:'Cormorant Garamond',serif;font-size:42px;font-weight:300;line-height:1.2;color:#1e3232;margin:16px 0 20px;" class="txt-reveal" data-delay="1">Una propiedad<br/>restaurada con amor.</h2>
      <p style="font-family:'Jost',sans-serif;font-size:14px;font-weight:300;line-height:1.8;color:var(--body);margin-bottom:14px;" class="txt-reveal" data-delay="2">Todo comenzó con un deseo simple: una propiedad donde la familia se pudiera reunir. Con los años, la finca creció, se restauró y se convirtió en algo mucho más grande.</p>
      <p style="font-family:'Jost',sans-serif;font-size:14px;font-weight:300;line-height:1.8;color:var(--body);" class="txt-reveal" data-delay="3">Hoy recibimos a familias, parejas, empresas y grupos que buscan un espacio distinto: natural, cálido, auténtico y versátil.</p>
    </div>
  </section>

  <!-- DIFFERENTIATORS -->
  <section class="snap-section" style="background:var(--crema-warm);flex-direction:column;justify-content:center;padding:0 80px;">
    <div style="text-align:center;margin-bottom:40px;">
      <div class="overline overline-dark txt-reveal" style="justify-content:center;">Nuestra promesa</div>
      <h2 style="font-family:'Cormorant Garamond',serif;font-size:42px;font-weight:300;color:#1e3232;margin-top:14px;" class="txt-reveal" data-delay="1">Qué nos hace diferentes</h2>
    </div>
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:20px;" class="txt-reveal" data-delay="2">
      ${diffs.map(d=>`
      <div style="background:var(--crema);border-radius:10px;padding:28px 22px;box-shadow:0 2px 8px rgba(45,73,73,0.05);">
        <div style="width:38px;height:38px;border-radius:50%;background:var(--verde);display:flex;align-items:center;justify-content:center;font-size:16px;margin-bottom:14px;">${d.icon}</div>
        <h4 style="font-family:'Jost',sans-serif;font-size:13px;font-weight:300;color:var(--verde);margin-bottom:8px;">${d.title}</h4>
        <p style="font-family:'Jost',sans-serif;font-size:12px;font-weight:300;line-height:1.7;color:var(--body);">${d.desc}</p>
      </div>`).join('')}
    </div>
  </section>

  ${FOOTER_HTML}`;
}

/* ═══════════════ FAQ ═══════════════ */
function pageFAQ() {
  const faqs = [
    ['¿Cómo puedo reservar la finca?','Puedes agendar una visita desde nuestra página, por WhatsApp o correo. Te contactaremos en menos de 24 horas para confirmar disponibilidad y detalles.'],
    ['¿Cuántas personas pueden asistir?','La capacidad varía según el evento. Para salón + jardines, hasta 120 personas. Para estancia privada, hasta 20 huéspedes en casa.'],
    ['¿Incluyen catering?','El catering es opcional. Contamos con proveedores de confianza o puedes traer el tuyo propio.'],
    ['¿Se permiten decoraciones personalizadas?','Sí, puedes traer tu equipo de decoración o contratarlo con nosotros. Solo pedimos que no se dañen las instalaciones.'],
    ['¿La finca tiene estacionamiento?','Sí, amplio estacionamiento dentro de la propiedad sin costo adicional.'],
    ['¿Se puede celebrar entre semana?','Sí, con disponibilidad casi siempre y tarifas preferenciales en algunos casos.'],
    ['¿Se requiere anticipo?','Sí, un anticipo para confirmar la fecha. El monto varía según el tipo de evento.'],
    ['¿Hay servicio de alojamiento?','Sí, en modalidad Estancia Privada con habitaciones, baños, cocina equipada y todas las comodidades.'],
  ];
  return `
  <section class="snap-section" style="background:var(--verde);justify-content:center;padding:0 80px;text-align:center;">
    <div>
      <div class="overline overline-light txt-reveal" style="justify-content:center;">Preguntas frecuentes</div>
      <h1 style="font-family:'Cormorant Garamond',serif;font-size:clamp(36px,5vw,60px);font-weight:300;color:#fffdf8;margin:16px 0 12px;" class="txt-reveal" data-delay="1">Todo lo que necesitas saber</h1>
      <p style="font-family:'Jost',sans-serif;font-size:14px;font-weight:300;color:rgba(255,253,248,0.6);max-width:480px;margin:0 auto;" class="txt-reveal" data-delay="2">Resolvemos tus dudas para que te enfoques en lo que importa: vivir la experiencia.</p>
    </div>
  </section>
  <section class="snap-section" style="background:var(--crema);overflow-y:auto;padding:60px 80px;">
    <div style="max-width:740px;margin:0 auto;width:100%;">
      ${faqs.map((f,i)=>`
      <div class="faq-item">
        <button class="faq-q" onclick="toggleFaq(this)">
          <span class="faq-q-text">${f[0]}</span>
          <span class="faq-icon">+</span>
        </button>
        <p class="faq-a">${f[1]}</p>
      </div>`).join('')}
    </div>
  </section>
  ${FOOTER_HTML}`;
}

/* ═══════════════ ESPACIOS ═══════════════ */
function pageEspacios() {
  const spaces = [
    {name:'Jardín Principal',cap:'Hasta 120 personas',img:'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80',desc:'El corazón de la finca. Árboles añosos, flores y luz natural para ceremonias al aire libre.'},
    {name:'Alberca',cap:'Área recreativa',img:'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&q=80',desc:'Alberca de gran formato rodeada de vegetación. Ideal para estancias y eventos informales.'},
    {name:'Salón Principal',cap:'Hasta 80 personas',img:'https://images.unsplash.com/photo-1464146072230-91cabc968266?w=600&q=80',desc:'Salón con techos altos, iluminación adaptable y ventilación natural para banquetes y cenas.'},
    {name:'Terraza',cap:'Hasta 60 personas',img:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',desc:'Vista al jardín. Perfecta para cócteles, reuniones informales y fotografía al atardecer.'},
    {name:'Casa Principal',cap:'Hasta 20 huéspedes',img:'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80',desc:'Casa equipada para estancias privadas con habitaciones, cocina y sala de convivencia.'},
    {name:'Espacios Naturales',cap:'Áreas abiertas',img:'https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&q=80',desc:'Senderos, fogatas y zonas silvestres que conectan a los huéspedes con la naturaleza.'},
  ];
  return `
  <section class="snap-section" style="background:var(--verde);justify-content:center;padding:0 80px;text-align:center;">
    <div>
      <div class="overline overline-light txt-reveal" style="justify-content:center;">Nuestros espacios</div>
      <div class="display-title txt-reveal" data-delay="1" style="margin-top:16px;">La finca completa,</div>
      <div class="editorial-title txt-reveal" data-delay="2">para tu experiencia.</div>
    </div>
  </section>
  <section class="snap-section" style="background:var(--crema-warm);overflow-y:auto;padding:60px 80px;">
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:20px;max-width:1100px;margin:0 auto;">
      ${spaces.map(s=>`
      <div class="pkg-card">
        <div class="pkg-img"><img src="${s.img}" alt="${s.name}" loading="lazy"></div>
        <div class="pkg-body">
          <p class="pkg-over">${s.cap}</p>
          <h3 class="pkg-title">${s.name}</h3>
          <p class="pkg-desc">${s.desc}</p>
        </div>
      </div>`).join('')}
    </div>
  </section>
  ${FOOTER_HTML}`;
}

/* ── Dispatcher ── */
function getPage(page) {
  switch(page) {
    case 'inicio':       return pageInicio();
    case 'experiencias': return pageExperiencias();
    case 'nosotros':     return pageNosotros();
    case 'faq':          return pageFAQ();
    case 'espacios':     return pageEspacios();
    default:             return pageInicio();
  }
}
window.getPage = getPage;
