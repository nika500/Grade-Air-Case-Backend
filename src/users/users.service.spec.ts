import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../../prisma/prisma.service';
import { UsersService } from './users.service';

// const testId = 1;
const testFirstname = 'Test firstname 1';
const testLastname = 'Test lastname 1';
const testUsername = 'Test username 1';
const testEmail = 'Test email 1';

const userArray = [
  {
    firstname: testFirstname,
    lastname: testLastname,
    username: testUsername,
    email: testEmail,
  },
  {
    firstname: 'Test firstname 2',
    lastname: 'Test lastname 2',
    testUsername: 'Test username 2',
    email: 'Test email 2',
  },
  {
    firstname: 'Test firstname 3',
    lastname: 'Test lastname 3',
    testUsername: 'Test username 2',
    email: 'Test email 3',
  },
];

const oneUser = userArray[0];

const db = {
  user: {
    findMany: jest.fn().mockResolvedValue(userArray),
    findUnique: jest.fn().mockResolvedValue(oneUser),
    create: jest.fn().mockReturnValue(oneUser),
    update: jest.fn().mockResolvedValue(oneUser),
    delete: jest.fn().mockResolvedValue(oneUser),
    save: jest.fn(),
  },
};

describe('UsersService', () => {
  let service: UsersService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: PrismaService,
          useValue: db,
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(prisma).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of users', async () => {
      const users = await service.findAll();
      expect(users).toEqual(userArray);
    });
  });

  describe('findOne', () => {
    it('should find a single user', () => {
      expect(service.findOne({ id: 1 })).resolves.toEqual(oneUser);
    });
  });

  describe('create', () => {
    it('should create a user', () => {
      expect(
        service.create({
          firstname: testFirstname,
          lastname: testLastname,
          username: testUsername,
          email: testEmail,
        }),
      ).resolves.toEqual(oneUser);
    });
  });

  describe('update', () => {
    it('should update a user', async () => {
      const user = await service.update({
        id: 1,
        firstname: testFirstname,
      });
      expect(user).toEqual(oneUser);
    });
  });
});
