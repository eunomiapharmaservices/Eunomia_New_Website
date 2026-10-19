import type { Metadata } from "next";
import { ServiceSubpage } from "../../../components/ServiceSubpage";
import { StructuredData } from "../../../components/StructuredData";
import styles from "../../../components/MarketView.module.css";
import { withSocial, SITE_URL } from "../../../lib/seo";

const path = "/services/promotional-materials-review";
export const metadata: Metadata = withSocial(path, {
  title: "Outsourced Pharma Copy Approval & Review UK | Eunomia",
  description: "Outsourced pharmaceutical promotional materials review and copy approval support for UK and European teams, with specialist reviewers and clear signatory roles.",
  alternates: { canonical: SITE_URL + path },
});

export default function PromotionalMaterialsReview() {
  return <>
    <StructuredData data={{
      "@context": "https://schema.org", "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Services", item: SITE_URL + "/services" },
        { "@type": "ListItem", position: 2, name: "Promotional materials review", item: SITE_URL + path },
      ],
    }} />
    <ServiceSubpage
      servicePath={path}
      heading="Outsourced Pharmaceutical Promotional Materials Review and Copy Approval Support"
      kicker="Promotional materials review and copy approval"
      title="Specialist review capacity within your approval process."
      serviceTitleFirst
      intro="Eunomia Pharma Services provides outsourced promotional and medical materials review, copy approval process support and review operations for pharmaceutical companies in the UK and Europe. We work within your SOPs and systems, connecting specialist reviewers, local expertise, approval workflows and traceable records. The scope, markets and any final signatory arrangements are agreed before work begins."
      services={[
        "Promotional and medical materials review against the agreed brief and applicable codes",
        "Copy approval workflows, SOPs and reviewer responsibilities",
        "Review templates, documented feedback and version control",
        "Routing to authorised approvers and nominated signatories",
        "UK review operations and coordination of local-market expertise",
        "Review activity reporting, quality assurance and audit-ready records",
      ]}
      outcomes={[
        "Defined review capacity without building an equivalent permanent function",
        "Clear ownership of review, escalation, certification and release",
        "Visible workload, review feedback and evidence for oversight",
      ]}
      heroDetail={<section className={styles.approach} aria-label="Outsourced promotional review delivery">
        <div className={styles.overview}>
          <article>
            <p className={styles.eyebrow}>UK and European pharmaceutical teams</p>
            <h2>Who this service is for</h2>
            <p>Commercial, medical and compliance teams that need additional materials-review capacity, a defined outsourced review service or a more consistent process across markets. We agree the material types, products, audiences, channels and country requirements with you.</p>
          </article>
          <article className={styles.challenge}>
            <h2>Review capacity and process ownership</h2>
            <p>A lean team can struggle with increasing material volumes, incomplete submissions and repeated review cycles. Eunomia combines people and process support so reviewers, material owners and approvers understand the evidence and decisions each stage needs.</p>
          </article>
        </div>
        <div className={styles.delivery}>
          <article>
            <h2>What you receive</h2>
            <ul>
              <li>An agreed scope, reviewer roles, decision rights and escalation routes.</li>
              <li>A submission and review workflow integrated with your procedures and systems.</li>
              <li>Documented reviewer feedback, templates and version-linked approval records.</li>
              <li>Reporting on review activity, turnaround, recurring issues and improvement actions.</li>
            </ul>
            <h3>Flexible delivery</h3>
            <p>Support can cover a defined process or market, supplement your team or form part of an ongoing <a href="/services/shared-services">shared compliance service</a>. Capacity, reviewer suitability, service levels and system access are agreed for the engagement.</p>
          </article>
          <aside className={styles.priorities}>
            <h3>How an engagement runs</h3>
            <ol>
              <li><b>Scope.</b> Confirm products, markets, material types, workload and accountable owners.</li>
              <li><b>Set up.</b> Agree reviewer expertise, SOPs, templates, hand-offs and signatory arrangements.</li>
              <li><b>Operate.</b> Review submissions, document feedback and route decisions through authorised personnel.</li>
              <li><b>Improve.</b> Review quality, turnaround and recurring issues with your team.</li>
            </ol>
          </aside>
        </div>
        <div className={styles.delivery}>
          <article>
            <p className={styles.eyebrow}>Published client evidence</p>
            <h2>Materials-review shared-service case study</h2>
            <p>Our published August 2026 case study describes support for a UK-headquartered pharmaceutical company expanding in Europe. The engagement combined experienced reviewers and signatories, workflows, SOPs, templates and reporting.</p>
            <p>It reports turnaround reducing from five days to two and review cycles from four to two. These results relate to that engagement and do not guarantee the same outcome for other clients.</p>
            <a className={styles.checklist} href="/resources/materials-review-shared-service-case-study">Read the materials-review case study <span aria-hidden="true">→</span></a>
          </article>
          <aside className={styles.priorities}>
            <h3>Meet the team behind delivery</h3>
            <p><a href="/team#agyat-suri">Agyat Suri</a> is Eunomia’s Healthcare Compliance Operations Lead and contributes the operational perspective in the published case study. <a href="/team#rashmi-papneja">Rashmi Papneja</a>, Founder and Managing Director, leads Eunomia’s UK compliance work.</p>
            <p>Reviewer and signatory suitability is established for the product, market and role; a leadership role alone does not establish signatory eligibility.</p>
          </aside>
        </div>
      </section>}
      detailSection={<section className={styles.approach} aria-label="Review and certification responsibilities">
        <div className={styles.overview}>
          <article>
            <h2>ABPI review support and final certification</h2>
            <p>Compliance review, medical review, internal approval and final certification are distinct decisions. For UK promotional material, the ABPI Code sets requirements for certification of the final form by an eligible nominated signatory. Outsourcing a review task does not itself confer certification authority.</p>
            <p>Any signatory support must be separately agreed, including eligibility, product knowledge, experience and nomination requirements. Your company retains oversight of the process and its responsibilities under the applicable rules.</p>
            <p><a href="https://www.pmcpa.org.uk/the-code/2024-interactive-abpi-code-of-practice/clause-8-certification-and-examination/" target="_blank" rel="noreferrer">Official reference: PMCPA Clause 8 — Certification and Examination</a></p>
          </article>
          <article className={styles.challenge}>
            <h2>EFPIA and local-market requirements</h2>
            <p>European support needs to account for the EFPIA Code alongside applicable national codes and laws. A UK review or certificate should not be assumed to satisfy another market’s requirements. We agree the markets, local expertise and decision routes within the scope.</p>
            <p><a href="https://www.efpia.eu/relationships-code/the-efpia-code/" target="_blank" rel="noreferrer">Official reference: EFPIA Code</a></p>
            <p>Sources checked 19 October 2026. Confirm the current requirements for the material and intended use.</p>
          </article>
        </div>
        <nav className={styles.related} aria-label="Promotional review resources">
          <h2>Plan your review service</h2>
          <div>
            <a href="/resources/promotional-review-workflow">Promotional review workflow and checklist →</a>
            <a href="/resources/articles/abpi-signatory-certification-requirements">ABPI signatory and certification requirements →</a>
            <a href="/services/automation-of-compliance-operations">Review workflow automation →</a>
          </div>
        </nav>
        <h2>What to bring to the first conversation</h2>
        <p>Share the countries and products in scope, material types and audiences, expected volumes, current SOPs, review systems and signatory arrangements. This helps us propose the right people, workflow and service levels.</p>
      </section>}
      faqs={[
        { question: "Does Eunomia provide outsourced pharmaceutical copy approval support in the UK?", answer: "Yes. Eunomia provides promotional and medical materials review and copy approval process support, including specialist reviewers, workflows, SOPs, templates, records and reporting. The exact roles, capacity and markets are agreed for each engagement." },
        { question: "Can you support ABPI and EFPIA promotional review?", answer: "The service can support UK review under the ABPI Code and coordination of European review with relevant local expertise. Applicable national requirements, products and reviewer suitability must be confirmed when scoping the service." },
        { question: "Does outsourced review include final medical signatory certification?", answer: "Not automatically. Review and final certification are distinct. Any nominated signatory role must be separately agreed and meet the applicable qualifications, knowledge, experience and nomination requirements. An ordinary reviewer approval does not replace certification." },
        { question: "Can you work within our existing review system?", answer: "Yes. The service is designed around your SOPs and systems, with access, training, roles and evidence requirements agreed during setup. Specific platform requirements should be confirmed at scoping." },
        { question: "Can AI or workflow automation approve promotional materials?", answer: "Automation can support submission checks, routing, version control and reporting. It does not replace accountable human review or the eligible nominated signatory’s required certification decision." },
        { question: "Is there an example of Eunomia delivering this service?", answer: "The published materials-review shared-service case study describes support for a UK-headquartered pharmaceutical company expanding across Europe, combining reviewers, signatories, workflows, SOPs and operational reporting. Its results are specific to that engagement." },
      ]}
    />
  </>;
}
