import { Router } from 'express';

import userRoutes from './apps/User/routes';
import productRoutes from './apps/Product/routes';
import orderRoutes from './apps/Order/routes';
import authRoutes from './apps/Auth/routes';
import Authorize from './middlewares/Authorize';

const router = Router();

router.use('/auth', authRoutes);
router.use('/users', userRoutes);

router.use(Authorize);
router.use('/products', productRoutes);
router.use('/orders', orderRoutes);

export default router;
