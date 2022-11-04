import {Review} from './review';

export type Film = {
  id: number,
  genre: string,
  releaseYear: number,
  ratingScore: number,
  ratingCount: number
  src: string,
  backGroundSrc: string,
  videoSrc: string,
  name: string,
  duration: string,
  description: string,
  director: string,
  starring: string[],
  reviews: Review[]
}
