import { Router } from 'express';
import 'express-async-errors';
import * as UserController from './UserController';
import { validateCreate } from './validator';

const routes = Router();

routes.post('/', validateCreate, UserController.create);

export default routes;
