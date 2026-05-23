import { CotizarContent } from "@/components/CotizarContent";
import { loadPrototype } from "@/lib/prototype";

const cotizarReactStyleFixes = `
.cotizar-page-react button.tipo-card,
.cotizar-page-react button.addon-item {
  appearance: none;
}
.cotizar-page-react .summary-wrap {
  position: static;
}
`;

export default function CotizarPage() {
  const payload = loadPrototype("cotizar");

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `${payload.styles}\n${cotizarReactStyleFixes}` }} />
      <CotizarContent />
    </>
  );
}
