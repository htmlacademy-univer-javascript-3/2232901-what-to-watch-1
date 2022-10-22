import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {promoFilm} from './mocks/promo-film';
import {mainFilms} from './mocks/main-films';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App promoFilm={promoFilm} mainFilms={ mainFilms }/>
  </React.StrictMode>,
);
