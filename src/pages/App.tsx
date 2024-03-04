import Main from './Main';

type AppProps = {
  rentalOffersCount: number;
}

function App({ rentalOffersCount }: AppProps):JSX.Element {
  return (
    <div>
      <Main rentalOffersCount={rentalOffersCount} />
    </div>
  );
}

export default App;
