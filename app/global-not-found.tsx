import type { Metadata } from 'next';
import { SiteDocument, siteMetadata } from '../components/SiteDocument';

// The site has two root layouts (app/(site) and app/[locale]), so unmatched URLs
// need their own document shell to keep site styles, analytics and metadata.
export const metadata: Metadata = { ...siteMetadata, title: "Page not found | Eunomia Pharma Services" };

export default function GlobalNotFound() {
  return (
    <SiteDocument locale="en">
      <main style={{ minHeight: "100vh", display: "grid", placeContent: "center", gap: "16px", padding: "24px", textAlign: "center" }}>
        <h1 style={{ margin: 0 }}>404: This page could not be found.</h1>
        <a href="/" style={{ textDecoration: "underline" }}>Go to the homepage</a>
      </main>
    </SiteDocument>
  );
}
