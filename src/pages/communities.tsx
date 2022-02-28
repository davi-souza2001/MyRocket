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
        {comumUnic === 'Front' && (
          <>
            <BoxTechs title={'React'}/>
            <BoxTechs title={'Next'}/>
            <BoxTechs title={'Angular'}/>
            <BoxTechs title={'Vue'}/>
            <BoxTechs title={'Ember'}/>
          </>
        )}
        {comumUnic === 'Back' && (
          <>
            <BoxTechs title={'Node'}/>
            <BoxTechs title={'Java'}/>
            <BoxTechs title={'Firebase'}/>
            <BoxTechs title={'Sql'}/>
            <BoxTechs title={'Mongo'}/>
          </>
        )}
        {comumUnic === 'Mobile' && (
          <>
            <BoxTechs title={'Flutter'}/>
            <BoxTechs title={'React-Native'}/>
            <BoxTechs title={'Ionic'}/>
            <BoxTechs title={'Swift'}/>
          </>
        )}
      </div>
    </div>
  )
}
