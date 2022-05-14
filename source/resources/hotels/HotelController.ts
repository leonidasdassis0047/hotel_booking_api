import express from 'express';
import { Controller } from './../../utils/interfaces';
import HotelService from './HotelService';

export default class HotelController implements Controller {
  public path = '/hotels';
  public router = express.Router();

  private Service = new HotelService();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(this.path, this.Service.getHotels);
  }
}
