import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { database, server } from '../config';

const connection = createConnection({
  type: 'postgres',
  host: database.host,
  port: 5432,
  username: database.username,
  password: database.password,
  database: database.database,
  entities: ['src/apps/**/*.entity.ts'],
  synchronize: server.env === 'dev',
});

export default connection;
