import React from 'react';
import {Cities} from '../../types/types';

export function CitiesList({ cities }: { cities: Cities }): JSX.Element {
  return (
    <React.Fragment>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {cities.map(({ title }) => (
              <li key={title} className="locations__item">
                <a className="locations__item-link tabs__item" href="src/components/citiesList/CitiesList#">
                  <span>{title}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </React.Fragment>
  );
}
