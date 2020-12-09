import yup from '../../config/yup';
import { Request, Response, NextFunction } from 'express';

export const validateCreate = async (
  req: Request,
  _: Response,
  next: NextFunction
) => {
  await yup
    .object()
    .shape({
      name: yup.string().required(),
      email: yup.string().email(),
    })
    .validate(req.body, { abortEarly: false });

  return next();
};
