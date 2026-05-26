// SharedComponents.jsx — Navbar + Footer
// Exports to window: { Navbar, Footer, CTASection, SectionOverline }

const { useState, useEffect, useRef } = React;

/* ── Small helpers ───────────────────────────────────────── */
function SectionOverline({ children, light }) {
  return (
    <p style={{
      fontFamily: "'Poppins', sans-serif",
      fontSize: '11px', fontWeight: 500,
      letterSpacing: '0.14em', textTransform: 'uppercase',
      color: light ? 'rgba(232,196,173,0.9)' : '#c07a5a',
      marginBottom: '10px',
    }}>{children}</p>
  );
}

/* ── Navbar ──────────────────────────────────────────────── */
function Navbar({ page, navigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'espacios', label: 'Espacios' },
    { id: 'experiencias', label: 'Experiencias' },
    { id: 'nosotros', label: 'Nosotros' },
    { id: 'faq', label: 'FAQ' },
  ];

  const navBg = scrolled
    ? 'rgba(39,63,61,0.88)'
    : 'transparent';
  const borderBottom = scrolled ? '1px solid rgba(255,255,255,0.08)' : 'none';

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: navBg,
      backdropFilter: scrolled ? 'blur(14px)' : 'none',
      borderBottom,
      transition: 'all 0.35s ease',
      padding: '0 48px', height: '72px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    }}>
      {/* Logo */}
      <div onClick={() => navigate('inicio')} style={{ cursor: 'pointer', display:'flex', alignItems:'center', gap:'10px' }}>
        <img src="../../assets/isotipo-verde.svg" alt="Finca La Hermosa"
          style={{ height: '38px', filter: scrolled ? 'brightness(10)' : 'brightness(10)' }} />
      </div>

      {/* Links */}
      <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
        {links.map(l => (
          <button key={l.id} onClick={() => navigate(l.id)} style={{
            background: 'none', border: 'none', cursor: 'pointer',
            fontFamily: "'Poppins', sans-serif", fontSize: '12px',
            fontWeight: 400, letterSpacing: '0.08em', textTransform: 'uppercase',
            color: page === l.id ? '#c07a5a' : 'rgba(255,253,248,0.82)',
            borderBottom: page === l.id ? '1px solid #c07a5a' : '1px solid transparent',
            paddingBottom: '2px',
            transition: 'color 0.2s',
          }}>{l.label}</button>
        ))}
        {/* Search icon */}
        <button style={{ background:'none', border:'none', cursor:'pointer', color:'rgba(255,253,248,0.7)', fontSize:'16px' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
        </button>
        <button onClick={() => navigate('experiencias')} style={{
          fontFamily: "'Poppins', sans-serif", fontSize: '11px', fontWeight: 500,
          letterSpacing: '0.1em', textTransform: 'uppercase',
          color: '#fffdf8', background: 'transparent',
          border: '1px solid rgba(255,253,248,0.5)',
          padding: '9px 20px', borderRadius: '3px', cursor: 'pointer',
          transition: 'all 0.2s',
        }}
          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(192,122,90,0.9)'; e.currentTarget.style.borderColor = '#c07a5a'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(255,253,248,0.5)'; }}
        >Agendar visita</button>
      </div>
    </nav>
  );
}

/* ── CTASection ──────────────────────────────────────────── */
function CTASection({ navigate }) {
  return (
    <section style={{
      position: 'relative', minHeight: '480px',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      backgroundImage: 'url(https://images.unsplash.com/photo-1519741497674-611481863552?w=1600&q=80)',
      backgroundSize: 'cover', backgroundPosition: 'center',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'rgba(26,20,16,0.45)',
      }} />
      <div style={{
        position: 'relative', zIndex: 1,
        background: 'rgba(39,63,61,0.78)',
        backdropFilter: 'blur(16px)',
        borderRadius: '12px',
        padding: '52px 60px',
        textAlign: 'center',
        maxWidth: '520px',
        border: '1px solid rgba(255,255,255,0.1)',
      }}>
        <SectionOverline light>¿No encontraste lo que buscas?</SectionOverline>
        <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(232,196,173,0.9)', marginBottom: '10px' }}></p>
        <h2 style={{ fontFamily: "'Against', serif", fontSize: '52px', lineHeight: 1, color: '#fffdf8', marginBottom: 0 }}>Lo diseñamos</h2>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '52px', fontStyle: 'italic', fontWeight: 300, lineHeight: 1.1, color: '#c07a5a', marginBottom: 0 }}>desde cero</h2>
        <h2 style={{ fontFamily: "'Against', serif", fontSize: '52px', lineHeight: 1.1, color: '#fffdf8', marginBottom: '20px' }}>para ti.</h2>
        <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '14px', fontWeight: 300, lineHeight: 1.7, color: 'rgba(255,253,248,0.72)', marginBottom: '32px' }}>
          Cuéntanos tu idea y la hacemos realidad. Cada experiencia personalizada empieza con una conversación.
        </p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button onClick={() => navigate('experiencias')} style={{
            fontFamily: "'Poppins', sans-serif", fontSize: '11px', fontWeight: 500,
            letterSpacing: '0.1em', textTransform: 'uppercase',
            color: '#fffdf8', background: '#c07a5a',
            border: 'none', padding: '13px 28px', borderRadius: '3px', cursor: 'pointer',
          }}>Agendar visita →</button>
          <button style={{
            fontFamily: "'Poppins', sans-serif", fontSize: '11px', fontWeight: 500,
            letterSpacing: '0.1em', textTransform: 'uppercase',
            color: '#fffdf8', background: 'transparent',
            border: '1px solid rgba(255,253,248,0.4)',
            padding: '13px 28px', borderRadius: '3px', cursor: 'pointer',
          }}>WhatsApp</button>
        </div>
      </div>
    </section>
  );
}

