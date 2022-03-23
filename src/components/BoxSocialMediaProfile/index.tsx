import { AiFillGithub, AiFillInstagram, AiFillYoutube, AiFillTwitterCircle, AiFillTwitterSquare } from 'react-icons/ai'
import UseAuth from '../../service/hook/useAuth';

import styles from './BoxSocialMediaProfile.module.css'

export function BoxSocialMediaProfile() {
    const { user } = UseAuth()

    return (
        <div className={styles.contentGeral}>
            {user?.github && (
                <div className={styles.contentBoxSocialMedia}>
                    <AiFillGithub />
                    <a target='_blank' href={`https://github.com/${user?.github}`}>Github</a>
                </div>
            )}
            {user?.instagram && (
                <div className={styles.contentBoxSocialMedia}>
                    <AiFillInstagram />
                    <a target='_blank' href={`https://www.instagram.com/${user?.instagram}`}>Instagram</a>
                </div>
            )}
            {user?.youtube && (
                <div className={styles.contentBoxSocialMedia}>
                    <AiFillYoutube />
                    <a target='_blank' href={`https://www.youtube.com/user/${user?.youtube}`}>Youtube</a>
                </div>
            )}
            {user?.twitter && (
                <div className={styles.contentBoxSocialMedia}>
                    <AiFillTwitterSquare />
                    <a target='_blank' href={`https://twitter.com/${user?.twitter}`}>Twitter</a>
                </div>
            )}
        </div>
    )
}