import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { timeline } from "@/data/site";

export default function NosotrosPage() {
  return (
    <main>
      <PageHero
        eyebrow="Nuestra historia"
        title="Un lugar"
        italic="hecho para compartir."
        body="Finca La Hermosa nace de una familia que convirtió su propio espacio de descanso en un venue para recibir a otras familias, equipos y celebraciones."
        image="/assets/photo-hero.jpg"
      />
      <section className="section">
        <div className="section-inner split">
          <div className="media-frame">
            <Image src="/assets/hero-wedding.jpg" alt="Historia de Finca La Hermosa" width={860} height={900} />
          </div>
          <div>
            <SectionHeader eyebrow="Nuestro origen" title="La finca es" italic="una casa abierta." />
            <p className="editorial-copy">No buscamos parecer un salón genérico. Queremos que cada evento se sienta recibido, cuidado y natural.</p>
          </div>
        </div>
      </section>
      <section className="section warm">
        <div className="section-inner">
          <SectionHeader eyebrow="El camino recorrido" title="Una historia" italic="en expansión." align="center" />
          <div className="timeline-grid">
            {timeline.map(([year, title, text]) => (
              <article key={year}>
                <span>{year}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section dark">
        <div className="section-inner">
          <SectionHeader eyebrow="Las personas detrás de la finca" title="Presentes" italic="en cada evento." light />
          <div className="team-grid">
            {["La familia fundadora", "Coordinadora", "Anfitrión + asistentes", "Jardinería y cuidado"].map((name) => (
              <article key={name}>
                <span>Equipo</span>
                <h3>{name}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="cta-band">
        <div className="section-inner">
          <h2>
            Nuestra promesa: <em>contigo, siempre.</em>
          </h2>
          <Link className="btn btn-accent" href="/cotizar">Cotizar ahora</Link>
        </div>
      </section>
    </main>
  );
}
