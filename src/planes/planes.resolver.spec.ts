import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../../prisma/prisma.service';
import { PlanesResolver } from './planes.resolver';
import { PlanesService } from './planes.service';

describe('PlanesResolver', () => {
  let resolver: PlanesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrismaService, PlanesResolver, PlanesService],
    }).compile();

    resolver = module.get<PlanesResolver>(PlanesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
