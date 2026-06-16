"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const navItems = [
  { href: "/", label: "Inicio", note: "Bienvenidos" },
  { href: "/experiencias", label: "Experiencias", note: "Formas de celebrar" },
  { href: "/espacios", label: "Espacios", note: "Recorrido por la finca" },
  { href: "/nosotros", label: "Nosotros", note: "Historia y carácter" },
  { href: "/faq", label: "FAQ", note: "Dudas frecuentes" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const closeTimerRef = useRef<number | null>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setIsClosing(false);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle("site-menu-open", isOpen || isClosing);
    document.body.classList.toggle("site-menu-closing", isClosing);
    return () => {
      document.body.classList.remove("site-menu-open");
      document.body.classList.remove("site-menu-closing");
    };
  }, [isOpen, isClosing]);

  const closeMenu = () => {
    if (!isOpen || isClosing) return;
    setIsClosing(true);
    if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current);
    closeTimerRef.current = window.setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
      closeTimerRef.current = null;
    }, 460);
  };

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  });

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current);
    };
  }, []);

  if (pathname === "/cotizar/listo" || pathname.startsWith("/admin")) return null;

  const activePath = pathname === "/" ? "/" : `/${pathname.split("/")[1]}`;
  const forceScrolled = activePath === "/espacios";

  const handleQuote = () => {
    setIsOpen(false);
    window.location.assign("/cotizar");
  };

  return (
    <nav id="site-nav">
      <div className={`nav-pill${isScrolled || forceScrolled ? " scrolled" : ""}${isOpen ? " nav-open" : ""}${isClosing ? " nav-closing" : ""}`} id="nav-pill">
        <a className="nav-logo" href="/" aria-label="Finca La Hermosa">
          <Image src="/assets/logo-blanco.svg" alt="Finca La Hermosa" width={128} height={42} priority />
        </a>

        <button
          className="nav-toggle"
          type="button"
          aria-label={isOpen ? "Cerrar menu" : "Abrir menu"}
          aria-expanded={isOpen}
          onClick={() => {
            if (isOpen) {
              closeMenu();
              return;
            }
            setIsClosing(false);
            setIsOpen(true);
          }}
        >
          <span />
        </button>

        <div className="nav-links">
          {navItems.map((item, index) => (
            <a key={item.href} href={item.href} className={activePath === item.href ? "active" : undefined}>
              <span className="nav-link-index">{String(index + 1).padStart(2, "0")}</span>
              <span className="nav-link-label">{item.label}</span>
              <span className="nav-link-note">{item.note}</span>
            </a>
          ))}
        </div>

        <div className="nav-right">
          <button className="nav-cta" type="button" onClick={handleQuote}>
            Cotizar ahora
          </button>
          <div className="nav-open-note" aria-hidden="true">
            <span>Venue privado</span>
            <span>Isidro Fabela, EDOMEX</span>
          </div>
        </div>
      </div>
      <div className={`site-mobile-menu${isOpen ? " open" : ""}${isClosing ? " closing" : ""}`} aria-hidden={!isOpen && !isClosing}>
        <div className="site-mobile-menu-links">
          {navItems.map((item, index) => (
            <a key={item.href} href={item.href} className={activePath === item.href ? "active" : undefined}>
              <span className="nav-link-index">{String(index + 1).padStart(2, "0")}</span>
              <span className="nav-link-label">{item.label}</span>
              <span className="nav-link-note">{item.note}</span>
            </a>
          ))}
        </div>
        <div className="site-mobile-menu-footer">
          <button className="nav-cta" type="button" onClick={handleQuote}>
            Cotizar ahora
          </button>
          <div className="nav-open-note" aria-hidden="true">
            <span>Venue privado</span>
            <span>Eventos personalizados</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
