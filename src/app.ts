import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import logger from './utils/logger';
import { errorHandler, notFound } from './middlewares/errorHandler';
import api from './api';
import MessageResponse from './interfaces/MessageResponse';

dotenv.config();

const app: Express = express();

app.use(morgan('dev', { stream: { write: (message) => logger.info(message) } }));
app.use(cors());
app.use(express.json());

app.get<{}, MessageResponse>('/', (req: Request, res: Response) => {
  res.status(200).json({ message: 'Hello, World!' });
});

app.use('/api/v1', api);

app.use(errorHandler);
app.use(notFound);

export default app;