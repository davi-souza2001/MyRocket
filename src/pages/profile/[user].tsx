import { useEffect, useState } from "react";
import route, { useRouter } from "next/router";
import Image from "next/image";
import { HiCog } from "react-icons/hi";

import Client from '../../data/client';

import { Header } from "../../components/Header";
import { BoxUserWanted } from "../../components/BoxCommunitiesProfile/BoxUserWanted";
import { BoxUserWantedSocialMedias } from "../../components/BoxSocialMediaProfile/BoxUserWantedSocialMedias";
import { BoxProjectsProfile } from "../../components/BoxProjectsProfile";

import styles from '../../styles/Profile.module.css'

import Test from '../../../public/img/social_medias/gmail.svg'

interface User {
  name?: String;
  nickname?: String;
  seniority?: String;
  area?: String;
  comumone?: String;
  comumtwo?: String;
  comumthree?: String;
  description?: String;
  linkedin?: String;
  github?: String;
  youtube?: String;
  instagram?: String;
  photo?: String;
  email?: String;
  gas?: Number;
}

export default function Profile() {
  const [user, setUser] = useState<User>({})
  const [communities, setCommunities] = useState(true)
  const [projects, setProjects] = useState(false)
  const [socialMedia, setSocialMedia] = useState(false)

  const router = useRouter();
  const userSearch = router.query.user;

  async function handleFoundUsersByNickName() {
    const sendData = {
      usersearch: userSearch
    }

    if (userSearch) {
      try {
        const data = await Client.post('/users/searchuserByNickName', sendData).then((res) => {
          setUser(res.data)
          return res.data
        })
      } catch (error: any) {
        console.log(error.response.data.error)
      }
    }
  }

  useEffect(() => {
    handleFoundUsersByNickName()
  }, [userSearch])

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
      {user && (
        <>
          <div className={styles.contentImageUser}>
            <div className={styles.imageUser}>
              <Image src={user?.photo || Test} width={60} height={60} alt="logo" />
            </div>
            <div className={styles.imageUserDesktop}>
              <Image src={user?.photo || Test} width={100} height={100} alt="logo" />
            </div>
          </div>
          <div className={styles.contentUserInfo}>
            <h2>{user?.name} <HiCog style={{ 'cursor': 'pointer' }} onClick={() => route.push('/editProfile')} /></h2>
            <p>@{user?.nickname}</p>
          </div>
          <div className={styles.contentUserDescription}>
            <div className={styles.contentDescBox}>
              <p>{user?.description}</p>
            </div>
          </div>
          <div className={styles.contentBarOptions}>
            <p onClick={handleComum}>Communities</p>
            <p onClick={handleProjects}>Projects</p>
            <p onClick={handleSocialMedia}>Social media</p>
          </div>
          <div className={styles.contentOptionSelected}>
            {communities && (
              <BoxUserWanted
                comumone={user.comumone}
                comumtwo={user.comumtwo}
                comumthree={user.comumthree} />
            )}
            {projects && (
              <BoxProjectsProfile />
            )}
            {socialMedia && (
              <BoxUserWantedSocialMedias
                github={user.github}
                linkedin={user.linkedin}
                youtube={user.youtube}
                instagram={user.instagram}
              />
            )}
          </div>
          <div className={styles.contentOptionUserDesktop}>
            <BoxUserWanted
              comumone={user.comumone}
              comumtwo={user.comumtwo}
              comumthree={user.comumthree} />
            <BoxProjectsProfile />
            <BoxUserWantedSocialMedias
              github={user.github}
              linkedin={user.linkedin}
              youtube={user.youtube}
              instagram={user.instagram}
            />
          </div>
        </>
      )}
    </>
  )
}