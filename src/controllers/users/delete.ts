import { Request, Response } from 'express';
import { users } from '../../models/users';

export const deleteUser = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  users.splice(id - 1, 1);
  res.redirect("/api/users");
}