import Image from 'next/image'
import { AiFillRocket } from 'react-icons/ai';

import styles from './BoxUser.module.css'

import Test from '../../../public/img/social_medias/gmail.svg'

interface BoxUserProps{
    photo?: string,
    name: string,
    area: string,
    description: string,
    onClick: () => void
}

export function BoxUser(props: BoxUserProps) {
  return (
    <div className={styles.contentGeral}>
        <div className={styles.contentPhotoUser}>
            <Image className={styles.photo} src={props.photo || Test} width={40} height={40} alt="Image user"/>
        </div>
        <div className={styles.contentUserInfo}>
            <div className={styles.contentInfo}>
                <p>{props.name}</p>
            </div>
            <div className={styles.contentInfo}>
                <p>{props.area}</p>
            </div>
            <div className={styles.contentInfo}>
                <p>{props.description}</p>
            </div>
        </div>
        <div className={styles.contentFollowUser} onClick={props.onClick}>
            <AiFillRocket/>
        </div>
    </div>
  )
}