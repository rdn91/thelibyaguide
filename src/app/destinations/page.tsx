'use client';

import React, { useState, useMemo } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { destinations } from '@/data/destinations';
import DestinationCard from '@/components/DestinationCard';
import InteractiveMap from '@/components/InteractiveMap';
import { DestinationCategory, Region } from '@/types';
import { Search, Map, LayoutGrid, Compass, Filter } from 'lucide-react';

export default function DestinationsPage() {
  const { language, t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<DestinationCategory | 'all'>('all');
  const [selectedRegion, setSelectedRegion] = useState<Region | 'all'>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'map'>('grid');

  const categories: Array<{ key: DestinationCategory | 'all'; labelEn: string; labelAr: string }> = [
    { key: 'all', labelEn: 'All Categories', labelAr: 'الكل' },
    { key: 'unesco', labelEn: 'UNESCO World Heritage', labelAr: 'تراث اليونسكو' },
    { key: 'mountain', labelEn: 'Nafusa Mountains', labelAr: 'جبل نفوسة' },
    { key: 'beach', labelEn: 'Mediterranean Coast', labelAr: 'الساحل والشواطئ' },
    { key: 'oasis', labelEn: 'Sahara & Fezzan', labelAr: 'الصحراء وفزان' },
    { key: 'weekend_spot', labelEn: 'Weekend Spots', labelAr: 'عطلات نهاية الأسبوع' },
    { key: 'cafe', labelEn: 'Specialty Cafes & Food', labelAr: 'القهوة والمأكولات' }
  ];

  const regions: Array<{ key: Region | 'all'; labelEn: string; labelAr: string }> = [
    { key: 'all', labelEn: 'All Regions', labelAr: 'كافة الأقاليم' },
    { key: 'tripolitania', labelEn: 'Tripolitania (West)', labelAr: 'طرابلس والغرب' },
    { key: 'cyrenaica', labelEn: 'Cyrenaica (East)', labelAr: 'برقة والشرق' },
    { key: 'fezzan', labelEn: 'Fezzan (South)', labelAr: 'فزان والجنوب' }
  ];

  const filteredDestinations = useMemo(() => {
    return destinations.filter((dest) => {
      // Category filter
      if (selectedCategory !== 'all' && dest.category !== selectedCategory) {
        return false;
      }
      // Region filter
      if (selectedRegion !== 'all' && dest.region !== selectedRegion) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesEn =
          dest.titleEn.toLowerCase().includes(query) ||
          dest.descriptionEn.toLowerCase().includes(query) ||
          dest.city.toLowerCase().includes(query) ||
          dest.tags.some((tag) => tag.toLowerCase().includes(query));
        const matchesAr =
          dest.titleAr.includes(query) ||
          dest.descriptionAr.includes(query) ||
          dest.cityAr.includes(query);
        return matchesEn || matchesAr;
      }
      return true;
    });
  }, [selectedCategory, selectedRegion, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Page Header */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold">
          <Compass className="w-4 h-4" />
          <span>{language === 'ar' ? 'فهرس الوجهات والمعالم' : 'Directory & Interactive Atlas'}</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          {language === 'ar' ? 'استكشف كنوز ليبيا التاريخية والطبيعية' : 'Discover Libya’s Landmarks & Hidden Gems'}
        </h1>
        <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
          {language === 'ar'
            ? 'دليل جغرافي وتاريخي موثق يجمع مواقع اليونسكو الخمسة، ومدن الساحل الفيروزي، وقرى جبل نفوسة المعلقة، وبحيرات الصحراء الكبرى.'
            : 'A verified database of ancient Roman metropolises, Hellenic temples, troglodyte caves, azure Mediterranean coastlines, and pristine Saharan desert lakes.'}
        </p>
      </div>

      {/* Filter and Search Controls */}
      <div className="p-6 rounded-3xl bg-slate-900/90 border border-white/10 space-y-6 shadow-xl backdrop-blur-md">
        {/* Top row: Search input + View mode toggle */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute start-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={
                language === 'ar'
                  ? 'ابحث باسم المعلم، المدينة، أو الحقبة (مثال: لبدة، غريان، رومان...)'
                  : 'Search destinations by name, city, or era (e.g. Leptis, Sabratha, Roman...)'
              }
              className="w-full ps-11 pe-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-amber-400 transition-colors"
            />
          </div>

          {/* Grid vs Map View Toggle */}
          <div className="flex items-center gap-1 p-1 rounded-xl bg-slate-950 border border-white/10 shrink-0 self-end sm:self-auto">
            <button
              onClick={() => setViewMode('grid')}
              className={`px-3 py-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                viewMode === 'grid'
                  ? 'bg-amber-500 text-slate-950 shadow-md font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <LayoutGrid className="w-4 h-4" />
              <span>{t.closeMap}</span>
            </button>
            <button
              onClick={() => setViewMode('map')}
              className={`px-3 py-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                viewMode === 'map'
                  ? 'bg-amber-500 text-slate-950 shadow-md font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Map className="w-4 h-4" />
              <span>{t.openMap}</span>
            </button>
          </div>
        </div>

        {/* Categories Row */}
        <div className="space-y-2">
          <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
            <Filter className="w-3 h-3" />
            <span>{language === 'ar' ? 'الفئات:' : 'Categories:'}</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`text-xs px-3.5 py-1.5 rounded-full transition-all cursor-pointer ${
                  selectedCategory === cat.key
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-md'
                    : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/5'
                }`}
              >
                {language === 'ar' ? cat.labelAr : cat.labelEn}
              </button>
            ))}
          </div>
        </div>

        {/* Regions Row */}
        <div className="space-y-2 pt-2 border-t border-white/5">
          <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
            {language === 'ar' ? 'الإقليم الجغرافي:' : 'Geographic Region:'}
          </div>
          <div className="flex flex-wrap gap-1.5">
            {regions.map((reg) => (
              <button
                key={reg.key}
                onClick={() => setSelectedRegion(reg.key)}
                className={`text-xs px-3 py-1 rounded-lg transition-all cursor-pointer ${
                  selectedRegion === reg.key
                    ? 'bg-white/15 text-amber-300 border border-amber-400/40 font-bold'
                    : 'bg-white/5 text-slate-400 hover:text-slate-200 border border-white/5'
                }`}
              >
                {language === 'ar' ? reg.labelAr : reg.labelEn}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results Count Bar */}
      <div className="flex items-center justify-between text-xs text-slate-400 px-2">
        <span>
          {language === 'ar'
            ? `عرض ${filteredDestinations.length} من أصل ${destinations.length} معلم`
            : `Showing ${filteredDestinations.length} of ${destinations.length} destinations`}
        </span>
      </div>

      {/* Render View: Grid or Full Map */}
      {viewMode === 'map' ? (
        <div className="space-y-4">
          <InteractiveMap destinations={filteredDestinations} className="h-[650px]" />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDestinations.map((dest) => (
            <DestinationCard key={dest.id} destination={dest} />
          ))}
        </div>
      )}

      {filteredDestinations.length === 0 && (
        <div className="p-12 text-center rounded-3xl bg-slate-900 border border-white/10 space-y-4">
          <Compass className="w-12 h-12 text-slate-600 mx-auto" />
          <h3 className="text-lg font-bold text-white">
            {language === 'ar' ? 'لم يتم العثور على نتائج مطابقة' : 'No destinations found'}
          </h3>
          <p className="text-xs text-slate-400">
            {language === 'ar'
              ? 'يرجى تجربة كلمات بحث أخرى أو تغيير تصفية الفئات.'
              : 'Try adjusting your search terms or clearing category filters.'}
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
              setSelectedRegion('all');
            }}
            className="px-4 py-2 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs"
          >
            {language === 'ar' ? 'إعادة ضبط التصفية' : 'Reset All Filters'}
          </button>
        </div>
      )}
    </div>
  );
}
