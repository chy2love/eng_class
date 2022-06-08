import express from 'express';
import { application } from 'express';
import morgan from 'morgan';
import mainRouter from './router/mainRouter';
import wordRouter from './router/wordRouter';
const app = express();
const logger = morgan('dev');
app.set('view engine', 'pug');
app.set('views', process.cwd() + '/src/views');
app.use(logger);
app.use(express.urlencoded({ extended: true }));
app.use('/', mainRouter);
app.use('/wordList', wordRouter);

export default app;
