import Image from 'next/image';
import styles from './BoxTechs.module.css'

import Example from '../../../public/img/social_medias/gmail.svg'

type BoxTechs = {
  img?: any;
  title: String;
  onClick: () => void;
};

export default function BoxTechs(props: BoxTechs) {
  return (
    <div className={styles.contentGeral} onClick={props.onClick}>
      <div className={styles.contentLogo}>
          <Image src={Example} height={80} width={80} className={styles.contentLogoImg} alt='Logo'/>
      </div>
      <div className={styles.contentTitle}>
        <h3>{props.title}</h3>
      </div>
      <div className={styles.contentDescription}>
        <p>Community {props.title}, feel free to share with other passengers your experience or doubts with the feature!</p>
      </div>
    </div>
  )
}