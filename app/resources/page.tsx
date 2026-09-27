import { ArrowUpRight, BookOpen, FileText, PlayCircle } from "lucide-react";
import type { Metadata } from "next";
import { withSocial } from "../../lib/seo";
import { SiteHeader, SiteFooter } from "../../components/SiteChrome";
import { ResourceSearch } from "../../components/ResourceSearch";
export const metadata: Metadata = withSocial("/resources", {
  alternates: { canonical: "https://www.eunomiapharmaservices.com/resources" },
  title: "Pharmaceutical Compliance Resources & Insights | Eunomia",
  description:
    "Case studies, webinars, e-books and 29 articles on pharmaceutical compliance: transparency reporting, fair market value, audit readiness, AI governance and market entry.",
});

const featured = [
  {
    type: "E-book",
    title: "From Compliance Bottlenecks to Business Breakthroughs",
    href: "/resources#articles",
    image: "/eunomia-workflow.png",
    icon: BookOpen,
  },
  {
    type: "Webinar",
    title:
      "Faster Entry in European Markets — Compliance as the Competitive Edge",
    href: "/resources#articles",
    image: "/market-representation.png",
    icon: PlayCircle,
  },
  {
    type: "Webinar",
    title:
      "Global Healthcare Compliance, Local Disclosure: Navigating Transparency Requirements Across APAC, Spain and Portugal",
    href: "https://drive.google.com/file/d/1sR6vAjm-F8O-DmHmPGVddq4ebrCkzPbI/view?usp=sharing",
    image: "/compliance-collaboration.png",
    icon: PlayCircle,
  },
  {
    type: "Case study",
    title: "Materials Review, Shared Service and Streamlined Process",
    href: "/resources/materials-review-shared-service-case-study",
    image: "/home-compliance-team.jpeg",
    icon: FileText,
  },
  {
    type: "Methodology",
    title: "Fair Market Value Methodology",
    href: "/resources/fair-market-value-methodology",
    image: "/eunomia-workflow.png",
    icon: FileText,
  },
];

function articleImage(title: string) {
  if (/AI |technology|digital|automation/i.test(title)) return "/ai-governance.png";
  if (/market|country|europe|global/i.test(title)) return "/market-representation.png";
  if (/transparency|disclosure|data|fair market/i.test(title)) return "/eunomia-workflow.png";
  if (/training|stakeholder|team/i.test(title)) return "/resources-rashmi-team.png";
  return "/compliance-collaboration.png";
}


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
                <img src={image} alt="" loading="lazy" />
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
                    src={articleImage(title)}
                    alt=""
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
