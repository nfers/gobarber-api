import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

const usersRouter = Router();

usersRouter.get('/', async (req, res) => {
  return res.status(200).json({ message: 'rota de usuários ok' });
});

export default usersRouter;
