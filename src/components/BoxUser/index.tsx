import Image from 'next/image'
import { AiFillRocket } from 'react-icons/ai';

import styles from './BoxUser.module.css'

import Teste from '../../../public/img/social_medias/gmail.svg'

export function BoxUser() {
  return (
    <div className={styles.contentGeral}>
        <div className={styles.contentPhotoUser}>
            <Image src={Teste} width={40} height={40}/>
        </div>
        <div className={styles.contentUserInfo}>
            <div className={styles.contentInfo}>
                <p>Davi Souza</p>
            </div>
            <div className={styles.contentInfo}>
                <p>Full-Stack em Pernambuco</p>
            </div>
            <div className={styles.contentInfo}>
                <p>CTO do MyRocket :)</p>
            </div>
        </div>
        <div className={styles.contentFollowUser}>
            <AiFillRocket/>
        </div>
    </div>
  )
}