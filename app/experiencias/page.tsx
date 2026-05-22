import { ExperienciasContent } from "@/components/ExperienciasContent";
import { loadPrototype } from "@/lib/prototype";

export default function ExperienciasPage() {
  const payload = loadPrototype("experiencias");

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: payload.styles }} />
      <ExperienciasContent />
    </>
  );
}
