import type { ReactNode } from "react";
import { ArrowLeft } from "lucide-react";
import { SiteHeader, SiteFooter } from "./SiteChrome";
import { StructuredData } from "./StructuredData";
import { PageFaqs, type Faq } from "./PageFaqs";

const SITE = "https://www.eunomiapharmaservices.com";

// Shared layout for reference pages (deadlines, glossary, case library).
export function ReferencePage({ path, kicker, title, lead, updated, children, faqs = [], schema }: {
  path: string; kicker: string; title: string; lead: string; updated: string;
  children: ReactNode; faqs?: Faq[]; schema?: object;
}) {
  return (
    <main>
      <StructuredData data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Resources", item: `${SITE}/resources` },
          { "@type": "ListItem", position: 2, name: title, item: `${SITE}${path}` },
        ],
      }} />
      {schema && <StructuredData data={schema} />}
      <SiteHeader />
      <article className="standalone-resource">
        <header className="standalone-resource-header section-pad">
          <a href="/resources" className="back-link"><ArrowLeft /> All resources</a>
          <p className="section-kicker">{kicker} · Updated {updated}</p>
          <h1>{title}</h1>
          <p className="reference-lead">{lead}</p>
        </header>
        <div className="reference-body">{children}</div>
      </article>
      {faqs.length > 0 && <PageFaqs faqs={faqs} title="Common questions" />}
      <SiteFooter />
    </main>
  );
}
