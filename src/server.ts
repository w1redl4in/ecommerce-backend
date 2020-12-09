import connection from './db/connection';

connection.then(() => {
  const app = require('./app').default;
  app.listen(3333, () => console.log('App is running on 3333'));
});
