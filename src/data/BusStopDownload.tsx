import { useEffect, useLayoutEffect } from "react";
import useAxios from "../hooks/useAxios";
import { axiosRequestTypes } from "../types/axiosTypes";
import DataContext from "../context/DataContext";
import { atom, useAtom } from "jotai";
import BusListDownload from "./BusListDownload";

const BusStopDownload = () => {
  const { dataContext } = DataContext();
  const { pickerOptions, setPickerOptions, selectedStop, pickerFilled, setPickerFilled } = dataContext;
  const { axiosRequest } = useAxios();
  const { fetchData } = axiosRequest;

  const dataPicker: axiosRequestTypes = {
    method: "get",
    url: `busstop`,
  };

  const { dataResponse, loading, erro } = axiosRequest;

  useEffect(() => {
    fetchData(dataPicker);
  }, []);

  useEffect(() => {
    try {
      pickerFilled === false &&
        dataResponse.map((item) => {
          pickerOptions.some((value) => value.value === item.id)
            ? null
            : setPickerOptions((prev) => [
                ...prev,
                { label: item.name, value: item.id, lat: item.latitude, lng: item.longitude },
              ]);
        });
    } catch (error) {
      console.log(error);
    } finally {
      pickerOptions.length > 0 ? setPickerFilled(true) : null;
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataResponse]);

  return {
    pickerOptions,
  };
};

export default BusStopDownload;
