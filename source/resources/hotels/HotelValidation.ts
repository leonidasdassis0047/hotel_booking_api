import * as joi from 'joi';

export const createHotel = joi.object({
  name: joi.string().required().trim().message('Hotel name required')
});
