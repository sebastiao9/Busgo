import { Grid, Select, Spinner } from "@chakra-ui/react";
import React from "react";
import { JSXElementConstructor, Key, ReactElement, ReactFragment, ReactPortal, useEffect } from "react";
import BusStopDownload from "../../../data/BusStopDownload";
import DataContext from "../../../context/DataContext";

const PickerBusStop = () => {
  const { dataContext } = DataContext();
  const { setSelectedValue } = dataContext;
  const { pickerOptions } = BusStopDownload();

  return (
    <>
      {Array.isArray(pickerOptions) && pickerOptions.length > 0 ? (
        <Select
          placeholder='Selecione uma parada...'
          size='lx'
          h='6vh'
          w='30vw'
          onChange={(e: any) => {
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
