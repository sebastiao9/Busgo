import ButtonSearch from "./ButtonSearch";
import { Divider, Grid } from "@chakra-ui/react";
import PickerBusStop from "./PickerBusStop";
import ListBusStop from "./ListBusStop";

export function BusLineSection() {
  return (
    <Grid w='40vw' h='70vh' autoFlow='row'>
      <Grid gridTemplateColumns='2' gridAutoFlow='column' gap='2vh' h='10vh' alignItems='center'>
        <PickerBusStop />

        <ButtonSearch />
      </Grid>
      <Divider margin='2vh 0' />
      <Grid justifyItems='center' h='62vh'>
        <ListBusStop />
      </Grid>
    </Grid>
  );
}
