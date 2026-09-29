// Homepage content. Every statement here restates something already published
// on the site (service pages, case studies, team data, Clutch profile).
import type { FaqItem } from "../components/FaqSchema";

export const homeServices = [
  {
    title: "Healthcare Compliance Programme Design and Implementation",
    href: "/services/governance-assurance",
    outcome: "A practical programme with clear ownership, controls and an evidence trail that stands up to audit and inspection.",
    cta: "Explore programme design",
  },
  {
    title: "Automation of Compliance Operations",
    href: "/services/automation-of-compliance-operations",
    outcome: "Compliance workflows, EFPIA disclosure data and monitoring automated with SharePoint, Power BI and controlled AI.",
    cta: "Explore automation",
  },
  {
    title: "Local Legal Mandates and Representation",
    href: "/services/local-legal-mandates",
    outcome: "Named in-market compliance support and local-code interpretation, without in-country headcount.",
    cta: "Explore local representation",
  },
  {
    title: "Shared Services / GBS / GCC",
    href: "/services/shared-services",
    outcome: "A named compliance function for materials review, HCP fair market value, EFPIA disclosure and daily operations.",
    cta: "Explore shared services",
  },
];

export const homeCaseStudies = [
  {
    href: "/resources/materials-review-shared-service-case-study",
    label: "Shared services",
    title: "Materials review for a UK pharma company expanding across Europe",
    result: "Review turnaround cut from five days to two, and review cycles from four to two.",
  },
  {
    href: "/resources/fair-market-value-methodology",
    label: "HCP engagement",
    title: "A defensible fair market value methodology across five markets",
    result: "Rate cards for six stakeholder categories in the UK, Germany, France, Italy and Spain, each traceable to its source data.",
  },
];

export const homeIndustries = [
  {
    title: "Emerging biotech",
    body: "Approaching Phase III, launch and first commercial activity, with foundational controls rather than heavy systems.",
  },
  {
    title: "Small and mid-sized pharma",
    body: "Lean compliance teams that need extra capacity, specialist review and processes that scale.",
  },
  {
    title: "Global pharmaceutical companies",
    body: "Integrated governance, centralised processes and shared-service or GBS/GCC support across markets.",
  },
  {
    title: "Companies entering new markets",
    body: "Local representation, code interpretation and third-party oversight for market entry in Europe and beyond.",
  },
];

export const homeLocations = [
  { href: "/markets/germany", label: "Germany" },
  { href: "/markets/france", label: "France" },
  { href: "/markets/portugal", label: "Portugal" },
];

export const homeFaqs: FaqItem[] = [
  {
    question: "What does Eunomia Pharma Services do?",
    answer:
      "Eunomia is a boutique healthcare compliance consultancy for pharmaceutical and biotech companies. We design commercial compliance frameworks and then operationalise them, through four services: programme design and implementation, automation of compliance operations, local legal mandates and representation, and shared services (GBS/GCC).",
  },
  {
    question: "Who do you work with?",
    answer:
      "Pharmaceutical and biotech companies, from emerging biotechs preparing for launch to global pharma groups. We have worked with more than 20 companies.",
  },
  {
    question: "Which countries do you cover?",
    answer:
      "We are registered in the UK and cover 30 countries through a network of named compliance partners in the UK, Germany, France, Spain, Portugal, Italy, Austria, Poland, the United States and Canada, MENA and APAC.",
  },
  {
    question: "Can Eunomia act as our compliance function?",
    answer:
      "Yes. Through our shared services model, a named team can run compliance operations to your SOPs, systems and timelines, from materials review to HCP fair market value and EFPIA disclosure.",
  },
  {
    question: "How can we work with you?",
    answer:
      "The commercial model is your choice: advisory support on defined questions, a fixed-scope project, a centralised function run consistently across your markets, or a full shared service.",
  },
  {
    question: "How do you use technology and AI?",
    answer:
      "We use automation, including SharePoint, Power BI and controlled AI, to strengthen consistency, visibility and evidence. It supports the experienced judgement of our compliance specialists rather than replacing it.",
  },
  {
    question: "How do we get started?",
    answer:
      "Tell us about your company, your markets and the compliance question on your desk. There is no obligation and no pressure: we will listen and tell you how we see it.",
  },
];
