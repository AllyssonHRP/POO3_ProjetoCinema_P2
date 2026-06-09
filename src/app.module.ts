import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CinemaModule } from './cinema/cinema.module';
import { FilmeModule } from './filme/filme.module';
import { SalaModule } from './sala/sala.module';
import { SessaoModule } from './sessao/sessao.module';
import { IngressoModule } from './ingresso/ingresso.module';
import { PedidoModule } from './pedido/pedido.module';
import { LancheComboModule } from './lanche-combo/lanche-combo.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [CinemaModule, FilmeModule, SalaModule, SessaoModule, IngressoModule, PedidoModule, LancheComboModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
