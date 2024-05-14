import { configureStore } from '@reduxjs/toolkit';
import {initialState, rentalReducer} from './reducer';
import {api} from '../api/api';

export const store = configureStore({
  name: 'rentals',
  initialState,
  reducer: {
    rentals: rentalReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: { api }
      }
    })
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
