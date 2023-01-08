import {createAction} from '@reduxjs/toolkit';

const changeGenre = createAction<{ currentGenre: string }>('changeGenre');
const filterFilmsByGenre = createAction('filterFilmsByGenre');
const increaseFilmCardsCount = createAction('increaseFilmCardsCount');
const resetFilmCardsCount = createAction('resetFilmCardsCount');

export {
  changeGenre,
  filterFilmsByGenre,
  increaseFilmCardsCount,
  resetFilmCardsCount
};
