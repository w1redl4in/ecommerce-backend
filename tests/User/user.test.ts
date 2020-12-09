import {
  createUser,
  ListOfUsers,
  UserBadRequest400,
} from './__mocks__/user.mocks';
import request from 'supertest';

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
});
