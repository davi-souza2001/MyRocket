import { useState } from "react";
import Image from "next/image";

import UseAuth from "../service/hook/useAuth";

import { Header } from "../components/Header";
import { BoxCommunitiesProfile } from "../components/BoxCommunitiesProfile";
import { BoxProjectsProfile } from "../components/BoxProjectsProfile";
import { BoxSocialMediaProfile } from "../components/BoxSocialMediaProfile";

import styles from '../styles/Profile.module.css'

import Test from '../../public/img/social_medias/gmail.svg'

export default function Profile() {
  const { user, logout } = UseAuth()

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
      <Header/>
      <div className={styles.contentImageBackGround} />
      <div className={styles.contentImageUser}>
        <div className={styles.imageUser} onClick={logout}>
          <Image src={Test} width={60} height={60} alt="logo" />
        </div>
        <div className={styles.imageUserDesktop} onClick={logout}>
          <Image src={user.photo || Test} width={100} height={100} alt="logo" />
        </div>
      </div>
      <div className={styles.contentUserInfo}>
        <h2>{user.name}</h2>
        <p>@{user.nickname}</p>
      </div>
      <div className={styles.contentUserDescription}>
        <div className={styles.contentDescBox}>
          <p>{user.description}</p>
        </div>
      </div>
      <div className={styles.contentBarOptions}>
        <p onClick={handleComum}>Communities</p>
        <p onClick={handleProjects}>Projects</p>
        <p onClick={handleSocialMedia}>Social media</p>
      </div>
      <div className={styles.contentOptionSelected}>
        {communities && (
          <BoxCommunitiesProfile
            comumone={user.comumone}
            comumtwo={user.comumtwo}
            comumthree={user.comumthree} />
        )}
        {projects && (
          <BoxProjectsProfile />
        )}
        {socialMedia && (
          <BoxSocialMediaProfile />
        )}
      </div>
      <div className={styles.contentOptionUserDesktop}>
        <BoxCommunitiesProfile
          comumone={user.comumone}
          comumtwo={user.comumtwo}
          comumthree={user.comumthree} />
        <BoxProjectsProfile />
        <BoxSocialMediaProfile />
      </div>
    </>
  )
}