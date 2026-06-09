import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaLibSql } from '@prisma/adapter-libsql';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  constructor() {
    // No Prisma 7, passamos o objeto de configuração com a propriedade 'url' direto no construtor do adaptador
    const adapter = new PrismaLibSql({
      url: 'file:./prisma/dev.db',
    });

    // Repassa o adaptador configurado para a inicialização do motor pai
    super({ adapter });
  }

  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}