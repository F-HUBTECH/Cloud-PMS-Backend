# Master Data API - Setup & Testing Guide

## ✅ Implementation Complete

All master data endpoints for the `mdm` schema have been successfully created with GET, POST, and PATCH operations.

### 📊 Master Data Entities Created (19 total)

1. **Bed Types** - `/master-data/bed-types`
2. **Room Status** - `/master-data/room-status`
3. **Room Views** - `/master-data/room-views`
4. **ABF Types** - `/master-data/abf-types`
5. **Channels** - `/master-data/channels`
6. **Markets** - `/master-data/markets`
7. **Companies** - `/master-data/companies`
8. **Countries** - `/master-data/countries`
9. **Departments** - `/master-data/departments`
10. **Guest Types** - `/master-data/guest-types`
11. **Nationalities** - `/master-data/nationalities`
12. **Titles** - `/master-data/titles`
13. **VIP Types** - `/master-data/vip-types`
14. **Buildings** - `/master-data/buildings`
15. **Floors** - `/master-data/floors`
16. **Room Types** - `/master-data/room-types`
17. **Rate Masters** - `/master-data/rate-masters`
18. **Rate Details** - `/master-data/rate-details`
19. **Transaction Codes** - `/master-data/trans-codes`

---

## 🚀 Quick Start

### 1. Ensure Database is Running

Make sure your PostgreSQL database is running and the schema exists:

```bash
# Connect to PostgreSQL
psql -U postgres

# Create database if not exists
CREATE DATABASE pms_db;

# Connect to the database
\c pms_db

# Create mdm schema
CREATE SCHEMA IF NOT EXISTS mdm;

# Run the database schema script
\i database-schema.sql

# Or from command line:
psql -U postgres -d pms_db -f database-schema.sql
```

### 2. Configure Environment

Ensure your `.env` file has correct database credentials:

```env
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=your_password
DB_DATABASE=pms_db
DB_SCHEMA=mdm
```

### 3. Start the Application

```bash
npm run start:dev
```

The application will be available at:
- **API**: http://localhost:3005/api/v1
- **Swagger Docs**: http://localhost:3005/api/docs

---

## 🧪 Testing the Endpoints

### Test 1: Create a Bed Type

```bash
curl -X POST http://localhost:3005/api/v1/master-data/bed-types \
  -H "Content-Type: application/json" \
  -d '{
    "hotelId": "123e4567-e89b-12d3-a456-426614174000",
    "bedCode": "KING",
    "bedName": "King Size Bed"
  }'
```

**Expected Response (201):**
```json
{
  "id": "generated-uuid",
  "hotelId": "123e4567-e89b-12d3-a456-426614174000",
  "bedCode": "KING",
  "bedName": "King Size Bed",
  "createdAt": "2025-11-08T12:00:00.000Z",
  "updatedAt": "2025-11-08T12:00:00.000Z"
}
```

### Test 2: Get All Bed Types

```bash
curl -X GET http://localhost:3005/api/v1/master-data/bed-types
```

**Expected Response (200):**
```json
[
  {
    "id": "uuid",
    "hotelId": "uuid",
    "bedCode": "KING",
    "bedName": "King Size Bed",
    "createdAt": "2025-11-08T12:00:00.000Z",
    "updatedAt": "2025-11-08T12:00:00.000Z"
  }
]
```

### Test 3: Get Bed Type by ID

```bash
curl -X GET http://localhost:3005/api/v1/master-data/bed-types/{id}
```

**Expected Response (200):** Single bed type object

**Error Response (404):**
```json
{
  "statusCode": 404,
  "timestamp": "2025-11-08T12:00:00.000Z",
  "path": "/api/v1/master-data/bed-types/invalid-id",
  "method": "GET",
  "message": "Bed Type with ID invalid-id not found",
  "error": "Not Found"
}
```

### Test 4: Update Bed Type

```bash
curl -X PATCH http://localhost:3005/api/v1/master-data/bed-types/{id} \
  -H "Content-Type: application/json" \
  -d '{
    "bedName": "Updated King Size Bed"
  }'
```

**Expected Response (200):** Updated bed type object

---

## 📋 Response Codes Summary

| Code | Description | When It Occurs |
|------|-------------|----------------|
| **200** | OK | Successful GET or PATCH request |
| **201** | Created | Successful POST request |
| **400** | Bad Request | Invalid input data, validation errors, duplicate codes |
| **404** | Not Found | Resource with given ID doesn't exist |
| **500** | Internal Server Error | Database connection issues, unexpected errors |

---

## 🎯 Common Test Scenarios

### Scenario 1: Create Multiple Master Data Items

