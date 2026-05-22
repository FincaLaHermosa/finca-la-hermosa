import Image from "next/image";
import Link from "next/link";
import { ExperienceGrid, PackageGrid, SpaceGrid } from "@/components/Cards";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";

export default function HomePage() {
  return (
    <main>
      <PageHero
        eyebrow="Venue y experiencias, México"
        title="Celebra en"
        italic="la naturaleza."
        body="Finca La Hermosa reúne jardines, casa, salón, alberca y bosque para celebraciones privadas con estética, calma y libertad."
        ctaHref="/cotizar"
        ctaLabel="Cotizar mi experiencia"
      />

      <section className="section warm">
        <div className="section-inner">
          <SectionHeader
            eyebrow="Experiencias"
            title="Un lugar,"
            italic="muchas formas de celebrar."
            body="Bodas, reuniones familiares, retiros y eventos corporativos conviven en una misma finca diseñada para sentirse privada, cuidada y flexible."
            align="center"
          />
          <ExperienceGrid compact />
        </div>
      </section>

      <section className="section">
        <div className="section-inner split">
          <div>
            <SectionHeader eyebrow="La finca" title="Espacios" italic="con intención." />
            <p className="editorial-copy">La experiencia no depende de un solo salón. Se construye al caminar entre jardín, casa, terraza, alberca y bosque.</p>
            <Link className="btn btn-outline-dark" href="/espacios">Ver espacios</Link>
          </div>
          <div className="media-frame">
            <Image src="/assets/photo-jardines.jpg" alt="Jardines de Finca La Hermosa" width={860} height={900} />
          </div>
        </div>
      </section>

      <section className="section warm">
        <div className="section-inner">
          <SectionHeader eyebrow="Paquetes" title="Empieza con" italic="una base clara." />
          <PackageGrid />
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <SectionHeader eyebrow="Activos del venue" title="Todo el entorno" italic="trabaja a favor del evento." />
          <SpaceGrid />
        </div>
      </section>

      <section className="cta-band">
        <div className="section-inner">
          <h2>
            Tu fecha puede empezar <em>con una conversación.</em>
          </h2>
          <Link className="btn btn-accent" href="/cotizar">Cotizar ahora</Link>
        </div>
      </section>
    </main>
  );
}
