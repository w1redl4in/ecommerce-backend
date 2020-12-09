import cors from 'cors';
import express, { Application, Response, NextFunction, Request } from 'express';
import { ErrorHandler } from 'express-handler-errors';
import routes from './routes';
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
        new ErrorHandler().handle(err, res, next);
      }
    );
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
