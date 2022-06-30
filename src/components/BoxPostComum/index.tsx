import Image from 'next/image';
import Router from 'next/router';
import { HiTrash } from "react-icons/hi";
import { MantineProvider } from '@mantine/core';
import Rating from '@mui/material/Rating';

import UseAuth from '../../service/hook/useAuth';
import Client from '../../data/client';
import UsePosts from '../../service/hook/usePosts';
import EditorPost from '../EditorPost';

import Test from '../../../public/img/social_medias/gmail.svg';
import styles from './BoxPostComum.module.css';
import { AiFillRocket, AiOutlineRocket } from 'react-icons/ai';

interface BoxPostComumProps {
	id?: string,
	post?: string,
	userName?: string,
	userNick?: string,
	userPhoto?: string,
	emailUser?: string,
	tech?: string,
	likes?: number | null
	givelike?: () => void
}

export function BoxPostComum(props: BoxPostComumProps) {
	const { user } = UseAuth()
	const { getPostsByComum, like, setLike } = UsePosts();

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
					<Rating
						style={{ color: '#fff' }}
						icon={<AiFillRocket />}
						emptyIcon={<AiOutlineRocket />}
						value={props.likes}
						onChange={(e, newValue) => setLike(newValue)}
						onClick={props.givelike}
					/>
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
