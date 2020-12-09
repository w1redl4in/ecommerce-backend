import cors from 'cors';
import express, { Application } from 'express';
import routes from './routes';
import 'reflect-metadata';

class App {
  public readonly express: Application;

  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
  }

  private middleware(): void {
    this.express.use(express.json());
    this.express.use(cors());
  }

  private routes(): void {
    this.express.use('/ecommerce', routes);
  }
}

export default new App().express;
