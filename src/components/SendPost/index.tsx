import { useState } from "react";
import Image from "next/image";
import Modal from '@mui/material/Modal';
import { MantineProvider } from "@mantine/core";
import { HiCamera, HiDocument, HiPencil } from "react-icons/hi";

import Client from '../../data/client';
import UseAuth from "../../service/hook/useAuth";
import UsePosts from "../../service/hook/usePosts";
import EditorPost from "../EditorPost";

import Test from '../../../public/img/social_medias/gmail.svg';
import styles from './SendPost.module.css';
import { storage } from "../../firebase/connect";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

interface SendPostProps {
	tech?: string | string[]
}

export function SendPost(props: SendPostProps) {
	const { user } = UseAuth();
	const { getPostsByComum } = UsePosts();
	const [post, setPost] = useState('');
	const [errorSend, setErrorSend] = useState(false);
	const [errorSendMensage, setErrorSendMensage] = useState('');

	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	async function sendPost() {
		const postUserAll = {
			avatar: user?.avatar,
			email: user?.email,
			content: post,
			tech: props.tech,
			userName: user?.name,
			userNick: user?.nickname,
		}

		if (post === '<p><br></p>') {
			setErrorSend(true)
			return
		}

		try {
			const data = await Client.post('/post/create', postUserAll).then((res) => {
				setPost('')
				getPostsByComum(props.tech ?? 'Teste')
				return res.data
			})
		} catch (error: any) {
			console.log(error)
			setErrorSend(true)
			setErrorSendMensage(error)
			setPost('')
		}
	}

	const handleImageUpload = (file: File): Promise<string> =>
		new Promise((resolve, reject) => {
			const formData = new FormData();
			formData.append('image', file);

			const storageRef = ref(storage, `forComum${file.name}`);

			uploadBytes(storageRef, file).then(() => {
				getDownloadURL(storageRef)
					.then((url) => {
						resolve(url)
					})
					.catch((error) => {
						reject(error)
					});
			})

		});

	return (
		<div className={styles.contentGeral}>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<div className={styles.boxModalContentGeral}>
					<strong>Discovery as text</strong>
					<div className={styles.boxModalContentInput}>
						<MantineProvider theme={{ colorScheme: 'dark' }}>
							<EditorPost
								value={post}
								onChange={setPost}
								controls={[
									['bold', 'underline', 'video',
										'link', 'h1', 'unorderedList',
										'alignLeft', 'alignCenter']
								]}
								style={{
									fontFamily: 'Poppins, sans-serif',
									color: '#fff'
								}}
							/>
						</MantineProvider>
					</div>
					<button
						className={styles.boxModalContentButton}
						onClick={() => {
							sendPost()
							handleClose()
						}}
					>
						Submit
					</button>
				</div>
			</Modal>
			<div className={styles.contentImagemAndDescription}>
				<div className={styles.contentImageUser}>
					<Image src={user?.avatar || Test} width={40} height={40} alt="Logo user" />
				</div>
				<span>What is your discovery today, {user?.name}?</span>
			</div>
			<div className={styles.contentBar} />
			<div className={styles.contentOptionsPost}>
				<HiPencil
					onClick={handleOpen}
					style={{
						cursor: 'pointer'
					}}
				/>
				<HiCamera
					onClick={handleOpen}
					style={{
						cursor: 'pointer',
						margin: '0px 60px'
					}}
				/>
				<HiDocument
					onClick={handleOpen}
					style={{
						cursor: 'pointer'
					}}
				/>
			</div>
		</div>
	)
}
