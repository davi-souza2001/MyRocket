import { useRouter } from "next/router";
import { HiOutlineGlobe } from "react-icons/hi";
import { Header } from "../../components/Header";
import styles from '../../styles/Com.module.css'

export default function Commun() {
  const router = useRouter();
  const comumSearch = router.query.tech;

  return (
    <>
      <Header />
      <div className={styles.contentGeral}>
        <div className={styles.title}>
          <h3>Planeta {comumSearch}</h3>
          <HiOutlineGlobe />
        </div>
        <div className={styles.contetBoxes}>
          <div className={styles.contentLeft}>
            Test
          </div>
          <div className={styles.contentCenter}>
            Test
          </div>
          <div className={styles.contentRight}>
            Test
          </div>
        </div>
      </div>
    </>
  )
}