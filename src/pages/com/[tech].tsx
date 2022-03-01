import { useRouter } from "next/router";
import { useState } from "react";
import { HiOutlineGlobe, HiFire, HiUser } from "react-icons/hi";
import { Header } from "../../components/Header";
import {MembersComum} from "../../components/MembersComum";
import styles from '../../styles/Com.module.css'

export default function Commun() {
  const router = useRouter();
  const comumSearch = router.query.tech;

  const [membersEnable, setMembersEnable] = useState(false)

  return (
    <>
      <Header>
        <div className={styles.contentMoreOptions}>
          <div className={styles.contentIconOne} onClick={() => setMembersEnable(!membersEnable)}>
            <HiUser/>
            <div className={membersEnable ? styles.contentMembersMobile : styles.contentIconDisable}>
              <MembersComum/>
            </div>
          </div>
          <div onClick={() => setMembersEnable(!membersEnable)}>
            <HiFire/>
            <div className={membersEnable ? styles.contentMembersMobile : styles.contentIconDisable}>
              <MembersComum/>
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