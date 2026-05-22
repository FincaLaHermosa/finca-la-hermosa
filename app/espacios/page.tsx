import Link from "next/link";
import { SpaceGrid } from "@/components/Cards";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";

export default function EspaciosPage() {
  return (
    <main>
      <PageHero
        eyebrow="El venue"
        title="Espacios"
        italic="que cuentan historias."
        body="Cada rincón de la finca está pensado para vivirse plenamente. Jardines, salón, casa, alberca y bosque funcionan como un solo escenario."
        image="/assets/photo-terraza.jpg"
        ctaHref="/cotizar"
        ctaLabel="Cotizar ahora"
      />
      <section className="section">
        <div className="section-inner">
          <SectionHeader eyebrow="Activos del venue" title="Un inventario" italic="vivo y flexible." />
          <SpaceGrid />
        </div>
      </section>
      <section className="cta-band">
        <div className="section-inner">
          <h2>
            Encuentra el rincón <em>para tu momento.</em>
          </h2>
          <Link className="btn btn-accent" href="/cotizar">Reservar fecha</Link>
        </div>
      </section>
    </main>
  );
}
