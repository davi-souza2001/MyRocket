import { useEffect, useState } from "react";
import Image from "next/image";

import Client from '../../data/client';
import UseAuth from "../../service/hook/useAuth";
import UsePosts from "../../service/hook/usePosts";

import { HiPaperAirplane } from "react-icons/hi";

import Test from '../../../public/img/social_medias/gmail.svg';

import styles from './SendPost.module.css';

interface SendPostProps {
	tech?: string | string[]
}

export function SendPost(props: SendPostProps) {
	const { user } = UseAuth();
	const { getPostsByComum } = UsePosts();
	const [post, setPost] = useState('');
	const [errorSend, setErrorSend] = useState(false);
	const [errorSendMensage, setErrorSendMensage] = useState('');

	async function sendPost(e: any) {
		e.preventDefault();
		const postUserAll = {
			avatar: user?.avatar,
      email: user?.email,
			content: post,
			tech: props.tech,
			userName: user?.name,
			userNick: user?.nickname,
		};
		try {
			const data = await Client.post('/post/create', postUserAll).then((res) => {
				setPost('')
				getPostsByComum(props.tech ?? 'Teste')
				return res.data
			})
		} catch (error: any) {
			console.log(error.response.data.message)
			setErrorSend(true)
			setErrorSendMensage(error.response.data.message)
			setPost('')
		}
	}

	return (
		<div className={styles.contentGeral}>
			<div className={styles.contentImageUser}>
				<Image src={user?.avatar || Test} width={40} height={40} alt="Logo user" />
			</div>
			<div className={styles.contentFormPost}>
				<form onSubmit={(e) => sendPost(e)}>
					<input type="text" value={post} placeholder={errorSend ? errorSendMensage : 'Write Publication'} onChange={(e) => setPost(e.target.value)} />
					<button type="submit">
						<HiPaperAirplane />
					</button>
				</form>
			</div>
		</div>
	)
}
