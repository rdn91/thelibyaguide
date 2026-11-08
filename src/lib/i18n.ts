import type { Lang } from './types';

const en = {
  nav: {
    destinations: 'Destinations',
    reality: 'Reality Index',
    logistics: 'Visa & Logistics',
    taste: 'Taste & Culture',
    local: 'Local Weekends',
  },
  mode: {
    visitor: 'Tourist',
    resident: 'Local',
    label: 'Show the guide for',
    visitorOn: 'Tourist view: safety, visas and sights first.',
    residentOn: 'Local view: weekend trips first.',
    openLocal: 'Open Local Weekends',
  },
  hero: {
    title: "The Mediterranean's most misunderstood coast",
    sub: 'Five World Heritage Sites with few other visitors, seen in small groups with a licensed operator and a police escort, on routes that can change or be cancelled at short notice.',
    residentTitle: 'Your country, one weekend at a time',
    residentSub: 'Day trips, Friday lunches and the souqs worth the drive — from Tripoli, Benghazi and the mountains.',
    explore: 'Explore 30 sights',
    safe: 'Is Libya safe?',
    visa: 'Visa & logistics',
    weekends: 'Plan a weekend',
    advisories: 'All major Western advisories are at their highest level. US Level 4, reaffirmed',
    reviewed: 'Facts reviewed',
  },
  quick: {
    label: 'Select your passport',
    cta: 'Check visa and routes',
  },
  filters: {
    search: 'Search sights',
    region: 'Region',
    category: 'Category',
    access: 'Access',
    all: 'All',
    results: 'sights',
    ideas: 'ideas',
    type: 'Type',
    clear: 'Clear filters',
    empty: 'No sights match those filters.',
  },
  lang: 'العربية',
};

export type Dict = typeof en;

const ar: Dict = {
  nav: {
    destinations: 'الوجهات',
    reality: 'مؤشر الواقع',
    logistics: 'التأشيرة والتنقل',
    taste: 'المذاق والثقافة',
    local: 'عطلات محلية',
  },
  mode: {
    visitor: 'سائح',
    resident: 'محلي',
    label: 'اعرض الدليل لـ',
    visitorOn: 'عرض السائح: الأمان والتأشيرة والمواقع أولاً.',
    residentOn: 'العرض المحلي: رحلات العطلة أولاً.',
    openLocal: 'افتح العطلات المحلية',
  },
  hero: {
    title: 'الساحل الأكثر سوء فهم في المتوسط',
    sub: 'خمسة مواقع للتراث العالمي وزوارها قليلون، تُزار في مجموعات صغيرة مع منظم رحلات مرخص ومرافقة من الشرطة، على مسارات قد تتغير أو تُلغى دون إنذار مسبق.',
    residentTitle: 'بلادك، عطلة بعد عطلة',
    residentSub: 'رحلات يومية، وغداء الجمعة، وأسواق تستحق المشوار — من طرابلس وبنغازي والجبل.',
    explore: 'استكشف 30 موقعاً',
    safe: 'هل ليبيا آمنة؟',
    visa: 'التأشيرة والتنقل',
    weekends: 'خطط لعطلتك',
    advisories: 'جميع التحذيرات الغربية الرئيسية في أعلى مستوياتها. المستوى 4 الأمريكي، أُعيد تأكيده في',
    reviewed: 'آخر مراجعة للمعلومات',
  },
  quick: {
    label: 'اختر جواز سفرك',
    cta: 'تحقق من التأشيرة والمسارات',
  },
  filters: {
    search: 'ابحث عن موقع',
    region: 'الإقليم',
    category: 'الفئة',
    access: 'الوصول',
    all: 'الكل',
    results: 'موقعاً',
    ideas: 'فكرة',
    type: 'النوع',
    clear: 'مسح التصفية',
    empty: 'لا توجد مواقع مطابقة.',
  },
  lang: 'English',
};

export function getDict(lang: Lang): Dict {
  return lang === 'ar' ? ar : en;
}
