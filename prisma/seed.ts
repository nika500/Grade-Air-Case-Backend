import { PrismaClient } from '@prisma/client';
import { UserCreateInput } from '../src/@generated/prisma-nestjs-graphql/user/user-create.input';
const prisma = new PrismaClient();

const userData: UserCreateInput[] = [
  {
    username: 'n100',
    firstname: 'Nika',
    lastname: 'Pruidze',
    email: 'np@np.com',
    planeTicket: {
      create: {
        price: 10,
        plane: {
          create: {
            name: 'plane_name_X',
          },
        },
      },
    },
  },
  {
    username: 'john_Doe',
    firstname: 'John',
    lastname: 'Doe',
    email: 'john@doe.com',
    planeTicket: {
      create: {
        price: 20,
        plane: {
          create: {
            name: 'plane_name_Y',
          },
        },
      },
    },
  },
  {
    username: 'Jane_Doe',
    firstname: 'Jane',
    lastname: 'Doe',
    email: 'Jane@doe.com',
    planeTicket: {
      create: {
        price: 30,
        plane: {
          create: {
            name: 'plane_name_Z',
          },
        },
      },
    },
  },
];

async function main() {
  console.log('Start seeding...');

  await prisma.user.deleteMany();

  for (const u of userData) {
    const user = await prisma.user.create({
      data: u,
    });
  }
  console.log(userData);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
