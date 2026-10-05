'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { FileText, Building2, HeartHandshake, ArrowRight, ArrowLeft, Compass } from 'lucide-react';

export default function LogisticsHubPage() {
  const { language, isRtl } = useLanguage();
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const sections = [
    {
      titleEn: 'Step-by-Step eVisa & Eligibility Calculator',
      titleAr: 'دليل التأشيرة الإلكترونية evisa.gov.ly واختبار الأهلية',
      descEn: 'Check passport criteria, avoid Israeli stamp restrictions, and understand the 5-step statutory workflow to enter Libya.',
      descAr: 'تحقق من شروط الجواز، وتجنب قيود الأختام، وافهم الخطوات الخمس الرسمية للحصول على التأشيرة الإلكترونية.',
      href: '/logistics/evisa-step-by-step',
      icon: FileText,
      color: 'amber'
    },
    {
      titleEn: 'Verified Tour Operators Directory',
      titleAr: 'دليل وكالات السياحة والسفر المعتمدة رسمياً',
      descEn: 'Connect with accredited Libyan agencies for mandatory tour sponsorship, Letters of Invitation (LOI), and transparent pricing.',
      descAr: 'تواصل مع وكالات مرخصة رسمياً لإصدار خطابات الدعوة وتأشيرة الدخول ومرافقة المرشدين المعتمدين.',
      href: '/logistics/verified-agencies',
      icon: Building2,
      color: 'emerald'
    },
    {
      titleEn: 'Culture, Customs & Regulatory Etiquette',
      descEn: 'Ground truth advice on the cash-based economy (LYD), drone/photography rules, dress codes, and tea hospitality traditions.',
      titleAr: 'العادات والتقاليد والأنظمة القانونية',
      descAr: 'إرشادات عملية حول الاقتصاد النقدي (كاش)، وقوانين الدرون والتصوير، واللباس المعتدل، وطقوس الشاي والضيافة.',
      href: '/logistics/customs-and-culture',
      icon: HeartHandshake,
      color: 'sky'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Page Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold">
          <Compass className="w-4 h-4" />
          <span>{language === 'ar' ? 'المركز اللوجستي للمسافرين' : 'International Logistics Hub'}</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          {language === 'ar' ? 'الدليل اللوجستي للسفر إلى ليبيا' : 'Libya Travel Logistics & Intelligence'}
        </h1>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          {language === 'ar'
            ? 'كل ما يحتاجه المسافر الدولي من معلومات نظامية: كيفية استخراج التأشيرة، اختيار وكالة سياحية معتمدة، وقوانين الصرف والتصوير.'
            : 'Clear, transparent answers to every regulatory and operational question before booking your journey to North Africa.'}
        </p>
      </div>

      {/* Grid of Logistics Hub Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {sections.map((sec, idx) => {
          const Icon = sec.icon;
          return (
            <Link
              key={idx}
              href={sec.href}
              className="p-8 rounded-3xl bg-slate-900 border border-white/10 hover:border-amber-400/40 transition-all flex flex-col justify-between space-y-6 shadow-xl group hover:-translate-y-1"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h2 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                  {language === 'ar' ? sec.titleAr : sec.titleEn}
                </h2>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {language === 'ar' ? sec.descAr : sec.descEn}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center gap-1.5 text-xs font-bold text-amber-400 group-hover:underline">
                <span>{language === 'ar' ? 'عرض التفاصيل' : 'Explore Guide'}</span>
                <ArrowIcon className="w-4 h-4" />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
