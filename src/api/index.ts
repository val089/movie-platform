import axios from 'axios';

const API_KEY = '1b9992aadcbd73ed12e4d874a509787d';

export const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: API_KEY,
  },
});

export const endpoints = {
  createToken: `/authentication/token/new`,
  login: '/authentication/token/validate_with_login',
  createSession: '/authentication/session/new',
  media: 'Media/GetMediaList/',
  mediaPlayInfo: 'Media/GetMediaPlayInfo/',
};
