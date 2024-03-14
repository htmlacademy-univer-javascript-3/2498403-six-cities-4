import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const Settings = {
  RentalOffersCount: 312,
} as const;

root.render(
  <React.StrictMode>
    <App rentalOffersCount={Settings.RentalOffersCount}/>
  </React.StrictMode>
);
