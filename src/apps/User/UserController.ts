import { Request, Response } from 'express';
import UserService from './UserService';

export const create = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const response = await UserService.create(req.body);

  if (!response) throw new Error('Teste');

  return res.json(response);
};
