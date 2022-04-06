import Image from "next/image";

import styles from './styles.module.scss'

export function Header() {
  return (
    <header className={styles.header}>
      <Image
        src="/logo.svg"
        alt="representação de um onibus seguido da palavra BUSGO"
        width={225}
        height={59}
      />
    </header>
  );
}
