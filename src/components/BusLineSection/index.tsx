import Image from "next/image";
import { Select } from "../Select/Select";
import styles from "./styles.module.scss";
import BusStopDownload from "../../data/BusStopDownload";
import BusListDownload from "../../data/BusListDownload";
import DataContext from "../../context/DataContext";
import { useEffect, useLayoutEffect } from "react";

export function BusLineSection() {
  const { dataContext } = DataContext();
  const { selectedStop, setSelectedStop } = dataContext;
  const { pickerOptions } = BusStopDownload();
  const { busList } = BusListDownload();

  const busList1 = [
    { code: "056", lineName: "Santa Rosa", timeUntilArrival: "Agora" },
    { code: "503", lineName: "Cidade Verde", timeUntilArrival: "4 minutos" },
  ];

  useEffect(() => {}, []);

  const ListBusStop = () => {
    if (busList.length > 0) {
      return busList.map((l, i) => (
        <div className={styles.line} key={i}>
          <p>{l.lineName}</p>
          <span>{l.distance}</span>
        </div>
      ));
    } else {
      return <p>Nenhuma informação foi encontrada</p>;
    }
  };

  return (
    <section className={styles.container}>
      <form className={styles.formWrapper}>
        {pickerOptions ? (
          <Select
            value={selectedStop}
            options={pickerOptions}
            placeholder='Selecione uma parada'
            onChange={(value: { label: string; value: number; lat: number; lng: number }) => setSelectedStop(value)}
          />
        ) : null}

        <button className={styles.button}>Pesquisar</button>
      </form>

      <section className={styles.contentWrapper}>{busList.length > 0 ? <ListBusStop /> : null}</section>
    </section>
  );
}
