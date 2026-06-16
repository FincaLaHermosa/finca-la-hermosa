import Link from "next/link";
import { AdminShell } from "@/components/admin/AdminShell";
import { SeedDefaultsButton } from "@/components/admin/SeedDefaultsButton";
import { adminResources } from "@/lib/admin/resources";

export default function AdminPage() {
  return (
    <AdminShell>
      <div className="admin-header">
        <div>
          <h1>Admin Finca La Hermosa</h1>
          <p>Gestiona contenido comercial, imágenes, FAQ, espacios, paquetes y cotizador.</p>
        </div>
      </div>
      <SeedDefaultsButton />
      <div className="admin-card" style={{ marginTop: 22, padding: 22, display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 12 }}>
        {adminResources.map((resource) => (
          <Link key={resource.slug} className="admin-secondary" style={{ textDecoration: "none", textAlign: "center" }} href={`/admin/${resource.slug}`}>
            {resource.title}
          </Link>
        ))}
      </div>
    </AdminShell>
  );
}
