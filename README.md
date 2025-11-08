# PMS Backend - Property Management System

A modern, production-ready backend API built with **NestJS 10+**, **TypeScript**, **PostgreSQL**, and **TypeORM**.

## 🏗️ Project Structure

```
pms-backend/
├── src/
│   ├── common/                      # Shared utilities
│   │   ├── decorators/              # Custom decorators
│   │   │   └── public.decorator.ts  # @Public() decorator for public routes
│   │   ├── entities/                # Base entities
│   │   │   └── base.entity.ts       # Base entity with id, createdAt, updatedAt
│   │   ├── filters/                 # Exception filters
│   │   │   └── http-exception.filter.ts
│   │   └── interceptors/            # Response interceptors
│   │       └── transform.interceptor.ts
│   │
│   ├── config/                      # Configuration files
│   │   ├── database.config.ts       # Database configuration
│   │   └── ormconfig.ts             # TypeORM CLI configuration
│   │
│   ├── modules/                     # Feature modules
│   │   ├── auth/                    # Authentication module
│   │   │   ├── dto/
│   │   │   │   ├── login.dto.ts
│   │   │   │   ├── register.dto.ts
│   │   │   │   └── auth-response.dto.ts
│   │   │   ├── guards/
│   │   │   │   └── jwt-auth.guard.ts
│   │   │   ├── strategies/
│   │   │   │   └── jwt.strategy.ts
│   │   │   ├── auth.controller.ts
│   │   │   ├── auth.service.ts
│   │   │   └── auth.module.ts
│   │   │
│   │   ├── user/                    # User module
│   │   │   ├── dto/
│   │   │   │   ├── create-user.dto.ts
│   │   │   │   ├── update-user.dto.ts
│   │   │   │   └── user-response.dto.ts
│   │   │   ├── entities/
│   │   │   │   └── user.entity.ts
│   │   │   ├── user.controller.ts
│   │   │   ├── user.service.ts
│   │   │   └── user.module.ts
│   │   │
│   │   └── hotel/                   # Hotel module
│   │       ├── dto/
│   │       │   ├── create-hotel.dto.ts
│   │       │   └── update-hotel.dto.ts
│   │       ├── entities/
│   │       │   ├── hotel.entity.ts
│   │       │   ├── room.entity.ts
│   │       │   ├── room-type.entity.ts
│   │       │   ├── room-status.entity.ts
│   │       │   ├── room-view.entity.ts
│   │       │   ├── bed-type.entity.ts
│   │       │   ├── building.entity.ts
│   │       │   └── floor.entity.ts
│   │       ├── hotel.controller.ts
│   │       ├── hotel.service.ts
│   │       └── hotel.module.ts
│   │
│   ├── app.module.ts                # Root module
│   ├── app.controller.ts            # Health check controller
│   └── main.ts                      # Application entry point
│
├── .env.example                     # Environment variables template
├── .gitignore                       # Git ignore file
├── nest-cli.json                    # NestJS CLI configuration
├── package.json                     # Dependencies and scripts
├── tsconfig.json                    # TypeScript configuration
└── README.md                        # This file
```

## ✨ Features

### 1. **Standard NestJS Architecture**
- ✅ Modular structure with clear separation of concerns
- ✅ TypeScript with strict type checking
- ✅ Dependency injection and IoC container
- ✅ Global validation pipe with `class-validator`
- ✅ Global exception filter for consistent error responses
- ✅ Response transformation interceptor

### 2. **Database Integration**
- ✅ PostgreSQL with TypeORM
- ✅ Base entity with UUID, timestamps
- ✅ Automatic timestamp updates
- ✅ Schema support (`mdm` schema)
- ✅ Migration support

### 3. **Authentication & Security**
- ✅ JWT-based authentication
- ✅ Login and Register endpoints
- ✅ Password hashing with bcrypt
- ✅ Protected routes with `@UseGuards(JwtAuthGuard)`
- ✅ Public routes with `@Public()` decorator
- ✅ Global JWT guard with public route exceptions

