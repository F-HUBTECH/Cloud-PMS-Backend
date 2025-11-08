# Master Data API Documentation

## Overview
This document describes all master data endpoints in the `mdm` schema. All endpoints support GET, POST, and PATCH operations with standardized response codes: 200, 201, 404, 400, and 500.

## Base URL
```
http://localhost:3005/api/v1/master-data
```

## Authentication
All endpoints require Bearer token authentication (currently disabled in development).

## Standard Response Codes

| Code | Description |
|------|-------------|
| 200  | OK - Request successful |
| 201  | Created - Resource created successfully |
| 400  | Bad Request - Invalid input data |
| 404  | Not Found - Resource not found |
| 500  | Internal Server Error - Server error |

---

## 1. Bed Types (`/bed-types`)

### Create Bed Type
```http
POST /master-data/bed-types
Content-Type: application/json

{
  "hotelId": "uuid",
  "bedCode": "KING",
  "bedName": "King Size Bed"
}
```

### Get All Bed Types
```http
GET /master-data/bed-types
```

### Get Bed Type by ID
```http
GET /master-data/bed-types/:id
```

### Update Bed Type
```http
PATCH /master-data/bed-types/:id
Content-Type: application/json

{
  "bedName": "Updated King Size Bed"
}
```

---

## 2. Room Status (`/room-status`)

### Create Room Status
```http
POST /master-data/room-status
Content-Type: application/json

{
  "hotelId": "uuid",
  "statusCode": "VC",
  "statusName": "Vacant Clean"
}
```

### Get All Room Statuses
```http
GET /master-data/room-status
```

### Get Room Status by ID
```http
GET /master-data/room-status/:id
```

### Update Room Status
```http
PATCH /master-data/room-status/:id
Content-Type: application/json

{
  "statusName": "Updated Status"
}
```

---

## 3. Room Views (`/room-views`)

### Create Room View
```http
POST /master-data/room-views
Content-Type: application/json

{
  "hotelId": "uuid",
  "viewCode": "SV",
  "viewName": "Sea View"
}
```

### Get All Room Views
```http
GET /master-data/room-views
```

### Get Room View by ID
```http
GET /master-data/room-views/:id
```

### Update Room View
```http
PATCH /master-data/room-views/:id
Content-Type: application/json

{
  "viewName": "Updated View"
}
```

---

## 4. ABF Types (`/abf-types`)

### Create ABF Type
```http
POST /master-data/abf-types
Content-Type: application/json

{
  "hotelId": "uuid",
  "abfCode": "ABF",
  "abfName": "American Breakfast"
}
```

### Get All ABF Types
```http
GET /master-data/abf-types
```

### Get ABF Type by ID
```http
GET /master-data/abf-types/:id
```

### Update ABF Type
```http
PATCH /master-data/abf-types/:id
Content-Type: application/json

{
  "abfName": "Updated Breakfast"
}
```

---

## 5. Channels (`/channels`)

### Create Channel
```http
POST /master-data/channels
Content-Type: application/json

{
  "channelCode": "OTA",
  "channelName": "Online Travel Agency"
}
```

### Get All Channels
```http
GET /master-data/channels
```

### Get Channel by ID
```http
GET /master-data/channels/:id
```

### Update Channel
```http
PATCH /master-data/channels/:id
Content-Type: application/json

{
  "channelName": "Updated Channel"
}
```

---

## 6. Markets (`/markets`)

### Create Market
```http
POST /master-data/markets
Content-Type: application/json

{
  "marketCode": "CORP",
  "marketName": "Corporate"
}
```

### Get All Markets
```http
GET /master-data/markets
```

### Get Market by ID
```http
GET /master-data/markets/:id
```

### Update Market
```http
PATCH /master-data/markets/:id
Content-Type: application/json

{
  "marketName": "Updated Market"
}
```

---

## 7. Companies (`/companies`)

### Create Company
```http
POST /master-data/companies
Content-Type: application/json

{
  "hotelId": "uuid",
  "companyCode": "COMP001",
  "companyName": "ABC Corporation",
  "marketId": "uuid"
}
```

### Get All Companies
```http
GET /master-data/companies
```

### Get Company by ID
```http
GET /master-data/companies/:id
```

### Update Company
```http
PATCH /master-data/companies/:id
Content-Type: application/json

{
  "companyName": "Updated Company"
}
```

---

## 8. Countries (`/countries`)

### Create Country
```http
POST /master-data/countries
Content-Type: application/json

{
  "hotelId": "uuid",
  "countryCode": "TH",
  "countryName": "Thailand"
}
```

