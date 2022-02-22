import { Header } from "../components/Header";
import { BoxStacks } from "../components/BoxStacks";

import { HiOutlineGlobe } from "react-icons/hi";

import styles from '../styles/Home.module.css'

export default function index(){
  return (
    <>
      <Header/>
      <div className={styles.contentTitle}>
        <div className={styles.contentIcon}>
          <HiOutlineGlobe/>
        </div>
        <h2>Choosing a stack</h2>
      </div>
      <div className={styles.contentBoxes}>
        <BoxStacks area={'Front-End'} description={'Comunidade Front-end, aqui você pode ver encontrar outros passageiros embarcando nas mesmas tecnologias que você. Entre elas, aqui as pessoas a bordo gostam de: React, Angular, Vue'}/>
        <BoxStacks area={'Back-End'} description={'Comunidade Back-end, aqui você pode ver encontrar outros passageiros embarcando nas mesmas tecnologias que você. Entre elas, aqui as pessoas a bordo gostam de: Node, Java'}/>
        <BoxStacks area={'Mobile'} description={'Comunidade Mobile, aqui você pode ver encontrar outros passageiros embarcando nas mesmas tecnologias que você. Entre elas, aqui as pessoas a bordo gostam de: React-Native, Kotlin'}/>
      </div>
    </>
  )
} 