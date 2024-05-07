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
    location: Location;
  };
  location: Location;
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
    location: Location;
  };
  location: Location;
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

export type CardProps = {
  offer: Offer;
  onHover?: (id: string | null) => void;
  imageWrapperClass?: string;
  articleClass?: string;
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

export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type MapProps = {
  location: Location;
  offers: Offer[];
  specialOfferId: string | null;
  type: string;
};

export type Nullable<T> = T | null;

export type ReviewsItemProp = {
  name: string;
  avatar: string;
  review: string;
  dateTime: string;
  rating: number;
}

export type Action = {
  type: 'SET_CITY' | 'UPDATE_OFFERS';
  payload: any;
};

export type State = {
  currentCity: City;
  offers: Offers;
};

export type CityName = {
  name: string;
}

