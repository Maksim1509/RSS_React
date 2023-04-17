export interface ICard {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export interface Root {
  info: Info;
  results: Result[];
}

export interface Info {
  count: number;
  pages: number;
  next: string;
  prev: string | null;
}

export interface Result {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
  episode: string[];
  url: string;
  created: string;
  origin: Origin;
  location: Location;
  locationResponse: LocationResponse | null;
}

export interface Origin {
  name: string;
  url: string;
}

export interface Location {
  name: string;
  url: string;
}

export interface LocationResponse {
  id: number;
  name: string;
  type: string;
  dimension: string;
}

export type FormData = {
  name: string;
  date: string;
  category: string;
  condition: string;
  file: string;
  checkbox: boolean;
};
