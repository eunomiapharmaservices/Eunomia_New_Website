import { ArrowUpRight, BookOpen, FileText, PlayCircle } from "lucide-react";
import type { Metadata } from "next";
import { SiteHeader, SiteFooter } from "../../components/SiteChrome";
import { ResourceSearch } from "../../components/ResourceSearch";
export const metadata: Metadata = {
  title:
    "Compliance resources — case studies, webinars and articles | Eunomia Pharma Services",
  description:
    "Case studies, webinars, e-books and 30 articles on pharmaceutical compliance: transparency reporting, fair market value, audit readiness, AI governance and market entry.",
};

const featured = [
  {
    type: "E-book",
    title: "From Compliance Bottlenecks to Business Breakthroughs",
    href: "/resources#articles",
    image:
      "https://eunomiapharmaservices.com/wp-content/uploads/2025/10/ebook.png",
    icon: BookOpen,
  },
  {
    type: "Webinar",
    title:
      "Faster Entry in European Markets — Compliance as the Competitive Edge",
    href: "/resources#articles",
    image:
      "https://eunomiapharmaservices.com/wp-content/uploads/2025/11/ebook-2.png",
    icon: PlayCircle,
  },
  {
    type: "Webinar",
    title:
      "Global Healthcare Compliance, Local Disclosure: Navigating Transparency Requirements Across APAC, Spain and Portugal",
    href: "https://drive.google.com/file/d/1sR6vAjm-F8O-DmHmPGVddq4ebrCkzPbI/view?usp=sharing",
    image:
      "https://eunomiapharmaservices.com/wp-content/uploads/2026/07/webinar.png",
    icon: PlayCircle,
  },
  {
    type: "Case study",
    title: "Materials Review, Shared Service and Streamlined Process",
    href: "/resources/documents/materials-review-shared-service-case-study.pdf",
    image:
      "https://eunomiapharmaservices.com/wp-content/uploads/2026/08/Case-study-cover-page-723x1024.png",
    icon: FileText,
  },
  {
    type: "Methodology",
    title: "Fair Market Value Methodology",
    href: "/resources/documents/fair-market-value-methodology.pdf",
    image:
      "https://eunomiapharmaservices.com/wp-content/uploads/2026/08/fairmarket-725x1024.png",
    icon: FileText,
  },
];

