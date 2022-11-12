import { Request, Response } from 'express';
import { users } from '../../models/users';

export const getAllUsers = (req: Request, res: Response) => {
  res.send({
    data: users,
  });
}