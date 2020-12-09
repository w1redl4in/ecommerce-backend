import { Request, Response } from 'express';
import { User } from './User.entity';
import UserService from './UserService';

export const create = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const response = await UserService.create(req.body);
  return res.json(response);
};

export const get = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const response = await UserService.get(req.body)
  return res.json(response)
}
