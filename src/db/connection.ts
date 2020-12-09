import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { User } from '../apps/User/User.entity';

const connection = createConnection({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'ecommerce',
  database: 'postgres',
  entities: [User],
  synchronize: true,
  logging: false,
});

export default connection;
