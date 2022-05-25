import { useEffect } from "react";
import useAxios from "../hooks/useAxios";
import { axiosRequestTypes } from "../types/axiosTypes";
import DataContext from "../context/DataContext";
import { atom, useAtom } from "jotai";

const temporatyList = atom([]);

const BusListDownload = () => {
  const { dataContext } = DataContext();
  const { busList, setBusList, selectedStop, pickerFilled } = dataContext;
  const { axiosRequest } = useAxios();
  const { fetchData } = axiosRequest;
  const [tempList, setTempList] = useAtom(temporatyList);
  const { dataResponse, loading, erro } = axiosRequest;

  const listBusRequest: axiosRequestTypes = {
    method: "get",
    url: `busstop/nextBuses/${selectedStop?.value}`,
  };

  useEffect(() => {
    fetchData(listBusRequest);
    pickerFilled && setTempList(dataResponse);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedStop]);

  useEffect(() => {
    console.log(tempList);
  }, [tempList]);

  return {
    busList,
  };
};

export default BusListDownload;
