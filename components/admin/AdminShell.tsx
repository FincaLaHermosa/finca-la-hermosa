"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { adminResources } from "@/lib/admin/resources";
import { createClient } from "@/lib/supabase/client";

export function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  const signOut = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.replace("/admin/login");
  };

  return (
    <div className="admin-shell">
      <aside className="admin-sidebar">
        <Link className="admin-brand" href="/admin">
          <span>FLH</span>
          <small>CMS</small>
        </Link>
        <nav className="admin-nav">
          {adminResources.map((resource) => {
            const href = `/admin/${resource.slug}`;
            return (
              <Link key={resource.slug} className={pathname === href ? "active" : ""} href={href}>
                {resource.title}
              </Link>
            );
          })}
        </nav>
        <button className="admin-logout" type="button" onClick={signOut}>Salir</button>
      </aside>
      <main className="admin-main">{children}</main>
      <style jsx global>{adminCss}</style>
    </div>
  );
}

const adminCss = `
  body { background: #f5f0e8; }
  .admin-shell { min-height: 100vh; display: grid; grid-template-columns: 260px 1fr; color: #1e3232; font-family: var(--font-jost), system-ui, sans-serif; }
  .admin-sidebar { position: sticky; top: 0; height: 100vh; background: #1e3232; color: #fffdf8; padding: 22px; display: flex; flex-direction: column; gap: 22px; }
  .admin-brand { color: inherit; text-decoration: none; display: flex; align-items: baseline; gap: 10px; }
  .admin-brand span { font-family: var(--font-cormorant), Georgia, serif; font-size: 2rem; line-height: 1; }
  .admin-brand small { text-transform: uppercase; letter-spacing: .16em; font-size: .68rem; color: rgba(255,253,248,.55); }
  .admin-nav { display: grid; gap: 5px; overflow: auto; padding-right: 4px; }
  .admin-nav a { color: rgba(255,253,248,.68); text-decoration: none; border-radius: 8px; padding: 10px 12px; font-size: .88rem; }
  .admin-nav a.active, .admin-nav a:hover { background: rgba(255,253,248,.1); color: #fffdf8; }
  .admin-logout { margin-top: auto; border: 1px solid rgba(255,253,248,.18); color: #fffdf8; background: transparent; border-radius: 999px; padding: 10px 14px; cursor: pointer; }
  .admin-main { padding: 34px; max-width: 1240px; width: 100%; }
  .admin-header { display: flex; justify-content: space-between; gap: 20px; align-items: flex-start; margin-bottom: 24px; }
  .admin-header h1 { font-family: var(--font-cormorant), Georgia, serif; font-weight: 400; font-size: 2.4rem; margin: 0 0 4px; color: #1e3232; }
  .admin-header p { margin: 0; color: #6f634f; font-size: .92rem; }
  .admin-card { background: #fffdf8; border: 1px solid #ede6d6; border-radius: 12px; box-shadow: 0 12px 30px rgba(45,73,73,.07); }
  .admin-grid { display: grid; grid-template-columns: minmax(0, 1fr) 440px; gap: 22px; align-items: start; }
  .admin-table { width: 100%; border-collapse: collapse; font-size: .84rem; }
  .admin-table th, .admin-table td { padding: 12px 14px; border-bottom: 1px solid #ede6d6; vertical-align: top; text-align: left; }
  .admin-table th { color: #6f634f; text-transform: uppercase; letter-spacing: .08em; font-size: .68rem; font-weight: 500; }
  .admin-table button, .admin-primary, .admin-secondary, .admin-danger { border-radius: 999px; padding: 9px 14px; cursor: pointer; font-size: .76rem; letter-spacing: .06em; text-transform: uppercase; }
  .admin-primary { border: 0; background: #9d563d; color: #fffdf8; }
  .admin-secondary { border: 1px solid #2d4949; background: transparent; color: #2d4949; }
  .admin-danger { border: 1px solid #9d563d; background: transparent; color: #9d563d; }
  .admin-form { padding: 18px; display: grid; gap: 14px; }
  .admin-field { display: grid; gap: 7px; }
  .admin-field label { font-size: .72rem; text-transform: uppercase; letter-spacing: .08em; color: #6f634f; }
  .admin-field input, .admin-field textarea { width: 100%; border: 1px solid #ede6d6; background: #fffdf8; border-radius: 8px; padding: 11px 12px; color: #1a1a1a; font: inherit; }
  .admin-field textarea { min-height: 90px; resize: vertical; }
  .admin-field textarea[data-json="true"] { min-height: 180px; font-family: ui-monospace, SFMono-Regular, Consolas, monospace; font-size: .78rem; }
  .admin-check { display: flex; align-items: center; gap: 10px; }
  .admin-check input { width: auto; }
  .admin-preview { width: 100%; max-height: 150px; object-fit: cover; border-radius: 8px; border: 1px solid #ede6d6; }
  .admin-message { padding: 10px 12px; border-radius: 8px; background: #f5f0e8; color: #5a5040; font-size: .84rem; }
  .admin-error { background: #fff2ec; color: #9d563d; }
  .admin-actions { display: flex; gap: 10px; flex-wrap: wrap; }
  .admin-empty { padding: 28px; color: #6f634f; }
  @media (max-width: 900px) {
    .admin-shell { grid-template-columns: 1fr; }
    .admin-sidebar { position: static; height: auto; }
    .admin-grid { grid-template-columns: 1fr; }
  }
`;
