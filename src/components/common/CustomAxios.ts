import axios, { AxiosInstance } from 'axios';

axios.defaults.withCredentials = true;

export const customAxios: AxiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:5000/api',
  withCredentials: true,
});
