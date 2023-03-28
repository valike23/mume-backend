import { Router } from "express";
import { accountsRouter } from "./accounts";

export const apiRouter = Router();

apiRouter.use('/accounts', accountsRouter);

