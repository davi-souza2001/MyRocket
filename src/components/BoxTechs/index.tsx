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
        <p>Comunidade {props.title}, fique a vontade para compartilhar com outros passageiros sua experiencia ou duvidas com a feature!</p>
      </div>
    </div>
  )
}