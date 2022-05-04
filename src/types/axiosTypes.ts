import { AxiosRequestConfig } from 'axios';

export interface axiosRequestTypes extends AxiosRequestConfig {
  delay?: number;
}
