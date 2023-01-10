import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state';
import {AxiosInstance} from 'axios';
import {Film} from '../types/film';
import {Review} from '../types/review';
import {UserData} from '../types/user-data';
import {AuthData} from '../types/auth-data';

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

export const login = createAsyncThunk<UserData, AuthData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>('login',
  async ({ email, password }, { extra: api }) => {
    const {data} = await api.post<UserData>('login', {
      email,
      password,
    });
    return data;
  },
);

export const checkAuth = createAsyncThunk<UserData, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>('checkAuth',
  async (_arg, {extra: api}) => {
    const { data } = await api.get('login');

    return data;
  },
);

export const logout = createAsyncThunk<void, undefined, {
  state: State,
  extra: AxiosInstance
}>('logout',
  async (_arg, { dispatch, extra: api }) => {
    await api.delete('logout');
  },
);

export const changeFilmViewStatus = createAsyncThunk<Film, {filmId: number, status: boolean}, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/changeFilmStatusToView',
  async ({filmId, status}, {extra: api}) => {
    const {data} = await api.post<Film>(`favorite/${filmId}/${status ? '1' : '0'}`);

    return data;
  },
);

