import { useEffect, useState } from "react"
import Router, { useRouter } from "next/router"
import Image from "next/image"

import Client from '../../data/client'

import { Header } from "../../components/Header"
import { BoxUserWanted } from "../../components/BoxCommunitiesProfile/BoxUserWanted"
import { BoxUserWantedSocialMedias } from "../../components/BoxSocialMediaProfile/BoxUserWantedSocialMedias"
import { BoxProjectsUserSearch } from "../../components/BoxProjectsProfile/BoxProjectsUserSearch"

import styles from '../../styles/Profile.module.css'
import Test from '../../../public/img/social_medias/gmail.svg'

interface User {
	id?: string
	name?: string
	nickname?: string
	seniority?: string
	area?: string
	comumone?: string
	comumtwo?: string
	comumthree?: string
	description?: string
	linkedin?: string
	github?: string
	youtube?: string
	instagram?: string
	avatar?: string
	email?: string
	gas?: number
}

export default function Profile() {
	const [user, setUser] = useState<User>({})
	const [communities, setCommunities] = useState(true)
	const [projects, setProjects] = useState(false)
	const [socialMedia, setSocialMedia] = useState(false)

	const router = useRouter()
	const userSearch = router.query.user

	async function handleFoundUsersByNickName() {
		const sendData = {
			nickname: userSearch
		}

		if (userSearch) {
			try {
				const data = await Client.post('/user/searchbynick', sendData).then((res) => {
					setUser(res.data)
					return res.data
				})
			} catch (error: any) {
				console.log(error.response.data.error)
				Router.push('/404')
			}
		}
	}

	useEffect(() => {
		handleFoundUsersByNickName()

	}, [userSearch])

	function handleComum() {
		setCommunities(true)
		setProjects(false)
		setSocialMedia(false)
	}

	function handleProjects() {
		setCommunities(false)
		setProjects(true)
		setSocialMedia(false)
	}

	function handleSocialMedia() {
		setCommunities(false)
		setProjects(false)
		setSocialMedia(true)
	}

	return (
		<>
			<Header />
			{user && (
				<>
					<div className={styles.contentImageBackGround} />
					<div className={styles.contentImageUser}>
						<div className={styles.imageUser}>
							<Image src={user?.avatar || Test} width={60} height={60} alt="logo" />
						</div>
						<div className={styles.imageUserDesktop}>
							<Image src={user?.avatar || Test} width={100} height={100} alt="logo" />
						</div>
					</div>
					<div className={styles.contentUserInfo}>
						<h2>{user?.name}</h2>
						<p>@{user?.nickname}</p>
					</div>
					<div className={styles.contentUserDescription}>
						<div className={styles.contentDescBox}>
							<p>{user?.description}</p>
						</div>
					</div>
					<div className={styles.contentBarOptions}>
						<p onClick={handleComum}>Communities</p>
						<p onClick={handleProjects}>Projects</p>
						<p onClick={handleSocialMedia}>Social media</p>
					</div>
					<div className={styles.contentOptionSelected}>
						{communities && (
							<BoxUserWanted
								comumone={user.comumone}
								comumtwo={user.comumtwo}
								comumthree={user.comumthree} />
						)}
						{projects && (
							<BoxProjectsUserSearch nickname={user.github} />
						)}
						{socialMedia && (
							<BoxUserWantedSocialMedias
								github={user.github}
								linkedin={user.linkedin}
								youtube={user.youtube}
								instagram={user.instagram}
							/>
						)}
					</div>
					<div className={styles.contentOptionUserDesktop}>
						<BoxUserWanted
							comumone={user.comumone}
							comumtwo={user.comumtwo}
							comumthree={user.comumthree} />
						<BoxProjectsUserSearch nickname={user.github} />
						<BoxUserWantedSocialMedias
							github={user.github}
							linkedin={user.linkedin}
							youtube={user.youtube}
							instagram={user.instagram}
						/>
					</div>
				</>
			)}
		</>
	)
}
