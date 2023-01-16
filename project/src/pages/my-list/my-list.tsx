import FilmsList from '../../components/films-list/films-list';
import Logo from '../../components/logo/logo';
import Footer from '../../components/footer/footer';
import {useAppSelector} from '../../hooks';
import UserBlock from '../../components/user-block/user-block';


function MyList(): JSX.Element {
  const films = useAppSelector((state) => state.favouriteFilms);
  const favouriteCount = useAppSelector((state) => state.favouriteFilmsCount);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo/>

        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">{favouriteCount}</span></h1>
        <UserBlock/>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FilmsList films={films}/>
      </section>

      <Footer/>
    </div>
  );
}

export default MyList;
