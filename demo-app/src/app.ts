import express from 'express';
import { debugRouter } from './routes/debug';
import { healthRouter } from './routes/health';
import { notesRouter } from './routes/notes';

export const app = express();

app.use(express.json());
app.use('/health', healthRouter);
app.use('/api/notes', notesRouter);
app.use('/api/debug', debugRouter);

app.use((err: Error, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error('[error]', err.message);
  res.status(500).json({
    error: 'InternalServerError',
    message: err.message
  });
});
