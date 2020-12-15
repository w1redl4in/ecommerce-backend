import { config } from 'dotenv';

const envfile = `.env.${process.env.NODE_ENV}`;
const envdir = process.cwd();

config({ path: `${envdir}/${envfile}` });

export const server = {
  port: process.env.SERVER_PORT,
  env: process.env.NODE_ENV,
};

export const database = {
  port: Number(process.env.DATABASE_PORT),
  host: process.env.DATABASE_HOST,
  type: String(process.env.DATABASE_TYPE) || 'postgres',
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
};

export const auth = {
  secret: String(process.env.SECRET),
  expiresIn: process.env.EXPIRES_IN,
};

export const mailer = {
  host: process.env.EMAIL_HOST,
  password: process.env.EMAIL_PASSWORD
}
