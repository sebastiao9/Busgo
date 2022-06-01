import ButtonSearch from "./ButtonSearch";
import { Divider, Grid } from "@chakra-ui/react";
import PickerBusStop from "./PickerBusStop";
import ListBusStop from "./ListBusStop";

export function BusLineSection() {
  return (
    <Grid h='70vh' autoFlow='row' background='white' padding='1.5625rem' order={{ base: "2", lg: "1" }}>
      <Grid
        gridTemplateColumns='2'
        templateColumns='80% 20%'
        gridAutoFlow='column'
        h='6vh'
        alignItems='center'
        justifyContent='center'
        gap='2vw'
        w={{ base: "100vw", lg: "auto" }}>
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
