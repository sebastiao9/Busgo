/* eslint-disable jsx-a11y/alt-text */
import { BusLineSection } from "../components/BusLineSection";
import { Header } from "../components/Header";
import { MapSection } from "../components/MapSection";
import { Grid } from "@chakra-ui/react";
import { Global } from "@emotion/react";
import { GlobalStyles } from "../styles/GlobalStyles";
import BackgroundElements from "../components/BackgroundElements/index";

export default function Home() {
  return (
    <>
      <Global styles={GlobalStyles} />
      <BackgroundElements />
      <Header />
      <Grid gap='4vw' autoFlow={{ base: "row", lg: "column" }} justifyContent='center'>
        <BusLineSection />
        <MapSection />
      </Grid>
    </>
  );
}
