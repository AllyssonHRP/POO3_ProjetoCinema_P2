import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class FilmeService {
  constructor(private prisma: PrismaService) {}

  create(createFilmeDto: any) {
    return this.prisma.filme.create({ data: { ...createFilmeDto } });
  }

  findAll() {
    return this.prisma.filme.findMany();
  }

  findOne(id: number) {
    return this.prisma.filme.findUnique({ where: { id: Number(id) } });
  }

  update(id: number, updateFilmeDto: any) {
    return this.prisma.filme.update({ where: { id: Number(id) }, data: { ...updateFilmeDto } });
  }

  remove(id: number) {
    return this.prisma.filme.delete({ where: { id: Number(id) } });
  }
}