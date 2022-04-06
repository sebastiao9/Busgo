import Image from "next/image";
import { useState } from "react";
import { Select } from "../Select/Select";
import styles from "./styles.module.scss";

const lines = [
  {
    code: "A580",
    lineName: "Habitacional Turu - Cohama",
    timeUntilArrival: "Agora",
  },
  {
    code: "A580",
    lineName: "Habitacional Turu - Cohama",
    timeUntilArrival: "5 Minutos",
  },
  {
    code: "A580",
    lineName: "Habitacional Turu - Cohama",
    timeUntilArrival: "5 Minutos",
  },
  {
    code: "A580",
    lineName: "Habitacional Turu - Cohama",
    timeUntilArrival: "5 Minutos",
  },
];

const options = [
  { value: "1", label: "1 - Parada Shopping Tropical" },
  { value: "2", label: "2 - Parada Multiempresarial" },
];

export function BusLineSection() {
  const [selectedValue, setSelectedValue] = useState("1");

  return (
    <section className={styles.container}>
      <form className={styles.formWrapper}>
        <Select
          value={options.find((o) => o.value === selectedValue)}
          options={options}
          onChange={(value: { label: string; value: string }) =>
            setSelectedValue(value.value)
          }
        />

        <button className={styles.button}>Pesquisar</button>
      </form>

      <section className={styles.contentWrapper}>
        {selectedValue === "1" &&
          lines.map((l, i) => (
            <div className={styles.line} key={i}>
              <p>{l.code}</p>
              <p>{l.lineName}</p>
              <span>{l.timeUntilArrival}</span>
            </div>
          ))}

        {selectedValue === "2" && (
          <div className={styles.error}>
            <Image
              src="/sad.svg"
              alt="Um emoji triste"
              width={70}
              height={70}
            />
            <p>
              Poxa! Não tem ônibus previstos para essa parada. Que tal tentar
              mais tarde?
            </p>
          </div>
        )}
      </section>
    </section>
  );
}
