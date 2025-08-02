export interface PropertyProps {
  name: string;
  address: {
    state: string;
    city: string;
    country: string;
  };
  rating: number;
  category: string[];
  price: number;
  offers: {
    bed: string;
    shower: string;
    occupants: string;
  };
  image: string;
  discount: string;
}
// interfaces/index.ts
export interface PropertyProps {
  name: string;
  rating: number;

    city: string;
    country: string;
  };
  interface Review {
  name: string;
  rating: number;
  comment: string;
  avatar: string;
}

