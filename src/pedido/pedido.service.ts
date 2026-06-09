import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PedidoService {
  constructor(private prisma: PrismaService) { }

  create(createPedidoDto: any) {
    return this.prisma.pedido.create({
      data: {
        ...createPedidoDto,
      },
    });
  }

  findAll() {
    return this.prisma.pedido.findMany();
  }

  findOne(id: number) {
    return this.prisma.pedido.findUnique({
      where: { id: Number(id) },
    });
  }

  update(id: number, updatePedidoDto: any) {
    return this.prisma.pedido.update({
      where: { id: Number(id) },
      data: {
        ...updatePedidoDto,
      },
    });
  }

  remove(id: number) {
    return this.prisma.pedido.delete({
      where: { id: Number(id) },
    });
  }
}