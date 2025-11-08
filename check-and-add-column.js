const { Client } = require('pg');
require('dotenv').config();

async function checkAndAddColumn() {
  const client = new Client({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    ssl: process.env.DB_SSL === 'true' ? { rejectUnauthorized: false } : false,
  });

  try {
    await client.connect();
    console.log('✅ Connected to database\n');

    // Check if column exists in mst_market
    const checkResult = await client.query(`
      SELECT column_name 
      FROM information_schema.columns 
      WHERE table_schema = 'mdm' 
        AND table_name = 'mst_market' 
        AND column_name = 'is_active';
    `);

    if (checkResult.rows.length > 0) {
      console.log('✅ Column is_active already exists in mdm.mst_market');
    } else {
      console.log('❌ Column is_active does NOT exist in mdm.mst_market');
      console.log('📝 Adding column now...\n');
      
      await client.query(`
        ALTER TABLE mdm.mst_market 
        ADD COLUMN is_active BOOLEAN DEFAULT true;
      `);
      
      console.log('✅ Column added successfully!');
    }

    // Test query
    console.log('\n🔍 Testing query...');
    const testResult = await client.query(`
      SELECT id, market_code, market_name, is_active 
      FROM mdm.mst_market 
      LIMIT 1;
    `);
    
    console.log('✅ Query successful!');
    console.log('Sample data:', testResult.rows[0]);

  } catch (error) {
    console.error('❌ Error:', error.message);
    console.error('Full error:', error);
  } finally {
    await client.end();
    console.log('\n✅ Database connection closed');
  }
}

checkAndAddColumn();
