import { Request, Response, NextFunction } from 'express';
import yup from '../../config/yup';

export const productValidation = async (
  req: Request,
  _: Response,
  next: NextFunction
): Promise<void> => {
  await yup
    .object()
    .shape({
      name: yup.string().required(),
      description: yup.string().required(),
      order: yup.number().required(),
    })
    .validate(req.body, { abortEarly: false });

  return next();
};
