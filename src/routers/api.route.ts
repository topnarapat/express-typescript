import { Router } from 'express';
import { getApi, postApi, api } from '../controllers/api.controller';

const router = Router();

router.get('/', getApi);
router.get('/class', api.getApi);
router.post('/', postApi);

export default router;