import { ExperienciasContent } from "@/components/ExperienciasContent";
import { experienciasStyles } from "@/lib/experiencias-styles";

export default function ExperienciasPage() {
  return (
    <>
      <style data-route-page-style dangerouslySetInnerHTML={{ __html: experienciasStyles }} />
      <ExperienciasContent />
    </>
  );
}
