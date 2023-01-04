import {createAction} from '@reduxjs/toolkit';

const changeGenre = createAction<{ currentGenre: string }>('changeGenre');
const setFilmsByGenre = createAction('getFilmsByGenre');

export {
  changeGenre,
  setFilmsByGenre
};
