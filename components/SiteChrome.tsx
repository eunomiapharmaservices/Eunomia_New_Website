export function PrimaryNav() {
  return (
    <nav aria-label="Primary navigation">
      <a href="/">Home</a>
      <details className="services-menu">
        <summary>Services</summary>
        <div className="services-dropdown">
          <a href="/services"><b>Services overview</b><small>Explore every service</small></a>
          <a href="/services/governance-assurance"><b>Healthcare Compliance Programme Design and Implementation</b><small>Frameworks, controls, audit readiness and implementation</small></a>
          <a href="/services/automation-of-compliance-operations"><b>Automation of Compliance Operations</b><small>SharePoint, Power BI and AI automation</small></a>
          <a href="/services/local-legal-mandates"><b>Local Legal Mandates and Representation</b><small>In-market presence and local-code support</small></a>
          <a href="/services/shared-services"><b>Shared Services / GBS / GCC</b><small>A named compliance function, shaped around the work</small></a>
          <a href="/services#approach"><b>How We Deliver</b><small>Advice, projects, centralised functions and shared services</small></a>
        </div>
      </details>
      <a href="/team">Team</a>
      <a href="/resources">Resources</a>
      <a href="/contact">Contact</a>
    </nav>
  );
}

export function SiteHeader() {
  return (
    <header className="site-header inner-header">
      <a className="wordmark" href="/">
        <img src="/eunomia-logo.webp" alt="Eunomia Pharma Services" />
      </a>
      <PrimaryNav />
    </header>
  );
}
export function SiteFooter() {
  return (
    <footer>
      <a className="wordmark footer-logo" href="/">
        <img src="/eunomia-logo.webp" alt="Eunomia Pharma Services" />
      </a>
      <div className="footer-details">
        <span>
          Eunomia Pharma Services is a trading name of Mivigilance Limited,
          registered in England and Wales. Company number 12912269.
        </span>
        <span>
          Registered office: Rough Way, Heath House Road, Woking, GU22 0QU
        </span>
        <span>+44 7584 567018</span>
        <a href="/privacy">Privacy &amp; cookies</a>
        <span>© 2026 Eunomia Pharma Services</span>
      </div>
    </footer>
  );
}
