import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';
import { UpdatePlaneTicketInput } from '../graphql';
import { CreatePlaneTicketInput } from '../graphql';

@Injectable()
export class PlaneTicketsService {
  constructor(private prisma: PrismaService) {}

  async create(createPlaneTicketInput: CreatePlaneTicketInput) {
    return await this.prisma.planeTicket.create({
      data: createPlaneTicketInput,
    });
  }

  async findAll() {
    return await this.prisma.planeTicket.findMany({
      include: {
        plane: true,
      },
    });
  }

  async findOne(
    planeTicketsWhereUniqueInput: Prisma.PlaneTicketWhereUniqueInput,
  ) {
    return await this.prisma.planeTicket.findUnique({
      where: planeTicketsWhereUniqueInput,
      include: {
        plane: true,
      },
    });
  }

  async update(updatePlaneTicketInput: UpdatePlaneTicketInput) {
    const { id } = updatePlaneTicketInput;
    return await this.prisma.planeTicket.update({
      where: {
        id: id,
      },
      include: {
        plane: true,
      },
      data: updatePlaneTicketInput,
    });
  }

  async remove(
    planeTicketWhereUniqueInput: Prisma.PlaneTicketWhereUniqueInput,
  ) {
    return await this.prisma.planeTicket.delete({
      where: planeTicketWhereUniqueInput,
    });
  }
}
