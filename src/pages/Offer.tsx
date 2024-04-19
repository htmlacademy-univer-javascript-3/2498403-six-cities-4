import {DetailedOffers} from '../types/types';
import {DetailedCard} from '../components/detailedCard/DetailedCard';
import { useParams } from 'react-router-dom';
import {Header} from '../components/header/Header';
import {NearPlaces} from '../components/nearPlaces/NearPlaces';
import {nearPlaces} from '../mocks/nearPlaces';

function Offer({detailedOffers}: {detailedOffers: DetailedOffers}): JSX.Element {

  const { id } = useParams();
  const review = detailedOffers.filter((x) => x.id.toString() === id)[0];

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--offer">
        <DetailedCard detailedOffer={review}></DetailedCard>
        <NearPlaces nearPlaces={nearPlaces} />
      </main>
    </div>
  );
}

export default Offer;