/* ── Footer ──────────────────────────────────────────────── */
function Footer({ navigate }) {
  const col = { display: 'flex', flexDirection: 'column', gap: '10px' };
  const link = {
    fontFamily: "'Poppins', sans-serif", fontSize: '13px', fontWeight: 300,
    color: 'rgba(255,253,248,0.65)', textDecoration: 'none', cursor: 'pointer',
    background: 'none', border: 'none', textAlign: 'left',
  };
  const heading = {
    fontFamily: "'Poppins', sans-serif", fontSize: '10px', fontWeight: 500,
    letterSpacing: '0.12em', textTransform: 'uppercase',
    color: 'rgba(255,253,248,0.4)', marginBottom: '4px',
  };

  return (
    <footer style={{ background: '#1e3232', padding: '64px 80px 40px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1.2fr', gap: '48px', marginBottom: '48px' }}>
        {/* Brand */}
        <div>
          <img src="../../assets/isotipo-verde.svg" alt="Finca La Hermosa"
            style={{ height: '52px', filter: 'brightness(10) opacity(0.9)', marginBottom: '16px' }} />
          <p style={{ ...link, color: 'rgba(255,253,248,0.5)', lineHeight: 1.7, fontSize: '12px', maxWidth: '220px' }}>
            Una finca familiar convertida en destino de experiencias. Naturaleza, hospitalidad y celebración.
          </p>
          <div style={{ display: 'flex', gap: '14px', marginTop: '20px' }}>
            {['ig','fb','tk'].map(s => (
              <div key={s} style={{ width:32, height:32, borderRadius:'50%', border:'1px solid rgba(255,253,248,0.2)', display:'flex', alignItems:'center', justifyContent:'center', cursor:'pointer' }}>
                <span style={{ color: 'rgba(255,253,248,0.5)', fontSize:'11px' }}>{s}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Nav */}
        <div>
          <p style={heading}>Navegación</p>
          <div style={col}>
            {['Inicio','Espacios','Experiencias','Nosotros','FAQ'].map(l => (
              <button key={l} style={link} onClick={() => navigate(l.toLowerCase())}>{l}</button>
            ))}
          </div>
        </div>
        {/* Services */}
        <div>
          <p style={heading}>Experiencias</p>
          <div style={col}>
            {['Eventos Sociales','Corporativos','Retiros','Estancia Privada','One Day Experience'].map(l => (
              <span key={l} style={link}>{l}</span>
            ))}
          </div>
        </div>
        {/* Contact */}
        <div>
          <p style={heading}>Contacto</p>
          <div style={col}>
            <span style={{ ...link, color: 'rgba(255,253,248,0.55)' }}>+1 (33) 994-7922</span>
            <span style={{ ...link, color: 'rgba(255,253,248,0.55)' }}>hola@fincalahermosa.com</span>
            <span style={{ ...link, color: 'rgba(255,253,248,0.55)', lineHeight: 1.6 }}>Cuitláhuac, Veracruz, México</span>
            <button onClick={() => navigate('experiencias')} style={{
              fontFamily: "'Poppins', sans-serif", fontSize: '11px', fontWeight: 500,
              letterSpacing: '0.08em', textTransform: 'uppercase',
              color: '#fffdf8', background: '#c07a5a',
              border: 'none', padding: '10px 20px', borderRadius: '3px', cursor: 'pointer',
              marginTop: '8px', alignSelf: 'flex-start',
            }}>Agendar visita</button>
          </div>
        </div>
      </div>
      <div style={{ borderTop: '1px solid rgba(255,253,248,0.1)', paddingTop: '24px', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
        <p style={{ fontFamily:"'Poppins',sans-serif", fontSize:'11px', fontWeight:300, color:'rgba(255,253,248,0.35)' }}>
          © 2024 Finca La Hermosa. Todos los derechos reservados.
        </p>
        <p style={{ fontFamily:"'Poppins',sans-serif", fontSize:'11px', fontWeight:300, color:'rgba(255,253,248,0.25)' }}>
          Privacidad · Términos
        </p>
      </div>
    </footer>
  );
}

Object.assign(window, { Navbar, Footer, CTASection, SectionOverline });
