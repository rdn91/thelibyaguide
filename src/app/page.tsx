'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { destinations } from '@/data/destinations';
import { operators } from '@/data/operators';
import RealityCounter from '@/components/RealityCounter';
import DestinationCard from '@/components/DestinationCard';
import InteractiveMap from '@/components/InteractiveMap';
import { 
  ShieldCheck, 
  MapPin, 
  Compass, 
  Sparkles, 
  ArrowRight, 
  ArrowLeft, 
  Calendar, 
  Landmark,
  Building2
} from 'lucide-react';

export default function HomePage() {
  const { language, t, isRtl } = useLanguage();
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const featuredDestinations = destinations.slice(0, 6);

  return (
    <div className="space-y-16 pb-20">
      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center pt-8 pb-16 overflow-hidden">
        {/* Background Visuals with Gradients */}
        <div 
          className="absolute inset-0 bg-cover bg-center -z-10 scale-105 transform opacity-35 transition-transform duration-1000 ease-out"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1548625361-195fe578716b?q=80&w=1920&auto=format&fit=crop')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-[#090d16]/75 to-transparent -z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#090d16]/80 via-transparent to-[#090d16] -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          {/* Ground Truth Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 text-xs sm:text-sm font-semibold backdrop-blur-md animate-in fade-in">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>{t.heroBadge}</span>
          </div>

          {/* Cinematic Bilingual Headline */}
          <div className="max-w-4xl mx-auto space-y-4">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.15]">
              <span>{t.heroTitlePart1}</span>{' '}
              <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent underline decoration-amber-500/40 decoration-wavy decoration-from-font">
                {t.heroTitleHighlight}
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
              {t.heroSubtitle}
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/destinations"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-600 to-amber-500 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm tracking-wide shadow-xl shadow-amber-500/20 transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
            >
              <Compass className="w-5 h-5 stroke-[2.2]" />
              <span>{t.heroCtaDestinations}</span>
            </Link>

            <Link
              href="/logistics/evisa-step-by-step"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-sm tracking-wide backdrop-blur-md transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
            >
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <span>{t.heroCtaEligibility}</span>
            </Link>

            <Link
              href="/reality-check"
              className="w-full sm:w-auto px-6 py-4 rounded-2xl text-slate-300 hover:text-white font-semibold text-sm transition-colors flex items-center justify-center gap-1.5"
            >
              <span>{t.heroCtaRealityCheck}</span>
              <ArrowIcon className="w-4 h-4 text-amber-400" />
            </Link>
          </div>

          {/* Quick Key Pillars Ticker */}
          <div className="pt-8 max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 text-start">
            <div className="p-3 rounded-xl bg-slate-950/60 border border-white/10 backdrop-blur-sm">
              <span className="text-[10px] text-amber-400 uppercase font-bold tracking-wider block">
                {language === 'ar' ? 'التأشيرة' : 'eVisa Status'}
              </span>
              <span className="text-xs text-slate-200 font-semibold mt-0.5 block">
                {language === 'ar' ? 'بوابة إلكترونية نشطة' : 'Official evisa.gov.ly'}
              </span>
            </div>
            <div className="p-3 rounded-xl bg-slate-950/60 border border-white/10 backdrop-blur-sm">
              <span className="text-[10px] text-emerald-400 uppercase font-bold tracking-wider block">
                {language === 'ar' ? 'الممر الساحلي' : 'Coastal Safety'}
              </span>
              <span className="text-xs text-slate-200 font-semibold mt-0.5 block">
                {language === 'ar' ? 'مؤمن ومفتوح 100%' : '100% Clear Zone 1'}
              </span>
            </div>
            <div className="p-3 rounded-xl bg-slate-950/60 border border-white/10 backdrop-blur-sm">
              <span className="text-[10px] text-sky-400 uppercase font-bold tracking-wider block">
                {language === 'ar' ? 'رحلات الطيران' : 'Transit Access'}
              </span>
              <span className="text-xs text-slate-200 font-semibold mt-0.5 block">
                {language === 'ar' ? 'مباشر من إسطنبول وتونس' : 'Direct IST, TUN, CAI'}
              </span>
            </div>
            <div className="p-3 rounded-xl bg-slate-950/60 border border-white/10 backdrop-blur-sm">
              <span className="text-[10px] text-purple-400 uppercase font-bold tracking-wider block">
                {language === 'ar' ? 'الآثار' : 'Heritage'}
              </span>
              <span className="text-xs text-slate-200 font-semibold mt-0.5 block">
                {language === 'ar' ? 'أكبر مدن روما بلا زحام' : 'Pompeii Scale / 0 Crowds'}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* DYNAMIC REALITY COUNTER */}
      <RealityCounter />

      {/* INTERACTIVE GEOSPATIAL MAP SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5" />
              <span>{language === 'ar' ? 'الاستكشاف الجغرافي' : 'Geospatial POI Navigator'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              {language === 'ar' ? 'خريطة المعالم الأثرية والطبيعية' : 'Interactive Map of Libya'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl">
              {language === 'ar'
                ? 'استكشف مدن التراث العالمي، وسلاسل الجبال، ومحميات الساحل الفيروزي، وبحيرات الصحراء الكبرى.'
                : 'Navigate UNESCO landmarks, mountain fortress granaries, flamingo lagoons, and Saharan sand lakes.'}
            </p>
          </div>

          <Link
            href="/destinations"
            className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors"
          >
            <span>{language === 'ar' ? 'عرض الفهرس الكامل' : 'Browse All 50+ Destinations'}</span>
            <ArrowIcon className="w-4 h-4" />
          </Link>
        </div>

        <InteractiveMap destinations={destinations} />
      </section>

      {/* FEATURED DESTINATIONS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <Landmark className="w-3.5 h-3.5" />
              <span>{language === 'ar' ? 'أبرز الوجهات' : 'Curated Landmarks'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              {language === 'ar' ? 'معالم لا مثيل لها على كوكب الأرض' : 'Unrivaled Ancient & Natural Wonders'}
            </h2>
          </div>

          <Link
            href="/destinations"
            className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1"
          >
            <span>{language === 'ar' ? 'استعراض الكل' : 'View All'}</span>
            <ArrowIcon className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredDestinations.map((dest) => (
            <DestinationCard key={dest.id} destination={dest} />
          ))}
        </div>
      </section>

      {/* DOMESTIC WEEKEND TEASER SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-amber-950/40 via-slate-900 to-slate-950 border border-amber-500/20 p-8 sm:p-12 relative overflow-hidden">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold">
              <Calendar className="w-3.5 h-3.5" />
              <span>{t.navWeekends}</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
              {language === 'ar'
                ? 'تخطيط عطلة الجمعة والسبت لم يعد مشتتاً عبر فيسبوك'
                : 'Friday & Saturday Plans, Finally in One Centralized Hub'}
            </h2>

            <p className="text-sm text-slate-300 leading-relaxed">
              {language === 'ar'
                ? 'استمتع بدليل متجدد للشاليهات الساحلية، ومزارع الاستجمام، ومسارات صعود جبل نفوسة، ومحامص القهوة المختصة، والأسماك المشوية الطازجة في زوارة وطرابلس وبنغازي.'
                : 'Discover curated 24-hour itineraries, fresh seafood dining at fisherman harbors, mountain troglodyte cave trips, and hip specialty coffee roasteries across Tripoli, Benghazi, Misrata, and Zuwara.'}
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                href="/local-weekends"
                className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-amber-500/20 transition-all"
              >
                {language === 'ar' ? 'افتح دليل عطلات نهاية الأسبوع' : 'Open Weekend Navigator'}
              </Link>
              <Link
                href="/local-weekends"
                className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs border border-white/10 transition-colors"
              >
                {language === 'ar' ? 'مسارات 24 ساعة و 48 ساعة' : '24h & 48h Itineraries'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* VETTED OPERATORS SPOTLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <Building2 className="w-3.5 h-3.5" />
              <span>{t.navAgencies}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              {language === 'ar' ? 'شركات السياحة المرخصة والمعتمدة' : 'Verified Tourism Operators'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl">
              {language === 'ar'
                ? 'وكالات سياحية رسمية تتولى إصدار خطابات الدعوة وتأشيرات e-Visa والتأمين الميداني.'
                : 'Accredited agencies providing legal visa sponsorship, LOIs, archaeologist escorts, and 4WD Sahara convoys.'}
            </p>
          </div>

          <Link
            href="/logistics/verified-agencies"
            className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1"
          >
            <span>{language === 'ar' ? 'عرض دليل الوكالات بالكامل' : 'View Full Directory'}</span>
            <ArrowIcon className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {operators.map((op) => (
            <div
              key={op.id}
              className="p-6 rounded-2xl bg-slate-900/70 border border-white/10 hover:border-amber-400/40 transition-all flex flex-col justify-between space-y-4"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                    <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider">
                      {op.licenseNumber}
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                    ★ {op.rating} ({op.reviewCount} {language === 'ar' ? 'تقييم' : 'reviews'})
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mt-2">
                  {language === 'ar' ? op.nameAr : op.nameEn}
                </h3>
                <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                  {language === 'ar' ? op.descriptionAr : op.descriptionEn}
                </p>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {op.specialties.slice(0, 2).map((spec, i) => (
                    <span
                      key={i}
                      className="text-[11px] px-2.5 py-1 rounded-lg bg-white/5 text-slate-300 border border-white/5"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-slate-400">
                  {language === 'ar' ? 'المقر:' : 'HQ:'} {op.headquarters}
                </span>
                <a
                  href={`https://wa.me/${op.whatsappContact.replace('+', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-bold transition-colors"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* REALITY CHECK CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-900 border border-white/10 p-8 sm:p-12 text-center space-y-6 relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              {language === 'ar' ? 'هل تريد معرفة تفاصيل تأشيرة الدخول وإجراءات المطار؟' : 'Ready to Discover the Truth on the Ground?'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              {language === 'ar'
                ? 'استخدم حاسبة الأهلية التفاعلية للحصول على دليل متكامل خطوة بخطوة للتقديم على التأشيرة الإلكترونية evisa.gov.ly.'
                : 'Run through our 4-step eligibility tool to check passport requirements, avoid statutory restrictions, and obtain an approved Letter of Invitation.'}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/logistics/evisa-step-by-step"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-amber-500/20 transition-all"
            >
              {language === 'ar' ? 'فحص أهلية التأشيرة' : 'Start Visa Calculator'}
            </Link>
            <Link
              href="/reality-check"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold text-xs border border-white/10 transition-colors"
            >
              {language === 'ar' ? 'التحقق من حالة الرحلات والممرات' : 'View Transit Dashboard'}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