const articleImages = [
  "https://eunomiapharmaservices.com/wp-content/uploads/2026/07/How-Small-and-Mid-Sized-Pharma-Companies-Can-Build-an-Effective-Compliance-Risk-Assessment-Framework-Risk-Assesment-1_files-1-672x448.png",
  "https://eunomiapharmaservices.com/wp-content/uploads/2026/07/Top-Transparency-Reporting-Mistakes-Pharmaceutical-Companies-Should-Avoid-1536x864-1-672x448.png",
  "https://eunomiapharmaservices.com/wp-content/uploads/2026/06/PMCPAs-2026-Social-Media-Guidance-Compliance-Priorities-Companies-Should-Address-Now-672x448.jpeg",
  "/compliance-collaboration.png",
  "https://eunomiapharmaservices.com/wp-content/uploads/2026/04/AI-in-Healthcare-Compliance-Navigating-Opportunities-Risks-and-Regulatory-Landscapes-672x448.jpeg",
  "https://eunomiapharmaservices.com/wp-content/uploads/2026/04/Navigating-Country-Level-Accountability-in-Europe-A-Key-Pillar-of-Healthcare-Compliance-672x448.jpeg",
  "https://eunomiapharmaservices.com/wp-content/uploads/2026/04/WhatsApp-Image-2026-03-30-at-9.46.02-PM-672x448.jpeg",
  "https://eunomiapharmaservices.com/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-27-at-7.25.37-PM-672x448.jpeg",
  "https://eunomiapharmaservices.com/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-24-at-9.28.11-PM-672x448.jpeg",
  "https://eunomiapharmaservices.com/wp-content/uploads/2026/02/Compliance-Gap-Analysis-Reducing-Risk-Without-Slowing-Growth-672x448.jpg",
  "https://eunomiapharmaservices.com/wp-content/uploads/2026/02/Featured-Image.jpg-2-672x448.jpg",
  "https://eunomiapharmaservices.com/wp-content/uploads/2026/02/Transparency-Reporting-in-the-Pharmaceutical-Industry-Legal-Compliance-Versus-Ethical-Responsibility-672x448.jpg",
  "https://eunomiapharmaservices.com/wp-content/uploads/2026/02/Featured-Image.jpg-672x448.jpg",
  "https://eunomiapharmaservices.com/wp-content/uploads/2025/12/How-Gap-Analysis-Strengthens-Healthcare-Compliance-Internal-Audits-min-672x448.jpg",
  "https://eunomiapharmaservices.com/wp-content/uploads/2025/12/Featured-Image-min-672x448.jpg",
  "https://eunomiapharmaservices.com/wp-content/uploads/2025/10/Staying-Ahead-of-the-Curve-Audit-Readiness-Best-Practices-Across-European-Life-Sciences-Markets-672x448.jpeg",
  "https://eunomiapharmaservices.com/wp-content/uploads/2025/10/Top-10-Healthcare-Compliance-Challenges-in-Pharma-Industry-and-How-to-Solve-Them-672x448.jpg",
  "https://eunomiapharmaservices.com/wp-content/uploads/2025/10/What-Makes-Healthcare-Compliance-Training-Effective-1-672x448.jpg",
  "https://eunomiapharmaservices.com/wp-content/uploads/2025/09/How-to-Avoid-Common-Healthcare-Compliance-Mistakes-in-Pharmaceuticals-672x448.jpg",
  "https://eunomiapharmaservices.com/wp-content/uploads/2026/04/AI-in-Healthcare-Compliance-Navigating-Opportunities-Risks-and-Regulatory-Landscapes-672x448.jpeg",
  "https://eunomiapharmaservices.com/wp-content/uploads/2025/08/standard-quality-control-collage-concept-672x448.jpg",
  "https://eunomiapharmaservices.com/wp-content/uploads/2025/08/still-life-business-roles-with-various-mechanism-pieces-min-672x448.jpg",
  "https://eunomiapharmaservices.com/wp-content/uploads/2025/06/stackeholder-672x448.jpg",
  "https://eunomiapharmaservices.com/wp-content/uploads/2025/06/Risk-Assessment-672x448.jpg",
  "https://eunomiapharmaservices.com/wp-content/uploads/2025/05/diversity-blog-1-672x448.jpg",
  "https://eunomiapharmaservices.com/wp-content/uploads/2025/06/dataanalytics-blog-672x448.jpg",
  "https://eunomiapharmaservices.com/wp-content/uploads/2025/06/healthcare-blog-672x448.jpg",
  "https://eunomiapharmaservices.com/wp-content/uploads/2025/06/risk-blog.jpg",
  "https://eunomiapharmaservices.com/wp-content/uploads/2024/07/ensure-blog-1-672x448.jpg",
  "https://eunomiapharmaservices.com/wp-content/uploads/2024/07/aiblog-672x448.jpg",
];

