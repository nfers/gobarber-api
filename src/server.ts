import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import routes from './routes/routes';


import './database';

const app = express();

app.use(express.json());

app.use(cors());

app.use(routes);


app.get('/api', (req, res) => res.json('api executando'));

app.listen(3500, () => {
  console.log('running port ', 3500);
});
