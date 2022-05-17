import { Test, TestingModule } from '@nestjs/testing';
import { PlaneTicketsResolver } from './plane-tickets.resolver';
import { PlaneTicketsService } from './plane-tickets.service';

describe('PlaneTicketsResolver', () => {
  let resolver: PlaneTicketsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlaneTicketsResolver, PlaneTicketsService],
    }).compile();

    resolver = module.get<PlaneTicketsResolver>(PlaneTicketsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
