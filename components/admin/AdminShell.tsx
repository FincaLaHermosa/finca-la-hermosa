"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import {
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  FileText,
  HelpCircle,
  Home,
  Image,
  LayoutDashboard,
  LogOut,
  MapPinned,
  MessageSquareQuote,
  Package,
  PlusCircle,
  Settings,
  SlidersHorizontal,
  Sparkles,
} from "lucide-react";
import { adminResourceGroups, adminResources } from "@/lib/admin/resources";
import { createClient } from "@/lib/supabase/client";

const iconBySlug = {
  config: Settings,
  pages: FileText,
  packages: Package,
  addons: PlusCircle,
  spaces: MapPinned,
  amenities: Sparkles,
  faqs: HelpCircle,
  "faq-categories": SlidersHorizontal,
  testimonials: MessageSquareQuote,
  about: Home,
  "quote-settings": SlidersHorizontal,
  "confirmed-events": CalendarDays,
};

export function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.localStorage.getItem("flh-admin-sidebar") === "collapsed";
  });

  const toggleSidebar = () => {
    setCollapsed((value) => {
      const next = !value;
      window.localStorage.setItem("flh-admin-sidebar", next ? "collapsed" : "expanded");
      return next;
    });
  };

  const signOut = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.replace("/admin/login");
  };

  return (
    <div className={collapsed ? "admin-shell sidebar-collapsed" : "admin-shell"}>
      <aside className="admin-sidebar">
        <div className="admin-sidebar-top">
          <Link className="admin-brand" href="/admin" aria-label="Dashboard CMS">
            <span>FLH</span>
            <small>CMS</small>
          </Link>
          <button className="admin-collapse-button" type="button" onClick={toggleSidebar} aria-label={collapsed ? "Abrir menú" : "Colapsar menú"}>
            {collapsed ? <ChevronRight size={17} strokeWidth={1.8} /> : <ChevronLeft size={17} strokeWidth={1.8} />}
          </button>
        </div>

        <Link className={pathname === "/admin" ? "admin-dashboard-link active" : "admin-dashboard-link"} href="/admin" title="Dashboard">
          <LayoutDashboard size={17} strokeWidth={1.7} />
          <span>Dashboard</span>
        </Link>

        <nav className="admin-nav" aria-label="Navegación del CMS">
          {adminResourceGroups.map((group) => {
            const resources = adminResources.filter((resource) => resource.group === group.id);
            return (
              <section key={group.id} className="admin-nav-group">
                <p>{group.label}</p>
                {resources.map((resource) => {
                  const href = `/admin/${resource.slug}`;
                  const Icon = iconBySlug[resource.slug as keyof typeof iconBySlug] || Image;
                  return (
                    <Link key={resource.slug} className={pathname === href ? "active" : ""} href={href} title={resource.title}>
                      <Icon size={16} strokeWidth={1.7} />
                      <span>{resource.title}</span>
                    </Link>
                  );
                })}
              </section>
            );
          })}
        </nav>

        <div className="admin-sidebar-footer">
          <span>Conectado a Supabase</span>
          <button className="admin-logout" type="button" onClick={signOut}>
            <LogOut size={15} strokeWidth={1.8} />
            Salir
          </button>
        </div>
      </aside>

      <main className="admin-main">{children}</main>
      <style jsx global>{adminCss}</style>
    </div>
  );
}

