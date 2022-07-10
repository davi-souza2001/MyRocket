import { AiFillGithub, AiFillInstagram, AiFillYoutube, AiFillLinkedin } from 'react-icons/ai'

import styles from './BoxSocialMediaProfile.module.css'

interface BoxUserWantedSocialMediasProps {
	github?: String
	instagram?: String
	youtube?: String
	linkedin?: String
}

export function BoxUserWantedSocialMedias(props: BoxUserWantedSocialMediasProps) {

	return (
		<div className={styles.contentGeral}>
			{props?.github && (
				<div className={styles.contentBoxSocialMedia}>
					<AiFillGithub />
					<a rel="noopener" href={`https://github.com/${props?.github}`}>Github</a>
				</div>
			)}
			{props?.instagram && (
				<div className={styles.contentBoxSocialMedia}>
					<AiFillInstagram />
					<a rel="noopener" href={`https://www.instagram.com/${props?.instagram}`}>Instagram</a>
				</div>
			)}
			{props?.youtube && (
				<div className={styles.contentBoxSocialMedia}>
					<AiFillYoutube />
					<a rel="noopener" href={`https://www.youtube.com/user/${props?.youtube}`}>Youtube</a>
				</div>
			)}
			{props?.linkedin && (
				<div className={styles.contentBoxSocialMedia}>
					<AiFillLinkedin />
					<a rel="noopener" href={`https://www.linkedin.com/in/${props?.linkedin}/`}>Linkedin</a>
				</div>
			)}
		</div>
	)
}
