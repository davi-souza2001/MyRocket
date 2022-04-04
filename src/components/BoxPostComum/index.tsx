import Image from 'next/image'
import { MouseEventHandler } from 'react';
import { HiOutlineThumbUp } from "react-icons/hi";
import Test from '../../../public/img/social_medias/gmail.svg'

import styles from './BoxPostComum.module.css'

interface BoxPostComumProps {
    post?: String
    likes?: Number
    userName?: String
    userNick?: String
    userPhoto?: String
    giveLike?: MouseEventHandler<HTMLDivElement> | undefined
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
                </div>
                <div className={styles.contentImageUserDesktop}>
                    <Image src={props.userPhoto || Test} width={30} height={30} alt="Image user" />
                    <p>{props.userName}</p>
                    <p>@{props.userNick}</p>
                </div>
                <div className={styles.contentLikePost} onClick={props.giveLike}>
                    <HiOutlineThumbUp />
                    <p>{props.likes}</p>
                </div>
            </div>
        </div>
    )
}