--
-- PostgreSQL database dump
--


-- Dumped from database version 18.0 (Debian 18.0-1.pgdg13+3)
-- Dumped by pg_dump version 18.0 (Debian 18.0-1.pgdg13+3)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: endday; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA endday;


ALTER SCHEMA endday OWNER TO postgres;

--
-- Name: mdm; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA mdm;


ALTER SCHEMA mdm OWNER TO postgres;

--
-- Name: rep; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA rep;


ALTER SCHEMA rep OWNER TO postgres;

--
-- Name: trn; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA trn;


ALTER SCHEMA trn OWNER TO postgres;

--
-- Name: fn_update_timestamp(); Type: FUNCTION; Schema: endday; Owner: postgres
--

CREATE FUNCTION endday.fn_update_timestamp() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$;


ALTER FUNCTION endday.fn_update_timestamp() OWNER TO postgres;

--
-- Name: fn_update_timestamp(); Type: FUNCTION; Schema: mdm; Owner: postgres
--

CREATE FUNCTION mdm.fn_update_timestamp() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$;


ALTER FUNCTION mdm.fn_update_timestamp() OWNER TO postgres;

--
-- Name: fn_update_timestamp(); Type: FUNCTION; Schema: trn; Owner: postgres
--

CREATE FUNCTION trn.fn_update_timestamp() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$;


ALTER FUNCTION trn.fn_update_timestamp() OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: rep_channel_summary; Type: TABLE; Schema: endday; Owner: postgres
--

