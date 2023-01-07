import {createReducer} from '@reduxjs/toolkit';
import {ANY_GENRE} from '../types/any-genre';
import {
  changeGenre,
  increaseFilmCardsCount,
  resetFilmCardsCount,
  filterFilmsByGenre,
  setFilms,
  setPromoFilm, setFilmReviews
} from './action';
import {EMPTY_FILM, Film} from '../types/film';
import {cardsPerStepCount} from './consts';
import {Review} from '../types/review';

type InitialState = {
  allFilms: Film[],
  currentGenre: string,
  shownFilms: Film[],
  filmCardsCount: number,
  promoFilm: Film,
  currentFilmReviews: Review[]
};

const initialState : InitialState = {
  allFilms: [],
  currentGenre: ANY_GENRE,
  shownFilms: [],
  filmCardsCount: cardsPerStepCount,
  promoFilm: EMPTY_FILM,
  currentFilmReviews: []
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.currentGenre = action.payload.currentGenre;
    })
    .addCase(filterFilmsByGenre, (state, action) => {
      state.shownFilms = sortFilmsByGenre(state.allFilms, state.currentGenre);
      state.filmCardsCount = Math.min(state.shownFilms.length, cardsPerStepCount);
    })
    .addCase(increaseFilmCardsCount, (state, action) => {
      state.filmCardsCount = Math.min(state.shownFilms.length, state.filmCardsCount + cardsPerStepCount);
    })
    .addCase(resetFilmCardsCount, (state, action) => {
      state.filmCardsCount = Math.min(state.shownFilms.length, cardsPerStepCount);
    })
    .addCase(setFilms, (state, action) => {
      state.allFilms = action.payload.films;
      state.shownFilms = action.payload.films;
    })
    .addCase(setPromoFilm, (state, action) => {
      state.promoFilm = action.payload.promoFilm;
    })
    .addCase(setFilmReviews, (state, action) => {
      state.currentFilmReviews = action.payload.reviews;
    });
});

const sortFilmsByGenre = (films: Film[], genre: string) => {
  if(genre === ANY_GENRE) {
    return films;
  }

  return films.filter((film) => film.genre === genre);
};
