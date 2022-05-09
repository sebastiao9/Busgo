import Image from 'next/image';
import { Select } from '../Select/Select';
import styles from './styles.module.scss';
import BusStopDownload from '../../data/BusStopDownload';
import BusListDownload from '../../data/BusListDownload';
import DataContext from '../../context/DataContext';

export function BusLineSection() {
  const { dataContext } = DataContext();
  const { selectedStop, setSelectedStop } = dataContext;
  const { pickerOptions } = BusStopDownload();
  const { busList } = BusListDownload();

  const busList2 = [
    { code: '204', lineName: 'Alemanha', timeUntilArrival: 'Agora' },
    { code: '057', lineName: 'Vinhais Ipase', timeUntilArrival: 'Agora' },
  ];

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

      <section className={styles.contentWrapper}>
        {busList2 &&
          busList2.map((l, i) => (
            <div className={styles.line} key={i}>
              <p>{l.code}</p>
              <p>{l.lineName}</p>
              <span>{l.timeUntilArrival}</span>
            </div>
          ))}

        {/* {selectedStop && !selectedStop.value && (
          <div className={styles.error}>
            <Image src='/sad.svg' alt='Um emoji triste' width={70} height={70} />
            <p>Poxa! Não tem ônibus previstos para essa parada. Que tal tentar mais tarde?</p>
          </div>
        )} */}
      </section>
    </section>
  );
}
