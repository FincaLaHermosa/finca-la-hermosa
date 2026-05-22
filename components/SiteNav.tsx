"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navItems } from "@/data/site";

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-nav ${scrolled ? "is-scrolled" : ""}`}>
      <Link className="nav-logo" href="/" aria-label="Finca La Hermosa">
        <Image src="/assets/logo-blanco.svg" alt="" width={126} height={44} priority />
      </Link>
      <nav className="nav-links" aria-label="Principal">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
      <Link className="nav-cta" href="/cotizar">
        Cotizar ahora
      </Link>
      <button className="nav-menu" type="button" onClick={() => setOpen(true)} aria-label="Abrir menú">
        <Menu size={26} />
      </button>
      <div className={`mobile-menu ${open ? "open" : ""}`} aria-hidden={!open}>
        <button className="mobile-close" type="button" onClick={() => setOpen(false)} aria-label="Cerrar menú">
          <X size={26} />
        </button>
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </Link>
        ))}
        <Link className="mobile-cta" href="/cotizar" onClick={() => setOpen(false)}>
          Cotizar ahora
        </Link>
      </div>
    </header>
  );
}
