import Image from "next/image";
import { useRouter } from "next/router";
import { Header } from "../../components/Header";

import styles from '../../styles/Profile.module.css'

import Test from '../../../public/img/social_medias/gmail.svg'

export default function Profile() {
  const router = useRouter();
  const comumSearch = router.query.user;

  return (
    <>
        <Header/>
        <div className={styles.contentImageBackGround}/>
        <div className={styles.contentImageUser}>
          <div className={styles.imageUser}>
            <Image src={Test} width={60} height={60}/>
          </div>
        </div>
        <div className={styles.contentUserInfo}>
          <h2>Davi Souza</h2>
          <p>@{comumSearch}</p>
        </div>
        <div className={styles.contentUserDescription}>
          <div className={styles.contentDescBox}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quis harum nesciunt. Nulla dignissimos sed omnis repellat doloribus, sunt dolorem reiciendis impedit, facilis enim modi necessitatibus ab explicabo architecto adipisci!</p>
          </div>
        </div>
    </>
  )
}