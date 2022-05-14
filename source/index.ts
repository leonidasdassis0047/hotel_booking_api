import 'dotenv/config';
import Application from './App';

import HotelController from './resources/hotels/HotelController';

// controllers:
const hotelController = new HotelController();

const app = new Application(Number(process.env.PORT), [hotelController]);
app.startListen();
