import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PlaneTicketsService } from './plane-tickets.service';
import { CreatePlaneTicketInput } from './dto/create-plane-ticket.input';
import { UpdatePlaneTicketInput } from './dto/update-plane-ticket.input';

@Resolver('PlaneTicket')
export class PlaneTicketsResolver {
  constructor(private readonly planeTicketsService: PlaneTicketsService) {}

  @Mutation('createPlaneTicket')
  create(@Args('createPlaneTicketInput') createPlaneTicketInput: CreatePlaneTicketInput) {
    return this.planeTicketsService.create(createPlaneTicketInput);
  }

  @Query('planeTickets')
  findAll() {
    return this.planeTicketsService.findAll();
  }

  @Query('planeTicket')
  findOne(@Args('id') id: number) {
    return this.planeTicketsService.findOne(id);
  }

  @Mutation('updatePlaneTicket')
  update(@Args('updatePlaneTicketInput') updatePlaneTicketInput: UpdatePlaneTicketInput) {
    return this.planeTicketsService.update(updatePlaneTicketInput.id, updatePlaneTicketInput);
  }

  @Mutation('removePlaneTicket')
  remove(@Args('id') id: number) {
    return this.planeTicketsService.remove(id);
  }
}
