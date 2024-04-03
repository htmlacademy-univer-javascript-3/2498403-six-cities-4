import {AuthorizationStatus} from '../const';

export type AppProps = {
  rentalOffersCount: number;
  offers: Offers;
  cities: Cities;
  detailedOffers: DetailedOffer[];
}

export type MainProps = {
  rentalOffersCount: number;
  offers: Offers;
  cities: Cities;
}

export type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
}

export type Offer = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: {
    name: string;
    location: {
      latitude: number;
      longitude: number;
      zoom: number;
    };
  };
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
}

export type Offers = Offer[];

export type OffersByCity = {
  [cityName: string]: Offers;
};

export type DetailedOffer = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: {
    name: string;
    location: {
      latitude: number;
      longitude: number;
      zoom: number;
    };};
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  description: string;
  bedrooms: number;
  goods: string[];
  host: {
    name: string;
    avatarUrl: string;
    isPro: boolean;
  };
  images: string[];
  maxAdults: number;
}

export type DetailedOffers = DetailedOffer[];

export type OfferCardProps = {
  offer: Offer;
  onHover: (id: string | null) => void;
}

export type Point = {
  title: string;
  lat: number;
  lng: number;
};

export type Points = Point[];

export type City = {
  title: string;
  lat: number;
  lng: number;
  zoom: number;
};

export type Cities = City[];

export type MapProps = {
  city: City;
  points: Points;
  selectedPoint: Point | undefined;
};

export type ListProps = {
  points: Points;
  onListItemHover: (listItemName: string) => void;
};
