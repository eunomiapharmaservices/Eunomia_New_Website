import { StructuredData } from "./StructuredData";

export type FaqItem = { question: string; answer: string };

/** FAQPage structured data for the questions shown on a page. */
export function FaqSchema({ items, url }: { items: FaqItem[]; url: string }) {
  if (!items.length) return null;
  return (
    <StructuredData
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        url,
        mainEntity: items.map(({ question, answer }) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: { "@type": "Answer", text: answer },
        })),
      }}
    />
  );
}
