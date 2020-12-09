import { Router } from 'express';

import userRoutes from './apps/User/routes';

const router = Router();

router.use('/users', userRoutes);

export default router;