### 4. **API Documentation**
- ✅ Swagger/OpenAPI documentation
- ✅ Available at `/api/docs`
- ✅ Bearer token authentication in Swagger UI
- ✅ Request/Response examples
- ✅ Persistent authorization

### 5. **Example Modules**

#### **User Module**
- `GET /api/v1/users` - Get all users
- `GET /api/v1/users/:id` - Get user by ID
- `POST /api/v1/users` - Create new user
- `PATCH /api/v1/users/:id` - Update user
- `DELETE /api/v1/users/:id` - Delete user

#### **Auth Module**
- `POST /api/v1/auth/register` - Register new user
- `POST /api/v1/auth/login` - Login user
- `GET /api/v1/auth/profile` - Get current user profile

#### **Hotel Module**
- `GET /api/v1/hotels` - Get all hotels
- `GET /api/v1/hotels/:id` - Get hotel by ID
- `POST /api/v1/hotels` - Create new hotel
- `PATCH /api/v1/hotels/:id` - Update hotel
- `DELETE /api/v1/hotels/:id` - Delete hotel

## 🚀 Getting Started

### Prerequisites

- **Node.js** 20+ 
- **npm** or **yarn**
- **PostgreSQL** 12+

### Installation

1. **Clone the repository**
```bash
cd /home/doung/Desktop/Nestjs/pms-backend
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure environment variables**
```bash
cp .env.example .env
```

Edit `.env` file with your database credentials:
```env
# Application
NODE_ENV=development
PORT=3000
API_PREFIX=api
API_VERSION=v1

# Database
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=your_password
DB_DATABASE=pms_db
DB_SCHEMA=mdm
DB_SYNCHRONIZE=false
DB_LOGGING=true

# JWT
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
JWT_EXPIRES_IN=7d

# Swagger
SWAGGER_TITLE=PMS Backend API
SWAGGER_DESCRIPTION=Property Management System Backend API Documentation
SWAGGER_VERSION=1.0
SWAGGER_PATH=api/docs
```

4. **Create PostgreSQL database**
```sql
CREATE DATABASE pms_db;
CREATE SCHEMA mdm;
```

5. **Run the application**

Development mode:
```bash
npm run start:dev
```

Production build:
```bash
npm run build
npm run start:prod
```

## 📝 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run start` | Start application |
| `npm run start:dev` | Start in development mode with watch |
| `npm run start:debug` | Start in debug mode |
| `npm run start:prod` | Start in production mode |
| `npm run build` | Build for production |
| `npm run format` | Format code with Prettier |
| `npm run lint` | Lint code with ESLint |
| `npm run test` | Run unit tests |
| `npm run test:watch` | Run tests in watch mode |
| `npm run test:cov` | Run tests with coverage |
| `npm run test:e2e` | Run end-to-end tests |
| `npm run migration:generate` | Generate migration |
| `npm run migration:run` | Run migrations |
| `npm run migration:revert` | Revert last migration |

## 🔧 Usage Examples

### 1. Register a new user

```bash
curl -X POST http://localhost:3005/api/v1/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "username": "john_doe",
    "email": "john@example.com",
    "password": "Password123!"
  }'
```

Response:
```json
{
  "statusCode": 201,
  "message": "Success",
  "data": {
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
      "id": "uuid-string",
      "username": "john_doe",
      "email": "john@example.com",
      "isActive": true,
      "createdAt": "2024-01-01T00:00:00.000Z",
      "updatedAt": "2024-01-01T00:00:00.000Z"
    }
  }
}
```

### 2. Login

```bash
curl -X POST http://localhost:3005/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "username": "john_doe",
    "password": "Password123!"
  }'
```

### 3. Access protected endpoint

