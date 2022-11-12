import { Request, Response } from 'express';
import { users } from '../../models/users';
import uploadAvatar from '../../utils/uploadAvatar';

export const createUser = async (req: Request, res: Response) => {
  users.push(req.body);
  await uploadAvatar(req, users.length);
  res.redirect("/api/users");
}