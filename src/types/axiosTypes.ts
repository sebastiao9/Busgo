import { AxiosRequestConfig } from 'axios';

export interface axiosRequestTypes extends AxiosRequestConfig {
  delay?: number;
  body?: any;
  headers?: any;
}
