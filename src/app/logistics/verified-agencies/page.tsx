'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { operators } from '@/data/operators';
import { 
  Building2, 
  ShieldCheck, 
  Phone, 
  Mail, 
  MapPin, 
  DollarSign, 
  MessageSquare
} from 'lucide-react';

export default function VerifiedAgenciesPage() {
  const { language, t } = useLanguage();
  const [selectedRegion, setSelectedRegion] = useState<string>('all');

  const filteredOperators = operators.filter((op) => {
    if (selectedRegion === 'all') return true;
    return op.operatingRegions.some(
      (r) => r.toLowerCase() === selectedRegion.toLowerCase()
    );
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Page Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold">
          <ShieldCheck className="w-4 h-4" />
          <span>{language === 'ar' ? 'دليل الوكالات المعتمدة رسمياً' : 'Module D: Vetted Agency Directory'}</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          {language === 'ar' ? 'وكالات السياحة والسفر المرخصة في ليبيا' : 'Accredited Libyan Tour Operators'}
        </h1>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          {language === 'ar'
            ? 'دليل رسمي موثق للشركات السياحية الحاصلة على تراخيص وزارة السياحة والمؤهلة لإصدار خطابات الدعوة وتأشيرات e-Visa والتنسيق الأمني للمسارات.'
            : 'Every foreign tourist in Libya must be accompanied by an accredited local guide and sponsored by a licensed agency. Here is the verified registry of accredited companies with transparent pricing.'}
        </p>
      </div>

      {/* Region Filter Bar */}
      <div className="flex items-center justify-between flex-wrap gap-4 border-b border-white/10 pb-4">
        <div className="flex items-center gap-2">
          <Building2 className="w-4 h-4 text-amber-400" />
          <span className="text-xs font-bold text-slate-300">
            {language === 'ar' ? 'تصفية حسب مناطق العمل:' : 'Filter by Operating Region:'}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {['all', 'Tripolitania', 'Cyrenaica', 'Fezzan'].map((region) => (
            <button
              key={region}
              onClick={() => setSelectedRegion(region)}
              className={`text-xs px-3.5 py-1.5 rounded-lg transition-all cursor-pointer ${
                selectedRegion === region
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-md'
                  : 'bg-white/5 text-slate-400 hover:text-white border border-white/5'
              }`}
            >
              {region === 'all'
                ? language === 'ar' ? 'كافة الأقاليم' : 'All Regions'
                : region}
            </button>
          ))}
        </div>
      </div>

      {/* Operators Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredOperators.map((operator) => (
          <div
            key={operator.id}
            className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-white/15 hover:border-amber-400/40 transition-all flex flex-col justify-between space-y-6 shadow-xl"
          >
            <div className="space-y-4">
              {/* Header: License & Rating */}
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                  <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                    {operator.licenseNumber}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    {operator.yearsActive} {language === 'ar' ? 'سنة خبرة' : 'yrs experience'}
                  </span>
                </div>

                <div className="text-xs font-bold text-amber-300 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                  ★ {operator.rating} ({operator.reviewCount} {language === 'ar' ? 'تقييم موثق' : 'verified reviews'})
                </div>
              </div>

              {/* Title & Description */}
              <div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-white">
                  {language === 'ar' ? operator.nameAr : operator.nameEn}
                </h2>
                <div className="flex items-center gap-2 text-xs text-amber-300/80 mt-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{operator.headquarters}</span>
                  <span className="text-white/30">•</span>
                  <span>{operator.operatingRegions.join(', ')}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed">
                  {language === 'ar' ? operator.descriptionAr : operator.descriptionEn}
                </p>
              </div>

              {/* Languages Supported */}
              <div className="space-y-1.5 pt-2">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                  {language === 'ar' ? 'اللغات المتاحة مع المرشدين:' : 'Guide Languages Spoken:'}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {operator.languagesSupported.map((lang, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2.5 py-0.5 rounded-md bg-white/5 text-slate-300 border border-white/5"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              {/* Specialties */}
              <div className="space-y-1.5">
                <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider block">
                  {t.specialties}:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {operator.specialties.map((spec, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2.5 py-1 rounded-lg bg-amber-500/10 text-amber-200 border border-amber-500/20"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              {/* Transparent Pricing Callout Box */}
              <div className="p-4 rounded-2xl bg-slate-950 border border-white/10 space-y-1.5">
                <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-400 uppercase tracking-wider">
                  <DollarSign className="w-3.5 h-3.5" />
                  <span>{t.transparentPricing}</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-mono">
                  {language === 'ar' ? operator.pricingGuidelinesAr : operator.pricingGuidelinesEn}
                </p>
              </div>
            </div>

            {/* Direct Contact Actions */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3 text-xs text-slate-400">
                {operator.phoneContact && (
                  <span className="flex items-center gap-1 font-mono">
                    <Phone className="w-3.5 h-3.5 text-amber-400" />
                    {operator.phoneContact}
                  </span>
                )}
                {operator.emailContact && (
                  <span className="hidden sm:flex items-center gap-1">
                    <Mail className="w-3.5 h-3.5 text-sky-400" />
                    {operator.emailContact}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={`https://wa.me/${operator.whatsappContact.replace('+', '')}?text=${encodeURIComponent(
                    `Hello ${operator.nameEn}, I found your agency on Discover Libya and would like to inquire about visa sponsorship and tour itineraries.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-md shadow-emerald-500/20 transition-all cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{t.whatsappContact}</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
