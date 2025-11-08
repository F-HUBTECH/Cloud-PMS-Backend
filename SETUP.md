# 🚀 Quick Setup Guide

## Step 1: Copy Environment File

```bash
cp .env.example .env
```

Then edit `.env` with your database credentials:

```env
# Database Configuration
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=your_password_here
DB_DATABASE=pms_db
DB_SCHEMA=mdm

# JWT Secret (Change this!)
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
```

## Step 2: Create Database

Connect to PostgreSQL and run:

```sql
CREATE DATABASE pms_db;
\c pms_db
CREATE SCHEMA mdm;
```

Or use the command line:

```bash
psql -U postgres -c "CREATE DATABASE pms_db;"
psql -U postgres -d pms_db -c "CREATE SCHEMA mdm;"
```

## Step 3: Create Users Table

Since we're using `DB_SYNCHRONIZE=false`, you need to create the users table manually:

```sql
\c pms_db

CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    username VARCHAR(100) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT now() NOT NULL,
    updated_at TIMESTAMP DEFAULT now() NOT NULL
);

-- Create update timestamp trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger for users table
CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
```

## Step 4: Run the Application

```bash
npm run start:dev
```

## Step 5: Test the API

### Access Swagger Documentation
Open your browser: http://localhost:3005/api/docs

### Test Health Check
```bash
curl http://localhost:3005/api/v1/health
```

### Register a User
```bash
curl -X POST http://localhost:3005/api/v1/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "username": "admin",
    "email": "admin@example.com",
    "password": "Admin123!"
  }'
```

### Login
```bash
curl -X POST http://localhost:3005/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "username": "admin",
    "password": "Admin123!"
  }'
```

Save the `accessToken` from the response.

### Access Protected Endpoint
```bash
curl -X GET http://localhost:3005/api/v1/users \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN_HERE"
```

## 🎉 You're Ready!

Your NestJS backend is now running with:
- ✅ JWT Authentication
- ✅ User Management
- ✅ Hotel Management
- ✅ Swagger Documentation
- ✅ PostgreSQL Database
- ✅ TypeORM Integration
- ✅ Global Validation
- ✅ Error Handling

## 📝 Next Steps

1. **Import your existing database schema** into the `mdm` schema
2. **Create additional modules** for other master data tables
3. **Add business logic** to services
4. **Implement additional features** as needed
5. **Write tests** for your endpoints
6. **Deploy to production**

## 🔧 Troubleshooting

### Port Already in Use
```bash
# Change PORT in .env file
PORT=3001
```

### Database Connection Error
- Check PostgreSQL is running: `sudo systemctl status postgresql`
- Verify credentials in `.env`
- Ensure database and schema exist

### Module Not Found
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### TypeORM Synchronize Warning
For production, always use migrations instead of `DB_SYNCHRONIZE=true`

```bash
npm run migration:generate -- src/migrations/InitialMigration
npm run migration:run
```
