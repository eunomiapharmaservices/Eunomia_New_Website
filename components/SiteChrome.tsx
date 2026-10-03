import { SiteImage } from "./SiteImage";
import { LanguageSwitcher } from "./LanguageSwitcher";
import type { Locale } from "../data/i18n/locales";
import chromeDraft from "../data/i18n/site-chrome.draft.json";

type ChromeCopy = Record<string, string>;
function copyFor(locale: Locale): ChromeCopy {
  return chromeDraft[locale] as ChromeCopy;
}

export function PrimaryNav({ locale = "en" }: { locale?: Locale }) {
  const copy = copyFor(locale);
  const localPath = (path: string) => locale === "en" ? path : `/${locale}${path}`;
  const servicesHref = localPath("/services");
  return (
    <nav aria-label={locale === "en" ? "Primary navigation" : copy.services}>
      <a href={locale === "en" ? "/" : `/${locale}`}>{copy.home}</a>
      <details className="services-menu">
        <summary>{copy.services}</summary>
        <div className="services-dropdown">
          <a href={servicesHref}><b>{copy.servicesOverview}</b><small>{copy.exploreEveryService}</small></a>
          <a href={localPath("/services/governance-assurance")}><b>{copy.governanceService}</b><small>{copy.governanceSummary}</small></a>
          <a href={localPath("/services/automation-of-compliance-operations")}><b>{copy.automationService}</b><small>{copy.automationSummary}</small></a>
          <a href={localPath("/services/local-legal-mandates")}><b>{copy.localMandatesService}</b><small>{copy.localMandatesSummary}</small></a>
          <a href={localPath("/services/shared-services")}><b>{copy.sharedServices}</b><small>{copy.sharedServicesSummary}</small></a>
          <a href="/services#approach"><b>{copy.howWeDeliver}</b><small>{copy.deliverySummary}</small></a>
        </div>
      </details>
      <a href="/team">{copy.team}</a>
      <a href="/resources">{copy.resources}</a>
      <a href="/contact">{copy.contact}</a>
      <LanguageSwitcher locale={locale} />
    </nav>
  );
}

export function SiteHeader({ locale = "en" }: { locale?: Locale }) {
  return (
    <header className="site-header inner-header">
      <a className="wordmark" href={locale === "en" ? "/" : `/${locale}`}>
        <SiteImage src="/eunomia-logo.webp" sizes="(max-width: 650px) 183px, (max-width: 1050px) 230px, 260px" loading="eager" alt="Eunomia Pharma Services" />
      </a>
      <PrimaryNav locale={locale} />
    </header>
  );
}
export function SiteFooter({ locale = "en" }: { locale?: Locale }) {
  const copy = copyFor(locale);
  return (
    <footer>
      <a className="wordmark footer-logo" href={locale === "en" ? "/" : `/${locale}`}>
        <SiteImage src="/eunomia-logo.webp" sizes="220px" alt="Eunomia Pharma Services" />
      </a>
      <div className="footer-details">
        <span>{copy.tradingNameNotice}</span>
        <span>{copy.registeredOffice}</span>
        <span>+44 7584 567018</span>
        <a href="/team">{copy.ourTeam}</a>
        <a href="/privacy">{copy.privacyCookies}</a>
        <span>© 2026 Eunomia Pharma Services</span>
      </div>
    </footer>
  );
}
