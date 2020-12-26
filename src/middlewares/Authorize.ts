import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import { CustomError } from 'express-handler-errors';
import { auth } from '../config/config';
import { UserRequest } from '../utils/types';

const Authorize = async (
  req: Request,
  _: Response,
  next: NextFunction
): Promise<void> => {
  const token = req.headers.authorization;
  try {
    if (!token) {
      throw new CustomError({
        code: 'UNEXISTENT_TOKEN',
        message: 'Token não existe',
        status: 401,
      });
    }

    const user = verify(token, auth.secret) as UserRequest;
    req.user = user;

    return next();
  } catch (error) {
    if (error instanceof CustomError) throw error;
    throw new CustomError({
      code: 'INVALID_JWT_TOKEN',
      message: 'Token JWT inválido',
      status: 401,
    });
  }
};

export default Authorize;