const articles = [
  [
    "30 Jul 2026",
    "How Small and Mid-Sized Pharma Companies Can Build an Effective Compliance Risk Assessment Framework",
    "https://eunomiapharmaservices.com/pharma-compliance-risk-assessment-framework/",
  ],
  [
    "17 Jul 2026",
    "Top Transparency Reporting Mistakes Pharmaceutical Companies Should Avoid",
    "https://eunomiapharmaservices.com/top-transparency-reporting-mistakes-pharmaceutical-companies-should-avoid/",
  ],
  [
    "02 Jun 2026",
    "PMCPA’s 2026 Social Media Guidance: Compliance Priorities Companies Should Address Now",
    "https://eunomiapharmaservices.com/pmcpas-2026-social-media-guidance/",
  ],
  [
    "02 Jun 2026",
    "Right-Sized Compliance Support: Meeting the Needs of Both Emerging Biotech and Global Pharma",
    "https://eunomiapharmaservices.com/right-sized-compliance-support-for-biotech-and-global-pharma/",
  ],
  [
    "30 Apr 2026",
    "AI in Healthcare Compliance: Navigating Opportunities, Risks, and Regulatory Landscapes",
    "https://eunomiapharmaservices.com/ai-in-healthcare-compliance-navigating-opportunities-risks-regulatory-landscapes/",
  ],
  [
    "30 Apr 2026",
    "Navigating Country-Level Accountability in Europe: A Key Pillar of Healthcare Compliance",
    "https://eunomiapharmaservices.com/navigating-country-level-accountability-in-europe/",
  ],
  [
    "01 Apr 2026",
    "Scalable Compliance Models for Growing Pharma in the Age of AI",
    "https://eunomiapharmaservices.com/scalable-compliance-models-for-growing-pharma-in-the-age-of-ai/",
  ],
  [
    "30 Mar 2026",
    "Entering Phase III? Compliance Expectations Already Have",
    "https://eunomiapharmaservices.com/entering-phase-iii-compliance-expectations-already-have/",
  ],
  [
    "30 Mar 2026",
    "From Risk to Resilience: Why Third-Party Risk Management Is Pharma’s Biggest Competitive Advantage",
    "https://eunomiapharmaservices.com/from-risk-to-resilience-why-third-party-risk-management-is-pharmas-biggest-competitive-advantage/",
  ],
  [
    "27 Feb 2026",
    "Compliance Gap Analysis: Reducing Risk Without Slowing Growth",
    "https://eunomiapharmaservices.com/compliance-gap-analysis-reducing-risk-without-slowing-growth/",
  ],
  [
    "23 Feb 2026",
    "Sunshine Act in France: Understanding the Transparency in Healthcare System",
    "https://eunomiapharmaservices.com/sunshine-act-in-france-transparency-healthcare-system/",
  ],
  [
    "16 Feb 2026",
    "Transparency Reporting in the Pharmaceutical Industry: Legal Compliance Versus Ethical Responsibility",
    "https://eunomiapharmaservices.com/transparency-reporting-in-pharmaceutical-industry/",
  ],
  [
    "03 Feb 2026",
    "Fair Market Value in Healthcare Compliance: Turning Regulatory Expectation into an Operational Capability",
    "https://eunomiapharmaservices.com/fair-market-value-fmv-in-healthcare-compliance/",
  ],
  [
    "24 Dec 2025",
    "Beyond the Checklist: How Gap Analysis Strengthens Healthcare Compliance Internal Audits",
    "https://eunomiapharmaservices.com/healthcare-compliance-internal-audits/",
  ],
  [
    "10 Dec 2025",
    "Digitalisation in Pharma: Strengthening Healthcare Compliance Through Smart Systems & Integrated Governance",
    "https://eunomiapharmaservices.com/digitalisation-in-pharma-industry/",
  ],
  [
    "24 Oct 2025",
    "Staying Ahead of the Curve: Audit-Readiness Best Practices Across European Life Sciences Markets",
    "https://eunomiapharmaservices.com/audit-readiness-best-practices/",
  ],
  [
    "03 Oct 2025",
    "Top 10 Healthcare Compliance Challenges in Pharma Industry and How to Solve Them",
    "https://eunomiapharmaservices.com/healthcare-compliance-challenges-in-pharma-industry/",
  ],
  [
    "03 Oct 2025",
    "What Makes Healthcare Compliance Training Effective?",
    "https://eunomiapharmaservices.com/what-makes-healthcare-compliance-training-effective/",
  ],
  [
    "16 Sep 2025",
    "How to Avoid Common Healthcare Compliance Mistakes in Pharmaceuticals",
    "https://eunomiapharmaservices.com/how-to-avoid-common-healthcare-compliance-mistakes-in-pharmaceuticals/",
  ],
  [
    "04 Sep 2025",
    "AI in Healthcare Compliance: Navigating Opportunities, Risks, and Regulatory Landscapes",
    "https://eunomiapharmaservices.com/ai-in-healthcare-compliance/",
  ],
  [
    "26 Aug 2025",
    "Compliance Training: Beyond the Code",
    "https://eunomiapharmaservices.com/compliance-training-beyond-the-code/",
  ],
  [
    "11 Aug 2025",
    "A Definitive Guide to Crafting a High-Quality Policy for a Pharmaceutical Company",
    "https://eunomiapharmaservices.com/a-definitive-guide-to-crafting-a-high-quality-policy-for-a-pharmaceutical-company/",
  ],
  [
    "12 Jun 2025",
    "Stakeholder Engagement vs Risk: EFPIA & IFPMA Compliance",
    "https://eunomiapharmaservices.com/stakeholder-engagement-vs-risk-efpia-ifpma-compliance/",
  ],
  [
    "05 Jun 2025",
    "Risk Assessment in Healthcare and Its Importance",
    "https://eunomiapharmaservices.com/risk-assessment-in-healthcare-and-its-importance/",
  ],
  [
    "05 May 2025",
    "The Future of Diversity & Inclusion in Pharma Compliance: A European Perspective",
    "https://eunomiapharmaservices.com/the-future-of-diversity-inclusion-in-pharma-compliance/",
  ],
  [
    "03 Apr 2025",
    "Unleash the Power of Data Analytics for Healthcare Compliance",
    "https://eunomiapharmaservices.com/unleash-the-power-of-data-analytics-for-healthcare-compliance/",
  ],
  [
    "19 Mar 2025",
    "Importance of Bespoke Healthcare Compliance Training for Pharmaceutical Industry",
    "https://eunomiapharmaservices.com/importance-of-bespoke-healthcare-compliance-training-for-pharmaceutical-industry/",
  ],
  [
    "07 Mar 2025",
    "Managing Compliance Risks: Best Practices & Strategies",
    "https://eunomiapharmaservices.com/managing-compliance-risks-best-practices-strategies/",
  ],
  [
    "17 Apr 2024",
    "Ensure Audit Readiness in Pharma Compliance",
    "https://eunomiapharmaservices.com/ensure-audit-readiness-in-pharma-compliance/",
  ],
  [
    "09 Apr 2024",
    "Staying Ahead in Healthcare Compliance: Navigating AI Challenges with Ethical Governance",
    "https://eunomiapharmaservices.com/staying-ahead-in-healthcare-compliance-navigating-ai-challenges-with-ethical-governance/",
  ],
];

