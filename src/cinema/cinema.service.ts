import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'; // <-- Importação do tipo essencial para o NestJS

@Injectable()
export class CinemaService {
  // O NestJS precisa estritamente do tipo : PrismaService aqui para resolver a dependência
  constructor(private prisma: PrismaService) { }

  // C - CREATE (Criar)
  create(createCinemaDto: any) { // Usamos 'any' aqui para ignorar o DTO vazio
    return this.prisma.cinema.create({
      data: {
        ...createCinemaDto,
      },
    });
  }

  // R - READ (Listar todos)
  findAll() {
    return this.prisma.cinema.findMany();
  }

  // R - READ (Buscar por ID)
  findOne(id: number) {
    return this.prisma.cinema.findUnique({
      where: { id: Number(id) },
    });
  }

  // U - UPDATE (Atualizar)
  update(id: number, updateCinemaDto: any) { // Usamos 'any' aqui também
    return this.prisma.cinema.update({
      where: { id: Number(id) },
      data: {
        ...updateCinemaDto,
      },
    });
  }

  // D - DELETE (Excluir)
  remove(id: number) {
    return this.prisma.cinema.delete({
      where: { id: Number(id) },
    });
  }
}