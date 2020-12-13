import { Router } from 'express';
import multer from 'multer';
import path from 'path';
import multerConfig from '../../middlewares/Multer';

import * as ProductController from './ProductController';

import { productValidation } from './validator';

const routes = Router();

const upload = multer(multerConfig);

routes.use(upload.single('file'));
routes.post('/', ProductController.create);
routes.get('/', ProductController.list);
routes.get('/:id', ProductController.index);
routes.delete('/:id', ProductController.remove);

export default routes;
