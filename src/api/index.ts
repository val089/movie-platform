import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://thebetter.bsgroup.eu/',
});

export const endpoints = {
  login: 'Authorization/SignIn/',
  media: 'Media/GetMediaList/',
  mediaPlayInfo: 'Media/GetMediaPlayInfo/',
};
