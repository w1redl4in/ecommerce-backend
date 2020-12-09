import connection from './config/db/connection';
import { server, database } from './config';

connection.then(() => {
  console.log(`Database connected: ${database.database} - ${database.port}`);
  const app = require('./app').default;
  app.listen(server.port, () =>
    console.log('Server is running on', { port: server.port, env: server.env })
  );
});
