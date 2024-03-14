import Main from '../../pages/Main';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import Login from '../../pages/login';
import Offer from '../../pages/offer';
import NotFound from '../../pages/not-found';
import PrivateRoute from '../../pages/private-route';
import Favorites from '../../pages/favorites';

type AppProps = {
  rentalOffersCount: number;
}

function App({ rentalOffersCount }: AppProps):JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<Main rentalOffersCount={rentalOffersCount} />}
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
              <Favorites/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Offer}
          element={<Offer/>}
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
