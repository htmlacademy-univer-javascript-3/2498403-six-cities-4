import React from 'react';
import {LocationList} from '../../types/types';

export function CitiesList({ cities }: { cities: LocationList }): JSX.Element {
  return (
    <React.Fragment>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {cities.map((city) => (
              <li key={city} className="locations__item">
                <a className="locations__item-link tabs__item" href="src/components/citiesList/CitiesList#">
                  <span>{city}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </React.Fragment>
  );
}

