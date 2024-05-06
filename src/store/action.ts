import {Offer, City} from '../types/types';

export const SET_CITY = 'SET_CITY';
export const UPDATE_OFFERS = 'UPDATE_OFFERS';

export type SetCityAction = {
  type: typeof SET_CITY;
  payload: City;
};

export type UpdateOffersAction = {
  type: typeof UPDATE_OFFERS;
  payload: Offer[];
};

export type Action = SetCityAction | UpdateOffersAction;

export const setCity = (city: City): SetCityAction => ({
  type: SET_CITY,
  payload: city
});

export const updateOffers = (offers: Offer[]): UpdateOffersAction => ({
  type: UPDATE_OFFERS,
  payload: offers
});
