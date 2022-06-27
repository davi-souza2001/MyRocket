import Image from 'next/image';
import Router from 'next/router';
import { HiTrash } from "react-icons/hi";

import UseAuth from '../../service/hook/useAuth';
import Client from '../../data/client';

import Test from '../../../public/img/social_medias/gmail.svg';

import styles from './BoxPostComum.module.css';
import UsePosts from '../../service/hook/usePosts';
import { MantineProvider } from '@mantine/core';
import EditorPost from '../EditorPost';

interface BoxPostComumProps {
	id?: string,
	post?: string,
	userName?: string,
	userNick?: string,
	userPhoto?: string,
	emailUser?: string,
	tech?: string
}

export function BoxPostComum(props: BoxPostComumProps) {
	const { user } = UseAuth()
	const { getPostsByComum } = UsePosts();

	async function sendPost() {
		const dataSend = { id: props.id }

		try {
			const data = await Client.post('/post/delete', dataSend).then((res) => {

				getPostsByComum(props.tech ?? 'Teste')
				return res.data
			})
		} catch (error: any) {
			console.log(error.response.data.message)
		}
	}

	return (
		<div className={styles.contentGeral}>
			<div className={styles.contentPostUser}>
				{props.post && (
					<MantineProvider theme={{ colorScheme: 'dark' }}>
						<EditorPost
							readOnly
							value={props.post}
							onChange={() => 0}
							controls={[
								['bold', 'underline', 'link', 'image'],
								['unorderedList', 'h1'],
								['alignLeft', 'alignCenter'],
							]}
							style={{
								backgroundColor: '#272733',
								border: 'none',
								fontFamily: 'Poppins, sans-serif',
								color: '#fff'
							}}
						/>
					</MantineProvider>
				)}
				{/* {props.post} */}
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
				<div className={styles.contentLikePost} >
					{user?.email === props.emailUser && (
						<HiTrash
							onClick={sendPost}
						/>
					)}
				</div>
			</div>
		</div>
	)
}
