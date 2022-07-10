import React, { useEffect, useState } from 'react'
import { AiFillRocket } from 'react-icons/ai'
import Image from 'next/image'
import route from 'next/router'

import Client from '../../data/client'

import styles from './MembersComum.module.css'

interface MembersComum {
	communities?: string | string[]
}

export function MembersComum(props: MembersComum) {
	const [foundUsers, setFoundUsers] = useState([])

	async function handleFoundUsersByComum() {
		setFoundUsers([])
		const comum = props.communities

		try {
			const data = await Client.post('/user/searchbycomum', { comum }).then((res) => {
				setFoundUsers(res.data)
				return res.data
			})
		} catch (error: any) {
			console.log(error.response.data.error)
		}
	}

	useEffect(() => {
		handleFoundUsersByComum()
	}, [props.communities])

	return (
		<div className={styles.contentGeral}>
			<div className={styles.contentTitle}>
				<AiFillRocket style={{ 'fontSize': '18px' }} />
				<p>Explorers</p>
			</div>
			<div className={styles.contentMembers}>
				{foundUsers?.map((user: any) => {
					return (
						<div key={user.id} className={styles.contentMemberUnic}>
							<Image src={user.avatar} width={35} height={35} />
							<div className={styles.contentIntoContentUser}
								onClick={() => route.push(`/profile/${user.nickname}`)}
							>
								<p>{user.name}</p>
								<p>@{user.nickname}</p>
							</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}
