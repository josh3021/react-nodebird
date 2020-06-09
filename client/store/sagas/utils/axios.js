import axios from 'axios';

export const userAxios = axios.create({
  baseURL: 'http://localhost:3065/api/user',
});

export const postAxios = axios.create({
  baseURL: 'http://localhost:3065/api/post',
});
