const { Client } = require('pg');
const fs = require('fs');
const path = require('path');

// Neon PostgreSQL connection
const client = new Client({
  host: 'ep-dark-mountain-a19e8izx-pooler.ap-southeast-1.aws.neon.tech',
  port: 5432,
  database: 'neondb',
  user: 'neondb_owner',
  password: 'npg_4fGIz6YVDKqd',
  ssl: {
    rejectUnauthorized: false
  }
});

async function setupDatabase() {
  try {
    console.log('🚀 Connecting to Neon PostgreSQL...\n');
    await client.connect();
    console.log('✅ Connected successfully!\n');

    console.log('📊 Creating schema and tables...\n');
    
    // Read SQL file
    const sqlFile = path.join(__dirname, 'database-schema.sql');
    const sql = fs.readFileSync(sqlFile, 'utf8');

    // Execute SQL
    await client.query(sql);

    console.log('✅ Database schema created successfully!\n');
    console.log('📋 Summary:');
    console.log('   - Schema: mdm');
    console.log('   - Tables: 30+ master data tables');
    console.log('   - Users table: public.users\n');
    
    console.log('🎉 Setup completed!\n');
    console.log('Next steps:');
    console.log('1. Run: npm run start:dev');
    console.log('2. Visit: http://localhost:3005/api/docs\n');

  } catch (error) {
    console.error('❌ Error setting up database:', error.message);
    console.error('\nDetails:', error);
  } finally {
    await client.end();
  }
}

setupDatabase();
