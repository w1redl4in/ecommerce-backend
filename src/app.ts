import cors from 'cors';
import express, { Application, Response, NextFunction, Request } from 'express';
import { ErrorHandler } from 'express-handler-errors';
import path from 'path';
import routes from './routes';
import logger from './middlewares/Logger';
import 'reflect-metadata';

class App {
  public readonly express: Application;

  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
    this.errorHandle();
  }

  private errorHandle(): void {
    this.express.use(
      (err: Error, _: Request, res: Response, next: NextFunction) => {
        new ErrorHandler().handle(err, res, next, logger as any);
      }
    );
  }

  private middleware(): void {
    this.express.use(express.json());
    this.express.use(
      '/ecommerce/files',
      express.static(path.resolve(__dirname, 'uploads'))
    );
    this.express.use(cors());
  }

  private routes(): void {
    this.express.use('/ecommerce', routes);
  }
}

export default new App().express;
