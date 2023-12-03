import { ReviewInfo } from "../../types/types";

type ReviewItemProps = {
  review: ReviewInfo
}

function ReviewItem({review}: ReviewItemProps): JSX.Element {
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{review.review}</p>

        <footer className="review__details">
          <cite className="review__author">{review.name}</cite>
          <time className="review__date" dateTime={review.date}>{review.date}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{review.rate}</div>
    </div>
  );
}

export default ReviewItem;