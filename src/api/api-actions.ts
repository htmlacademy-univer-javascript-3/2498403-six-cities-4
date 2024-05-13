import {fetchOffersFail, fetchOffersStart, fetchOffersSuccess} from '../store/action';
import {AxiosResponse} from 'axios';
import {DetailedOffer, OfferProps, ReviewsItemProp} from '../types/types';
import {api} from './api';

export const fetchOffers = () => async (dispatch, getState, { api }) => {
  dispatch(fetchOffersStart());
  try {
    const response = await api.get('/offers');
    dispatch(fetchOffersSuccess(response.data));
  } catch (error) {
    dispatch(fetchOffersFail(error.toString()));
  }
};

export const fetchOfferByID: (id: string) => Promise<AxiosResponse<DetailedOffer, unknown>> = (id: string) =>
  api.get<DetailedOffer>(`/offers/${id}`);

export const fetchNearbyOffersById: (id: string) => Promise<AxiosResponse<OfferProps[], unknown>> = (id: string) =>
  api.get<OfferProps[]>(`/offers/${id}/nearby`);

export const fetchReviewsById: (id: string) => Promise<AxiosResponse<ReviewsItemProp[], unknown>> = (id: string) =>
  api.get<ReviewsItemProp[]>(`/comments/${id}`);
