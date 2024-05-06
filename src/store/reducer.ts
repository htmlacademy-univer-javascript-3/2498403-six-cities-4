import { Action, State } from '../types/types';
import {cities} from '../mocks/cities';
import {offers} from '../mocks/offers';

const initialState: State = {
  offers: offers,
  currentCity: cities[0]
};

export const rentalReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case 'SET_CITY':
      return {
        ...state,
        currentCity: action.payload
      };
    case 'UPDATE_OFFERS':
      return {
        ...state,
        offers: action.payload
      };
    default:
      return state;
  }
};
