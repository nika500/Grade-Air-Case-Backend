import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { INestApplication } from '@nestjs/common';
import { User } from 'src/graphql';

const users: User[] = [
  {
    id: 1,
    firstname: 'Nika',
    lastname: 'Pruidze',
    username: 'n100',
  },
  {
    id: 2,
    firstname: 'John',
    lastname: 'Doe',
    username: 'john_Doe',
  },
  {
    id: 3,
    firstname: 'Jane',
    lastname: 'Doe',
    username: 'Jane_Doe',
  },
];

const gql = '/graphql';

describe('Api (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  describe('User e2e tests', () => {
    describe('get many users', () => {
      it('should get users array', () => {
        return request(app.getHttpServer())
          .post(gql)
          .send({
            query: /* GrapQL */ `
          {
            users {
              id,
              firstname,
              lastname,
              username
            }
          }
          `,
          })
          .expect(200)
          .expect((res) => {
            expect(res.body.data.users).toEqual(users);
          });
      });
    });

    describe('get one user', () => {
      it('should get one single user', () => {
        return request(app.getHttpServer())
          .post(gql)
          .send({
            query: `{
              user(id: 3) {
                id
                firstname
                lastname
                username
              }
            }`,
          })
          .expect(200)
          .expect((res) => {
            expect(res.body.data.user).toEqual({
              id: users[2].id,
              firstname: users[2].firstname,
              lastname: users[2].lastname,
              username: users[2].username,
            });
          });
      });
    });

    describe('create user', () => {
      it('should create new user', () => {
        return request(app.getHttpServer())
          .post(gql)
          .send({
            query: /* GrapQL */ `
            mutation {
                createUser(createUserInput:{
                  firstname: "Luke",
                  lastname: "Skywalker",
                  username: "jedi-master"
                }) {
                  id,
                  firstname,
                  lastname,
                  username
                }
              }`,
          })
          .expect(200)
          .expect((res) => {
            expect(res.body.data.createUser).toEqual({
              id: 4,
              firstname: 'Luke',
              lastname: 'Skywalker',
              username: 'jedi-master',
            });
          })
          .then(() =>
            request(app.getHttpServer())
              .post(gql)
              .send({
                query: /* GrapQL */ `
                    query {
                        users {
                            id,
                            firstname,
                            lastname
                            username
                        }
                    }
                    `,
              })
              .expect(200)
              .expect((res) => {
                expect(res.body.data.users).toEqual(
                  users.concat([
                    {
                      id: 4,
                      firstname: 'Luke',
                      lastname: 'Skywalker',
                      username: 'jedi-master',
                    },
                  ]),
                );
              }),
          );
      });
    });

    describe('update user', () => {
      it('should update user', () => {
        return request(app.getHttpServer())
          .post(gql)
          .send({
            query: /* GrapQL */ `
            mutation {
              updateUser(updateUserInput: {
                id: 4,
                firstname: "Anakin",
                username: "sith-lord"
              }) {
                id,
                firstname,
                lastname,
                username
              } 
            }
        `,
          })
          .expect(200)
          .expect((res) => {
            expect(res.body.data.updateUser).toEqual({
              id: 4,
              firstname: 'Anakin',
              lastname: 'Skywalker',
              username: 'sith-lord',
            });
          });
      });
    });
  });
});
