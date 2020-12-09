import { createUser } from './__mocks__/user.mocks';
import { MockProxy } from 'jest-mock-extended';
import { Repository } from 'typeorm';
import request from 'supertest';
import { User } from '../../src/apps/User/User.entity';

jest.mock('typeorm');

const app = require('../../src/app').default;

describe('User module', () => {
  const repository = require('typeorm').getRepository(User);
  test('should create a user', async () => {
    repository.save.mockResolvedValue(createUser);

    await request(app)
      .post('/ecommerce/users')
      .send(createUser)
      .expect(200, createUser);
  });
});
