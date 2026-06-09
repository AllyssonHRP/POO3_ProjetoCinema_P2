import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class LancheComboService {
  constructor(private prisma: PrismaService) {}

  create(createLancheComboDto: any) {
    return this.prisma.lancheCombo.create({
      data: {
        ...createLancheComboDto,
      },
    });
  }

  findAll() {
    return this.prisma.lancheCombo.findMany();
  }

  findOne(id: number) {
    return this.prisma.lancheCombo.findUnique({
      where: { id: Number(id) },
    });
  }

  update(id: number, updateLancheComboDto: any) {
    return this.prisma.lancheCombo.update({
      where: { id: Number(id) },
      data: {
        ...updateLancheComboDto,
      },
    });
  }

  remove(id: number) {
    return this.prisma.lancheCombo.delete({
      where: { id: Number(id) },
    });
  }
}