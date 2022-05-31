import { Grid, Select, Spinner } from "@chakra-ui/react";
import React from "react";
import { JSXElementConstructor, Key, ReactElement, ReactFragment, ReactPortal, useEffect } from "react";
import BusStopDownload from "../../../data/BusStopDownload";
import DataContext from "../../../context/DataContext";

const PickerBusStop = () => {
  const { dataContext } = DataContext();
  const { setSelectedValue, selectedValue, selectedStop, setSelectedStop } = dataContext;
  const { pickerOptions } = BusStopDownload();

  let result:
    | { label: string; value: number; lat: number; lng: number }
    | ((prev: { label: string; value: number; lat: number; lng: number }) => {
        label: string;
        value: number;
        lat: number;
        lng: number;
      });

  useEffect(() => {
    try {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      result = pickerOptions.find((item: { value: number }) => item.value === Number(selectedValue));
    } catch (error) {
      console.log(error);
    } finally {
      result && setSelectedStop(result);
    }
  }, [selectedValue]);

  return (
    <>
      {Array.isArray(pickerOptions) && pickerOptions.length > 0 ? (
        <Select
          placeholder='Selecione uma parada...'
          size='lx'
          h='6vh'
          minW='25vw'
          onChange={(e: { target: { value: number | ((prev: number) => number) } }) => {
            setSelectedValue(e.target.value);
          }}>
          {pickerOptions.map(
            (
              option: {
                value: string | number | readonly string[];
                label:
                  | string
                  | number
                  | boolean
                  | ReactElement<any, string | JSXElementConstructor<any>>
                  | ReactFragment
                  | ReactPortal;
              },
              i: Key
            ) => (
              <option key={i} value={option.value}>
                {option.label}
              </option>
            )
          )}
        </Select>
      ) : (
        <Grid h='6vh' justifyItems='center' alignItems='center' w='30vw'>
          <Spinner size='xl' color='#293462' speed='0.65s' />
        </Grid>
      )}
    </>
  );
};

export default PickerBusStop;
