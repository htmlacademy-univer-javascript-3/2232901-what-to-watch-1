import {Film} from '../types/film';
import SmallFilmCard from './small-film-card/small-film-card';
// import {useState} from 'react';

type filmListProps = {
  films: Film[]
}

function FilmsList({ films }: filmListProps){
  // const [activeFilmCard, setActiveFilmCard] = useState(null);

  return (
    <div className="catalog__films-list">
      {films.map((film) => <SmallFilmCard film={film} key={film.name}/>)}
    </div>
  );
}

export default FilmsList;