```bash
curl -X GET http://localhost:3005/api/v1/users \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

## 📚 API Documentation

Once the application is running, visit:

**Swagger UI:** http://localhost:3005/api/docs

The Swagger UI provides:
- Interactive API documentation
- Request/Response schemas
- Try-it-out functionality
- Authentication support

## 🗄️ Database Schema

The application supports the following master data tables (in `mdm` schema):

- `mst_hotel` - Hotel master data
- `mst_room_type` - Room type definitions
- `mst_room` - Room inventory
- `mst_room_status` - Room status codes
- `mst_room_view` - Room view types
- `mst_bed_type` - Bed type definitions
- `mst_building` - Building information
- `mst_floor` - Floor information
- `mst_abf_type` - ABF type codes
- `mst_book_type` - Booking type codes
- `mst_channel` - Distribution channels
- `mst_company` - Company master data
- `mst_country` - Country codes
- `mst_department` - Department codes
- `mst_guest_type` - Guest type classifications
- `mst_market` - Market segments
- `mst_market_group` - Market group codes
- `mst_nationality` - Nationality codes
- `mst_passport_type` - Passport type codes
- `mst_payment_method` - Payment methods
- `mst_payment_type` - Payment types
- `mst_profile` - Guest profiles
- `mst_promotion` - Promotion codes
- `mst_rate_master` - Rate master data
- `mst_rate_detail` - Rate details
- `mst_rate_plan` - Rate plans
- `mst_service_item` - Service items
- `mst_settle_type` - Settlement types
- `mst_source` - Source codes
- `mst_tax_type` - Tax types
- `mst_title` - Title codes (Mr., Mrs., etc.)
- `mst_trans_code` - Transaction codes
- `mst_vip_type` - VIP type classifications
- `mst_visa_type` - Visa type codes
- `users` - Application users (for authentication)

## 🔐 Security Best Practices

1. **Never commit `.env` file** - Use `.env.example` as template
2. **Change JWT_SECRET** in production
3. **Use strong passwords** for database
4. **Enable SSL** for database connections in production
5. **Set DB_SYNCHRONIZE=false** in production
6. **Use environment-specific configurations**
7. **Implement rate limiting** for production
8. **Enable HTTPS** in production

## 🛠️ Code Structure Explanation

### **Base Entity (`base.entity.ts`)**
All entities extend this base class which provides:
- `id` (UUID, auto-generated)
- `createdAt` (timestamp, auto-set)
- `updatedAt` (timestamp, auto-updated)

### **DTOs (Data Transfer Objects)**
- `CreateDto` - Validation for creating resources
- `UpdateDto` - Validation for updating resources (partial)
- `ResponseDto` - Standardized response format (excludes sensitive data)

### **Exception Filter**
Catches all HTTP exceptions and formats them consistently:
```json
{
  "statusCode": 404,
  "timestamp": "2024-01-01T00:00:00.000Z",
  "path": "/api/v1/users/123",
  "method": "GET",
  "message": "User not found",
  "error": "Not Found"
}
```

### **Transform Interceptor**
Wraps all successful responses:
```json
{
  "statusCode": 200,
  "message": "Success",
  "data": { ... }
}
```

### **JWT Authentication Flow**
1. User registers/logs in → receives JWT token
2. Client includes token in `Authorization: Bearer <token>` header
3. `JwtAuthGuard` validates token on protected routes
4. User data is attached to request object

## 📦 Dependencies

### Core Dependencies
- `@nestjs/common` - NestJS common utilities
- `@nestjs/core` - NestJS core functionality
- `@nestjs/typeorm` - TypeORM integration
- `@nestjs/config` - Configuration management
- `@nestjs/jwt` - JWT authentication
- `@nestjs/passport` - Passport integration
- `@nestjs/swagger` - API documentation
- `typeorm` - ORM for database operations
- `pg` - PostgreSQL driver
- `bcrypt` - Password hashing
- `class-validator` - DTO validation
- `class-transformer` - Object transformation

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Write/update tests
4. Submit a pull request

## 📄 License

MIT

## 👨‍💻 Author

Your Name

---

**Built with ❤️ using NestJS, TypeScript, and PostgreSQL**
