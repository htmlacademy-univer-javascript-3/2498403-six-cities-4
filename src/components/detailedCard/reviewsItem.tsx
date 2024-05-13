import React from 'react';
import {ReviewsItemProps} from '../../types/types';

export function ReviewsItem({ name, avatar, rating, review, dateTime }: ReviewsItemProps) {
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatar} width="54" height="54" alt="Reviewer's avatar" />
        </div>
        <span className="reviews__user-name">{name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: `${rating * 20}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{review}</p>
        <time className="reviews__time" dateTime={dateTime}>{new Date(dateTime).toLocaleDateString()}</time>
      </div>
    </li>
  );
}
