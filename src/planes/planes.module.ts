import { Module } from '@nestjs/common';
import { PlanesService } from './planes.service';
import { PlanesResolver } from './planes.resolver';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  providers: [PrismaService, PlanesResolver, PlanesService],
})
export class PlanesModule {}
