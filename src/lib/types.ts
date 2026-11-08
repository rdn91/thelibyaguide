export type Lang = 'en' | 'ar';
export type Mode = 'visitor' | 'resident';

export type Region = 'tripolitania' | 'cyrenaica' | 'fezzan' | 'nafusa';
export type Category = 'classical' | 'desert' | 'mountains' | 'coastal';
export type Access = 'day-trip' | 'expedition';

export interface ImageCredit {
  src: string;
  width: number;
  height: number;
  author: string;
  license: string;
  licenseUrl: string | null;
  sourceUrl: string;
  caption?: string;
}

export interface Sight {
  slug: string;
  nameEn: string;
  nameAr: string;
  region: Region;
  category: Category;
  access: Access;
  city: string;
  cityAr: string;
  coordinates: { lat: number; lng: number };
  era: string | null;
  summaryEn: string;
  summaryAr: string;
  highlightsEn: string[];
  highlightsAr: string[];
  bestSeasonEn: string;
  bestSeasonAr: string;
  distanceEn: string | null;
  distanceAr: string | null;
  unesco: boolean;
  wikipedia: string | null;
  image: ImageCredit | null;
}

export type StatusLevel = 'operating' | 'check' | 'closed';

export interface StatusItem {
  id: string;
  name: string;
  code: string;
  kind: 'airport' | 'border' | 'road' | 'visa';
  status: StatusLevel;
  note: string;
  lastVerified: string | null;
}

interface Advisory {
  id: string;
  issuer: string;
  rating: string;
  summary: string;
  consular: string;
  url: string;
  asOf: string;
}

interface VerifyLink {
  label: string;
  url?: string;
}

export interface RealityRow {
  id: string;
  topic: string;
  advisory: string;
  ground: string;
  verify: VerifyLink[];
}

interface CorridorTier {
  tier: 'A' | 'B' | 'C';
  name: string;
  badge: string;
  tone: 'open' | 'permit' | 'closed';
  covers: string[];
  rules: string[];
}

export interface CorridorRoute {
  id: string;
  tier: 'A' | 'B' | 'air';
  label: string;
  points: [number, number][];
}

interface Passport {
  id: string;
  label: string;
  advisory: string | null;
  note: string;
  blocked?: boolean;
}

export interface Logistics {
  lastEditorialReview: string;
  advisories: Advisory[];
  realityIndex: RealityRow[];
  heritageFact: { label: string; url: string };
  statusBoard: StatusItem[];
  visa: {
    portal: string;
    requirements: string[];
    steps: { title: string; body: string }[];
    caveat: string;
  };
  corridor: CorridorTier[];
  routes: CorridorRoute[];
  operatorChecklist: string[];
  passports: Passport[];
}

interface Dish {
  id: string;
  nameEn: string;
  nameAr: string;
  originEn: string;
  category: string;
  descriptionEn: string;
  loreEn: string;
  ingredientsEn: string[];
  eatingProtocolEn: string;
  spiciness: number;
  image: ImageCredit | null;
}

export interface Cuisine {
  dishes: Dish[];
  tea: { title: string; body: string };
  etiquette: { title: string; body: string }[];
  whereToEat: { type: string; label: string; body: string }[];
  local: {
    weekendIdeas: { title: string; sights: string[]; from: string; drive: string; body: string }[];
    marketClusters: { city: string; name: string; find: string[]; body: string }[];
  };
}
