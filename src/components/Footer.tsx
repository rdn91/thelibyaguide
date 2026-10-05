'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { Compass, ShieldCheck, ExternalLink, PhoneCall, HeartHandshake } from 'lucide-react';

export default function Footer() {
  const { t, isRtl } = useLanguage();

  return (
    <footer className="bg-slate-950 border-t border-white/10 text-slate-400 text-sm mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Brand & Mission */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center text-slate-950">
                <Compass className="w-6 h-6 stroke-[2.2]" />
              </div>
              <div>
                <span className="text-lg font-bold text-white block">{t.navBrand}</span>
                <span className="text-xs text-amber-300/80 block">{t.navBrandSubtitle}</span>
              </div>
            </div>
            <p className="text-xs leading-relaxed text-slate-400">
              {t.footerDesc}
            </p>
            <div className="flex items-center gap-2 pt-2 text-xs text-emerald-400 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>{isRtl ? 'بيانات أمان مستقلة ومحدثة دورياً' : 'Empirically audited ground truth'}</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              {t.quickLinks}
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/destinations" className="hover:text-amber-400 transition-colors">
                  {t.navDestinations}
                </Link>
              </li>
              <li>
                <Link href="/reality-check" className="hover:text-amber-400 transition-colors">
                  {t.navRealityCheck}
                </Link>
              </li>
              <li>
                <Link href="/local-weekends" className="hover:text-amber-400 transition-colors">
                  {t.navWeekends}
                </Link>
              </li>
              <li>
                <Link href="/logistics/evisa-step-by-step" className="hover:text-amber-400 transition-colors">
                  {t.navEvisa}
                </Link>
              </li>
              <li>
                <Link href="/logistics/verified-agencies" className="hover:text-amber-400 transition-colors">
                  {t.navAgencies}
                </Link>
              </li>
              <li>
                <Link href="/press-kit" className="hover:text-amber-400 transition-colors">
                  {t.navPressKit}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Official Portals */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              {t.officialPortals}
            </h4>
            <ul className="space-y-3 text-xs">
              <li>
                <a
                  href="https://evisa.gov.ly"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-medium transition-colors"
                >
                  <span>{isRtl ? 'بوابة التأشيرة الإلكترونية الرسمية' : 'Official Libyan eVisa Portal'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <span className="block text-[11px] text-slate-500 mt-0.5">evisa.gov.ly</span>
              </li>
              <li>
                <span className="text-slate-300 block font-medium">
                  {isRtl ? 'وزارة السياحة والصناعات التقليدية' : 'Ministry of Tourism & Handicrafts'}
                </span>
                <span className="block text-[11px] text-slate-500 mt-0.5">tourism.gov.ly</span>
              </li>
              <li>
                <span className="text-slate-300 block font-medium">
                  {isRtl ? 'مصلحة الطيران المدني الليبي' : 'Libyan Civil Aviation Authority'}
                </span>
                <span className="block text-[11px] text-slate-500 mt-0.5">caa.gov.ly</span>
              </li>
              <li>
                <span className="text-slate-300 block font-medium">
                  {isRtl ? 'مصلحة الآثار الليبية' : 'Department of Antiquities of Libya'}
                </span>
                <span className="block text-[11px] text-slate-500 mt-0.5">doa.gov.ly</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Emergency Contacts & Hotlines */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              {t.emergencyHelpline}
            </h4>
            <div className="space-y-3 text-xs">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <div className="flex items-center gap-2 text-amber-400 font-semibold">
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>{isRtl ? 'شرطة السياحة وحماية الآثار' : 'Tourist & Antiquities Police'}</span>
                </div>
                <div className="text-slate-200 font-mono text-sm">1515</div>
                <div className="text-[11px] text-slate-500">{isRtl ? 'طوارئ مجانية 24/7' : 'Toll-free 24/7'}</div>
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <div className="flex items-center gap-2 text-rose-400 font-semibold">
                  <HeartHandshake className="w-3.5 h-3.5" />
                  <span>{isRtl ? 'طوارئ الهلال الأحمر والإسعاف' : 'Red Crescent & Ambulance'}</span>
                </div>
                <div className="text-slate-200 font-mono text-sm">1415 / 191</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>{t.copyright}</p>
          <div className="flex items-center gap-6">
            <span>{isRtl ? 'مبادرة رقمية مستقلة' : 'Independent Tourism Intelligence Initiative'}</span>
            <span>•</span>
            <Link href="/press-kit" className="hover:text-slate-300">
              {t.navPressKit}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
