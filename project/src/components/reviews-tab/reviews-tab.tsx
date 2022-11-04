import {Review} from '../../types/review';
import ReviewComp from '../review-comp/review-comp';

type ReviewTabProps = {
  reviews: Review[]
}

function ReviewsTab({reviews}: ReviewTabProps){
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviews.map((review) => ReviewComp({review}))}
      </div>
    </div>
  );
}

export default ReviewsTab;
