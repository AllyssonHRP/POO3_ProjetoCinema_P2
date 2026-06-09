import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await app.listen(3001);

  console.log('Servidor rodando em http://localhost:51212');
}
bootstrap();