import {createReducer} from '@reduxjs/toolkit';
import {ANY_GENRE} from '../types/any-genre';
import {
  changeGenre,
  increaseFilmCardsCount,
  resetFilmCardsCount,
  filterFilmsByGenre
} from './action';
import {EMPTY_FILM, Film} from '../types/film';
import {cardsPerStepCount} from './consts';
import {Review} from '../types/review';
import {fetchFilmById, fetchFilms, fetchPromoFilm, fetchReviewsById, fetchSimilarFilmsById} from './api-actions';

type InitialState = {
  allFilms: Film[],
  currentGenre: string,
  filteredFilms: Film[],
  filmCardsCount: number,
  promoFilm: Film,
  currentFilm: Film,
  currentFilmReviews: Review[],
  currentFilmSimilarFilms: Film[],
  isLoading: boolean
};

const initialState : InitialState = {
  allFilms: [],
  currentGenre: ANY_GENRE,
  filteredFilms: [],
  filmCardsCount: cardsPerStepCount,
  promoFilm: EMPTY_FILM,
  currentFilm: EMPTY_FILM,
  currentFilmReviews: [],
  currentFilmSimilarFilms: [],
  isLoading: true
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.currentGenre = action.payload.currentGenre;
    })
    .addCase(filterFilmsByGenre, (state, action) => {
      state.filteredFilms = getFilmsByGenre(state.allFilms, state.currentGenre);
      state.filmCardsCount = Math.min(state.filteredFilms.length, cardsPerStepCount);
    })
    .addCase(increaseFilmCardsCount, (state, action) => {
      state.filmCardsCount = Math.min(state.filteredFilms.length, state.filmCardsCount + cardsPerStepCount);
    })
    .addCase(resetFilmCardsCount, (state, action) => {
      state.filmCardsCount = Math.min(state.filteredFilms.length, cardsPerStepCount);
    })
    .addCase(fetchFilms.pending, (state) =>{
      state.isLoading = true;
    })
    .addCase(fetchFilms.fulfilled, (state, action) =>{
      const films = action.payload;

      state.allFilms = films;
      state.filteredFilms = films;
      state.filmCardsCount = Math.min(state.filteredFilms.length, cardsPerStepCount);
      state.isLoading = false;
    })
    .addCase(fetchPromoFilm.pending, (state) =>{
      state.isLoading = true;
    })
    .addCase(fetchPromoFilm.fulfilled, (state, action) =>{
      state.promoFilm = action.payload;
      state.isLoading = false;
    })
    .addCase(fetchReviewsById.pending, (state) =>{
      state.isLoading = true;
    })
    .addCase(fetchReviewsById.fulfilled, (state, action) =>{
      state.currentFilmReviews = action.payload;
      state.isLoading = false;
    })
    .addCase(fetchFilmById.pending, (state) =>{
      state.isLoading = true;
    })
    .addCase(fetchFilmById.fulfilled, (state, action) =>{
      state.currentFilm = action.payload;
      state.isLoading = false;
    })
    .addCase(fetchSimilarFilmsById.pending, (state) =>{
      state.isLoading = true;
    })
    .addCase(fetchSimilarFilmsById.fulfilled, (state, action) =>{
      state.currentFilmSimilarFilms = action.payload;
      state.isLoading = false;
    });
});

const getFilmsByGenre = (films: Film[], genre: string) => {
  if(genre === ANY_GENRE) {
    return films;
  }

  return films.filter((film) => film.genre === genre);
};
