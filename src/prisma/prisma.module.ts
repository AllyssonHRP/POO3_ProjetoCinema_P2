import { Module, Global } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // Adicionar esse decorador torna o Prisma acessível em todo o projeto automaticamente
@Module({
  providers: [PrismaService],
  exports: [PrismaService], // <-- ESSENCIAL: Sem isso, nenhum outro módulo consegue herdar o banco
})
export class PrismaModule {}