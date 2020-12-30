import { Router } from 'express';
import 'express-async-errors';
import Authorize from '../../middlewares/Authorize';
import * as UserController from './UserController';
import {
  validateCreate,
  validateImageUser,
  validateUserRecovery,
} from './validator';

const routes = Router();

routes.post('/', validateCreate, UserController.create);
routes.get('/', UserController.list);
routes.get('/getUserInfo', Authorize, UserController.getUserInfo);
routes.get('/:id', UserController.index);
routes.delete('/:id', UserController.remove);
routes.post('/recovery', validateUserRecovery, UserController.recoveryPassword);
routes.patch('/password/:id', UserController.switchPassword)
routes.patch('/image', Authorize, validateImageUser, UserController.patchImage);

export default routes;
