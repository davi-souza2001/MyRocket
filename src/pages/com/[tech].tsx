import { useRouter } from "next/router";
import { useState } from "react";
import { HiOutlineGlobe, HiFire, HiUser } from "react-icons/hi";
import { BoxPostComum } from "../../components/BoxPostComum";

import { Header } from "../../components/Header";
import {MembersComum} from "../../components/MembersComum";
import {PostsMoreLiked} from "../../components/PostsMoreLiked";
import {SendPost} from "../../components/SendPost";

import styles from '../../styles/Com.module.css'

export default function Commun() {
  const router = useRouter();
  const comumSearch = router.query.tech;

  const [membersEnable, setMembersEnable] = useState(false)
  const [postsMoreLiked, setPostsMoreLiked] = useState(false)

  return (
    <>
      <Header>
        <div className={styles.contentMoreOptions}>
          <div className={styles.contentIconOne} onClick={() => setMembersEnable(!membersEnable)}>
            <HiUser/>
            <div className={membersEnable ? styles.contentIconEnable : styles.contentIconDisable}>
              <MembersComum/>
            </div>
          </div>
          <div onClick={() => setPostsMoreLiked(!postsMoreLiked)}>
            <HiFire/>
            <div className={postsMoreLiked ? styles.contentIconEnable : styles.contentIconDisable}>
              <PostsMoreLiked/>
            </div>
          </div>
        </div>
      </Header>
      <div className={styles.contentGeral}>
        <div className={styles.title}>
          <h3>Planeta {comumSearch}</h3>
          <HiOutlineGlobe />
        </div>
        <div className={styles.contetBoxes}>
          <div className={styles.contentLeft}>
            <MembersComum/>
          </div>
          <div className={styles.contentCenter}>
            <div>
              <SendPost/>
              <BoxPostComum/>
              <BoxPostComum/>
              <BoxPostComum/>
              <BoxPostComum/>
              <BoxPostComum/>
              <BoxPostComum/>
            </div>
          </div>
          <div className={styles.contentRight}>
            <PostsMoreLiked/>
          </div>
        </div>
      </div>
    </>
  )
}