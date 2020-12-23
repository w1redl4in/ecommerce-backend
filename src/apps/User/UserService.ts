/* eslint-disable no-useless-catch */
import { CustomError } from 'express-handler-errors';
import { Repository, getRepository } from 'typeorm';
import crypto from 'crypto'
import { User } from './User.entity';
import {sendEmailCreated, sendEmailRecovery} from '../../config/nodemailer';

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

      await sendEmailCreated(data.email, data.name);

      return response;
    } catch (error) {
      throw error;
    }
  }

  async list() {
    try {
      const response = await this.userRepository.find({
        relations: ['order'],
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

  async index(id: string) {
    try {
      const userExists = this.userRepository.findOne(id, {
        relations: ['order'],
      });

      if (!userExists)
        throw new CustomError({
          code: 'USER_NOT_FOUND',
          message: 'Usuário não encontrado',
          status: 404,
        });

      return userExists;
    } catch (error) {
      throw error;
    }
  }

  async remove(id: string) {
    try {
      const userExists = await this.userRepository.findOne(id);

      if (!userExists)
        throw new CustomError({
          code: 'USER_NOT_FOUND',
          message: 'Usuário não encontrado',
          status: 404,
        });



      await this.userRepository.delete(userExists.id);
    } catch (error) {
      throw error;
    }
  }

  async get(data: {email: string}) {
    try {
    const EmailExist = await this.userRepository.findOne({email: data.email})

      if(!EmailExist)
        throw new CustomError({
          code: 'USER_NOT_FOUND',
          message: 'Usuário não encontrado',
          status: 404,
        })

        const changePassword = crypto.randomBytes(4).toString('hex')

        await this.userRepository.update(EmailExist.id, {password: changePassword})

      await sendEmailRecovery(EmailExist.email, changePassword)
  } catch (error) {
    if(error instanceof CustomError) throw error
    throw new CustomError({
      code: 'USER_RECOVERY_ERROR',
      message: 'Problema no envio de senha',
      status: 500,
    })
    }
  }
}

export default new UserService();
