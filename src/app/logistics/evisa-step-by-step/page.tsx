'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { evisaSteps, restrictionRules } from '@/data/visaRules';
import { 
  FileCheck, 
  AlertOctagon, 
  CheckCircle2, 
  ExternalLink, 
  ArrowRight, 
  ArrowLeft, 
  HelpCircle,
  Building2,
  FileText
} from 'lucide-react';

export default function EvisaStepByStepPage() {
  const { language, t, isRtl } = useLanguage();
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  // Wizard state
  const [nationality, setNationality] = useState<string>('US');
  const [hasValidPassport, setHasValidPassport] = useState<boolean>(true);
  const [hasIsraeliStamp, setHasIsraeliStamp] = useState<boolean>(false);
  const [visitPurpose, setVisitPurpose] = useState<string>('tourism');
  const [verified, setVerified] = useState<boolean>(false);

  const countries = [
    { code: 'US', nameEn: 'United States', nameAr: 'الولايات المتحدة الأمريكية' },
    { code: 'GB', nameEn: 'United Kingdom', nameAr: 'المملكة المتحدة (بريطانيا)' },
    { code: 'DE', nameEn: 'Germany / European Union', nameAr: 'ألمانيا / دول الاتحاد الأوروبي' },
    { code: 'FR', nameEn: 'France', nameAr: 'فرنسا' },
    { code: 'IT', nameEn: 'Italy', nameAr: 'إيطاليا' },
    { code: 'CA', nameEn: 'Canada', nameAr: 'كندا' },
    { code: 'AU', nameEn: 'Australia & New Zealand', nameAr: 'أستراليا ونيوزيلندا' },
    { code: 'JP', nameEn: 'Japan & East Asia', nameAr: 'اليابان وشرق آسيا' },
    { code: 'TR', nameEn: 'Turkey', nameAr: 'تركيا' },
    { code: 'TN', nameEn: 'Tunisia / Maghreb', nameAr: 'تونس / دول المغرب العربي' },
    { code: 'EG', nameEn: 'Egypt', nameAr: 'مصر' },
    { code: 'OTHER', nameEn: 'Other International Passport', nameAr: 'دول أخرى حول العالم' },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Header */}
      <div className="space-y-4 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold">
          <FileCheck className="w-4 h-4" />
          <span>{language === 'ar' ? 'حاسبة الأهلية والتأشيرة الإلكترونية' : 'Module C: "Can I Visit Libya?" Interactive Tool'}</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          {t.eligibilityTitle}
        </h1>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          {t.eligibilitySubtitle}
        </p>
      </div>

      {/* INTERACTIVE ELIGIBILITY WIZARD CARD */}
      <div className="p-6 sm:p-10 rounded-3xl bg-slate-900 border border-white/15 shadow-2xl space-y-8">
        <div className="border-b border-white/10 pb-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-amber-400" />
            <span>{language === 'ar' ? 'اختبار الأهلية السريع (4 أسئلة)' : 'Instant 4-Point Eligibility Check'}</span>
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            {language === 'ar'
              ? 'أجب عن الأسئلة أدناه للتحقق من الشروط القانونية الصادرة عن مصلحة الجوازات والجنسية.'
              : 'Answer these questions to test compliance with statutory Libyan immigration requirements.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Question 1: Nationality */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
              1. {t.nationalityQuestion}
            </label>
            <select
              value={nationality}
              onChange={(e) => {
                setNationality(e.target.value);
                setVerified(false);
              }}
              className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/10 text-white text-xs focus:outline-none focus:border-amber-400 cursor-pointer"
            >
              {countries.map((c) => (
                <option key={c.code} value={c.code}>
                  {language === 'ar' ? c.nameAr : c.nameEn}
                </option>
              ))}
            </select>
          </div>

          {/* Question 2: Purpose of Visit */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
              2. {language === 'ar' ? 'ما هو الغرض من زيارتك؟' : 'Purpose of Visit'}
            </label>
            <select
              value={visitPurpose}
              onChange={(e) => {
                setVisitPurpose(e.target.value);
                setVerified(false);
              }}
              className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/10 text-white text-xs focus:outline-none focus:border-amber-400 cursor-pointer"
            >
              <option value="tourism">
                {language === 'ar' ? 'السياحة واستكشاف الآثار' : 'Leisure & Archaeological Tourism'}
              </option>
              <option value="business">
                {language === 'ar' ? 'الأعمال والتجارة' : 'Commercial & Business'}
              </option>
              <option value="media">
                {language === 'ar' ? 'الصحافة والتوثيق الإعلامي' : 'Journalism & Media Documentation'}
              </option>
            </select>
          </div>

          {/* Question 3: Passport Validity */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
              3. {language === 'ar' ? 'صلاحية جواز السفر' : 'Passport Validity (6+ Months)'}
            </label>
            <div className="flex items-center gap-4 pt-1">
              <label className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer">
                <input
                  type="radio"
                  name="validity"
                  checked={hasValidPassport}
                  onChange={() => {
                    setHasValidPassport(true);
                    setVerified(false);
                  }}
                  className="text-amber-500 focus:ring-0"
                />
                <span>{language === 'ar' ? 'نعم، صالح لأكثر من 6 أشهر' : 'Valid for 6+ months & 2 blank pages'}</span>
              </label>
              <label className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer">
                <input
                  type="radio"
                  name="validity"
                  checked={!hasValidPassport}
                  onChange={() => {
                    setHasValidPassport(false);
                    setVerified(false);
                  }}
                  className="text-amber-500 focus:ring-0"
                />
                <span>{language === 'ar' ? 'أقل من 6 أشهر' : 'Less than 6 months'}</span>
              </label>
            </div>
          </div>

          {/* Question 4: Israeli Stamp Check */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
              4. {t.israeliStampQuestion}
            </label>
            <div className="flex items-center gap-4 pt-1">
              <label className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer">
                <input
                  type="radio"
                  name="israeliStamp"
                  checked={!hasIsraeliStamp}
                  onChange={() => {
                    setHasIsraeliStamp(false);
                    setVerified(false);
                  }}
                  className="text-amber-500 focus:ring-0"
                />
                <span>{t.noIsraeliStamps}</span>
              </label>
              <label className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer">
                <input
                  type="radio"
                  name="israeliStamp"
                  checked={hasIsraeliStamp}
                  onChange={() => {
                    setHasIsraeliStamp(true);
                    setVerified(false);
                  }}
                  className="text-amber-500 focus:ring-0"
                />
                <span className="text-rose-400 font-medium">{t.hasIsraeliStamps}</span>
              </label>
            </div>
          </div>
        </div>

        {/* Verification Trigger Button */}
        <div className="pt-4 border-t border-white/10 flex justify-center">
          <button
            onClick={() => setVerified(true)}
            className="px-8 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-amber-500/20 transition-all cursor-pointer"
          >
            {t.checkValidity}
          </button>
        </div>

        {/* Dynamic Verification Output */}
        {verified && (
          <div className="pt-4 animate-in fade-in slide-in-from-bottom-2">
            {hasIsraeliStamp ? (
              /* Statutory Rejection Alert */
              <div className="p-6 rounded-2xl bg-rose-950/60 border border-rose-500/40 text-rose-200 space-y-3">
                <div className="flex items-center gap-2 text-rose-400 font-bold text-base">
                  <AlertOctagon className="w-5 h-5" />
                  <span>{t.warningIsraeliTitle}</span>
                </div>
                <p className="text-xs leading-relaxed">
                  {language === 'ar' ? restrictionRules.israeliStamp.ruleAr : restrictionRules.israeliStamp.ruleEn}
                </p>
                <div className="text-xs bg-rose-900/40 p-3 rounded-lg border border-rose-500/20 text-rose-100 font-medium">
                  <strong>{language === 'ar' ? 'الحل المتاح:' : 'Actionable Solution:'}</strong>{' '}
                  {language === 'ar'
                    ? 'يجب استخراج جواز سفر جديد أو تجديده قبل البدء في التقديم على التأشيرة الإلكترونية.'
                    : restrictionRules.israeliStamp.solutionEn}
                </div>
              </div>
            ) : !hasValidPassport ? (
              /* Passport Expired Alert */
              <div className="p-6 rounded-2xl bg-amber-950/60 border border-amber-500/40 text-amber-200 space-y-2">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-base">
                  <AlertOctagon className="w-5 h-5" />
                  <span>{language === 'ar' ? 'صلاحية الجواز غير كافية' : 'Insufficient Passport Validity'}</span>
                </div>
                <p className="text-xs leading-relaxed">
                  {language === 'ar' ? restrictionRules.passportValidity.ruleAr : restrictionRules.passportValidity.ruleEn}
                </p>
              </div>
            ) : (
              /* Approved / Eligible Result */
              <div className="p-6 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-100 space-y-4">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-base">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>{t.resultEligibleTitle}</span>
                </div>
                <p className="text-xs sm:text-sm leading-relaxed text-emerald-200">
                  {t.resultEligibleSubtitle}
                </p>
                <div className="flex items-center gap-4 text-xs font-semibold pt-1">
                  <a
                    href="https://evisa.gov.ly"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-500 text-slate-950 hover:bg-emerald-400 font-bold transition-colors"
                  >
                    <span>{language === 'ar' ? 'الانتقال إلى evisa.gov.ly' : 'Go to evisa.gov.ly Portal'}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <Link
                    href="/logistics/verified-agencies"
                    className="inline-flex items-center gap-1 text-emerald-300 hover:text-white"
                  >
                    <span>{language === 'ar' ? 'اختيار وكالة لإصدار خطاب الدعوة (LOI)' : 'Get Agency LOI First'}</span>
                    <ArrowIcon className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* STEP-BY-STEP STATUTORY WORKFLOW */}
      <section className="space-y-8">
        <div className="border-b border-white/10 pb-4">
          <div className="inline-flex items-center gap-1.5 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <FileText className="w-3.5 h-3.5" />
            <span>{language === 'ar' ? 'دليل الإجراءات القانونية' : 'Statutory Roadmap'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
            {language === 'ar' ? 'الخطوات الخمس الرسمية لدخول ليبيا بسلام' : 'The 5 Official Steps to Enter Libya'}
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            {language === 'ar'
              ? 'إجراءات نظامية ملزمة تضمن لك رحلة قانونية سلسة واستقبالاً رسمياً في المطار.'
              : 'The mandatory sequence of booking, government registration, and guided arrival.'}
          </p>
        </div>

        <div className="space-y-6">
          {evisaSteps.map((step) => (
            <div
              key={step.stepNumber}
              className="p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-white/10 hover:border-amber-400/30 transition-all flex flex-col md:flex-row items-start gap-6 shadow-xl"
            >
              {/* Step Number Circle */}
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400 font-extrabold text-xl flex items-center justify-center shrink-0">
                0{step.stepNumber}
              </div>

              {/* Step Content */}
              <div className="flex-1 space-y-3">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h3 className="text-lg font-bold text-white">
                    {language === 'ar' ? step.titleAr : step.titleEn}
                  </h3>
                  {step.badgeEn && (
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/5 text-amber-300 border border-white/10">
                      {language === 'ar' ? step.badgeAr : step.badgeEn}
                    </span>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {language === 'ar' ? step.descriptionAr : step.descriptionEn}
                </p>

                <div className="p-3 rounded-xl bg-slate-950 border border-white/5 text-xs text-slate-300 flex items-center justify-between flex-wrap gap-2">
                  <div>
                    <strong className="text-amber-400 font-semibold">
                      {language === 'ar' ? 'المطلوب منك:' : 'Action Required:'}
                    </strong>{' '}
                    <span>{language === 'ar' ? step.actionRequiredAr : step.actionRequiredEn}</span>
                  </div>

                  {step.officialLink && (
                    <a
                      href={step.officialLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-amber-400 hover:text-amber-300 font-bold shrink-0"
                    >
                      <span>evisa.gov.ly</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DIRECT CTA TO OPERATORS */}
      <section className="p-8 rounded-3xl bg-slate-900 border border-white/10 text-center space-y-4">
        <h3 className="text-xl font-bold text-white">
          {language === 'ar' ? 'ابدأ بالخطوة الأولى: تواصل مع وكالة سياحية معتمدة' : 'Step 1 Begins Here: Connect With an Accredited Operator'}
        </h3>
        <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
          {language === 'ar'
            ? 'تصفح قائمة الوكالات الليبية المعتمدة واستلم خطاب الدعوة الرسمي (LOI) لبدء التقديم على التأشيرة.'
            : 'Browse our registry of verified Libyan travel companies to request your Letter of Invitation and confirm dates.'}
        </p>
        <Link
          href="/logistics/verified-agencies"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-amber-500/20 transition-all"
        >
          <Building2 className="w-4 h-4" />
          <span>{language === 'ar' ? 'دليل الوكالات المعتمدة' : 'Browse Vetted Agencies Directory'}</span>
        </Link>
      </section>
    </div>
  );
}
