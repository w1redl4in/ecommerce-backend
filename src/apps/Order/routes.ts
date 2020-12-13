import { Router } from 'express';

import * as OrderController from './OrderController';

const routes = Router();

routes.post('/', OrderController.create);
routes.get('/', OrderController.list);
routes.get('/:id', OrderController.index);

export default routes;
