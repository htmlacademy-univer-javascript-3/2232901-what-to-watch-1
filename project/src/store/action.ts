import {createAction} from '@reduxjs/toolkit';

const changeGenre = createAction<{ currentGenre: string }>('changeGenre');
const setFilmsByGenre = createAction('setFilmsByGenre');
const increaseFilmCardsCount = createAction('increaseFilmCardsCount');
const resetFilmCardsCount = createAction('resetFilmCardsCount');

export {
  changeGenre,
  setFilmsByGenre,
  increaseFilmCardsCount,
  resetFilmCardsCount
};
