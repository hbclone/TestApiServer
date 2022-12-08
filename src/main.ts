import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import * as path from 'path';
import { resolve } from 'path';
import { ValidationPipe } from '@nestjs/common';

declare const module: any;

dotenv.config({
  path: `.env.local`,
});

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('테스트용 서버')
    .setDescription('테스트용 API DOCS')
    .setVersion('1.0')
    .addCookieAuth('connect.sid')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  await app.listen(4000);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
