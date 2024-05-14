import {
  FETCH_OFFERS_FAIL,
  fetchOffersFail,
  fetchOffersStart,
  fetchOffersSuccess,
  SET_AUTHORIZATION_STATUS
} from '../store/action';
import axios, {AxiosResponse} from 'axios';
import {
  AuthorizationStatus,
  DetailedOffer,
  LoginPayload,
  OfferProps,
  Review,
  ReviewsItemProp,
  UserLogin
} from '../types/types';
import {api} from './api';
import {Dispatch} from 'react';

export const fetchOffers = () => async (dispatch, getState, { api }) => {
  dispatch(fetchOffersStart());
  try {
    const response = await api.get('/offers');
    dispatch(fetchOffersSuccess(response.data));
  } catch (error) {
    dispatch(fetchOffersFail(error.toString()));
  }
};

export const login = ({ email, password }: LoginPayload) => async (dispatch: Dispatch) => {
  try {
    const loginResponse: AxiosResponse<UserLogin> = await api.post('/login', { email, password });
    const { token: postToken } = loginResponse.data;
    localStorage.setItem('token', postToken);
    api.defaults.headers.common['X-Token'] = postToken;
    const getResponse: AxiosResponse<UserLogin> = await api.get('/login');
    const { token: getToken, ...userData } = getResponse.data;
    localStorage.setItem('token', getToken);
    api.defaults.headers.common['X-Token'] = getToken;

    dispatch({
      type: SET_AUTHORIZATION_STATUS,
      payload: {
        status: AuthorizationStatus.Authenticated,
        user: userData,
      },
    });
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      const errorMessage = error.response.data.error || 'An error occurred';
      dispatch({
        type: FETCH_OFFERS_FAIL,
        payload: errorMessage,
      });
    } else {
      dispatch({
        type: FETCH_OFFERS_FAIL,
        payload: error.message,
      });
    }
  }
};

export const logout = () => async (dispatch: Dispatch) => {
  try {
    await api.delete('/logout', {
      headers: {
        'X-Token': localStorage.getItem('token') || ''
      }
    });

    localStorage.removeItem('token');
    delete api.defaults.headers.common['X-Token'];

    dispatch({
      type: SET_AUTHORIZATION_STATUS,
      payload: {
        status: AuthorizationStatus.Unauthenticated,
        user: null,
      },
    });
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      const errorMessage = error.response.data.error || 'An error occurred';
      dispatch({
        type: FETCH_OFFERS_FAIL,
        payload: errorMessage,
      });
    } else {
      dispatch({
        type: FETCH_OFFERS_FAIL,
        payload: error.message,
      });
    }
  }
};

export const fetchOfferByID: (id: string) => Promise<AxiosResponse<DetailedOffer, unknown>> = (id: string) =>
  api.get<DetailedOffer>(`/offers/${id}`);

export const fetchNearbyOffersById: (id: string) => Promise<AxiosResponse<OfferProps[], unknown>> = (id: string) =>
  api.get<OfferProps[]>(`/offers/${id}/nearby`);

export const fetchReviewsById: (id: string) => Promise<AxiosResponse<ReviewsItemProp[], unknown>> = (id: string) =>
  api.get<ReviewsItemProp[]>(`/comments/${id}`);

export const postReviewById: (id: string, comment: string, rating: number) => Promise<AxiosResponse<Review, unknown>> =
  (id: string, comment: string, rating: number) => api.post<Review>(`/comments/${id}`, { comment, rating });
