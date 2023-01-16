import Logo from '../../components/logo/logo';
import Footer from '../../components/footer/footer';
import FilmsList from '../../components/films-list/films-list';
import FilmPageTabs from '../../components/film-page-tabs/film-page-tabs';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {useEffect} from 'react';
import {fetchFilmById, fetchReviewsById, fetchSimilarFilmsById} from '../../store/api-actions';
import Loading from '../../components/loading/loading';
import FilmCardButtons from '../../components/film-card-buttons/film-card-buttons';
import UserBlock from '../../components/user-block/user-block';
import {Navigate, useParams} from 'react-router-dom';
import {EMPTY_FILM} from '../../types/film';

function MoviePage(): JSX.Element {
  const dispatch = useAppDispatch();
  const id = Number(useParams().id);

  useEffect(() => {
    dispatch(fetchFilmById(id));
    dispatch(fetchReviewsById(id));
    dispatch(fetchSimilarFilmsById(id));
  }, [id, dispatch]);

  const film = useAppSelector((state) => state.currentFilm);
  const similarFilms = useAppSelector((state) => state.currentFilmSimilarFilms);
  const isLoading = useAppSelector((state) => state.isLoading);

  if (film === EMPTY_FILM) {
    return <Navigate to={'/not-found'}/>;
  }

  if (isLoading) {
    return (
      <Loading />
    );
  }

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film.backgroundImage} alt={film.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo/>
            <UserBlock />
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film.genre}</span>
                <span className="film-card__year">{film.released}</span>
              </p>

              <FilmCardButtons isMain={false}/>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={film.posterImage} alt={film.name} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <FilmPageTabs film={film}/>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__films-list">
            <FilmsList films={similarFilms.slice(0,4)}/>
          </div>
        </section>

        <Footer/>
      </div>
    </>
  );
}

export default MoviePage;
