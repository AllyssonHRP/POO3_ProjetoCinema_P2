import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SessaoService {
  constructor(private prisma: PrismaService) {}

  create(createSessaoDto: any) {
    return this.prisma.sessao.create({ data: { ...createSessaoDto } });
  }

  findAll() {
    return this.prisma.sessao.findMany();
  }

  findOne(id: number) {
    return this.prisma.sessao.findUnique({ where: { id: Number(id) } });
  }

  update(id: number, updateSessaoDto: any) {
    return this.prisma.sessao.update({ where: { id: Number(id) }, data: { ...updateSessaoDto } });
  }

  remove(id: number) {
    return this.prisma.sessao.delete({ where: { id: Number(id) } });
  }
}