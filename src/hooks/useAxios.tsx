import { useCallback, useEffect } from 'react';
import api from '../services/api';
import { AxiosResponse } from 'axios';
import AxiosContext from '../context/AxiosContext';
import { axiosRequestTypes } from '../types/axiosTypes';

let axiosResponse: any;

const useAxios = () => {
  const { axiosData } = AxiosContext();
  const { setDataResponse, setLoading } = axiosData;

  const getData = useCallback(async ({ url, method, params }: axiosRequestTypes) => {
    return new Promise(async (resolve, reject) => {
      setLoading(true);

      try {
        axiosResponse = api({
          method: method,
          url: url,
          data: params,
        }).then((response: AxiosResponse) => {
          setDataResponse(response.data);
        });

        resolve(axiosResponse);
      } catch (error) {
        setDataResponse(undefined as any);
        reject(error);
      }
    });
  }, []);
  return { getData };
};
export default useAxios;
