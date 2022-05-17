import { Module } from '@nestjs/common';
import { PlaneTicketsService } from './plane-tickets.service';
import { PlaneTicketsResolver } from './plane-tickets.resolver';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  providers: [PrismaService, PlaneTicketsResolver, PlaneTicketsService],
})
export class PlaneTicketsModule {}
