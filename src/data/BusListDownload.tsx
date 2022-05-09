import { useEffect, useLayoutEffect } from 'react';
import useAxios from '../hooks/useAxios';
import { axiosRequestTypes } from '../types/axiosTypes';
import DataContext from '../context/DataContext';

const BusListDownload = () => {
  const { dataContext } = DataContext();
  const { busList, setBusList, selectedStop, pickerFilled } = dataContext;
  const { axiosRequest } = useAxios();
  const { fetchData } = axiosRequest;
  const { dataResponse, loading, erro } = axiosRequest;

  const listBusRequest: axiosRequestTypes = {
    method: 'get',
    url: `busstop/nextBuses/${selectedStop?.value}`,
  };

  useEffect(() => {
    fetchData(listBusRequest);
    pickerFilled && setBusList(dataResponse);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedStop]);

  useEffect(() => {
    console.log(busList);
  }, [busList]);

  return {
    busList,
  };
};

export default BusListDownload;
