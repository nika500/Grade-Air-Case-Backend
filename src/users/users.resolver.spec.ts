import { Test, TestingModule } from '@nestjs/testing';
import { User } from '../graphql';
import { PrismaService } from '../../prisma/prisma.service';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';
import { UserCreateInput } from './dto/create-user.input';
import { UserUpdateInput } from './dto/update-user.input';

describe('UsersResolver', () => {
  let resolver: UsersResolver;

  const mockedUser = {
    firstname: 'John',
    lastname: 'Doe',
    username: 'JD123',
    email: 'john@doe.com',
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  const mockUsersService = {
    create: jest.fn().mockImplementation((input: UserCreateInput) => {
      return {
        id: 10,
        ...input,
      };
    }),
    update: jest.fn().mockImplementation((input: UserUpdateInput) => input),
    findOne: jest.fn().mockImplementation((id: { id: number }) => ({
      ...mockedUser,
      ...id,
    })),
    findAll: jest.fn().mockImplementation(() => [
      {
        ...mockedUser,
        id: 1,
      },
    ]),
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

  describe('createUser', () => {
    it('should create a user', () => {
      expect(resolver.create(mockedUser)).toEqual({
        id: 10,
        ...mockedUser,
      });
    });
  });

  describe('updateUser', () => {
    it('should update a user', () => {
      const input = { id: 1, username: 'JD500' };

      expect(resolver.update(input)).toEqual({
        id: 1,
        ...input,
      });
    });
  });

  describe('findOne', () => {
    it('should get one user', () => {
      expect(resolver.findOne(100)).toEqual({
        ...mockedUser,
        id: 100,
      });
    });
  });

  describe('findAll', () => {
    it('should get all users', () => {
      expect(resolver.findAll()).toEqual([
        {
          ...mockedUser,
          id: 1,
        },
      ]);
    });
  });
});
