"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/experiencias", label: "Experiencias" },
  { href: "/espacios", label: "Espacios" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/faq", label: "FAQ" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  if (pathname === "/cotizar/listo") return null;

  const activePath = pathname === "/" ? "/" : `/${pathname.split("/")[1]}`;
  const forceScrolled = activePath === "/espacios";

  const handleQuote = () => {
    setIsOpen(false);
    window.location.assign("/cotizar");
  };

  return (
    <nav id="site-nav">
      <div className={`nav-pill${isScrolled || forceScrolled ? " scrolled" : ""}${isOpen ? " nav-open" : ""}`} id="nav-pill">
        <a className="nav-logo" href="/" aria-label="Finca La Hermosa">
          <Image src="/assets/logo-blanco.svg" alt="Finca La Hermosa" width={128} height={42} priority />
        </a>

        <button
          className="nav-toggle"
          type="button"
          aria-label={isOpen ? "Cerrar menu" : "Abrir menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          <span />
        </button>

        <div className="nav-links">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className={activePath === item.href ? "active" : undefined}>
              {item.label}
            </a>
          ))}
        </div>

        <div className="nav-right">
          <button className="nav-cta" type="button" onClick={handleQuote}>
            Cotizar ahora
          </button>
        </div>
      </div>
    </nav>
  );
}
