import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import Client from '../../data/client';

import styles from './MembersComum.module.css';

interface MembersComum {
	communities?: string | string[];
}

export function MembersComum(props: MembersComum) {
	const [foundUsers, setFoundUsers] = useState([]);

	async function handleFoundUsersByComum() {
		setFoundUsers([])
		const comum = props.communities;

		try {
			const data = await Client.post('/user/searchbycomum', { comum }).then((res) => {
				setFoundUsers(res.data);
				return res.data
			})
		} catch (error: any) {
			console.log(error.response.data.error);
		}
	}

	useEffect(() => {
		handleFoundUsersByComum()
		console.log(foundUsers)
	}, [props.communities])

	return (
		<div className={styles.contentGeral}>
			<div className={styles.contentTitle}>
				<p>Commander</p>
			</div>
			<div className={styles.contentCommander}>
				<p>Davi Souza</p>
			</div>
			<div className={styles.contentTitle}>
				<p>Crew Members</p>
			</div>
			<div className={styles.contentMembers}>
				{foundUsers?.map((user: any) => {
					return (
						<div key={user.id} className={styles.contentMemberUnic}>
							<Image src={user.avatar} width={35} height={35} />
							<p>{user.name}</p>
						</div>
					)
				})}
			</div>
		</div>
	)
}
