import Image from "next/image";
import Link from "next/link";
import { experiences, packages, spaces } from "@/data/site";

export function ExperienceGrid({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`experience-grid ${compact ? "compact" : ""}`}>
      {experiences.map((item) => {
        const Icon = item.icon;
        return (
          <article className="experience-card" key={item.slug}>
            <span className="icon-tile">
              <Icon size={22} />
            </span>
            <span className="card-label">{item.label}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        );
      })}
    </div>
  );
}

export function SpaceGrid() {
  return (
    <div className="space-grid">
      {spaces.map((space) => (
        <article className="space-card" key={space.name}>
          <Image src={space.image} alt={space.name} width={720} height={520} />
          <div>
            <h3>{space.name}</h3>
            <p>{space.detail}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

export function PackageGrid() {
  return (
    <div className="package-grid">
      {packages.map((pkg) => (
        <article className="package-card" key={pkg.name}>
          <span className="card-label">{pkg.tag}</span>
          <h3>{pkg.name}</h3>
          <p>{pkg.text}</p>
          <strong>{pkg.price}</strong>
          <Link href="/cotizar">Cotizar este paquete</Link>
        </article>
      ))}
    </div>
  );
}
