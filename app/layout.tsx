import type { Metadata } from 'next';
import './globals.css';
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
  title: 'Eunomia Pharma Services | Global Healthcare Compliance',
  description: "Global healthcare compliance powered by automation. Programme design, compliance operations, local legal representation and shared services.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}<Analytics /></body></html>;
}
