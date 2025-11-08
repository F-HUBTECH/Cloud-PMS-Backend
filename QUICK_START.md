# 🚀 Quick Start Guide - PMS Backend

## ✅ What's Already Done

1. ✅ **Dependencies installed** (817 packages)
2. ✅ **Database created** on Neon PostgreSQL
3. ✅ **Schema created** (mdm schema with 30+ tables)
4. ✅ **Environment configured** (.env file with Neon credentials)

---

## 🎯 Start the Application

### Option 1: Development Mode (Recommended)

```bash
npm run start:dev
```

The server will start on: **http://localhost:3005**

### Option 2: Production Mode

```bash
npm run build
npm run start:prod
```

---

## 📚 Access Points

Once the server is running:

| Service | URL |
|---------|-----|
| **Swagger API Docs** | http://localhost:3005/api/docs |
| **Health Check** | http://localhost:3005/api/v1/health |
| **API Base** | http://localhost:3005/api/v1 |

---

## 🧪 Test the API

### 1. Register a New User

```bash
curl -X POST http://localhost:3005/api/v1/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "username": "admin",
    "email": "admin@example.com",
    "password": "Admin123!"
  }'
```

**Expected Response:**
```json
{
  "statusCode": 201,
  "message": "Success",
  "data": {
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
      "id": "uuid-here",
      "username": "admin",
      "email": "admin@example.com",
      "isActive": true,
      "createdAt": "2025-11-08T12:00:00.000Z",
      "updatedAt": "2025-11-08T12:00:00.000Z"
    }
  }
}
```

### 2. Login

```bash
curl -X POST http://localhost:3005/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "username": "admin",
    "password": "Admin123!"
  }'
```

**Save the `accessToken` from the response!**

### 3. Get All Users (Protected Route)

```bash
curl -X GET http://localhost:3005/api/v1/users \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN_HERE"
```

### 4. Create a Hotel

```bash
curl -X POST http://localhost:3005/api/v1/hotels \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN_HERE" \
  -d '{
    "hotelCode": "HTL001",
    "hotelName": "Grand Hotel Bangkok"
  }'
```

### 5. Get All Hotels

```bash
curl -X GET http://localhost:3005/api/v1/hotels \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN_HERE"
```

---

## 📖 Using Swagger UI (Easiest Way)

1. **Start the server**: `npm run start:dev`
2. **Open browser**: http://localhost:3005/api/docs
3. **Click "Authorize"** button (top right)
4. **Enter**: `Bearer YOUR_ACCESS_TOKEN`
5. **Try out any endpoint** interactively!

---

## 🗄️ Database Connection

Your Neon PostgreSQL database is already configured:

```
Host: ep-dark-mountain-a19e8izx-pooler.ap-southeast-1.aws.neon.tech
Port: 5432
Database: neondb
Username: neondb_owner
Schema: mdm
SSL: Enabled
```

**Tables Created:**
- `public.users` - Application users
- `mdm.mst_hotel` - Hotels
- `mdm.mst_room` - Rooms
- `mdm.mst_room_type` - Room types
- And 25+ more master data tables

---

## 📁 Project Structure

```
src/
├── modules/
│   ├── auth/          # 🔐 Authentication (Login, Register, JWT)
│   ├── user/          # 👤 User Management (CRUD)
│   └── hotel/         # 🏨 Hotel Management (CRUD)
├── common/
│   ├── decorators/    # @Public() decorator
│   ├── entities/      # BaseEntity (id, timestamps)
│   ├── filters/       # Exception handling
│   └── interceptors/  # Response transformation
├── config/            # Database & app configuration
├── app.module.ts      # Root module
└── main.ts            # Application entry point
```

---

## 🔧 Available Commands

| Command | Description |
|---------|-------------|
| `npm run start:dev` | Start in development mode (watch mode) |
| `npm run start:prod` | Start in production mode |
| `npm run build` | Build for production |
| `npm run lint` | Lint code |
| `npm run format` | Format code with Prettier |
| `npm run test` | Run tests |

---

## 🛠️ Troubleshooting

### Server won't start?

1. **Check if port 3000 is available:**
   ```bash
   lsof -i :3005
   ```

2. **Kill any existing process:**
   ```bash
   pkill -f "nest start"
   ```

3. **Try a different port** (edit `.env`):
   ```
   PORT=3001
   ```

### Database connection error?

1. **Check `.env` file** has correct credentials
2. **Test connection:**
   ```bash
   node setup-database.js
   ```

### Module not found?

```bash
rm -rf node_modules package-lock.json
npm install
```

---

## 📝 API Endpoints Summary

### Authentication (Public)
- `POST /api/v1/auth/register` - Register new user
- `POST /api/v1/auth/login` - Login user
- `GET /api/v1/auth/profile` - Get current user (protected)

### Users (Protected)
- `GET /api/v1/users` - List all users
- `GET /api/v1/users/:id` - Get user by ID
- `POST /api/v1/users` - Create user
- `PATCH /api/v1/users/:id` - Update user
- `DELETE /api/v1/users/:id` - Delete user

### Hotels (Protected)
- `GET /api/v1/hotels` - List all hotels
- `GET /api/v1/hotels/:id` - Get hotel by ID
- `POST /api/v1/hotels` - Create hotel
- `PATCH /api/v1/hotels/:id` - Update hotel
- `DELETE /api/v1/hotels/:id` - Delete hotel

### Health Check (Public)
- `GET /api/v1/health` - Check server status

---

## 🎨 Response Format

### Success Response
```json
{
  "statusCode": 200,
  "message": "Success",
  "data": { ... }
}
```

### Error Response
```json
{
  "statusCode": 404,
  "timestamp": "2025-11-08T12:00:00.000Z",
  "path": "/api/v1/users/123",
  "method": "GET",
  "message": "User not found",
  "error": "Not Found"
}
```

---

## 🔐 Security Features

✅ **JWT Authentication** - Secure token-based auth  
✅ **Password Hashing** - bcrypt with salt rounds  
✅ **Global Guards** - Protected routes by default  
✅ **Public Decorator** - Mark routes as public  
✅ **SSL/TLS** - Secure database connection  
✅ **Validation** - Request validation with class-validator  

---

## 🚀 Next Steps

1. **Start the server**: `npm run start:dev`
2. **Open Swagger**: http://localhost:3005/api/docs
3. **Register a user** via Swagger or curl
4. **Get JWT token** from login response
5. **Test protected endpoints** with the token
6. **Build your features** on top of this foundation!

---

## 📞 Need Help?

- **Full Documentation**: See `README.md`
- **Setup Guide**: See `SETUP.md`
- **Project Summary**: See `PROJECT_SUMMARY.md`
- **Database Schema**: See `database-schema.sql`

---

**🎉 Your NestJS backend is ready to use!**

**Swagger UI**: http://localhost:3005/api/docs (Best way to test!)
