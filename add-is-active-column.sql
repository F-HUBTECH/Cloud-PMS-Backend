-- Add is_active column to all master data tables
-- Run this script to update your database schema

-- Hotel table
ALTER TABLE public.mst_hotel 
ADD COLUMN IF NOT EXISTS is_active BOOLEAN DEFAULT true;

-- Master Data tables in mdm schema
ALTER TABLE mdm.mst_abf_type 
ADD COLUMN IF NOT EXISTS is_active BOOLEAN DEFAULT true;

ALTER TABLE mdm.mst_bed_type 
ADD COLUMN IF NOT EXISTS is_active BOOLEAN DEFAULT true;

ALTER TABLE mdm.mst_building 
ADD COLUMN IF NOT EXISTS is_active BOOLEAN DEFAULT true;

ALTER TABLE mdm.mst_channel 
ADD COLUMN IF NOT EXISTS is_active BOOLEAN DEFAULT true;

ALTER TABLE mdm.mst_company 
ADD COLUMN IF NOT EXISTS is_active BOOLEAN DEFAULT true;

ALTER TABLE mdm.mst_country 
ADD COLUMN IF NOT EXISTS is_active BOOLEAN DEFAULT true;

ALTER TABLE mdm.mst_department 
ADD COLUMN IF NOT EXISTS is_active BOOLEAN DEFAULT true;

ALTER TABLE mdm.mst_floor 
ADD COLUMN IF NOT EXISTS is_active BOOLEAN DEFAULT true;

ALTER TABLE mdm.mst_guest_type 
ADD COLUMN IF NOT EXISTS is_active BOOLEAN DEFAULT true;

ALTER TABLE mdm.mst_market 
ADD COLUMN IF NOT EXISTS is_active BOOLEAN DEFAULT true;

ALTER TABLE mdm.mst_nationality 
ADD COLUMN IF NOT EXISTS is_active BOOLEAN DEFAULT true;

ALTER TABLE mdm.mst_rate_detail 
ADD COLUMN IF NOT EXISTS is_active BOOLEAN DEFAULT true;

ALTER TABLE mdm.mst_rate_master 
ADD COLUMN IF NOT EXISTS is_active BOOLEAN DEFAULT true;

ALTER TABLE mdm.mst_room_status 
ADD COLUMN IF NOT EXISTS is_active BOOLEAN DEFAULT true;

ALTER TABLE mdm.mst_room_type 
ADD COLUMN IF NOT EXISTS is_active BOOLEAN DEFAULT true;

ALTER TABLE mdm.mst_room_view 
ADD COLUMN IF NOT EXISTS is_active BOOLEAN DEFAULT true;

ALTER TABLE mdm.mst_title 
ADD COLUMN IF NOT EXISTS is_active BOOLEAN DEFAULT true;

ALTER TABLE mdm.mst_trans_code 
ADD COLUMN IF NOT EXISTS is_active BOOLEAN DEFAULT true;

ALTER TABLE mdm.mst_vip_type 
ADD COLUMN IF NOT EXISTS is_active BOOLEAN DEFAULT true;

-- Update existing records to set is_active = true
UPDATE public.mst_hotel SET is_active = true WHERE is_active IS NULL;
UPDATE mdm.mst_abf_type SET is_active = true WHERE is_active IS NULL;
UPDATE mdm.mst_bed_type SET is_active = true WHERE is_active IS NULL;
UPDATE mdm.mst_building SET is_active = true WHERE is_active IS NULL;
UPDATE mdm.mst_channel SET is_active = true WHERE is_active IS NULL;
UPDATE mdm.mst_company SET is_active = true WHERE is_active IS NULL;
UPDATE mdm.mst_country SET is_active = true WHERE is_active IS NULL;
UPDATE mdm.mst_department SET is_active = true WHERE is_active IS NULL;
UPDATE mdm.mst_floor SET is_active = true WHERE is_active IS NULL;
UPDATE mdm.mst_guest_type SET is_active = true WHERE is_active IS NULL;
UPDATE mdm.mst_market SET is_active = true WHERE is_active IS NULL;
UPDATE mdm.mst_nationality SET is_active = true WHERE is_active IS NULL;
UPDATE mdm.mst_rate_detail SET is_active = true WHERE is_active IS NULL;
UPDATE mdm.mst_rate_master SET is_active = true WHERE is_active IS NULL;
UPDATE mdm.mst_room_status SET is_active = true WHERE is_active IS NULL;
UPDATE mdm.mst_room_type SET is_active = true WHERE is_active IS NULL;
UPDATE mdm.mst_room_view SET is_active = true WHERE is_active IS NULL;
UPDATE mdm.mst_title SET is_active = true WHERE is_active IS NULL;
UPDATE mdm.mst_trans_code SET is_active = true WHERE is_active IS NULL;
UPDATE mdm.mst_vip_type SET is_active = true WHERE is_active IS NULL;

