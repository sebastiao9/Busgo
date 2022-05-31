import { BusLineSection } from "../components/BusLineSection";
import { Header } from "../components/Header";
import { MapSection } from "../components/MapSection";
import { Grid } from "@chakra-ui/react";
import { Global } from "@emotion/react";
import { GlobalStyles } from "../styles/GlobalStyles";

export default function Home() {
  return (
    <>
      <Global styles={GlobalStyles} />
      <Header />
      <Grid gap='8vw' autoFlow='column' justifyContent='center'>
        <BusLineSection />
        <MapSection />
      </Grid>
    </>
  );
}
