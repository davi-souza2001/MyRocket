import Image from 'next/image';
import { MouseEventHandler } from 'react';
import { HiOutlineThumbUp, HiThumbUp } from "react-icons/hi";
import Test from '../../../public/img/social_medias/gmail.svg';

import Router from 'next/router';

import styles from './BoxPostComum.module.css';

interface BoxPostComumProps {
	post?: String,
	likes?: Number,
	userName?: String,
	userNick?: String,
	userPhoto?: String,
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
					<Image src={props.userPhoto || Test} width={40} height={40} alt="Image user" />
					<div className={styles.userIdentification}>
						<p onClick={() => Router.push(`/profile/${props.userNick}`)}><strong>{props.userName}</strong><br />@{props.userNick}</p>
					</div>
				</div>
				<div className={styles.contentImageUserDesktop}>
					<Image src={props.userPhoto || Test} width={40} height={40} alt="Image user" />
					<div className={styles.userIdentification}>
						<p onClick={() => Router.push(`/profile/${props.userNick}`)}><strong>{props.userName}</strong><br />@{props.userNick}</p>
					</div>
				</div>
				{/* <div className={styles.contentLikePost} onClick={props.giveLike}>
                    {userLiked ? <HiThumbUp /> : <HiOutlineThumbUp />}
                    <p>{props.likes}</p>
                </div> */}
			</div>
		</div>
	)
}
