import {createAction} from '@reduxjs/toolkit';
import {Film} from '../types/film';
import {Review} from '../types/review';

const changeGenre = createAction<{ currentGenre: string }>('changeGenre');
const filterFilmsByGenre = createAction('filterFilmsByGenre');
const setFilms = createAction<{ films: Film[] }>('setFilms');
const setPromoFilm = createAction<{ promoFilm: Film }>('setPromoFilm');
const increaseFilmCardsCount = createAction('increaseFilmCardsCount');
const resetFilmCardsCount = createAction('resetFilmCardsCount');
const setFilmReviews = createAction<{ reviews: Review[] }>('setFilmReviews');

export {
  changeGenre,
  filterFilmsByGenre,
  increaseFilmCardsCount,
  resetFilmCardsCount,
  setFilms,
  setPromoFilm,
  setFilmReviews
};
