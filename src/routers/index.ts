import { Router } from 'express';
import api from './api.route';
import users from './users';

const router = Router();

router.use('/', api);
router.use('/users', users);

export default router;