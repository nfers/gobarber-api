import { Router } from 'express';
import appointmentsRouter from './appointments.routes';
import usersRouter from './users.routes';

const routes = Router();

routes.get('/api/rota', (req, res) =>
  res.json({ message: 'Rotas funcionando' }),
);

routes.use('/appointments', appointmentsRouter);
routes.use('/users', usersRouter);

export default routes;
