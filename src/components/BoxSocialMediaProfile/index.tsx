import { AiFillGithub, AiFillInstagram, AiFillYoutube, AiFillLinkedin } from 'react-icons/ai'
import UseAuth from '../../service/hook/useAuth'

import styles from './BoxSocialMediaProfile.module.css'

export function BoxSocialMediaProfile() {
	const { user } = UseAuth()

	return (
		<div className={styles.contentGeral}>
			{user?.github && (
				<div className={styles.contentBoxSocialMedia}>
					<AiFillGithub />
					<a rel="noopener" href={`https://github.com/${user?.github}`}>Github</a>
				</div>
			)}
			{user?.instagram && (
				<div className={styles.contentBoxSocialMedia}>
					<AiFillInstagram />
					<a rel="noopener" href={`https://www.instagram.com/${user?.instagram}`}>Instagram</a>
				</div>
			)}
			{user?.youtube && (
				<div className={styles.contentBoxSocialMedia}>
					<AiFillYoutube />
					<a rel="noopener" href={`https://www.youtube.com/user/${user?.youtube}`}>Youtube</a>
				</div>
			)}
			{user?.linkedin && (
				<div className={styles.contentBoxSocialMedia}>
					<AiFillLinkedin />
					<a rel="noopener" href={`https://www.linkedin.com/in/${user?.linkedin}/`}>Linkedin</a>
				</div>
			)}
		</div>
	)
}
