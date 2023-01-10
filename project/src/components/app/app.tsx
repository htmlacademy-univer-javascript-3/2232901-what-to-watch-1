import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from '../../pages/main/main';
import AddReview from '../../pages/add-review/add-review';
import MoviePage from '../../pages/movie-page/movie-page';
import Player from '../../pages/player/player';
import MyList from '../../pages/my-list/my-list';
import SignIn from '../../pages/sign-in/sign-in';
import NotFound from '../../pages/not-found/not-found';
import PrivateRoute from '../private-route/private-route';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {checkAuth} from '../../store/api-actions';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  dispatch(checkAuth());
  const isAuthorised = useAppSelector((state) => state.isAuthorised);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<Main />} />
          <Route path='films/:id' element={<MoviePage />}>
            <Route path='review' element={<AddReview />} />
          </Route>
          <Route path='player/:id' element={<Player />} />
          <Route path='mylist' element={
            <PrivateRoute hasAccess={isAuthorised}>
              <MyList />
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
