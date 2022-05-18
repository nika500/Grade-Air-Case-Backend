import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../../prisma/prisma.service';
import { PlaneTicketsService } from './plane-tickets.service';

describe('PlaneTicketsService', () => {
  let service: PlaneTicketsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrismaService, PlaneTicketsService],
    }).compile();

    service = module.get<PlaneTicketsService>(PlaneTicketsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
