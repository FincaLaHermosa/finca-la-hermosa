import { NosotrosContent } from "@/components/NosotrosContent";
import { getNosotrosData } from "@/lib/cms/queries";
import { nosotrosStyles } from "@/lib/nosotros-styles";

export const revalidate = 60;

export default async function NosotrosPage() {
  const data = await getNosotrosData();

  return (
    <>
      <style data-route-page-style dangerouslySetInnerHTML={{ __html: nosotrosStyles }} />
      <NosotrosContent data={data} />
    </>
  );
}
