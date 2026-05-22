import Link from "next/link";
import { ExperienceGrid, PackageGrid } from "@/components/Cards";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";

export default function ExperienciasPage() {
  return (
    <main>
      <PageHero
        eyebrow="Catálogo de paquetes"
        title="Experiencias"
        italic="para cada celebración."
        body="Paquetes base y add-ons para que la finca se adapte a tu tipo de evento sin volver confusa la decisión."
        ctaHref="/cotizar"
        ctaLabel="Cotizar ahora"
      />
      <section className="section">
        <div className="section-inner">
          <SectionHeader eyebrow="Nuestros formatos" title="Elige el punto" italic="de partida." />
          <ExperienceGrid />
        </div>
      </section>
      <section className="section warm">
        <div className="section-inner">
          <SectionHeader eyebrow="Paquetes" title="Precio base" italic="sin vueltas." />
          <PackageGrid />
        </div>
      </section>
      <section className="cta-band">
        <div className="section-inner">
          <h2>
            Te ayudamos a elegir <em>sin sobre-venderte.</em>
          </h2>
          <Link className="btn btn-accent" href="/cotizar">Solicitar propuesta</Link>
        </div>
      </section>
    </main>
  );
}
