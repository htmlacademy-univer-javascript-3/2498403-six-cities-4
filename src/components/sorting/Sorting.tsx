import {SortingProps} from '../../types/types';
import cn from 'classnames';

const sortingOptions = ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first'];

export function Sorting({ sortingType, onChangeSorting }: SortingProps): JSX.Element {
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        {sortingType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className="places__options places__options--custom places__options--opened">
        {sortingOptions.map((type) => (
          <li
            key={type}
            className={cn('places__option', { 'places__option--active': type === sortingType })}
            tabIndex={0}
            onClick={() => onChangeSorting(type)}
          >
            {type}
          </li>
        ))}
      </ul>
    </form>
  );
}
