import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';
import { GROUND_TRUTH_DATA } from '@lucky-gazab/shared-types';

export const metadata: Metadata = {
  title: `${GROUND_TRUTH_DATA.businessName} — Branded Cosmetics & Salon Professional Products Indore`,
  description: `Buy genuine retail & wholesale branded cosmetics, salon professional hair care, facial kits, and beauty accessories at ${GROUND_TRUTH_DATA.businessName}, Indore. Phone: ${GROUND_TRUTH_DATA.phoneLandline}, Mobile: ${GROUND_TRUTH_DATA.mobile}.`,
  keywords: [
    'Cosmetics Store Indore',
    'Salon Professional Products Indore',
    'Lucky GAZAB HI GAZAB',
    'Hair Care Indore',
    'Beauty Supply Store Raunak Tower',
    'Wholesale Cosmetics MP'
  ],
  authors: [{ name: GROUND_TRUTH_DATA.businessName }],
  openGraph: {
    title: GROUND_TRUTH_DATA.businessName,
    description: 'Retail & Wholesale Branded Cosmetics, Salon Professional Products, Beauty Accessories in Indore.',
    url: 'https://luckygazab.com',
    siteName: GROUND_TRUTH_DATA.businessName,
    locale: 'en_IN',
    type: 'website',
  },
};

import { AuthProvider } from '@/context/AuthContext';

import { BrandLoader } from '@/components/BrandLoader';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <JsonLd />
      </head>
      <body className="min-h-screen flex flex-col justify-between bg-white text-neutral-900 antialiased">
        <BrandLoader />
        <AuthProvider>
          <div>
            <Navbar />
            <main>{children}</main>
          </div>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
