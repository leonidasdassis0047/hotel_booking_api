export interface Hotel {
  name: string;
  title: string;
  phrase: string;
  summary: string;
  description: string;
  type: string;
  location: {
    address: string;
    city: string;
    coordinates: number[];
    street: string;
  };
  images: string[];
  rooms: string[];
  is_featured: boolean;
  prices: {
    minimum: number;
    maximum: number;
  };
  rating: number;
}
