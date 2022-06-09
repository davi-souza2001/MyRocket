import { useState } from "react";
import Router from 'next/router';

import Client from '../data/client';

import { BoxUser } from "../components/BoxUser";
import { Header } from "../components/Header";

import Image from 'next/image';
import searchingImage from '../../public/img/search_image.svg';

import styles from '../styles/Search.module.css';

interface UserBox {
	area: string,
	name: string,
	description: string,
	avatar?: string,
	nickname: string
}

export default function Search() {
	const [howSearch, setHowSearch] = useState('Community');
	const [search, setSearch] = useState('');
	const [foundUsers, setFoundUsers] = useState([]);
	const [error, setError] = useState('');

	async function handleFoundUsersByComum(e: any) {
		e.preventDefault();
		setError('');
		setFoundUsers([]);
		const sendData = {
			comum: search
		}
		try {
			const data = await Client.post('/user/searchbycomum', sendData).then((res) => {
				setFoundUsers(res.data);
				return res.data
			})
		} catch (error: any) {
			setError('Look for someone!');
		}
	}

	return (
		<>
			<Header />
			<div className={styles.contentTitle}>
				<h2>Choose which modality you want to find other devs!</h2>
			</div>
			<div className={styles.contentSearch}>
				<form onSubmit={handleFoundUsersByComum}>
					<input type="text" onChange={(e) => setSearch(e.target.value)} value={search} />
					<button type="submit">Search</button>
				</form>
				{error != '' && (
					<div className={styles.contentTitleError}>
						<h2>{error}</h2>
					</div>
				)}
				{foundUsers.length === 0 && (
					<div className={styles.searchingImage}>
						<Image width={200} height={200} src={searchingImage} alt='Searching Image' />
					</div>
				)}
				<div className={styles.contentResponseUser}>
					{foundUsers && foundUsers?.map((user: UserBox, index) => {
						return (
							<div className={styles.contentBoxUser} key={index}>
								<BoxUser area={user.area} name={user.name} description={user.description}
									photo={user?.avatar} onClick={() => Router.push(`/profile/${user.nickname}`)} />
							</div>
						)
					})}
				</div>
			</div>
		</>
	)
}
