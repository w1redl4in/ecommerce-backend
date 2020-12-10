import { Router } from 'express';

import userRoutes from './apps/User/routes';
import productRoutes from './apps/Product/routes';

const router = Router();

router.use('/users', userRoutes);
router.use('/products', productRoutes);

export default router;
