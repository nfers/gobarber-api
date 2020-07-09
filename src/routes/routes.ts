import { Router } from 'express';
import appointmentsRouter from './appointments.routes';
import usersRouter from './users.routes';

const routes = Router();

routes.get('/api', (req, res) =>
  res.status(200).json({ message: 'API está em execução' }),
);

routes.use('/appointments', appointmentsRouter);
routes.use('/users', usersRouter);

export default routes;
