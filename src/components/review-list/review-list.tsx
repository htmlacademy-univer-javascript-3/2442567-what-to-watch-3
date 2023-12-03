import { ReviewInfo } from '../../types/types';
import ReviewItem from '../review-item/review-item';

type ReviewListProps = {
  reviews: ReviewInfo[]
}

function ReviewList({reviews}: ReviewListProps): JSX.Element {
  const midpoint = Math.floor(reviews.length / 2); 
  const firstColumn = reviews.slice(0, midpoint); 
  const secondColumn = reviews.slice(midpoint);
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {
          firstColumn.map((review) => 
            <ReviewItem review={review} />
          )
        }
      </div>
      <div className="film-card__reviews-col">
        {
          secondColumn.map((review) => 
          <ReviewItem review={review} />
          )  
        }
        </div>
      </div>
  );
}

export default ReviewList;