import SmallFilmCard from '../small-film-card/small-film-card';
import {useState} from 'react';
import {Film} from '../../types/film';

type FilmsListProps = {
  films: Film[]
}

function FilmsList({films}: FilmsListProps){
  const [activeCard, setActiveCard] = useState(-1);

  const changeActiveCard = (filmId: number) => {
    if (activeCard !== filmId) {
      setActiveCard(filmId);
    }
  };

  return (
    <div className="catalog__films-list">
      {films.map((film) =>
        (
          <SmallFilmCard
            film={film}
            key={film.name}
            isMouseOn={activeCard === film.id}
            onMouseOverHandler={() => changeActiveCard(film.id)}
            onMouseLeaveHandler={() => changeActiveCard(-1)}
          />
        )
      )}
    </div>
  );
}

export default FilmsList;
