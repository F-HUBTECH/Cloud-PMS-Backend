import { NestFactory } from '@nestjs/core';
import { ValidationPipe, ClassSerializerInterceptor } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import { Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { TransformInterceptor } from './common/interceptors/transform.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Get ConfigService
  const configService = app.get(ConfigService);

  // Global prefix
  const apiPrefix = configService.get<string>('API_PREFIX') || 'api';
  const apiVersion = configService.get<string>('API_VERSION') || 'v1';
  app.setGlobalPrefix(`${apiPrefix}/${apiVersion}`);

  // Enable CORS
  app.enableCors();

  // Global validation pipe
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  // Global filters
  app.useGlobalFilters(new HttpExceptionFilter());

  // Global interceptors
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));
  app.useGlobalInterceptors(new TransformInterceptor());

  // Swagger configuration
  const swaggerConfig = new DocumentBuilder()
    .setTitle(
      configService.get<string>('SWAGGER_TITLE') || 'PMS Backend API',
    )
    .setDescription(
      configService.get<string>('SWAGGER_DESCRIPTION') ||
        'Property Management System Backend API Documentation',
    )
    .setVersion(configService.get<string>('SWAGGER_VERSION') || '1.0')
    .addBearerAuth()
    .addTag('Authentication', 'Authentication endpoints (Login, Register)')
    .addTag('Users', 'User management endpoints')
    .addTag('Hotels', 'Hotel management endpoints')
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  const swaggerPath = configService.get<string>('SWAGGER_PATH') || 'api/docs';
  SwaggerModule.setup(swaggerPath, app, document, {
    swaggerOptions: {
      persistAuthorization: true,
    },
  });

  // Start server
  const port = configService.get<number>('PORT') || 3005;
  await app.listen(port);

  console.log(`
    🚀 Application is running on: http://localhost:${port}
    📚 Swagger documentation: http://localhost:${port}/${swaggerPath}
    🔧 Environment: ${configService.get<string>('NODE_ENV') || 'development'}
  `);
}

bootstrap();
