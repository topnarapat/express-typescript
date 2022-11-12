import express, { Request, Response } from 'express';
import router from './routers';

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api', router);

app.use('/api/v1/*', (req: Request, res: Response) => {
  return res.status(404).send('<h1>API Not Found</h1>')
});

app.use('*', (req: Request, res: Response) => {
  return res.status(404).send('<h1>404 Not Found</h1>')
});

app.listen(8080, () => {
  console.log('Application on port http://localhost:8080');
});
