import * as yup from 'yup';
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
    })
    .validate(req.body, { abortEarly: false });

  return next();
};
