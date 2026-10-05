export type Language = 'en' | 'ar';

export type DestinationCategory =
  | 'unesco'
  | 'beach'
  | 'mountain'
  | 'weekend_spot'
  | 'cafe'
  | 'oasis'
  | 'heritage';

export type Region = 'tripolitania' | 'cyrenaica' | 'fezzan';

export type SafetyTier = 'open_domestic' | 'agency_escorted' | 'permit_required';

export interface Destination {
  id: string;
  slug: string;
  titleEn: string;
  titleAr: string;
  category: DestinationCategory;
  region: Region;
  city: string;
  cityAr: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  descriptionEn: string;
  descriptionAr: string;
  historicalEra?: string;
  safetyTier: SafetyTier;
  crowdMetricEn?: string;
  crowdMetricAr?: string;
  featuredImage: string;
  gallery: string[];
  highlightsEn: string[];
  highlightsAr: string[];
  practicalInfo: {
    admissionHoursEn: string;
    admissionHoursAr: string;
    nearestFuel: string;
    nearestHospital: string;
    bestSeasonEn: string;
    bestSeasonAr: string;
    accessRoadStatusEn: string;
    accessRoadStatusAr: string;
    recommendedStayHours?: number;
  };
  tags: string[];
}

export interface Operator {
  id: string;
  nameEn: string;
  nameAr: string;
  licenseNumber: string;
  websiteUrl?: string;
  whatsappContact: string;
  phoneContact?: string;
  emailContact?: string;
  headquarters: string;
  languagesSupported: string[];
  operatingRegions: string[];
  verified: boolean;
  rating: number;
  reviewCount: number;
  specialties: string[];
  pricingGuidelinesEn: string;
  pricingGuidelinesAr: string;
  yearsActive: number;
  descriptionEn: string;
  descriptionAr: string;
}

export interface TransitStatusLog {
  id: string;
  entryPointNameEn: string;
  entryPointNameAr: string;
  type: 'airport' | 'land_border' | 'coastal_highway';
  status: 'operational' | 'delayed' | 'restricted' | 'normal_transit';
  flightsActiveToday?: number;
  notesEn: string;
  notesAr: string;
  updatedAt: string;
  code?: string;
}

export interface AdvisoryItem {
  id: string;
  foreignAdvisoryEn: string;
  foreignAdvisoryAr: string;
  sourceCountry: string;
  groundRealityEn: string;
  groundRealityAr: string;
  verificationSource: string;
  statusBadge: 'debunked' | 'contextualized' | 'verified_safe';
  riskMitigationEn: string;
  riskMitigationAr: string;
}

export interface CorridorZone {
  zoneNumber: 1 | 2 | 3;
  titleEn: string;
  titleAr: string;
  badgeEn: string;
  badgeAr: string;
  colorClass: string;
  descriptionEn: string;
  descriptionAr: string;
  coverageAreasEn: string[];
  coverageAreasAr: string[];
  rulesEn: string[];
  rulesAr: string[];
}

export interface ItineraryStop {
  time: string;
  titleEn: string;
  titleAr: string;
  descriptionEn: string;
  descriptionAr: string;
  location: string;
  category: string;
}

export interface Itinerary {
  id: string;
  titleEn: string;
  titleAr: string;
  duration: '24h' | '48h' | 'multi_day';
  targetPersona: 'domestic' | 'international' | 'both';
  region: Region | 'all';
  descriptionEn: string;
  descriptionAr: string;
  coverImage: string;
  distanceKm: number;
  stops: ItineraryStop[];
}
