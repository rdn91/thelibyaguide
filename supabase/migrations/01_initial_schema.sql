-- Supabase / PostgreSQL + PostGIS Schema for Discover Libya Platform
-- Reference: Section 5.2 of PRD

-- Enable PostGIS extension for spatial queries (radius search, distance calculations)
CREATE EXTENSION IF NOT EXISTS postgis;

-- 1. Destinations & Points of Interest
CREATE TABLE IF NOT EXISTS destinations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    slug VARCHAR(255) UNIQUE NOT NULL,
    title_en VARCHAR(255) NOT NULL,
    title_ar VARCHAR(255) NOT NULL,
    category VARCHAR(50) NOT NULL, -- 'unesco', 'beach', 'mountain', 'weekend_spot', 'cafe', 'oasis', 'heritage'
    region VARCHAR(50) NOT NULL,   -- 'tripolitania', 'cyrenaica', 'fezzan'
    coordinates GEOMETRY(Point, 4326),
    latitude NUMERIC(9, 6),
    longitude NUMERIC(9, 6),
    description_en TEXT NOT NULL,
    description_ar TEXT NOT NULL,
    historical_era VARCHAR(100),   -- 'Roman', 'Greek', 'Phoenician', 'Islamic/Ottoman', 'Berber', 'Prehistoric'
    safety_tier VARCHAR(30) DEFAULT 'agency_escorted', -- 'open_domestic', 'agency_escorted', 'permit_required'
    crowd_metric_en VARCHAR(255),  -- e.g. "99.4% fewer visitors than Pompeii"
    crowd_metric_ar VARCHAR(255),
    featured_image_url TEXT,
    gallery_urls TEXT[],
    practical_info JSONB DEFAULT '{}'::jsonb, -- admission, best hours, nearest fuel/medical/dining
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Spatial index for radius searches (e.g. destinations within X km of current location)
CREATE INDEX IF NOT EXISTS idx_destinations_geom ON destinations USING GIST(coordinates);
CREATE INDEX IF NOT EXISTS idx_destinations_region ON destinations(region);
CREATE INDEX IF NOT EXISTS idx_destinations_category ON destinations(category);

-- 2. Tour Operators & Agencies
CREATE TABLE IF NOT EXISTS operators (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name_en VARCHAR(255) NOT NULL,
    name_ar VARCHAR(255) NOT NULL,
    license_number VARCHAR(100) UNIQUE NOT NULL,
    website_url TEXT,
    whatsapp_contact VARCHAR(50) NOT NULL,
    phone_contact VARCHAR(50),
    email_contact VARCHAR(100),
    headquarters VARCHAR(100) NOT NULL,
    languages_supported TEXT[],
    operating_regions TEXT[],
    verified BOOLEAN DEFAULT false,
    rating NUMERIC(2, 1) DEFAULT 5.0,
    review_count INTEGER DEFAULT 0,
    specialties TEXT[],
    pricing_guidelines_en TEXT,
    pricing_guidelines_ar TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 3. Live Transit & Border Updates
CREATE TABLE IF NOT EXISTS live_status_logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    entry_point_name VARCHAR(100) NOT NULL, -- e.g., 'Mitiga Intl Airport (TIP)', 'Ras Ajdir Border', 'Benina Intl Airport (BEN)'
    type VARCHAR(50) NOT NULL,               -- 'airport', 'land_border', 'coastal_highway'
    status VARCHAR(50) NOT NULL,             -- 'operational', 'delayed', 'restricted', 'normal_transit'
    flights_active_today INTEGER DEFAULT 0,
    notes_en TEXT,
    notes_ar TEXT,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 4. Sample Seed Data
INSERT INTO live_status_logs (entry_point_name, type, status, flights_active_today, notes_en, notes_ar)
VALUES 
('Mitiga International Airport (TIP)', 'airport', 'operational', 38, 'Fully operational for international flights (Tunis, Istanbul, Cairo, Amman, Malta). Standard tourist LOI clearance active.', 'مطار معيتيقة الدولي يعمل بكامل طاقته للرحلات الدولية وقبول تأشيرات السياحة.'),
('Benina International Airport (BEN)', 'airport', 'operational', 24, 'Regular scheduled commercial flights from Cairo, Istanbul, Alexandria, and Amman. Expedited immigration for registered groups.', 'مطار بنينا الدولي يعمل بانتظام للرحلات القادمة من القاهرة وإسطنبول وعمان.'),
('Misrata International Airport (MRA)', 'airport', 'operational', 14, 'Commercial cargo and scheduled passenger flights to Turkey and Tunisia operational.', 'مطار مصراتة الدولي يعمل برحلات منتظمة إلى تركيا وتونس.'),
('Ras Ajdir Land Border (Tunisia)', 'land_border', 'operational', 0, 'Open for bilateral passenger transit. Passport translation into Arabic mandatory.', 'معبر رأس جدير الحدودي مفتوح للمسافرين مع اشتراط الترجمة العربية لجواز السفر.');
