import { Router } from 'express';

import * as UserController from './UserController';
import { validateCreate } from './validator';

const routes = Router();

routes.post('/', validateCreate, UserController.create);

export default routes;
