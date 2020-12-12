import connection from './config/db/connection';
import logger from './middlewares/Logger';
import { server, database } from './config/config';

connection.then(() => {
  logger.info(
    `::Server::Connection::Database connected::${database.database}-${database.port}`
  );
  const app = require('./app').default;
  app.listen(server.port, () =>
    logger.info(
      `::Server::Connection::Server is running::${server.env}-${server.port}`
    )
  );
});
