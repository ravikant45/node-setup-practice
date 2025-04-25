import express, { Application, Request, Response } from 'express';
import httpResponse from './util/httpResponse';

const app: Application = express();

app.use('/api/v1/', (req: Request, res: Response) => {
    httpResponse(req, res, 200, 'API is running successfully', {});
});

export { app };
