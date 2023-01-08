import axios from 'axios';

const BACKEND_URL = 'https://10.react.pages.academy/wtw';
const REQUEST_TIMEOUT = 5000;

export function createAPI(){
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  return api;
}
