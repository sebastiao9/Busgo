import { useEffect } from "react";
import useAxios from "../hooks/useAxios";
import { axiosRequestTypes } from "../types/axiosTypes";
import DataContext from "../context/DataContext";
import { atom, useAtom } from "jotai";

const temporatyList = atom([]);

const BusListDownload = () => {
  const { dataContext } = DataContext();
  const { busList, setBusList, selectedStop, pickerFilled, pickerOptions, listFilled, setListFilled } = dataContext;
  const { axiosRequest } = useAxios();
  const { fetchData } = axiosRequest;
  const [tempList, setTempList] = useAtom(temporatyList);
  const { dataResponse } = axiosRequest;

  const listBusRequest: axiosRequestTypes = {
    method: "get",
    url: `busstop/nextBuses/${selectedStop?.value}`,
  };

  const listDownload = async () => {
    try {
      fetchData(listBusRequest);
      setListFilled(true);
    } catch (error) {
      console.log(error);
    } finally {
      setBusList(dataResponse);
    }
  };

  useEffect(() => {
    listFilled && setTempList(dataResponse);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataResponse]);

  useEffect(() => {
    console.log(tempList);
  }, [tempList]);

  useEffect(() => {
    let notNullList: { [k: string]: any };
    let arrayBusList: { [x: string]: any }[];

    notNullList = Object.fromEntries(Object.entries(tempList).filter(([_, v]) => v != null));
    arrayBusList = Object.entries(notNullList).map(([k, v]) => ({
      lineName: k,
      distance: ((Number(v).toFixed(2) * 60) / 5).toFixed(0),
    }));
    setBusList(arrayBusList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tempList]);

  useEffect(() => {
    Object.values(selectedStop).length > 0 && listDownload();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedStop]);

  return {
    busList,
  };
};

export default BusListDownload;
