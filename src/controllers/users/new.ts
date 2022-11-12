import { Request, Response } from 'express';

export const newUser = (req: Request, res: Response) => {
  res.send(`<form action="/api/users" method="POST">
    <input type="text" name="name" placeholder="Name" />
    <br />
    <input type="number" name="age" placeholder="Age" />
    <br />
    <input type="file" name="avatar" placeholder="Avatar" />
    <br />
    <button type="submit">Add User</button>
  </form>`);
}