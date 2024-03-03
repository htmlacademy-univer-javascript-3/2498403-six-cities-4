import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const rentalOffersCount = 312;

root.render(
  <React.StrictMode>
    <App rentalOffersCount={rentalOffersCount}/>
  </React.StrictMode>
);
