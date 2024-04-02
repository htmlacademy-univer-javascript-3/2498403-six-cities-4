import Main from './Main.tsx';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../const.ts';
import NotFound from './NotFound.tsx';
import Offer from './Offer.tsx';
import Login from './Login.tsx';
import Favorites from './Favorites.tsx';
import {AppProps} from '../types/types';
import PrivateRoute from './PrivateRoute';

function App({ rentalOffersCount, offers, cities, detailedOffers }: AppProps):JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<Main rentalOffersCount={rentalOffersCount} offers={offers} cities={cities}/>}
        />
        <Route
          path={AppRoute.Login}
          element={<Login/>}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <Favorites offers={offers}/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Offer}
          element={<Offer detailedOffers={detailedOffers}/>}
        />
        <Route
          path='*'
          element={<NotFound/>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
