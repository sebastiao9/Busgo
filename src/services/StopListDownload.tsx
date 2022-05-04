import { useEffect } from 'react';
import AxiosContext from '../context/AxiosContext';
import useAxios from '../hooks/useAxios';
import { axiosRequestTypes } from '../types/axiosTypes';
import DataContext from '../context/DataContext';

const StopListDownload = () => {
  const { axiosData } = AxiosContext();
  const { dataResponse } = axiosData;
  const { dataContext } = DataContext();
  const { busList, setBusList, selectedStop } = dataContext;

  const { getData } = useAxios();

  const stopList: axiosRequestTypes = {
    method: 'get',
    url: selectedStop ? `busstop/nextBuses/${selectedStop.value}` : null,
  };

  const callBus = () => {
    getData(stopList);
  };

  useEffect(() => console.log(dataResponse), [dataResponse]);

  useEffect(() => {
    const keys = Object.keys(selectedStop);
    if (keys.length > 0) {
      callBus();
      const values = Object.keys(dataResponse);
      setBusList(values);
    }
  }, [selectedStop]);

  useEffect(() => {
    busList.length > 0 &&
      busList.map((item: any) => {
        let busStopList: axiosRequestTypes = {
          method: 'get',
          url: `bus/${item}`,
        };
        getData(busStopList);
      });
  }, [busList, getData]);

  return {
    busList,
  };
};

export default StopListDownload;
