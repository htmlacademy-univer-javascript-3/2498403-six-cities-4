import {ReviewsItemProp} from '../../types/types';

export function ReviewsItem(reviewsItem: ReviewsItemProp) {
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={reviewsItem.avatar} width="54" height="54"
            alt="DetailedOffers avatar"
          />
        </div>
        <span className="reviews__user-name">{reviewsItem.name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: `${20 * reviewsItem.rating}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {reviewsItem.review}
        </p>
        <time className="reviews__time" dateTime="2019-04-24">{reviewsItem.dateTime}</time>
      </div>
    </li>
  );
}
