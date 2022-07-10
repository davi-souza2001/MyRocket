import { useEffect } from 'react'
import route from "next/router"
import { AiFillGithub } from 'react-icons/ai'

import UseAuth from '../../service/hook/useAuth'
import styles from './BoxProjectsProfile.module.css'

export function BoxProjectsProfile() {
	const { user, repos, getReposUserGitHub } = UseAuth()

	useEffect(() => {
		getReposUserGitHub()
	}, [user])

	return (
		<div className={styles.contentGeral}>
			{repos && repos?.map((repo: any) => {
				return (
					<div className={styles.contentBoxProject} key={repo.id}>
						<AiFillGithub />
						<p onClick={() => route.push(repo.html_url)}>{repo.name}</p>
					</div>
				)
			})}
		</div>
	)
}
