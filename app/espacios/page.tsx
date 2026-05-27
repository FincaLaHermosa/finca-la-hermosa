import { EspaciosContent } from "@/components/EspaciosContent";
import { espaciosStyles } from "@/lib/espacios-styles";

export default function EspaciosPage() {
  return (
    <>
      <style data-route-page-style dangerouslySetInnerHTML={{ __html: espaciosStyles }} />
      <EspaciosContent />
    </>
  );
}
