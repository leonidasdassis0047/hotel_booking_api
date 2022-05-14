import mongoose from 'mongoose';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import { Controller } from './utils/interfaces';

export default class Application {
  private expressApp: express.Application;
  constructor(private port: number, private controllers: Controller[]) {
    this.expressApp = express();

    this.setupDatabaseConnection();
    this.initializeApplicationMiddlewares();
    this.initializeControllers();
  }

  private initializeApplicationMiddlewares() {
    this.expressApp.use(cors());
    this.expressApp.use(helmet());
    this.expressApp.use(compression());
    this.expressApp.use(morgan('common'));
    this.expressApp.use(express.json());
    this.expressApp.use(express.urlencoded({ extended: true }));
  }
  private setupDatabaseConnection() {
    mongoose
      .connect(process.env.DATABASE_URI as string, {
        dbName: process.env.DATABASE_NAME as string
      })
      .then((conn) => {
        console.log('connection', conn.connection.db.databaseName, 'database');
      })
      .catch((error: any) => {
        console.log(error.message);
      });
  }
  private initializeControllers() {
    this.controllers.forEach((controller) => {
      this.expressApp.use('/api/v1', controller.router);
    });
  }

  public startListen() {
    this.expressApp.listen(this.port, () => {
      console.log('server running on port:', this.port);
    });
  }
}
