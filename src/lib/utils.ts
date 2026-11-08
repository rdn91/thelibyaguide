import sightsData from '@/data/sights.json';
import logisticsData from '@/data/logistics.json';
import cuisineData from '@/data/cuisine.json';
import type { Category, Cuisine, Logistics, Region, Access, Sight } from './types';

export const sights = sightsData as Sight[];
export const logistics = logisticsData as Logistics;
export const cuisine = cuisineData as Cuisine;

export function getSight(slug: string): Sight | undefined {
  return sights.find((s) => s.slug === slug);
}

export function cn(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(' ');
}

export const REGION_LABELS: Record<Region, { en: string; ar: string }> = {
  tripolitania: { en: 'Tripolitania', ar: 'طرابلس' },
  cyrenaica: { en: 'Cyrenaica', ar: 'برقة' },
  fezzan: { en: 'Fezzan', ar: 'فزان' },
  nafusa: { en: 'Nafusa Mountains', ar: 'جبل نفوسة' },
};

export const CATEGORY_LABELS: Record<Category, { en: string; ar: string }> = {
  classical: { en: 'Roman & Greek classical', ar: 'آثار رومانية وإغريقية' },
  desert: { en: 'Desert & oasis', ar: 'صحراء وواحات' },
  mountains: { en: 'Mountains & valleys', ar: 'جبال ووديان' },
  coastal: { en: 'Coastal & urban', ar: 'ساحل ومدن' },
};

export const ACCESS_LABELS: Record<Access, { en: string; ar: string; detail: string }> = {
  'day-trip': {
    en: 'Day trip from a city',
    ar: 'رحلة يومية من المدينة',
    detail: 'Reached in a day from Tripoli, Benghazi or Al Bayda. Foreign visitors still travel with their licensed guide.',
  },
  expedition: {
    en: 'Escorted expedition',
    ar: 'رحلة استكشافية بمرافقة',
    detail: 'Saharan corridor: extra desert permits, a multi-vehicle convoy and an experienced local crew.',
  },
};

export function formatDate(iso: string): string {
  return new Date(iso + 'T00:00:00Z').toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  });
}

export function formatCoords({ lat, lng }: { lat: number; lng: number }): string {
  const ns = lat >= 0 ? 'N' : 'S';
  const ew = lng >= 0 ? 'E' : 'W';
  return `${Math.abs(lat).toFixed(4)}° ${ns}, ${Math.abs(lng).toFixed(4)}° ${ew}`;
}
