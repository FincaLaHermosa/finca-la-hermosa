import { FaqContent } from "@/components/FaqContent";
import { loadPrototype } from "@/lib/prototype";

export default function FaqPage() {
  const payload = loadPrototype("faq");

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: payload.styles }} />
      <FaqContent />
    </>
  );
}
