import { HomeContent } from "@/components/HomeContent";
import { getHomeData } from "@/lib/cms/queries";
import { homeStyles } from "@/lib/home-styles";

export const revalidate = 60;

export default async function HomePage() {
  const data = await getHomeData();

  return (
    <>
      <style data-route-page-style dangerouslySetInnerHTML={{ __html: homeStyles }} />
      <HomeContent data={data} />
    </>
  );
}
