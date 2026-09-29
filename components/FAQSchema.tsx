import { StructuredData } from "./StructuredData";

export function FAQSchema({ faqs }: { faqs: { question: string; answer: string }[] }) {
  if (!faqs.length) return null;
  return <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ question, answer }) => ({
      "@type": "Question", name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  }} />;
}
