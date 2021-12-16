import express, { Express } from "express";
import morgan from 'morgan';
import router from './routes';
import { connectDb } from './config/dbconfig';

const app: Express = express();
const PORT = 8080;

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/', router);
connectDb();

app.listen(PORT, () => {
  // tslint:disable-next-line:no-console
  console.log('Server started at http://localhost:' + PORT);
});