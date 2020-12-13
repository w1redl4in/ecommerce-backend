import { Request, Response } from 'express';
import OrderService from './OrderService';

export const create = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const response = await OrderService.create(req.body);
  return res.json(response);
};

export const list = async (_: Request, res: Response): Promise<Response> => {
  const response = await OrderService.list();
  return res.json(response);
};

export const index = async (req: Request, res: Response): Promise<Response> => {
  const response = await OrderService.index(req.params.id);
  return res.json(response);
};
