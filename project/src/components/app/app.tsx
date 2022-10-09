import Main from '../../pages/main/main';
import {PromoFilm} from '../../types/promo-film';
import {FilmCardInfo} from '../../types/film-card-info';

type AppProps = {
  promoFilm: PromoFilm,
  mainFilms: FilmCardInfo[]
}

function App({ promoFilm, mainFilms }: AppProps): JSX.Element {
  return <Main promoFilm={ promoFilm } films={ mainFilms }/>;
}

export default App;
