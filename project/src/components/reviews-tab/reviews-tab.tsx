import {Review} from '../../types/review';
import ReviewForm from "../review-form/review-form"

type ReviewTabProps = {
  reviews: Review[]
}

function ReviewsTab({reviews}: ReviewTabProps){
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviews.map((review) => ReviewForm({review}))}
      </div>
    </div>
  );
}

export default ReviewsTab;
