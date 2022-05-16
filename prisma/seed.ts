import { PrismaClient } from '@prisma/client';
import { UserCreateInput } from '../src/@generated/prisma-nestjs-graphql/user/user-create.input';
const prisma = new PrismaClient();

const userData: UserCreateInput[] = [
  {
    name: 'Nika',
    email: 'np@np.com',
  },
  {
    name: 'Alice',
    email: 'alice@gmail.com',
  },
  {
    name: 'John',
    email: 'john.doe@gmail.com',
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