### Get All Countries
```http
GET /master-data/countries
```

### Get Country by ID
```http
GET /master-data/countries/:id
```

### Update Country
```http
PATCH /master-data/countries/:id
Content-Type: application/json

{
  "countryName": "Updated Country"
}
```

---

## 9. Departments (`/departments`)

### Create Department
```http
POST /master-data/departments
Content-Type: application/json

{
  "hotelId": "uuid",
  "deptCode": "FO",
  "deptName": "Front Office"
}
```

### Get All Departments
```http
GET /master-data/departments
```

### Get Department by ID
```http
GET /master-data/departments/:id
```

### Update Department
```http
PATCH /master-data/departments/:id
Content-Type: application/json

{
  "deptName": "Updated Department"
}
```

---

## 10. Guest Types (`/guest-types`)

### Create Guest Type
```http
POST /master-data/guest-types
Content-Type: application/json

{
  "hotelId": "uuid",
  "guestTypeCode": "IND",
  "guestTypeName": "Individual"
}
```

### Get All Guest Types
```http
GET /master-data/guest-types
```

### Get Guest Type by ID
```http
GET /master-data/guest-types/:id
```

### Update Guest Type
```http
PATCH /master-data/guest-types/:id
Content-Type: application/json

{
  "guestTypeName": "Updated Guest Type"
}
```

---

## 11. Nationalities (`/nationalities`)

### Create Nationality
```http
POST /master-data/nationalities
Content-Type: application/json

{
  "hotelId": "uuid",
  "nationCode": "TH",
  "nationName": "Thai"
}
```

### Get All Nationalities
```http
GET /master-data/nationalities
```

### Get Nationality by ID
```http
GET /master-data/nationalities/:id
```

### Update Nationality
```http
PATCH /master-data/nationalities/:id
Content-Type: application/json

{
  "nationName": "Updated Nationality"
}
```

---

## 12. Titles (`/titles`)

### Create Title
```http
POST /master-data/titles
Content-Type: application/json

{
  "hotelId": "uuid",
  "titleCode": "MR",
  "titleName": "Mr."
}
```

### Get All Titles
```http
GET /master-data/titles
```

### Get Title by ID
```http
GET /master-data/titles/:id
```

### Update Title
```http
PATCH /master-data/titles/:id
Content-Type: application/json

{
  "titleName": "Updated Title"
}
```

---

## 13. VIP Types (`/vip-types`)

### Create VIP Type
```http
POST /master-data/vip-types
Content-Type: application/json

{
  "hotelId": "uuid",
  "vipCode": "VIP",
  "vipName": "VIP Guest"
}
```

### Get All VIP Types
```http
GET /master-data/vip-types
```

### Get VIP Type by ID
```http
GET /master-data/vip-types/:id
```

### Update VIP Type
```http
PATCH /master-data/vip-types/:id
Content-Type: application/json

{
  "vipName": "Updated VIP Type"
}
```

---

## 14. Buildings (`/buildings`)

### Create Building
```http
POST /master-data/buildings
Content-Type: application/json

{
  "hotelId": "uuid",
  "buildingName": "Building A"
}
```

### Get All Buildings
```http
GET /master-data/buildings
```

### Get Building by ID
```http
GET /master-data/buildings/:id
```

### Update Building
```http
PATCH /master-data/buildings/:id
Content-Type: application/json

{
  "buildingName": "Updated Building"
}
```

---

## 15. Floors (`/floors`)

### Create Floor
```http
POST /master-data/floors
Content-Type: application/json

{
  "buildingId": "uuid",
  "floorName": "1st Floor"
}
```

### Get All Floors
```http
GET /master-data/floors
```

### Get Floor by ID
```http
GET /master-data/floors/:id
```

### Update Floor
```http
PATCH /master-data/floors/:id
Content-Type: application/json

{
  "floorName": "Updated Floor"
}
```

---

## 16. Room Types (`/room-types`)

### Create Room Type
```http
POST /master-data/room-types
Content-Type: application/json

{
  "hotelId": "uuid",
  "roomTypeCode": "DLX",
  "roomTypeName": "Deluxe Room"
}
```

### Get All Room Types
```http
GET /master-data/room-types
```

### Get Room Type by ID
```http
GET /master-data/room-types/:id
```

### Update Room Type
```http
PATCH /master-data/room-types/:id
Content-Type: application/json

{
  "roomTypeName": "Updated Room Type"
}
```

---

## 17. Rate Masters (`/rate-masters`)

### Create Rate Master
```http
POST /master-data/rate-masters
Content-Type: application/json

{
  "hotelId": "uuid",
  "rateCode": "RACK",
  "rateName": "Rack Rate"
}
```

