'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import { 
  Compass, 
  ShieldCheck, 
  MapPin, 
  Calendar, 
  FileText, 
  Building2, 
  Globe2, 
  Menu, 
  X,
  PhoneCall
} from 'lucide-react';

export default function Navbar() {
  const { language, toggleLanguage, t, isRtl } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: '/destinations', label: t.navDestinations, icon: MapPin },
    { href: '/reality-check', label: t.navRealityCheck, icon: ShieldCheck, badge: 'Live' },
    { href: '/local-weekends', label: t.navWeekends, icon: Calendar },
    { href: '/logistics/evisa-step-by-step', label: t.navEvisa, icon: FileText },
    { href: '/logistics/verified-agencies', label: t.navAgencies, icon: Building2 },
    { href: '/press-kit', label: t.navPressKit, icon: Compass },
  ];

  const isActive = (href: string) => {
    if (href === '/destinations') {
      return pathname.startsWith('/destinations');
    }
    return pathname === href;
  };

  return (
    <header className="sticky top-0 z-50 bg-[#090d16]/90 backdrop-blur-md border-b border-white/10 transition-all">
      {/* Top Advisory ticker bar */}
      <div className="bg-gradient-to-r from-amber-600/20 via-emerald-600/20 to-amber-600/20 text-xs py-1.5 px-4 text-center border-b border-white/5 flex items-center justify-center gap-3">
        <span className="inline-flex items-center gap-1.5 text-emerald-400 font-medium">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          {isRtl ? 'الممرات الساحلية مفتوحة ومؤمنة بالكامل' : 'Coastal Travel Corridors 100% Operational'}
        </span>
        <span className="text-white/40 hidden sm:inline">•</span>
        <span className="text-white/70 hidden sm:inline">
          {isRtl ? 'بوابة التأشيرة الإلكترونية evisa.gov.ly نشطة' : 'Official eVisa portal (evisa.gov.ly) active'}
        </span>
        <span className="text-white/40 hidden md:inline">•</span>
        <div className="hidden md:flex items-center gap-1 text-amber-300">
          <PhoneCall className="w-3 h-3" />
          <span>{isRtl ? 'طوارئ شرطة السياحة: 1515' : 'Tourism Police: 1515'}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
              <Compass className="w-6 h-6 text-slate-950 stroke-[2.2]" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-white group-hover:text-amber-400 transition-colors">
                {t.navBrand}
              </span>
              <span className="text-[11px] text-amber-200/60 font-medium -mt-1 tracking-wider uppercase">
                {t.navBrandSubtitle}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3.5 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${
                    active
                      ? 'text-amber-400 bg-amber-500/10'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      {link.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action Area: Language Switcher & CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={toggleLanguage}
              className="px-3.5 py-2 rounded-xl text-xs font-semibold tracking-wide border border-white/15 bg-white/5 hover:bg-white/10 hover:border-amber-400/50 text-white transition-all flex items-center gap-2 cursor-pointer"
              title="Toggle English / Arabic"
            >
              <Globe2 className="w-4 h-4 text-amber-400" />
              <span>{t.switchLang}</span>
            </button>

            <Link
              href="/logistics/evisa-step-by-step"
              className="px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 shadow-md shadow-amber-500/25 transition-all hover:scale-[1.02] cursor-pointer"
            >
              {isRtl ? 'تحقق من التأشيرة' : 'Check Visa'}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleLanguage}
              className="p-2 rounded-lg text-xs font-bold border border-white/15 bg-white/5 text-amber-400"
            >
              {language === 'en' ? 'عربي' : 'EN'}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-white/10 bg-[#090d16]/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-2 animate-in fade-in slide-in-from-top-2">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium ${
                  active
                    ? 'text-amber-400 bg-amber-500/10 border border-amber-500/20'
                    : 'text-slate-300 hover:bg-white/5'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-5 h-5 text-amber-400/80" />
                  <span>{link.label}</span>
                </div>
                {link.badge && (
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400">
                    {link.badge}
                  </span>
                )}
              </Link>
            );
          })}

          <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
            <Link
              href="/logistics/evisa-step-by-step"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 rounded-xl text-center text-sm font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-md"
            >
              {isRtl ? 'التحقق من أهلية التأشيرة الإلكترونية' : 'Check Visa Eligibility (eVisa)'}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
