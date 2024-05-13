import React from 'react';
import {CitiesList} from '../components/citiesList/CitiesList';
import {Cities, City} from '../types/types';

function MainEmpty({ cities, currentCity }: {cities: Cities; currentCity: City}) {
  return (
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
  );
}

export default MainEmpty;
