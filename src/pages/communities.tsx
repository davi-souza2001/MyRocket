import Router from 'next/router';
import { useEffect } from 'react';
import { Header } from '../components/Header';
import useComum from '../service/hook/useComum';
import styles from '../styles/Communities.module.css';

/* Front svg's */
import angular from '../../public/com_svg/front/angularjs.svg';
import ember from '../../public/com_svg/front/emberdotjs.svg';
import next from '../../public/com_svg/front/nextdotjs.svg';
import react from '../../public/com_svg/front/react.svg';
import vue from '../../public/com_svg/front/vuedotjs.svg';

/* Back svg's */
/* import csharp from '../../public/com_svg/back/csharp.svg'; */
import firebase from '../../public/com_svg/back/firebase.svg';
import java from '../../public/com_svg/back/java.svg';
import mongo from '../../public/com_svg/back/mongodb.svg';
import mysql from '../../public/com_svg/back/mysql.svg';
import node from '../../public/com_svg/back/nodedotjs.svg';

/* Mobile svg's */
import flutter from '../../public/com_svg/mobile/flutter.svg';
import ionic from '../../public/com_svg/mobile/ionic.svg';
import swift from '../../public/com_svg/mobile/swift.svg';

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
            <BoxTechs img={react} title={'React'} onClick={() => Router.push('/com/React')}/>
            <BoxTechs img={next} title={'Next'} onClick={() => Router.push('/com/Next')}/>
            <BoxTechs img={angular} title={'Angular'} onClick={() => Router.push('/com/Angular')}/>
            <BoxTechs img={vue} title={'Vue'} onClick={() => Router.push('/com/Vue')}/>
            <BoxTechs img={ember} title={'Ember'} onClick={() => Router.push('/com/Ember')}/>
          </>
        )}
        {comumUnic === 'Back' && (
          <>
            <BoxTechs img={node} title={'Node'} onClick={() => Router.push('/com/Node')}/>
            <BoxTechs img={java} title={'Java'} onClick={() => Router.push('/com/Java')}/>
            <BoxTechs img={firebase} title={'Firebase'} onClick={() => Router.push('/com/Firebase')}/>
            <BoxTechs img={mysql} title={'Sql'} onClick={() => Router.push('/com/Sql')}/>
            <BoxTechs img={mongo} title={'Mongo'} onClick={() => Router.push('/com/Mongo')}/>
          </>
        )}
        {comumUnic === 'Mobile' && (
          <>
            <BoxTechs img={flutter} title={'Flutter'} onClick={() => Router.push('/com/Flutter')}/>
            <BoxTechs img={react} title={'React-Native'} onClick={() => Router.push('/com/React-Native')}/>
            <BoxTechs img={ionic} title={'Ionic'} onClick={() => Router.push('/com/Ionic')}/>
            <BoxTechs img={swift} title={'Swift'} onClick={() => Router.push('/com/Swift')}/>
          </>
        )}
      </div>
    </div>
  )
}
