import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Select } from '../Select/Select';
import styles from './styles.module.scss';

import BusStopDownload from '../../services/BusStopDownload';
import StopListDownload from '../../services/StopListDownload';
import DataContext from '../../context/DataContext';

export function BusLineSection() {
  const { dataContext } = DataContext();
  const { selectedStop, setSelectedStop } = dataContext;
  const { pickerOptions } = BusStopDownload();
  const { busList } = StopListDownload();

  return (
    <section className={styles.container}>
      <form className={styles.formWrapper}>
        {pickerOptions ? (
          <Select
            value={selectedStop}
            options={pickerOptions}
            placeholder='Selecione uma parada'
            onChange={(value: { label: string; value: string }) => setSelectedStop(value)}
          />
        ) : null}

        <button className={styles.button}>Pesquisar</button>
      </form>
      {/* 
      <section className={styles.contentWrapper}>
        {selectedStop &&
          selectedStop.value > 1 &&
          busList &&
          busList.map((l, i) => (
            <div className={styles.line} key={i}>
              <p>{l.code}</p>
              <p>{l.lineName}</p>
              <span>{l.timeUntilArrival}</span>
            </div>
          ))}

        {selectedStop && selectedStop.value === 1 && (
          <div className={styles.error}>
            <Image src='/sad.svg' alt='Um emoji triste' width={70} height={70} />
            <p>Poxa! Não tem ônibus previstos para essa parada. Que tal tentar mais tarde?</p>
          </div>
        )}
      </section> */}
    </section>
  );
}
