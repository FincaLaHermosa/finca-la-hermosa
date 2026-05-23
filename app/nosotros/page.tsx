import { NosotrosContent } from "@/components/NosotrosContent";
import { loadPrototype } from "@/lib/prototype";

export default function NosotrosPage() {
  const payload = loadPrototype("nosotros");

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: payload.styles }} />
      <NosotrosContent />
    </>
  );
}
