import { useEffect } from 'react';
import useAxios from '../hooks/useAxios';
import { axiosRequestTypes } from '../types/axiosTypes';
import DataContext from '../context/DataContext';

const BusListDownload = () => {
  const { dataContext } = DataContext();
  const { busList, setBusList, selectedStop } = dataContext;

  const listBusRequest: axiosRequestTypes = {
    method: 'get',
    url: `busstop`,
  };

  const { axiosRequest } = useAxios(listBusRequest);
  const { dataResponse, loading, erro } = axiosRequest;

  useEffect(() => {
    dataResponse.map((item) => {
      console.log(item);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedStop]);

  return {};
};

export default BusListDownload;
