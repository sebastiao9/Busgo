import Image from "next/image";
import { BusLineSection } from "../components/BusLineSection";
import { Header } from "../components/Header";
import { MapSection } from "../components/MapSection";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div>
      <Header />

      <main className={styles.wrapper}>
        <BusLineSection />
        <MapSection />
      </main>
    </div>
  )
}