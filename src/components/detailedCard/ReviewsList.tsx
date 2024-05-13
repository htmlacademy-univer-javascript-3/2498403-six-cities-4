import { ReviewForm } from './ReviewForm';
import {ReviewsItem} from './reviewsItem';
import {ReviewsItemProp} from '../../types/types';
import {useEffect, useState} from 'react';
import { fetchReviewsById } from '../../api/api-actions';

export function ReviewsList({ offerId }: string) {

  const [reviews, setReviews] = useState<ReviewsItemProp[]>([]);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetchReviewsById(offerId)
      .then((response) => {
        setReviews(response.data);
      })
      .catch((err) => {
        setError(err);
      });
  }, [offerId]);

  return(
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review) => (
          <ReviewsItem
            key={review.id}
            name={review.user.name}
            rating={review.rating}
            dateTime={review.date}
            review={review.comment}
            avatar={review.user.avatarUrl}
          />
        ))}
      </ul>
      <ReviewForm />
    </section>
  );
}
