import { NextFunction, Request, Response } from 'express';

export default class HotelService {
  //   public async createHotel() {}

  public async getHotels(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    try {
      response.send({ hotels: [] });
    } catch (error: any) {
      next(error);
    }
  }

  //   public async getHotel() {}
  //   public async updateHotel() {}
  //   public async deleteHotel() {}
}
