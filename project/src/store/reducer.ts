import {createReducer} from '@reduxjs/toolkit';
import {ANY_GENRE} from '../types/any-genre';
import {
  changeGenre,
  increaseFilmCardsCount,
  resetFilmCardsCount,
  filterFilmsByGenre, setError
} from './action';
import {EMPTY_FILM, Film} from '../types/film';
import {CARDS_PER_STEP_COUNT} from './consts';
import {Review} from '../types/review';
import {
  changeFilmViewStatus,
  checkAuth,
  fetchFilmById,
  fetchFilms,
  fetchPromoFilm,
  fetchReviewsById,
  fetchSimilarFilmsById,
  login,
  logout
} from './api-actions';
import {deleteToken, saveToken} from '../services/token';

type InitialState = {
  allFilms: Film[],
  currentGenre: string,
  filteredFilms: Film[],
  filmCardsCount: number,
  promoFilm: Film,
  currentFilm: Film,
  currentFilmReviews: Review[],
  currentFilmSimilarFilms: Film[],
  favouriteFilms: Film[],
  favouriteFilmsCount: number
  isLoading: boolean,
  isAuthorised: boolean,
  avatarUrl: string,
  error: string | null
};

const initialState : InitialState = {
  allFilms: [],
  currentGenre: ANY_GENRE,
  filteredFilms: [],
  filmCardsCount: CARDS_PER_STEP_COUNT,
  promoFilm: EMPTY_FILM,
  currentFilm: EMPTY_FILM,
  currentFilmReviews: [],
  currentFilmSimilarFilms: [],
  favouriteFilms: [],
  favouriteFilmsCount: 0,
  isLoading: true,
  isAuthorised: false,
  avatarUrl: '',
  error: null
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.currentGenre = action.payload.currentGenre;
    })
    .addCase(filterFilmsByGenre, (state, action) => {
      state.filteredFilms = getFilmsByGenre(state.allFilms, state.currentGenre);
      state.filmCardsCount = Math.min(state.filteredFilms.length, CARDS_PER_STEP_COUNT);
    })
    .addCase(increaseFilmCardsCount, (state, action) => {
      state.filmCardsCount = Math.min(state.filteredFilms.length, state.filmCardsCount + CARDS_PER_STEP_COUNT);
    })
    .addCase(resetFilmCardsCount, (state, action) => {
      state.filmCardsCount = Math.min(state.filteredFilms.length, CARDS_PER_STEP_COUNT);
    })
    .addCase(fetchFilms.pending, (state) =>{
      state.isLoading = true;
    })
    .addCase(fetchFilms.fulfilled, (state, action) =>{
      const films = action.payload;

      state.allFilms = films;
      state.filteredFilms = films;
      state.filmCardsCount = Math.min(state.filteredFilms.length, CARDS_PER_STEP_COUNT);
      state.isLoading = false;
    })
    .addCase(fetchPromoFilm.pending, (state) =>{
      state.isLoading = true;
    })
    .addCase(fetchPromoFilm.fulfilled, (state, action) =>{
      state.promoFilm = action.payload;
      state.currentFilm = action.payload;
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
    .addCase(fetchFilmById.rejected, (state, action) =>{
      state.currentFilm = EMPTY_FILM;
      state.isLoading = false;
    })
    .addCase(fetchSimilarFilmsById.pending, (state) =>{
      state.isLoading = true;
    })
    .addCase(fetchSimilarFilmsById.fulfilled, (state, action) =>{
      state.currentFilmSimilarFilms = action.payload;
      state.isLoading = false;
    })
    .addCase(login.fulfilled, (state, action) =>{
      saveToken(action.payload.token);
      state.avatarUrl = action.payload.avatarUrl;
      state.isAuthorised = true;
    })
    .addCase(logout.fulfilled, (state) => {
      deleteToken();
      state.avatarUrl = '';
      state.isAuthorised = false;
    })
    .addCase(checkAuth.fulfilled, (state, action) => {
      state.avatarUrl = action.payload.avatarUrl;
      state.isAuthorised = true;
    })
    .addCase(checkAuth.rejected, (state) => {
      state.isAuthorised = false;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload.error;
    })
    .addCase(changeFilmViewStatus.fulfilled, (state, action) => {
      state.currentFilm = action.payload;
      if (action.payload.isFavorite) {
        state.favouriteFilmsCount += 1;
      } else {
        state.favouriteFilmsCount -= 1;
      }
    });
});

const getFilmsByGenre = (films: Film[], genre: string) => {
  if(genre === ANY_GENRE) {
    return films;
  }

  return films.filter((film) => film.genre === genre);
};
