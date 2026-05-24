import { HomeContent } from "@/components/HomeContent";
import { homeStyles } from "@/lib/home-styles";

export default function HomePage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: homeStyles }} />
      <HomeContent />
    </>
  );
}
