import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { Product } from '../../apps/Product/Product.entity';
import { Order } from '../../apps/Order/Order.entity';
import { User } from '../../apps/User/User.entity';
import { database, server } from '../config';

const connection = createConnection({
  type: 'postgres',
  host: database.host,
  port: database.port,
  username: database.username,
  password: database.password,
  database: database.database,
  entities: [User, Order, Product],
  synchronize: true,
});

export default connection;
