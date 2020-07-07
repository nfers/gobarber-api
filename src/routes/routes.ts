import { Router } from 'express';
import appointmentsRouter from './appointments.routes';

const routes = Router();

routes.get('/api/rota', (req, res) =>
  res.json({ message: 'Rotas funcionando' }),
);

routes.use('/appointments', appointmentsRouter);

export default routes;
