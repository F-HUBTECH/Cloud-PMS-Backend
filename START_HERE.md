# 🎯 START HERE - PMS Backend

## ✅ Everything is Ready!

Your complete NestJS backend with TypeScript, PostgreSQL, and JWT authentication is fully set up.

---

## 🚀 Quick Start (3 Steps)

### Step 1: Start the Server
```bash
npm run start:dev
```

### Step 2: Open Swagger UI
```
http://localhost:3005/api/docs
```

### Step 3: Test the API
1. Click **"POST /api/v1/auth/register"**
2. Click **"Try it out"**
3. Register a user:
```json
{
  "username": "admin",
  "email": "admin@example.com",
  "password": "Admin123!"
}
```
4. Copy the `accessToken` from response
5. Click **"Authorize"** button (top right)
6. Paste: `Bearer YOUR_TOKEN_HERE`
7. Now you can test all endpoints!

---

## 📊 What's Included

### ✅ Modules Created
- **Auth Module**: Login, Register, JWT authentication
- **User Module**: Full CRUD operations
- **Hotel Module**: Hotel management with entities

### ✅ Database Setup
- **Neon PostgreSQL**: Cloud database configured
- **Schema**: `mdm` schema created
- **Tables**: 30+ master data tables
- **Connection**: SSL enabled, ready to use

### ✅ Features
- JWT Authentication with bcrypt
- Global validation with class-validator
- Swagger API documentation
- Exception handling & error formatting
- Response transformation
- TypeORM with PostgreSQL
- Base entity with timestamps

---

## 📁 Key Files

| File | Purpose |
|------|---------|
| `QUICK_START.md` | Detailed quick start guide |
| `README.md` | Complete documentation |
| `PROJECT_SUMMARY.md` | Project overview |
| `.env` | Environment variables (configured) |
| `database-schema.sql` | Database schema |

---

## 🌐 URLs

- **Swagger Docs**: http://localhost:3005/api/docs
- **Health Check**: http://localhost:3005/api/v1/health
- **API Base**: http://localhost:3005/api/v1

---

## 📝 Example API Calls

### Register User
```bash
curl -X POST http://localhost:3005/api/v1/auth/register \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","email":"admin@example.com","password":"Admin123!"}'
```

### Login
```bash
curl -X POST http://localhost:3005/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"Admin123!"}'
```

### Get Users (Protected)
```bash
curl -X GET http://localhost:3005/api/v1/users \
  -H "Authorization: Bearer YOUR_TOKEN"
```

---

## 🗄️ Database Info

**Neon PostgreSQL** (Already Connected)
```
Host: ep-dark-mountain-a19e8izx-pooler.ap-southeast-1.aws.neon.tech
Database: neondb
Schema: mdm
Status: ✅ Connected & Tables Created
```

---

## 🎉 You're All Set!

Just run `npm run start:dev` and visit http://localhost:3005/api/docs

**Best way to test**: Use Swagger UI - it's interactive and easy!
