import express from 'express';
import { dayWord } from '../controller/wordController';
const wordRouter = express.Router();
wordRouter.get('/:id', dayWord);

export default wordRouter;
