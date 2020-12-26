import { Request, Response } from 'express';
import UserService from './UserService';

export const create = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const response = await UserService.create(req.body);
  return res.json(response);
};

export const list = async (_: Request, res: Response): Promise<Response> => {
  const response = await UserService.list();
  return res.json(response);
};

export const index = async (req: Request, res: Response): Promise<Response> => {
  const response = await UserService.index(req.params.id);
  return res.json(response);
};

export const remove = async (
  req: Request,
  res: Response
): Promise<Response> => {
  await UserService.remove(req.params.id);
  return res.sendStatus(204);
};

export const recoveryPassword = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const response = await UserService.userPasswordRecovery(req.body);
  return res.json(response);
};

export const patchImage = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const response = await UserService.patchImage(req.body, req.user);
  return res.json(response);
};
