-- PMS Database Schema
-- Schema: mdm (Master Data Management)

-- Create schema if not exists
CREATE SCHEMA IF NOT EXISTS mdm;

-- Set search path
SET search_path TO mdm, public;

-- Create update timestamp function
CREATE OR REPLACE FUNCTION mdm.fn_update_timestamp()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Users table (for authentication - in public schema)
CREATE TABLE IF NOT EXISTS public.users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    username VARCHAR(100) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT now() NOT NULL,
    updated_at TIMESTAMP DEFAULT now() NOT NULL
);

CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON public.users
    FOR EACH ROW EXECUTE FUNCTION mdm.fn_update_timestamp();

-- Hotel Master
CREATE TABLE IF NOT EXISTS mdm.mst_hotel (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    hotel_code VARCHAR(10) UNIQUE,
    hotel_name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT now(),
    updated_at TIMESTAMP DEFAULT now()
);

-- Building
CREATE TABLE IF NOT EXISTS mdm.mst_building (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    hotel_id UUID REFERENCES mdm.mst_hotel(id),
    building_name VARCHAR(100),
    created_at TIMESTAMP DEFAULT now(),
    updated_at TIMESTAMP DEFAULT now()
);

-- Floor
CREATE TABLE IF NOT EXISTS mdm.mst_floor (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    building_id UUID REFERENCES mdm.mst_building(id),
    floor_name VARCHAR(50),
    created_at TIMESTAMP DEFAULT now(),
    updated_at TIMESTAMP DEFAULT now()
);

-- Room Type
CREATE TABLE IF NOT EXISTS mdm.mst_room_type (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    hotel_id UUID REFERENCES mdm.mst_hotel(id),
    room_type_code VARCHAR(10) UNIQUE,
    room_type_name VARCHAR(100),
    created_at TIMESTAMP DEFAULT now(),
    updated_at TIMESTAMP DEFAULT now()
);

