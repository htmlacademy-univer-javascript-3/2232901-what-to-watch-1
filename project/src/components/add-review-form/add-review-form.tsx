import {ChangeEvent, Fragment, SyntheticEvent, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {useAppDispatch} from '../../hooks';
import {PostReviewData} from '../../types/post-review-data';
import {postReview} from '../../store/api-actions';

const MAX_REVIEW_TEXT_LEN = 400;
const MIN_REVIEW_TEXT_LEN = 50;

function AddReviewForm() {
  const id = Number(useParams().id);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [isRatingFilled, setIsRatingFilled] = useState(false);
  const [isReviewFilled, setIsReviewFilled] = useState(false);
  const [reviewData, setReviewData] = useState({
    rating: 0,
    review: ''
  });

  const reviewTextChangeHandler = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = evt.target;
    setReviewData({ ...reviewData, [name]: value });
    if (evt.target.value.length > MIN_REVIEW_TEXT_LEN && evt.target.value.length < MAX_REVIEW_TEXT_LEN) {
      setIsReviewFilled(true);
    } else {
      setIsReviewFilled(false);
    }
  };

  const ratingChangeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;
    setReviewData({ ...reviewData, [name]: +value });
    if (evt.target.value) {
      setIsRatingFilled(true);
    } else {
      setIsRatingFilled(false);
    }
  };

  const submitHandler = (evt: SyntheticEvent) => {
    evt.preventDefault();
    onSubmit({review: reviewData.review, rating: reviewData.rating, filmId: id.toString()});
  };

  const onSubmit = (postReviewData: PostReviewData) => {
    dispatch(postReview(postReviewData))
      .then(() => {
        navigate(`/films/${id}`);
      });
  };


  return (
    <div className="add-review">
      <form onSubmit={submitHandler} className="add-review__form">
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
        <div className='add-review__text'>
          <textarea
            className='add-review__textarea'
            name='review'
            id='review-text'
            placeholder='Review text'
            onChange={reviewTextChangeHandler}
          >
          </textarea>
          <div className='add-review__submit'>
            <button
              className='add-review__btn'
              type='submit'
              disabled={!isRatingFilled || !isReviewFilled}
            >
              Post
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddReviewForm;
