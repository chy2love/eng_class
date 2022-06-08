import express from 'express';
import { home } from '../controller/homeController';
const mainRouter = express.Router();

mainRouter.get('/', home);

export default mainRouter;
