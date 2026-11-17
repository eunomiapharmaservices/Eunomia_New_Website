import { SiteDocument, siteMetadata } from '../../components/SiteDocument';

export const metadata = siteMetadata;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <SiteDocument locale="en">{children}</SiteDocument>;
}
