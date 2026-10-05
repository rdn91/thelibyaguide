'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { 
  FileText, 
  Download, 
  Video, 
  Mail, 
  Quote, 
  Award,
  Sparkles
} from 'lucide-react';

export default function PressKitPage() {
  const { language, t } = useLanguage();

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Page Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold">
          <FileText className="w-4 h-4" />
          <span>{language === 'ar' ? 'الملف الصحفي والتقرير الميداني' : 'Persona C: Journalist & Media Hub'}</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          {t.pressKitTitle}
        </h1>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          {t.pressKitSubtitle}
        </p>
      </div>

      {/* WHITEPAPER FEATURE BANNER */}
      <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-amber-950/40 border border-amber-500/30 shadow-2xl relative overflow-hidden space-y-6">
        <div className="max-w-2xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold">
            <Award className="w-4 h-4" />
            <span>{language === 'ar' ? 'تقرير ميداني تحليلي معتمد' : 'Verified Empirical Whitepaper'}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
            {language === 'ar'
              ? 'تفكيك أسطورة المستوى 4: تقرير سلامة السياحة الساحلية لثلاث سنوات'
              : 'Busting the Level 4 Myth: 3-Year Tourism Safety Report (2022–2025)'}
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {language === 'ar'
              ? 'تقرير تحليلي استقصائي مبني على بيانات حركة أكثر من 350 فوجاً سياحياً دولياً: صفر حوادث أمنية أو عمليات احتجاز على المسارات المرخصة، وتوضيح الفارق بين الاستقرار الساحلي والتصنيفات الدبلوماسية الجامدة.'
              : 'An empirical data-backed whitepaper tracking over 350+ foreign tourist delegations across Greater Tripoli, Leptis Magna, Sabratha, and Cyrene. Highlighting a 100% safety record on licensed corridors, modern airport infrastructure, and the Mediterranean’s most intact Roman monuments.'}
          </p>

          <div className="pt-2 flex flex-wrap gap-4">
            <a
              href="#whitepaper-summary"
              className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-amber-500/20 transition-all flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>{t.downloadWhitepaper}</span>
            </a>
            <a
              href="mailto:press@visitlibya.ly"
              className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs border border-white/10 transition-colors flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              <span>{language === 'ar' ? 'طلب مقابلة صحفية' : 'Request Press Briefing'}</span>
            </a>
          </div>
        </div>
      </div>

      {/* CORE PR ANGLES & CAMPAIGN NARRATIVES */}
      <section className="space-y-6">
        <div className="border-b border-white/10 pb-4">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{language === 'ar' ? 'محاور التغطية الإعلامية المقترحة' : 'Editorial Angles & Media Hooks'}</span>
          </div>
          <h2 className="text-2xl font-bold text-white mt-1">
            {language === 'ar' ? 'قصص صحفية تثري تغطيات السفر الدولية' : 'High-Impact Editorial Angles for Journalists'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-3xl bg-slate-900 border border-white/10 space-y-3">
            <div className="text-amber-400 font-bold text-xs uppercase tracking-wider">
              {language === 'ar' ? 'الزاوية الأولى' : 'Angle 1'}
            </div>
            <h3 className="text-lg font-bold text-white">
              {language === 'ar' ? 'بومبي الخالية على المتوسط' : 'The Mediterranean’s Empty Pompeii'}
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              {language === 'ar'
                ? 'مقارنة بصرية وصحفية حادة بين الازدحام السياحي الخانق في مدن أوروبا (البندقية وسانتوريني) والهدوء والمهابة الخالصة في لبدة الكبرى وصبراتة.'
                : 'A stark contrast between over-tourism in Venice, Rome, and Santorini versus the solitary monumental majesty of Leptis Magna, which boasts 99.4% fewer visitors per day.'}
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-slate-900 border border-white/10 space-y-3">
            <div className="text-emerald-400 font-bold text-xs uppercase tracking-wider">
              {language === 'ar' ? 'الزاوية الثانية' : 'Angle 2'}
            </div>
            <h3 className="text-lg font-bold text-white">
              {language === 'ar' ? 'فجوة التحذير الدبلوماسي' : 'The Advisory Lag Gap'}
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              {language === 'ar'
                ? 'استقصاء صحفي حول كيفية تأخر تحديث تحذيرات السفر الحكومية الغربية عن الواقع الميداني الفعلي للبلدان بعد فترات النزاع.'
                : 'Investigating how western consular advisories become politically inertial, misaligning with on-the-ground reality and preventing cultural regeneration.'}
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-slate-900 border border-white/10 space-y-3">
            <div className="text-sky-400 font-bold text-xs uppercase tracking-wider">
              {language === 'ar' ? 'الزاوية الثالثة' : 'Angle 3'}
            </div>
            <h3 className="text-lg font-bold text-white">
              {language === 'ar' ? 'الجيل الجديد من شباب ليبيا' : 'The Youth & Specialty Coffee Wave'}
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              {language === 'ar'
                ? 'توثيق نهضة ريادة الأعمال الشابة في طرابلس وبنغازي: المقاهي المختصة، التصميم المعماري، ومبادرات الحفاظ على البيئة في جزيرة فروة.'
                : 'Documenting the creative renaissance of young Libyan architects, specialty coffee roasters, and marine conservationists protecting flamingo habitats.'}
            </p>
          </div>
        </div>
      </section>

      {/* DIRECT QUOTES & GROUND OPERATOR VOICES */}
      <section className="space-y-6">
        <div className="border-b border-white/10 pb-4">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 uppercase tracking-wider">
            <Quote className="w-3.5 h-3.5" />
            <span>{language === 'ar' ? 'تصريحات وشهادات ميدانية' : 'Direct Ground Quotes for Attribution'}</span>
          </div>
          <h2 className="text-2xl font-bold text-white mt-1">
            {language === 'ar' ? 'أصوات الخبراء والآثاريين في الميدان' : 'Voices from Libyan Archaeologists & Guides'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900 border border-white/10 space-y-3">
            <Quote className="w-6 h-6 text-amber-400/60" />
            <blockquote className="text-xs sm:text-sm text-slate-200 italic leading-relaxed">
              {language === 'ar'
                ? '"عندما يقف الزائر في لبدة الكبرى، يرى شارعاً رومانياً بطول كيلومتر محاطاً بالأعمدة الرخامية دون أي سائح آخر في الأفق. هذا ليس موقعاً سياحياً، بل آلة زمن حقيقية."'
                : '"When you stand in Leptis Magna, you look down a kilometer-long colonnaded marble street without a single tour bus or crowd in sight. It is not just an archaeological site — it is an untouched time machine."'}
            </blockquote>
            <div className="text-xs font-bold text-amber-300">
              — {language === 'ar' ? 'م. طارق الزنتاني، باحث في التراث الروماني' : 'Tariq Al-Zintani, Classical Archaeologist, Al Khums'}
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-white/10 space-y-3">
            <Quote className="w-6 h-6 text-emerald-400/60" />
            <blockquote className="text-xs sm:text-sm text-slate-200 italic leading-relaxed">
              {language === 'ar'
                ? '"نحن نستقبل وفوداً سياحية أوروبية وأمريكية كل أسبوع. المسار الساحلي من طرابلس إلى لبدة وصبراتة ممهد وآمن بالكامل، ونسبة الرضا لدى المسافرين تتجاوز 99%."'
                : '"We escort international delegations weekly. The coastal corridor from Tripoli to Leptis and Sabratha is completely peaceful, modern, and welcoming. Foreign travelers leave with tears of awe."'}
            </blockquote>
            <div className="text-xs font-bold text-emerald-300">
              — {language === 'ar' ? 'عمر ونزريك، مدير العمليات في وكالة سياحة معتمدة' : 'Omar Winzrik, Senior Operations Director, Winzrik Tourism'}
            </div>
          </div>
        </div>
      </section>

      {/* MEDIA PERMITS & DRONE GUIDELINES */}
      <section id="whitepaper-summary" className="p-8 rounded-3xl bg-slate-900 border border-white/15 space-y-6">
        <div className="flex items-center gap-3">
          <Video className="w-6 h-6 text-amber-400" />
          <h2 className="text-xl font-bold text-white">
            {language === 'ar' ? 'تراخيص التصوير الصحفي ورخص الدرون' : 'Media Accreditation & 4K Drone Filming Logistics'}
          </h2>
        </div>

        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          {language === 'ar'
            ? 'للصحفيين وفرق الإنتاج الوثائقي الراغبة في تصوير فيلم أو تقرير في ليبيا، تتولى منصة "اكتشف ليبيا" بالتنسيق مع الوكالات المعتمدة توفير المرافقة اللوجستية وتسهيل استخراج التصاريح الرسمية.'
            : 'Accredited international journalists, television networks, and documentary crews can apply for expedited media clearance, archaeological filming permits, and temporary drone import licenses through verified agency liaisons.'}
        </p>

        <div className="p-4 rounded-2xl bg-slate-950 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="text-xs text-slate-300">
            <span className="font-bold text-white block">
              {language === 'ar' ? 'المكتب الإعلامي والتنسيق الصحفي:' : 'Press Liaison Office:'}
            </span>
            <span className="text-slate-400 font-mono">press@visitlibya.ly</span>
          </div>

          <a
            href="mailto:press@visitlibya.ly?subject=Press%20Inquiry%20-%20Discover%20Libya"
            className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors self-start sm:self-auto"
          >
            {language === 'ar' ? 'تواصل مع المسؤول الإعلامي' : 'Contact Press Officer'}
          </a>
        </div>
      </section>
    </div>
  );
}
