import { FaqContent } from "@/components/FaqContent";
import { getFaqData } from "@/lib/cms/queries";
import { faqStyles } from "@/lib/faq-styles";

export const revalidate = 60;

export default async function FaqPage() {
  const data = await getFaqData();

  return (
    <>
      <style data-route-page-style dangerouslySetInnerHTML={{ __html: faqStyles }} />
      <FaqContent data={data} />
    </>
  );
}
