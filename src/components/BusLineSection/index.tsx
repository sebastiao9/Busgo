import ButtonSearch from "./ButtonSearch";
import { Divider, Grid } from "@chakra-ui/react";
import PickerBusStop from "./PickerBusStop";
import ListBusStop from "./ListBusStop";

export function BusLineSection() {
  return (
    <Grid h='70vh' autoFlow='row'>
      <Grid
        gridTemplateColumns='2'
        templateColumns='80% 20%'
        gridAutoFlow='column'
        h='12vh'
        alignItems='center'
        justifyContent='center'
        gap='2vw'>
        <PickerBusStop />
        <ButtonSearch />
      </Grid>
      <Divider margin='1vh 0' />
      <Grid justifyItems='center' h='58vh'>
        <ListBusStop />
      </Grid>
    </Grid>
  );
}
