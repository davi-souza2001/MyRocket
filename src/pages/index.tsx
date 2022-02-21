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
        <BoxStacks/>
        <BoxStacks/>
        <BoxStacks/>
      </div>
    </>
  )
} 