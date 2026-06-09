import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SalaService {
  constructor(private prisma: PrismaService) {}

  create(createSalaDto: any) {
    return this.prisma.sala.create({ data: { ...createSalaDto } });
  }

  findAll() {
    return this.prisma.sala.findMany();
  }

  findOne(id: number) {
    return this.prisma.sala.findUnique({ where: { id: Number(id) } });
  }

  update(id: number, updateSalaDto: any) {
    return this.prisma.sala.update({ where: { id: Number(id) }, data: { ...updateSalaDto } });
  }

  remove(id: number) {
    return this.prisma.sala.delete({ where: { id: Number(id) } });
  }
}