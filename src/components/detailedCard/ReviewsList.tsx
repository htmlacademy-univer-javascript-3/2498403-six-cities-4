import { ReviewForm } from './ReviewForm';
import {ReviewsItem} from './reviewsItem';
import {ReviewsItemProp} from '../../types/types';

export type ReviewsListProps = {
  reviews: ReviewsItemProp[];
}

export function ReviewsList({ reviews }: ReviewsListProps) {
  return(
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review) => (
          <ReviewsItem
            key={review.name + review.dateTime}
            name={review.name}
            rating={review.rating}
            dateTime={review.dateTime}
            review={review.review}
            avatar={review.avatar}
          />
        ))}
      </ul>
      <ReviewForm />
    </section>
  );
}
