import { useState } from "react";
import Image from "next/image";

import Client from '../../data/client';
import UseAuth from "../../service/hook/useAuth";
import UsePosts from "../../service/hook/usePosts";

import { HiCamera, HiDocument, HiPencil } from "react-icons/hi";

import Test from '../../../public/img/social_medias/gmail.svg';

import styles from './SendPost.module.css';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
	position: 'absolute' as 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
};

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
			{/* <Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<Typography id="modal-modal-title" variant="h6" component="h2">
						Text in a modal
					</Typography>
					<Typography id="modal-modal-description" sx={{ mt: 2 }}>
						Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
					</Typography>
				</Box>
			</Modal> */}
			<div className={styles.contentImagemAndDescription}>
				<div className={styles.contentImageUser}>
					<Image src={user?.avatar || Test} width={40} height={40} alt="Logo user" />
				</div>
				<span>What is your discovery today, {user?.name}?</span>
			</div>
			<div className={styles.contentBar} />
			<div className={styles.contentOptionsPost}>
				<HiPencil
					style={{
						cursor: 'pointer'
					}}
				/>
				<HiCamera
					style={{
						cursor: 'pointer',
						margin: '0px 60px'
					}}
				/>
				<HiDocument
					style={{
						cursor: 'pointer'
					}}
				/>
			</div>
		</div>
	)
}
