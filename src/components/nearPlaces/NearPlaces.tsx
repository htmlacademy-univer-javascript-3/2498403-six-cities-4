import React from 'react';
import Card from '../card/Card';
import { Offer } from '../../types/types';

type NearPlacesProps = {
  nearPlaces: Offer[];
}

export function NearPlaces({ nearPlaces }: NearPlacesProps) {
  return (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">Other places in the neighbourhood</h2>
        <div className="near-places__list places__list">
          {nearPlaces.map((nearPlace) => (
            <Card
              key={nearPlace.id}
              offer={nearPlace}
              imageWrapperClass="near-places__image-wrapper"
              articleClass="near-places__card"
            />
          ))}
        </div>
      </section>
    </div>
  );
}
