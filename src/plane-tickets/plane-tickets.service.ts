import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreatePlaneTicketInput } from './dto/create-plane-ticket.input';
import { UpdatePlaneTicketInput } from './dto/update-plane-ticket.input';

@Injectable()
export class PlaneTicketsService {
  constructor(private prisma: PrismaService) {}
  create(createPlaneTicketInput: CreatePlaneTicketInput) {
    return 'This action adds a new planeTicket';
  }

  findAll() {
    return `This action returns all planeTickets`;
  }

  findOne(id: number) {
    return `This action returns a #${id} planeTicket`;
  }

  update(id: number, updatePlaneTicketInput: UpdatePlaneTicketInput) {
    return `This action updates a #${id} planeTicket`;
  }

  remove(id: number) {
    return `This action removes a #${id} planeTicket`;
  }
}
