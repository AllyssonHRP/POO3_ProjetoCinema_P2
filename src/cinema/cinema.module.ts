import { Module } from '@nestjs/common';
import { CinemaService } from './cinema.service';
import { CinemaController } from './cinema.controller';
import { PrismaModule } from '../prisma/prisma.module'; // <-- Importação do módulo

@Module({
  imports: [PrismaModule], // <-- O NestJS exige o PrismaModule listado aqui!
  controllers: [CinemaController],
  providers: [CinemaService],
})
export class CinemaModule { }