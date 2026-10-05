import type { Metadata, Viewport } from 'next';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Discover Libya | Ground Truth Tourism & Travel Intelligence Platform',
  description:
    'The official ground-truth intelligence hub and digital heritage guide for Libya. Disproving blanket Level 4 advisories with verifiable facts, UNESCO explorations, and domestic weekend trips.',
  keywords: [
    'Libya tourism',
    'Leptis Magna',
    'Sabratha',
    'Cyrene',
    'Libya eVisa',
    'evisa.gov.ly',
    'Libya travel safety',
    'Farwa Island',
    'Ghadames',
    'سياحة ليبيا',
    'لبدة الكبرى'
  ],
  authors: [{ name: 'Discover Libya Intelligence' }]
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth" suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-[#090d16] text-slate-100 selection:bg-amber-500 selection:text-slate-950">
        <LanguageProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
