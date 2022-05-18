import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PlaneTicketsService } from './plane-tickets.service';
import { CreatePlaneTicketInput } from './dto/create-plane-ticket.input';
import { UpdatePlaneTicketInput } from './dto/update-plane-ticket.input';
import { Prisma } from '@prisma/client';
import { PlaneTicket } from 'src/graphql';

@Resolver('PlaneTicket')
export class PlaneTicketsResolver {
  constructor(private readonly planeTicketsService: PlaneTicketsService) {}

  @Mutation('createPlaneTicket')
  create(
    @Args('createPlaneTicketInput')
    createPlaneTicketInput: CreatePlaneTicketInput,
  ): Promise<PlaneTicket> {
    return this.planeTicketsService.create(createPlaneTicketInput);
  }

  @Query('planeTickets')
  findAll(): Promise<PlaneTicket[]> {
    return this.planeTicketsService.findAll();
  }

  @Query('planeTicket')
  findOne(@Args('id') id: number): Promise<PlaneTicket> {
    return this.planeTicketsService.findOne({ id });
  }

  @Mutation('updatePlaneTicket')
  update(
    @Args('updatePlaneTicketInput')
    updatePlaneTicketInput: UpdatePlaneTicketInput,
  ): Promise<PlaneTicket> {
    return this.planeTicketsService.update(updatePlaneTicketInput);
  }

  @Mutation('removePlaneTicket')
  remove(@Args('id') id: number): Promise<PlaneTicket> {
    return this.planeTicketsService.remove({ id });
  }
}
