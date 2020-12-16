import { Request, Response, NextFunction } from 'express';
import yup from '../../config/yup';

export const validateAuthentication = async (
  req: Request,
  _: Response,
  next: NextFunction
): Promise<void> => {
  await yup
    .object()
    .shape({
      email: yup.string().email().required(),
      password: yup.string().required(),
    })
    .validate(req.body, { abortEarly: false });

  return next();
};
