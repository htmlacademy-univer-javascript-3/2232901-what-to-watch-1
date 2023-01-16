import ReviewCard from '../review-comp/review-card';
import {useAppSelector} from '../../hooks';

function ReviewsTab(){
  const reviews = useAppSelector((state) => state.currentFilmReviews);

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviews.map((review) => <ReviewCard key={review.id} review={review} />)}
      </div>
    </div>
  );
}

export default ReviewsTab;
