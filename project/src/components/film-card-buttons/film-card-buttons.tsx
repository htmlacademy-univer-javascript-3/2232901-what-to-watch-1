import {useAppDispatch, useAppSelector} from '../../hooks';
import {changeFilmViewStatus} from '../../store/api-actions';
import {Link} from 'react-router-dom';

type FilmCardButtonsProps = {
  isMain: boolean;
}

function FilmCardButtons({isMain}: FilmCardButtonsProps): JSX.Element{
  const favoriteCount = useAppSelector((state) => state.favouriteFilmsCount);
  const dispatch = useAppDispatch();
  const film = useAppSelector((state) => state.currentFilm);
  const isAuthorized = useAppSelector((state) => state.isAuthorised);

  const onAddFavoriteClick = () => {
    const filmStatusChangeInfo = {
      filmId: film.id,
      status: !film.isFavorite
    };

    dispatch(changeFilmViewStatus(filmStatusChangeInfo));
  };

  return(
    <div className="film-card__buttons">
      <Link
        to={`/player/${film.id}`}
        className='btn btn--play film-card__button'
      >
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s"></use>
        </svg>
        <span>Play</span>
      </Link>
      {
        isAuthorized &&
        <button
          className="btn btn--list film-card__button"
          type="button"
          onClick={onAddFavoriteClick}
        >
          {
            film?.isFavorite ?
              <svg viewBox="0 0 19 20" width="19" height="20">
                <use xlinkHref="#in-list"></use>
              </svg> :
              <svg viewBox="0 0 19 20" width="19" height="20">
                <use xlinkHref="#add"></use>
              </svg>
          }
          <span>My list</span>
          <span className="film-card__count">{favoriteCount}</span>
        </button>
      }
      { isAuthorized && !isMain &&
        <Link to={'review'} className="btn film-card__button" type='button'>Add review</Link>}
    </div>
  );
}

export default FilmCardButtons;
