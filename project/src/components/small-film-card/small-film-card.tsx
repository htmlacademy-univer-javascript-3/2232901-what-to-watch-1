import {FilmCardInfo} from '../../types/film-card-info';

type SmallFilmCardProps = {
  filmCardInfo: FilmCardInfo
}

function SmallFilmCard({ filmCardInfo }: SmallFilmCardProps): JSX.Element {
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={filmCardInfo.src} alt={filmCardInfo.name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">{filmCardInfo.name}</a>
      </h3>
    </article>
  );
}

export default SmallFilmCard;
