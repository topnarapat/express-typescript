import { Request, Response } from 'express';
import { users } from '../../models/users';

export const showUser = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  res.send({
    data: users[id - 1]
  });
}