import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App';
import {offers} from './mocks/offers';
import {cities} from './mocks/cities';
import {detailedOffers} from './mocks/detailedOffers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const Settings = {
  RentalOffersCount: 312,
} as const;

root.render(
  <React.StrictMode>
    <App rentalOffersCount={Settings.RentalOffersCount} offers={offers} cities={cities} detailedOffers={detailedOffers}/>
  </React.StrictMode>
);
