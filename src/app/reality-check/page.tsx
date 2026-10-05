'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { advisoryItems, corridorZones } from '@/data/advisories';
import { liveStatusLogs, commercialAirlines } from '@/data/transitStatus';
import { 
  ShieldCheck, 
  AlertTriangle, 
  CheckCircle2, 
  Plane, 
  Clock, 
  ArrowRight, 
  ArrowLeft,
  Info,
  MapPin
} from 'lucide-react';

export default function RealityCheckPage() {
  const { language, t, isRtl } = useLanguage();
  const [activeZone, setActiveZone] = useState<number>(1);
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Header Banner */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold">
          <ShieldCheck className="w-4 h-4" />
          <span>{language === 'ar' ? 'تقرير ومؤشر الأمان الميداني' : 'Module A: Ground Truth Reality Index'}</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          {t.realityCheckTitle}
        </h1>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          {t.realityCheckSubtitle}
        </p>
      </div>

      {/* SECTION 1: LIVE TRANSIT & BORDER STATUS DASHBOARD */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2.5">
              <Plane className="w-5 h-5 text-sky-400" />
              <span>{t.liveTransitTitle}</span>
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              {t.liveTransitSubtitle}
            </p>
          </div>
          <div className="text-xs text-emerald-400 flex items-center gap-2 bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20 self-start sm:self-auto">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>{language === 'ar' ? 'جميع المنافذ تعمل بكفاءة' : 'All Commercial Gateways Active'}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {liveStatusLogs.map((log) => (
            <div
              key={log.id}
              className="p-5 rounded-2xl bg-slate-900/80 border border-white/10 flex flex-col justify-between space-y-4 shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-white/5 text-slate-300">
                    {log.type.replace('_', ' ')}
                  </span>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    {log.status}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mt-3">
                  {language === 'ar' ? log.entryPointNameAr : log.entryPointNameEn}
                </h3>

                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  {language === 'ar' ? log.notesAr : log.notesEn}
                </p>

                {log.flightsActiveToday && log.flightsActiveToday > 0 && (
                  <div className="mt-3 text-xs text-amber-300 bg-amber-500/10 px-2.5 py-1 rounded-lg border border-amber-500/20 inline-block">
                    {log.flightsActiveToday} {language === 'ar' ? 'رحلة دولية مجدولة اليوم' : 'scheduled commercial flights today'}
                  </div>
                )}
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center gap-1.5 text-[11px] text-slate-500">
                <Clock className="w-3 h-3" />
                <span>{log.updatedAt}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Commercial Airlines ticker */}
        <div className="p-4 rounded-2xl bg-slate-950/60 border border-white/10">
          <div className="text-xs font-bold text-slate-300 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-sky-400"></span>
            <span>{language === 'ar' ? 'شركات الطيران التجارية العاملة:' : 'Active Scheduled Commercial Carriers:'}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {commercialAirlines.map((airline, idx) => (
              <div
                key={idx}
                className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/5 text-xs text-slate-300 flex items-center gap-2"
              >
                <span className="font-semibold text-white">{airline.name}</span>
                <span className="text-[10px] text-slate-500">({airline.code})</span>
                <span className="text-[10px] text-amber-400/80">→ {airline.destinations.slice(0, 2).join(', ')}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: ADVISORY CONTRAST MATRIX */}
      <section className="space-y-6">
        <div className="border-b border-white/10 pb-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2.5">
            <AlertTriangle className="w-5 h-5 text-amber-400" />
            <span>{t.advisoryMatrixTitle}</span>
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            {language === 'ar'
              ? 'مقارنة مباشرة بين نص التحذيرات الدبلوماسية الغربية والواقع العملي المثبت على الأرض.'
              : 'Direct side-by-side contrast of western diplomatic warnings versus verified field reality.'}
          </p>
        </div>

        <div className="space-y-4">
          {advisoryItems.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-slate-900/90 border border-white/10 overflow-hidden shadow-xl"
            >
              <div className="p-4 bg-slate-950/60 border-b border-white/10 flex items-center justify-between flex-wrap gap-2">
                <span className="text-xs font-bold text-slate-400">
                  {language === 'ar' ? 'المصدر الغربي:' : 'Source:'} {item.sourceCountry}
                </span>
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  {language === 'ar' ? 'تم تفنيد الادعاء بالبيانات' : 'Audited & Contextualized'}
                </span>
              </div>

              <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Left: The Claim */}
                <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 space-y-2">
                  <div className="text-[11px] font-bold text-rose-400 uppercase tracking-wider flex items-center gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>{t.claimLabel}</span>
                  </div>
                  <blockquote className="text-xs sm:text-sm text-rose-200 italic leading-relaxed">
                    &ldquo;{language === 'ar' ? item.foreignAdvisoryAr : item.foreignAdvisoryEn}&rdquo;
                  </blockquote>
                </div>

                {/* Right: The Ground Reality */}
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 space-y-2">
                  <div className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{t.realityLabel}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed font-normal">
                    {language === 'ar' ? item.groundRealityAr : item.groundRealityEn}
                  </p>
                </div>
              </div>

              {/* Bottom Mitigation Rule */}
              <div className="px-6 py-3 bg-white/5 border-t border-white/5 text-xs text-slate-300 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Info className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>
                    <strong className="text-white">{t.mitigationLabel}:</strong>{' '}
                    {language === 'ar' ? item.riskMitigationAr : item.riskMitigationEn}
                  </span>
                </div>
                <span className="text-[11px] text-slate-500 shrink-0">
                  {item.verificationSource}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: STANDARD CORRIDOR ZONES 1, 2, 3 */}
      <section className="space-y-6">
        <div className="border-b border-white/10 pb-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2.5">
            <MapPin className="w-5 h-5 text-emerald-400" />
            <span>{t.corridorsTitle}</span>
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            {t.corridorsSubtitle}
          </p>
        </div>

        {/* Zone Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {corridorZones.map((zone) => {
            const isSelected = activeZone === zone.zoneNumber;
            return (
              <button
                key={zone.zoneNumber}
                onClick={() => setActiveZone(zone.zoneNumber)}
                className={`p-5 rounded-2xl border text-start transition-all cursor-pointer ${
                  isSelected
                    ? zone.zoneNumber === 1
                      ? 'bg-emerald-950/40 border-emerald-500 shadow-lg shadow-emerald-500/10'
                      : zone.zoneNumber === 2
                      ? 'bg-amber-950/40 border-amber-500 shadow-lg shadow-amber-500/10'
                      : 'bg-rose-950/40 border-rose-500 shadow-lg shadow-rose-500/10'
                    : 'bg-slate-900/60 border-white/10 hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-white/10 text-white">
                    Zone {zone.zoneNumber}
                  </span>
                  <span
                    className={`text-[11px] font-bold ${
                      zone.zoneNumber === 1
                        ? 'text-emerald-400'
                        : zone.zoneNumber === 2
                        ? 'text-amber-400'
                        : 'text-rose-400'
                    }`}
                  >
                    {language === 'ar' ? zone.badgeAr : zone.badgeEn}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white leading-snug">
                  {language === 'ar' ? zone.titleAr : zone.titleEn}
                </h3>
              </button>
            );
          })}
        </div>

        {/* Selected Zone Details Card */}
        {(() => {
          const zone = corridorZones.find((z) => z.zoneNumber === activeZone) || corridorZones[0];
          return (
            <div className="p-6 md:p-8 rounded-3xl bg-slate-900 border border-white/15 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white">
                  {language === 'ar' ? zone.titleAr : zone.titleEn}
                </h3>
                <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                  {language === 'ar' ? zone.descriptionAr : zone.descriptionEn}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/10">
                {/* Covered Regions */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                    {language === 'ar' ? 'المناطق والمدن المشمولة:' : 'Covered Geographies:'}
                  </h4>
                  <ul className="space-y-2">
                    {(language === 'ar' ? zone.coverageAreasAr : zone.coverageAreasEn).map((area, i) => (
                      <li key={i} className="text-xs text-slate-300 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                        <span>{area}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Statutory Rules */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                    {language === 'ar' ? 'القواعد واللوائح التنظيمية:' : 'Statutory & Operational Rules:'}
                  </h4>
                  <ul className="space-y-2">
                    {(language === 'ar' ? zone.rulesAr : zone.rulesEn).map((rule, i) => (
                      <li key={i} className="text-xs text-slate-300 flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{rule}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Callout action */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10">
                <span className="text-xs text-slate-400">
                  {language === 'ar'
                    ? 'هل ترغب في حجز جولة داخل المنطقة 1 أو 2 برفقة مرشد معتمد؟'
                    : 'Looking to book a certified tour within Zone 1 or Zone 2?'}
                </span>
                <Link
                  href="/logistics/verified-agencies"
                  className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center gap-1.5"
                >
                  <span>{language === 'ar' ? 'دليل الوكالات المعتمدة' : 'Browse Vetted Agencies'}</span>
                  <ArrowIcon className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          );
        })()}
      </section>
    </div>
  );
}
