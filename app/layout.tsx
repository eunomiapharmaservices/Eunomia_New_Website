import type { Metadata } from 'next';
import './globals.css';
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
  metadataBase: new URL("https://www.eunomiapharmaservices.com"),
  title: 'Eunomia Pharma Services | Global Healthcare Compliance',
  description: "Global healthcare compliance powered by automation. Programme design, compliance operations, local legal representation and shared services.",
};

const structuredData = {"@context": "https://schema.org", "@graph": [{"@type": "Organization", "@id": "https://www.eunomiapharmaservices.com/#organization", "name": "Eunomia Pharma Services", "url": "https://www.eunomiapharmaservices.com/", "logo": "https://www.eunomiapharmaservices.com/eunomia-logo.webp"}, {"@type": "WebSite", "@id": "https://www.eunomiapharmaservices.com/#website", "name": "Eunomia Pharma Services", "url": "https://www.eunomiapharmaservices.com/", "publisher": {"@id": "https://www.eunomiapharmaservices.com/#organization"}}]};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />{children}<Analytics /></body></html>;
}
