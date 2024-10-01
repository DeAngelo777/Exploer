import express from "express";
import { dictionaryRouter } from "./dictionaryRouter.js";

export const apiRouter = express.Router();

apiRouter.all('/', (req, res) => {
    return res.status(501).send('MAIN: Not implemented');
});

apiRouter.use('/dictionary', dictionaryRouter);