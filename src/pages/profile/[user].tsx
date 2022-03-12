import Image from "next/image";
import { useRouter } from "next/router";
import { Header } from "../../components/Header";

import styles from '../../styles/Profile.module.css'

import Test from '../../../public/img/social_medias/gmail.svg'
import BoxCommunitiesProfile from "../../components/BoxCommunitiesProfile";

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
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam dolorem facere corporis eligendi corrupti! Doloremque aut quae quia alias quaerat. Ea accusamus voluptatem cum aspernatur itaque sequi voluptates atque earum?</p>
          </div>
        </div>
        <div className={styles.contentBarOptions}>
          <p>Comunidades</p>
          <p>Projetos</p>
          <p>Redes Sociais</p>
        </div>
        <div className={styles.contentOptionSelected}>
          <BoxCommunitiesProfile/>
        </div>
    </>
  )
}