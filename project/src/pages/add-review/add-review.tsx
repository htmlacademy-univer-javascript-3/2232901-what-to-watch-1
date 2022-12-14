import {Link, Navigate, useParams} from 'react-router-dom';
import Logo from '../../components/logo/logo';
import AddReviewForm from '../../components/add-review-form/add-review-form';
import {useAppSelector} from '../../hooks';

function AddReview(): JSX.Element {
  const films = useAppSelector((state) => state.allFilms);
  const id = Number(useParams().id);
  const film = films.find((currentFilm) => currentFilm.id === id);

  if (!film) {
    return <Navigate to={'/not-found'} />;
  }

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film.backGroundSrc} alt={film.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo/>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`films/${id}`} className="breadcrumbs__link">{film.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </li>
            <li className="user-block__item">
              <Link to={'login'} className="user-block__link">Sign out</Link>
            </li>
          </ul>
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={film.src} alt={film.name} width="218" height="327" />
        </div>
      </div>

      <AddReviewForm/>
    </section>
  );
}

export default AddReview;
