import { NosotrosContent } from "@/components/NosotrosContent";
import { nosotrosStyles } from "@/lib/nosotros-styles";

export default function NosotrosPage() {
  return (
    <>
      <style data-route-page-style dangerouslySetInnerHTML={{ __html: nosotrosStyles }} />
      <NosotrosContent />
    </>
  );
}
