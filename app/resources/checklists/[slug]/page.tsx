import { PageFaqs } from "../../../../components/PageFaqs";
import { downloadFaqs } from "../../../../data/page-faqs";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, Check } from "lucide-react";
import { SiteHeader, SiteFooter } from "../../../../components/SiteChrome";
import { StructuredData } from "../../../../components/StructuredData";
import { LeadMagnetForm } from "../../../../components/LeadMagnetForm";
import { withSocial } from "../../../../lib/seo";
import { leadMagnets, getLeadMagnet } from "../../../../data/lead-magnets";

const SITE = "https://www.eunomiapharmaservices.com";

export function generateStaticParams() {
  return leadMagnets.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const m = getLeadMagnet(slug);
  if (!m) return {};
  const path = `/resources/checklists/${slug}`;
  return withSocial(path, { title: m.metaTitle, description: m.metaDescription, alternates: { canonical: SITE + path } });
}

export default async function ChecklistPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const m = getLeadMagnet(slug);
  if (!m) notFound();
  const url = `${SITE}/resources/checklists/${slug}`;
  const noun = m.kind === "guide" ? "guide" : m.kind === "pack" ? "pack" : "checklist";
  const unit = m.kind === "checklist" || !m.kind ? "checks" : "points";
  return (
    <main>
      <StructuredData data={{ "@context": "https://schema.org", "@type": "DigitalDocument", "@id": `${url}#document`, name: m.title, description: m.metaDescription, url, inLanguage: "en-GB", publisher: { "@id": `${SITE}/#organization` }, encodingFormat: "application/pdf", isAccessibleForFree: true }} />
      <SiteHeader />
      <section className="checklist-hero section-pad">
        <a href="/resources" className="back-link"><ArrowLeft /> All resources</a>
        <p className="section-kicker">Free {noun}</p>
        <h1>{m.title}</h1>
        <p>{m.summary}</p>
        <p className="checklist-audience"><b>For:</b> {m.audience}</p>
      </section>
      <section className="checklist-body section-pad">
        <div className="checklist-contents">
          <h2>What the {noun} covers</h2>
          <ul>
            {m.sections.map((s) => (
              <li key={s.heading}><Check aria-hidden="true" /><span><b>{s.heading}</b> · {s.items.length} {unit}</span></li>
            ))}
          </ul>
          <p className="legal-note">{m.note}</p>
          {m.source && <p className="checklist-source">Based on the <a href={m.source.href} target="_blank" rel="noreferrer">{m.source.label}</a>.</p>}
        </div>
        <LeadMagnetForm title={m.title} file={m.file} resourceSlug={m.slug} noun={noun} />
      </section>
      <PageFaqs faqs={downloadFaqs[slug] ?? []} title={`${m.title}: common questions`} />
      <SiteFooter />
    </main>
  );
}
