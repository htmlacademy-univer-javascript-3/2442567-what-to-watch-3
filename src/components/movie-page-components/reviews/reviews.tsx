import { FilmInfo } from "../../../types/types";
import ReviewList from "../../review-list/review-list";

type MovieReviewsProps = {
  film: FilmInfo
}

function Reviews({film}: MovieReviewsProps) {
  return (
    <ReviewList reviews={film.reviews}/>
  );
}

export default Reviews;