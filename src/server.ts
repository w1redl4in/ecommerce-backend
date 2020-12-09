import express from 'express';
import router from './routes';
import connection from './db/connection';

const app = express();

app.use(express.json());

app.use(router);

connection.then(() => {
  app.listen(3333, () => console.log('App is running on 3333'));
});

export default app;
