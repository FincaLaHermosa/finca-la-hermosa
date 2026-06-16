import { CotizarContent } from "@/components/CotizarContent";
import { getQuoteData } from "@/lib/cms/queries";
import { cotizarStyles } from "@/lib/cotizar-styles";

export const revalidate = 60;

type CotizarPageProps = {
  searchParams?: Promise<{ tipo?: string }>;
};

export default async function CotizarPage({ searchParams }: CotizarPageProps) {
  const params = await searchParams;
  const data = await getQuoteData();

  return (
    <>
      <style data-route-page-style dangerouslySetInnerHTML={{ __html: cotizarStyles }} />
      <CotizarContent initialType={params?.tipo} data={data} />
    </>
  );
}
