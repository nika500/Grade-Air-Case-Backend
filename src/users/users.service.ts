import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';
import { UserCreateInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(createUserInput: UserCreateInput) {
    return await this.prisma.user.create({
      data: createUserInput,
    });
  }

  async findAll() {
    return await this.prisma.user.findMany({
      include: {
        planeTicket: true,
      },
    });
  }

  async findOne(userWhereUniqueInput: Prisma.UserWhereUniqueInput) {
    return await this.prisma.user.findUnique({
      where: userWhereUniqueInput,
      include: {
        planeTicket: true,
      },
    });
  }

  async update(updateUserInput: UpdateUserInput) {
    const { id } = updateUserInput;
    return await this.prisma.user.update({
      where: {
        id: id,
      },
      include: {
        planeTicket: true,
      },
      data: updateUserInput,
    });
  }

  async remove(userWhereUniqueInput: Prisma.UserWhereUniqueInput) {
    return await this.prisma.user.delete({
      where: userWhereUniqueInput,
    });
  }
}