-- Bed Type
CREATE TABLE IF NOT EXISTS mdm.mst_bed_type (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    hotel_id UUID NOT NULL,
    bed_code VARCHAR(10),
    bed_name VARCHAR(100),
    created_at TIMESTAMP DEFAULT now() NOT NULL,
    updated_at TIMESTAMP DEFAULT now() NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_mst_bed_type_hotel_id ON mdm.mst_bed_type(hotel_id);

CREATE TRIGGER trg_mst_bed_type_update_timestamp BEFORE UPDATE ON mdm.mst_bed_type
    FOR EACH ROW EXECUTE FUNCTION mdm.fn_update_timestamp();

-- Room Status
CREATE TABLE IF NOT EXISTS mdm.mst_room_status (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    hotel_id UUID NOT NULL,
    status_code VARCHAR(10),
    status_name VARCHAR(100),
    created_at TIMESTAMP DEFAULT now() NOT NULL,
    updated_at TIMESTAMP DEFAULT now() NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_mst_room_status_hotel_id ON mdm.mst_room_status(hotel_id);

CREATE TRIGGER trg_mst_room_status_update_timestamp BEFORE UPDATE ON mdm.mst_room_status
    FOR EACH ROW EXECUTE FUNCTION mdm.fn_update_timestamp();

-- Room View
CREATE TABLE IF NOT EXISTS mdm.mst_room_view (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    hotel_id UUID NOT NULL,
    view_code VARCHAR(10),
    view_name VARCHAR(100),
    created_at TIMESTAMP DEFAULT now() NOT NULL,
    updated_at TIMESTAMP DEFAULT now() NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_mst_room_view_hotel_id ON mdm.mst_room_view(hotel_id);

CREATE TRIGGER trg_mst_room_view_update_timestamp BEFORE UPDATE ON mdm.mst_room_view
    FOR EACH ROW EXECUTE FUNCTION mdm.fn_update_timestamp();

-- Room
CREATE TABLE IF NOT EXISTS mdm.mst_room (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    hotel_id UUID NOT NULL,
    room_no VARCHAR(20) UNIQUE,
    room_type_id UUID REFERENCES mdm.mst_room_type(id),
    floor_id UUID REFERENCES mdm.mst_floor(id),
    room_status_id UUID REFERENCES mdm.mst_room_status(id),
    room_view_id UUID REFERENCES mdm.mst_room_view(id),
    bed_type_id UUID REFERENCES mdm.mst_bed_type(id),
    created_at TIMESTAMP DEFAULT now() NOT NULL,
    updated_at TIMESTAMP DEFAULT now() NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_mst_room_hotel_id ON mdm.mst_room(hotel_id);

CREATE TRIGGER trg_mst_room_update_timestamp BEFORE UPDATE ON mdm.mst_room
    FOR EACH ROW EXECUTE FUNCTION mdm.fn_update_timestamp();

-- ABF Type
CREATE TABLE IF NOT EXISTS mdm.mst_abf_type (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    hotel_id UUID NOT NULL,
    abf_code VARCHAR(10),
    abf_name VARCHAR(100),
    created_at TIMESTAMP DEFAULT now() NOT NULL,
    updated_at TIMESTAMP DEFAULT now() NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_mst_abf_type_hotel_id ON mdm.mst_abf_type(hotel_id);

CREATE TRIGGER trg_mst_abf_type_update_timestamp BEFORE UPDATE ON mdm.mst_abf_type
    FOR EACH ROW EXECUTE FUNCTION mdm.fn_update_timestamp();

-- Channel
CREATE TABLE IF NOT EXISTS mdm.mst_channel (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    channel_code VARCHAR(10),
    channel_name VARCHAR(100),
    created_at TIMESTAMP DEFAULT now(),
    updated_at TIMESTAMP DEFAULT now()
);

-- Market
CREATE TABLE IF NOT EXISTS mdm.mst_market (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    market_code VARCHAR(10),
    market_name VARCHAR(100),
    created_at TIMESTAMP DEFAULT now(),
    updated_at TIMESTAMP DEFAULT now()
);

-- Company
CREATE TABLE IF NOT EXISTS mdm.mst_company (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    hotel_id UUID NOT NULL,
    company_code VARCHAR(20),
    company_name VARCHAR(255),
    market_id UUID REFERENCES mdm.mst_market(id),
    created_at TIMESTAMP DEFAULT now() NOT NULL,
    updated_at TIMESTAMP DEFAULT now() NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_mst_company_hotel_id ON mdm.mst_company(hotel_id);

CREATE TRIGGER trg_mst_company_update_timestamp BEFORE UPDATE ON mdm.mst_company
    FOR EACH ROW EXECUTE FUNCTION mdm.fn_update_timestamp();

-- Country
CREATE TABLE IF NOT EXISTS mdm.mst_country (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    hotel_id UUID NOT NULL,
    country_code VARCHAR(10),
    country_name VARCHAR(100),
    created_at TIMESTAMP DEFAULT now() NOT NULL,
    updated_at TIMESTAMP DEFAULT now() NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_mst_country_hotel_id ON mdm.mst_country(hotel_id);

CREATE TRIGGER trg_mst_country_update_timestamp BEFORE UPDATE ON mdm.mst_country
    FOR EACH ROW EXECUTE FUNCTION mdm.fn_update_timestamp();

-- Department
CREATE TABLE IF NOT EXISTS mdm.mst_department (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    hotel_id UUID NOT NULL,
    dept_code VARCHAR(10),
    dept_name VARCHAR(100),
    created_at TIMESTAMP DEFAULT now() NOT NULL,
    updated_at TIMESTAMP DEFAULT now() NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_mst_department_hotel_id ON mdm.mst_department(hotel_id);

CREATE TRIGGER trg_mst_department_update_timestamp BEFORE UPDATE ON mdm.mst_department
    FOR EACH ROW EXECUTE FUNCTION mdm.fn_update_timestamp();

-- Guest Type
CREATE TABLE IF NOT EXISTS mdm.mst_guest_type (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    hotel_id UUID NOT NULL,
    guest_type_code VARCHAR(10),
    guest_type_name VARCHAR(100),
    created_at TIMESTAMP DEFAULT now() NOT NULL,
    updated_at TIMESTAMP DEFAULT now() NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_mst_guest_type_hotel_id ON mdm.mst_guest_type(hotel_id);

CREATE TRIGGER trg_mst_guest_type_update_timestamp BEFORE UPDATE ON mdm.mst_guest_type
    FOR EACH ROW EXECUTE FUNCTION mdm.fn_update_timestamp();

-- Nationality
CREATE TABLE IF NOT EXISTS mdm.mst_nationality (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    hotel_id UUID NOT NULL,
    nation_code VARCHAR(10),
    nation_name VARCHAR(100),
    created_at TIMESTAMP DEFAULT now() NOT NULL,
    updated_at TIMESTAMP DEFAULT now() NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_mst_nationality_hotel_id ON mdm.mst_nationality(hotel_id);

CREATE TRIGGER trg_mst_nationality_update_timestamp BEFORE UPDATE ON mdm.mst_nationality
    FOR EACH ROW EXECUTE FUNCTION mdm.fn_update_timestamp();

-- Title
CREATE TABLE IF NOT EXISTS mdm.mst_title (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    hotel_id UUID NOT NULL,
    title_code VARCHAR(10),
    title_name VARCHAR(50),
    created_at TIMESTAMP DEFAULT now() NOT NULL,
    updated_at TIMESTAMP DEFAULT now() NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_mst_title_hotel_id ON mdm.mst_title(hotel_id);

CREATE TRIGGER trg_mst_title_update_timestamp BEFORE UPDATE ON mdm.mst_title
    FOR EACH ROW EXECUTE FUNCTION mdm.fn_update_timestamp();

-- VIP Type
CREATE TABLE IF NOT EXISTS mdm.mst_vip_type (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    hotel_id UUID NOT NULL,
    vip_code VARCHAR(10),
    vip_name VARCHAR(100),
    created_at TIMESTAMP DEFAULT now() NOT NULL,
    updated_at TIMESTAMP DEFAULT now() NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_mst_vip_type_hotel_id ON mdm.mst_vip_type(hotel_id);

CREATE TRIGGER trg_mst_vip_type_update_timestamp BEFORE UPDATE ON mdm.mst_vip_type
    FOR EACH ROW EXECUTE FUNCTION mdm.fn_update_timestamp();

-- Profile
CREATE TABLE IF NOT EXISTS mdm.mst_profile (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    hotel_id UUID NOT NULL,
    title_id UUID REFERENCES mdm.mst_title(id),
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    nationality_id UUID REFERENCES mdm.mst_nationality(id),
    company_id UUID REFERENCES mdm.mst_company(id),
    guest_type_id UUID REFERENCES mdm.mst_guest_type(id),
    vip_type_id UUID REFERENCES mdm.mst_vip_type(id),
    created_at TIMESTAMP DEFAULT now() NOT NULL,
    updated_at TIMESTAMP DEFAULT now() NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_mst_profile_hotel_id ON mdm.mst_profile(hotel_id);

CREATE TRIGGER trg_mst_profile_update_timestamp BEFORE UPDATE ON mdm.mst_profile
    FOR EACH ROW EXECUTE FUNCTION mdm.fn_update_timestamp();

-- Rate Master
CREATE TABLE IF NOT EXISTS mdm.mst_rate_master (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    hotel_id UUID NOT NULL,
    rate_code VARCHAR(10),
    rate_name VARCHAR(100),
    created_at TIMESTAMP DEFAULT now() NOT NULL,
    updated_at TIMESTAMP DEFAULT now() NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_mst_rate_master_hotel_id ON mdm.mst_rate_master(hotel_id);

CREATE TRIGGER trg_mst_rate_master_update_timestamp BEFORE UPDATE ON mdm.mst_rate_master
    FOR EACH ROW EXECUTE FUNCTION mdm.fn_update_timestamp();

-- Rate Detail
CREATE TABLE IF NOT EXISTS mdm.mst_rate_detail (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    hotel_id UUID NOT NULL,
    rate_id UUID REFERENCES mdm.mst_rate_master(id),
    effective_date DATE,
    price NUMERIC(10, 2),
    created_at TIMESTAMP DEFAULT now() NOT NULL,
    updated_at TIMESTAMP DEFAULT now() NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_mst_rate_detail_hotel_id ON mdm.mst_rate_detail(hotel_id);

CREATE TRIGGER trg_mst_rate_detail_update_timestamp BEFORE UPDATE ON mdm.mst_rate_detail
    FOR EACH ROW EXECUTE FUNCTION mdm.fn_update_timestamp();

-- Transaction Code
CREATE TABLE IF NOT EXISTS mdm.mst_trans_code (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    hotel_id UUID NOT NULL REFERENCES mdm.mst_hotel(id),
    trans_code VARCHAR(10) NOT NULL,
    trans_name VARCHAR(255) NOT NULL,
    vat_percent NUMERIC(5, 2) DEFAULT 0.00,
    service_percent NUMERIC(5, 2) DEFAULT 0.00,
    tran_type CHAR(1) DEFAULT 'T',
    group_id VARCHAR(10),
    vat_type VARCHAR(5),
    is_taxable BOOLEAN DEFAULT true,
    is_rebate BOOLEAN DEFAULT false,
    is_city_ledger BOOLEAN DEFAULT false,
    is_deposit BOOLEAN DEFAULT false,
    allow_manual_post BOOLEAN DEFAULT true,
    require_refer BOOLEAN DEFAULT false,
    require_remark BOOLEAN DEFAULT false,
    ar_transfer_code VARCHAR(10),
    pay_type VARCHAR(10),
    created_at TIMESTAMP DEFAULT now(),
    updated_at TIMESTAMP DEFAULT now()
);
CREATE INDEX IF NOT EXISTS idx_mst_trans_code_hotel_id ON mdm.mst_trans_code(hotel_id);

-- Insert sample data
INSERT INTO mdm.mst_hotel (hotel_code, hotel_name) VALUES 
    ('HTL001', 'Grand Hotel Bangkok')
ON CONFLICT (hotel_code) DO NOTHING;

-- Success message
DO $$
BEGIN
    RAISE NOTICE 'Database schema created successfully!';
    RAISE NOTICE 'Schema: mdm';
    RAISE NOTICE 'Tables created: 30+';
END $$;
