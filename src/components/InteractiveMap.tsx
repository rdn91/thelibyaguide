'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import type { Map as LeafletMap, Marker as LeafletMarker } from 'leaflet';
import { Destination, DestinationCategory } from '@/types';
import { useLanguage } from '@/context/LanguageContext';
import { Compass } from 'lucide-react';

interface InteractiveMapProps {
  destinations: Destination[];
  selectedCategory?: DestinationCategory | 'all';
  onSelectDestination?: (dest: Destination) => void;
  className?: string;
}

export default function InteractiveMap({
  destinations,
  selectedCategory = 'all',
  className = 'h-[550px]'
}: InteractiveMapProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<LeafletMap | null>(null);
  const markersRef = useRef<LeafletMarker[]>([]);
  const { language, isRtl } = useLanguage();
  const [filterCategory, setFilterCategory] = useState<DestinationCategory | 'all'>(selectedCategory);

  const filteredDestinations = filterCategory === 'all'
    ? destinations
    : destinations.filter((d) => d.category === filterCategory);

  const renderMarkers = useCallback((L: typeof import('leaflet'), map: LeafletMap) => {
    // Clear old markers
    markersRef.current.forEach((m) => m.remove());
    markersRef.current = [];

    const bounds = L.latLngBounds([]);

    filteredDestinations.forEach((dest) => {
      const title = language === 'ar' ? dest.titleAr : dest.titleEn;
      const city = language === 'ar' ? dest.cityAr : dest.city;
      const crowdMetric = language === 'ar' ? dest.crowdMetricAr : dest.crowdMetricEn;

      // Color code by category
      let markerColor = '#f59e0b'; // amber
      if (dest.category === 'unesco') markerColor = '#d97706'; // deep amber/gold
      if (dest.category === 'beach') markerColor = '#0284c7'; // ocean blue
      if (dest.category === 'mountain') markerColor = '#10b981'; // emerald
      if (dest.category === 'oasis') markerColor = '#e11d48'; // crimson rose
      if (dest.category === 'cafe') markerColor = '#8b5cf6'; // purple

      const customIcon = L.divIcon({
        className: 'custom-leaflet-marker',
        html: `
          <div style="
            background: ${markerColor};
            width: 32px;
            height: 32px;
            border-radius: 50% 50% 50% 0;
            transform: rotate(-45deg);
            display: flex;
            align-items: center;
            justify-content: center;
            border: 2px solid #ffffff;
            box-shadow: 0 4px 12px rgba(0,0,0,0.5);
            cursor: pointer;
            transition: transform 0.2s;
          ">
            <div style="
              width: 10px;
              height: 10px;
              background: #ffffff;
              border-radius: 50%;
            "></div>
          </div>
        `,
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32]
      });

      const marker = L.marker([dest.coordinates.lat, dest.coordinates.lng], { icon: customIcon }).addTo(map);

      // Popup Content
      const popupHtml = `
        <div style="min-width: 220px; font-family: system-ui, sans-serif; padding: 2px;" dir="${isRtl ? 'rtl' : 'ltr'}">
          <img src="${dest.featuredImage}" alt="${title}" style="width: 100%; height: 110px; object-fit: cover; border-radius: 8px; margin-bottom: 8px;" />
          <div style="font-weight: bold; font-size: 14px; margin-bottom: 4px; color: #ffffff;">${title}</div>
          <div style="font-size: 11px; color: #fbbf24; margin-bottom: 6px; display: flex; align-items: center; gap: 4px;">
            <span>📍 ${city}</span>
          </div>
          ${crowdMetric ? `<div style="font-size: 10px; background: rgba(245, 158, 11, 0.15); color: #fde68a; padding: 4px 6px; border-radius: 6px; margin-bottom: 8px; border: 1px solid rgba(245, 158, 11, 0.3);">${crowdMetric}</div>` : ''}
          <a href="/destinations/${dest.slug}" style="display: block; text-align: center; background: #f59e0b; color: #0f172a; padding: 6px 10px; border-radius: 6px; font-weight: bold; font-size: 11px; text-decoration: none;">
            ${language === 'ar' ? 'عرض تفاصيل الوجهة' : 'View Destination'}
          </a>
        </div>
      `;

      marker.bindPopup(popupHtml);
      markersRef.current.push(marker);
      bounds.extend([dest.coordinates.lat, dest.coordinates.lng]);
    });

    if (filteredDestinations.length > 0) {
      map.fitBounds(bounds, { padding: [50, 50], maxZoom: 8 });
    }
  }, [filteredDestinations, isRtl, language]);

  useEffect(() => {
    async function initMap() {
      if (typeof window === 'undefined' || !mapContainerRef.current) return;
      const L = (await import('leaflet')).default;

      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }

      const map = L.map(mapContainerRef.current, {
        center: [29.5, 17.0],
        zoom: 6,
        minZoom: 5,
        maxZoom: 14,
        zoomControl: false
      });

      L.control.zoom({ position: isRtl ? 'topleft' : 'topright' }).addTo(map);

      L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://carto.com/">CARTO</a> &copy; OpenStreetMap',
        maxZoom: 19
      }).addTo(map);

      mapInstanceRef.current = map;
      renderMarkers(L, map);
    }

    initMap();

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [isRtl, renderMarkers]);

  useEffect(() => {
    if (mapInstanceRef.current && typeof window !== 'undefined') {
      import('leaflet').then((module) => {
        const L = module.default;
        if (mapInstanceRef.current) {
          renderMarkers(L, mapInstanceRef.current);
        }
      });
    }
  }, [renderMarkers]);

  const categories: Array<{ key: DestinationCategory | 'all'; labelEn: string; labelAr: string }> = [
    { key: 'all', labelEn: 'All Landmarks', labelAr: 'كافة المعالم' },
    { key: 'unesco', labelEn: 'UNESCO Sites', labelAr: 'مواقع اليونسكو' },
    { key: 'mountain', labelEn: 'Nafusa Mountains', labelAr: 'جبل نفوسة' },
    { key: 'beach', labelEn: 'Mediterranean Coast', labelAr: 'الساحل والشواطئ' },
    { key: 'oasis', labelEn: 'Sahara & Oases', labelAr: 'الصحراء والواحات' },
    { key: 'cafe', labelEn: 'Specialty Cafes', labelAr: 'القهوة والمدن' },
  ];

  return (
    <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900">
      {/* Category Filter Pills Bar */}
      <div className="p-4 bg-slate-950/80 backdrop-blur-md border-b border-white/10 flex items-center justify-between gap-4 overflow-x-auto">
        <div className="flex items-center gap-2">
          <Compass className="w-4 h-4 text-amber-400 shrink-0" />
          <span className="text-xs font-bold text-slate-300 shrink-0">
            {language === 'ar' ? 'تصفية الخريطة:' : 'Filter Map:'}
          </span>
        </div>
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setFilterCategory(cat.key)}
              className={`text-xs font-medium px-3 py-1.5 rounded-full transition-all shrink-0 cursor-pointer ${
                filterCategory === cat.key
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                  : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/5'
              }`}
            >
              {language === 'ar' ? cat.labelAr : cat.labelEn}
            </button>
          ))}
        </div>
      </div>

      {/* Map Container */}
      <div ref={mapContainerRef} className={`w-full ${className} z-10`} />

      {/* Map Legend Overlay */}
      <div className="absolute bottom-4 start-4 z-20 bg-slate-950/90 backdrop-blur-md border border-white/10 p-3 rounded-xl text-[11px] text-slate-300 space-y-1.5 shadow-xl hidden md:block">
        <div className="font-bold text-white mb-1">
          {language === 'ar' ? 'دليل الخريطة الجغرافية' : 'Geographic Legend'}
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-600"></span>
          <span>{language === 'ar' ? 'مواقع التراث العالمي (اليونسكو)' : 'UNESCO World Heritage'}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-sky-500"></span>
          <span>{language === 'ar' ? 'السواحل والجزر والمحميات' : 'Beaches, Islands & Coast'}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
          <span>{language === 'ar' ? 'المرتفعات وجبال نفوسة' : 'Nafusa Mountain Escarpment'}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
          <span>{language === 'ar' ? 'الواحات وبحيرات الصحراء' : 'Sahara Oases & Lakes'}</span>
        </div>
      </div>
    </div>
  );
}
