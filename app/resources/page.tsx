import { practicalResources } from "../../data/practical-resources";
import { PageFaqs } from "../../components/PageFaqs";
import { resourcesFaqs } from "../../data/page-faqs";
import { SiteImage } from "../../components/SiteImage";
import { ArrowUpRight, BookOpen, FileText, PlayCircle } from "lucide-react";
import type { Metadata } from "next";
import { withSocial } from "../../lib/seo";
import { SiteHeader, SiteFooter } from "../../components/SiteChrome";
import { ResourceSearch } from "../../components/ResourceSearch";
import resourceArticles from "../../data/resource-articles.json";
import { populatedCategories } from "../../data/article-categories";
export const metadata: Metadata = withSocial("/resources", {
  alternates: { canonical: "https://www.eunomiapharmaservices.com/resources" },
  title: "Pharmaceutical Compliance Resources & Insights | Eunomia",
  description:
    "Case studies, webinars, e-books and 36 articles on pharmaceutical compliance: transparency reporting, GDPR, fair market value, audit readiness, AI governance and market entry.",
});

const featured = [
  ...practicalResources.map(resource => ({ type: "Guide + template", title: resource.title, href: `/resources/${resource.slug}`, image: "/eunomia-workflow.png", icon: FileText })),
  { type: "Worksheet", title: "HCP FMV Assessment Guide and Worksheet", href: "/resources/hcp-fmv-assessment", image: "/eunomia-workflow.png", icon: FileText },
  {
    type: "Checklist",
    title: "Pharma Compliance Readiness Checklist",
    href: "/resources/checklists/pharma-compliance-readiness-checklist",
    image: "/compliance-collaboration.png",
    icon: FileText,
  },
  {
    type: "Checklist",
    title: "EFPIA Code Self-Assessment Checklist",
    href: "/resources/checklists/efpia-code-self-assessment-checklist",
    image: "/eunomia-workflow.png",
    icon: FileText,
  },
  {
    type: "Guide",
    title: "UK & EU Pharma Compliance Guide 2026",
    href: "/resources/checklists/uk-eu-pharma-compliance-guide-2026",
    image: "/home-compliance-team.jpeg",
    icon: BookOpen,
  },
  {
    type: "Template",
    title: "EFPIA Disclosure Methodology Note Template",
    href: "/resources/checklists/efpia-methodology-note-template",
    image: "/eunomia-workflow.png",
    icon: FileText,
  },
  {
    type: "Reference",
    title: "Transparency Disclosure Deadlines by Country",
    href: "/resources/disclosure-deadlines",
    image: "/compliance-collaboration.png",
    icon: BookOpen,
  },
  {
    type: "Reference",
    title: "PMCPA Case Library",
    href: "/resources/pmcpa-cases",
    image: "/home-compliance-team.jpeg",
    icon: BookOpen,
  },
  {
    type: "Reference",
    title: "Pharmaceutical Compliance Glossary",
    href: "/resources/glossary",
    image: "/eunomia-workflow.png",
    icon: BookOpen,
  },
  {
    type: "Case studies",
    title: "Pharma Compliance Case Studies Pack",
    href: "/resources/checklists/pharma-compliance-case-studies-pack",
    image: "/compliance-collaboration.png",
    icon: FileText,
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


const articles = [...resourceArticles].sort((a, b) => b.date.localeCompare(a.date));
const articleDate = new Intl.DateTimeFormat("en-GB", {
  day: "2-digit", month: "short", year: "numeric", timeZone: "UTC",
});

export default function Resources() {
  return (
    <main>
      <SiteHeader />
      <section className="inner-hero resource-hero">
        <div className="resource-hero-media"><SiteImage src="/resources-rashmi-team.png" alt="" fill loading="eager" fetchPriority="high" sizes="(max-width: 900px) 100vw, 44vw" /></div>
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
              target={href.startsWith("/") ? undefined : "_blank"}
              rel="noreferrer"
              key={title}
              data-resource-search={`${type} ${title}`}
            >
              <div className="featured-resource-image">
                <SiteImage src={image} fill sizes="(max-width: 650px) 100vw, 33vw" alt="" loading="lazy" fetchPriority="low" />
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
        <nav className="category-chips" aria-label="Browse articles by category">
          {populatedCategories.map((c) => (
            <a key={c.slug} href={`/resources/category/${c.slug}`}>{c.name}</a>
          ))}
        </nav>
        <div className="article-grid">
          {articles.map(({ date: publishedDate, title, slug }, i) => {
            const date = articleDate.format(new Date(publishedDate));
            return (
              <a
                className="article-card"
                href={`/resources/articles/${slug}`}
                key={`${title}-${date}`}
                data-resource-search={`article ${date} ${title}`}
              >
                <div className="article-image">
                  <SiteImage
                    src={articleImage(title)}
                    fill sizes="(max-width: 650px) 120px, 180px"
                    alt=""
                    loading="lazy" fetchPriority="low"
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
      <PageFaqs faqs={resourcesFaqs} title="About our resources" />
      <SiteFooter />
    </main>
  );
}
