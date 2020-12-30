import { CustomError } from 'express-handler-errors';
import { getRepository, Repository } from 'typeorm';
import {
  JsonWebTokenError,
  sign,
  TokenExpiredError,
  verify,
} from 'jsonwebtoken';
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

  async authenticate(data: Auth): Promise<{ token: string; user: any }> {
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

      const token = await sign(
        { id: userExists.id, name: userExists.name, email: userExists.email },
        auth.secret,
        {
          expiresIn: auth.expiresIn,
        }
      );

      logger.info(
        `AuthService::authenticate::user found::generating token::success`
      );

      delete userExists.password;

      return {
        token,
        user: {
          ...userExists,
        },
      };
    } catch (error) {
      if (error instanceof CustomError) throw error;
      throw new CustomError({
        code: 'AUTH_ERROR',
        message: 'Erro ao autenticar',
        status: 500,
      });
    }
  }

  async validateToken(data: { token: string }): Promise<boolean> {
    const { token } = data;
    try {
      verify(token, auth.secret);
      return true;
    } catch (error) {
      if (error instanceof JsonWebTokenError)
        throw new CustomError({
          code: 'INVALID_JWT_TOKEN',
          message: 'Token inválido',
          status: 401,
        });

      if (error instanceof TokenExpiredError)
        throw new CustomError({
          code: 'JWT_TOKEN_EXPIRED',
          message: 'Token expirado',
          status: 401,
        });
      throw new CustomError({
        code: 'VALIDATE_TOKEN_ERROR',
        message: 'Não foi possível validar o token',
        status: 500,
      });
    }
  }
}

export default new AuthService();
