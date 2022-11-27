import {PromoFilm} from '../../types/promo-film';
import {Film} from '../../types/film';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from '../../pages/main/main';
import AddReview from '../../pages/add-review/add-review';
import MoviePage from '../../pages/movie-page/movie-page';
import Player from '../../pages/player/player';
import MyList from '../../pages/my-list/my-list';
import SignIn from '../../pages/sign-in/sign-in';
import NotFound from '../../pages/not-found/not-found';
import PrivateRoute from '../private-route/private-route';

type AppProps = {
  promoFilm: PromoFilm,
  films: Film[]
}

function App({ promoFilm, films }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<Main promoFilm={ promoFilm } films={ films }/>} />
          <Route path='films/:id' element={<MoviePage films={ films.slice(0, 4) }/>}>
            <Route path='review' element={<AddReview films={ films }/>} />
          </Route>
          <Route path='player/:id' element={<Player films={ films }/>} />
          <Route path='mylist' element={
            <PrivateRoute hasAccess={false}>
              <MyList films={ films }/>
            </PrivateRoute>
          }
          />
          <Route path='login' element={<SignIn />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
