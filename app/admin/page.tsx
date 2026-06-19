import Link from "next/link";
import { ArrowRight, CalendarDays, FileText, ImageIcon, Package, Settings, Sparkles } from "lucide-react";
import { AdminShell } from "@/components/admin/AdminShell";
import { SeedDefaultsButton } from "@/components/admin/SeedDefaultsButton";
import { adminResourceGroups, adminResources } from "@/lib/admin/resources";

const dashboardHighlights = [
  { label: "Oferta", value: "Paquetes", href: "/admin/packages", icon: Package },
  { label: "Venue", value: "Espacios", href: "/admin/spaces", icon: ImageIcon },
  { label: "Cotización", value: "Cotizador", href: "/admin/quote-settings", icon: Sparkles },
  { label: "Agenda", value: "Fechas ocupadas", href: "/admin/confirmed-events", icon: CalendarDays },
];

export default function AdminPage() {
  return (
    <AdminShell>
      <div className="admin-header">
        <div>
          <p className="admin-eyebrow">Centro de edición</p>
          <h1>Admin Finca La Hermosa</h1>
          <p>Edita el contenido comercial del sitio sin tocar código: paquetes, espacios, imágenes, preguntas frecuentes, testimonios y cotizador.</p>
        </div>
        <Link className="admin-primary" href="/admin/packages">
          Ir a paquetes
          <ArrowRight size={15} strokeWidth={1.8} />
        </Link>
      </div>

      <section className="admin-dashboard-hero">
        <div>
          <p className="admin-module-eyebrow">Prioridad</p>
          <h2>Cuida primero lo que ayuda a cotizar: paquetes, espacios e imágenes.</h2>
          <p>Usa este dashboard como mapa de edición. Cada sección controla una parte concreta del sitio público.</p>
        </div>
        <div className="admin-dashboard-marks" aria-label="Accesos principales">
          {dashboardHighlights.map((item) => {
            const Icon = item.icon;
            return (
              <Link key={item.href} href={item.href}>
                <Icon size={18} strokeWidth={1.7} />
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </Link>
            );
          })}
        </div>
      </section>

      <SeedDefaultsButton />

      <section className="admin-module-board" aria-label="Módulos del CMS">
        {adminResourceGroups.map((group) => {
          const resources = adminResources.filter((resource) => resource.group === group.id);
          return (
            <div key={group.id} className="admin-module-section">
              <div className="admin-module-heading">
                <p className="admin-module-eyebrow">{group.label}</p>
                <h2>{getGroupTitle(group.id)}</h2>
              </div>
              <div className="admin-module-grid">
                {resources.map((resource) => (
                  <Link key={resource.slug} className="admin-module-card" href={`/admin/${resource.slug}`}>
                    <span className="admin-badge" data-tone="accent">{resource.eyebrow}</span>
                    <strong>{resource.title}</strong>
                    <p>{resource.description}</p>
                    <span className="admin-module-link">
                      Editar sección
                      <ArrowRight size={14} strokeWidth={1.8} />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      <div className="admin-dashboard-note">
        <Settings size={17} strokeWidth={1.7} />
        <p>Antes de publicar cambios del CMS en producción, confirma las variables de Supabase en Vercel y prueba el acceso con el usuario admin real.</p>
      </div>
    </AdminShell>
  );
}

function getGroupTitle(group: string) {
  if (group === "site") return "Base del sitio";
  if (group === "commercial") return "Venta y cotización";
  if (group === "content") return "Contenido del sitio";
  return "Operación";
}
