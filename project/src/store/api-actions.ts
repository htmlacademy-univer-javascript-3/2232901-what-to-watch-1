import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state';
import {AxiosInstance} from 'axios';
import {Film} from '../types/film';
import {Review} from '../types/review';

export const fetchFilms = createAsyncThunk<Film[], undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'fetchFilms',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<Film[]>('films');
    return data;
  },
);

export const fetchFilmById = createAsyncThunk<Film, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'fetchFilmById',
  async (filmId: number, {extra: api}) => {
    const {data} = await api.get<Film>(`films/${filmId}`);

    return data;
  },
);

export const fetchPromoFilm = createAsyncThunk<Film, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'fetchPromoFilm',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<Film>('promo');

    return data;
  },
);

export const fetchReviewsById = createAsyncThunk<Review[], number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'fetchReviewsById',
  async (filmId: number, { extra: api}) => {
    const {data} = await api.get<Review[]>(`comments/${filmId}`);

    return data;
  },
);

export const fetchSimilarFilmsById = createAsyncThunk<Film[], number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'fetchSimilarFilmsById',
  async (filmId: number, { extra: api}) => {
    const {data} = await api.get<Film[]>(`films/${filmId}/similar`);

    return data;
  },
);
