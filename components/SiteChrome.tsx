import { SiteImage } from "./SiteImage";
import { LanguageSwitcher } from "./LanguageSwitcher";

const labels = {
  en: { home: "Home", services: "Services", team: "Team", resources: "Resources", contact: "Contact" },
  es: { home: "Inicio", services: "Servicios", team: "Equipo", resources: "Recursos", contact: "Contacto" },
} as const;

export function PrimaryNav({ locale = "en" }: { locale?: "en" | "es" }) {
  const copy = labels[locale];
  return (
    <nav aria-label={locale === "es" ? "Navegación principal" : "Primary navigation"}>
      <a href={locale === "es" ? "/es" : "/"}>{copy.home}</a>
      <details className="services-menu">
        <summary>{copy.services}</summary>
        <div className="services-dropdown">
          <a href="/services"><b>{locale === "es" ? "Resumen de servicios" : "Services overview"}</b><small>{locale === "es" ? "Descubra todos nuestros servicios" : "Explore every service"}</small></a>
          <a href="/services/governance-assurance"><b>Healthcare Compliance Programme Design and Implementation</b><small>Frameworks, controls, audit readiness and implementation</small></a>
          <a href="/services/automation-of-compliance-operations"><b>Automation of Compliance Operations</b><small>SharePoint, Power BI and AI automation</small></a>
          <a href="/services/local-legal-mandates"><b>Local Legal Mandates and Representation</b><small>In-market presence and local-code support</small></a>
          <a href="/services/shared-services"><b>Shared Services / GBS / GCC</b><small>A named compliance function, shaped around the work</small></a>
          <a href="/services#approach"><b>How We Deliver</b><small>Advice, projects, centralised functions and shared services</small></a>
        </div>
      </details>
      <a href="/team">{copy.team}</a>
      <a href="/resources">{copy.resources}</a>
      <a href="/contact">{copy.contact}</a>
      <LanguageSwitcher locale={locale} />
    </nav>
  );
}

export function SiteHeader({ locale = "en" }: { locale?: "en" | "es" }) {
  return (
    <header className="site-header inner-header">
      <a className="wordmark" href={locale === "es" ? "/es" : "/"}>
        <SiteImage src="/eunomia-logo.webp" sizes="(max-width: 650px) 183px, (max-width: 1050px) 230px, 260px" loading="eager" alt="Eunomia Pharma Services" />
      </a>
      <PrimaryNav locale={locale} />
    </header>
  );
}
export function SiteFooter({ locale = "en" }: { locale?: "en" | "es" }) {
  return (
    <footer>
      <a className="wordmark footer-logo" href={locale === "es" ? "/es" : "/"}>
        <SiteImage src="/eunomia-logo.webp" sizes="220px" alt="Eunomia Pharma Services" />
      </a>
      <div className="footer-details">
        <span>
          {locale === "es"
            ? "Eunomia Pharma Services es el nombre comercial de Mivigilance Limited, registrada en Inglaterra y Gales. Número de sociedad 12912269."
            : "Eunomia Pharma Services is a trading name of Mivigilance Limited, registered in England and Wales. Company number 12912269."}
        </span>
        <span>
          {locale === "es"
            ? "Domicilio social: Rough Way, Heath House Road, Woking, GU22 0QU"
            : "Registered office: Rough Way, Heath House Road, Woking, GU22 0QU"}
        </span>
        <span>+44 7584 567018</span>
        <a href="/team">{locale === "es" ? "Nuestro equipo" : "Our team"}</a>
        <a href="/privacy">{locale === "es" ? "Privacidad y cookies" : "Privacy & cookies"}</a>
        <span>© 2026 Eunomia Pharma Services</span>
      </div>
    </footer>
  );
}
