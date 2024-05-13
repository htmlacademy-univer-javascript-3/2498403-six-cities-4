import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {Header} from '../components/header/Header';
import {DetailedCard} from '../components/detailedCard/DetailedCard';
import {NearPlaces} from '../components/nearPlaces/NearPlaces';
import {fetchNearbyOffersById, fetchOfferByID} from '../api/api-actions';
import {DetailedOffer, OfferProps} from '../types/types';
import Spinner from '../components/spinner/Spinner';

function Offer(): JSX.Element {
  const { id } = useParams();
  const [offer, setOffer] = useState<DetailedOffer | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [nearbyPlaces, setNearbyPlaces] = useState<OfferProps[]>([]);

  useEffect(() => {
    fetchOfferByID(id)
      .then((response) => {
        setOffer(response.data);
      })
      .catch((err) => {
        setError(err);
      });
  }, [id]);

  useEffect(() => {
    fetchNearbyOffersById(id)
      .then((response) => {
        const nearby = response.data.slice(0, 3);
        setNearbyPlaces(nearby);
      })
      .catch((err) => {
        setError(err);
      });
  }, [id]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!offer) {
    return <Spinner />;
  }

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--offer">
        <DetailedCard detailedOffer={offer} nearbyOffers={nearbyPlaces} />
        <NearPlaces nearPlaces={nearbyPlaces} />
      </main>
    </div>
  );
}

export default Offer;
