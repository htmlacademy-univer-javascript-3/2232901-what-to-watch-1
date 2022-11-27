import {Film} from '../../types/film';

type OverviewTabProps = {
  film: Film
}

function OverviewTab({ film }: OverviewTabProps){
  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{film.ratingScore}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{getRatingLevel(film.ratingScore)}</span>
          <span className="film-rating__count">{film.ratingCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{film.description}</p>

        <p className="film-card__director"><strong>Director: {film.director}</strong></p>

        <p className="film-card__starring"><strong>Starring: {film.starring.join(', ')} and other</strong></p>
      </div>
    </>
  );
}

export default OverviewTab;

function getRatingLevel(rating: number): string{
  if (rating < 3) {
    return 'Bad';
  }
  if (rating < 5) {
    return 'Normal';
  }
  if (rating < 8) {
    return 'Good';
  }
  if (rating < 10) {
    return 'Very good';
  }
  return 'Awesome';
}
