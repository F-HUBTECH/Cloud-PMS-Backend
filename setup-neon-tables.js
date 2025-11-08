const { Client } = require('pg');
require('dotenv').config();

const client = new Client({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  ssl: process.env.DB_SSL === 'true' ? { rejectUnauthorized: false } : false,
});

async function setupDatabase() {
  try {
    await client.connect();
    console.log('✅ Connected to Neon PostgreSQL');

    // Create mdm schema
    await client.query('CREATE SCHEMA IF NOT EXISTS mdm;');
    console.log('✅ Schema mdm created');

    // Create update timestamp function
    await client.query(`
      CREATE OR REPLACE FUNCTION mdm.fn_update_timestamp()
      RETURNS TRIGGER AS $$
      BEGIN
          NEW.updated_at = now();
          RETURN NEW;
      END;
      $$ language 'plpgsql';
    `);
    console.log('✅ Update timestamp function created');

    // Create all master data tables
    const tables = [
      // Bed Type
      `CREATE TABLE IF NOT EXISTS mdm.mst_bed_type (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        hotel_id UUID NOT NULL,
        bed_code VARCHAR(10),
        bed_name VARCHAR(100),
        created_at TIMESTAMP DEFAULT now() NOT NULL,
        updated_at TIMESTAMP DEFAULT now() NOT NULL
      );`,
      
      // Room Status
      `CREATE TABLE IF NOT EXISTS mdm.mst_room_status (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        hotel_id UUID NOT NULL,
        status_code VARCHAR(10),
        status_name VARCHAR(100),
        created_at TIMESTAMP DEFAULT now() NOT NULL,
        updated_at TIMESTAMP DEFAULT now() NOT NULL
      );`,
      
      // Room View
      `CREATE TABLE IF NOT EXISTS mdm.mst_room_view (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        hotel_id UUID NOT NULL,
        view_code VARCHAR(10),
        view_name VARCHAR(100),
        created_at TIMESTAMP DEFAULT now() NOT NULL,
        updated_at TIMESTAMP DEFAULT now() NOT NULL
      );`,
      
      // ABF Type
      `CREATE TABLE IF NOT EXISTS mdm.mst_abf_type (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        hotel_id UUID NOT NULL,
        abf_code VARCHAR(10),
        abf_name VARCHAR(100),
        created_at TIMESTAMP DEFAULT now() NOT NULL,
        updated_at TIMESTAMP DEFAULT now() NOT NULL
      );`,
      
      // Channel
      `CREATE TABLE IF NOT EXISTS mdm.mst_channel (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        channel_code VARCHAR(10),
        channel_name VARCHAR(100),
        created_at TIMESTAMP DEFAULT now(),
        updated_at TIMESTAMP DEFAULT now()
      );`,
      
      // Market
      `CREATE TABLE IF NOT EXISTS mdm.mst_market (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        market_code VARCHAR(10),
        market_name VARCHAR(100),
        created_at TIMESTAMP DEFAULT now(),
        updated_at TIMESTAMP DEFAULT now()
      );`,
      
      // Company
      `CREATE TABLE IF NOT EXISTS mdm.mst_company (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        hotel_id UUID NOT NULL,
        company_code VARCHAR(20),
        company_name VARCHAR(255),
        market_id UUID,
        created_at TIMESTAMP DEFAULT now() NOT NULL,
        updated_at TIMESTAMP DEFAULT now() NOT NULL
      );`,
      
      // Country
      `CREATE TABLE IF NOT EXISTS mdm.mst_country (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        hotel_id UUID NOT NULL,
        country_code VARCHAR(10),
        country_name VARCHAR(100),
        created_at TIMESTAMP DEFAULT now() NOT NULL,
        updated_at TIMESTAMP DEFAULT now() NOT NULL
      );`,
      
      // Department
      `CREATE TABLE IF NOT EXISTS mdm.mst_department (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        hotel_id UUID NOT NULL,
        dept_code VARCHAR(10),
        dept_name VARCHAR(100),
        created_at TIMESTAMP DEFAULT now() NOT NULL,
        updated_at TIMESTAMP DEFAULT now() NOT NULL
      );`,
      
      // Guest Type
      `CREATE TABLE IF NOT EXISTS mdm.mst_guest_type (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        hotel_id UUID NOT NULL,
        guest_type_code VARCHAR(10),
        guest_type_name VARCHAR(100),
        created_at TIMESTAMP DEFAULT now() NOT NULL,
        updated_at TIMESTAMP DEFAULT now() NOT NULL
      );`,
      
      // Nationality
      `CREATE TABLE IF NOT EXISTS mdm.mst_nationality (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        hotel_id UUID NOT NULL,
        nation_code VARCHAR(10),
        nation_name VARCHAR(100),
        created_at TIMESTAMP DEFAULT now() NOT NULL,
        updated_at TIMESTAMP DEFAULT now() NOT NULL
      );`,
      
      // Title
      `CREATE TABLE IF NOT EXISTS mdm.mst_title (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        hotel_id UUID NOT NULL,
        title_code VARCHAR(10),
        title_name VARCHAR(50),
        created_at TIMESTAMP DEFAULT now() NOT NULL,
        updated_at TIMESTAMP DEFAULT now() NOT NULL
      );`,
      
      // VIP Type
      `CREATE TABLE IF NOT EXISTS mdm.mst_vip_type (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        hotel_id UUID NOT NULL,
        vip_code VARCHAR(10),
        vip_name VARCHAR(100),
        created_at TIMESTAMP DEFAULT now() NOT NULL,
        updated_at TIMESTAMP DEFAULT now() NOT NULL
      );`,
      
      // Building
      `CREATE TABLE IF NOT EXISTS mdm.mst_building (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        hotel_id UUID,
        building_name VARCHAR(100),
        created_at TIMESTAMP DEFAULT now(),
        updated_at TIMESTAMP DEFAULT now()
      );`,
      
      // Floor
      `CREATE TABLE IF NOT EXISTS mdm.mst_floor (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        building_id UUID,
        floor_name VARCHAR(50),
        created_at TIMESTAMP DEFAULT now(),
        updated_at TIMESTAMP DEFAULT now()
      );`,
      
      // Room Type
      `CREATE TABLE IF NOT EXISTS mdm.mst_room_type (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        hotel_id UUID,
        room_type_code VARCHAR(10) UNIQUE,
        room_type_name VARCHAR(100),
        created_at TIMESTAMP DEFAULT now(),
        updated_at TIMESTAMP DEFAULT now()
      );`,
      
      // Rate Master
      `CREATE TABLE IF NOT EXISTS mdm.mst_rate_master (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        hotel_id UUID NOT NULL,
        rate_code VARCHAR(10),
        rate_name VARCHAR(100),
        created_at TIMESTAMP DEFAULT now() NOT NULL,
        updated_at TIMESTAMP DEFAULT now() NOT NULL
      );`,
      
      // Rate Detail
      `CREATE TABLE IF NOT EXISTS mdm.mst_rate_detail (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        hotel_id UUID NOT NULL,
        rate_id UUID,
        effective_date DATE,
        price NUMERIC(10, 2),
        created_at TIMESTAMP DEFAULT now() NOT NULL,
        updated_at TIMESTAMP DEFAULT now() NOT NULL
      );`,
      
      // Transaction Code
      `CREATE TABLE IF NOT EXISTS mdm.mst_trans_code (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        hotel_id UUID NOT NULL,
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
      );`,
    ];

    for (let i = 0; i < tables.length; i++) {
      await client.query(tables[i]);
      console.log(`✅ Table ${i + 1}/${tables.length} created`);
    }

    // Create triggers
    const triggers = [
      'mst_bed_type',
      'mst_room_status',
      'mst_room_view',
      'mst_abf_type',
      'mst_company',
      'mst_country',
      'mst_department',
      'mst_guest_type',
      'mst_nationality',
      'mst_title',
      'mst_vip_type',
      'mst_rate_master',
      'mst_rate_detail',
    ];

    for (const table of triggers) {
      await client.query(`
        DROP TRIGGER IF EXISTS trg_${table}_update_timestamp ON mdm.${table};
        CREATE TRIGGER trg_${table}_update_timestamp 
        BEFORE UPDATE ON mdm.${table}
        FOR EACH ROW EXECUTE FUNCTION mdm.fn_update_timestamp();
      `);
    }
    console.log('✅ Triggers created');

    console.log('\n🎉 Database setup completed successfully!');
    console.log('📊 19 master data tables created in mdm schema');
    console.log('\n✅ You can now test the API endpoints');
    
  } catch (error) {
    console.error('❌ Error setting up database:', error.message);
    process.exit(1);
  } finally {
    await client.end();
  }
}

setupDatabase();
