import {Offer, Offers, OffersByCity} from '../types/types';
import Card from '../components/card/Card';
import {Header} from '../components/header/Header';
import {Footer} from '../components/footer/Footer';

function Favorites({ offers }: { offers: Offers }): JSX.Element {

  const offersByCity = offers.reduce((acc: OffersByCity, offer) => {
    const { city } = offer;
    if (!acc[city.name]) {
      acc[city.name] = [];
    }
    acc[city.name].push(offer);
    return acc;
  }, {} as { [key: string]: Offer[] });


  return (
    <div>
      <div className="page">
        <Header />
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listings</h1>
              <ul className="favorites__list">
                {Object.keys(offersByCity).map((cityName) => (
                  <li key={cityName} className="favorites__locations-items">
                    <div className="favorites__locations locations locations--current">
                      <div className="locations__item">
                        <a className="locations__item-link" href="#">
                          <span>{cityName}</span>
                        </a>
                      </div>
                    </div>
                    <div className="favorites__places">
                      {offersByCity[cityName]
                        .filter((offer) => offer.isFavorite)
                        .map((offer) => (
                          <Card key={offer.id} {...offer} />
                        ))}
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </main>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Favorites;
