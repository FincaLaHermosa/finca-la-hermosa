import { HomeContent } from "@/components/HomeContent";
import { homeStyles } from "@/lib/home-styles";

export default function HomePage() {
  return (
    <>
      <style data-route-page-style dangerouslySetInnerHTML={{ __html: homeStyles }} />
      <HomeContent />
    </>
  );
}
