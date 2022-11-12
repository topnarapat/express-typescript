import { Request, Response } from 'express';

export const editUser = (req: Request, res: Response) => {
  res.send(`<form action="/api/users/edit/${req.params.id}" method="POST">
    <input type="text" name="name" placeholder="Name" value="${res.locals.user.name}" />
    <input type="number" name="age" placeholder="Age" value="${res.locals.user.age}" />
    <button type="submit">Edit User</button>
  </form>`);
}