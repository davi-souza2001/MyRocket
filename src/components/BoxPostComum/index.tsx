import Image from 'next/image'
import { Key } from 'react';
import { HiOutlineThumbUp } from "react-icons/hi";
import Test from '../../../public/img/social_medias/gmail.svg'

import styles from './BoxPostComum.module.css'

interface BoxPostComumProps {
    post?: String
    likes?: Number
    userName?: String
    userNick?: String
    userPhoto?: String
}

export function BoxPostComum(props: BoxPostComumProps) {
    return (
        <div className={styles.contentGeral}>
            <div className={styles.contentPostUser}>
                {props.post}
            </div>
            <div className={styles.contentInfoUser}>
                <div className={styles.contentImageUser}>
                    <Image src={props.userPhoto || Test} width={30} height={30} alt="Image user" />
                    <p>{props.userName}</p>
                    <h6>{props.userNick}</h6>
                </div>
                <div className={styles.contentLikePost}>
                    <HiOutlineThumbUp />
                    <p>{props.likes}</p>
                </div>
            </div>
        </div>
    )
}