'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { ShieldCheck, Landmark, Plane, Award, ArrowUpRight, ArrowUpLeft } from 'lucide-react';

export default function RealityCounter() {
  const { language, t, isRtl } = useLanguage();
  const ArrowIcon = isRtl ? ArrowUpLeft : ArrowUpRight;

  const stats = [
    {
      title: t.counterDaysTitle,
      subtitle: t.counterDaysSubtitle,
      value: t.counterDaysValue,
      icon: ShieldCheck,
      color: 'emerald',
      bg: 'from-emerald-500/10 to-transparent border-emerald-500/20 text-emerald-400'
    },
    {
      title: t.counterUnescoTitle,
      subtitle: t.counterUnescoSubtitle,
      value: t.counterUnescoValue,
      icon: Landmark,
      color: 'amber',
      bg: 'from-amber-500/10 to-transparent border-amber-500/20 text-amber-400'
    },
    {
      title: t.counterFlightsTitle,
      subtitle: t.counterFlightsSubtitle,
      value: t.counterFlightsValue,
      icon: Plane,
      color: 'sky',
      bg: 'from-sky-500/10 to-transparent border-sky-500/20 text-sky-400'
    },
    {
      title: t.counterAgenciesTitle,
      subtitle: t.counterAgenciesSubtitle,
      value: t.counterAgenciesValue,
      icon: Award,
      color: 'amber',
      bg: 'from-amber-500/10 to-transparent border-amber-500/20 text-amber-400'
    }
  ];

  return (
    <div className="w-full py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-900/60 border border-white/10 p-6 md:p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

          {/* Section Header with Reality Check link */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-white/10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>{language === 'ar' ? 'مؤشرات الواقع الميداني الحية' : 'Live Ground Truth Metrics'}</span>
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-white mt-2">
                {language === 'ar' ? 'أرقام وحقائق تدحض الصورة النمطية' : 'Empirical Facts Behind the Frontier'}
              </h2>
            </div>

            <Link
              href="/reality-check"
              className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors group self-start sm:self-auto"
            >
              <span>{language === 'ar' ? 'استعراض تفكيك تحذيرات السفر' : 'Deconstruct Level 4 Warnings'}</span>
              <ArrowIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </Link>
          </div>

          {/* 4 Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={idx}
                  className={`p-5 rounded-2xl bg-gradient-to-b ${stat.bg} border backdrop-blur-md flex flex-col justify-between transition-transform hover:-translate-y-1`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-extrabold tracking-tight text-white">
                      {stat.value}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-200 leading-snug">
                      {stat.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      {stat.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
