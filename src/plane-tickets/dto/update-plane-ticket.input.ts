import { CreatePlaneTicketInput } from './create-plane-ticket.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdatePlaneTicketInput extends PartialType(CreatePlaneTicketInput) {
  id: number;
}
