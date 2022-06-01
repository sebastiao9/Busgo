import { Loader } from "@googlemaps/js-api-loader";
import { useEffect } from "react";
import { atom, useAtom } from "jotai";
import DataContext from "../../context/DataContext";
import { Grid } from "@chakra-ui/react";
const geoPosition = atom({ lat: 0, lng: 0 });

const loader = new Loader({
  apiKey: process.env.API_KEY,
  libraries: ["places"],
});

export function MapSection() {
  const [position, setPosition] = useAtom(geoPosition);
  const { dataContext } = DataContext();
  const { selectedStop } = dataContext;

  useEffect(() => {
    Object.keys(selectedStop).length > 0
      ? setPosition({ lat: selectedStop.lat, lng: selectedStop.lng })
      : setPosition({ lat: -2.526755249734547, lng: -44.247313993234364 });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedStop]);

  useEffect(() => {
    setPosition({ lat: -2.526755249734547, lng: -44.247313993234364 });
  }, [setPosition]);

  useEffect(() => {
    loader
      .load()
      // eslint-disable-next-line react-hooks/exhaustive-deps
      .then(
        (google: {
          maps: {
            Map: new (
              arg0: HTMLElement,
              arg1: { center: { lat: number; lng: number }; zoom: number }
            ) => google.maps.Map;
          };
        }) =>
          // eslint-disable-next-line react-hooks/exhaustive-deps
          (map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
            center: {
              ...position,
            },
            disableDefaultUI: true,
            zoom: position.lat === -2.526755249734547 && position.lng === -44.247313993234364 ? 4 : 17,
          }))
      )
      .then(
        (map: google.maps.Map) =>
          new google.maps.Marker({
            position: { ...position },
            map,

            animation: google.maps.Animation.DROP,
            title: "Hello World!",
          })
      )
      .catch((e) => {
        console.log(e);
      });
  }, [position]);

  return (
    <Grid w={{ base: "106vw", lg: "45vw" }} h={{ base: "30vh", lg: "70vh" }} order={{ base: "1", lg: "2" }} id='map' />
  );
}
