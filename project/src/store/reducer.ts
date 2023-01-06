import {createReducer} from '@reduxjs/toolkit';
import {MockFilms} from '../mocks/mockFilms';
import {ANY_GENRE} from '../types/any-genre';
import {changeGenre, increaseFilmCardsCount, resetFilmCardsCount, setFilmsByGenre} from './action';
import {Film} from '../types/film';
import {cardsPerStepCount} from './consts';

const initialState = {
  allFilms: MockFilms,
  currentGenre: ANY_GENRE,
  shownFilms: MockFilms,
  filmCardsCount: cardsPerStepCount
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.currentGenre = action.payload.currentGenre;
    })
    .addCase(setFilmsByGenre, (state, action) => {
      state.shownFilms = sortFilmsByGenre(state.allFilms, state.currentGenre);
      state.filmCardsCount = Math.min(state.shownFilms.length, cardsPerStepCount);
    })
    .addCase(increaseFilmCardsCount, (state, action) => {
      state.filmCardsCount = Math.min(state.shownFilms.length, state.filmCardsCount + cardsPerStepCount);
    })
    .addCase(resetFilmCardsCount, (state, action) => {
      state.filmCardsCount = Math.min(state.shownFilms.length, cardsPerStepCount);
    });
});

const sortFilmsByGenre = (films: Film[], genre: string) => {
  if(genre === ANY_GENRE) {
    return films;
  }

  return films.filter((film) => film.genre === genre);
};
