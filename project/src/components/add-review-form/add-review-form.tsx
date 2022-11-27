import { ChangeEvent, Fragment, useState } from 'react';

function AddReviewForm() {
  const [rating, setRating] = useState('8');
  const [reviewText, setReviewText] = useState('');

  const reviewTextChangeHandler = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setReviewText(evt.target.value);
  };
  const ratingChangeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    setRating(evt.target.value);
  };

  return (
    <form action="#" className="add-review__form">
      <div className="rating" >
        <div className="rating__stars">
          {[10, 9, 8, 7, 6, 5, 4, 3, 2, 1].map((starNumber) => (
            <Fragment key={starNumber}>
              <input
                className="rating__input"
                id={`star-${starNumber}`}
                type="radio"
                name="rating"
                value={starNumber.toString()}
                onChange={ratingChangeHandler}
              />
              <label className="rating__label" htmlFor={`star-${starNumber}`}>
                Rating {starNumber}
              </label>
            </Fragment>
          ))}
        </div>
      </div>
      <div className="add-review__text">
        <textarea
          className="add-review__textarea"
          name="review-text"
          id="review-text"
          placeholder={'Review Text'}
          value={reviewText}
          onChange={reviewTextChangeHandler}
        />
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">
            Post
          </button>
        </div>
      </div>
    </form>
  );
}

export default AddReviewForm;
