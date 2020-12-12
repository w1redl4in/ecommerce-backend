import { Router } from 'express';
import * as AuthController from './AuthController';
import { validateAuthentication, validateToken } from './validator';

const routes = Router();

routes.post('/', validateAuthentication, AuthController.authenticate);
routes.post('/validate', validateToken, AuthController.validateToken);

export default routes;
