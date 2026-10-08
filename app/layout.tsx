import type { Metadata } from 'next';
import { headers } from 'next/headers';
import './globals.css';
import { Analytics } from '@vercel/analytics/next';
import { defaultLocale, isLocale, locales } from '../data/i18n/locales';

export const metadata: Metadata = {
  metadataBase: new URL("https://www.eunomiapharmaservices.com"),
  title: 'Eunomia Pharma Services | Global Healthcare Compliance',
  description: "Global healthcare compliance powered by automation. Programme design, compliance operations, local legal representation and shared services.",
};

const structuredData = {"@context": "https://schema.org", "@graph": [{"@type": "Organization", "@id": "https://www.eunomiapharmaservices.com/#organization", "name": "Eunomia Pharma Services", "url": "https://www.eunomiapharmaservices.com/", "logo": "https://www.eunomiapharmaservices.com/eunomia-logo.webp", "telephone": "+447584567018", "email": "hello@eunomiapharmaservices.com", "address": {"@type": "PostalAddress", "streetAddress": "Rough Way, Heath House Road", "addressLocality": "Woking", "postalCode": "GU22 0QU", "addressCountry": "GB"}, "sameAs": ["https://uk.linkedin.com/company/eunomia-pharma-services", "https://clutch.co/profile/eunomia-pharma-services", "https://www.youtube.com/@Eunomiapharma"]}, {"@type": "WebSite", "@id": "https://www.eunomiapharmaservices.com/#website", "name": "Eunomia Pharma Services", "url": "https://www.eunomiapharmaservices.com/", "publisher": {"@id": "https://www.eunomiapharmaservices.com/#organization"}}]};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale?: string }>;
}>) {
  const routeParams = await params;
  const requestHeaders = await headers();
  const localeCandidate = requestHeaders.get("x-eps-locale") ?? routeParams.locale ?? "";
  const locale = isLocale(localeCandidate) ? localeCandidate : defaultLocale;

  return (
    <html lang={locale} dir={locales[locale].dir}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
