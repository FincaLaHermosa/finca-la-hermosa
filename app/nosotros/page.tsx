import { NosotrosContent } from "@/components/NosotrosContent";
import { nosotrosStyles } from "@/lib/nosotros-styles";

export default function NosotrosPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: nosotrosStyles }} />
      <NosotrosContent />
    </>
  );
}
