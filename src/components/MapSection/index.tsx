import Image from "next/image";
import styles from "./styles.module.scss";
import { Loader } from "@googlemaps/js-api-loader";
import { faHand } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { atom, useAtom } from "jotai";
import DataContext from "../../context/DataContext";

const geoPosition = atom({
  lat: -2.526755249734547,
  lng: -44.247313993234364,
});

const loader = new Loader({
  apiKey: process.env.APIKEY,
  libraries: ["places"],
});

export function MapSection() {
  const [position, setPosition] = useAtom(geoPosition);
  const { dataContext } = DataContext();
  const { selectedStop } = dataContext;

  useEffect(() => {
    selectedStop && setPosition({ lat: selectedStop?.lat, lng: selectedStop?.lng });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedStop]);

  let map: google.maps.Map;

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
            zoom: position.lat === -2.526755249734547 && position.lng === -44.247313993234364 ? 4 : 17,
          }))
      )
      .then(
        (map: any) =>
          new google.maps.Marker({
            position: { ...position },
            map,

            animation: google.maps.Animation.DROP,
            title: "Teste",
          })
      )
      .catch((e) => {
        console.log(e);
      });
  }, [position]);

  return <div id='map' className={styles.container}></div>;
}
