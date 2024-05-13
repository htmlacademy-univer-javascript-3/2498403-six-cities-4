import {useEffect, useState} from 'react';
import Card from '../components/card/Card';
import { CitiesList } from '../components/citiesList/CitiesList';
import { Header } from '../components/header/Header';
import {MainProps, SortingType} from '../types/types';
import Map from '../components/map/Map';
import cn from 'classnames';
import {RootState} from '../store';
import {useDispatch, useSelector} from 'react-redux';
import {Sorting} from '../components/sorting/Sorting';
import {fetchOffers} from '../api/api-actions';
import Spinner from '../components/spinner/Spinner';
import MainEmpty from './MainEmpty';

function Main({ cities }: MainProps): JSX.Element {
  const { currentCity, offers, isLoading } = useSelector((state: RootState) => ({
    currentCity: state.rentals.currentCity,
    offers: state.rentals.offers,
    isLoading: state.rentals.isLoading
  }));
  const dispatch = useDispatch();
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

  useEffect(() => {
    dispatch(fetchOffers());
  }, [dispatch]);

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

  if (isLoading) {
    return <Spinner />;
  }

  if (!hasOffers) {
    return <MainEmpty cities={cities} currentCity={currentCity} />;
  }

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className={mainClassName}>
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
      </main>
    </div>
  );
}

export default Main;
