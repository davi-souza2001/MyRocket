import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Header } from "../../components/Header";

import styles from '../../styles/Profile.module.css'

import Test from '../../../public/img/social_medias/gmail.svg'
import { BoxCommunitiesProfile } from "../../components/BoxCommunitiesProfile";
import BoxProjectsProfile from "../../components/BoxProjectsProfile";
import { BoxSocialMediaProfile } from "../../components/BoxSocialMediaProfile";

export default function Profile() {
  const router = useRouter();
  const comumSearch = router.query.user;

  const [communities, setCommunities] = useState(true)
  const [projects, setProjects] = useState(false)
  const [socialMedia, setSocialMedia] = useState(false)

  function handleComum() {
    setCommunities(true)
    setProjects(false)
    setSocialMedia(false)
  }

  function handleProjects() {
    setCommunities(false)
    setProjects(true)
    setSocialMedia(false)
  }

  function handleSocialMedia() {
    setCommunities(false)
    setProjects(false)
    setSocialMedia(true)
  }

  return (
    <>
      <Header />
      <div className={styles.contentImageBackGround} />
      <div className={styles.contentImageUser}>
        <div className={styles.imageUser}>
          <Image src={Test} width={60} height={60} />
        </div>
        <div className={styles.imageUserDesktop}>
          <Image src={Test} width={90} height={90} />
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
        <p onClick={handleComum}>Comunidades</p>
        <p onClick={handleProjects}>Projetos</p>
        <p onClick={handleSocialMedia}>Redes Sociais</p>
      </div>
      <div className={styles.contentOptionSelected}>
        {communities && (
          <BoxCommunitiesProfile />
        )}
        {projects && (
          <BoxProjectsProfile />
        )}
        {socialMedia && (
          <BoxSocialMediaProfile />
        )}
      </div>
      <div className={styles.contentOptionUserDesktop}>
        <BoxCommunitiesProfile />
        <BoxProjectsProfile />
        <BoxSocialMediaProfile />
      </div>
    </>
  )
}