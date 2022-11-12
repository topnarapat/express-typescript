import { Router } from 'express';
import multer from 'multer';
import path from 'path';
import bytes from 'bytes';
import { newUser } from '../controllers/users/new';
import { getAllUsers } from '../controllers/users/index';
import { createUser } from '../controllers/users/create';
import { showUser } from '../controllers/users/show';
import { editUser } from '../controllers/users/edit';
import { users } from '../models/users';
import { updateUser } from '../controllers/users/update';
import { deleteUser } from '../controllers/users/delete';

const router = Router();

const upload = multer({
  dest: path.join(__dirname, '../../dist/uploads'),
  limits: {
    fileSize: bytes("2MB")
  }
});

router.param('id', (req, res, next, id) => {
  res.locals.user = users[id - 1];
  if (!res.locals.user) {
    const err = new Error('User not found');
    return next(err);
  }
  return next();
});

router.get('/', getAllUsers);
router.get('/new', newUser);
router.post('/', upload.single('avatar'), createUser);
router.get('/:id', showUser);
router.get('/edit/:id', editUser);
router.post('/edit/:id', upload.single('avatar'), updateUser);
router.delete('/:id', deleteUser);

export default router;