const adminCss = `
  :root {
    --admin-forest: #1e3232;
    --admin-forest-soft: #2d4949;
    --admin-forest-mid: #4a6e6e;
    --admin-terracotta: #9d563d;
    --admin-terracotta-soft: #e8c4ad;
    --admin-ivory: #fffdf8;
    --admin-cream: #f5f0e8;
    --admin-border: #ede6d6;
    --admin-text: #5a5040;
    --admin-muted: #6f634f;
    --admin-shadow: 0 16px 42px rgba(45, 73, 73, .1);
    --admin-shadow-strong: 0 24px 70px rgba(30, 50, 50, .16);
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html:has(.admin-shell),
  body:has(.admin-shell) {
    max-width: 100%;
    height: 100%;
    overflow: hidden;
  }

  body:has(.admin-shell) {
    background:
      radial-gradient(circle at top left, rgba(232, 196, 173, .24), transparent 32rem),
      radial-gradient(circle at 90% 8%, rgba(45, 73, 73, .12), transparent 24rem),
      linear-gradient(135deg, #f5f0e8 0%, #fffdf8 52%, #efe7da 100%);
  }

  .admin-shell {
    height: 100dvh;
    min-height: 0;
    display: grid;
    grid-template-columns: 268px minmax(0, 1fr);
    color: var(--admin-forest);
    font-family: var(--font-jost), system-ui, sans-serif;
    transition: grid-template-columns .22s ease;
    overflow: hidden;
  }

  .admin-shell.sidebar-collapsed {
    grid-template-columns: 72px minmax(0, 1fr);
  }

  .admin-sidebar {
    position: sticky;
    top: 0;
    height: 100dvh;
    background:
      radial-gradient(circle at 0 0, rgba(157, 86, 61, .2), transparent 15rem),
      linear-gradient(180deg, rgba(45, 73, 73, .48), rgba(20, 34, 34, .98) 62%),
      #142222;
    backdrop-filter: blur(18px);
    color: var(--admin-ivory);
    padding: 18px 12px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    border-right: 1px solid rgba(255, 253, 248, .08);
    min-width: 0;
    overflow: hidden;
    transition: padding .22s ease;
  }

  .admin-sidebar-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
  }

  .admin-brand {
    color: inherit;
    text-decoration: none;
    display: flex;
    align-items: baseline;
    gap: 8px;
    padding: 2px 8px 8px;
    min-width: 0;
  }

  .admin-brand span {
    font-family: var(--font-cormorant), Georgia, serif;
    font-size: 2rem;
    line-height: 1;
    letter-spacing: .02em;
    text-shadow: 0 12px 30px rgba(0, 0, 0, .2);
  }

  .admin-brand small,
  .admin-nav-group p,
  .admin-sidebar-footer span,
  .admin-eyebrow,
  .admin-table th,
  .admin-field label,
  .admin-header-stats dt,
  .admin-module-eyebrow {
    text-transform: uppercase;
    letter-spacing: .12em;
    font-size: .62rem;
    font-weight: 500;
  }

  .admin-brand small,
  .admin-nav-group p,
  .admin-sidebar-footer span {
    color: rgba(255, 253, 248, .66);
  }

  .admin-collapse-button {
    width: 34px;
    height: 34px;
    flex: 0 0 34px;
    display: grid;
    place-items: center;
    border-radius: 999px;
    border: 1px solid rgba(255, 253, 248, .18);
    color: rgba(255, 253, 248, .8);
    background: rgba(255, 253, 248, .08);
    cursor: pointer;
  }

  .admin-shell.sidebar-collapsed .admin-sidebar {
    padding: 18px 8px;
    align-items: center;
  }

  .admin-shell.sidebar-collapsed .admin-sidebar-top {
    display: grid;
    justify-items: center;
  }

  .admin-shell.sidebar-collapsed .admin-brand {
    padding: 4px 0 8px;
    justify-content: center;
  }

  .admin-shell.sidebar-collapsed .admin-brand span {
    font-size: 1.15rem;
  }

  .admin-shell.sidebar-collapsed .admin-brand small,
  .admin-shell.sidebar-collapsed .admin-dashboard-link span,
  .admin-shell.sidebar-collapsed .admin-nav a span,
  .admin-shell.sidebar-collapsed .admin-nav-group p,
  .admin-shell.sidebar-collapsed .admin-sidebar-footer span,
  .admin-shell.sidebar-collapsed .admin-logout {
    display: none;
  }

  .admin-dashboard-link,
  .admin-nav a {
    min-height: 38px;
    display: flex;
    align-items: center;
    gap: 8px;
    color: rgba(255, 253, 248, .72);
    text-decoration: none;
    border-radius: 10px;
    padding: 8px 10px;
    font-size: .82rem;
    transition: background .18s ease, color .18s ease, transform .18s ease;
  }

  .admin-shell.sidebar-collapsed .admin-dashboard-link,
  .admin-shell.sidebar-collapsed .admin-nav a {
    width: 40px;
    height: 40px;
    justify-content: center;
    padding: 0;
    border-radius: 14px;
  }

  .admin-dashboard-link:hover,
  .admin-dashboard-link.active,
  .admin-nav a:hover,
  .admin-nav a.active {
    background: rgba(255, 253, 248, .14);
    color: var(--admin-ivory);
  }

  .admin-nav a.active,
  .admin-dashboard-link.active {
    box-shadow:
      inset 0 0 0 1px rgba(232, 196, 173, .24),
      0 12px 28px rgba(0, 0, 0, .12);
    color: #fffdf8;
  }

  .admin-nav {
    display: grid;
    gap: 13px;
    overflow-y: auto;
    overflow-x: hidden;
    min-height: 0;
    padding-right: 4px;
    overscroll-behavior: contain;
  }

  .admin-shell.sidebar-collapsed .admin-nav {
    width: 100%;
    justify-items: center;
    gap: 8px;
    padding-right: 0;
  }

  .admin-nav-group {
    display: grid;
    gap: 5px;
    padding-top: 5px;
  }

  .admin-shell.sidebar-collapsed .admin-nav-group {
    gap: 8px;
    padding-top: 0;
  }

  .admin-nav-group p {
    margin: 7px 0 5px;
    padding: 8px 10px 5px;
    border-top: 1px solid rgba(255, 253, 248, .1);
    color: rgba(232, 196, 173, .9);
    position: relative;
  }

  .admin-nav-group p::before {
    content: "";
    position: absolute;
    left: 0;
    top: 11px;
    width: 3px;
    height: 12px;
    border-radius: 999px;
    background: rgba(232, 196, 173, .58);
  }

  .admin-sidebar-footer {
    margin-top: auto;
    display: grid;
    gap: 10px;
    padding: 12px 8px 0;
    border-top: 1px solid rgba(255, 253, 248, .1);
  }

  .admin-shell.sidebar-collapsed .admin-sidebar-footer {
    width: 100%;
    padding: 14px 0 0;
    justify-items: center;
  }

  .admin-logout {
    min-height: 38px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    border: 1px solid rgba(255, 253, 248, .2);
    color: var(--admin-ivory);
    background: transparent;
    border-radius: 999px;
    padding: 8px 12px;
    cursor: pointer;
    font: inherit;
  }

  .admin-main {
    width: 100%;
    min-width: 0;
    max-width: none;
    height: 100dvh;
    overflow-y: auto;
    overflow-x: hidden;
    overscroll-behavior: contain;
    scrollbar-gutter: stable;
    padding: 24px clamp(18px, 3vw, 36px) 38px;
    position: relative;
  }

  .admin-main::before {
    content: "CMS";
    position: fixed;
    right: clamp(28px, 5vw, 72px);
    bottom: -1.15rem;
    pointer-events: none;
    font-family: var(--font-cormorant), Georgia, serif;
    font-size: clamp(6rem, 13vw, 15rem);
    line-height: .75;
    color: rgba(30, 50, 50, .045);
    z-index: -1;
  }

  .admin-main,
  .admin-nav,
  .admin-record-list,
  .admin-form {
    scrollbar-width: none;
    -ms-overflow-style: none;
  }

  .admin-main::-webkit-scrollbar,
  .admin-nav::-webkit-scrollbar,
  .admin-record-list::-webkit-scrollbar,
  .admin-form::-webkit-scrollbar {
    width: 0;
    height: 0;
    display: none;
  }

  .admin-header {
    display: flex;
    justify-content: space-between;
    gap: 18px;
    align-items: flex-start;
    margin-bottom: 18px;
    min-width: 0;
  }

  .admin-header > div {
    min-width: 0;
    display: grid;
    gap: 8px;
  }

  .admin-header .admin-primary,
  .admin-header .admin-secondary,
  .admin-header-tools {
    flex: 0 0 auto;
    max-width: 100%;
  }

  .admin-eyebrow {
    margin: 0;
    color: var(--admin-terracotta);
  }

  .admin-header h1 {
    font-family: var(--font-cormorant), Georgia, serif;
    font-weight: 400;
    font-size: clamp(2.25rem, 3.7vw, 3.45rem);
    line-height: 1.04;
    margin: 0;
    color: var(--admin-forest);
  }

  .admin-header p:not(.admin-eyebrow) {
    max-width: 66ch;
    margin: 0;
    color: var(--admin-muted);
    font-size: .88rem;
    line-height: 1.55;
  }

  .admin-card,
  .admin-panel {
    background: rgba(255, 253, 248, .72);
    border: 1px solid rgba(111, 99, 79, .16);
    border-radius: 14px;
    box-shadow:
      0 18px 46px rgba(45, 73, 73, .10),
      inset 0 1px 0 rgba(255, 253, 248, .82);
    backdrop-filter: blur(16px);
    position: relative;
  }

  .admin-card::before,
  .admin-panel::before {
    content: "";
    position: absolute;
    inset: 0 0 auto;
    height: 3px;
    border-radius: 14px 14px 0 0;
    background: linear-gradient(90deg, rgba(157, 86, 61, .58), rgba(232, 196, 173, .18), transparent);
    pointer-events: none;
  }

  .admin-panel {
    overflow: hidden;
  }

  .admin-grid {
    display: grid;
    grid-template-columns: minmax(360px, 520px) minmax(0, 1fr);
    gap: 18px;
    align-items: start;
    min-width: 0;
  }

  .admin-primary,
  .admin-secondary,
  .admin-danger,
  .admin-icon-button {
    min-height: 38px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 7px;
    border-radius: 999px;
    padding: 8px 13px;
    cursor: pointer;
    font: inherit;
    font-size: .68rem;
    letter-spacing: .1em;
    text-transform: uppercase;
    transition: transform .16s ease, background .16s ease, border-color .16s ease, color .16s ease;
  }

  .admin-primary:hover,
  .admin-secondary:hover,
  .admin-danger:hover,
  .admin-icon-button:hover {
    transform: translateY(-1px);
  }

  .admin-primary:disabled,
  .admin-secondary:disabled,
  .admin-danger:disabled {
    cursor: not-allowed;
    opacity: .58;
    transform: none;
  }

  .admin-primary {
    border: 0;
    background: var(--admin-terracotta);
    color: var(--admin-ivory);
    box-shadow: 0 12px 26px rgba(157, 86, 61, .18);
  }

  .admin-secondary {
    border: 1px solid rgba(45, 73, 73, .38);
    background: rgba(255, 253, 248, .56);
    color: var(--admin-forest);
    text-decoration: none;
  }

  .admin-danger {
    border: 1px solid rgba(157, 86, 61, .38);
    background: transparent;
    color: var(--admin-terracotta);
  }

  .admin-icon-button {
    width: 38px;
    padding: 0;
    border: 1px solid rgba(45, 73, 73, .22);
    background: transparent;
    color: var(--admin-forest);
  }

  .admin-message {
    padding: 9px 11px;
    border-radius: 10px;
    background: rgba(45, 73, 73, .08);
    color: var(--admin-text);
    font-size: .8rem;
    line-height: 1.45;
  }

  .admin-error {
    background: #fff2ec;
    color: var(--admin-terracotta);
  }

  .admin-empty {
    padding: 24px;
    color: var(--admin-muted);
    line-height: 1.55;
  }

  .admin-actions {
    display: flex;
    gap: 9px;
    flex-wrap: wrap;
  }

  .admin-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    width: max-content;
    border-radius: 999px;
    padding: 4px 8px;
    background: rgba(45, 73, 73, .08);
    color: var(--admin-forest);
    font-size: .66rem;
  }

  .admin-badge[data-tone="muted"] {
    color: var(--admin-muted);
    background: rgba(111, 99, 79, .08);
  }

  .admin-badge[data-tone="accent"] {
    color: var(--admin-terracotta);
    background: rgba(157, 86, 61, .13);
    box-shadow: inset 0 0 0 1px rgba(157, 86, 61, .08);
  }

  .admin-badge[data-tone="success"] {
    color: #2f6a4b;
    background: rgba(18, 140, 74, .1);
  }

  .admin-resource-page {
    height: 100%;
    min-height: 0;
    display: grid;
    grid-template-rows: auto minmax(0, 1fr);
    gap: 10px;
  }

  .admin-resource-page .admin-header {
    margin-bottom: 0;
  }

  .admin-resource-page .admin-header {
    min-height: 96px;
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    column-gap: 18px;
    align-items: flex-end;
    padding: 13px 16px;
    border: 1px solid rgba(255, 253, 248, .16);
    border-radius: 14px;
    background:
      radial-gradient(circle at 14% 18%, rgba(232, 196, 173, .18), transparent 17rem),
      linear-gradient(130deg, rgba(30, 50, 50, .98), rgba(45, 73, 73, .9)),
      var(--admin-forest);
    color: var(--admin-ivory);
    box-shadow: 0 18px 46px rgba(30, 50, 50, .14);
    overflow: hidden;
    position: relative;
  }

  .admin-resource-page .admin-header::after {
    content: "EDITAR";
    position: absolute;
    right: clamp(18px, 4vw, 48px);
    bottom: -.58rem;
    font-family: var(--font-cormorant), Georgia, serif;
    font-size: clamp(2.4rem, 4.1vw, 4.85rem);
    line-height: .72;
    color: rgba(255, 253, 248, .05);
    pointer-events: none;
  }

  .admin-resource-page .admin-header-copy,
  .admin-resource-page .admin-header .admin-primary,
  .admin-resource-page .admin-header-tools {
    position: relative;
    z-index: 1;
  }

  .admin-resource-page .admin-header-copy {
    min-width: 0;
    display: grid;
    gap: 5px;
  }

  .admin-header-tools {
    display: grid;
    justify-items: end;
    align-content: end;
    justify-content: end;
    gap: 7px;
  }

  .admin-header-actions {
    display: grid;
    grid-template-columns: repeat(2, max-content);
    align-items: center;
    justify-content: end;
    gap: 10px;
  }

  .admin-resource-page .admin-preview-link {
    border-color: rgba(255, 253, 248, .22);
    background: rgba(255, 253, 248, .08);
    color: var(--admin-ivory);
    box-shadow: inset 0 1px 0 rgba(255, 253, 248, .08);
  }

  .admin-resource-page .admin-preview-link:hover {
    background: rgba(255, 253, 248, .14);
    border-color: rgba(232, 196, 173, .34);
  }

  .admin-header-stats {
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 14px;
    padding: 8px 12px;
    border: 1px solid rgba(255, 253, 248, .14);
    border-radius: 999px;
    background: rgba(255, 253, 248, .075);
    box-shadow: inset 0 1px 0 rgba(255, 253, 248, .08);
  }

  .admin-header-stats div {
    min-width: 46px;
    display: grid;
    gap: 2px;
  }

  .admin-header-stats dt {
    color: rgba(255, 253, 248, .54);
  }

  .admin-header-stats dd {
    margin: 0;
    font-family: var(--font-jost), system-ui, sans-serif;
    font-size: 1.02rem;
    line-height: 1;
    font-weight: 600;
    color: var(--admin-ivory);
  }

  .admin-resource-page .admin-eyebrow {
    color: var(--admin-terracotta-soft);
  }

  .admin-resource-page .admin-header h1 {
    color: var(--admin-ivory);
    font-size: clamp(1.85rem, 2.7vw, 2.95rem);
    line-height: 1;
  }

  .admin-resource-page .admin-header p:not(.admin-eyebrow) {
    color: rgba(255, 253, 248, .74);
    font-size: .8rem;
    line-height: 1.42;
  }

  .admin-dashboard-hero {
    margin-bottom: 16px;
    min-height: 230px;
    display: grid;
    grid-template-columns: minmax(0, 1.1fr) minmax(320px, .9fr);
    gap: 20px;
    align-items: end;
    padding: clamp(22px, 3vw, 34px);
    border-radius: 18px;
    border: 1px solid rgba(255, 253, 248, .18);
    background:
      radial-gradient(circle at 16% 20%, rgba(232, 196, 173, .16), transparent 17rem),
      linear-gradient(130deg, rgba(30, 50, 50, .98), rgba(45, 73, 73, .92)),
      var(--admin-forest);
    color: var(--admin-ivory);
    box-shadow: var(--admin-shadow-strong);
    overflow: hidden;
    position: relative;
  }

  .admin-dashboard-hero::after {
    content: "LA HERMOSA";
    position: absolute;
    right: clamp(16px, 4vw, 56px);
    bottom: -1.4rem;
    font-family: var(--font-cormorant), Georgia, serif;
    font-size: clamp(4rem, 9vw, 10rem);
    line-height: .7;
    color: rgba(255, 253, 248, .045);
    pointer-events: none;
  }

  .admin-dashboard-hero > div:first-child {
    display: grid;
    gap: 12px;
  }

  .admin-dashboard-hero h2 {
    max-width: 760px;
    margin: 0;
    font-family: var(--font-cormorant), Georgia, serif;
    font-size: clamp(2.2rem, 3.5vw, 3.8rem);
    line-height: 1.02;
    font-weight: 400;
  }

  .admin-dashboard-hero p:not(.admin-module-eyebrow) {
    max-width: 62ch;
    margin: 0;
    color: rgba(255, 253, 248, .76);
    font-size: .9rem;
    line-height: 1.55;
  }

  .admin-dashboard-marks {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10px;
  }

  .admin-dashboard-marks a {
    min-height: 94px;
    display: grid;
    align-content: space-between;
    gap: 8px;
    padding: 13px;
    border: 1px solid rgba(255, 253, 248, .18);
    border-radius: 16px;
    color: var(--admin-ivory);
    text-decoration: none;
    background: rgba(255, 253, 248, .095);
    backdrop-filter: blur(12px);
    box-shadow: inset 0 1px 0 rgba(255, 253, 248, .08);
    transition: background .18s ease, transform .18s ease, border-color .18s ease;
  }

  .admin-dashboard-marks a:hover {
    background: rgba(255, 253, 248, .14);
    border-color: rgba(232, 196, 173, .32);
    transform: translateY(-2px);
  }

  .admin-dashboard-marks span {
    color: rgba(255, 253, 248, .58);
    text-transform: uppercase;
    letter-spacing: .12em;
    font-size: .66rem;
  }

  .admin-dashboard-marks strong {
    font-family: var(--font-cormorant), Georgia, serif;
    font-size: 1.36rem;
    font-weight: 400;
  }

  .admin-module-board {
    margin-top: 18px;
    display: grid;
    gap: 20px;
  }

  .admin-module-section {
    display: grid;
    gap: 12px;
  }

  .admin-module-heading {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 14px;
  }

  .admin-module-heading > div {
    display: grid;
    gap: 5px;
  }

  .admin-module-heading h2 {
    margin: 0;
    font-family: var(--font-cormorant), Georgia, serif;
    font-weight: 400;
    font-size: 1.68rem;
    line-height: 1.12;
    color: var(--admin-forest);
  }

  .admin-module-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 10px;
  }

  .admin-module-card {
    min-height: 148px;
    display: grid;
    align-content: start;
    gap: 10px;
    padding: 16px;
    border: 1px solid rgba(111, 99, 79, .18);
    border-radius: 16px;
    background:
      linear-gradient(145deg, rgba(255, 253, 248, .82), rgba(255, 253, 248, .62)),
      rgba(255, 253, 248, .7);
    color: var(--admin-forest);
    text-decoration: none;
    box-shadow:
      0 14px 36px rgba(45, 73, 73, .09),
      inset 0 1px 0 rgba(255, 253, 248, .82);
    transition: transform .18s ease, box-shadow .18s ease, border-color .18s ease;
    position: relative;
    overflow: hidden;
  }

  .admin-module-card::after {
    content: "";
    position: absolute;
    width: 84px;
    height: 84px;
    right: -36px;
    bottom: -42px;
    border-radius: 999px;
    background: rgba(232, 196, 173, .18);
    pointer-events: none;
  }

  .admin-module-card:hover {
    transform: translateY(-3px);
    border-color: rgba(157, 86, 61, .34);
    box-shadow: 0 22px 54px rgba(45, 73, 73, .13);
  }

  .admin-module-card strong {
    font-family: var(--font-cormorant), Georgia, serif;
    font-size: 1.34rem;
    line-height: 1.18;
    font-weight: 400;
  }

  .admin-module-card p {
    margin: 0;
    color: var(--admin-muted);
    font-size: .82rem;
    line-height: 1.48;
  }

  .admin-module-link {
    margin-top: auto;
    display: inline-flex;
    align-items: center;
    gap: 7px;
    color: var(--admin-terracotta);
    text-transform: uppercase;
    letter-spacing: .1em;
    font-size: .64rem;
  }

  .admin-dashboard-note {
    margin-top: 18px;
    display: flex;
    align-items: flex-start;
    gap: 10px;
    padding: 13px 15px;
    border: 1px solid rgba(157, 86, 61, .18);
    border-radius: 12px;
    background: rgba(232, 196, 173, .18);
    color: var(--admin-text);
  }

  .admin-dashboard-note p {
    margin: 0;
    line-height: 1.55;
  }

  .admin-seed-card {
    margin-top: 16px;
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    align-items: center;
    gap: 14px;
    padding: 17px;
    border: 1px solid rgba(111, 99, 79, .18);
    border-radius: 16px;
    background:
      linear-gradient(115deg, rgba(255, 253, 248, .84), rgba(255, 253, 248, .62)),
      rgba(255, 253, 248, .72);
    backdrop-filter: blur(16px);
    box-shadow: var(--admin-shadow);
  }

  .admin-seed-card > div {
    display: grid;
    gap: 6px;
  }

  .admin-seed-card h2 {
    margin: 0;
    font-family: var(--font-cormorant), Georgia, serif;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 1.14;
    color: var(--admin-forest);
  }

  .admin-seed-card p:not(.admin-module-eyebrow) {
    margin: 0;
    color: var(--admin-muted);
    line-height: 1.55;
  }

  .admin-resource-grid {
    grid-template-columns: minmax(320px, 460px) minmax(520px, 1fr);
    height: 100%;
    min-height: 0;
    overflow: hidden;
    align-items: stretch;
  }

  .admin-panel-header {
    padding: 15px;
    border-bottom: 1px solid rgba(237, 230, 214, .86);
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 12px;
  }

  .admin-panel-header > div {
    display: grid;
    gap: 5px;
    min-width: 0;
  }

  .admin-panel-header h2,
  .admin-editor-hero h2 {
    margin: 0;
    font-family: var(--font-cormorant), Georgia, serif;
    font-size: 1.5rem;
    line-height: 1.18;
    font-weight: 400;
    color: var(--admin-forest);
  }

  .admin-module-eyebrow {
    margin: 0;
    color: var(--admin-terracotta);
  }

  .admin-search {
    min-width: 190px;
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 0 11px;
    min-height: 38px;
    border: 1px solid rgba(45, 73, 73, .34);
    border-radius: 999px;
    background: rgba(255, 253, 248, .96);
    color: var(--admin-muted);
    box-shadow: inset 0 1px 0 rgba(30, 50, 50, .035);
  }

  .admin-search input {
    width: 100%;
    border: 0;
    outline: 0;
    background: transparent;
    font: inherit;
    color: var(--admin-forest);
  }

  .admin-list-panel {
    container: admin-list / inline-size;
    min-height: 0;
    overflow: hidden;
    display: grid;
    grid-template-rows: auto minmax(0, 1fr);
  }

  .admin-record-list {
    display: grid;
    align-content: start;
    min-height: 0;
    overflow-y: auto;
    overflow-x: hidden;
    overscroll-behavior: contain;
  }

  .admin-record {
    position: relative;
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(112px, max-content) 82px;
    align-items: center;
    gap: 9px;
    padding: 11px 14px;
    border-bottom: 1px solid var(--admin-border);
    background: transparent;
    transition: background .16s ease, box-shadow .16s ease;
  }

  .admin-record.active,
  .admin-record:hover {
    background: rgba(45, 73, 73, .045);
  }

  .admin-record.active {
    box-shadow: inset 4px 0 0 rgba(157, 86, 61, .72);
    background: rgba(232, 196, 173, .14);
  }

  .admin-record-main {
    min-width: 0;
    border: 0;
    padding: 0;
    background: transparent;
    display: flex;
    align-items: center;
    gap: 10px;
    text-align: left;
    color: inherit;
    cursor: pointer;
    font: inherit;
    overflow: hidden;
  }

  .admin-record-main > span {
    min-width: 0;
    max-width: 100%;
    overflow: hidden;
  }

  .admin-record-main strong {
    display: block;
    max-width: 100%;
    color: var(--admin-forest);
    font-weight: 520;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .admin-record-main small {
    display: block;
    max-width: 100%;
    margin-top: 2px;
    color: var(--admin-muted);
    font-size: .72rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .admin-record-thumb {
    width: 44px;
    height: 44px;
    flex: 0 0 44px;
    border-radius: 9px;
    object-fit: cover;
    background: rgba(245, 240, 232, .88);
    border: 1px solid var(--admin-border);
  }

  .admin-record-thumb.empty {
    display: grid;
    place-items: center;
    color: var(--admin-muted);
  }

  .admin-record-meta,
  .admin-record-actions {
    display: flex;
    align-items: center;
    gap: 6px;
    flex-wrap: nowrap;
    justify-content: flex-end;
    min-width: 0;
  }

  .admin-record-meta .admin-badge {
    white-space: nowrap;
  }

  @container admin-list (max-width: 560px) {
    .admin-record {
      grid-template-columns: minmax(0, 1fr) 82px;
    }

    .admin-record-meta {
      grid-column: 1 / 2;
      grid-row: 2;
      justify-content: flex-start;
      padding-left: 54px;
    }

    .admin-record-actions {
      grid-column: 2 / 3;
      grid-row: 1 / span 2;
    }
  }

  .admin-icon-button.danger {
    color: var(--admin-terracotta);
    border-color: rgba(157, 86, 61, .28);
  }

  .admin-editor-panel {
    position: static;
    height: 100%;
    max-height: none;
    min-height: 0;
    overflow: hidden;
    display: grid;
    grid-template-rows: auto minmax(0, 1fr) auto;
    background:
      linear-gradient(145deg, rgba(245, 240, 232, .76), rgba(255, 253, 248, .52)),
      rgba(245, 240, 232, .7);
  }

  .admin-editor-hero {
    padding: 17px;
    background:
      radial-gradient(circle at top right, rgba(232, 196, 173, .18), transparent 11rem),
      linear-gradient(135deg, rgba(45, 73, 73, .08), transparent 65%),
      rgba(245, 240, 232, .76);
    border-bottom: 1px solid rgba(111, 99, 79, .16);
    display: grid;
    gap: 7px;
  }

  .admin-editor-hero p:last-child {
    margin: 0;
    color: var(--admin-muted);
    font-size: .8rem;
    line-height: 1.5;
  }

  .admin-form {
    min-height: 0;
    overflow-y: auto;
    overflow-x: hidden;
    overscroll-behavior: contain;
    padding: 15px;
    display: grid;
    gap: 16px;
    background: transparent;
  }

  .admin-fieldset {
    border: 1px solid rgba(111, 99, 79, .16);
    margin: 0;
    padding: 13px;
    display: grid;
    gap: 11px;
    border-radius: 12px;
    background:
      linear-gradient(145deg, rgba(245, 240, 232, .74), rgba(255, 253, 248, .54)),
      rgba(245, 240, 232, .66);
    box-shadow:
      inset 0 1px 0 rgba(255, 253, 248, .74),
      0 10px 26px rgba(45, 73, 73, .045);
  }

  .admin-fieldset legend {
    padding: 0;
    margin: 0;
    font-family: var(--font-cormorant), Georgia, serif;
    font-size: 1.18rem;
    line-height: 1.18;
    color: var(--admin-forest);
  }

  .admin-fieldset > p {
    margin: 0 0 2px;
    color: var(--admin-muted);
    font-size: .76rem;
    line-height: 1.45;
  }

  .admin-fieldset-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10px;
  }

  .admin-field {
    display: grid;
    gap: 6px;
  }

  .admin-field-wide {
    grid-column: 1 / -1;
  }

  .admin-field label {
    color: var(--admin-muted);
  }

  .admin-field input,
  .admin-field textarea,
  .admin-url-input {
    width: 100%;
    border: 1px solid rgba(111, 99, 79, .34);
    background: rgba(255, 253, 248, .99);
    border-radius: 9px;
    padding: 9px 10px;
    color: var(--admin-forest);
    font: inherit;
    outline: 0;
    box-shadow:
      inset 0 1px 0 rgba(30, 50, 50, .045),
      inset 0 -1px 0 rgba(255, 253, 248, .88),
      0 1px 0 rgba(255, 253, 248, .7);
    transition: border-color .16s ease, box-shadow .16s ease, background .16s ease;
  }

  .admin-field input:focus,
  .admin-field textarea:focus,
  .admin-url-input:focus,
  .admin-search:focus-within {
    border-color: rgba(157, 86, 61, .62);
    box-shadow:
      0 0 0 3px rgba(157, 86, 61, .12),
      inset 0 1px 0 rgba(30, 50, 50, .035);
    background: var(--admin-ivory);
  }

  .admin-field input:disabled {
    color: rgba(90, 80, 64, .66);
    background: rgba(245, 240, 232, .9);
    border-color: rgba(111, 99, 79, .24);
  }

  .admin-field textarea {
    min-height: 86px;
    resize: vertical;
    line-height: 1.5;
  }

  .admin-field textarea[data-json="true"] {
    min-height: 180px;
    font-family: ui-monospace, SFMono-Regular, Consolas, monospace;
    font-size: .72rem;
    line-height: 1.55;
  }

  .admin-field small {
    color: var(--admin-muted);
    font-size: .7rem;
    line-height: 1.4;
  }

  .admin-switch {
    min-height: 40px;
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 8px 10px;
    border: 1px solid rgba(111, 99, 79, .32);
    border-radius: 10px;
    background: rgba(255, 253, 248, .98);
    cursor: pointer;
  }

  .admin-switch input {
    position: absolute;
    opacity: 0;
    pointer-events: none;
  }

  .admin-switch span {
    width: 42px;
    height: 24px;
    border-radius: 999px;
    background: rgba(111, 99, 79, .22);
    position: relative;
    transition: background .16s ease;
  }

  .admin-switch span::after {
    content: "";
    position: absolute;
    top: 3px;
    left: 3px;
    width: 18px;
    height: 18px;
    border-radius: 999px;
    background: var(--admin-ivory);
    box-shadow: 0 2px 8px rgba(30, 50, 50, .22);
    transition: transform .16s ease;
  }

  .admin-switch input:checked + span {
    background: var(--admin-forest-soft);
  }

  .admin-switch input:checked + span::after {
    transform: translateX(18px);
  }

  .admin-switch strong {
    color: var(--admin-forest);
    font-size: .8rem;
    font-weight: 500;
  }

  .admin-image-uploader {
    display: grid;
    grid-template-columns: 126px minmax(0, 1fr);
    gap: 11px;
    align-items: stretch;
    padding: 10px;
    border: 1px dashed rgba(45, 73, 73, .52);
    border-radius: 12px;
    background: rgba(245, 240, 232, .76);
  }

  .admin-image-uploader.has-image {
    border-style: solid;
    border-color: rgba(111, 99, 79, .24);
    background: rgba(255, 253, 248, .94);
  }

  .admin-preview,
  .admin-image-placeholder {
    width: 126px;
    height: 94px;
    border-radius: 10px;
    border: 1px solid var(--admin-border);
    object-fit: cover;
    background: var(--admin-cream);
  }

  .admin-image-placeholder {
    display: grid;
    place-items: center;
    color: var(--admin-muted);
    text-align: center;
    gap: 6px;
    font-size: .72rem;
  }

  .admin-upload-copy {
    min-width: 0;
    display: grid;
    align-content: center;
    gap: 6px;
  }

  .admin-upload-copy strong {
    color: var(--admin-forest);
    font-weight: 500;
  }

  .admin-upload-copy span {
    color: var(--admin-muted);
    font-size: .74rem;
    line-height: 1.45;
  }

  .admin-upload-actions {
    display: flex;
    gap: 7px;
    flex-wrap: wrap;
    margin-top: 4px;
  }

  .admin-file-input {
    display: none;
  }

  .admin-url-input {
    margin-top: 3px;
    font-size: .76rem;
  }

  .admin-upload-meta {
    width: max-content;
    max-width: 100%;
    display: inline-flex;
    padding: 5px 8px;
    border-radius: 999px;
    background: rgba(18, 140, 74, .09);
    color: #2f6a4b;
    font-size: .68rem;
  }

  .admin-gallery-uploader {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    align-items: center;
    gap: 12px;
    padding: 12px;
    border: 1px dashed rgba(45, 73, 73, .52);
    border-radius: 12px;
    background: rgba(245, 240, 232, .76);
  }

  .admin-gallery-uploader > div {
    min-width: 0;
    display: grid;
    gap: 4px;
  }

  .admin-gallery-uploader strong {
    color: var(--admin-forest);
    font-weight: 560;
  }

  .admin-gallery-uploader span {
    color: var(--admin-muted);
    font-size: .74rem;
    line-height: 1.45;
  }

  .admin-gallery-list {
    display: grid;
    gap: 8px;
  }

  .admin-gallery-item {
    display: grid;
    grid-template-columns: 64px minmax(0, 1fr) auto;
    align-items: center;
    gap: 9px;
    padding: 8px;
    border: 1px solid rgba(111, 99, 79, .24);
    border-radius: 12px;
    background: rgba(255, 253, 248, .82);
    box-shadow: inset 0 1px 0 rgba(255, 253, 248, .82);
  }

  .admin-gallery-thumb {
    width: 64px;
    height: 48px;
    border-radius: 8px;
    border: 1px solid var(--admin-border);
    object-fit: cover;
    background: var(--admin-cream);
  }

  .admin-gallery-actions {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .admin-gallery-actions .admin-icon-button:disabled {
    opacity: .35;
    cursor: not-allowed;
    transform: none;
  }

  .admin-gallery-empty {
    padding: 12px;
    border: 1px solid rgba(111, 99, 79, .18);
    border-radius: 12px;
    color: var(--admin-muted);
    background: rgba(255, 253, 248, .58);
    font-size: .78rem;
  }

  .admin-savebar {
    padding: 11px 14px;
    border-top: 1px solid rgba(111, 99, 79, .16);
    background: rgba(245, 240, 232, .82);
    display: flex;
    justify-content: flex-end;
    gap: 8px;
  }

  .admin-message {
    display: flex;
    align-items: flex-start;
    gap: 8px;
  }

  .admin-skeleton-list {
    padding: 14px;
    display: grid;
    gap: 10px;
  }

  .admin-skeleton-list span {
    height: 74px;
    border-radius: 12px;
    background: linear-gradient(90deg, rgba(245, 240, 232, .7), rgba(255, 253, 248, .9), rgba(245, 240, 232, .7));
    background-size: 220% 100%;
    animation: admin-shimmer 1.25s ease-in-out infinite;
  }

  @keyframes admin-shimmer {
    0% { background-position: 120% 0; }
    100% { background-position: -120% 0; }
  }

  @media (prefers-reduced-motion: reduce) {
    .admin-skeleton-list span,
    .admin-dashboard-link,
    .admin-nav a,
    .admin-primary,
    .admin-secondary,
    .admin-danger,
    .admin-icon-button {
      animation: none;
      transition: none;
    }
  }

  @media (max-width: 1080px) {
    .admin-shell {
      grid-template-columns: 1fr;
    }

    .admin-sidebar {
      position: static;
      height: auto;
    }

    .admin-nav {
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    }

    .admin-grid {
      grid-template-columns: 1fr;
    }

    .admin-resource-page {
      height: auto;
      min-height: 100%;
      display: block;
    }

    .admin-resource-page .admin-header {
      margin-bottom: 18px;
    }

    .admin-resource-grid {
      height: auto;
      overflow: visible;
    }

    .admin-list-panel {
      max-height: 440px;
    }

    .admin-dashboard-hero {
      grid-template-columns: 1fr;
    }

    .admin-editor-panel {
      position: static;
      max-height: none;
    }
  }

  @media (max-width: 720px) {
    .admin-main {
      padding: 24px 18px 42px;
    }

    .admin-header {
      display: grid;
    }

    .admin-nav {
      grid-template-columns: 1fr;
    }

    .admin-header-tools {
      width: 100%;
      align-items: stretch;
      gap: 10px;
    }

    .admin-header-actions {
      width: 100%;
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .admin-header-actions .admin-primary,
    .admin-header-actions .admin-secondary {
      width: 100%;
    }

    .admin-header-stats {
      width: 100%;
      justify-content: flex-start;
      flex-wrap: wrap;
    }

    .admin-panel-header,
    .admin-record {
      grid-template-columns: 1fr;
      display: grid;
    }

    .admin-search {
      min-width: 0;
      width: 100%;
    }

    .admin-record-meta,
    .admin-record-actions {
      justify-content: flex-start;
    }

    .admin-fieldset-grid,
    .admin-image-uploader,
    .admin-gallery-uploader,
    .admin-gallery-item {
      grid-template-columns: 1fr;
    }

    .admin-preview,
    .admin-image-placeholder {
      width: 100%;
      height: 190px;
    }

    .admin-savebar {
      display: grid;
    }

    .admin-dashboard-marks,
    .admin-module-grid,
    .admin-seed-card {
      grid-template-columns: 1fr;
    }
  }
`;
