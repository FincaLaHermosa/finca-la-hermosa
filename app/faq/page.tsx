import { FaqContent } from "@/components/FaqContent";
import { faqStyles } from "@/lib/faq-styles";

export default function FaqPage() {
  return (
    <>
      <style data-route-page-style dangerouslySetInnerHTML={{ __html: faqStyles }} />
      <FaqContent />
    </>
  );
}
