import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../../prisma/prisma.service';
import { PlaneTicketsResolver } from './plane-tickets.resolver';
import { PlaneTicketsService } from './plane-tickets.service';

describe('PlaneTicketsResolver', () => {
  let resolver: PlaneTicketsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrismaService, PlaneTicketsResolver, PlaneTicketsService],
    }).compile();

    resolver = module.get<PlaneTicketsResolver>(PlaneTicketsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
