import route from "next/router";
import { HiOutlineGlobe } from "react-icons/hi";


import { Header } from "../components/Header";
import { BoxStacks } from "../components/BoxStacks";

import styles from '../styles/Home.module.css'

import Front from '../../public/areas/FrontIcon.svg'
import Back from '../../public/areas/BackIcon.svg'
import Mobile from '../../public/areas/MobileIcon.svg'
import useComum from "../service/hook/useComum";

export default function index(){
  const { comumUnic, setComumUnic } = useComum()

  console.log(comumUnic)
  return (
    <div className={styles.homeGeral}>
      <Header/>
      <div className={styles.contentTitle}>
        <div className={styles.contentIcon}>
          <HiOutlineGlobe/>
        </div>
        <h2>Choosing a stack</h2>
      </div>
      <div className={styles.contentBoxes}>
        <BoxStacks onClick={() => {
          setComumUnic('front') 
          route.push('/communities')
          }}
          logo={Front} 
          area={'Front-End'} 
          description={'Comunidade Front-end, aqui você pode ver encontrar outros passageiros embarcando nas mesmas tecnologias que você. Entre elas, aqui as pessoas a bordo gostam de: React, Angular, Vue'}/>
        <BoxStacks onClick={() => {
          setComumUnic('back') 
          route.push('/communities')
          }} 
        logo={Back} 
        area={'Back-End'} 
        description={'Comunidade Back-end, aqui você pode ver encontrar outros passageiros embarcando nas mesmas tecnologias que você. Entre elas, aqui as pessoas a bordo gostam de: Node, Java'}/>
        <BoxStacks onClick={() => {
          setComumUnic('mobile') 
          route.push('/communities')
          }} 
        logo={Mobile} 
        area={'Mobile'} 
        description={'Comunidade Mobile, aqui você pode ver encontrar outros passageiros embarcando nas mesmas tecnologias que você. Entre elas, aqui as pessoas a bordo gostam de: React-Native, Kotlin'}/>
      </div>
    </div>
  )
} 