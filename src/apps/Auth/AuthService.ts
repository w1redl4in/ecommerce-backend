import { CustomError } from 'express-handler-errors';
import { getRepository, Repository } from 'typeorm';
import { sign } from 'jsonwebtoken';
import { User } from '../User/User.entity';
import { auth } from '../../config';

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
    try {
      const { email, password } = data;

      const userExists = await this.userRepository.findOne({ email });

      if (!userExists)
        throw new CustomError({
          code: 'INVALID_USER',
          message: 'Usuário inválido',
          status: 401,
        });

      if (userExists.password !== password)
        throw new CustomError({
          code: 'INVALID_CREDENTIALS',
          message: 'Credenciais inválidas',
          status: 401,
        });

      const token = await sign(data, auth.secret, {
        expiresIn: auth.expiresIn,
      });

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
