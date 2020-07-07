import { Router } from 'express';

const routes = Router();

routes.get('/api/rota', (req, res) =>
  res.json({ message: 'Rotas funcionando' }),
);

export default routes;
