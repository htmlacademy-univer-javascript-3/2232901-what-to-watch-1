import {createReducer} from '@reduxjs/toolkit';
import {MockFilms} from '../mocks/mockFilms';
import {ANY_GENRE} from '../types/any-genre';
import {changeGenre, setFilmsByGenre} from './action';
import {Film} from '../types/film';

const initialState = {
  allFilms: MockFilms,
  currentGenre: ANY_GENRE,
  shownFilms: MockFilms,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.currentGenre = action.payload.currentGenre;
    })
    .addCase(setFilmsByGenre, (state) => {
      state.shownFilms = sortFilmsByGenre(state.allFilms, state.currentGenre);
    });
});

const sortFilmsByGenre = (films: Film[], genre: string) => {
  if(genre === ANY_GENRE) {
    return films;
  }

  return films.filter((film) => film.genre === genre);
};
