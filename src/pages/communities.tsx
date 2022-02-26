import Router from 'next/router';
import { useEffect } from 'react';
import { Header } from '../components/Header';
import useComum from '../service/hook/useComum';
import styles from '../styles/Communities.module.css';

import { BiWrench } from "react-icons/bi";
import BoxTechs from '../components/BoxTechs';

export default function Comum() {
  const { comumUnic } = useComum();

  useEffect(() => {
    if(comumUnic === 'Null'){
      Router.replace('/');
    }
  },[comumUnic])

  return (
    <div className={styles.contentGeral}>
      <Header/>
      <div className={styles.contentTitle}>
        <BiWrench/>
        <p>Which {comumUnic} tool do you choose?</p>
      </div>
      <div className={styles.contentBoxesTechs}>
        <BoxTechs title={'React'}/>
      </div>
    </div>
  )
}
