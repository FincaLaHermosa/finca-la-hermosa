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

type CotizarPageProps = {
  searchParams?: Promise<{ tipo?: string }>;
};

export default async function CotizarPage({ searchParams }: CotizarPageProps) {
  const payload = loadPrototype("cotizar");
  const params = await searchParams;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `${payload.styles}\n${cotizarReactStyleFixes}` }} />
      <CotizarContent initialType={params?.tipo} />
    </>
  );
}
