import Image from 'next/image';
import styles from './BoxTechs.module.css'

import Example from '../../../public/img/social_medias/gmail.svg'

export default function BoxTechs() {
  return (
    <div className={styles.contentGeral}>
      <div className={styles.contentLogo}>
          <Image src={Example} height={80} width={80} className={styles.contentLogoImg}/>
      </div>
      <div className={styles.contentTitle}>
        <h3>React</h3>
      </div>
      <div className={styles.contentDescription}>
        <p>Comunidade React, fique a vontade para compartilhar com outros passageiros sua experiencia ou duvidas com a feature!</p>
      </div>
    </div>
  )
}