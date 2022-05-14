import { Hotel } from './HotelInterfaces';
import mongoose from 'mongoose';

const HotelSchema = new mongoose.Schema<Hotel>({
  name: { type: String },
  title: { type: String },
  description: { type: String },
  summary: { type: String },
  is_featured: { type: Boolean },
  type: { type: String },
  location: {
    address: { type: String },
    coordinates: { type: [Number] },
    street: { type: String },
    city: { type: String }
  },
  prices: {
    minimum: { type: Number },
    maximum: { type: Number }
  },
  rating: { type: Number },
  images: { type: [String] },
  phrase: { type: String },
  rooms: { type: [String] }
});

export const HotelModel = mongoose.model('Hotel', HotelSchema);
