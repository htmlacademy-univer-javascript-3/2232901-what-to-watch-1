import {Link, Navigate, useParams} from 'react-router-dom';
import Logo from '../../components/logo/logo';
import AddReviewForm from '../../components/add-review-form/add-review-form';
import {useAppDispatch, useAppSelector} from '../../hooks';
import UserBlock from '../../components/user-block/user-block';
import {useEffect} from 'react';
import {fetchFilmById} from '../../store/api-actions';

function AddReview(): JSX.Element {
  const id = Number(useParams().id);
  const film = useAppSelector((state) => state.currentFilm);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFilmById(id));
  }, [id, dispatch]);

  if (!film) {
    return <Navigate to={'/notfound'}/>;
  }

  return (
    <section className='film-card film-card--full'>
      <div className='film-card__header'>
        <div className='film-card__bg'>
          <img src={film.backgroundImage} alt={film.name}/>
        </div>
        <h1 className='visually-hidden'>WTW</h1>
        <header className='page-header'>
          <Logo/>
          <nav className='breadcrumbs'>
            <ul className='breadcrumbs__list'>
              <li className='breadcrumbs__item'>
                <Link to={`/films/${id}`} className="breadcrumbs__link">{film.name}</Link>
              </li>
              <li className='breadcrumbs__item'>
                <Link className="breadcrumbs__link" to={`/films/${id}/review`}>
                  Add review
                </Link>
              </li>
            </ul>
          </nav>
          <UserBlock/>
        </header>
        <div className='film-card__poster film-card__poster--small'>
          <img src={film.posterImage} alt={film.name} width='218' height='327'/>
        </div>
      </div>
      <AddReviewForm/>
    </section>
  );
}

export default AddReview;
