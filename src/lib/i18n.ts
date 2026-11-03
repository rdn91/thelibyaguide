import type { Lang } from './types';

const dict = {
  en: {
    nav: {
      destinations: 'Destinations',
      reality: 'Reality Index',
      logistics: 'Visa & Logistics',
      taste: 'Taste & Culture',
      local: 'Local Weekends',
    },
    mode: { visitor: 'Visitor', resident: 'Resident' },
    hero: {
      eyebrow: 'Libya · Mediterranean & Sahara',
      title: "The Mediterranean's Most Misunderstood Coast.",
      sub: 'Beyond the headlines. World-heritage wonders you can have completely to yourself, navigated through verified, escorted corridors.',
      residentTitle: 'Your country, one weekend at a time.',
      residentSub: 'Day trips, Friday lunches and the souqs worth the drive — from Tripoli, Benghazi and the mountains.',
      explore: 'Explore 30 sights',
      reality: 'Read the Reality Index',
      weekends: 'Plan a weekend',
    },
    quick: {
      label: 'Select your passport',
      cta: 'Visa & route protocol',
    },
    filters: {
      search: 'Search sights',
      region: 'Region',
      category: 'Category',
      access: 'Access',
      all: 'All',
      results: 'sights',
      clear: 'Clear filters',
      empty: 'No sights match those filters.',
    },
    lang: 'العربية',
  },
  ar: {
    nav: {
      destinations: 'الوجهات',
      reality: 'مؤشر الواقع',
      logistics: 'التأشيرة والتنقل',
      taste: 'المذاق والثقافة',
      local: 'عطلات محلية',
    },
    mode: { visitor: 'زائر', resident: 'مقيم' },
    hero: {
      eyebrow: 'ليبيا · المتوسط والصحراء',
      title: 'الساحل الأكثر سوء فهم في المتوسط.',
      sub: 'ما وراء العناوين: مواقع تراث عالمي تستكشفها وحدك، عبر ممرات سياحية منظمة وبمرافقة مرخصة.',
      residentTitle: 'بلادك، عطلة بعد عطلة.',
      residentSub: 'رحلات يومية، وغداء الجمعة، وأسواق تستحق المشوار — من طرابلس وبنغازي والجبل.',
      explore: 'استكشف 30 موقعاً',
      reality: 'اقرأ مؤشر الواقع',
      weekends: 'خطط لعطلتك',
    },
    quick: {
      label: 'اختر جواز سفرك',
      cta: 'بروتوكول التأشيرة والمسار',
    },
    filters: {
      search: 'ابحث عن موقع',
      region: 'الإقليم',
      category: 'الفئة',
      access: 'الوصول',
      all: 'الكل',
      results: 'موقعاً',
      clear: 'مسح التصفية',
      empty: 'لا توجد مواقع مطابقة.',
    },
    lang: 'English',
  },
} as const;

export type Dict = (typeof dict)['en'];

export function getDict(lang: Lang): Dict {
  return dict[lang] as unknown as Dict;
}
