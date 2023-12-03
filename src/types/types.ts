
export type ReviewInfo = {
  rate: number;
  name: string;
  date: string;
  review: string;
};

export type FilmInfo = {
  id: number;
  name: string;
  genre: string;
  year: number;
  imageSrc: string;
  rate: number;
  ratingLevel: string;
  ratingCount: number;
  description: string;
  director: string;
  starring: string;
  reviews: ReviewInfo[];
};