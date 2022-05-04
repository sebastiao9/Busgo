import axios, { AxiosInstance } from 'axios';

const api: AxiosInstance = axios.create({
  baseURL: 'https://bus-iot.herokuapp.com/',
});

export default api;
