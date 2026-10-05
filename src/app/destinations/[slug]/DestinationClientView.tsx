'use client';

import React from 'react';
import Link from 'next/link';
import { Destination, Operator } from '@/types';
import { useLanguage } from '@/context/LanguageContext';
import { 
  MapPin, 
  Users2, 
  ShieldCheck, 
  Clock, 
  Fuel, 
  HeartPulse, 
  Calendar, 
  Car, 
  Sparkles, 
  Building2, 
  ExternalLink, 
  Navigation 
} from 'lucide-react';

interface DestinationClientViewProps {
  destination: Destination;
  relevantOperators: Operator[];
}

export default function DestinationClientView({
  destination,
  relevantOperators,
}: DestinationClientViewProps) {
  const { language, t } = useLanguage();

  const title = language === 'ar' ? destination.titleAr : destination.titleEn;
  const description = language === 'ar' ? destination.descriptionAr : destination.descriptionEn;
  const city = language === 'ar' ? destination.cityAr : destination.city;
  const crowdMetric = language === 'ar' ? destination.crowdMetricAr : destination.crowdMetricEn;
  const highlights = language === 'ar' ? destination.highlightsAr : destination.highlightsEn;

  const admissionHours = language === 'ar' ? destination.practicalInfo.admissionHoursAr : destination.practicalInfo.admissionHoursEn;
  const bestSeason = language === 'ar' ? destination.practicalInfo.bestSeasonAr : destination.practicalInfo.bestSeasonEn;
  const roadStatus = language === 'ar' ? destination.practicalInfo.accessRoadStatusAr : destination.practicalInfo.accessRoadStatusEn;

  return (
    <div className="space-y-12 pb-20">
      {/* Hero Banner with Background */}
      <div className="relative min-h-[50vh] sm:min-h-[60vh] flex items-end overflow-hidden pb-12">
        <div 
          className="absolute inset-0 bg-cover bg-center -z-10 scale-105"
          style={{ backgroundImage: `url(${destination.featuredImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-[#090d16]/70 to-[#090d16]/30 -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-4">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs text-slate-300">
            <Link href="/" className="hover:text-amber-400 transition-colors">
              {language === 'ar' ? 'الرئيسية' : 'Home'}
            </Link>
            <span>/</span>
            <Link href="/destinations" className="hover:text-amber-400 transition-colors">
              {t.navDestinations}
            </Link>
            <span>/</span>
            <span className="text-amber-300 font-medium">{title}</span>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-500 text-slate-950">
              {destination.category.toUpperCase()}
            </span>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-950/80 text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5 backdrop-blur-md">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{destination.safetyTier.replace('_', ' ')}</span>
            </span>
            {destination.historicalEra && (
              <span className="text-xs text-slate-300 bg-slate-950/80 px-3 py-1 rounded-full border border-white/10 backdrop-blur-md">
                {destination.historicalEra}
              </span>
            )}
          </div>

          {/* Title and City */}
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight">
              {title}
            </h1>
            <div className="flex items-center gap-2 text-sm sm:text-base text-amber-300">
              <MapPin className="w-4 h-4" />
              <span>{city}, {destination.region.toUpperCase()}</span>
              <span className="text-white/40">•</span>
              <span className="text-xs text-slate-400 font-mono">
                {destination.coordinates.lat.toFixed(4)}° N, {destination.coordinates.lng.toFixed(4)}° E
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Crowd Contrast Banner */}
        {crowdMetric && (
          <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/25 flex items-center gap-4 text-amber-200">
            <Users2 className="w-8 h-8 text-amber-400 shrink-0" />
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-amber-400">
                {t.crowdMetric}
              </div>
              <p className="text-sm font-semibold text-white mt-0.5">
                {crowdMetric}
              </p>
            </div>
          </div>
        )}

        {/* Main Grid: Narrative & Practical Logistics */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Content (2 Columns) */}
          <div className="lg:col-span-2 space-y-8">
            <div className="p-6 md:p-8 rounded-3xl bg-slate-900 border border-white/10 space-y-6">
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                {language === 'ar' ? 'عن هذا المعلم' : 'About this Destination'}
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {description}
              </p>

              {/* Highlights */}
              <div className="space-y-3 pt-4 border-t border-white/10">
                <h3 className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4" />
                  <span>{t.highlights}</span>
                </h3>
                <ul className="space-y-2.5">
                  {highlights.map((item, idx) => (
                    <li key={idx} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-amber-400 mt-2 shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Photo Gallery */}
            {destination.gallery && destination.gallery.length > 1 && (
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-white">
                  {language === 'ar' ? 'معرض الصور' : 'Visual Gallery'}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {destination.gallery.slice(1).map((img, i) => (
                    <div key={i} className="aspect-[16/10] rounded-2xl overflow-hidden bg-slate-950 border border-white/10">
                      <img src={img} alt={`${title} ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar Logistics (1 Column) */}
          <div className="space-y-6">
            <div className="p-6 rounded-3xl bg-slate-900/90 border border-white/15 space-y-6 shadow-xl">
              <h3 className="text-lg font-bold text-white border-b border-white/10 pb-3 flex items-center gap-2">
                <Navigation className="w-5 h-5 text-amber-400" />
                <span>{t.quickFacts}</span>
              </h3>

              <div className="space-y-4 text-xs">
                <div>
                  <span className="text-slate-400 flex items-center gap-1.5 mb-1 font-medium">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    {t.hours}
                  </span>
                  <span className="text-slate-200 font-semibold">{admissionHours}</span>
                </div>

                <div>
                  <span className="text-slate-400 flex items-center gap-1.5 mb-1 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                    {t.bestSeason}
                  </span>
                  <span className="text-slate-200 font-semibold">{bestSeason}</span>
                </div>

                <div>
                  <span className="text-slate-400 flex items-center gap-1.5 mb-1 font-medium">
                    <Car className="w-3.5 h-3.5 text-sky-400" />
                    {t.accessRoad}
                  </span>
                  <span className="text-slate-200 leading-snug block">{roadStatus}</span>
                </div>

                <div>
                  <span className="text-slate-400 flex items-center gap-1.5 mb-1 font-medium">
                    <Fuel className="w-3.5 h-3.5 text-purple-400" />
                    {t.nearestFuel}
                  </span>
                  <span className="text-slate-200 font-semibold">{destination.practicalInfo.nearestFuel}</span>
                </div>

                <div>
                  <span className="text-slate-400 flex items-center gap-1.5 mb-1 font-medium">
                    <HeartPulse className="w-3.5 h-3.5 text-rose-400" />
                    {t.nearestHospital}
                  </span>
                  <span className="text-slate-200 font-semibold">{destination.practicalInfo.nearestHospital}</span>
                </div>
              </div>

              {/* External GPS OpenStreetMap link */}
              <div className="pt-4 border-t border-white/10">
                <a
                  href={`https://www.openstreetmap.org/?mlat=${destination.coordinates.lat}&mlon=${destination.coordinates.lng}#map=14/${destination.coordinates.lat}/${destination.coordinates.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold text-xs border border-white/10 transition-colors flex items-center justify-center gap-2"
                >
                  <span>{language === 'ar' ? 'عرض على OpenStreetMap' : 'Open in OpenStreetMap'}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
                </a>
              </div>
            </div>

            {/* Vetted Agencies Covering this Destination */}
            {relevantOperators.length > 0 && (
              <div className="p-6 rounded-3xl bg-slate-900 border border-white/10 space-y-4">
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-emerald-400" />
                  <h3 className="text-sm font-bold text-white">
                    {language === 'ar' ? 'وكالات معتمدة تنظم هذه الجولة:' : 'Vetted Agencies Operating Here:'}
                  </h3>
                </div>

                <div className="space-y-3">
                  {relevantOperators.slice(0, 2).map((op) => (
                    <div key={op.id} className="p-3.5 rounded-xl bg-slate-950 border border-white/5 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-white">
                          {language === 'ar' ? op.nameAr : op.nameEn}
                        </span>
                        <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded font-mono">
                          {op.licenseNumber}
                        </span>
                      </div>
                      <a
                        href={`https://wa.me/${op.whatsappContact.replace('+', '')}?text=${encodeURIComponent(
                          `Hello, I would like to inquire about visiting ${destination.titleEn} via Discover Libya.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-1.5 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400 border border-emerald-500/30 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                      >
                        <span>{t.whatsappContact}</span>
                      </a>
                    </div>
                  ))}
                </div>

                <Link
                  href="/logistics/verified-agencies"
                  className="block text-center text-xs text-amber-400 hover:underline pt-2 font-medium"
                >
                  {language === 'ar' ? 'عرض كافة الوكالات المعتمدة' : 'View all accredited operators'}
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
