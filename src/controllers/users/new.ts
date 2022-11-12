import { Request, Response } from 'express';

export const newUser = (req: Request, res: Response) => {
  res.send(`<form action="/api/users" method="POST">
    <input type="text" name="name" placeholder="Name" />
    <input type="number" name="age" placeholder="Age" />
    <button type="submit">Add User</button>
  </form>`);
}