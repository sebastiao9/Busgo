import { BusLineSection } from "../components/BusLineSection";
import { Header } from "../components/Header";
import { MapSection } from "../components/MapSection";
import { Grid } from "@chakra-ui/react";

export default function Home() {
  return (
    <div>
      <Header />
      <Grid gap='5vw' autoFlow='column' justifyContent='center'>
        <BusLineSection />
        <MapSection />
      </Grid>
    </div>
  );
}
