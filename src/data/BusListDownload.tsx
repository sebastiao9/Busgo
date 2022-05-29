import { useEffect } from "react";
import useAxios from "../hooks/useAxios";
import { axiosRequestTypes } from "../types/axiosTypes";
import DataContext from "../context/DataContext";
import { atom, useAtom } from "jotai";

const temporatyList = atom([]);

const BusListDownload = () => {
  const { dataContext } = DataContext();
  const { busList, setBusList, selectedStop, pickerFilled, pickerOptions } = dataContext;
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
    pickerFilled && pickerOptions.length > 0 && setTempList(dataResponse);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedStop]);

  useEffect(() => {
    setBusList([]);
    for (const [key, value] of Object.entries(tempList)) {
      pickerFilled === true &&
        dataResponse[0]?.name !== pickerOptions[0]?.label &&
        value !== null &&
        setBusList((prev) => [...prev, { lineName: key, distance: value }]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tempList]);

  return {
    busList,
  };
};

export default BusListDownload;
