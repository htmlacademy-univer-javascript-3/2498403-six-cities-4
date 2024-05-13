import {City, OfferProps} from '../types/types';
import {createAction} from '@reduxjs/toolkit';

export const SET_CITY = 'SET_CITY';
export const UPDATE_OFFERS = 'UPDATE_OFFERS';
export const FETCH_OFFERS_START = 'FETCH_OFFERS_START';
export const FETCH_OFFERS_SUCCESS = 'FETCH_OFFERS_SUCCESS';
export const FETCH_OFFERS_FAIL = 'FETCH_OFFERS_FAIL';

export const setCity = createAction<City>(SET_CITY);
export const updateOffers = createAction<OfferProps[]>(UPDATE_OFFERS);
export const fetchOffersStart = createAction(FETCH_OFFERS_START);
export const fetchOffersSuccess = createAction<OfferProps[]>(FETCH_OFFERS_SUCCESS);
export const fetchOffersFail = createAction<string>(FETCH_OFFERS_FAIL);
