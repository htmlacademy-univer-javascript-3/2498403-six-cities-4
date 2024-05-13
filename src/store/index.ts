import { configureStore } from '@reduxjs/toolkit';
import {rentalReducer} from './reducer';
import {api} from '../api/api';

export const store = configureStore({
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
