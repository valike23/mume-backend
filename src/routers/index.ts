import { Router } from "express";
import { apiRouter } from "./apiRouter";

export const homeRouter = Router();

homeRouter.get('/',(req, res) => {
    res.send('Hello World!');
  });

homeRouter.use('/api', apiRouter);