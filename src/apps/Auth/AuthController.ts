import { Request, Response } from 'express';
import AuthService from './AuthService';

export const authenticate = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const response = await AuthService.authenticate(req.body);
  return res.json(response);
};
