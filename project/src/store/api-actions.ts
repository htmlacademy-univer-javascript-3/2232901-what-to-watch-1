import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state';
import {AxiosInstance} from 'axios';
import {Film} from '../types/film';
import {setFilmReviews, setFilms, setPromoFilm} from './action';
import {Review} from '../types/review';

export const fetchFilms = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'fetchFilms',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Film[]>('/films');
    dispatch(setFilms({films: data}));
  },
);

export const fetchPromoFilm = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'fetchPromoFilm',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Film>('/promo');
    dispatch(setPromoFilm({promoFilm: data}));
  },
);

export const fetchFilmReviews = createAsyncThunk<void, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'fetchPromoFilm',
  async (filmId, {dispatch, extra: api}) => {
    const {data} = await api.get<Review[]>(`/comments/${filmId}`);
    dispatch(setFilmReviews({reviews: data}));
  },
);
