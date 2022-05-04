import { useEffect } from 'react';
import AxiosContext from '../context/AxiosContext';
import useAxios from '../hooks/useAxios';
import { axiosRequestTypes } from '../types/axiosTypes';
import DataContext from '../context/DataContext';

const BusStopDownload = () => {
  const { axiosData } = AxiosContext();
  const { dataContext } = DataContext();
  const { pickerOptions, setPickerOptions } = dataContext;
  const { dataResponse } = axiosData;

  const { getData } = useAxios();

  const dataPicker: axiosRequestTypes = {
    method: 'get',
    url: `busstop`,
  };

  useEffect(() => {
    getData(dataPicker);
  }, []);

  useEffect(() => {
    pickerOptions &&
      pickerOptions.length === 0 &&
      dataResponse.map((item) => {
        pickerOptions.some((value) => value.value === item.id)
          ? null
          : setPickerOptions((prev) => [
              ...prev,
              { label: item.name, value: item.id, lat: item.latitude, long: item.longitude },
            ]);
      });
  }, [dataResponse]);

  return {
    pickerOptions,
  };
};

export default BusStopDownload;
