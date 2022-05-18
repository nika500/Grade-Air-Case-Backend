import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';
import { CreatePlaneInput } from './dto/create-plane.input';
import { UpdatePlaneInput } from './dto/update-plane.input';

@Injectable()
export class PlanesService {
  constructor(private prisma: PrismaService) {}

  async create(createPlaneInput: CreatePlaneInput) {
    return await this.prisma.plane.create({
      data: createPlaneInput,
    });
  }

  async findAll() {
    return await this.prisma.plane.findMany({
      include: {
        PlaneTicket: true,
      },
    });
  }

  async findOne(planeWhereUniqueInput: Prisma.PlaneWhereUniqueInput) {
    return await this.prisma.plane.findUnique({
      where: planeWhereUniqueInput,
      include: {
        PlaneTicket: true,
      },
    });
  }

  async update(updatePlaneInput: UpdatePlaneInput) {
    const { id } = updatePlaneInput;
    return await this.prisma.plane.update({
      where: {
        id: id,
      },
      include: {
        PlaneTicket: true,
      },
      data: updatePlaneInput,
    });
  }

  async remove(planeWhereUniqueInput: Prisma.PlaneWhereUniqueInput) {
    return await this.prisma.plane.delete({
      where: planeWhereUniqueInput,
    });
  }
}
