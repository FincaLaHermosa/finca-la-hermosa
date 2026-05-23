import { FaqContent } from "@/components/FaqContent";
import { loadPrototype } from "@/lib/prototype";

const faqReactStyleFixes = `
.faq-page-react button.faq-question {
  width: 100%;
  appearance: none;
  border: 0;
  background: transparent;
  color: inherit;
  font: inherit;
  text-align: left;
  margin: 0;
}
`;

export default function FaqPage() {
  const payload = loadPrototype("faq");

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `${payload.styles}\n${faqReactStyleFixes}` }} />
      <FaqContent />
    </>
  );
}
