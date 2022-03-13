import { AiFillGithub, AiFillInstagram, AiFillYoutube, AiFillTwitterCircle, AiFillTwitterSquare } from 'react-icons/ai'

import styles from './BoxSocialMediaProfile.module.css'

export function BoxSocialMediaProfile() {
  return (
    <div className={styles.contentGeral}>
        <div className={styles.contentBoxSocialMedia}>
            <AiFillGithub/>
            <p>Github</p>
        </div>
        <div className={styles.contentBoxSocialMedia}>
            <AiFillInstagram/>
            <p>Instagram</p>
        </div>
        <div className={styles.contentBoxSocialMedia}>
            <AiFillYoutube/>
            <p>Youtube</p>
        </div>
        <div className={styles.contentBoxSocialMedia}>
            <AiFillTwitterSquare/>
            <p>Twitter</p>
        </div>
    </div>
  )
}