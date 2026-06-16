import { EspaciosContent } from "@/components/EspaciosContent";
import { getEspaciosData } from "@/lib/cms/queries";
import { espaciosStyles } from "@/lib/espacios-styles";

export const revalidate = 60;

export default async function EspaciosPage() {
  const data = await getEspaciosData();

  return (
    <>
      <style data-route-page-style dangerouslySetInnerHTML={{ __html: espaciosStyles }} />
      <EspaciosContent data={data} />
    </>
  );
}