CREATE TABLE endday.rep_channel_summary (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    business_date date NOT NULL,
    hotel_id uuid NOT NULL,
    channel_id uuid,
    revenue numeric(14,2) DEFAULT 0,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE endday.rep_channel_summary OWNER TO postgres;

--
-- Name: rep_company_summary; Type: TABLE; Schema: endday; Owner: postgres
--

CREATE TABLE endday.rep_company_summary (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    business_date date NOT NULL,
    hotel_id uuid NOT NULL,
    company_id uuid,
    revenue numeric(14,2) DEFAULT 0,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE endday.rep_company_summary OWNER TO postgres;

--
-- Name: rep_country_summary; Type: TABLE; Schema: endday; Owner: postgres
--

CREATE TABLE endday.rep_country_summary (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    business_date date NOT NULL,
    hotel_id uuid NOT NULL,
    country_id uuid,
    revenue numeric(14,2) DEFAULT 0,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE endday.rep_country_summary OWNER TO postgres;

--
-- Name: rep_hotel_summary; Type: TABLE; Schema: endday; Owner: postgres
--

CREATE TABLE endday.rep_hotel_summary (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    business_date date NOT NULL,
    hotel_id uuid NOT NULL,
    total_rooms integer DEFAULT 0,
    total_revenue numeric(14,2) DEFAULT 0,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE endday.rep_hotel_summary OWNER TO postgres;

--
-- Name: rep_market_summary; Type: TABLE; Schema: endday; Owner: postgres
--

CREATE TABLE endday.rep_market_summary (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    business_date date NOT NULL,
    hotel_id uuid NOT NULL,
    market_id uuid,
    revenue numeric(14,2) DEFAULT 0,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE endday.rep_market_summary OWNER TO postgres;

--
-- Name: rep_nationality_summary; Type: TABLE; Schema: endday; Owner: postgres
--

CREATE TABLE endday.rep_nationality_summary (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    business_date date NOT NULL,
    hotel_id uuid NOT NULL,
    nationality_id uuid,
    revenue numeric(14,2) DEFAULT 0,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE endday.rep_nationality_summary OWNER TO postgres;

--
-- Name: rep_profile_summary; Type: TABLE; Schema: endday; Owner: postgres
--

CREATE TABLE endday.rep_profile_summary (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    business_date date NOT NULL,
    hotel_id uuid NOT NULL,
    profile_id uuid,
    revenue numeric(14,2) DEFAULT 0,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE endday.rep_profile_summary OWNER TO postgres;

--
-- Name: rep_rate_summary; Type: TABLE; Schema: endday; Owner: postgres
--

CREATE TABLE endday.rep_rate_summary (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    business_date date NOT NULL,
    hotel_id uuid NOT NULL,
    rate_id uuid,
    revenue numeric(14,2) DEFAULT 0,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE endday.rep_rate_summary OWNER TO postgres;

--
-- Name: rep_revenue_summary; Type: TABLE; Schema: endday; Owner: postgres
--

CREATE TABLE endday.rep_revenue_summary (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    business_date date NOT NULL,
    hotel_id uuid NOT NULL,
    dept_id uuid,
    revenue numeric(14,2) DEFAULT 0,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE endday.rep_revenue_summary OWNER TO postgres;

--
-- Name: rep_room_summary; Type: TABLE; Schema: endday; Owner: postgres
--

CREATE TABLE endday.rep_room_summary (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    business_date date NOT NULL,
    hotel_id uuid NOT NULL,
    room_id uuid,
    revenue numeric(14,2) DEFAULT 0,
    occupancy_rate numeric(5,2) DEFAULT 0,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE endday.rep_room_summary OWNER TO postgres;

--
-- Name: rep_room_type_summary; Type: TABLE; Schema: endday; Owner: postgres
--

CREATE TABLE endday.rep_room_type_summary (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    business_date date NOT NULL,
    hotel_id uuid NOT NULL,
    room_type_id uuid,
    revenue numeric(14,2) DEFAULT 0,
    occupancy_rate numeric(5,2) DEFAULT 0,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE endday.rep_room_type_summary OWNER TO postgres;

--
-- Name: rep_source_summary; Type: TABLE; Schema: endday; Owner: postgres
--

CREATE TABLE endday.rep_source_summary (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    business_date date NOT NULL,
    hotel_id uuid NOT NULL,
    source_id uuid,
    revenue numeric(14,2) DEFAULT 0,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE endday.rep_source_summary OWNER TO postgres;

--
-- Name: rep_trancode_summary; Type: TABLE; Schema: endday; Owner: postgres
--

CREATE TABLE endday.rep_trancode_summary (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    business_date date NOT NULL,
    hotel_id uuid NOT NULL,
    tran_code_id uuid,
    revenue numeric(14,2) DEFAULT 0,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE endday.rep_trancode_summary OWNER TO postgres;

--
-- Name: mst_abf_type; Type: TABLE; Schema: mdm; Owner: postgres
--

CREATE TABLE mdm.mst_abf_type (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    hotel_id uuid NOT NULL,
    abf_code character varying(10),
    abf_name character varying(100),
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE mdm.mst_abf_type OWNER TO postgres;

--
-- Name: mst_bed_type; Type: TABLE; Schema: mdm; Owner: postgres
--

CREATE TABLE mdm.mst_bed_type (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    hotel_id uuid NOT NULL,
    bed_code character varying(10),
    bed_name character varying(100),
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE mdm.mst_bed_type OWNER TO postgres;

--
-- Name: mst_book_type; Type: TABLE; Schema: mdm; Owner: postgres
--

CREATE TABLE mdm.mst_book_type (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    hotel_id uuid NOT NULL,
    book_code character varying(10),
    book_name character varying(100),
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE mdm.mst_book_type OWNER TO postgres;

--
-- Name: mst_building; Type: TABLE; Schema: mdm; Owner: postgres
--

CREATE TABLE mdm.mst_building (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    hotel_id uuid,
    building_name character varying(100),
    created_at timestamp without time zone DEFAULT now(),
    updated_at timestamp without time zone DEFAULT now()
);


ALTER TABLE mdm.mst_building OWNER TO postgres;

--
-- Name: mst_channel; Type: TABLE; Schema: mdm; Owner: postgres
--

CREATE TABLE mdm.mst_channel (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    channel_code character varying(10),
    channel_name character varying(100),
    created_at timestamp without time zone DEFAULT now(),
    updated_at timestamp without time zone DEFAULT now()
);


ALTER TABLE mdm.mst_channel OWNER TO postgres;

--
-- Name: mst_company; Type: TABLE; Schema: mdm; Owner: postgres
--

CREATE TABLE mdm.mst_company (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    hotel_id uuid NOT NULL,
    company_code character varying(20),
    company_name character varying(255),
    market_id uuid,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE mdm.mst_company OWNER TO postgres;

--
-- Name: mst_country; Type: TABLE; Schema: mdm; Owner: postgres
--

CREATE TABLE mdm.mst_country (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    hotel_id uuid NOT NULL,
    country_code character varying(10),
    country_name character varying(100),
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE mdm.mst_country OWNER TO postgres;

--
-- Name: mst_department; Type: TABLE; Schema: mdm; Owner: postgres
--

CREATE TABLE mdm.mst_department (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    hotel_id uuid NOT NULL,
    dept_code character varying(10),
    dept_name character varying(100),
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE mdm.mst_department OWNER TO postgres;

--
-- Name: mst_floor; Type: TABLE; Schema: mdm; Owner: postgres
--

CREATE TABLE mdm.mst_floor (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    building_id uuid,
    floor_name character varying(50),
    created_at timestamp without time zone DEFAULT now(),
    updated_at timestamp without time zone DEFAULT now()
);


ALTER TABLE mdm.mst_floor OWNER TO postgres;

--
-- Name: mst_guest_type; Type: TABLE; Schema: mdm; Owner: postgres
--

CREATE TABLE mdm.mst_guest_type (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    hotel_id uuid NOT NULL,
    guest_type_code character varying(10),
    guest_type_name character varying(100),
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE mdm.mst_guest_type OWNER TO postgres;

--
-- Name: mst_hotel; Type: TABLE; Schema: mdm; Owner: postgres
--

CREATE TABLE mdm.mst_hotel (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    hotel_code character varying(10),
    hotel_name character varying(255) NOT NULL,
    created_at timestamp without time zone DEFAULT now(),
    updated_at timestamp without time zone DEFAULT now()
);


ALTER TABLE mdm.mst_hotel OWNER TO postgres;

--
-- Name: mst_hotel_config; Type: TABLE; Schema: mdm; Owner: postgres
--

CREATE TABLE mdm.mst_hotel_config (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    hotel_id uuid NOT NULL,
    key character varying(100),
    value character varying(255),
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE mdm.mst_hotel_config OWNER TO postgres;

--
-- Name: mst_market; Type: TABLE; Schema: mdm; Owner: postgres
--

CREATE TABLE mdm.mst_market (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    market_code character varying(10),
    market_name character varying(100),
    created_at timestamp without time zone DEFAULT now(),
    updated_at timestamp without time zone DEFAULT now()
);


ALTER TABLE mdm.mst_market OWNER TO postgres;

--
-- Name: mst_market_group; Type: TABLE; Schema: mdm; Owner: postgres
--

CREATE TABLE mdm.mst_market_group (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    hotel_id uuid NOT NULL,
    group_code character varying(10),
    group_name character varying(100),
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE mdm.mst_market_group OWNER TO postgres;

--
-- Name: mst_nationality; Type: TABLE; Schema: mdm; Owner: postgres
--

CREATE TABLE mdm.mst_nationality (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    hotel_id uuid NOT NULL,
    nation_code character varying(10),
    nation_name character varying(100),
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE mdm.mst_nationality OWNER TO postgres;

--
-- Name: mst_passport_type; Type: TABLE; Schema: mdm; Owner: postgres
--

CREATE TABLE mdm.mst_passport_type (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    hotel_id uuid NOT NULL,
    passport_code character varying(10),
    passport_name character varying(100),
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE mdm.mst_passport_type OWNER TO postgres;

--
-- Name: mst_payment_method; Type: TABLE; Schema: mdm; Owner: postgres
--

CREATE TABLE mdm.mst_payment_method (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    hotel_id uuid NOT NULL,
    method_code character varying(10),
    method_name character varying(100),
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE mdm.mst_payment_method OWNER TO postgres;

--
-- Name: mst_payment_type; Type: TABLE; Schema: mdm; Owner: postgres
--

CREATE TABLE mdm.mst_payment_type (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    hotel_id uuid NOT NULL,
    payment_code character varying(10),
    payment_name character varying(100),
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE mdm.mst_payment_type OWNER TO postgres;

--
-- Name: mst_profile; Type: TABLE; Schema: mdm; Owner: postgres
--

CREATE TABLE mdm.mst_profile (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    hotel_id uuid NOT NULL,
    title_id uuid,
    first_name character varying(100),
    last_name character varying(100),
    nationality_id uuid,
    company_id uuid,
    guest_type_id uuid,
    vip_type_id uuid,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE mdm.mst_profile OWNER TO postgres;

--
-- Name: mst_promotion; Type: TABLE; Schema: mdm; Owner: postgres
--

CREATE TABLE mdm.mst_promotion (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    hotel_id uuid NOT NULL,
    promo_code character varying(10),
    promo_name character varying(100),
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE mdm.mst_promotion OWNER TO postgres;

--
-- Name: mst_rate_detail; Type: TABLE; Schema: mdm; Owner: postgres
--

CREATE TABLE mdm.mst_rate_detail (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    hotel_id uuid NOT NULL,
    rate_id uuid,
    effective_date date,
    price numeric(10,2),
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE mdm.mst_rate_detail OWNER TO postgres;

--
-- Name: mst_rate_master; Type: TABLE; Schema: mdm; Owner: postgres
--

CREATE TABLE mdm.mst_rate_master (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    hotel_id uuid NOT NULL,
    rate_code character varying(10),
    rate_name character varying(100),
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE mdm.mst_rate_master OWNER TO postgres;

--
-- Name: mst_rate_plan; Type: TABLE; Schema: mdm; Owner: postgres
--

CREATE TABLE mdm.mst_rate_plan (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    hotel_id uuid NOT NULL,
    plan_code character varying(10),
    plan_name character varying(100),
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE mdm.mst_rate_plan OWNER TO postgres;

--
-- Name: mst_room; Type: TABLE; Schema: mdm; Owner: postgres
--

CREATE TABLE mdm.mst_room (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    hotel_id uuid NOT NULL,
    room_no character varying(20),
    room_type_id uuid,
    floor_id uuid,
    room_status_id uuid,
    room_view_id uuid,
    bed_type_id uuid,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE mdm.mst_room OWNER TO postgres;

--
-- Name: mst_room_status; Type: TABLE; Schema: mdm; Owner: postgres
--

CREATE TABLE mdm.mst_room_status (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    hotel_id uuid NOT NULL,
    status_code character varying(10),
    status_name character varying(100),
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE mdm.mst_room_status OWNER TO postgres;

--
-- Name: mst_room_type; Type: TABLE; Schema: mdm; Owner: postgres
--

CREATE TABLE mdm.mst_room_type (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    hotel_id uuid,
    room_type_code character varying(10),
    room_type_name character varying(100),
    created_at timestamp without time zone DEFAULT now(),
    updated_at timestamp without time zone DEFAULT now()
);


ALTER TABLE mdm.mst_room_type OWNER TO postgres;

--
-- Name: mst_room_view; Type: TABLE; Schema: mdm; Owner: postgres
--

CREATE TABLE mdm.mst_room_view (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    hotel_id uuid NOT NULL,
    view_code character varying(10),
    view_name character varying(100),
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE mdm.mst_room_view OWNER TO postgres;

--
-- Name: mst_service_item; Type: TABLE; Schema: mdm; Owner: postgres
--

CREATE TABLE mdm.mst_service_item (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    hotel_id uuid NOT NULL,
    service_code character varying(10),
    service_name character varying(255),
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE mdm.mst_service_item OWNER TO postgres;

--
-- Name: mst_settle_type; Type: TABLE; Schema: mdm; Owner: postgres
--

CREATE TABLE mdm.mst_settle_type (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    hotel_id uuid NOT NULL,
    settle_code character varying(10),
    settle_name character varying(100),
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE mdm.mst_settle_type OWNER TO postgres;

--
-- Name: mst_source; Type: TABLE; Schema: mdm; Owner: postgres
--

CREATE TABLE mdm.mst_source (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    hotel_id uuid NOT NULL,
    source_code character varying(10),
    source_name character varying(100),
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE mdm.mst_source OWNER TO postgres;

--
-- Name: mst_tax_type; Type: TABLE; Schema: mdm; Owner: postgres
--

CREATE TABLE mdm.mst_tax_type (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    hotel_id uuid NOT NULL,
    tax_code character varying(10),
    tax_name character varying(100),
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE mdm.mst_tax_type OWNER TO postgres;

--
-- Name: mst_title; Type: TABLE; Schema: mdm; Owner: postgres
--

CREATE TABLE mdm.mst_title (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    hotel_id uuid NOT NULL,
    title_code character varying(10),
    title_name character varying(50),
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE mdm.mst_title OWNER TO postgres;

--
-- Name: mst_trans_code; Type: TABLE; Schema: mdm; Owner: postgres
--

CREATE TABLE mdm.mst_trans_code (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    hotel_id uuid NOT NULL,
    tran_code character varying(10),
    description character varying(255),
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE mdm.mst_trans_code OWNER TO postgres;

--
-- Name: mst_vip_type; Type: TABLE; Schema: mdm; Owner: postgres
--

CREATE TABLE mdm.mst_vip_type (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    hotel_id uuid NOT NULL,
    vip_code character varying(10),
    vip_name character varying(100),
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE mdm.mst_vip_type OWNER TO postgres;

--
-- Name: mst_visa_type; Type: TABLE; Schema: mdm; Owner: postgres
--

CREATE TABLE mdm.mst_visa_type (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    hotel_id uuid NOT NULL,
    visa_code character varying(10),
    visa_name character varying(100),
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE mdm.mst_visa_type OWNER TO postgres;

--
-- Name: trx_book_header; Type: TABLE; Schema: trn; Owner: postgres
--

CREATE TABLE trn.trx_book_header (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    hotel_id uuid,
    room_type_id uuid,
    arrive_date timestamp without time zone,
    depart_date timestamp without time zone,
    book_status character varying(1),
    rate_amount numeric(12,2) DEFAULT 0.00,
    remark text,
    room_qty numeric(12,2) DEFAULT 0.00,
    reservation_no bigint NOT NULL,
    book_master_no bigint NOT NULL,
    pax_adult numeric(7,0) DEFAULT 0,
    pax_child numeric(7,0) DEFAULT 0,
    tran_date timestamp without time zone DEFAULT now(),
    booked_by character varying(50),
    cancel_no bigint,
    cancel_date timestamp without time zone,
    cancel_by character varying(50),
    book_type character varying(10),
    rate_code character varying(10),
    room_night numeric(12,2) DEFAULT 0.00,
    allot_code character varying(10),
    upgrader_room_type character varying(6),
    upgrade_by character varying(50),
    upgrade_date date,
    created_at timestamp without time zone DEFAULT now(),
    updated_at timestamp without time zone DEFAULT now()
);


ALTER TABLE trn.trx_book_header OWNER TO postgres;

--
-- Name: trx_books; Type: TABLE; Schema: trn; Owner: postgres
--

CREATE TABLE trn.trx_books (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    book_header_id uuid,
    hotel_id uuid,
    room_no character varying(10),
    room_type_id uuid,
    guest_first_name character varying(100),
    guest_last_name character varying(100),
    guest_title character varying(20),
    pax_adult numeric(7,0) DEFAULT 0,
    pax_child numeric(7,0) DEFAULT 0,
    arrive_date timestamp without time zone,
    depart_date timestamp without time zone,
    checkin_date date,
    checkout_date date,
    status character varying(1),
    rate_amount numeric(12,2) DEFAULT 0.00,
    currency_code character varying(5),
    remark text,
    group_name character varying(100),
    company_name character varying(100),
    contract_code character varying(10),
    room_night numeric(12,2) DEFAULT 0.00,
    deposit_amount numeric(12,4) DEFAULT 0.0000,
    created_at timestamp without time zone DEFAULT now(),
    updated_at timestamp without time zone DEFAULT now()
);


ALTER TABLE trn.trx_books OWNER TO postgres;

--
-- Name: trx_closeday; Type: TABLE; Schema: trn; Owner: postgres
--

CREATE TABLE trn.trx_closeday (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    hotel_id uuid NOT NULL,
    business_date date,
    closed_by uuid,
    closed_at timestamp without time zone DEFAULT now(),
    note text,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE trn.trx_closeday OWNER TO postgres;

--
-- Name: trx_closeshift; Type: TABLE; Schema: trn; Owner: postgres
--

CREATE TABLE trn.trx_closeshift (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    hotel_id uuid NOT NULL,
    shift_id uuid,
    closed_by uuid,
    closed_at timestamp without time zone DEFAULT now(),
    note text,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE trn.trx_closeshift OWNER TO postgres;

--
-- Name: trx_extract_request; Type: TABLE; Schema: trn; Owner: postgres
--

CREATE TABLE trn.trx_extract_request (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    hotel_id uuid NOT NULL,
    request_no character varying(20),
    request_type character varying(50),
    requested_by uuid,
    status character varying(30) DEFAULT 'PENDING'::character varying,
    requested_at timestamp without time zone DEFAULT now(),
    completed_at timestamp without time zone,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE trn.trx_extract_request OWNER TO postgres;

--
-- Name: trx_folio; Type: TABLE; Schema: trn; Owner: postgres
--

CREATE TABLE trn.trx_folio (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    book_id uuid,
    hotel_id uuid,
    room_no character varying(10),
    folio_no bigint,
    tran_no bigint,
    tran_date timestamp without time zone DEFAULT now(),
    tran_time character varying(5),
    tran_code character varying(10),
    description character varying(255),
    org_amount numeric(12,2) DEFAULT 0.00,
    amount numeric(12,2) DEFAULT 0.00,
    vat_per numeric(12,2) DEFAULT 0.00,
    vat_amt numeric(12,4) DEFAULT 0.0000,
    service_per numeric(12,2) DEFAULT 0.00,
    service_amt numeric(12,2) DEFAULT 0.00,
    net_amount numeric(12,4) DEFAULT 0.0000,
    tran_user character varying(50),
    remark text,
    pay_flag character varying(1) DEFAULT 'N'::character varying,
    reference_no character varying(30),
    created_at timestamp without time zone DEFAULT now(),
    updated_at timestamp without time zone DEFAULT now()
);


ALTER TABLE trn.trx_folio OWNER TO postgres;

--
-- Name: trx_group_header; Type: TABLE; Schema: trn; Owner: postgres
--

CREATE TABLE trn.trx_group_header (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    hotel_id uuid NOT NULL,
    group_code character varying(20),
    group_name character varying(255),
    company_id uuid,
    leader_profile_id uuid,
    total_rooms integer DEFAULT 0,
    total_amount numeric(12,2) DEFAULT 0,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE trn.trx_group_header OWNER TO postgres;

--
-- Name: trx_shift; Type: TABLE; Schema: trn; Owner: postgres
--

CREATE TABLE trn.trx_shift (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    hotel_id uuid NOT NULL,
    shift_code character varying(10),
    shift_name character varying(50),
    start_time timestamp without time zone,
    end_time timestamp without time zone,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE trn.trx_shift OWNER TO postgres;

--
-- Data for Name: rep_channel_summary; Type: TABLE DATA; Schema: endday; Owner: postgres
--

COPY endday.rep_channel_summary (id, business_date, hotel_id, channel_id, revenue, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: rep_company_summary; Type: TABLE DATA; Schema: endday; Owner: postgres
--

COPY endday.rep_company_summary (id, business_date, hotel_id, company_id, revenue, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: rep_country_summary; Type: TABLE DATA; Schema: endday; Owner: postgres
--

COPY endday.rep_country_summary (id, business_date, hotel_id, country_id, revenue, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: rep_hotel_summary; Type: TABLE DATA; Schema: endday; Owner: postgres
--

COPY endday.rep_hotel_summary (id, business_date, hotel_id, total_rooms, total_revenue, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: rep_market_summary; Type: TABLE DATA; Schema: endday; Owner: postgres
--

COPY endday.rep_market_summary (id, business_date, hotel_id, market_id, revenue, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: rep_nationality_summary; Type: TABLE DATA; Schema: endday; Owner: postgres
--

COPY endday.rep_nationality_summary (id, business_date, hotel_id, nationality_id, revenue, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: rep_profile_summary; Type: TABLE DATA; Schema: endday; Owner: postgres
--

COPY endday.rep_profile_summary (id, business_date, hotel_id, profile_id, revenue, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: rep_rate_summary; Type: TABLE DATA; Schema: endday; Owner: postgres
--

COPY endday.rep_rate_summary (id, business_date, hotel_id, rate_id, revenue, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: rep_revenue_summary; Type: TABLE DATA; Schema: endday; Owner: postgres
--

COPY endday.rep_revenue_summary (id, business_date, hotel_id, dept_id, revenue, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: rep_room_summary; Type: TABLE DATA; Schema: endday; Owner: postgres
--

COPY endday.rep_room_summary (id, business_date, hotel_id, room_id, revenue, occupancy_rate, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: rep_room_type_summary; Type: TABLE DATA; Schema: endday; Owner: postgres
--

COPY endday.rep_room_type_summary (id, business_date, hotel_id, room_type_id, revenue, occupancy_rate, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: rep_source_summary; Type: TABLE DATA; Schema: endday; Owner: postgres
--

COPY endday.rep_source_summary (id, business_date, hotel_id, source_id, revenue, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: rep_trancode_summary; Type: TABLE DATA; Schema: endday; Owner: postgres
--

COPY endday.rep_trancode_summary (id, business_date, hotel_id, tran_code_id, revenue, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: mst_abf_type; Type: TABLE DATA; Schema: mdm; Owner: postgres
--

COPY mdm.mst_abf_type (id, hotel_id, abf_code, abf_name, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: mst_bed_type; Type: TABLE DATA; Schema: mdm; Owner: postgres
--

COPY mdm.mst_bed_type (id, hotel_id, bed_code, bed_name, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: mst_book_type; Type: TABLE DATA; Schema: mdm; Owner: postgres
--

COPY mdm.mst_book_type (id, hotel_id, book_code, book_name, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: mst_building; Type: TABLE DATA; Schema: mdm; Owner: postgres
--

COPY mdm.mst_building (id, hotel_id, building_name, created_at, updated_at) FROM stdin;
fd35e483-f331-43fb-8779-5c75247e6b47	39b1f487-d522-434d-90a0-f2fd299e8eb7	Main Building	2025-11-02 05:19:25.422844	2025-11-02 05:19:25.422844
671cc1bb-e844-4ac8-947f-db74dcee063b	39b1f487-d522-434d-90a0-f2fd299e8eb7	Beach Wing	2025-11-02 05:19:25.422844	2025-11-02 05:19:25.422844
\.


--
-- Data for Name: mst_channel; Type: TABLE DATA; Schema: mdm; Owner: postgres
--

COPY mdm.mst_channel (id, channel_code, channel_name, created_at, updated_at) FROM stdin;
96a0c456-8888-4c34-81c7-12345678a111	OTA	Online Travel Agent	2025-11-02 05:19:25.422844	2025-11-02 05:19:25.422844
96a0c456-9999-4c34-81c7-12345678a222	DIR	Direct Booking	2025-11-02 05:19:25.422844	2025-11-02 05:19:25.422844
96a0c456-aaaa-4c34-81c7-12345678a333	AGT	Travel Agency	2025-11-02 05:19:25.422844	2025-11-02 05:19:25.422844
\.


--
-- Data for Name: mst_company; Type: TABLE DATA; Schema: mdm; Owner: postgres
--

COPY mdm.mst_company (id, hotel_id, company_code, company_name, market_id, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: mst_country; Type: TABLE DATA; Schema: mdm; Owner: postgres
--

COPY mdm.mst_country (id, hotel_id, country_code, country_name, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: mst_department; Type: TABLE DATA; Schema: mdm; Owner: postgres
--

COPY mdm.mst_department (id, hotel_id, dept_code, dept_name, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: mst_floor; Type: TABLE DATA; Schema: mdm; Owner: postgres
--

COPY mdm.mst_floor (id, building_id, floor_name, created_at, updated_at) FROM stdin;
3a3f7565-eda0-49a4-acc6-e351c98b1f73	fd35e483-f331-43fb-8779-5c75247e6b47	1st Floor	2025-11-02 05:19:25.422844	2025-11-02 05:19:25.422844
\.


--
-- Data for Name: mst_guest_type; Type: TABLE DATA; Schema: mdm; Owner: postgres
--

COPY mdm.mst_guest_type (id, hotel_id, guest_type_code, guest_type_name, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: mst_hotel; Type: TABLE DATA; Schema: mdm; Owner: postgres
--

COPY mdm.mst_hotel (id, hotel_code, hotel_name, created_at, updated_at) FROM stdin;
39b1f487-d522-434d-90a0-f2fd299e8eb7	HOT01	The Old New Resort Phuket	2025-11-02 05:19:25.422844	2025-11-02 05:19:25.422844
\.


--
-- Data for Name: mst_hotel_config; Type: TABLE DATA; Schema: mdm; Owner: postgres
--

COPY mdm.mst_hotel_config (id, hotel_id, key, value, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: mst_market; Type: TABLE DATA; Schema: mdm; Owner: postgres
--

COPY mdm.mst_market (id, market_code, market_name, created_at, updated_at) FROM stdin;
85a0f231-5555-49ba-a9f2-8f93d8a4b111	FIT	Free Independent Traveler	2025-11-02 05:19:25.422844	2025-11-02 05:19:25.422844
85a0f231-6666-49ba-a9f2-8f93d8a4b222	GRP	Group Booking	2025-11-02 05:19:25.422844	2025-11-02 05:19:25.422844
85a0f231-7777-49ba-a9f2-8f93d8a4b333	CORP	Corporate	2025-11-02 05:19:25.422844	2025-11-02 05:19:25.422844
\.


--
-- Data for Name: mst_market_group; Type: TABLE DATA; Schema: mdm; Owner: postgres
--

COPY mdm.mst_market_group (id, hotel_id, group_code, group_name, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: mst_nationality; Type: TABLE DATA; Schema: mdm; Owner: postgres
--

COPY mdm.mst_nationality (id, hotel_id, nation_code, nation_name, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: mst_passport_type; Type: TABLE DATA; Schema: mdm; Owner: postgres
--

COPY mdm.mst_passport_type (id, hotel_id, passport_code, passport_name, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: mst_payment_method; Type: TABLE DATA; Schema: mdm; Owner: postgres
--

COPY mdm.mst_payment_method (id, hotel_id, method_code, method_name, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: mst_payment_type; Type: TABLE DATA; Schema: mdm; Owner: postgres
--

COPY mdm.mst_payment_type (id, hotel_id, payment_code, payment_name, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: mst_profile; Type: TABLE DATA; Schema: mdm; Owner: postgres
--

COPY mdm.mst_profile (id, hotel_id, title_id, first_name, last_name, nationality_id, company_id, guest_type_id, vip_type_id, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: mst_promotion; Type: TABLE DATA; Schema: mdm; Owner: postgres
--

COPY mdm.mst_promotion (id, hotel_id, promo_code, promo_name, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: mst_rate_detail; Type: TABLE DATA; Schema: mdm; Owner: postgres
--

COPY mdm.mst_rate_detail (id, hotel_id, rate_id, effective_date, price, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: mst_rate_master; Type: TABLE DATA; Schema: mdm; Owner: postgres
--

COPY mdm.mst_rate_master (id, hotel_id, rate_code, rate_name, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: mst_rate_plan; Type: TABLE DATA; Schema: mdm; Owner: postgres
--

COPY mdm.mst_rate_plan (id, hotel_id, plan_code, plan_name, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: mst_room; Type: TABLE DATA; Schema: mdm; Owner: postgres
--

COPY mdm.mst_room (id, hotel_id, room_no, room_type_id, floor_id, room_status_id, room_view_id, bed_type_id, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: mst_room_status; Type: TABLE DATA; Schema: mdm; Owner: postgres
--

COPY mdm.mst_room_status (id, hotel_id, status_code, status_name, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: mst_room_type; Type: TABLE DATA; Schema: mdm; Owner: postgres
--

COPY mdm.mst_room_type (id, hotel_id, room_type_code, room_type_name, created_at, updated_at) FROM stdin;
71b2b0ff-2222-43ad-9df3-4b7b728b9c11	39b1f487-d522-434d-90a0-f2fd299e8eb7	DLX	Deluxe Room	2025-11-02 05:19:25.422844	2025-11-02 05:19:25.422844
72b2b0ff-3333-43ad-9df3-4b7b728b9c22	39b1f487-d522-434d-90a0-f2fd299e8eb7	SUP	Superior Room	2025-11-02 05:19:25.422844	2025-11-02 05:19:25.422844
73b2b0ff-4444-43ad-9df3-4b7b728b9c33	39b1f487-d522-434d-90a0-f2fd299e8eb7	STD	Standard Room	2025-11-02 05:19:25.422844	2025-11-02 05:19:25.422844
\.


--
-- Data for Name: mst_room_view; Type: TABLE DATA; Schema: mdm; Owner: postgres
--

COPY mdm.mst_room_view (id, hotel_id, view_code, view_name, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: mst_service_item; Type: TABLE DATA; Schema: mdm; Owner: postgres
--

COPY mdm.mst_service_item (id, hotel_id, service_code, service_name, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: mst_settle_type; Type: TABLE DATA; Schema: mdm; Owner: postgres
--

COPY mdm.mst_settle_type (id, hotel_id, settle_code, settle_name, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: mst_source; Type: TABLE DATA; Schema: mdm; Owner: postgres
--

COPY mdm.mst_source (id, hotel_id, source_code, source_name, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: mst_tax_type; Type: TABLE DATA; Schema: mdm; Owner: postgres
--

COPY mdm.mst_tax_type (id, hotel_id, tax_code, tax_name, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: mst_title; Type: TABLE DATA; Schema: mdm; Owner: postgres
--

COPY mdm.mst_title (id, hotel_id, title_code, title_name, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: mst_trans_code; Type: TABLE DATA; Schema: mdm; Owner: postgres
--

COPY mdm.mst_trans_code (id, hotel_id, tran_code, description, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: mst_vip_type; Type: TABLE DATA; Schema: mdm; Owner: postgres
--

COPY mdm.mst_vip_type (id, hotel_id, vip_code, vip_name, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: mst_visa_type; Type: TABLE DATA; Schema: mdm; Owner: postgres
--

COPY mdm.mst_visa_type (id, hotel_id, visa_code, visa_name, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: trx_book_header; Type: TABLE DATA; Schema: trn; Owner: postgres
--

COPY trn.trx_book_header (id, hotel_id, room_type_id, arrive_date, depart_date, book_status, rate_amount, remark, room_qty, reservation_no, book_master_no, pax_adult, pax_child, tran_date, booked_by, cancel_no, cancel_date, cancel_by, book_type, rate_code, room_night, allot_code, upgrader_room_type, upgrade_by, upgrade_date, created_at, updated_at) FROM stdin;
11111111-aaaa-1111-aaaa-111111111111	39b1f487-d522-434d-90a0-f2fd299e8eb7	71b2b0ff-2222-43ad-9df3-4b7b728b9c11	2025-11-05 14:00:00	2025-11-07 12:00:00	A	3200.00	Family stay 2 nights	1.00	1001	501	2	1	2025-11-02 05:22:17.498329	FrontDesk	\N	\N	\N	FIT	RACK	2.00	AL001	\N	\N	\N	2025-11-02 05:22:17.498329	2025-11-02 05:22:17.498329
22222222-bbbb-2222-bbbb-222222222222	39b1f487-d522-434d-90a0-f2fd299e8eb7	72b2b0ff-3333-43ad-9df3-4b7b728b9c22	2025-11-10 14:00:00	2025-11-11 12:00:00	A	1800.00	Single night stay	1.00	1002	502	1	0	2025-11-02 05:22:17.498329	Agoda	\N	\N	\N	OTA	BAR	1.00	AL002	\N	\N	\N	2025-11-02 05:22:17.498329	2025-11-02 05:22:17.498329
33333333-cccc-3333-cccc-333333333333	39b1f487-d522-434d-90a0-f2fd299e8eb7	73b2b0ff-4444-43ad-9df3-4b7b728b9c33	2025-11-15 14:00:00	2025-11-20 12:00:00	A	8500.00	Group booking - 3 rooms	3.00	1003	503	6	2	2025-11-02 05:22:17.498329	TravelAgent	\N	\N	\N	GRP	CORP	5.00	AL003	\N	\N	\N	2025-11-02 05:22:17.498329	2025-11-02 05:22:17.498329
\.


--
-- Data for Name: trx_books; Type: TABLE DATA; Schema: trn; Owner: postgres
--

COPY trn.trx_books (id, book_header_id, hotel_id, room_no, room_type_id, guest_first_name, guest_last_name, guest_title, pax_adult, pax_child, arrive_date, depart_date, checkin_date, checkout_date, status, rate_amount, currency_code, remark, group_name, company_name, contract_code, room_night, deposit_amount, created_at, updated_at) FROM stdin;
a1111111-0000-aaaa-0000-aaaaaaaaaaaa	11111111-aaaa-1111-aaaa-111111111111	39b1f487-d522-434d-90a0-f2fd299e8eb7	101	71b2b0ff-2222-43ad-9df3-4b7b728b9c11	John	Doe	Mr.	2	1	2025-11-05 14:00:00	2025-11-07 12:00:00	2025-11-05	2025-11-07	A	3200.00	THB	Family stay	Family A	The Old New Resort	CT001	2.00	500.0000	2025-11-02 05:22:17.498329	2025-11-02 05:22:17.498329
b2222222-0000-bbbb-0000-bbbbbbbbbbbb	22222222-bbbb-2222-bbbb-222222222222	39b1f487-d522-434d-90a0-f2fd299e8eb7	102	72b2b0ff-3333-43ad-9df3-4b7b728b9c22	Jane	Smith	Ms.	1	0	2025-11-10 14:00:00	2025-11-11 12:00:00	2025-11-10	2025-11-11	A	1800.00	THB	Online OTA booking	\N	Agoda	CT002	1.00	0.0000	2025-11-02 05:22:17.498329	2025-11-02 05:22:17.498329
c3333333-0000-cccc-0000-cccccccccccc	33333333-cccc-3333-cccc-333333333333	39b1f487-d522-434d-90a0-f2fd299e8eb7	201	73b2b0ff-4444-43ad-9df3-4b7b728b9c33	Alice	Wong	Mrs.	2	2	2025-11-15 14:00:00	2025-11-20 12:00:00	2025-11-15	2025-11-20	A	8500.00	THB	Group booking of 4	Group A	XYZ Corp	CT003	5.00	2000.0000	2025-11-02 05:22:17.498329	2025-11-02 05:22:17.498329
\.


--
-- Data for Name: trx_closeday; Type: TABLE DATA; Schema: trn; Owner: postgres
--

COPY trn.trx_closeday (id, hotel_id, business_date, closed_by, closed_at, note, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: trx_closeshift; Type: TABLE DATA; Schema: trn; Owner: postgres
--

COPY trn.trx_closeshift (id, hotel_id, shift_id, closed_by, closed_at, note, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: trx_extract_request; Type: TABLE DATA; Schema: trn; Owner: postgres
--

COPY trn.trx_extract_request (id, hotel_id, request_no, request_type, requested_by, status, requested_at, completed_at, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: trx_folio; Type: TABLE DATA; Schema: trn; Owner: postgres
--

COPY trn.trx_folio (id, book_id, hotel_id, room_no, folio_no, tran_no, tran_date, tran_time, tran_code, description, org_amount, amount, vat_per, vat_amt, service_per, service_amt, net_amount, tran_user, remark, pay_flag, reference_no, created_at, updated_at) FROM stdin;
f1111111-aaaa-ffff-aaaa-ffffffffffff	a1111111-0000-aaaa-0000-aaaaaaaaaaaa	39b1f487-d522-434d-90a0-f2fd299e8eb7	101	1	100001	2025-11-06 09:00:00	09:00	RM01	Room Charge	3200.00	3200.00	7.00	224.0000	10.00	320.00	3744.0000	Cashier01	Night audit post	Y	INV001	2025-11-02 05:22:17.498329	2025-11-02 05:22:17.498329
f2222222-bbbb-ffff-bbbb-ffffffffffff	b2222222-0000-bbbb-0000-bbbbbbbbbbbb	39b1f487-d522-434d-90a0-f2fd299e8eb7	102	2	100002	2025-11-11 12:00:00	12:00	FB01	Restaurant Bill	900.00	900.00	7.00	63.0000	10.00	90.00	1053.0000	Cashier02	Lunch charge	Y	INV002	2025-11-02 05:22:17.498329	2025-11-02 05:22:17.498329
f3333333-cccc-ffff-cccc-ffffffffffff	c3333333-0000-cccc-0000-cccccccccccc	39b1f487-d522-434d-90a0-f2fd299e8eb7	201	3	100003	2025-11-16 19:00:00	19:00	RM02	Extra Bed	1000.00	1000.00	7.00	70.0000	10.00	100.00	1170.0000	Cashier03	Extra bed added	Y	INV003	2025-11-02 05:22:17.498329	2025-11-02 05:22:17.498329
\.


--
-- Data for Name: trx_group_header; Type: TABLE DATA; Schema: trn; Owner: postgres
--

COPY trn.trx_group_header (id, hotel_id, group_code, group_name, company_id, leader_profile_id, total_rooms, total_amount, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: trx_shift; Type: TABLE DATA; Schema: trn; Owner: postgres
--

COPY trn.trx_shift (id, hotel_id, shift_code, shift_name, start_time, end_time, created_at, updated_at) FROM stdin;
\.


--
-- Name: rep_channel_summary rep_channel_summary_pkey; Type: CONSTRAINT; Schema: endday; Owner: postgres
--

ALTER TABLE ONLY endday.rep_channel_summary
    ADD CONSTRAINT rep_channel_summary_pkey PRIMARY KEY (id);


--
-- Name: rep_company_summary rep_company_summary_pkey; Type: CONSTRAINT; Schema: endday; Owner: postgres
--

ALTER TABLE ONLY endday.rep_company_summary
    ADD CONSTRAINT rep_company_summary_pkey PRIMARY KEY (id);


--
-- Name: rep_country_summary rep_country_summary_pkey; Type: CONSTRAINT; Schema: endday; Owner: postgres
--

ALTER TABLE ONLY endday.rep_country_summary
    ADD CONSTRAINT rep_country_summary_pkey PRIMARY KEY (id);


--
-- Name: rep_hotel_summary rep_hotel_summary_pkey; Type: CONSTRAINT; Schema: endday; Owner: postgres
--

ALTER TABLE ONLY endday.rep_hotel_summary
    ADD CONSTRAINT rep_hotel_summary_pkey PRIMARY KEY (id);


--
-- Name: rep_market_summary rep_market_summary_pkey; Type: CONSTRAINT; Schema: endday; Owner: postgres
--

ALTER TABLE ONLY endday.rep_market_summary
    ADD CONSTRAINT rep_market_summary_pkey PRIMARY KEY (id);


--
-- Name: rep_nationality_summary rep_nationality_summary_pkey; Type: CONSTRAINT; Schema: endday; Owner: postgres
--

ALTER TABLE ONLY endday.rep_nationality_summary
    ADD CONSTRAINT rep_nationality_summary_pkey PRIMARY KEY (id);


--
-- Name: rep_profile_summary rep_profile_summary_pkey; Type: CONSTRAINT; Schema: endday; Owner: postgres
--

ALTER TABLE ONLY endday.rep_profile_summary
    ADD CONSTRAINT rep_profile_summary_pkey PRIMARY KEY (id);


--
-- Name: rep_rate_summary rep_rate_summary_pkey; Type: CONSTRAINT; Schema: endday; Owner: postgres
--

ALTER TABLE ONLY endday.rep_rate_summary
    ADD CONSTRAINT rep_rate_summary_pkey PRIMARY KEY (id);


--
-- Name: rep_revenue_summary rep_revenue_summary_pkey; Type: CONSTRAINT; Schema: endday; Owner: postgres
--

ALTER TABLE ONLY endday.rep_revenue_summary
    ADD CONSTRAINT rep_revenue_summary_pkey PRIMARY KEY (id);


--
-- Name: rep_room_summary rep_room_summary_pkey; Type: CONSTRAINT; Schema: endday; Owner: postgres
--

ALTER TABLE ONLY endday.rep_room_summary
    ADD CONSTRAINT rep_room_summary_pkey PRIMARY KEY (id);


--
-- Name: rep_room_type_summary rep_room_type_summary_pkey; Type: CONSTRAINT; Schema: endday; Owner: postgres
--

ALTER TABLE ONLY endday.rep_room_type_summary
    ADD CONSTRAINT rep_room_type_summary_pkey PRIMARY KEY (id);


--
-- Name: rep_source_summary rep_source_summary_pkey; Type: CONSTRAINT; Schema: endday; Owner: postgres
--

ALTER TABLE ONLY endday.rep_source_summary
    ADD CONSTRAINT rep_source_summary_pkey PRIMARY KEY (id);


--
-- Name: rep_trancode_summary rep_trancode_summary_pkey; Type: CONSTRAINT; Schema: endday; Owner: postgres
--

ALTER TABLE ONLY endday.rep_trancode_summary
    ADD CONSTRAINT rep_trancode_summary_pkey PRIMARY KEY (id);


--
-- Name: mst_abf_type mst_abf_type_pkey; Type: CONSTRAINT; Schema: mdm; Owner: postgres
--

ALTER TABLE ONLY mdm.mst_abf_type
    ADD CONSTRAINT mst_abf_type_pkey PRIMARY KEY (id);


--
-- Name: mst_bed_type mst_bed_type_pkey; Type: CONSTRAINT; Schema: mdm; Owner: postgres
--

ALTER TABLE ONLY mdm.mst_bed_type
    ADD CONSTRAINT mst_bed_type_pkey PRIMARY KEY (id);


--
-- Name: mst_book_type mst_book_type_pkey; Type: CONSTRAINT; Schema: mdm; Owner: postgres
--

ALTER TABLE ONLY mdm.mst_book_type
    ADD CONSTRAINT mst_book_type_pkey PRIMARY KEY (id);


--
-- Name: mst_building mst_building_pkey; Type: CONSTRAINT; Schema: mdm; Owner: postgres
--

ALTER TABLE ONLY mdm.mst_building
    ADD CONSTRAINT mst_building_pkey PRIMARY KEY (id);


--
-- Name: mst_channel mst_channel_pkey; Type: CONSTRAINT; Schema: mdm; Owner: postgres
--

ALTER TABLE ONLY mdm.mst_channel
    ADD CONSTRAINT mst_channel_pkey PRIMARY KEY (id);


--
-- Name: mst_company mst_company_pkey; Type: CONSTRAINT; Schema: mdm; Owner: postgres
--

ALTER TABLE ONLY mdm.mst_company
    ADD CONSTRAINT mst_company_pkey PRIMARY KEY (id);


--
-- Name: mst_country mst_country_pkey; Type: CONSTRAINT; Schema: mdm; Owner: postgres
--

ALTER TABLE ONLY mdm.mst_country
    ADD CONSTRAINT mst_country_pkey PRIMARY KEY (id);


--
-- Name: mst_department mst_department_pkey; Type: CONSTRAINT; Schema: mdm; Owner: postgres
--

ALTER TABLE ONLY mdm.mst_department
    ADD CONSTRAINT mst_department_pkey PRIMARY KEY (id);


--
-- Name: mst_floor mst_floor_pkey; Type: CONSTRAINT; Schema: mdm; Owner: postgres
--

ALTER TABLE ONLY mdm.mst_floor
    ADD CONSTRAINT mst_floor_pkey PRIMARY KEY (id);


--
-- Name: mst_guest_type mst_guest_type_pkey; Type: CONSTRAINT; Schema: mdm; Owner: postgres
--

ALTER TABLE ONLY mdm.mst_guest_type
    ADD CONSTRAINT mst_guest_type_pkey PRIMARY KEY (id);


--
-- Name: mst_hotel_config mst_hotel_config_pkey; Type: CONSTRAINT; Schema: mdm; Owner: postgres
--

ALTER TABLE ONLY mdm.mst_hotel_config
    ADD CONSTRAINT mst_hotel_config_pkey PRIMARY KEY (id);


--
-- Name: mst_hotel mst_hotel_hotel_code_key; Type: CONSTRAINT; Schema: mdm; Owner: postgres
--

ALTER TABLE ONLY mdm.mst_hotel
    ADD CONSTRAINT mst_hotel_hotel_code_key UNIQUE (hotel_code);


--
-- Name: mst_hotel mst_hotel_pkey; Type: CONSTRAINT; Schema: mdm; Owner: postgres
--

ALTER TABLE ONLY mdm.mst_hotel
    ADD CONSTRAINT mst_hotel_pkey PRIMARY KEY (id);


--
-- Name: mst_market_group mst_market_group_pkey; Type: CONSTRAINT; Schema: mdm; Owner: postgres
--

ALTER TABLE ONLY mdm.mst_market_group
    ADD CONSTRAINT mst_market_group_pkey PRIMARY KEY (id);


--
-- Name: mst_market mst_market_pkey; Type: CONSTRAINT; Schema: mdm; Owner: postgres
--

ALTER TABLE ONLY mdm.mst_market
    ADD CONSTRAINT mst_market_pkey PRIMARY KEY (id);


--
-- Name: mst_nationality mst_nationality_pkey; Type: CONSTRAINT; Schema: mdm; Owner: postgres
--

ALTER TABLE ONLY mdm.mst_nationality
    ADD CONSTRAINT mst_nationality_pkey PRIMARY KEY (id);


--
-- Name: mst_passport_type mst_passport_type_pkey; Type: CONSTRAINT; Schema: mdm; Owner: postgres
--

ALTER TABLE ONLY mdm.mst_passport_type
    ADD CONSTRAINT mst_passport_type_pkey PRIMARY KEY (id);


--
-- Name: mst_payment_method mst_payment_method_pkey; Type: CONSTRAINT; Schema: mdm; Owner: postgres
--

ALTER TABLE ONLY mdm.mst_payment_method
    ADD CONSTRAINT mst_payment_method_pkey PRIMARY KEY (id);


--
-- Name: mst_payment_type mst_payment_type_pkey; Type: CONSTRAINT; Schema: mdm; Owner: postgres
--

ALTER TABLE ONLY mdm.mst_payment_type
    ADD CONSTRAINT mst_payment_type_pkey PRIMARY KEY (id);


--
-- Name: mst_profile mst_profile_pkey; Type: CONSTRAINT; Schema: mdm; Owner: postgres
--

ALTER TABLE ONLY mdm.mst_profile
    ADD CONSTRAINT mst_profile_pkey PRIMARY KEY (id);


--
-- Name: mst_promotion mst_promotion_pkey; Type: CONSTRAINT; Schema: mdm; Owner: postgres
--

ALTER TABLE ONLY mdm.mst_promotion
    ADD CONSTRAINT mst_promotion_pkey PRIMARY KEY (id);


--
-- Name: mst_rate_detail mst_rate_detail_pkey; Type: CONSTRAINT; Schema: mdm; Owner: postgres
--

ALTER TABLE ONLY mdm.mst_rate_detail
    ADD CONSTRAINT mst_rate_detail_pkey PRIMARY KEY (id);


--
-- Name: mst_rate_master mst_rate_master_pkey; Type: CONSTRAINT; Schema: mdm; Owner: postgres
--

ALTER TABLE ONLY mdm.mst_rate_master
    ADD CONSTRAINT mst_rate_master_pkey PRIMARY KEY (id);


--
-- Name: mst_rate_plan mst_rate_plan_pkey; Type: CONSTRAINT; Schema: mdm; Owner: postgres
--

ALTER TABLE ONLY mdm.mst_rate_plan
    ADD CONSTRAINT mst_rate_plan_pkey PRIMARY KEY (id);


--
-- Name: mst_room mst_room_pkey; Type: CONSTRAINT; Schema: mdm; Owner: postgres
--

ALTER TABLE ONLY mdm.mst_room
    ADD CONSTRAINT mst_room_pkey PRIMARY KEY (id);


--
-- Name: mst_room mst_room_room_no_key; Type: CONSTRAINT; Schema: mdm; Owner: postgres
--

ALTER TABLE ONLY mdm.mst_room
    ADD CONSTRAINT mst_room_room_no_key UNIQUE (room_no);


--
-- Name: mst_room_status mst_room_status_pkey; Type: CONSTRAINT; Schema: mdm; Owner: postgres
--

ALTER TABLE ONLY mdm.mst_room_status
    ADD CONSTRAINT mst_room_status_pkey PRIMARY KEY (id);


--
-- Name: mst_room_type mst_room_type_pkey; Type: CONSTRAINT; Schema: mdm; Owner: postgres
--

ALTER TABLE ONLY mdm.mst_room_type
    ADD CONSTRAINT mst_room_type_pkey PRIMARY KEY (id);


--
-- Name: mst_room_type mst_room_type_room_type_code_key; Type: CONSTRAINT; Schema: mdm; Owner: postgres
--

ALTER TABLE ONLY mdm.mst_room_type
    ADD CONSTRAINT mst_room_type_room_type_code_key UNIQUE (room_type_code);


--
-- Name: mst_room_view mst_room_view_pkey; Type: CONSTRAINT; Schema: mdm; Owner: postgres
--

ALTER TABLE ONLY mdm.mst_room_view
    ADD CONSTRAINT mst_room_view_pkey PRIMARY KEY (id);


--
-- Name: mst_service_item mst_service_item_pkey; Type: CONSTRAINT; Schema: mdm; Owner: postgres
--

ALTER TABLE ONLY mdm.mst_service_item
    ADD CONSTRAINT mst_service_item_pkey PRIMARY KEY (id);


--
-- Name: mst_settle_type mst_settle_type_pkey; Type: CONSTRAINT; Schema: mdm; Owner: postgres
--

ALTER TABLE ONLY mdm.mst_settle_type
    ADD CONSTRAINT mst_settle_type_pkey PRIMARY KEY (id);


--
-- Name: mst_source mst_source_pkey; Type: CONSTRAINT; Schema: mdm; Owner: postgres
--

ALTER TABLE ONLY mdm.mst_source
    ADD CONSTRAINT mst_source_pkey PRIMARY KEY (id);


--
-- Name: mst_tax_type mst_tax_type_pkey; Type: CONSTRAINT; Schema: mdm; Owner: postgres
--

ALTER TABLE ONLY mdm.mst_tax_type
    ADD CONSTRAINT mst_tax_type_pkey PRIMARY KEY (id);


--
-- Name: mst_title mst_title_pkey; Type: CONSTRAINT; Schema: mdm; Owner: postgres
--

ALTER TABLE ONLY mdm.mst_title
    ADD CONSTRAINT mst_title_pkey PRIMARY KEY (id);


--
-- Name: mst_trans_code mst_trans_code_pkey; Type: CONSTRAINT; Schema: mdm; Owner: postgres
--

ALTER TABLE ONLY mdm.mst_trans_code
    ADD CONSTRAINT mst_trans_code_pkey PRIMARY KEY (id);


--
-- Name: mst_vip_type mst_vip_type_pkey; Type: CONSTRAINT; Schema: mdm; Owner: postgres
--

ALTER TABLE ONLY mdm.mst_vip_type
    ADD CONSTRAINT mst_vip_type_pkey PRIMARY KEY (id);


--
-- Name: mst_visa_type mst_visa_type_pkey; Type: CONSTRAINT; Schema: mdm; Owner: postgres
--

ALTER TABLE ONLY mdm.mst_visa_type
    ADD CONSTRAINT mst_visa_type_pkey PRIMARY KEY (id);


--
-- Name: trx_book_header trx_book_header_pkey; Type: CONSTRAINT; Schema: trn; Owner: postgres
--

ALTER TABLE ONLY trn.trx_book_header
    ADD CONSTRAINT trx_book_header_pkey PRIMARY KEY (id);


--
-- Name: trx_books trx_books_pkey; Type: CONSTRAINT; Schema: trn; Owner: postgres
--

ALTER TABLE ONLY trn.trx_books
    ADD CONSTRAINT trx_books_pkey PRIMARY KEY (id);


--
-- Name: trx_closeday trx_closeday_pkey; Type: CONSTRAINT; Schema: trn; Owner: postgres
--

ALTER TABLE ONLY trn.trx_closeday
    ADD CONSTRAINT trx_closeday_pkey PRIMARY KEY (id);


--
-- Name: trx_closeshift trx_closeshift_pkey; Type: CONSTRAINT; Schema: trn; Owner: postgres
--

ALTER TABLE ONLY trn.trx_closeshift
    ADD CONSTRAINT trx_closeshift_pkey PRIMARY KEY (id);


--
-- Name: trx_extract_request trx_extract_request_pkey; Type: CONSTRAINT; Schema: trn; Owner: postgres
--

ALTER TABLE ONLY trn.trx_extract_request
    ADD CONSTRAINT trx_extract_request_pkey PRIMARY KEY (id);


--
-- Name: trx_extract_request trx_extract_request_request_no_key; Type: CONSTRAINT; Schema: trn; Owner: postgres
--

ALTER TABLE ONLY trn.trx_extract_request
    ADD CONSTRAINT trx_extract_request_request_no_key UNIQUE (request_no);


--
-- Name: trx_folio trx_folio_pkey; Type: CONSTRAINT; Schema: trn; Owner: postgres
--

ALTER TABLE ONLY trn.trx_folio
    ADD CONSTRAINT trx_folio_pkey PRIMARY KEY (id);


--
-- Name: trx_group_header trx_group_header_pkey; Type: CONSTRAINT; Schema: trn; Owner: postgres
--

ALTER TABLE ONLY trn.trx_group_header
    ADD CONSTRAINT trx_group_header_pkey PRIMARY KEY (id);


--
-- Name: trx_shift trx_shift_pkey; Type: CONSTRAINT; Schema: trn; Owner: postgres
--

ALTER TABLE ONLY trn.trx_shift
    ADD CONSTRAINT trx_shift_pkey PRIMARY KEY (id);


--
-- Name: idx_rep_channel_summary_business_date; Type: INDEX; Schema: endday; Owner: postgres
--

CREATE INDEX idx_rep_channel_summary_business_date ON endday.rep_channel_summary USING btree (business_date);


--
-- Name: idx_rep_channel_summary_hotel_id; Type: INDEX; Schema: endday; Owner: postgres
--

CREATE INDEX idx_rep_channel_summary_hotel_id ON endday.rep_channel_summary USING btree (hotel_id);


--
-- Name: idx_rep_company_summary_business_date; Type: INDEX; Schema: endday; Owner: postgres
--

CREATE INDEX idx_rep_company_summary_business_date ON endday.rep_company_summary USING btree (business_date);


--
-- Name: idx_rep_company_summary_hotel_id; Type: INDEX; Schema: endday; Owner: postgres
--

CREATE INDEX idx_rep_company_summary_hotel_id ON endday.rep_company_summary USING btree (hotel_id);


--
-- Name: idx_rep_country_summary_business_date; Type: INDEX; Schema: endday; Owner: postgres
--

CREATE INDEX idx_rep_country_summary_business_date ON endday.rep_country_summary USING btree (business_date);


--
-- Name: idx_rep_country_summary_hotel_id; Type: INDEX; Schema: endday; Owner: postgres
--

CREATE INDEX idx_rep_country_summary_hotel_id ON endday.rep_country_summary USING btree (hotel_id);


--
-- Name: idx_rep_hotel_summary_business_date; Type: INDEX; Schema: endday; Owner: postgres
--

CREATE INDEX idx_rep_hotel_summary_business_date ON endday.rep_hotel_summary USING btree (business_date);


--
-- Name: idx_rep_hotel_summary_hotel_id; Type: INDEX; Schema: endday; Owner: postgres
--

CREATE INDEX idx_rep_hotel_summary_hotel_id ON endday.rep_hotel_summary USING btree (hotel_id);


--
-- Name: idx_rep_market_summary_business_date; Type: INDEX; Schema: endday; Owner: postgres
--

CREATE INDEX idx_rep_market_summary_business_date ON endday.rep_market_summary USING btree (business_date);


--
-- Name: idx_rep_market_summary_hotel_id; Type: INDEX; Schema: endday; Owner: postgres
--

CREATE INDEX idx_rep_market_summary_hotel_id ON endday.rep_market_summary USING btree (hotel_id);


--
-- Name: idx_rep_nationality_summary_business_date; Type: INDEX; Schema: endday; Owner: postgres
--

CREATE INDEX idx_rep_nationality_summary_business_date ON endday.rep_nationality_summary USING btree (business_date);


--
-- Name: idx_rep_nationality_summary_hotel_id; Type: INDEX; Schema: endday; Owner: postgres
--

CREATE INDEX idx_rep_nationality_summary_hotel_id ON endday.rep_nationality_summary USING btree (hotel_id);


--
-- Name: idx_rep_profile_summary_business_date; Type: INDEX; Schema: endday; Owner: postgres
--

CREATE INDEX idx_rep_profile_summary_business_date ON endday.rep_profile_summary USING btree (business_date);


--
-- Name: idx_rep_profile_summary_hotel_id; Type: INDEX; Schema: endday; Owner: postgres
--

CREATE INDEX idx_rep_profile_summary_hotel_id ON endday.rep_profile_summary USING btree (hotel_id);


--
-- Name: idx_rep_rate_summary_business_date; Type: INDEX; Schema: endday; Owner: postgres
--

CREATE INDEX idx_rep_rate_summary_business_date ON endday.rep_rate_summary USING btree (business_date);


--
-- Name: idx_rep_rate_summary_hotel_id; Type: INDEX; Schema: endday; Owner: postgres
--

CREATE INDEX idx_rep_rate_summary_hotel_id ON endday.rep_rate_summary USING btree (hotel_id);


--
-- Name: idx_rep_revenue_summary_business_date; Type: INDEX; Schema: endday; Owner: postgres
--

CREATE INDEX idx_rep_revenue_summary_business_date ON endday.rep_revenue_summary USING btree (business_date);


--
-- Name: idx_rep_revenue_summary_hotel_id; Type: INDEX; Schema: endday; Owner: postgres
--

CREATE INDEX idx_rep_revenue_summary_hotel_id ON endday.rep_revenue_summary USING btree (hotel_id);


--
-- Name: idx_rep_room_summary_business_date; Type: INDEX; Schema: endday; Owner: postgres
--

CREATE INDEX idx_rep_room_summary_business_date ON endday.rep_room_summary USING btree (business_date);


--
-- Name: idx_rep_room_summary_hotel_id; Type: INDEX; Schema: endday; Owner: postgres
--

CREATE INDEX idx_rep_room_summary_hotel_id ON endday.rep_room_summary USING btree (hotel_id);


--
-- Name: idx_rep_room_type_summary_business_date; Type: INDEX; Schema: endday; Owner: postgres
--

CREATE INDEX idx_rep_room_type_summary_business_date ON endday.rep_room_type_summary USING btree (business_date);


--
-- Name: idx_rep_room_type_summary_hotel_id; Type: INDEX; Schema: endday; Owner: postgres
--

CREATE INDEX idx_rep_room_type_summary_hotel_id ON endday.rep_room_type_summary USING btree (hotel_id);


--
-- Name: idx_rep_source_summary_business_date; Type: INDEX; Schema: endday; Owner: postgres
--

CREATE INDEX idx_rep_source_summary_business_date ON endday.rep_source_summary USING btree (business_date);


--
-- Name: idx_rep_source_summary_hotel_id; Type: INDEX; Schema: endday; Owner: postgres
--

CREATE INDEX idx_rep_source_summary_hotel_id ON endday.rep_source_summary USING btree (hotel_id);


--
-- Name: idx_rep_trancode_summary_business_date; Type: INDEX; Schema: endday; Owner: postgres
--

CREATE INDEX idx_rep_trancode_summary_business_date ON endday.rep_trancode_summary USING btree (business_date);


--
-- Name: idx_rep_trancode_summary_hotel_id; Type: INDEX; Schema: endday; Owner: postgres
--

CREATE INDEX idx_rep_trancode_summary_hotel_id ON endday.rep_trancode_summary USING btree (hotel_id);


--
-- Name: idx_mst_abf_type_hotel_id; Type: INDEX; Schema: mdm; Owner: postgres
--

CREATE INDEX idx_mst_abf_type_hotel_id ON mdm.mst_abf_type USING btree (hotel_id);


--
-- Name: idx_mst_bed_type_hotel_id; Type: INDEX; Schema: mdm; Owner: postgres
--

CREATE INDEX idx_mst_bed_type_hotel_id ON mdm.mst_bed_type USING btree (hotel_id);


--
-- Name: idx_mst_book_type_hotel_id; Type: INDEX; Schema: mdm; Owner: postgres
--

CREATE INDEX idx_mst_book_type_hotel_id ON mdm.mst_book_type USING btree (hotel_id);


--
-- Name: idx_mst_company_hotel_id; Type: INDEX; Schema: mdm; Owner: postgres
--

CREATE INDEX idx_mst_company_hotel_id ON mdm.mst_company USING btree (hotel_id);


--
-- Name: idx_mst_country_hotel_id; Type: INDEX; Schema: mdm; Owner: postgres
--

CREATE INDEX idx_mst_country_hotel_id ON mdm.mst_country USING btree (hotel_id);


--
-- Name: idx_mst_department_hotel_id; Type: INDEX; Schema: mdm; Owner: postgres
--

CREATE INDEX idx_mst_department_hotel_id ON mdm.mst_department USING btree (hotel_id);


--
-- Name: idx_mst_guest_type_hotel_id; Type: INDEX; Schema: mdm; Owner: postgres
--

CREATE INDEX idx_mst_guest_type_hotel_id ON mdm.mst_guest_type USING btree (hotel_id);


--
-- Name: idx_mst_hotel_config_hotel_id; Type: INDEX; Schema: mdm; Owner: postgres
--

CREATE INDEX idx_mst_hotel_config_hotel_id ON mdm.mst_hotel_config USING btree (hotel_id);


--
-- Name: idx_mst_market_group_hotel_id; Type: INDEX; Schema: mdm; Owner: postgres
--

CREATE INDEX idx_mst_market_group_hotel_id ON mdm.mst_market_group USING btree (hotel_id);


--
-- Name: idx_mst_nationality_hotel_id; Type: INDEX; Schema: mdm; Owner: postgres
--

CREATE INDEX idx_mst_nationality_hotel_id ON mdm.mst_nationality USING btree (hotel_id);


--
-- Name: idx_mst_passport_type_hotel_id; Type: INDEX; Schema: mdm; Owner: postgres
--

CREATE INDEX idx_mst_passport_type_hotel_id ON mdm.mst_passport_type USING btree (hotel_id);


--
-- Name: idx_mst_payment_method_hotel_id; Type: INDEX; Schema: mdm; Owner: postgres
--

CREATE INDEX idx_mst_payment_method_hotel_id ON mdm.mst_payment_method USING btree (hotel_id);


--
-- Name: idx_mst_payment_type_hotel_id; Type: INDEX; Schema: mdm; Owner: postgres
--

CREATE INDEX idx_mst_payment_type_hotel_id ON mdm.mst_payment_type USING btree (hotel_id);


--
-- Name: idx_mst_profile_hotel_id; Type: INDEX; Schema: mdm; Owner: postgres
--

CREATE INDEX idx_mst_profile_hotel_id ON mdm.mst_profile USING btree (hotel_id);


--
-- Name: idx_mst_promotion_hotel_id; Type: INDEX; Schema: mdm; Owner: postgres
--

CREATE INDEX idx_mst_promotion_hotel_id ON mdm.mst_promotion USING btree (hotel_id);


--
-- Name: idx_mst_rate_detail_hotel_id; Type: INDEX; Schema: mdm; Owner: postgres
--

CREATE INDEX idx_mst_rate_detail_hotel_id ON mdm.mst_rate_detail USING btree (hotel_id);


--
-- Name: idx_mst_rate_master_hotel_id; Type: INDEX; Schema: mdm; Owner: postgres
--

CREATE INDEX idx_mst_rate_master_hotel_id ON mdm.mst_rate_master USING btree (hotel_id);


--
-- Name: idx_mst_rate_plan_hotel_id; Type: INDEX; Schema: mdm; Owner: postgres
--

CREATE INDEX idx_mst_rate_plan_hotel_id ON mdm.mst_rate_plan USING btree (hotel_id);


--
-- Name: idx_mst_room_hotel_id; Type: INDEX; Schema: mdm; Owner: postgres
--

CREATE INDEX idx_mst_room_hotel_id ON mdm.mst_room USING btree (hotel_id);


--
-- Name: idx_mst_room_status_hotel_id; Type: INDEX; Schema: mdm; Owner: postgres
--

CREATE INDEX idx_mst_room_status_hotel_id ON mdm.mst_room_status USING btree (hotel_id);


--
-- Name: idx_mst_room_view_hotel_id; Type: INDEX; Schema: mdm; Owner: postgres
--

CREATE INDEX idx_mst_room_view_hotel_id ON mdm.mst_room_view USING btree (hotel_id);


--
-- Name: idx_mst_service_item_hotel_id; Type: INDEX; Schema: mdm; Owner: postgres
--

CREATE INDEX idx_mst_service_item_hotel_id ON mdm.mst_service_item USING btree (hotel_id);


--
-- Name: idx_mst_settle_type_hotel_id; Type: INDEX; Schema: mdm; Owner: postgres
--

CREATE INDEX idx_mst_settle_type_hotel_id ON mdm.mst_settle_type USING btree (hotel_id);


--
-- Name: idx_mst_source_hotel_id; Type: INDEX; Schema: mdm; Owner: postgres
--

CREATE INDEX idx_mst_source_hotel_id ON mdm.mst_source USING btree (hotel_id);


--
-- Name: idx_mst_tax_type_hotel_id; Type: INDEX; Schema: mdm; Owner: postgres
--

CREATE INDEX idx_mst_tax_type_hotel_id ON mdm.mst_tax_type USING btree (hotel_id);


--
-- Name: idx_mst_title_hotel_id; Type: INDEX; Schema: mdm; Owner: postgres
--

CREATE INDEX idx_mst_title_hotel_id ON mdm.mst_title USING btree (hotel_id);


--
-- Name: idx_mst_trans_code_hotel_id; Type: INDEX; Schema: mdm; Owner: postgres
--

CREATE INDEX idx_mst_trans_code_hotel_id ON mdm.mst_trans_code USING btree (hotel_id);


--
-- Name: idx_mst_vip_type_hotel_id; Type: INDEX; Schema: mdm; Owner: postgres
--

CREATE INDEX idx_mst_vip_type_hotel_id ON mdm.mst_vip_type USING btree (hotel_id);


--
-- Name: idx_mst_visa_type_hotel_id; Type: INDEX; Schema: mdm; Owner: postgres
--

CREATE INDEX idx_mst_visa_type_hotel_id ON mdm.mst_visa_type USING btree (hotel_id);


--
-- Name: idx_trx_closeday_hotel_id; Type: INDEX; Schema: trn; Owner: postgres
--

CREATE INDEX idx_trx_closeday_hotel_id ON trn.trx_closeday USING btree (hotel_id);


--
-- Name: idx_trx_closeshift_hotel_id; Type: INDEX; Schema: trn; Owner: postgres
--

CREATE INDEX idx_trx_closeshift_hotel_id ON trn.trx_closeshift USING btree (hotel_id);


--
-- Name: idx_trx_extract_request_hotel_id; Type: INDEX; Schema: trn; Owner: postgres
--

CREATE INDEX idx_trx_extract_request_hotel_id ON trn.trx_extract_request USING btree (hotel_id);


--
-- Name: idx_trx_group_header_hotel_id; Type: INDEX; Schema: trn; Owner: postgres
--

CREATE INDEX idx_trx_group_header_hotel_id ON trn.trx_group_header USING btree (hotel_id);


--
-- Name: idx_trx_shift_hotel_id; Type: INDEX; Schema: trn; Owner: postgres
--

CREATE INDEX idx_trx_shift_hotel_id ON trn.trx_shift USING btree (hotel_id);


--
-- Name: rep_channel_summary trg_rep_channel_summary_update_timestamp; Type: TRIGGER; Schema: endday; Owner: postgres
--

CREATE TRIGGER trg_rep_channel_summary_update_timestamp BEFORE UPDATE ON endday.rep_channel_summary FOR EACH ROW EXECUTE FUNCTION endday.fn_update_timestamp();


--
-- Name: rep_company_summary trg_rep_company_summary_update_timestamp; Type: TRIGGER; Schema: endday; Owner: postgres
--

CREATE TRIGGER trg_rep_company_summary_update_timestamp BEFORE UPDATE ON endday.rep_company_summary FOR EACH ROW EXECUTE FUNCTION endday.fn_update_timestamp();


--
-- Name: rep_country_summary trg_rep_country_summary_update_timestamp; Type: TRIGGER; Schema: endday; Owner: postgres
--

CREATE TRIGGER trg_rep_country_summary_update_timestamp BEFORE UPDATE ON endday.rep_country_summary FOR EACH ROW EXECUTE FUNCTION endday.fn_update_timestamp();


--
-- Name: rep_hotel_summary trg_rep_hotel_summary_update_timestamp; Type: TRIGGER; Schema: endday; Owner: postgres
--

CREATE TRIGGER trg_rep_hotel_summary_update_timestamp BEFORE UPDATE ON endday.rep_hotel_summary FOR EACH ROW EXECUTE FUNCTION endday.fn_update_timestamp();


--
-- Name: rep_market_summary trg_rep_market_summary_update_timestamp; Type: TRIGGER; Schema: endday; Owner: postgres
--

CREATE TRIGGER trg_rep_market_summary_update_timestamp BEFORE UPDATE ON endday.rep_market_summary FOR EACH ROW EXECUTE FUNCTION endday.fn_update_timestamp();


--
-- Name: rep_nationality_summary trg_rep_nationality_summary_update_timestamp; Type: TRIGGER; Schema: endday; Owner: postgres
--

CREATE TRIGGER trg_rep_nationality_summary_update_timestamp BEFORE UPDATE ON endday.rep_nationality_summary FOR EACH ROW EXECUTE FUNCTION endday.fn_update_timestamp();


--
-- Name: rep_profile_summary trg_rep_profile_summary_update_timestamp; Type: TRIGGER; Schema: endday; Owner: postgres
--

CREATE TRIGGER trg_rep_profile_summary_update_timestamp BEFORE UPDATE ON endday.rep_profile_summary FOR EACH ROW EXECUTE FUNCTION endday.fn_update_timestamp();


--
-- Name: rep_rate_summary trg_rep_rate_summary_update_timestamp; Type: TRIGGER; Schema: endday; Owner: postgres
--

CREATE TRIGGER trg_rep_rate_summary_update_timestamp BEFORE UPDATE ON endday.rep_rate_summary FOR EACH ROW EXECUTE FUNCTION endday.fn_update_timestamp();


--
-- Name: rep_revenue_summary trg_rep_revenue_summary_update_timestamp; Type: TRIGGER; Schema: endday; Owner: postgres
--

CREATE TRIGGER trg_rep_revenue_summary_update_timestamp BEFORE UPDATE ON endday.rep_revenue_summary FOR EACH ROW EXECUTE FUNCTION endday.fn_update_timestamp();


--
-- Name: rep_room_summary trg_rep_room_summary_update_timestamp; Type: TRIGGER; Schema: endday; Owner: postgres
--

CREATE TRIGGER trg_rep_room_summary_update_timestamp BEFORE UPDATE ON endday.rep_room_summary FOR EACH ROW EXECUTE FUNCTION endday.fn_update_timestamp();


--
-- Name: rep_room_type_summary trg_rep_room_type_summary_update_timestamp; Type: TRIGGER; Schema: endday; Owner: postgres
--

CREATE TRIGGER trg_rep_room_type_summary_update_timestamp BEFORE UPDATE ON endday.rep_room_type_summary FOR EACH ROW EXECUTE FUNCTION endday.fn_update_timestamp();


--
-- Name: rep_source_summary trg_rep_source_summary_update_timestamp; Type: TRIGGER; Schema: endday; Owner: postgres
--

CREATE TRIGGER trg_rep_source_summary_update_timestamp BEFORE UPDATE ON endday.rep_source_summary FOR EACH ROW EXECUTE FUNCTION endday.fn_update_timestamp();


--
-- Name: rep_trancode_summary trg_rep_trancode_summary_update_timestamp; Type: TRIGGER; Schema: endday; Owner: postgres
--

CREATE TRIGGER trg_rep_trancode_summary_update_timestamp BEFORE UPDATE ON endday.rep_trancode_summary FOR EACH ROW EXECUTE FUNCTION endday.fn_update_timestamp();


--
-- Name: mst_abf_type trg_mst_abf_type_update_timestamp; Type: TRIGGER; Schema: mdm; Owner: postgres
--

CREATE TRIGGER trg_mst_abf_type_update_timestamp BEFORE UPDATE ON mdm.mst_abf_type FOR EACH ROW EXECUTE FUNCTION mdm.fn_update_timestamp();


--
-- Name: mst_bed_type trg_mst_bed_type_update_timestamp; Type: TRIGGER; Schema: mdm; Owner: postgres
--

CREATE TRIGGER trg_mst_bed_type_update_timestamp BEFORE UPDATE ON mdm.mst_bed_type FOR EACH ROW EXECUTE FUNCTION mdm.fn_update_timestamp();


--
-- Name: mst_book_type trg_mst_book_type_update_timestamp; Type: TRIGGER; Schema: mdm; Owner: postgres
--

CREATE TRIGGER trg_mst_book_type_update_timestamp BEFORE UPDATE ON mdm.mst_book_type FOR EACH ROW EXECUTE FUNCTION mdm.fn_update_timestamp();


--
-- Name: mst_company trg_mst_company_update_timestamp; Type: TRIGGER; Schema: mdm; Owner: postgres
--

CREATE TRIGGER trg_mst_company_update_timestamp BEFORE UPDATE ON mdm.mst_company FOR EACH ROW EXECUTE FUNCTION mdm.fn_update_timestamp();


--
-- Name: mst_country trg_mst_country_update_timestamp; Type: TRIGGER; Schema: mdm; Owner: postgres
--

CREATE TRIGGER trg_mst_country_update_timestamp BEFORE UPDATE ON mdm.mst_country FOR EACH ROW EXECUTE FUNCTION mdm.fn_update_timestamp();


--
-- Name: mst_department trg_mst_department_update_timestamp; Type: TRIGGER; Schema: mdm; Owner: postgres
--

CREATE TRIGGER trg_mst_department_update_timestamp BEFORE UPDATE ON mdm.mst_department FOR EACH ROW EXECUTE FUNCTION mdm.fn_update_timestamp();


--
-- Name: mst_guest_type trg_mst_guest_type_update_timestamp; Type: TRIGGER; Schema: mdm; Owner: postgres
--

CREATE TRIGGER trg_mst_guest_type_update_timestamp BEFORE UPDATE ON mdm.mst_guest_type FOR EACH ROW EXECUTE FUNCTION mdm.fn_update_timestamp();


--
-- Name: mst_hotel_config trg_mst_hotel_config_update_timestamp; Type: TRIGGER; Schema: mdm; Owner: postgres
--

CREATE TRIGGER trg_mst_hotel_config_update_timestamp BEFORE UPDATE ON mdm.mst_hotel_config FOR EACH ROW EXECUTE FUNCTION mdm.fn_update_timestamp();


--
-- Name: mst_market_group trg_mst_market_group_update_timestamp; Type: TRIGGER; Schema: mdm; Owner: postgres
--

CREATE TRIGGER trg_mst_market_group_update_timestamp BEFORE UPDATE ON mdm.mst_market_group FOR EACH ROW EXECUTE FUNCTION mdm.fn_update_timestamp();


--
-- Name: mst_nationality trg_mst_nationality_update_timestamp; Type: TRIGGER; Schema: mdm; Owner: postgres
--

CREATE TRIGGER trg_mst_nationality_update_timestamp BEFORE UPDATE ON mdm.mst_nationality FOR EACH ROW EXECUTE FUNCTION mdm.fn_update_timestamp();


--
-- Name: mst_passport_type trg_mst_passport_type_update_timestamp; Type: TRIGGER; Schema: mdm; Owner: postgres
--

CREATE TRIGGER trg_mst_passport_type_update_timestamp BEFORE UPDATE ON mdm.mst_passport_type FOR EACH ROW EXECUTE FUNCTION mdm.fn_update_timestamp();


--
-- Name: mst_payment_method trg_mst_payment_method_update_timestamp; Type: TRIGGER; Schema: mdm; Owner: postgres
--

CREATE TRIGGER trg_mst_payment_method_update_timestamp BEFORE UPDATE ON mdm.mst_payment_method FOR EACH ROW EXECUTE FUNCTION mdm.fn_update_timestamp();


--
-- Name: mst_payment_type trg_mst_payment_type_update_timestamp; Type: TRIGGER; Schema: mdm; Owner: postgres
--

CREATE TRIGGER trg_mst_payment_type_update_timestamp BEFORE UPDATE ON mdm.mst_payment_type FOR EACH ROW EXECUTE FUNCTION mdm.fn_update_timestamp();


--
-- Name: mst_profile trg_mst_profile_update_timestamp; Type: TRIGGER; Schema: mdm; Owner: postgres
--

CREATE TRIGGER trg_mst_profile_update_timestamp BEFORE UPDATE ON mdm.mst_profile FOR EACH ROW EXECUTE FUNCTION mdm.fn_update_timestamp();


--
-- Name: mst_promotion trg_mst_promotion_update_timestamp; Type: TRIGGER; Schema: mdm; Owner: postgres
--

CREATE TRIGGER trg_mst_promotion_update_timestamp BEFORE UPDATE ON mdm.mst_promotion FOR EACH ROW EXECUTE FUNCTION mdm.fn_update_timestamp();


--
-- Name: mst_rate_detail trg_mst_rate_detail_update_timestamp; Type: TRIGGER; Schema: mdm; Owner: postgres
--

CREATE TRIGGER trg_mst_rate_detail_update_timestamp BEFORE UPDATE ON mdm.mst_rate_detail FOR EACH ROW EXECUTE FUNCTION mdm.fn_update_timestamp();


--
-- Name: mst_rate_master trg_mst_rate_master_update_timestamp; Type: TRIGGER; Schema: mdm; Owner: postgres
--

CREATE TRIGGER trg_mst_rate_master_update_timestamp BEFORE UPDATE ON mdm.mst_rate_master FOR EACH ROW EXECUTE FUNCTION mdm.fn_update_timestamp();


--
-- Name: mst_rate_plan trg_mst_rate_plan_update_timestamp; Type: TRIGGER; Schema: mdm; Owner: postgres
--

CREATE TRIGGER trg_mst_rate_plan_update_timestamp BEFORE UPDATE ON mdm.mst_rate_plan FOR EACH ROW EXECUTE FUNCTION mdm.fn_update_timestamp();


--
-- Name: mst_room_status trg_mst_room_status_update_timestamp; Type: TRIGGER; Schema: mdm; Owner: postgres
--

CREATE TRIGGER trg_mst_room_status_update_timestamp BEFORE UPDATE ON mdm.mst_room_status FOR EACH ROW EXECUTE FUNCTION mdm.fn_update_timestamp();


--
-- Name: mst_room trg_mst_room_update_timestamp; Type: TRIGGER; Schema: mdm; Owner: postgres
--

CREATE TRIGGER trg_mst_room_update_timestamp BEFORE UPDATE ON mdm.mst_room FOR EACH ROW EXECUTE FUNCTION mdm.fn_update_timestamp();


--
-- Name: mst_room_view trg_mst_room_view_update_timestamp; Type: TRIGGER; Schema: mdm; Owner: postgres
--

CREATE TRIGGER trg_mst_room_view_update_timestamp BEFORE UPDATE ON mdm.mst_room_view FOR EACH ROW EXECUTE FUNCTION mdm.fn_update_timestamp();


--
-- Name: mst_service_item trg_mst_service_item_update_timestamp; Type: TRIGGER; Schema: mdm; Owner: postgres
--

CREATE TRIGGER trg_mst_service_item_update_timestamp BEFORE UPDATE ON mdm.mst_service_item FOR EACH ROW EXECUTE FUNCTION mdm.fn_update_timestamp();


--
-- Name: mst_settle_type trg_mst_settle_type_update_timestamp; Type: TRIGGER; Schema: mdm; Owner: postgres
--

CREATE TRIGGER trg_mst_settle_type_update_timestamp BEFORE UPDATE ON mdm.mst_settle_type FOR EACH ROW EXECUTE FUNCTION mdm.fn_update_timestamp();


--
-- Name: mst_source trg_mst_source_update_timestamp; Type: TRIGGER; Schema: mdm; Owner: postgres
--

CREATE TRIGGER trg_mst_source_update_timestamp BEFORE UPDATE ON mdm.mst_source FOR EACH ROW EXECUTE FUNCTION mdm.fn_update_timestamp();


--
-- Name: mst_tax_type trg_mst_tax_type_update_timestamp; Type: TRIGGER; Schema: mdm; Owner: postgres
--

CREATE TRIGGER trg_mst_tax_type_update_timestamp BEFORE UPDATE ON mdm.mst_tax_type FOR EACH ROW EXECUTE FUNCTION mdm.fn_update_timestamp();


--
-- Name: mst_title trg_mst_title_update_timestamp; Type: TRIGGER; Schema: mdm; Owner: postgres
--

CREATE TRIGGER trg_mst_title_update_timestamp BEFORE UPDATE ON mdm.mst_title FOR EACH ROW EXECUTE FUNCTION mdm.fn_update_timestamp();


--
-- Name: mst_trans_code trg_mst_trans_code_update_timestamp; Type: TRIGGER; Schema: mdm; Owner: postgres
--

CREATE TRIGGER trg_mst_trans_code_update_timestamp BEFORE UPDATE ON mdm.mst_trans_code FOR EACH ROW EXECUTE FUNCTION mdm.fn_update_timestamp();


--
-- Name: mst_vip_type trg_mst_vip_type_update_timestamp; Type: TRIGGER; Schema: mdm; Owner: postgres
--

CREATE TRIGGER trg_mst_vip_type_update_timestamp BEFORE UPDATE ON mdm.mst_vip_type FOR EACH ROW EXECUTE FUNCTION mdm.fn_update_timestamp();


--
-- Name: mst_visa_type trg_mst_visa_type_update_timestamp; Type: TRIGGER; Schema: mdm; Owner: postgres
--

CREATE TRIGGER trg_mst_visa_type_update_timestamp BEFORE UPDATE ON mdm.mst_visa_type FOR EACH ROW EXECUTE FUNCTION mdm.fn_update_timestamp();


--
-- Name: trx_book_header trg_trx_book_header_update; Type: TRIGGER; Schema: trn; Owner: postgres
--

CREATE TRIGGER trg_trx_book_header_update BEFORE UPDATE ON trn.trx_book_header FOR EACH ROW EXECUTE FUNCTION trn.fn_update_timestamp();


--
-- Name: trx_books trg_trx_books_update; Type: TRIGGER; Schema: trn; Owner: postgres
--

CREATE TRIGGER trg_trx_books_update BEFORE UPDATE ON trn.trx_books FOR EACH ROW EXECUTE FUNCTION trn.fn_update_timestamp();


--
-- Name: trx_closeday trg_trx_closeday_update_timestamp; Type: TRIGGER; Schema: trn; Owner: postgres
--

CREATE TRIGGER trg_trx_closeday_update_timestamp BEFORE UPDATE ON trn.trx_closeday FOR EACH ROW EXECUTE FUNCTION trn.fn_update_timestamp();


--
-- Name: trx_closeshift trg_trx_closeshift_update_timestamp; Type: TRIGGER; Schema: trn; Owner: postgres
--

CREATE TRIGGER trg_trx_closeshift_update_timestamp BEFORE UPDATE ON trn.trx_closeshift FOR EACH ROW EXECUTE FUNCTION trn.fn_update_timestamp();


--
-- Name: trx_extract_request trg_trx_extract_request_update_timestamp; Type: TRIGGER; Schema: trn; Owner: postgres
--

CREATE TRIGGER trg_trx_extract_request_update_timestamp BEFORE UPDATE ON trn.trx_extract_request FOR EACH ROW EXECUTE FUNCTION trn.fn_update_timestamp();


--
-- Name: trx_folio trg_trx_folio_update; Type: TRIGGER; Schema: trn; Owner: postgres
--

CREATE TRIGGER trg_trx_folio_update BEFORE UPDATE ON trn.trx_folio FOR EACH ROW EXECUTE FUNCTION trn.fn_update_timestamp();


--
-- Name: trx_group_header trg_trx_group_header_update_timestamp; Type: TRIGGER; Schema: trn; Owner: postgres
--

CREATE TRIGGER trg_trx_group_header_update_timestamp BEFORE UPDATE ON trn.trx_group_header FOR EACH ROW EXECUTE FUNCTION trn.fn_update_timestamp();


--
-- Name: trx_shift trg_trx_shift_update_timestamp; Type: TRIGGER; Schema: trn; Owner: postgres
--

CREATE TRIGGER trg_trx_shift_update_timestamp BEFORE UPDATE ON trn.trx_shift FOR EACH ROW EXECUTE FUNCTION trn.fn_update_timestamp();


--
-- Name: rep_company_summary rep_company_summary_company_id_fkey; Type: FK CONSTRAINT; Schema: endday; Owner: postgres
--

ALTER TABLE ONLY endday.rep_company_summary
    ADD CONSTRAINT rep_company_summary_company_id_fkey FOREIGN KEY (company_id) REFERENCES mdm.mst_company(id);


--
-- Name: rep_country_summary rep_country_summary_country_id_fkey; Type: FK CONSTRAINT; Schema: endday; Owner: postgres
--

ALTER TABLE ONLY endday.rep_country_summary
    ADD CONSTRAINT rep_country_summary_country_id_fkey FOREIGN KEY (country_id) REFERENCES mdm.mst_country(id);


--
-- Name: rep_nationality_summary rep_nationality_summary_nationality_id_fkey; Type: FK CONSTRAINT; Schema: endday; Owner: postgres
--

ALTER TABLE ONLY endday.rep_nationality_summary
    ADD CONSTRAINT rep_nationality_summary_nationality_id_fkey FOREIGN KEY (nationality_id) REFERENCES mdm.mst_nationality(id);


--
-- Name: rep_profile_summary rep_profile_summary_profile_id_fkey; Type: FK CONSTRAINT; Schema: endday; Owner: postgres
--

ALTER TABLE ONLY endday.rep_profile_summary
    ADD CONSTRAINT rep_profile_summary_profile_id_fkey FOREIGN KEY (profile_id) REFERENCES mdm.mst_profile(id);


--
-- Name: rep_rate_summary rep_rate_summary_rate_id_fkey; Type: FK CONSTRAINT; Schema: endday; Owner: postgres
--

ALTER TABLE ONLY endday.rep_rate_summary
    ADD CONSTRAINT rep_rate_summary_rate_id_fkey FOREIGN KEY (rate_id) REFERENCES mdm.mst_rate_master(id);


--
-- Name: rep_revenue_summary rep_revenue_summary_dept_id_fkey; Type: FK CONSTRAINT; Schema: endday; Owner: postgres
--

ALTER TABLE ONLY endday.rep_revenue_summary
    ADD CONSTRAINT rep_revenue_summary_dept_id_fkey FOREIGN KEY (dept_id) REFERENCES mdm.mst_department(id);


--
-- Name: rep_room_summary rep_room_summary_room_id_fkey; Type: FK CONSTRAINT; Schema: endday; Owner: postgres
--

ALTER TABLE ONLY endday.rep_room_summary
    ADD CONSTRAINT rep_room_summary_room_id_fkey FOREIGN KEY (room_id) REFERENCES mdm.mst_room(id);


--
-- Name: rep_source_summary rep_source_summary_source_id_fkey; Type: FK CONSTRAINT; Schema: endday; Owner: postgres
--

ALTER TABLE ONLY endday.rep_source_summary
    ADD CONSTRAINT rep_source_summary_source_id_fkey FOREIGN KEY (source_id) REFERENCES mdm.mst_source(id);


--
-- Name: rep_trancode_summary rep_trancode_summary_tran_code_id_fkey; Type: FK CONSTRAINT; Schema: endday; Owner: postgres
--

ALTER TABLE ONLY endday.rep_trancode_summary
    ADD CONSTRAINT rep_trancode_summary_tran_code_id_fkey FOREIGN KEY (tran_code_id) REFERENCES mdm.mst_trans_code(id);


--
-- Name: mst_building mst_building_hotel_id_fkey; Type: FK CONSTRAINT; Schema: mdm; Owner: postgres
--

ALTER TABLE ONLY mdm.mst_building
    ADD CONSTRAINT mst_building_hotel_id_fkey FOREIGN KEY (hotel_id) REFERENCES mdm.mst_hotel(id);


--
-- Name: mst_floor mst_floor_building_id_fkey; Type: FK CONSTRAINT; Schema: mdm; Owner: postgres
--

ALTER TABLE ONLY mdm.mst_floor
    ADD CONSTRAINT mst_floor_building_id_fkey FOREIGN KEY (building_id) REFERENCES mdm.mst_building(id);


--
-- Name: mst_profile mst_profile_company_id_fkey; Type: FK CONSTRAINT; Schema: mdm; Owner: postgres
--

ALTER TABLE ONLY mdm.mst_profile
    ADD CONSTRAINT mst_profile_company_id_fkey FOREIGN KEY (company_id) REFERENCES mdm.mst_company(id);


--
-- Name: mst_profile mst_profile_guest_type_id_fkey; Type: FK CONSTRAINT; Schema: mdm; Owner: postgres
--

ALTER TABLE ONLY mdm.mst_profile
    ADD CONSTRAINT mst_profile_guest_type_id_fkey FOREIGN KEY (guest_type_id) REFERENCES mdm.mst_guest_type(id);


--
-- Name: mst_profile mst_profile_nationality_id_fkey; Type: FK CONSTRAINT; Schema: mdm; Owner: postgres
--

ALTER TABLE ONLY mdm.mst_profile
    ADD CONSTRAINT mst_profile_nationality_id_fkey FOREIGN KEY (nationality_id) REFERENCES mdm.mst_nationality(id);


--
-- Name: mst_profile mst_profile_title_id_fkey; Type: FK CONSTRAINT; Schema: mdm; Owner: postgres
--

ALTER TABLE ONLY mdm.mst_profile
    ADD CONSTRAINT mst_profile_title_id_fkey FOREIGN KEY (title_id) REFERENCES mdm.mst_title(id);


--
-- Name: mst_profile mst_profile_vip_type_id_fkey; Type: FK CONSTRAINT; Schema: mdm; Owner: postgres
--

ALTER TABLE ONLY mdm.mst_profile
    ADD CONSTRAINT mst_profile_vip_type_id_fkey FOREIGN KEY (vip_type_id) REFERENCES mdm.mst_vip_type(id);


--
-- Name: mst_rate_detail mst_rate_detail_rate_id_fkey; Type: FK CONSTRAINT; Schema: mdm; Owner: postgres
--

ALTER TABLE ONLY mdm.mst_rate_detail
    ADD CONSTRAINT mst_rate_detail_rate_id_fkey FOREIGN KEY (rate_id) REFERENCES mdm.mst_rate_master(id);


--
-- Name: mst_room mst_room_bed_type_id_fkey; Type: FK CONSTRAINT; Schema: mdm; Owner: postgres
--

ALTER TABLE ONLY mdm.mst_room
    ADD CONSTRAINT mst_room_bed_type_id_fkey FOREIGN KEY (bed_type_id) REFERENCES mdm.mst_bed_type(id);


--
-- Name: mst_room mst_room_room_status_id_fkey; Type: FK CONSTRAINT; Schema: mdm; Owner: postgres
--

ALTER TABLE ONLY mdm.mst_room
    ADD CONSTRAINT mst_room_room_status_id_fkey FOREIGN KEY (room_status_id) REFERENCES mdm.mst_room_status(id);


--
-- Name: mst_room mst_room_room_view_id_fkey; Type: FK CONSTRAINT; Schema: mdm; Owner: postgres
--

ALTER TABLE ONLY mdm.mst_room
    ADD CONSTRAINT mst_room_room_view_id_fkey FOREIGN KEY (room_view_id) REFERENCES mdm.mst_room_view(id);


--
-- Name: mst_room_type mst_room_type_hotel_id_fkey; Type: FK CONSTRAINT; Schema: mdm; Owner: postgres
--

ALTER TABLE ONLY mdm.mst_room_type
    ADD CONSTRAINT mst_room_type_hotel_id_fkey FOREIGN KEY (hotel_id) REFERENCES mdm.mst_hotel(id);


--
-- Name: trx_books trx_books_book_header_id_fkey; Type: FK CONSTRAINT; Schema: trn; Owner: postgres
--

ALTER TABLE ONLY trn.trx_books
    ADD CONSTRAINT trx_books_book_header_id_fkey FOREIGN KEY (book_header_id) REFERENCES trn.trx_book_header(id);


--
-- Name: trx_closeshift trx_closeshift_shift_id_fkey; Type: FK CONSTRAINT; Schema: trn; Owner: postgres
--

ALTER TABLE ONLY trn.trx_closeshift
    ADD CONSTRAINT trx_closeshift_shift_id_fkey FOREIGN KEY (shift_id) REFERENCES trn.trx_shift(id);


--
-- Name: trx_folio trx_folio_book_id_fkey; Type: FK CONSTRAINT; Schema: trn; Owner: postgres
--

ALTER TABLE ONLY trn.trx_folio
    ADD CONSTRAINT trx_folio_book_id_fkey FOREIGN KEY (book_id) REFERENCES trn.trx_books(id);


--
-- Name: trx_group_header trx_group_header_company_id_fkey; Type: FK CONSTRAINT; Schema: trn; Owner: postgres
--

ALTER TABLE ONLY trn.trx_group_header
    ADD CONSTRAINT trx_group_header_company_id_fkey FOREIGN KEY (company_id) REFERENCES mdm.mst_company(id);


--
-- Name: trx_group_header trx_group_header_leader_profile_id_fkey; Type: FK CONSTRAINT; Schema: trn; Owner: postgres
--

ALTER TABLE ONLY trn.trx_group_header
    ADD CONSTRAINT trx_group_header_leader_profile_id_fkey FOREIGN KEY (leader_profile_id) REFERENCES mdm.mst_profile(id);


--
-- PostgreSQL database dump complete
--


