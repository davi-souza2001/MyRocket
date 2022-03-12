import Image from "next/image";
import { useRouter } from "next/router";
import { Header } from "../../components/Header";

import styles from '../../styles/Profile.module.css'

import Test from '../../../public/backgroundGalaxy.svg'

export default function Profile() {
  const router = useRouter();
  const comumSearch = router.query.user;

  return (
    <>
        <Header/>
        <div className={styles.contentImageBackGround}>
        </div>
    </>
  )
}