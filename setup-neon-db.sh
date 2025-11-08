#!/bin/bash

# Setup script for Neon PostgreSQL Database
# This script will create the schema and tables for PMS Backend

echo "🚀 Setting up PMS Backend Database on Neon PostgreSQL..."
echo ""

# Database connection details
DB_HOST="ep-dark-mountain-a19e8izx-pooler.ap-southeast-1.aws.neon.tech"
DB_PORT="5432"
DB_NAME="neondb"
DB_USER="neondb_owner"
DB_PASSWORD="npg_4fGIz6YVDKqd"

# Connection string
export PGPASSWORD=$DB_PASSWORD

echo "📊 Creating schema and tables..."
psql "postgresql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?sslmode=require" -f database-schema.sql

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Database setup completed successfully!"
    echo ""
    echo "Next steps:"
    echo "1. Run: npm run start:dev"
    echo "2. Visit: http://localhost:3005/api/docs"
    echo ""
else
    echo ""
    echo "❌ Database setup failed. Please check your connection details."
    echo ""
fi

unset PGPASSWORD
