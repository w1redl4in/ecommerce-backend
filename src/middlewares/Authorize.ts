import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import { CustomError } from 'express-handler-errors';
import { auth } from '../config/config';

interface User {
  email: string;
  password: string;
  iat: number;
  exp: number;
}

const Authorize = async (
  req: Request,
  _: Response,
  next: NextFunction
): Promise<void> => {
  const token = req.headers.authorization;
  try {
    if (token) {
      const user = verify(token, auth.secret) as User;
      req.user = user;
    }

    return next();
  } catch (error) {
    throw new CustomError({
      code: 'INVALID_JWT_TOKEN',
      message: 'Token JWT inválido',
      status: 401,
    });
  }
};

export default Authorize;
