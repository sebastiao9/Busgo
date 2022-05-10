import { useEffect } from 'react';
import useAxios from '../hooks/useAxios';
import { axiosRequestTypes } from '../types/axiosTypes';
import DataContext from '../context/DataContext';
import { atom, useAtom } from 'jotai';

const temporatyList = atom([]);

const BusListDownload = () => {
  const { dataContext } = DataContext();
  const { busList, setBusList, selectedStop, pickerFilled } = dataContext;
  const { axiosRequest } = useAxios();
  const { fetchData } = axiosRequest;
  const [tempList, setTempList] = useAtom(temporatyList);
  const { dataResponse, loading, erro } = axiosRequest;

  const listBusRequest: axiosRequestTypes = {
    method: 'get',
    url: `busstop/nextBuses/${selectedStop?.value}`,
  };

  useEffect(() => {
    fetchData(listBusRequest);
    pickerFilled && setTempList(dataResponse);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedStop]);

  useEffect(() => {
    // TODO: ESTÁ RETORNANDO UM ARRAY DE OBJETOS
    // [
    //   {
    //     '1': 'null',
    //   },
    //   {
    //     '2': '0.09222295018478684',
    //   },
    // ];
    // TODO: FAZER UM REQUEST E COLOCAR O NOME DO ÔNIBUS E EM QUAL PARADA ELE SE ENCONTRA
    let listConverted = Object.entries(tempList).map(([_key, _value]) => ({ [_key]: String(_value) }));
    console.log(listConverted);
  }, [tempList]);

  return {
    busList,
  };
};

export default BusListDownload;
