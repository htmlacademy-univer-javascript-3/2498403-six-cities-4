import React from 'react';
import Main from './Main';

type AppProps = {
  rentalOffersCount: number;
}

const App: React.FC<AppProps> = ({rentalOffersCount}) => (
  <div>
    <Main rentalOffersCount={rentalOffersCount}/>
  </div>
);

export default App;
