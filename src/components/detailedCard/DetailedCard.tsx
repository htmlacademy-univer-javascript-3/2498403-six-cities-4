import {DetailedOffer, OfferProps} from '../../types/types';
import {ReviewsList} from './ReviewsList';
import Map from '../map/Map';

export function DetailedCard({ detailedOffer, nearbyOffers }: { detailedOffer: DetailedOffer;
  nearbyOffers: OfferProps[]; }): JSX.Element {

  const location = {
    latitude: detailedOffer.location.latitude,
    longitude: detailedOffer.location.longitude,
    zoom: detailedOffer.location.zoom,
  };

  const allOffers = [detailedOffer, ...nearbyOffers];

  return (
    <section className="offer">
      <div className="offer__gallery-container container">
        <div className="offer__gallery">
          {detailedOffer.images.map((image) => (
            <div className="offer__image-wrapper" key={image}>
              <img className="offer__image" src={image} alt="Photo studio" />
            </div>
          ))}
        </div>
      </div>
      <div className="offer__container container">
        <div className="offer__wrapper">
          <div className="offer__mark">
            <span>{detailedOffer.isPremium ? 'Premium' : '' }</span>
          </div>
          <div className="offer__name-wrapper">
            <h1 className="offer__name">
              {detailedOffer.title}
            </h1>
            <button className="offer__bookmark-button button" type="button">
              <svg className="offer__bookmark-icon" width="31" height="33">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">{detailedOffer.isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
            </button>
          </div>
          <div className="offer__rating rating">
            <div className="offer__stars rating__stars">
              <span style={{width: `${Math.ceil(100 * detailedOffer.rating / 5)}%`}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
            <span className="offer__rating-value rating__value">{detailedOffer.rating}</span>
          </div>
          <ul className="offer__features">
            <li className="offer__feature offer__feature--entire">
              {detailedOffer.type.charAt(0).toUpperCase() + detailedOffer.type.slice(1)}
            </li>
            <li className="offer__feature offer__feature--bedrooms">
              {detailedOffer.bedrooms} Bedrooms
            </li>
            <li className="offer__feature offer__feature--adults">
              Max {detailedOffer.maxAdults} adults
            </li>
          </ul>
          <div className="offer__price">
            <b className="offer__price-value">&euro;{detailedOffer.price}</b>
            <span className="offer__price-text">&nbsp;night</span>
          </div>
          <div className="offer__inside">
            <h2 className="offer__inside-title">What&apos;s inside</h2>
            <ul className="offer__inside-list">
              {detailedOffer.goods.map((good) => (
                <li key={good} className="offer__inside-item">
                  {good}
                </li>
              ))}
            </ul>
          </div>
          <div className="offer__host">
            <h2 className="offer__host-title">Meet the host</h2>
            <div className="offer__host-user user">
              <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                <img className="offer__avatar user__avatar" src={detailedOffer.host.avatarUrl} width="74" height="74"
                  alt="Host avatar"
                />
              </div>
              <span className="offer__user-name">
                {detailedOffer.host.name}
              </span>
              <span className="offer__user-status">
                {detailedOffer.host.isPro ? 'Pro' : ''}
              </span>
            </div>
            <div className="offer__description">
              <p className="offer__text">
                {detailedOffer.description}
              </p>
            </div>
          </div>
          <ReviewsList offerId={detailedOffer.id}></ReviewsList>
        </div>
      </div>
      <Map offers={allOffers} location={location} specialOfferId={detailedOffer.id} type="offers"></Map>
    </section>
  );
}
