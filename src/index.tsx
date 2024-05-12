import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App';
import {cities} from './mocks/cities';
import {detailedOffers} from './mocks/detailedOffers';
import {store} from './store/index';
import {Provider} from 'react-redux';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App cities={cities} detailedOffers={detailedOffers}/>
    </Provider>
  </React.StrictMode>
);
