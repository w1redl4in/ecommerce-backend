import { Request, Response, NextFunction } from 'express';
import yup from '../../config/yup';

export const validateCreate = async (
  req: Request,
  _: Response,
  next: NextFunction
): Promise<void> => {
  await yup
    .object()
    .shape({
      name: yup.string().required(),
      email: yup.string().email().required(),
      password: yup.string().required(),
    })
    .validate(req.body, { abortEarly: false });

  return next();
};

export const validateUserRecovery = async (
  req: Request,
  _: Response,
  next: NextFunction
): Promise<void> => {
  await yup
    .object()
    .shape({
      email: yup.string().email().required(),
    })
    .validate(req.body, { abortEarly: false });

  return next();
};
