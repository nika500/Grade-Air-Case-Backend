import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../../prisma/prisma.service';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';

describe('UsersResolver', () => {
  let resolver: UsersResolver;

  const mockUsersService = {
    create: jest.fn().mockImplementation((dto) => {
      return {
        id: Date.now(),
        ...dto,
      };
    }),
    update: jest.fn().mockImplementation((dto) => dto),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrismaService, UsersResolver, UsersService],
    })
      .overrideProvider(UsersService)
      .useValue(mockUsersService)
      .compile();

    resolver = module.get<UsersResolver>(UsersResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  it('should create a user', () => {
    const input = {
      firstname: 'John',
      lastname: 'Doe',
      username: 'JD123',
      email: 'john@doe.com',
    };
    expect(resolver.create(input)).toEqual({
      id: expect.any(Number),
      ...input,
    });
  });

  it('should update a user', () => {
    const input = { id: 1, username: 'JD500' };

    // expect(resolver.update(input)).to({
    //   id: 1,
    //   ...input,
    // });
    expect(resolver.update(input)).objectContaining({
      id: expect(1),
      username: expect('JD'),
    });
  });
});
