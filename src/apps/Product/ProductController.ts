import { Request, Response } from 'express';
import path from 'path';
import ProductService from './ProductService';

export const list = async (_: Request, res: Response): Promise<Response> => {
  const response = await ProductService.list();
  return res.json(response);
};

export const create = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const response = await ProductService.create(req.body, req.file);
  return res.json(response);
};

export const index = async (req: Request, res: Response): Promise<Response> => {
  const response = await ProductService.index(req.params.id);
  return res.json(response);
};

export const remove = async (
  req: Request,
  res: Response
): Promise<Response> => {
  await ProductService.remove(req.params.id);
  return res.sendStatus(204);
};
