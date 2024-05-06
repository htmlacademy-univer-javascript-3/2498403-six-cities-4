import { configureStore } from '@reduxjs/toolkit';
import {rentalReducer} from './reducer';


export const store = configureStore({
  reducer: {
    rentals: rentalReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
