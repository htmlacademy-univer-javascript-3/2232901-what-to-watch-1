import {Film} from '../../types/film';
import {Link} from 'react-router-dom';

type SmallFilmCardProps = {
  film: Film
}

function SmallFilmCard({ film }: SmallFilmCardProps): JSX.Element {
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={film.src} alt={film.name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`films/${film.id}`}>{film.name}</Link>
      </h3>
    </article>
  );
}

export default SmallFilmCard;
