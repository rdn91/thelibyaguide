import type { Metadata, Viewport } from 'next';
import { IBM_Plex_Sans_Arabic, Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Providers from '@/components/layout/Providers';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', display: 'swap' });
const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-jakarta', display: 'swap' });
const plexArabic = IBM_Plex_Sans_Arabic({
  subsets: ['arabic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-plex-arabic',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://thelibyaguide.com'),
  title: {
    default: 'The Libya Guide — Leptis Magna, Cyrene, the Sahara & how to visit',
    template: '%s · The Libya Guide',
  },
  description:
    'An editorial guide to Libya: 30 flagship sights from Leptis Magna to the Acacus, the escorted corridor model, e-Visa logistics, and an honest reading of Western travel advisories.',
  openGraph: {
    type: 'website',
    siteName: 'The Libya Guide',
    images: ['/images/sights/leptis-magna.jpg'],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#fafaf7',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" className={`${playfair.variable} ${jakarta.variable} ${plexArabic.variable}`}>
      <body className="flex min-h-dvh flex-col">
        <Providers>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-sea focus:px-4 focus:py-2 focus:text-inverse"
          >
            Skip to content
          </a>
          <Header />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
