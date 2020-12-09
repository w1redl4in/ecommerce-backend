import request from 'supertest';
import {
  createUser,
  ListOfUsers,
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
        .send({ name: 'Felipe Austríaco' })
        .expect(200, createUser);
    });

    test('shouldnt create a user', async () => {
      repository.save.mockRejectedValue(createUser);

      await request(app)
        .post('/ecommerce/users')
        .send({ x: 'Teste' })
        .expect(400, UserBadRequest400);
    });
  });

  describe('Get users', () => {
    test('lista de usuarios', async () => {
      repository.find.mockResolvedValue(ListOfUsers);

      await request(app).get('/ecommerce/users').expect(200, ListOfUsers);
    });
  });
});
