import { EspaciosContent } from "@/components/EspaciosContent";
import { loadPrototype } from "@/lib/prototype";

const espaciosReactStyleFixes = `
.espacios-page-react button.sg-list-item {
  appearance: none;
  border: 0;
  background: transparent;
  color: inherit;
  font: inherit;
  width: 100%;
  text-align: left;
}
.espacios-page-react button.sg-dot {
  appearance: none;
  border: 0;
  padding: 0;
}
`;

export default function EspaciosPage() {
  const payload = loadPrototype("espacios");

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `${payload.styles}\n${espaciosReactStyleFixes}` }} />
      <EspaciosContent />
    </>
  );
}
