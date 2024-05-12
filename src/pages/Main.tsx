import { useState } from 'react';
import Card from '../components/card/Card';
import { CitiesList } from '../components/citiesList/CitiesList';
import { Header } from '../components/header/Header';
import {MainProps, SortingType} from '../types/types';
import Map from '../components/map/Map';
import cn from 'classnames';
import {RootState} from '../store';
import {useSelector} from 'react-redux';
import {Sorting} from '../components/sorting/Sorting';

function Main({ cities }: MainProps): JSX.Element {
  const { currentCity, offers } = useSelector((state: RootState) => ({
    currentCity: state.rentals.currentCity,
    offers: state.rentals.offers
  }));
  const [id, setOfferId] = useState<string | null>(null);
  const filteredOffers = offers.filter((offer) => offer.city.name === currentCity.title);
  const hasOffers = filteredOffers && filteredOffers.length > 0;
  const [sortingType, setSortingType] = useState<SortingType>('Popular');

  const mainClassName = cn('page__main', 'page__main--index', {
    'page__main--index-empty': !hasOffers,
  });

  const location = {
    latitude: currentCity.lat,
    longitude: currentCity.lng,
    zoom: currentCity.zoom
  };

  const sortOffers = (offersToSort: typeof offers, type: SortingType) => {
    switch (type) {
      case 'Price: low to high':
        return [...offersToSort].sort((a, b) => a.price - b.price);
      case 'Price: high to low':
        return [...offersToSort].sort((a, b) => b.price - a.price);
      case 'Top rated first':
        return [...offersToSort].sort((a, b) => b.rating - a.rating);
      case 'Popular':
      default:
        return offersToSort;
    }
  };

  const sortedOffers = sortOffers(filteredOffers, sortingType);

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className={mainClassName}>
        {hasOffers ? (
          <>
            <CitiesList cities={cities} currentCity={currentCity} />
            <div className="cities">
              <div className="cities__places-container container">
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">{filteredOffers.length} places to stay in {currentCity.title}</b>
                  <Sorting sortingType={sortingType} onChangeSorting={(type) => setSortingType(type as SortingType)} />
                  <div className="cities__places-list places__list tabs__content">
                    {sortedOffers.map((offer) => (
                      <Card key={offer.id} offer={offer} onHover={setOfferId} />
                    ))}
                  </div>
                </section>
                <div className="cities__right-section">
                  <Map offers={filteredOffers} specialOfferId={id} location={location} type="cities" />
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <CitiesList cities={cities} currentCity={currentCity} />
            <div className="cities">
              <div className="cities__places-container cities__places-container--empty container">
                <section className="cities__no-places">
                  <div className="cities__status-wrapper tabs__content">
                    <b className="cities__status">No places to stay available</b>
                    <p className="cities__status-description">
                      We could not find any property available at the moment in {currentCity.title}
                    </p>
                  </div>
                </section>
                <div className="cities__right-section"></div>
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
}

export default Main;
