import React from 'react';
import { useDispatch } from 'react-redux';
import { setCity } from '../../store/action';
import { City, Cities } from '../../types/types';

export function CitiesList({ cities, currentCity }: { cities: Cities, currentCity: City }): JSX.Element {
  const dispatch = useDispatch();

  const handleCityClick = (city: City) => {
    dispatch(setCity(city));
  };

  return (
    <React.Fragment>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {cities.map((city) => (
              <li key={city.title} className="locations__item">
                <a
                  className={`locations__item-link tabs__item ${city.title === currentCity.title ? 'tabs__item--active' : ''}`}
                  href="#"
                  onClick={() => handleCityClick(city)}
                >
                  <span>{city.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </React.Fragment>
  );
}
