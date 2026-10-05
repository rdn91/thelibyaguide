'use client';

import React from 'react';
import Link from 'next/link';
import { Destination } from '@/types';
import { useLanguage } from '@/context/LanguageContext';
import { MapPin, Users2, ShieldCheck, ArrowRight, ArrowLeft } from 'lucide-react';

interface DestinationCardProps {
  destination: Destination;
}

export default function DestinationCard({ destination }: DestinationCardProps) {
  const { language, isRtl } = useLanguage();

  const title = language === 'ar' ? destination.titleAr : destination.titleEn;
  const description = language === 'ar' ? destination.descriptionAr : destination.descriptionEn;
  const city = language === 'ar' ? destination.cityAr : destination.city;
  const crowdMetric = language === 'ar' ? destination.crowdMetricAr : destination.crowdMetricEn;

  // Category label
  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'unesco':
        return language === 'ar' ? 'تراث اليونسكو' : 'UNESCO Heritage';
      case 'beach':
        return language === 'ar' ? 'ساحل وشواطئ' : 'Coastal & Beach';
      case 'mountain':
        return language === 'ar' ? 'جبال نفوسة' : 'Mountain';
      case 'oasis':
        return language === 'ar' ? 'واحات الصحراء' : 'Desert & Oasis';
      case 'cafe':
        return language === 'ar' ? 'قهوة مختصة' : 'Specialty Cafe';
      case 'weekend_spot':
        return language === 'ar' ? 'عطلة أسبوع' : 'Weekend Spot';
      default:
        return category;
    }
  };

  // Safety Tier Label & Styling
  const getSafetyBadge = (tier: string) => {
    switch (tier) {
      case 'open_domestic':
        return {
          label: language === 'ar' ? 'تنقل حر مباشر' : 'Open Domestic',
          bg: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
        };
      case 'agency_escorted':
        return {
          label: language === 'ar' ? 'وكالة مرخصة (المنطقة 1)' : 'Zone 1 (Agency Escorted)',
          bg: 'bg-amber-500/20 text-amber-300 border-amber-500/30'
        };
      case 'permit_required':
        return {
          label: language === 'ar' ? 'تصريح صحراوي (المنطقة 2)' : 'Zone 2 (Desert Permit)',
          bg: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30'
        };
      default:
        return {
          label: tier,
          bg: 'bg-slate-500/20 text-slate-300 border-slate-500/30'
        };
    }
  };

  const safetyBadge = getSafetyBadge(destination.safetyTier);
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <div className="group rounded-2xl bg-slate-900/80 border border-white/10 hover:border-amber-400/40 overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/10 hover:-translate-y-1">
      {/* Featured Image with Badges */}
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
        <img
          src={destination.featuredImage}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-3 inset-x-3 flex items-center justify-between gap-2">
          <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-amber-300 border border-amber-400/30">
            {getCategoryLabel(destination.category)}
          </span>
          <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full backdrop-blur-md border ${safetyBadge.bg} flex items-center gap-1`}>
            <ShieldCheck className="w-3 h-3" />
            {safetyBadge.label}
          </span>
        </div>

        {/* City & Region Bottom Overlay */}
        <div className="absolute bottom-3 start-3 end-3 flex items-center justify-between text-xs text-slate-300">
          <span className="flex items-center gap-1.5 font-medium text-white/90 drop-shadow">
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            {city}
          </span>
          {destination.historicalEra && (
            <span className="text-[11px] text-amber-200/80 bg-slate-950/60 px-2 py-0.5 rounded backdrop-blur">
              {destination.historicalEra.split('(')[0]}
            </span>
          )}
        </div>
      </div>

      {/* Content Area */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
            {title}
          </h3>

          {/* Crowd Contrast Callout Badge */}
          {crowdMetric && (
            <div className="mt-2 text-xs px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-300 flex items-start gap-2">
              <Users2 className="w-3.5 h-3.5 shrink-0 mt-0.5 text-amber-400" />
              <span className="font-medium leading-snug">{crowdMetric}</span>
            </div>
          )}

          <p className="mt-3 text-xs leading-relaxed text-slate-400 line-clamp-3">
            {description}
          </p>
        </div>

        {/* Action Footer */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between">
          <span className="text-[11px] text-slate-500">
            {destination.practicalInfo?.bestSeasonEn?.split('(')[0]}
          </span>
          <Link
            href={`/destinations/${destination.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors group-hover:underline"
          >
            <span>{language === 'ar' ? 'استكشف الوجهة' : 'Explore Details'}</span>
            <ArrowIcon className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
