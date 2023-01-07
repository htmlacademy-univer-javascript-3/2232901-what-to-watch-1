import {Film} from '../../types/film';
import {Link} from 'react-router-dom';
import {MouseEvent} from 'react';
import PreviewPlayer from '../preview-player/preview-player';

type SmallFilmCardProps = {
  film: Film,
  onMouseOverHandler: (event: MouseEvent<HTMLDivElement>) => void,
  onMouseLeaveHandler: (event: MouseEvent<HTMLDivElement>) => void,
  isMouseOn: boolean
}

function SmallFilmCard({ film, isMouseOn, onMouseOverHandler, onMouseLeaveHandler }: SmallFilmCardProps): JSX.Element {
  return (
    <article className="small-film-card catalog__films-card" onMouseOver={onMouseOverHandler} onMouseLeave={onMouseLeaveHandler}>
      <div className="small-film-card__image">
        {
          isMouseOn
            ? <PreviewPlayer posterUrl={film.previewImage} videoUrl={film.previewVideoLink} />
            : <img src={film.previewImage} alt={film.name} width="280" height="175" />

        }
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${film.id}`}>{film.name}</Link>
      </h3>
    </article>
  );
}

export default SmallFilmCard;
