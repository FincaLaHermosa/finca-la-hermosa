"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

export function SiteFooter() {
  const pathname = usePathname();

  if (pathname === "/cotizar/listo") return null;

  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <Image src="/assets/logo-blanco.svg" alt="Finca La Hermosa" width={142} height={42} />
          <p>Una finca familiar convertida en destino de experiencias. Naturaleza, hospitalidad y celebración.</p>
        </div>

        <div className="footer-social-group">
          <span className="footer-head">Síguenos</span>
          <div className="social-row">
            <a href="https://instagram.com/" className="social-circle" target="_blank" rel="noopener" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a href="https://facebook.com/" className="social-circle" target="_blank" rel="noopener" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M14 9h3.2l.4-3.6h-3.6V3.6c0-1 .3-1.7 1.8-1.7H17.8V-.4C17.4-.4 16-.6 14.6-.6c-3 0-5 1.8-5 5.2v3.4H6.4V12h3.2v9.6h4V12z" transform="translate(0 1)" />
              </svg>
            </a>
            <a href="https://wa.me/5215500000000" className="social-circle" target="_blank" rel="noopener" aria-label="WhatsApp">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12.05 21.785a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
              </svg>
            </a>
          </div>
        </div>

        <div className="footer-contact-group">
          <span className="footer-head">Contacto</span>
          <span className="footer-contact-line">
            <a href="mailto:hola@fincalahermosa.com">hola@fincalahermosa.com</a>
          </span>
          <span className="footer-contact-line">
            <a href="tel:+5215500000000">+52 (55) 0000-0000</a>
          </span>
          <span className="footer-contact-line">
            <a href="https://maps.google.com/?q=Finca+La+Hermosa,+Isidro+Fabela,+Estado+de+Mexico" target="_blank" rel="noopener">
              Isidro Fabela, Estado de México
            </a>
          </span>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-copy">© 2026 Finca La Hermosa</p>
        <p className="footer-copy">
          <a href="#">Privacidad</a> · <a href="#">Términos</a>
        </p>
      </div>
    </footer>
  );
}
