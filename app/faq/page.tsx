import Link from "next/link";
import { FaqClient } from "@/components/FaqClient";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";

export default function FaqPage() {
  return (
    <main>
      <PageHero
        eyebrow="Todo lo que necesitas saber"
        title="Preguntas"
        italic="frecuentes."
        body="Respuestas claras para reservar, planear y entender cómo funciona Finca La Hermosa antes de solicitar tu propuesta."
        image="/assets/photo-alberca.jpg"
      />
      <section className="section">
        <div className="section-inner">
          <SectionHeader eyebrow="FAQ" title="Antes de" italic="cotizar." />
          <FaqClient />
        </div>
      </section>
      <section className="cta-band">
        <div className="section-inner">
          <h2>
            Si falta algo, <em>lo resolvemos por WhatsApp.</em>
          </h2>
          <Link className="btn btn-accent" href="/cotizar">Cotizar ahora</Link>
        </div>
      </section>
    </main>
  );
}
