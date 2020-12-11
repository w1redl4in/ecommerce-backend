import { Router } from 'express';

import userRoutes from './apps/User/routes';
import productRoutes from './apps/Product/routes';
import orderRoutes from './apps/Order/routes';

const router = Router();

router.use('/users', userRoutes);
router.use('/products', productRoutes);
router.use('/orders', orderRoutes);

export default router;
