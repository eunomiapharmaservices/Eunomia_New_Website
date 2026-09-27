import type { Metadata } from 'next';
import './globals.css';
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
  title: 'Eunomia Pharma Services | Healthcare compliance, globally',
  description: 'Turnkey healthcare compliance services for pharmaceutical and biotech companies—from programme design and implementation to SharePoint, Power BI and AI automation, local representation and shared services.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}<Analytics /></body></html>;
}
