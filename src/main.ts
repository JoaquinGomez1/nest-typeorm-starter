import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );

  app.use(cookieParser(process.env.COOKIE_SECRET));

  await app.listen(process.env.PORT || 3153);
  console.log(`Server started at: ${await app.getUrl()}`);
}
bootstrap();
