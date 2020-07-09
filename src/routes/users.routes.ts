import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import CreateUserService from '../services/CreateUserService';

const usersRouter = Router();

usersRouter.post('/new', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const createUser = new CreateUserService();

    const user = await createUser.execute({
      name,
      email,
      password,
    });

    return res.status(200).json({ user });
  } catch (err) {
    return res.status(401).json({ error: err.message });
  }
});

export default usersRouter;
