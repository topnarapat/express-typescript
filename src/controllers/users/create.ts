import { Request, Response } from 'express';
import { users } from '../../models/users';

export const createUser = (req: Request, res: Response) => {
  users.push(req.body);
  res.redirect("/api/users");
}