### Get All Rate Masters
```http
GET /master-data/rate-masters
```

### Get Rate Master by ID
```http
GET /master-data/rate-masters/:id
```

### Update Rate Master
```http
PATCH /master-data/rate-masters/:id
Content-Type: application/json

{
  "rateName": "Updated Rate"
}
```

---

## 18. Rate Details (`/rate-details`)

### Create Rate Detail
```http
POST /master-data/rate-details
Content-Type: application/json

{
  "hotelId": "uuid",
  "rateId": "uuid",
  "effectiveDate": "2024-01-01",
  "price": 2500.00
}
```

### Get All Rate Details
```http
GET /master-data/rate-details
```

### Get Rate Detail by ID
```http
GET /master-data/rate-details/:id
```

### Update Rate Detail
```http
PATCH /master-data/rate-details/:id
Content-Type: application/json

{
  "price": 2800.00
}
```

---

## 19. Transaction Codes (`/trans-codes`)

### Create Transaction Code
```http
POST /master-data/trans-codes
Content-Type: application/json

{
  "hotelId": "uuid",
  "transCode": "ROOM",
  "transName": "Room Charge",
  "vatPercent": 7.00,
  "servicePercent": 10.00,
  "tranType": "T",
  "groupId": "GRP01",
  "vatType": "VAT1",
  "isTaxable": true,
  "isRebate": false,
  "isCityLedger": false,
  "isDeposit": false,
  "allowManualPost": true,
  "requireRefer": false,
  "requireRemark": false,
  "arTransferCode": "AR001",
  "payType": "CASH"
}
```

### Get All Transaction Codes
```http
GET /master-data/trans-codes
```

### Get Transaction Code by ID
```http
GET /master-data/trans-codes/:id
```

### Update Transaction Code
```http
PATCH /master-data/trans-codes/:id
Content-Type: application/json

{
  "transName": "Updated Transaction",
  "vatPercent": 7.50
}
```

---

## Error Response Format

All errors follow this standard format:

```json
{
  "statusCode": 400,
  "timestamp": "2024-01-01T12:00:00.000Z",
  "path": "/api/v1/master-data/bed-types",
  "method": "POST",
  "message": "Validation failed",
  "error": "Bad Request"
}
```

## Success Response Format

### GET (Single Item) - 200
```json
{
  "id": "uuid",
  "hotelId": "uuid",
  "bedCode": "KING",
  "bedName": "King Size Bed",
  "createdAt": "2024-01-01T12:00:00.000Z",
  "updatedAt": "2024-01-01T12:00:00.000Z"
}
```

### GET (List) - 200
```json
[
  {
    "id": "uuid",
    "hotelId": "uuid",
    "bedCode": "KING",
    "bedName": "King Size Bed",
    "createdAt": "2024-01-01T12:00:00.000Z",
    "updatedAt": "2024-01-01T12:00:00.000Z"
  }
]
```

### POST - 201
```json
{
  "id": "uuid",
  "hotelId": "uuid",
  "bedCode": "KING",
  "bedName": "King Size Bed",
  "createdAt": "2024-01-01T12:00:00.000Z",
  "updatedAt": "2024-01-01T12:00:00.000Z"
}
```

### PATCH - 200
```json
{
  "id": "uuid",
  "hotelId": "uuid",
  "bedCode": "KING",
  "bedName": "Updated King Size Bed",
  "createdAt": "2024-01-01T12:00:00.000Z",
  "updatedAt": "2024-01-01T13:00:00.000Z"
}
```

---

## Testing with cURL

### Example: Create a Bed Type
```bash
curl -X POST http://localhost:3005/api/v1/master-data/bed-types \
  -H "Content-Type: application/json" \
  -d '{
    "hotelId": "123e4567-e89b-12d3-a456-426614174000",
    "bedCode": "KING",
    "bedName": "King Size Bed"
  }'
```

### Example: Get All Bed Types
```bash
curl -X GET http://localhost:3005/api/v1/master-data/bed-types
```

### Example: Update a Bed Type
```bash
curl -X PATCH http://localhost:3005/api/v1/master-data/bed-types/123e4567-e89b-12d3-a456-426614174000 \
  -H "Content-Type: application/json" \
  -d '{
    "bedName": "Updated King Size Bed"
  }'
```

---

## Swagger Documentation

Interactive API documentation is available at:
```
http://localhost:3005/api/docs
```

All master data endpoints are grouped under "Master Data" tags in Swagger UI for easy testing and exploration.
