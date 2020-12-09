import { create } from 'domain';
import request from 'supertest';
import {
  createUser,
  ListOfUsers,
  UserAlreadyExists,
  UserBadRequest400,
} from './__mocks__/user.mocks';

jest.mock('typeorm');

const app = require('../../src/app').default;

describe('User module', () => {
  const repository = require('typeorm').getRepository();

  describe('Create user', () => {
    test('should create a user', async () => {
      repository.save.mockResolvedValue(createUser);

      await request(app)
        .post('/ecommerce/users')
        .send(createUser)
        .expect(200, createUser);
    });

    test('shouldnt create a user with invalid data', async () => {
      repository.save.mockRejectedValue(createUser);

      await request(app)
        .post('/ecommerce/users')
        .send({ x: 'Teste' })
        .expect(400, UserBadRequest400);
    });

    test('shouldnt create a duplicated user', async () => {
      repository.findOne.mockResolvedValue({ email: createUser.email });
      repository.save.mockResolvedValue(createUser);

      await request(app)
        .post('/ecommerce/users')
        .send(createUser)
        .expect(400, UserAlreadyExists);
    });
  });

  describe('Get users', () => {
    test('lista de usuarios', async () => {
      repository.find.mockResolvedValue(ListOfUsers);

      await request(app).get('/ecommerce/users').expect(200, ListOfUsers);
    });

    test('lista de usuários vazia', async () => {
      repository.find.mockResolvedValue([]);

      await request(app).get('/ecommerce/users').expect(200, []);
    });
  });
});
