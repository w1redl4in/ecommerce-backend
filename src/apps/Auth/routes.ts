import { Router } from 'express';
import * as AuthController from './AuthController';
import { validateAuthentication } from './validator';

const routes = Router();

routes.post('/', validateAuthentication, AuthController.authenticate);

export default routes;
