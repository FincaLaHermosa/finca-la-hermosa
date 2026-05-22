import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <Image src="/assets/logo-blanco.svg" alt="Finca La Hermosa" width={140} height={48} />
          <p>Una finca familiar convertida en destino de experiencias. Naturaleza, hospitalidad y celebración.</p>
        </div>
        <div>
          <span className="footer-head">Síguenos</span>
          <div className="social-row">
            <a href="https://instagram.com/" aria-label="Instagram" target="_blank" rel="noreferrer">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="4" y="4" width="16" height="16" rx="5" fill="none" stroke="currentColor" strokeWidth="1.7" />
                <circle cx="12" cy="12" r="3.8" fill="none" stroke="currentColor" strokeWidth="1.7" />
                <circle cx="17" cy="7" r="1" fill="currentColor" />
              </svg>
            </a>
            <a href="https://facebook.com/" aria-label="Facebook" target="_blank" rel="noreferrer">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path fill="currentColor" d="M14.1 8.7V6.8c0-.9.4-1.4 1.5-1.4h1.7V2.3c-.8-.1-1.6-.2-2.4-.2-2.9 0-4.8 1.8-4.8 5v1.6H6.9v3.5h3.2V22h4v-9.8h3l.5-3.5h-3.5Z" />
              </svg>
            </a>
            <a href="https://wa.me/5215500000000" aria-label="WhatsApp" target="_blank" rel="noreferrer">
              <MessageCircle size={18} />
            </a>
          </div>
        </div>
        <div>
          <span className="footer-head">Contacto</span>
          <a href="mailto:hola@fincalahermosa.com">hola@fincalahermosa.com</a>
          <a href="tel:+5215500000000">+52 (55) 0000-0000</a>
          <a href="https://maps.google.com/?q=Finca+La+Hermosa,+Isidro+Fabela,+Estado+de+Mexico" target="_blank" rel="noreferrer">
            Isidro Fabela, Estado de México
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 Finca La Hermosa</p>
        <p>
          <Link href="#">Privacidad</Link> · <Link href="#">Términos</Link>
        </p>
      </div>
    </footer>
  );
}
