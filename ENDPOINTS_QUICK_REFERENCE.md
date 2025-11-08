# Master Data Endpoints - Quick Reference

## Base URL
```
http://localhost:3005/api/v1/master-data
```

## All Endpoints (19 Entities × 4 Operations = 76 Endpoints)

| Entity | POST (Create) | GET (All) | GET (By ID) | PATCH (Update) |
|--------|---------------|-----------|-------------|----------------|
| **Bed Types** | `POST /bed-types` | `GET /bed-types` | `GET /bed-types/:id` | `PATCH /bed-types/:id` |
| **Room Status** | `POST /room-status` | `GET /room-status` | `GET /room-status/:id` | `PATCH /room-status/:id` |
| **Room Views** | `POST /room-views` | `GET /room-views` | `GET /room-views/:id` | `PATCH /room-views/:id` |
| **ABF Types** | `POST /abf-types` | `GET /abf-types` | `GET /abf-types/:id` | `PATCH /abf-types/:id` |
| **Channels** | `POST /channels` | `GET /channels` | `GET /channels/:id` | `PATCH /channels/:id` |
| **Markets** | `POST /markets` | `GET /markets` | `GET /markets/:id` | `PATCH /markets/:id` |
| **Companies** | `POST /companies` | `GET /companies` | `GET /companies/:id` | `PATCH /companies/:id` |
| **Countries** | `POST /countries` | `GET /countries` | `GET /countries/:id` | `PATCH /countries/:id` |
| **Departments** | `POST /departments` | `GET /departments` | `GET /departments/:id` | `PATCH /departments/:id` |
| **Guest Types** | `POST /guest-types` | `GET /guest-types` | `GET /guest-types/:id` | `PATCH /guest-types/:id` |
| **Nationalities** | `POST /nationalities` | `GET /nationalities` | `GET /nationalities/:id` | `PATCH /nationalities/:id` |
| **Titles** | `POST /titles` | `GET /titles` | `GET /titles/:id` | `PATCH /titles/:id` |
| **VIP Types** | `POST /vip-types` | `GET /vip-types` | `GET /vip-types/:id` | `PATCH /vip-types/:id` |
| **Buildings** | `POST /buildings` | `GET /buildings` | `GET /buildings/:id` | `PATCH /buildings/:id` |
| **Floors** | `POST /floors` | `GET /floors` | `GET /floors/:id` | `PATCH /floors/:id` |
| **Room Types** | `POST /room-types` | `GET /room-types` | `GET /room-types/:id` | `PATCH /room-types/:id` |
| **Rate Masters** | `POST /rate-masters` | `GET /rate-masters` | `GET /rate-masters/:id` | `PATCH /rate-masters/:id` |
| **Rate Details** | `POST /rate-details` | `GET /rate-details` | `GET /rate-details/:id` | `PATCH /rate-details/:id` |
| **Transaction Codes** | `POST /trans-codes` | `GET /trans-codes` | `GET /trans-codes/:id` | `PATCH /trans-codes/:id` |

## Response Codes

| Code | Status | Description |
|------|--------|-------------|
| 200 | OK | Success (GET, PATCH) |
| 201 | Created | Success (POST) |
| 400 | Bad Request | Invalid input |
| 404 | Not Found | Resource not found |
| 500 | Internal Server Error | Server error |

## Quick Test Commands

### Create
```bash
curl -X POST http://localhost:3005/api/v1/master-data/bed-types \
  -H "Content-Type: application/json" \
  -d '{"hotelId":"uuid","bedCode":"KING","bedName":"King Size Bed"}'
```

### Get All
```bash
curl http://localhost:3005/api/v1/master-data/bed-types
```

### Get By ID
```bash
curl http://localhost:3005/api/v1/master-data/bed-types/{id}
```

### Update
```bash
curl -X PATCH http://localhost:3005/api/v1/master-data/bed-types/{id} \
  -H "Content-Type: application/json" \
  -d '{"bedName":"Updated Name"}'
```

## Swagger UI
http://localhost:3005/api/docs
