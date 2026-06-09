import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuração do Swagger
  const config = new DocumentBuilder()
    .setTitle('API Projeto Cinema')
    .setDescription('Documentação da API para o sistema de gestão de cinema')
    .setVersion('1.0')
    .build();
    
  // Criar o documento e configurar a rota
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  await app.listen(3001);

  console.log('Servidor rodando em http://localhost:3001');
  console.log('Swagger (Documentação) rodando em http://localhost:3001/api');
}
bootstrap();