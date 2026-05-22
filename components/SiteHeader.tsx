"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
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
  const router = useRouter();
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

  const handleQuote = () => {
    setIsOpen(false);
    const quoteTarget = document.querySelector("[data-sec=cotizador], #cta-section");
    if (quoteTarget) {
      quoteTarget.scrollIntoView({ behavior: "smooth" });
      return;
    }
    router.push("/cotizar");
  };

  return (
    <nav id="site-nav">
      <div className={`nav-pill${isScrolled ? " scrolled" : ""}${isOpen ? " nav-open" : ""}`} id="nav-pill">
        <Link className="nav-logo" href="/" aria-label="Finca La Hermosa">
          <Image src="/assets/logo-blanco.svg" alt="Finca La Hermosa" width={128} height={42} priority />
        </Link>

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
            <Link key={item.href} href={item.href} className={activePath === item.href ? "active" : undefined}>
              {item.label}
            </Link>
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
