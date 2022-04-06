import Image from 'next/image'
import styles from './styles.module.scss'

export function MapSection() {
  return (
    <div className={styles.container}>
      <Image
        src="/city-map.png"
        alt="Representação de uma cidade digital"
        layout="fill"
      />
    </div>
  )
}
