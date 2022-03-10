import Image from 'next/image'
import styles from './BoxUser.module.css'

import Teste from '../../../public/img/social_medias/gmail.svg'

export function BoxUser() {
  return (
    <div className={styles.contentGeral}>
        <div className={styles.contentPhotoUser}>
            <Image src={Teste} width={40} height={40}/>
        </div>
    </div>
  )
}