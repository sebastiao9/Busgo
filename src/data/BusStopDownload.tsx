import { useEffect } from 'react';
import useAxios from '../hooks/useAxios';
import { axiosRequestTypes } from '../types/axiosTypes';
import DataContext from '../context/DataContext';

const BusStopDownload = () => {
  const { dataContext } = DataContext();
  const { pickerOptions, setPickerOptions } = dataContext;

  const dataPicker: axiosRequestTypes = {
    method: 'get',
    url: `busstop`,
  };

  const { axiosRequest } = useAxios(dataPicker);

  const { dataResponse, loading, erro } = axiosRequest;

  useEffect(() => {
    dataResponse.map((item) => {
      pickerOptions.some((value) => value.value === item.id)
        ? null
        : setPickerOptions((prev) => [
            ...prev,
            { label: item.name, value: item.id, lat: item.latitude, long: item.longitude },
          ]);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataResponse]);

  return {
    pickerOptions,
  };
};

export default BusStopDownload;
