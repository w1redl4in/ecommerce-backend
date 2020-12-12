import { CustomError } from 'express-handler-errors';
import { getRepository, Repository } from 'typeorm';
import { sign } from 'jsonwebtoken';
import { User } from '../User/User.entity';
import { auth } from '../../config/config';
import logger from '../../middlewares/Logger';

interface Auth {
  email: string;
  password: string;
}

class AuthService {
  private userRepository!: Repository<User>;

  constructor() {
    this.userRepository = getRepository(User);
  }

  async authenticate(data: Auth): Promise<{ token: string }> {
    logger.info('AuthService::authenticate::received::', data);

    try {
      const { email, password } = data;

      const userExists = await this.userRepository.findOne({ email });

      if (!userExists) {
        logger.error(`AuthService::authenticate::user not found::`);
        throw new CustomError({
          code: 'INVALID_USER',
          message: 'Usuário inválido',
          status: 401,
        });
      }

      if (userExists.password !== password) {
        logger.error(`AuthService::authenticate::invalid credentials::`);
        throw new CustomError({
          code: 'INVALID_CREDENTIALS',
          message: 'Credenciais inválidas',
          status: 401,
        });
      }

      logger.info(`AuthService::authenticate::user found::generating token::`);

      const token = await sign(data, auth.secret, {
        expiresIn: auth.expiresIn,
      });

      logger.info(
        `AuthService::authenticate::user found::generating token::success`
      );

      return { token };
    } catch (error) {
      if (error instanceof CustomError) throw error;
      throw new CustomError({
        code: 'AUTH_ERROR',
        message: 'Erro ao autenticar',
        status: 500,
      });
    }
  }
}

export default new AuthService();
