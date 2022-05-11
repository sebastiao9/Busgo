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

  const busList1 = [
    { code: '056', lineName: 'Santa Rosa', timeUntilArrival: 'Agora' },
    { code: '503', lineName: 'Cidade Verde', timeUntilArrival: '4 minutos' },
  ];

  const busList4 = [
    { code: '57', lineName: 'Vinhais São Francisco', timeUntilArrival: 'Agora' },
    { code: '057', lineName: 'Bequimão São Francisco', timeUntilArrival: '5 minutos' },
    { code: '056', lineName: 'Santa Rosa', timeUntilArrival: '10 Minutos' },
  ];

  return (
    <section className={styles.container}>
      <form className={styles.formWrapper}>
        {pickerOptions ? (
          <Select
            value={selectedStop}
            options={pickerOptions}
            placeholder='Selecione uma parada'
            onChange={(value: { label: string; value: number,lat: number, lng: number }) => setSelectedStop(value)}
          />
        ) : null}

        <button className={styles.button}>Pesquisar</button>
      </form>

      <section className={styles.contentWrapper}>
        {selectedStop &&
          selectedStop?.value === 1 &&
          busList1.map((l, i) => (
            <div className={styles.line} key={i}>
              <p>{l.code}</p>
              <p>{l.lineName}</p>
              <span>{l.timeUntilArrival}</span>
            </div>
          ))}

        {selectedStop &&
          selectedStop.value === 4 &&
          busList4.map((l, i) => (
            <div className={styles.line} key={i}>
              <p>{l.code}</p>
              <p>{l.lineName}</p>
              <span>{l.timeUntilArrival}</span>
            </div>
          ))}

        {(selectedStop && selectedStop.value === 2) ||
          (selectedStop && selectedStop.value === 3 && (
            <div className={styles.error}>
              <Image src='/sad.svg' alt='Um emoji triste' width={70} height={70} />
              <p>Poxa! Não tem ônibus previstos para essa parada. Que tal tentar mais tarde?</p>
            </div>
          ))}
      </section>
    </section>
  );
}
