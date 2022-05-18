import { PlaneTicket } from 'src/graphql';
import { IsNumber, IsPositive } from 'class-validator';

export class UpdatePlaneTicketInput extends PlaneTicket {
  @IsNumber()
  id: number;

  @IsPositive()
  price: number;
}
