import { CotizarContent } from "@/components/CotizarContent";
import { cotizarStyles } from "@/lib/cotizar-styles";

type CotizarPageProps = {
  searchParams?: Promise<{ tipo?: string }>;
};

export default async function CotizarPage({ searchParams }: CotizarPageProps) {
  const params = await searchParams;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: cotizarStyles }} />
      <CotizarContent initialType={params?.tipo} />
    </>
  );
}
