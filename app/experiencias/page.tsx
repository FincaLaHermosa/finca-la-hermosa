import { ExperienciasContent } from "@/components/ExperienciasContent";
import { getExperienciasData } from "@/lib/cms/queries";
import { experienciasStyles } from "@/lib/experiencias-styles";

export const revalidate = 60;

export default async function ExperienciasPage() {
  const data = await getExperienciasData();

  return (
    <>
      <style data-route-page-style dangerouslySetInnerHTML={{ __html: experienciasStyles }} />
      <ExperienciasContent data={data} />
    </>
  );
}
