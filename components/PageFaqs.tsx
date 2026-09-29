import { FAQSchema } from "./FAQSchema";

export type Faq = { question: string; answer: string };

/** Visible FAQ block with matching FAQPage structured data. */
export function PageFaqs({ faqs, title = "Frequently asked questions", kicker = "Questions, answered", tone = "light" }: { faqs: Faq[]; title?: string; kicker?: string; tone?: "light" | "dark" }) {
  if (!faqs.length) return null;
  return (
    <section className={`page-faqs section-pad ${tone === "dark" ? "page-faqs-dark" : ""}`} aria-labelledby="page-faqs-title">
      <FAQSchema faqs={faqs} />
      <div>
        <p className="section-kicker">{kicker}</p>
        <h2 id="page-faqs-title">{title}</h2>
      </div>
      <div className="faq-list">
        {faqs.map(({ question, answer }) => (
          <details key={question}>
            <summary>{question}</summary>
            <p>{answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
