import {ANY_GENRE} from '../../types/any-genre';
import {MouseEvent, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {Film} from '../../types/film';
import {changeGenre, filterFilmsByGenre} from '../../store/action';


function GenresList(): JSX.Element {
  const [currentGenre, setCurrentGenre] = useState(useAppSelector((state) => state.currentGenre));

  const dispatch = useAppDispatch();

  const films = useAppSelector((state) => state.allFilms);
  const genres = getAllGenres(films);

  const handleChangeGenreClick = (evt: MouseEvent<HTMLAnchorElement>, genre: string) => {
    evt.preventDefault();
    dispatch(changeGenre({currentGenre: genre}));
    dispatch(filterFilmsByGenre());
    setCurrentGenre(genre);
  };

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => (
        <li
          className={`catalog__genres-item ${currentGenre === genre && 'catalog__genres-item--active'}`}
          key={genre}
        >
          <a
            href="/"
            className="catalog__genres-link"
            onClick={(evt) => handleChangeGenreClick(evt, genre)}
          >
            {genre}
          </a>
        </li>))}
    </ul>
  );
}

export default GenresList;


const getAllGenres = (films: Film[]) => (
  [...new Set([ANY_GENRE, ...films.map((film) => film.genre)])]
);
