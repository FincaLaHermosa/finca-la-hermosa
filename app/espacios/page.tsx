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
.espacios-page-react .hero-folio-display {
  font-size: clamp(56px, 8vw, 104px) !important;
  line-height: 0.92 !important;
  letter-spacing: -0.025em !important;
}
.espacios-page-react .hero-folio-italic {
  font-size: clamp(52px, 7.5vw, 96px) !important;
  line-height: 1 !important;
}
@media (max-width: 760px) {
  .espacios-page-react .hero-folio-display {
    font-size: clamp(34px, 10.8vw, 44px) !important;
    line-height: 0.92 !important;
    letter-spacing: 0 !important;
  }
  .espacios-page-react .hero-folio-italic {
    font-size: clamp(38px, 12vw, 54px) !important;
    line-height: 1 !important;
  }
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
