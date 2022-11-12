import { Router } from 'express';
import api from './api.route';

const router = Router();

router.use('/v1', api);

export default router;