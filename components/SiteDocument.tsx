import type { Metadata } from 'next';
import '../app/globals.css';
import "../app/(site)/markets/markets.css";
import { Analytics } from '@vercel/analytics/next';
import { htmlLang, locales, type Locale } from '../data/i18n/locales';

// Shared <html> shell for the English (app/(site)) and translated (app/[locale])
// root layouts. Language comes from the route, never from request headers, so
// pages can be prerendered and served from the CDN.

export const siteMetadata: Metadata = {
  metadataBase: new URL("https://www.eunomiapharmaservices.com"),
  title: 'Eunomia Pharma Services | Global Healthcare Compliance',
  description: "Global healthcare compliance powered by automation. Programme design, compliance operations, local legal representation and shared services.",
};

const gtmId = "GTM-TVTZ7J37";

const structuredData = {"@context": "https://schema.org", "@graph": [{"@type": "Organization", "@id": "https://www.eunomiapharmaservices.com/#organization", "name": "Eunomia Pharma Services", "url": "https://www.eunomiapharmaservices.com/", "logo": "https://www.eunomiapharmaservices.com/eunomia-logo.webp", "telephone": "+447584567018", "email": "hello@eunomiapharmaservices.com", "address": {"@type": "PostalAddress", "streetAddress": "Rough Way, Heath House Road", "addressLocality": "Woking", "postalCode": "GU22 0QU", "addressCountry": "GB"}, "sameAs": ["https://uk.linkedin.com/company/eunomia-pharma-services", "https://clutch.co/profile/eunomia-pharma-services", "https://www.youtube.com/@Eunomiapharma"]}, {"@type": "WebSite", "@id": "https://www.eunomiapharmaservices.com/#website", "name": "Eunomia Pharma Services", "url": "https://www.eunomiapharmaservices.com/", "publisher": {"@id": "https://www.eunomiapharmaservices.com/#organization"}}]};

export function SiteDocument({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  return (
    <html lang={htmlLang(locale)} dir={locales[locale].dir}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];window.dataLayer.push({'gtm.start':new Date().getTime(),event:'gtm.js'});` }} />
        <script async src={`https://www.googletagmanager.com/gtm.js?id=${gtmId}`} />
        <script async src="https://analytics.ahrefs.com/analytics.js" data-key="2NrGOTGsxxnH8/C1CfxBVg" />
      </head>
      <body>
        <noscript>
          <iframe src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`} height="0" width="0" style={{ display: "none", visibility: "hidden" }} />
        </noscript>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
