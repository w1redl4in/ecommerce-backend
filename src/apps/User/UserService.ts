/* eslint-disable no-useless-catch */
import { CustomError } from 'express-handler-errors';
import { Repository, getRepository } from 'typeorm';
import crypto from 'crypto';
import { User } from './User.entity';
import { sendEmailCreated, sendEmailRecovery } from '../../config/nodemailer';
import { UserRequest } from '../../utils/types';

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

  async userPasswordRecovery(data: { email: string }) {
    try {
      const EmailExist = await this.userRepository.findOne({
        email: data.email,
      });

      if (!EmailExist)
        throw new CustomError({
          code: 'USER_NOT_FOUND',
          message: 'Usuário não encontrado',
          status: 404,
        });

      const changePassword = crypto.randomBytes(4).toString('hex');

      await this.userRepository.update(EmailExist.id, {
        password: changePassword,
      });

      await sendEmailRecovery(EmailExist.email, changePassword);
    } catch (error) {
      if (error instanceof CustomError) throw error;
      throw new CustomError({
        code: 'USER_RECOVERY_ERROR',
        message: 'Problema no envio de senha',
        status: 500,
      });
    }
  }

  private async userFirstLogin(id: string) {
    try {
      await this.userRepository.update(id, {
        firstLogin: false,
      });
    } catch (error) {
      throw new CustomError({
        code: 'USER_FIRST_LOGIN_ERROR',
        message: 'Houve um problema no firstLogin do user',
        status: 500,
      });
    }
  }

  async patchImage(payload: { image: string }, user: UserRequest) {
    try {
      const { image } = payload;

      await this.userFirstLogin(user.id);

      await this.userRepository.update(user.id, {
        imageUrl: image,
      });
    } catch (error) {
      throw new CustomError({
        code: 'USER_SET_IMAGE_ERROR',
        message: 'Houve um problema ao definir a imagem do user',
        status: 500,
      });
    }
  }

  async switchPw(id: string, data: {password: string}, ) {
    try {
      await this.userRepository.update(id, {password: data.password})
    } catch (errror) {
      throw new CustomError({
        code: 'USER_SWITCH_PASSWORD_ERROR',
        message: 'Houve um problema ao trocar a sua senha',
        status: 500,
      })
    }
  }

  async getUserInfo(user: UserRequest) {
    try {
      const userId = user.id;

      const userData = await this.userRepository.findOne(userId);

      if (!userData)
        throw new CustomError({
          code: 'INVALID_USER_ID',
          message: 'Usuário não encontrado',
          status: 404,
        });

      delete userData?.password;

      return userData;
    } catch (error) {
      if (error instanceof CustomError) throw error;

      throw new CustomError({
        code: 'GET_USER_INFO_ERROR',
        message: 'Erro inesperado no GetUserInfo',
        status: 500,
      });
    }
  }
}

export default new UserService();