-- Verify the changes
SELECT 'mst_hotel' as table_name, COUNT(*) as total_records, 
       SUM(CASE WHEN is_active = true THEN 1 ELSE 0 END) as active_records
FROM public.mst_hotel
UNION ALL
SELECT 'mst_abf_type', COUNT(*), SUM(CASE WHEN is_active = true THEN 1 ELSE 0 END) FROM mdm.mst_abf_type
UNION ALL
SELECT 'mst_bed_type', COUNT(*), SUM(CASE WHEN is_active = true THEN 1 ELSE 0 END) FROM mdm.mst_bed_type
UNION ALL
SELECT 'mst_building', COUNT(*), SUM(CASE WHEN is_active = true THEN 1 ELSE 0 END) FROM mdm.mst_building
UNION ALL
SELECT 'mst_channel', COUNT(*), SUM(CASE WHEN is_active = true THEN 1 ELSE 0 END) FROM mdm.mst_channel
UNION ALL
SELECT 'mst_company', COUNT(*), SUM(CASE WHEN is_active = true THEN 1 ELSE 0 END) FROM mdm.mst_company
UNION ALL
SELECT 'mst_country', COUNT(*), SUM(CASE WHEN is_active = true THEN 1 ELSE 0 END) FROM mdm.mst_country
UNION ALL
SELECT 'mst_department', COUNT(*), SUM(CASE WHEN is_active = true THEN 1 ELSE 0 END) FROM mdm.mst_department
UNION ALL
SELECT 'mst_floor', COUNT(*), SUM(CASE WHEN is_active = true THEN 1 ELSE 0 END) FROM mdm.mst_floor
UNION ALL
SELECT 'mst_guest_type', COUNT(*), SUM(CASE WHEN is_active = true THEN 1 ELSE 0 END) FROM mdm.mst_guest_type
UNION ALL
SELECT 'mst_market', COUNT(*), SUM(CASE WHEN is_active = true THEN 1 ELSE 0 END) FROM mdm.mst_market
UNION ALL
SELECT 'mst_nationality', COUNT(*), SUM(CASE WHEN is_active = true THEN 1 ELSE 0 END) FROM mdm.mst_nationality
UNION ALL
SELECT 'mst_rate_detail', COUNT(*), SUM(CASE WHEN is_active = true THEN 1 ELSE 0 END) FROM mdm.mst_rate_detail
UNION ALL
SELECT 'mst_rate_master', COUNT(*), SUM(CASE WHEN is_active = true THEN 1 ELSE 0 END) FROM mdm.mst_rate_master
UNION ALL
SELECT 'mst_room_status', COUNT(*), SUM(CASE WHEN is_active = true THEN 1 ELSE 0 END) FROM mdm.mst_room_status
UNION ALL
SELECT 'mst_room_type', COUNT(*), SUM(CASE WHEN is_active = true THEN 1 ELSE 0 END) FROM mdm.mst_room_type
UNION ALL
SELECT 'mst_room_view', COUNT(*), SUM(CASE WHEN is_active = true THEN 1 ELSE 0 END) FROM mdm.mst_room_view
UNION ALL
SELECT 'mst_title', COUNT(*), SUM(CASE WHEN is_active = true THEN 1 ELSE 0 END) FROM mdm.mst_title
UNION ALL
SELECT 'mst_trans_code', COUNT(*), SUM(CASE WHEN is_active = true THEN 1 ELSE 0 END) FROM mdm.mst_trans_code
UNION ALL
SELECT 'mst_vip_type', COUNT(*), SUM(CASE WHEN is_active = true THEN 1 ELSE 0 END) FROM mdm.mst_vip_type;
