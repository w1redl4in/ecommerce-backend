import { Request, Response } from 'express';
import UserService from './UserService';

export const create = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const response = await UserService.create(req.body);
  return res.json(response);
};

export const get = async (_: Request, res: Response): Promise<Response> => {
  const response = await UserService.get();
  return res.json(response);
};