export default function Resources() {
  return (
    <main>
      <SiteHeader />
      <section className="inner-hero resource-hero">
        <p className="section-kicker">Resources</p>
        <h1>
          Practical insight for
          <br />
          <em>compliance in motion.</em>
        </h1>
        <p>
          Explore Eunomia’s articles, webinars, case studies and working
          resources — brought together in one place.
        </p>
        <div className="resource-jump">
          <a href="#featured">Featured Content</a>
          <a href="#articles">Articles</a>
        </div>
      </section>
      <ResourceSearch />
      <section className="resource-library section-pad" id="featured">
        <div className="resource-heading">
          <p className="section-kicker">Watch · read · use</p>
          <h2>Featured Content</h2>
        </div>
        <div className="featured-resource-grid">
          {featured.map(({ type, title, href, image, icon: Icon }) => (
            <a
              className="featured-resource-card"
              href={href}
              target="_blank"
              rel="noreferrer"
              key={title}
              data-resource-search={`${type} ${title}`}
            >
              <div className="featured-resource-image">
                <img src={image} alt={`${title} cover`} />
                <div className="resource-icon">
                  <Icon />
                </div>
              </div>
              <div className="featured-resource-copy">
                <span>{type}</span>
                <h3>{title}</h3>
                <div className="resource-card-link">
                  Open resource <ArrowUpRight />
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
      <section className="article-library section-pad" id="articles">
        <div className="resource-heading">
          <p className="section-kicker">Eunomia perspectives</p>
          <h2>Articles & insights</h2>
          <p>
            {articles.length} perspectives on operational compliance,
            transparency, governance and technology.
          </p>
        </div>
        <div className="article-grid">
          {articles.map(([date, title, href], i) => {
            const slug = href.split("/").filter(Boolean).at(-1);
            return (
              <a
                className="article-card"
                href={`/resources/articles/${slug}`}
                key={`${title}-${date}`}
                data-resource-search={`article ${date} ${title}`}
              >
                <div className="article-image">
                  <img
                    src={articleImages[i]}
                    alt={`${title} article illustration`}
                    loading="lazy"
                  />
                </div>
                <div>
                  <span className="article-number">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="article-date">{date}</span>
                </div>
                <h3>{title}</h3>
                <ArrowUpRight />
              </a>
            );
          })}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
