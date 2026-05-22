import { PageHero } from "@/components/PageHero";
import { QuoteForm } from "@/components/QuoteForm";

export default function CotizarPage() {
  return (
    <main>
      <PageHero
        eyebrow="Tu propuesta personalizada"
        title="Cuéntanos sobre"
        italic="tu celebración."
        body="Responde 4 preguntas y en menos de 24 horas recibirás una propuesta con PDF personalizado, precio exacto y próximos pasos."
        image="/assets/photo-cta-dark.jpg"
      />
      <QuoteForm />
    </main>
  );
}
