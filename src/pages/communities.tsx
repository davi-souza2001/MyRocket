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
        <div className={styles.title}>
          <p>Which</p>
          <p className={styles.communityTitle}>{comumUnic}</p>
          <p>tool do you choose?</p>
        </div>
      </div>
      <div className={styles.contentBoxesTechs}>
        {comumUnic === 'Front' && (
          <>
            <BoxTechs title={'React'} onClick={() => Router.push('/com/React')}/>
            <BoxTechs title={'Next'} onClick={() => Router.push('/com/Next')}/>
            <BoxTechs title={'Angular'} onClick={() => Router.push('/com/Angular')}/>
            <BoxTechs title={'Vue'} onClick={() => Router.push('/com/Vue')}/>
            <BoxTechs title={'Ember'} onClick={() => Router.push('/com/Ember')}/>
          </>
        )}
        {comumUnic === 'Back' && (
          <>
            <BoxTechs title={'Node'} onClick={() => Router.push('/com/Node')}/>
            <BoxTechs title={'Java'} onClick={() => Router.push('/com/Java')}/>
            <BoxTechs title={'Firebase'} onClick={() => Router.push('/com/Firebase')}/>
            <BoxTechs title={'Sql'} onClick={() => Router.push('/com/Sql')}/>
            <BoxTechs title={'Mongo'} onClick={() => Router.push('/com/Mongo')}/>
          </>
        )}
        {comumUnic === 'Mobile' && (
          <>
            <BoxTechs title={'Flutter'} onClick={() => Router.push('/com/Flutter')}/>
            <BoxTechs title={'React-Native'} onClick={() => Router.push('/com/React-Native')}/>
            <BoxTechs title={'Ionic'} onClick={() => Router.push('/com/Ionic')}/>
            <BoxTechs title={'Swift'} onClick={() => Router.push('/com/Swift')}/>
          </>
        )}
      </div>
    </div>
  )
}
