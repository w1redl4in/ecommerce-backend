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
      const response = await this.userRepository.save(data);
      return response;
    } catch (error) {
      throw new CustomError({
        code: 'CREATE_USER_ERROR',
        message: 'Erro na criação de usuário',
        status: 500,
      });
    }
  }

  async get() {
    try {
      const response = await this.userRepository.find();
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
