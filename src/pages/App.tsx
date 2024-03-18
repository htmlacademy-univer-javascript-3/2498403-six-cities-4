import Main from './Main.tsx';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../const.ts';
import NotFound from './NotFound.tsx';
import PrivateRoute from './PrivateRoute.tsx';
import Offer from './Offer.tsx';
import Login from './Login.tsx';
import Favorites from './Favorites.tsx';

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
