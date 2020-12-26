import { Router } from 'express';
import 'express-async-errors';
import * as UserController from './UserController';
import { validateCreate, validateUserRecovery } from './validator';

const routes = Router();

routes.post('/', validateCreate, UserController.create);
routes.get('/', UserController.list);
routes.get('/:id', UserController.index);
routes.delete('/:id', UserController.remove);
routes.post('/recovery', validateUserRecovery, UserController.recoveryPassword);

export default routes;
