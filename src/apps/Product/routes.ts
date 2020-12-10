import { Router } from 'express';

import * as ProductController from './ProductController';

import { productValidation } from './validator';

const routes = Router();

routes.get('/', ProductController.list);
routes.get('/:id', ProductController.index);
routes.delete('/:id', ProductController.remove);
routes.post('/', productValidation, ProductController.create);

export default routes;
