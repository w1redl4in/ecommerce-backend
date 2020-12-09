/* eslint-disable no-useless-catch */
import { CustomError } from 'express-handler-errors';
import { Repository, getRepository } from 'typeorm';
import { User } from './User.entity';

class UserService {
  private userRepository!: Repository<User>;

  constructor() {
    this.userRepository = getRepository(User);
  }

  async create(data: User) {
    try {
      const userExists = await this.userRepository.findOne({
        email: data.email,
      });

      if (userExists)
        throw new CustomError({
          code: 'USER_ALREADY_EXISTS',
          message: 'Usuário já existe',
          status: 400,
        });

      const response = await this.userRepository.save(data);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async get() {
    try {
      const response = await this.userRepository.find({
        relations: ['products'],
      });

      return response;
    } catch (error) {
      throw new CustomError({
        code: 'GET_USERS_ERROR',
        message: 'Erro na busca de usuários',
        status: 500,
      });
    }
  }
}

export default new UserService();
