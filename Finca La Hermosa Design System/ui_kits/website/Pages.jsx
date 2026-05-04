// Pages.jsx — HomePage, ExperienciasPage, NosotrosPage, FAQPage, EspaciosPage
// Imports from window: { CTASection, SectionOverline }

const { useState } = React;

/* ═══════════════════════════════════════════════════════════
   HOME PAGE
═══════════════════════════════════════════════════════════ */
function HomePage({ navigate }) {
  const features = [
    { icon: '🌿', label: 'Jardines', desc: 'Rodeados de naturaleza y paisajes únicos.' },
    { icon: '💧', label: 'Alberca', desc: 'Área de agua en contexto natural.' },
    { icon: '🏛', label: 'Salón', desc: 'Espacio versátil para cualquier evento.' },
    { icon: '🌅', label: 'Terraza', desc: 'Vista al campo y atardeceres únicos.' },
    { icon: '🏡', label: 'Casa', desc: 'Estancia privada con calidez de hogar.' },
    { icon: '🌳', label: 'Naturaleza', desc: 'Árboles, senderos y espacios al aire libre.' },
  ];

  const services = [
    { id: 'social', icon: '💍', label: 'Eventos Sociales', desc: 'Bodas, XV años, cumpleaños y celebraciones privadas.' },
    { id: 'corp', icon: '🏢', label: 'Corporativos y Equipos', desc: 'Workshops, team building y reuniones de integración.' },
    { id: 'retiro', icon: '⛺', label: 'Retiros y Campamentos', desc: 'Experiencias de varios días para grupos y familias.' },
    { id: 'estancia', icon: '🔑', label: 'Estancia Privada', desc: 'Renta de casa y espacios para descanso y convivencia.' },
    { id: 'oneday', icon: '✨', label: 'One Day Experience', desc: 'Cenas especiales, fogatas, cine al aire libre y más.' },
  ];

  return (
    <div>
      {/* HERO */}
      <section style={{
        position: 'relative', height: '100vh', minHeight: '600px',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        backgroundImage: 'url(https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1600&q=80)',
        backgroundSize: 'cover', backgroundPosition: 'center 40%',
      }}>
        <div style={{ position:'absolute', inset:0, background:'rgba(18,28,24,0.52)' }} />
        <div style={{ position:'relative', zIndex:1, textAlign:'center', padding:'0 24px' }}>
          <p style={{ fontFamily:"'Poppins',sans-serif", fontSize:'11px', fontWeight:500, letterSpacing:'0.16em', textTransform:'uppercase', color:'rgba(232,196,173,0.85)', marginBottom:'20px' }}>
            Finca La Hermosa · Un lugar donde los sueños se celebran
          </p>
          <h1 style={{ fontFamily:"'Against',serif", fontSize:'clamp(52px,8vw,96px)', lineHeight:1, color:'#fffdf8', marginBottom:0 }}>
            Un espacio para
          </h1>
          <h1 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(52px,8vw,96px)', fontStyle:'italic', fontWeight:300, lineHeight:1.05, color:'#c07a5a', marginBottom:'24px' }}>
            celebrar la vida.
          </h1>
          <p style={{ fontFamily:"'Poppins',sans-serif", fontSize:'15px', fontWeight:300, lineHeight:1.7, color:'rgba(255,253,248,0.72)', maxWidth:'480px', margin:'0 auto 36px' }}>
            Naturaleza, hospitalidad y momentos que se quedan en la memoria. Rodeados de jardines, agua y arquitectura.
          </p>
          <div style={{ display:'flex', gap:'12px', justifyContent:'center', flexWrap:'wrap' }}>
            <button onClick={() => navigate('experiencias')} style={{
              fontFamily:"'Poppins',sans-serif", fontSize:'11px', fontWeight:500,
              letterSpacing:'0.1em', textTransform:'uppercase',
              color:'#fffdf8', background:'transparent',
              border:'1px solid rgba(255,253,248,0.55)',
              padding:'14px 32px', borderRadius:'3px', cursor:'pointer',
            }}>Explorar experiencias</button>
            <button onClick={() => navigate('nosotros')} style={{
              fontFamily:"'Poppins',sans-serif", fontSize:'11px', fontWeight:500,
              letterSpacing:'0.1em', textTransform:'uppercase',
              color:'rgba(255,253,248,0.7)', background:'transparent',
              border:'1px solid rgba(255,253,248,0.2)',
              padding:'14px 32px', borderRadius:'3px', cursor:'pointer',
            }}>Conocer la finca</button>
          </div>
        </div>
        {/* Scroll indicator */}
        <div style={{ position:'absolute', right:'28px', top:'50%', transform:'translateY(-50%)', display:'flex', flexDirection:'column', gap:'6px', alignItems:'center' }}>
          {[0,1,2,3,4].map(i => <div key={i} style={{ width:4, height:4, borderRadius:'50%', background: i===0 ? '#c07a5a' : 'rgba(255,253,248,0.3)' }} />)}
        </div>
      </section>

      {/* SPACES STRIP */}
      <section style={{ background:'#fffdf8', padding:'0', borderBottom:'1px solid #ede6d6' }}>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(6,1fr)' }}>
          {features.map((f, i) => (
            <div key={i} style={{
              padding:'28px 20px', textAlign:'center', cursor:'pointer',
              borderRight: i < 5 ? '1px solid #ede6d6' : 'none',
              transition:'background 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.background='#f5f0e8'}
              onMouseLeave={e => e.currentTarget.style.background='transparent'}
            >
              <div style={{ fontSize:'22px', marginBottom:'8px' }}>{f.icon}</div>
              <p style={{ fontFamily:"'Poppins',sans-serif", fontSize:'12px', fontWeight:500, letterSpacing:'0.06em', textTransform:'uppercase', color:'#2d4949', marginBottom:'4px' }}>{f.label}</p>
              <p style={{ fontFamily:"'Poppins',sans-serif", fontSize:'11px', fontWeight:300, color:'#8c7d68', lineHeight:1.5 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* INTRO SECTION */}
      <section style={{ background:'#f5f0e8', padding:'96px 80px' }}>
        <div style={{ maxWidth:'1100px', margin:'0 auto', display:'grid', gridTemplateColumns:'1fr 1fr', gap:'80px', alignItems:'center' }}>
          <div>
            <SectionOverline>Más que un lugar</SectionOverline>
            <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'44px', fontWeight:300, lineHeight:1.2, color:'#1a1a1a', marginBottom:'24px' }}>
              Una experiencia<br />para toda la vida.
            </h2>
            <p style={{ fontFamily:"'Poppins',sans-serif", fontSize:'14px', fontWeight:300, lineHeight:1.8, color:'#5a5040', marginBottom:'16px' }}>
              Una finca familiar rodeada de naturaleza, diseñada para celebrar momentos importantes, descansar y conectar con lo que realmente importa.
            </p>
            <p style={{ fontFamily:"'Poppins',sans-serif", fontSize:'14px', fontWeight:300, lineHeight:1.8, color:'#5a5040', marginBottom:'32px' }}>
              Más de 25 años siendo testigos de historias, familias, bodas y reencuentros. Cada espacio fue diseñado con amor y propósito.
            </p>
            <button onClick={() => navigate('nosotros')} style={{
              fontFamily:"'Poppins',sans-serif", fontSize:'11px', fontWeight:500,
              letterSpacing:'0.1em', textTransform:'uppercase',
              color:'#fffdf8', background:'#2d4949',
              border:'none', padding:'13px 28px', borderRadius:'3px', cursor:'pointer',
            }}>Descubre más →</button>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'12px' }}>
            {[
              'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&q=80',
              'https://images.unsplash.com/photo-1464146072230-91cabc968266?w=400&q=80',
              'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80',
              'https://images.unsplash.com/photo-1574739782594-db4ead022697?w=400&q=80',
            ].map((src, i) => (
              <div key={i} style={{ borderRadius:'8px', overflow:'hidden', aspectRatio:'1', background:'#ede6d6' }}>
                <img src={src} alt="" style={{ width:'100%', height:'100%', objectFit:'cover', display:'block' }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ background:'#fffdf8', padding:'96px 80px' }}>
        <div style={{ maxWidth:'1100px', margin:'0 auto' }}>
          <div style={{ textAlign:'center', marginBottom:'56px' }}>
            <SectionOverline>Experiencias y paquetes</SectionOverline>
            <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'44px', fontWeight:300, color:'#1a1a1a' }}>
              Para celebrar lo que importa
            </h2>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(5,1fr)', gap:'16px' }}>
            {services.map(s => (
              <div key={s.id} onClick={() => navigate('experiencias')} style={{
                background:'#f5f0e8', borderRadius:'8px', padding:'28px 20px',
                textAlign:'center', cursor:'pointer', border:'1px solid #ede6d6',
                transition:'all 0.25s',
              }}
                onMouseEnter={e => { e.currentTarget.style.background='#2d4949'; e.currentTarget.querySelector('.svc-icon').style.color='#c07a5a'; e.currentTarget.querySelectorAll('p').forEach(p => p.style.color='rgba(255,253,248,0.8)'); e.currentTarget.querySelector('.svc-title').style.color='#fffdf8'; }}
                onMouseLeave={e => { e.currentTarget.style.background='#f5f0e8'; e.currentTarget.querySelector('.svc-icon').style.color='#c07a5a'; e.currentTarget.querySelectorAll('p').forEach(p => p.style.color='#8c7d68'); e.currentTarget.querySelector('.svc-title').style.color='#2d4949'; }}
              >
                <div className="svc-icon" style={{ fontSize:'24px', marginBottom:'12px', color:'#c07a5a' }}>{s.icon}</div>
                <p className="svc-title" style={{ fontFamily:"'Poppins',sans-serif", fontSize:'12px', fontWeight:500, color:'#2d4949', marginBottom:'8px', lineHeight:1.4 }}>{s.label}</p>
                <p style={{ fontFamily:"'Poppins',sans-serif", fontSize:'11px', fontWeight:300, color:'#8c7d68', lineHeight:1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign:'center', marginTop:'40px' }}>
            <button onClick={() => navigate('experiencias')} style={{
              fontFamily:"'Poppins',sans-serif", fontSize:'11px', fontWeight:500,
              letterSpacing:'0.1em', textTransform:'uppercase',
              color:'#2d4949', background:'transparent',
              border:'1.5px solid #2d4949',
              padding:'13px 36px', borderRadius:'3px', cursor:'pointer',
            }}>Ver todos los paquetes →</button>
          </div>
        </div>
      </section>

      {/* QUOTE BAND */}
      <section style={{ background:'#2d4949', padding:'64px 80px', textAlign:'center' }}>
        <p style={{ fontFamily:"'Poppins',sans-serif", fontSize:'11px', fontWeight:500, letterSpacing:'0.14em', textTransform:'uppercase', color:'rgba(232,196,173,0.7)', marginBottom:'20px' }}>Nuestra esencia</p>
        <blockquote style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(28px,4vw,46px)', fontStyle:'italic', fontWeight:300, lineHeight:1.3, color:'#fffdf8', maxWidth:'700px', margin:'0 auto 24px' }}>
          "Aquí no solo rentas un espacio,<br />vives una experiencia que se queda en tu historia."
        </blockquote>
        <div style={{ width:'40px', height:'1px', background:'#c07a5a', margin:'0 auto' }} />
      </section>

      <CTASection navigate={navigate} />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   EXPERIENCIAS PAGE
═══════════════════════════════════════════════════════════ */
function ExperienciasPage({ navigate }) {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { label: 'Eventos Sociales', icon: '💍' },
    { label: 'Corporativos y Equipos', icon: '🏢' },
    { label: 'Retiros y Campamentos', icon: '⛺' },
    { label: 'Estancia Privada', icon: '🔑' },
    { label: 'One Day Experience', icon: '✨' },
  ];

  const packageSets = [
    // Eventos Sociales
    [
      { title: 'Boda Íntima', price: '$40,000', over: 'Bodas', img: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80', desc: 'Una ceremonia íntima rodeada de jardines y naturaleza, para el momento más especial de tu vida.', features: ['Hasta 80 personas','Jardín y terraza','Coordinador de evento','Decoración base incluida','Acceso a todas las áreas'] },
      { title: 'Quinceañera & Festejo', price: '$35,000', over: 'Celebraciones', img: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80', desc: 'Espacios versátiles para fiestas con alberca, salón y jardines. Un momento para siempre.', features: ['Hasta 120 personas','Salón + jardín','Sonido e iluminación','Alberca disponible','Estacionamiento amplio'] },
      { title: 'Social & Más', price: '$28,000', over: 'Eventos', img: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&q=80', desc: 'Cumpleaños, aniversarios, bautizos y reuniones familiares con la calidez y naturaleza de la finca.', features: ['Hasta 60 personas','Espacios al aire libre','Cocina disponible','Jardines y alberca','Personalizable'] },
    ],
    // Corporativos
    [
      { title: 'Team Building', price: '$18,000', over: 'Equipos', img: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&q=80', desc: 'Integración empresarial en un entorno natural que favorece la creatividad y el trabajo en equipo.', features: ['Hasta 40 personas','Salón equipado','Proyector y pantalla','Coffee break incluido','Áreas verdes para dinámicas'] },
      { title: 'Workshop & Capacitación', price: '$14,000', over: 'Corporativo', img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80', desc: 'Espacio privado y enfocado para talleres, formaciones y reuniones de alto nivel.', features: ['Hasta 25 personas','WiFi de alta velocidad','Pizarrones y material','Catering opcional','Privacidad total'] },
      { title: 'Convivencia Empresarial', price: '$22,000', over: 'Empresas', img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&q=80', desc: 'Un día de descanso y convivencia para tu equipo, con alberca, jardines y gastronomía.', features: ['Hasta 80 personas','Acceso completo a la finca','Alberca y jardines','Catering disponible','Fotografía opcional'] },
    ],
    // Retiros
    [
      { title: 'Retiro Espiritual', price: '$12,000', over: 'Retiros', img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80', desc: 'Días de calma, reflexión y comunidad para grupos cristianos, de bienestar o meditación.', features: ['2–3 días de estancia','Capacidad hasta 30 personas','Habitaciones disponibles','Fogata y áreas verdes','Cocina equipada'] },
      { title: 'Campamento Juvenil', price: '$9,500', over: 'Campamentos', img: 'https://images.unsplash.com/photo-1533240332313-0db49b459ad6?w=600&q=80', desc: 'Actividades al aire libre, fogatas, alberca y convivencia sana para grupos jóvenes.', features: ['Hasta 50 jóvenes','Estancia 2 noches','Dinámicas incluidas','Fogata nocturna','Monitor de seguridad'] },
      { title: 'Retiro Familiar', price: '$16,000', over: 'Familias', img: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&q=80', desc: 'Un fin de semana especial para reencontrarse, descansar y disfrutar en familia.', features: ['Todo el fin de semana','Familia de hasta 40 personas','Casa completa','Alberca privada','Cocina y parrilla'] },
    ],
    // Estancia Privada
    [
      { title: 'Estancia de Día', price: '$8,000', over: 'Día Completo', img: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&q=80', desc: 'Disfruta la finca completa durante el día: alberca, jardines, terraza y espacios abiertos.', features: ['9am – 8pm','Hasta 30 personas','Acceso a todas las áreas','Cocina disponible','Estacionamiento incluido'] },
      { title: 'Estancia de Fin de Semana', price: '$22,000', over: 'Overnight', img: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80', desc: 'Renta exclusiva de la casa y todos los espacios para grupos que quieren una experiencia privada completa.', features: ['Viernes–Domingo','Hasta 20 personas en casa','Casa completamente equipada','Alberca privada','Servicio de limpieza'] },
    ],
    // One Day
    [
      { title: 'Cena Bajo las Estrellas', price: '$1,800/persona', over: 'One Day', img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80', desc: 'Una noche especial con gastronomía local, decoración única y la magia de la finca de noche.', features: ['Menú de 4 tiempos','Mesa para 2–10 personas','Música en vivo opcional','Decoración incluida','Reservación previa'] },
      { title: 'Cine al Aire Libre', price: '$350/persona', over: 'Experiencia', img: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&q=80', desc: 'Pantalla grande, butacas cómodas y snacks artesanales bajo el cielo abierto de la finca.', features: ['Proyección HD outdoor','Snacks y bebidas incluidas','Capacidad hasta 40 personas','Clima natural','Distintas películas cada mes'] },
    ],
  ];

  const extras = [
    { icon: '🎵', title: 'Música en Vivo', desc: 'Bandas y solistas seleccionados.' },
    { icon: '📸', title: 'Fotografía', desc: 'Sesiones y cobertura de evento.' },
    { icon: '🌸', title: 'Arreglos Florales', desc: 'Diseño floral personalizado.' },
    { icon: '🍽', title: 'Catering & Bar', desc: 'Gastronomía local y coctelería.' },
    { icon: '🕯', title: 'Ambientación', desc: 'Luces, velas y decoración temática.' },
    { icon: '🎂', title: 'Pastelería', desc: 'Pasteles artesanales a pedido.' },
    { icon: '🚐', title: 'Transporte', desc: 'Coordinación de traslados grupales.' },
    { icon: '💆', title: 'Bienestar', desc: 'Masajes y actividades de relajación.' },
  ];

  const packages = packageSets[activeTab] || [];

  return (
    <div>
      {/* HERO */}
      <section style={{
        position:'relative', height:'70vh', minHeight:'480px',
        display:'flex', alignItems:'center', justifyContent:'center',
        backgroundImage:'url(https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1600&q=80)',
        backgroundSize:'cover', backgroundPosition:'center 30%',
      }}>
        <div style={{ position:'absolute', inset:0, background:'rgba(18,28,24,0.58)' }} />
        <div style={{ position:'relative', zIndex:1, textAlign:'center', padding:'0 24px' }}>
          <p style={{ fontFamily:"'Poppins',sans-serif", fontSize:'11px', fontWeight:500, letterSpacing:'0.16em', textTransform:'uppercase', color:'rgba(232,196,173,0.8)', marginBottom:'16px' }}>
            Finca La Hermosa · Experiencias & Paquetes
          </p>
          <h1 style={{ fontFamily:"'Against',serif", fontSize:'clamp(44px,7vw,80px)', lineHeight:1, color:'#fffdf8', marginBottom:0 }}>
            Cada experiencia,
          </h1>
          <h1 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(44px,7vw,80px)', fontStyle:'italic', fontWeight:300, lineHeight:1.1, color:'#c07a5a', marginBottom:'24px' }}>
            diseñada para ti
          </h1>
          <p style={{ fontFamily:"'Poppins',sans-serif", fontSize:'14px', fontWeight:300, color:'rgba(255,253,248,0.7)', maxWidth:'440px', margin:'0 auto 32px', lineHeight:1.7 }}>
            Bodas, retiros, team buildings, estancias y experiencias únicas. Explora los paquetes y encuentra el que se ajusta a tu momento.
          </p>
          <button style={{
            fontFamily:"'Poppins',sans-serif", fontSize:'11px', fontWeight:500,
            letterSpacing:'0.1em', textTransform:'uppercase',
            color:'#fffdf8', background:'transparent',
            border:'1px solid rgba(255,253,248,0.45)',
            padding:'13px 30px', borderRadius:'3px', cursor:'pointer',
          }}>Explorar paquetes ↓</button>
        </div>
      </section>

      {/* TABS */}
      <section style={{ background:'#fffdf8', borderBottom:'1px solid #ede6d6', position:'sticky', top:'72px', zIndex:50 }}>
        <div style={{ display:'flex', justifyContent:'center', padding:'0' }}>
          {tabs.map((t, i) => (
            <button key={i} onClick={() => setActiveTab(i)} style={{
              fontFamily:"'Poppins',sans-serif", fontSize:'12px', fontWeight: activeTab===i ? 500 : 300,
              letterSpacing:'0.04em',
              color: activeTab===i ? '#c07a5a' : '#8c7d68',
              background:'none', border:'none',
              borderBottom: activeTab===i ? '2px solid #c07a5a' : '2px solid transparent',
              padding:'18px 28px', cursor:'pointer',
              transition:'all 0.2s',
              display:'flex', gap:'8px', alignItems:'center',
            }}>
              <span>{t.icon}</span> {t.label}
            </button>
          ))}
        </div>
      </section>

      {/* PACKAGES */}
      <section style={{ background:'#f5f0e8', padding:'80px' }}>
        <div style={{ maxWidth:'1100px', margin:'0 auto' }}>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', marginBottom:'40px' }}>
            <div>
              <SectionOverline>Para celebrar lo que importa</SectionOverline>
              <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'38px', fontWeight:300, color:'#1a1a1a' }}>
                {tabs[activeTab].label}
              </h2>
            </div>
            <button style={{ fontFamily:"'Poppins',sans-serif", fontSize:'11px', fontWeight:500, letterSpacing:'0.08em', textTransform:'uppercase', color:'#2d4949', background:'none', border:'none', cursor:'pointer' }}>Filtrar más →</button>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'24px' }}>
            {packages.map((pkg, i) => (
              <div key={i} style={{ background:'#fffdf8', borderRadius:'8px', overflow:'hidden', boxShadow:'0 2px 8px rgba(45,73,73,0.07), 0 8px 24px rgba(45,73,73,0.05)' }}>
                <div style={{ position:'relative', height:'200px' }}>
                  <img src={pkg.img} alt={pkg.title} style={{ width:'100%', height:'100%', objectFit:'cover', display:'block' }} />
                  <div style={{ position:'absolute', bottom:'12px', left:'12px', background:'rgba(26,26,26,0.72)', backdropFilter:'blur(8px)', borderRadius:'4px', padding:'5px 12px' }}>
                    <span style={{ fontFamily:"'Poppins',sans-serif", fontSize:'12px', fontWeight:400, color:'#fffdf8' }}>Desde {pkg.price}</span>
                  </div>
                </div>
                <div style={{ padding:'24px 24px 28px' }}>
                  <p style={{ fontFamily:"'Poppins',sans-serif", fontSize:'10px', fontWeight:500, letterSpacing:'0.12em', textTransform:'uppercase', color:'#c07a5a', marginBottom:'6px' }}>{pkg.over}</p>
                  <h3 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'22px', fontWeight:400, color:'#1a1a1a', marginBottom:'10px' }}>{pkg.title}</h3>
                  <p style={{ fontFamily:"'Poppins',sans-serif", fontSize:'13px', fontWeight:300, lineHeight:1.7, color:'#5a5040', marginBottom:'16px' }}>{pkg.desc}</p>
                  <ul style={{ listStyle:'none', marginBottom:'24px', display:'flex', flexDirection:'column', gap:'6px' }}>
                    {pkg.features.map((f, j) => (
                      <li key={j} style={{ display:'flex', gap:'8px', alignItems:'center' }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#c07a5a" strokeWidth="2" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
                        <span style={{ fontFamily:"'Poppins',sans-serif", fontSize:'12px', fontWeight:300, color:'#5a5040' }}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <button style={{
                    width:'100%', fontFamily:"'Poppins',sans-serif", fontSize:'11px', fontWeight:500,
                    letterSpacing:'0.1em', textTransform:'uppercase',
                    color:'#fffdf8', background:'#2d4949',
                    border:'none', padding:'13px', borderRadius:'3px', cursor:'pointer',
                  }}>Consultar disponibilidad →</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXTRAS */}
      <section style={{ background:'#fffdf8', padding:'80px' }}>
        <div style={{ maxWidth:'1100px', margin:'0 auto' }}>
          <div style={{ textAlign:'center', marginBottom:'48px' }}>
            <SectionOverline>Complementa tu experiencia</SectionOverline>
            <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'38px', fontWeight:300, color:'#1a1a1a' }}>Experiencias extra</h2>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:'16px' }}>
            {extras.map((e, i) => (
              <div key={i} style={{ border:'1px solid #ede6d6', borderRadius:'8px', padding:'24px 20px', cursor:'pointer', transition:'all 0.2s' }}
                onMouseEnter={el => { el.currentTarget.style.borderColor='#c07a5a'; el.currentTarget.style.background='#fdf8f4'; }}
                onMouseLeave={el => { el.currentTarget.style.borderColor='#ede6d6'; el.currentTarget.style.background='transparent'; }}
              >
                <div style={{ fontSize:'22px', marginBottom:'10px' }}>{e.icon}</div>
                <p style={{ fontFamily:"'Poppins',sans-serif", fontSize:'13px', fontWeight:500, color:'#2d4949', marginBottom:'5px' }}>{e.title}</p>
                <p style={{ fontFamily:"'Poppins',sans-serif", fontSize:'12px', fontWeight:300, color:'#8c7d68', lineHeight:1.5 }}>{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection navigate={navigate} />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   NOSOTROS PAGE
═══════════════════════════════════════════════════════════ */
function NosotrosPage({ navigate }) {
  const diffs = [
    { icon: '🌱', title: 'Propiedad auténtica', desc: 'Una finca familiar restaurada con historia y carácter propio. No es un salón construido para eventos.' },
    { icon: '✔', title: 'Todo en un solo lugar', desc: 'Casa, jardines, alberca, salón, terraza y espacios abiertos, todo en una sola propiedad.' },
    { icon: '💚', title: 'Hospitalidad genuina', desc: 'Cada evento lo tratamos como si fuera nuestro. Hospitalidad cercana, cálida y personalizada.' },
    { icon: '🎯', title: 'Diseño a medida', desc: 'Nos adaptamos a tu evento, no al revés. Desde lo más íntimo hasta lo más espectacular.' },
  ];

  return (
    <div>
      {/* HERO */}
      <section style={{
        position:'relative', height:'75vh', minHeight:'500px',
        display:'flex', alignItems:'center', justifyContent:'center',
        backgroundImage:'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80)',
        backgroundSize:'cover', backgroundPosition:'center',
      }}>
        <div style={{ position:'absolute', inset:0, background:'rgba(18,28,24,0.54)' }} />
        <div style={{ position:'relative', zIndex:1, textAlign:'center', padding:'0 24px' }}>
          <p style={{ fontFamily:"'Poppins',sans-serif", fontSize:'11px', fontWeight:500, letterSpacing:'0.16em', textTransform:'uppercase', color:'rgba(232,196,173,0.8)', marginBottom:'16px' }}>
            Finca La Hermosa · Nuestra Historia
          </p>
          <h1 style={{ fontFamily:"'Against',serif", fontSize:'clamp(44px,7vw,80px)', lineHeight:1, color:'#fffdf8' }}>Más que una finca,</h1>
          <h1 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(44px,7vw,80px)', fontStyle:'italic', fontWeight:300, lineHeight:1.1, color:'#c07a5a', marginBottom:'28px' }}>un legado familiar</h1>
          <p style={{ fontFamily:"'Poppins',sans-serif", fontSize:'14px', fontWeight:300, color:'rgba(255,253,248,0.7)', maxWidth:'460px', margin:'0 auto 32px', lineHeight:1.7 }}>
            Una finca, una propiedad restaurada con amor y más de 25 años de historia familiar en el campo mexicano.
          </p>
          <div style={{ display:'flex', gap:'12px', justifyContent:'center' }}>
            <button style={{ fontFamily:"'Poppins',sans-serif", fontSize:'11px', fontWeight:500, letterSpacing:'0.09em', textTransform:'uppercase', color:'#fffdf8', background:'transparent', border:'1px solid rgba(255,253,248,0.45)', padding:'13px 28px', borderRadius:'3px', cursor:'pointer' }}>Conocer nuestro espíritu</button>
            <button onClick={() => navigate('experiencias')} style={{ fontFamily:"'Poppins',sans-serif", fontSize:'11px', fontWeight:500, letterSpacing:'0.09em', textTransform:'uppercase', color:'#fffdf8', background:'#c07a5a', border:'none', padding:'13px 28px', borderRadius:'3px', cursor:'pointer' }}>Agendar visita</button>
          </div>
        </div>
      </section>

      {/* SPLIT STORY */}
      <section style={{ background:'#fffdf8', padding:'96px 80px' }}>
        <div style={{ maxWidth:'1100px', margin:'0 auto', display:'grid', gridTemplateColumns:'1fr 1fr', gap:'80px', alignItems:'center' }}>
          <div style={{ borderRadius:'8px', overflow:'hidden', aspectRatio:'4/3', background:'#ede6d6' }}>
            <img src="https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=80" alt="La finca" style={{ width:'100%', height:'100%', objectFit:'cover' }} />
          </div>
          <div>
            <SectionOverline>Nuestra historia</SectionOverline>
            <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'38px', fontWeight:300, lineHeight:1.3, color:'#1a1a1a', marginBottom:'24px' }}>
              Una propiedad restaurada<br />con amor y propósito
            </h2>
            <p style={{ fontFamily:"'Poppins',sans-serif", fontSize:'14px', fontWeight:300, lineHeight:1.8, color:'#5a5040', marginBottom:'16px' }}>
              Todo comenzó con un deseo simple: una propiedad donde la familia se pudiera reunir. Con los años, la finca creció, se restauró y se convirtió en algo mucho más grande que un hogar privado.
            </p>
            <p style={{ fontFamily:"'Poppins',sans-serif", fontSize:'14px', fontWeight:300, lineHeight:1.8, color:'#5a5040', marginBottom:'16px' }}>
              Hoy, Finca La Hermosa recibe a familias, parejas, empresas y grupos que buscan un espacio distinto: natural, cálido, auténtico y versátil.
            </p>
            <p style={{ fontFamily:"'Poppins',sans-serif", fontSize:'14px', fontWeight:300, lineHeight:1.8, color:'#5a5040' }}>
              Aquí no vendemos un espacio; compartimos una experiencia que fue diseñada para que la vida se celebre con belleza, hospitalidad y naturaleza.
            </p>
          </div>
        </div>
      </section>

      {/* DIFFERENTIATORS */}
      <section style={{ background:'#f5f0e8', padding:'80px' }}>
        <div style={{ maxWidth:'1100px', margin:'0 auto' }}>
          <div style={{ textAlign:'center', marginBottom:'52px' }}>
            <SectionOverline>Nuestra promesa</SectionOverline>
            <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'38px', fontWeight:300, color:'#1a1a1a' }}>Qué nos hace diferentes</h2>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:'20px' }}>
            {diffs.map((d, i) => (
              <div key={i} style={{ background:'#fffdf8', borderRadius:'8px', padding:'28px 24px', boxShadow:'0 2px 8px rgba(45,73,73,0.05)' }}>
                <div style={{ width:'40px', height:'40px', borderRadius:'50%', background:'#2d4949', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'18px', marginBottom:'16px' }}>{d.icon}</div>
                <h4 style={{ fontFamily:"'Poppins',sans-serif", fontSize:'13px', fontWeight:500, color:'#2d4949', marginBottom:'8px' }}>{d.title}</h4>
                <p style={{ fontFamily:"'Poppins',sans-serif", fontSize:'12px', fontWeight:300, lineHeight:1.7, color:'#5a5040' }}>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section style={{ background:'#fffdf8', padding:'80px' }}>
        <div style={{ maxWidth:'1100px', margin:'0 auto', display:'grid', gridTemplateColumns:'1fr 1fr', gap:'80px', alignItems:'center' }}>
          <div>
            <SectionOverline>Visítanos</SectionOverline>
            <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'38px', fontWeight:300, lineHeight:1.3, color:'#1a1a1a', marginBottom:'28px' }}>
              En el corazón<br />del campo mexicano
            </h2>
            <p style={{ fontFamily:"'Poppins',sans-serif", fontSize:'14px', fontWeight:300, lineHeight:1.8, color:'#5a5040', marginBottom:'24px' }}>
              Finca La Hermosa está ubicada a unos minutos del centro, en un entorno natural que invita al descanso, la convivencia y la celebración.
            </p>
            <div style={{ display:'flex', flexDirection:'column', gap:'12px' }}>
              {[
                ['📍', 'Dirección', 'Cuitláhuac, Veracruz, México'],
                ['📞', 'Teléfono', '+1 (33) 994-7922'],
                ['📧', 'Correo', 'hola@fincalahermosa.com'],
                ['🕐', 'Horario de visitas', 'Lunes a viernes, 10am – 6pm'],
              ].map(([icon, lbl, val]) => (
                <div key={lbl} style={{ display:'flex', gap:'14px', alignItems:'flex-start' }}>
                  <span style={{ fontSize:'16px', marginTop:'2px' }}>{icon}</span>
                  <div>
                    <p style={{ fontFamily:"'Poppins',sans-serif", fontSize:'11px', fontWeight:500, letterSpacing:'0.06em', textTransform:'uppercase', color:'#8c7d68', marginBottom:'2px' }}>{lbl}</p>
                    <p style={{ fontFamily:"'Poppins',sans-serif", fontSize:'13px', fontWeight:300, color:'#5a5040' }}>{val}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ borderRadius:'8px', overflow:'hidden', aspectRatio:'4/3', background:'#ede6d6', display:'flex', alignItems:'center', justifyContent:'center' }}>
            <div style={{ textAlign:'center', color:'#8c7d68' }}>
              <div style={{ fontSize:'32px', marginBottom:'12px' }}>🗺</div>
              <p style={{ fontFamily:"'Poppins',sans-serif", fontSize:'13px', fontWeight:300 }}>Mapa — Cuitláhuac, Veracruz</p>
              <p style={{ fontFamily:"'Poppins',sans-serif", fontSize:'11px', fontWeight:300, color:'#8c7d68', marginTop:'6px' }}>[Mapa integrado en producción]</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA DARK */}
      <section style={{
        position:'relative', minHeight:'420px',
        display:'flex', alignItems:'center', justifyContent:'center',
        backgroundImage:'url(https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1400&q=80)',
        backgroundSize:'cover', backgroundPosition:'center top',
      }}>
        <div style={{ position:'absolute', inset:0, background:'rgba(18,28,24,0.62)' }} />
        <div style={{ position:'relative', zIndex:1, textAlign:'center', padding:'0 24px', maxWidth:'560px' }}>
          <SectionOverline light>Finca La Hermosa · Te recibimos</SectionOverline>
          <h2 style={{ fontFamily:"'Against',serif", fontSize:'52px', lineHeight:1, color:'#fffdf8', marginBottom:0 }}>Aquí empieza</h2>
          <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'52px', fontStyle:'italic', fontWeight:300, lineHeight:1.1, color:'#c07a5a' }}>tu historia.</h2>
          <p style={{ fontFamily:"'Poppins',sans-serif", fontSize:'14px', fontWeight:300, lineHeight:1.7, color:'rgba(255,253,248,0.72)', margin:'20px 0 32px' }}>
            Agenda una visita sin compromiso y conoce la finca de primera mano. Te recibiremos con calma y hospitalidad.
          </p>
          <div style={{ display:'flex', gap:'12px', justifyContent:'center' }}>
            <button onClick={() => navigate('experiencias')} style={{ fontFamily:"'Poppins',sans-serif", fontSize:'11px', fontWeight:500, letterSpacing:'0.1em', textTransform:'uppercase', color:'#fffdf8', background:'#c07a5a', border:'none', padding:'13px 28px', borderRadius:'3px', cursor:'pointer' }}>Agendar visita →</button>
            <button style={{ fontFamily:"'Poppins',sans-serif", fontSize:'11px', fontWeight:500, letterSpacing:'0.1em', textTransform:'uppercase', color:'#fffdf8', background:'transparent', border:'1px solid rgba(255,253,248,0.4)', padding:'13px 28px', borderRadius:'3px', cursor:'pointer' }}>Ver más</button>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   FAQ PAGE
═══════════════════════════════════════════════════════════ */
function FAQPage({ navigate }) {
  const [open, setOpen] = useState(null);
  const faqs = [
    { q: '¿Cómo puedo reservar la finca?', a: 'Puedes agendar una visita directamente desde nuestra página, por WhatsApp o por correo electrónico. Te contactaremos en menos de 24 horas para confirmar disponibilidad y discutir los detalles de tu evento.' },
    { q: '¿Cuántas personas pueden asistir a un evento?', a: 'La capacidad varía según el tipo de evento y los espacios utilizados. Para eventos sociales en salón + jardines, podemos recibir hasta 120 personas. Para estancias privadas, la capacidad de la casa es de hasta 20 personas.' },
    { q: '¿Incluyen catering o debo contratarlo aparte?', a: 'El catering es opcional y se puede contratar como un servicio adicional. Contamos con proveedores de confianza especializados en gastronomía regional y cócteles. También puedes traer tu propio servicio de alimentos.' },
    { q: '¿Se permiten decoraciones personalizadas?', a: 'Sí. Puedes traer tu propio equipo de decoración o contratarlo con nosotros. Somos flexibles y queremos que el espacio se sienta completamente tuyo. Solo pedimos que no se usen elementos que puedan dañar las instalaciones.' },
    { q: '¿La finca tiene estacionamiento?', a: 'Sí, contamos con estacionamiento amplio dentro de la propiedad, sin costo adicional para los asistentes al evento.' },
    { q: '¿Pueden hacerse eventos en días de semana?', a: 'Sí. Los eventos entre semana tienen disponibilidad casi siempre y en algunos casos tienen tarifas preferenciales. Consúltanos para obtener la mejor propuesta.' },
    { q: '¿Hay un depósito o anticipo para reservar?', a: 'Sí, solicitamos un anticipo para confirmar la fecha y asegurar la disponibilidad. El monto varía según el tipo de evento. Te explicaremos los detalles al momento de cotizar.' },
    { q: '¿La finca tiene servicio de alojamiento?', a: 'Sí. En la modalidad de Estancia Privada, la casa principal está disponible para pernoctación de grupos pequeños o medianos. Cuenta con habitaciones, baños completos, cocina equipada y todas las comodidades.' },
  ];
  return (
    <div style={{ minHeight:'80vh' }}>
      {/* Header */}
      <section style={{ background:'#2d4949', padding:'120px 80px 80px', textAlign:'center' }}>
        <SectionOverline light>Preguntas frecuentes</SectionOverline>
        <h1 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'52px', fontWeight:300, color:'#fffdf8', marginBottom:'16px' }}>Todo lo que necesitas saber</h1>
        <p style={{ fontFamily:"'Poppins',sans-serif", fontSize:'14px', fontWeight:300, color:'rgba(255,253,248,0.65)', maxWidth:'480px', margin:'0 auto' }}>
          Resolvemos tus dudas para que puedas enfocarte en lo que realmente importa: disfrutar tu experiencia.
        </p>
      </section>
      {/* Accordion */}
      <section style={{ background:'#fffdf8', padding:'80px' }}>
        <div style={{ maxWidth:'780px', margin:'0 auto', display:'flex', flexDirection:'column', gap:'0' }}>
          {faqs.map((f, i) => (
            <div key={i} style={{ borderBottom:'1px solid #ede6d6' }}>
              <button onClick={() => setOpen(open===i ? null : i)} style={{
                width:'100%', display:'flex', justifyContent:'space-between', alignItems:'center',
                padding:'22px 0', background:'none', border:'none', cursor:'pointer', textAlign:'left',
              }}>
                <span style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'20px', fontWeight:400, color:'#1a1a1a' }}>{f.q}</span>
                <span style={{ color:'#c07a5a', fontSize:'20px', fontWeight:300, flexShrink:0, marginLeft:'16px' }}>{open===i ? '−' : '+'}</span>
              </button>
              {open===i && (
                <p style={{ fontFamily:"'Poppins',sans-serif", fontSize:'14px', fontWeight:300, lineHeight:1.8, color:'#5a5040', paddingBottom:'20px' }}>{f.a}</p>
              )}
            </div>
          ))}
        </div>
      </section>
      <CTASection navigate={navigate} />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   ESPACIOS PAGE
═══════════════════════════════════════════════════════════ */
function EspaciosPage({ navigate }) {
  const spaces = [
    { name:'Jardín Principal', cap:'Hasta 120 personas', desc:'El corazón de la finca. Árboles añosos, flores y luz natural crean el escenario ideal para ceremonias y celebraciones al aire libre.', img:'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80' },
    { name:'Alberca', cap:'Área recreativa', desc:'Alberca de gran formato en contexto natural, rodeada de vegetación y espacio para convivencia. Ideal para estancias y eventos informales.', img:'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80' },
    { name:'Salón Principal', cap:'Hasta 80 personas', desc:'Salón elegante con techos altos, iluminación adaptable y ventilación natural. Ideal para banquetes, cenas y celebraciones formales.', img:'https://images.unsplash.com/photo-1464146072230-91cabc968266?w=800&q=80' },
    { name:'Terraza', cap:'Hasta 60 personas', desc:'Espacio semi-abierto con vista al jardín. Perfecta para cócteles, reuniones informales y fotografía de atardecer.', img:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80' },
    { name:'Casa Principal', cap:'Hasta 20 huéspedes', desc:'Casa completa equipada para estancias privadas. Habitaciones, baños, cocina y sala de convivencia en un ambiente cálido y familiar.', img:'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80' },
    { name:'Espacios Naturales', cap:'Áreas abiertas', desc:'Senderos, áreas de fogata, zonas de descanso y espacios silvestres que conectan a los huéspedes con la naturaleza de la finca.', img:'https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=80' },
  ];

  return (
    <div>
      <section style={{ background:'#2d4949', padding:'120px 80px 80px', textAlign:'center' }}>
        <SectionOverline light>Nuestros espacios</SectionOverline>
        <h1 style={{ fontFamily:"'Against',serif", fontSize:'clamp(44px,6vw,72px)', color:'#fffdf8', lineHeight:1, marginBottom:'6px' }}>La finca completa,</h1>
        <h1 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(44px,6vw,72px)', fontStyle:'italic', fontWeight:300, lineHeight:1.1, color:'#c07a5a' }}>para tu experiencia</h1>
      </section>
      <section style={{ background:'#f5f0e8', padding:'80px' }}>
        <div style={{ maxWidth:'1100px', margin:'0 auto', display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'24px' }}>
          {spaces.map((s,i) => (
            <div key={i} style={{ background:'#fffdf8', borderRadius:'8px', overflow:'hidden', boxShadow:'0 2px 8px rgba(45,73,73,0.06)' }}>
              <div style={{ height:'200px', overflow:'hidden' }}>
                <img src={s.img} alt={s.name} style={{ width:'100%', height:'100%', objectFit:'cover', display:'block' }} />
              </div>
              <div style={{ padding:'24px' }}>
                <p style={{ fontFamily:"'Poppins',sans-serif", fontSize:'10px', fontWeight:500, letterSpacing:'0.12em', textTransform:'uppercase', color:'#c07a5a', marginBottom:'4px' }}>{s.cap}</p>
                <h3 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'22px', fontWeight:400, color:'#1a1a1a', marginBottom:'10px' }}>{s.name}</h3>
                <p style={{ fontFamily:"'Poppins',sans-serif", fontSize:'13px', fontWeight:300, lineHeight:1.7, color:'#5a5040' }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <CTASection navigate={navigate} />
    </div>
  );
}

Object.assign(window, { HomePage, ExperienciasPage, NosotrosPage, FAQPage, EspaciosPage });
