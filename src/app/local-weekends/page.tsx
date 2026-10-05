'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { itineraries } from '@/data/itineraries';
import { destinations } from '@/data/destinations';
import DestinationCard from '@/components/DestinationCard';
import { 
  Calendar, 
  Coffee, 
  Waves, 
  Mountain, 
  UtensilsCrossed, 
  Route 
} from 'lucide-react';

export default function LocalWeekendsPage() {
  const { language, t } = useLanguage();
  const [selectedCity, setSelectedCity] = useState<string>('all');
  const [selectedItineraryId, setSelectedItineraryId] = useState<string>(itineraries[0].id);

  const cities = [
    { key: 'all', labelEn: 'All Cities', labelAr: 'كافة المدن' },
    { key: 'Tripoli', labelEn: 'Tripoli', labelAr: 'طرابلس' },
    { key: 'Benghazi', labelEn: 'Benghazi', labelAr: 'بنغازي' },
    { key: 'Zuwara', labelEn: 'Zuwara (Farwa)', labelAr: 'زوارة (فروة)' },
    { key: 'Gharyan', labelEn: 'Gharyan (Jebel)', labelAr: 'غريان (الجبل)' },
    { key: 'Al Khums', labelEn: 'Al Khums', labelAr: 'الخمس' },
  ];

  const domesticDestinations = destinations.filter((d) => {
    if (selectedCity === 'all') return true;
    return d.city.toLowerCase() === selectedCity.toLowerCase();
  });

  const activeItinerary = itineraries.find((it) => it.id === selectedItineraryId) || itineraries[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Page Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold">
          <Calendar className="w-4 h-4" />
          <span>{language === 'ar' ? 'المنصة المحلية لعطلة نهاية الأسبوع' : 'Domestic Weekend Navigator'}</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          {t.weekendsTitle}
        </h1>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          {t.weekendsSubtitle}
        </p>
      </div>

      {/* CURATED WEEKEND ITINERARY GENERATOR SECTION */}
      <section className="space-y-6">
        <div className="border-b border-white/10 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 uppercase tracking-wider">
              <Route className="w-3.5 h-3.5" />
              <span>{language === 'ar' ? 'مسارات مجهزة خطوة بخطوة' : 'Hour-by-Hour Trip Generators'}</span>
            </div>
            <h2 className="text-2xl font-bold text-white mt-1">
              {t.curatedItineraries}
            </h2>
          </div>

          {/* Itinerary Selectors */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0">
            {itineraries.map((it) => (
              <button
                key={it.id}
                onClick={() => setSelectedItineraryId(it.id)}
                className={`text-xs px-3.5 py-2 rounded-xl font-bold shrink-0 transition-all cursor-pointer ${
                  selectedItineraryId === it.id
                    ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                    : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/5'
                }`}
              >
                {it.duration} • {language === 'ar' ? it.titleAr.split(':')[0] : it.titleEn.split(':')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Itinerary Card */}
        <div className="rounded-3xl bg-slate-900 border border-white/15 overflow-hidden shadow-2xl">
          <div className="relative aspect-[21/9] sm:aspect-[24/8] bg-slate-950 overflow-hidden">
            <img
              src={activeItinerary.coverImage}
              alt={activeItinerary.titleEn}
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
            <div className="absolute bottom-6 start-6 end-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-bold px-2.5 py-1 rounded bg-amber-500 text-slate-950 uppercase tracking-wider">
                  {activeItinerary.duration} ROAD TRIP • {activeItinerary.distanceKm} KM
                </span>
                <h3 className="text-xl sm:text-3xl font-extrabold text-white mt-2 drop-shadow-md">
                  {language === 'ar' ? activeItinerary.titleAr : activeItinerary.titleEn}
                </h3>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {language === 'ar' ? activeItinerary.descriptionAr : activeItinerary.descriptionEn}
            </p>

            {/* Timeline Stops */}
            <div className="space-y-4 pt-4 border-t border-white/10">
              <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                {language === 'ar' ? 'الجدول الزمني والمحطات الميدانية:' : 'Timeline & Itinerary Stops:'}
              </h4>

              <div className="relative border-s border-amber-500/30 ms-4 space-y-6 ps-6">
                {activeItinerary.stops.map((stop, idx) => (
                  <div key={idx} className="relative group">
                    <span className="absolute -start-[31px] top-1 w-3.5 h-3.5 rounded-full bg-slate-900 border-2 border-amber-400 group-hover:scale-125 transition-transform" />
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                      <span className="text-xs font-bold text-amber-400 font-mono">
                        {stop.time}
                      </span>
                      <span className="text-[11px] text-slate-400 bg-white/5 px-2 py-0.5 rounded w-fit">
                        📍 {stop.location}
                      </span>
                    </div>
                    <h5 className="text-sm font-bold text-white mt-1">
                      {language === 'ar' ? stop.titleAr : stop.titleEn}
                    </h5>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      {language === 'ar' ? stop.descriptionAr : stop.descriptionEn}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FILTER BY CITY & DOMESTIC DESTINATIONS */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div>
            <h2 className="text-2xl font-bold text-white">
              {language === 'ar' ? 'وجهات نهاية الأسبوع حسب المدينة' : 'Weekend Spots by City'}
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              {language === 'ar'
                ? 'استكشف المقاهي، والأسواق البحرية، والشواطئ المناسبة للعائلات والشباب.'
                : 'Discover cafes, fresh seafood piers, beaches, and mountain walks.'}
            </p>
          </div>

          {/* City Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 sm:pb-0">
            {cities.map((city) => (
              <button
                key={city.key}
                onClick={() => setSelectedCity(city.key)}
                className={`text-xs px-3.5 py-1.5 rounded-lg transition-all cursor-pointer ${
                  selectedCity === city.key
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-md'
                    : 'bg-white/5 text-slate-400 hover:text-white border border-white/5'
                }`}
              >
                {language === 'ar' ? city.labelAr : city.labelEn}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {domesticDestinations.map((dest) => (
            <DestinationCard key={dest.id} destination={dest} />
          ))}
        </div>
      </section>

      {/* LOCAL ACTIVITY PILLARS */}
      <section className="p-8 rounded-3xl bg-slate-900 border border-white/10 space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl font-bold text-white">
            {language === 'ar' ? 'أنشطة وتجارب عطلة الأسبوع في ليبيا' : 'Top Weekend Activities Across Libya'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            {language === 'ar'
              ? 'تجارب فريدة تجمع بين الطبيعة البكر وعراقة المأكولات وثقافة القهوة.'
              : 'Diverse experiences combining untouched Mediterranean shores, mountain breezes, and artisanal gastronomy.'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-white/5 border border-white/5 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <Coffee className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-white">
              {language === 'ar' ? 'ثقافة القهوة المختصة' : 'Specialty Coffee Roasters'}
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              {language === 'ar'
                ? 'استمتع بأفضل محامص القهوة في حي الأندلس وقرقارش وشارع فينيسيا ببنغازي.'
                : 'Experience third-wave roasters, pour-overs, and Italian espresso culture in Tripoli and Benghazi.'}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white/5 border border-white/5 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center">
              <Waves className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-white">
              {language === 'ar' ? 'شاليهات وبحيرات الساحل' : 'Sea Chalets & Farwa Lagoons'}
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              {language === 'ar'
                ? 'قوارب العبور إلى جزيرة فروة، ومياه زوارة الفيروزية، وشواطئ تاجوراء والخمس.'
                : 'Boat shuttles across turquoise Farwa lagoons, turtle nesting sands, and seaside chalets in Zuwara.'}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white/5 border border-white/5 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <Mountain className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-white">
              {language === 'ar' ? 'صعود جبل نفوسة' : 'Nafusa Mountain Trails'}
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              {language === 'ar'
                ? 'عقبة غريان، وشراء الفخار اليدوي، وزيارة حواشين الحفر، ومطلات يفرن الجبلية.'
                : 'Ascend the Gharyan pass, explore 800-year-old Berber fortified granaries and clifftop cafes.'}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white/5 border border-white/5 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center">
              <UtensilsCrossed className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-white">
              {language === 'ar' ? 'أسواق السمك والمشاوي' : 'Harbor Seafood Feasts'}
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              {language === 'ar'
                ? 'تناول الوقار والشلبة والقراض الطازج المشوي على الفحم في باب البحر وميناء زوارة.'
                : 'Feast on charcoal-grilled fresh catch at Bab Al-Bahr harbor or fisherman piers in Zuwara.'}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
