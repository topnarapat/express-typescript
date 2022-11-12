import { Request, Response } from 'express';
import { users } from '../../models/users';

export const updateUser = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  users[id - 1] = req.body;
  res.redirect("/api/users");
}