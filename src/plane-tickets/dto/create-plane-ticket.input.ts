import { Prisma } from '@prisma/client';
import { IsNumber, IsPositive } from 'class-validator';
import { PlaneTicket } from '../../graphql';

export class CreatePlaneTicketInput extends PlaneTicket {
  @IsNumber()
  @IsPositive()
  price: number;

  @IsNumber()
  ownerId: number;

  @IsNumber()
  planeId: number;
}
