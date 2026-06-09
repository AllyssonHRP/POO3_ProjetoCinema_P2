import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class IngressoService {
  constructor(private prisma: PrismaService) {}

  create(createIngressoDto: any) {
    return this.prisma.ingresso.create({
      data: {
        ...createIngressoDto,
      },
    });
  }

  findAll() {
    return this.prisma.ingresso.findMany();
  }

  findOne(id: number) {
    return this.prisma.ingresso.findUnique({
      where: { id: Number(id) },
    });
  }

  update(id: number, updateIngressoDto: any) {
    return this.prisma.ingresso.update({
      where: { id: Number(id) },
      data: {
        ...updateIngressoDto,
      },
    });
  }

  remove(id: number) {
    return this.prisma.ingresso.delete({
      where: { id: Number(id) },
    });
  }
}