```bash
# Create a hotel first (if not exists)
HOTEL_ID="123e4567-e89b-12d3-a456-426614174000"

# Create bed types
curl -X POST http://localhost:3005/api/v1/master-data/bed-types \
  -H "Content-Type: application/json" \
  -d "{\"hotelId\":\"$HOTEL_ID\",\"bedCode\":\"KING\",\"bedName\":\"King Size Bed\"}"

curl -X POST http://localhost:3005/api/v1/master-data/bed-types \
  -H "Content-Type: application/json" \
  -d "{\"hotelId\":\"$HOTEL_ID\",\"bedCode\":\"QUEEN\",\"bedName\":\"Queen Size Bed\"}"

# Create room statuses
curl -X POST http://localhost:3005/api/v1/master-data/room-status \
  -H "Content-Type: application/json" \
  -d "{\"hotelId\":\"$HOTEL_ID\",\"statusCode\":\"VC\",\"statusName\":\"Vacant Clean\"}"

curl -X POST http://localhost:3005/api/v1/master-data/room-status \
  -H "Content-Type: application/json" \
  -d "{\"hotelId\":\"$HOTEL_ID\",\"statusCode\":\"OC\",\"statusName\":\"Occupied Clean\"}"

# Create room views
curl -X POST http://localhost:3005/api/v1/master-data/room-views \
  -H "Content-Type: application/json" \
  -d "{\"hotelId\":\"$HOTEL_ID\",\"viewCode\":\"SV\",\"viewName\":\"Sea View\"}"

curl -X POST http://localhost:3005/api/v1/master-data/room-views \
  -H "Content-Type: application/json" \
  -d "{\"hotelId\":\"$HOTEL_ID\",\"viewCode\":\"CV\",\"viewName\":\"City View\"}"
```

### Scenario 2: Test Error Handling

```bash
# Test 400 - Invalid UUID
curl -X GET http://localhost:3005/api/v1/master-data/bed-types/invalid-uuid

# Test 404 - Non-existent ID
curl -X GET http://localhost:3005/api/v1/master-data/bed-types/123e4567-e89b-12d3-a456-426614174999

# Test 400 - Missing required field
curl -X POST http://localhost:3005/api/v1/master-data/bed-types \
  -H "Content-Type: application/json" \
  -d '{}'
```

---

## 🔍 Using Swagger UI

The easiest way to test all endpoints is through Swagger UI:

1. Open http://localhost:3005/api/docs
2. Find the "Master Data" sections
3. Click on any endpoint to expand it
4. Click "Try it out"
5. Fill in the request body
6. Click "Execute"
7. View the response

All 19 master data endpoints are documented with:
- Request/Response schemas
- Example values
- Response codes
- Try-it-out functionality

---

## 📁 Project Structure

```
src/modules/master-data/
├── controllers/          # 19 controllers (one per entity)
│   ├── bed-type.controller.ts
│   ├── room-status.controller.ts
│   ├── room-view.controller.ts
│   └── ... (16 more)
├── dto/                  # Create & Update DTOs
│   ├── bed-type.dto.ts
│   ├── room-status.dto.ts
│   └── ... (17 more)
├── entities/             # TypeORM entities
│   ├── bed-type.entity.ts
│   ├── room-status.entity.ts
│   └── ... (17 more)
├── services/             # Business logic
│   ├── base-master-data.service.ts  # Base service with CRUD
│   ├── bed-type.service.ts
│   ├── room-status.service.ts
│   └── ... (17 more)
└── master-data.module.ts # Module registration
```

---

## ✨ Features Implemented

### ✅ Standardized Responses
- **200 OK** - Successful retrieval or update
- **201 Created** - Successful creation
- **400 Bad Request** - Validation errors, duplicate codes
- **404 Not Found** - Resource not found
- **500 Internal Server Error** - Database or server errors

### ✅ Error Handling
- Global exception filter
- Validation pipe with class-validator
- Duplicate code detection
- Database error handling
- Detailed error messages

### ✅ Validation
- UUID validation for IDs
- Required field validation
- String length validation
- Type validation (numbers, dates, booleans)

### ✅ Swagger Documentation
- All endpoints documented
- Request/Response schemas
- Example values
- Grouped by entity type

### ✅ Base Service Pattern
- Reusable CRUD operations
- Consistent error handling
- TypeORM integration
- Generic type support

---

## 🎉 Summary

**Total Endpoints Created: 57**
- 19 POST endpoints (Create)
- 19 GET endpoints (List all)
- 19 GET endpoints (Get by ID)
- 19 PATCH endpoints (Update)

**All endpoints support:**
- ✅ Standard HTTP status codes (200, 201, 400, 404, 500)
- ✅ JSON request/response format
- ✅ Input validation
- ✅ Error handling
- ✅ Swagger documentation
- ✅ TypeORM integration with mdm schema

---

## 📚 Additional Documentation

- **Full API Documentation**: See `MASTER_DATA_API.md`
- **Database Schema**: See `database-schema.sql`
- **Project Summary**: See `PROJECT_SUMMARY.md`

---

## 🐛 Troubleshooting

### Issue: 500 Internal Server Error on GET requests

**Cause**: Database tables don't exist or database connection failed

**Solution**:
```bash
# Run the database schema script
psql -U postgres -d pms_db -f database-schema.sql

# Or manually create tables
psql -U postgres -d pms_db
\i database-schema.sql
```

### Issue: Connection refused

**Cause**: PostgreSQL is not running

**Solution**:
```bash
# Start PostgreSQL (Ubuntu/Debian)
sudo systemctl start postgresql

# Or (macOS with Homebrew)
brew services start postgresql
```

### Issue: Authentication failed

**Cause**: Wrong database credentials in `.env`

**Solution**: Update `.env` with correct credentials and restart the app

---

**🎊 All master data endpoints are ready to use!**
