import { useEffect, useState } from "react";
import route from "next/router";
import Image from "next/image";
import { HiCog } from "react-icons/hi";

import UseAuth from "../service/hook/useAuth";

import { Header } from "../components/Header";
import { BoxCommunitiesProfile } from "../components/BoxCommunitiesProfile";
import { BoxProjectsProfile } from "../components/BoxProjectsProfile";
import { BoxSocialMediaProfile } from "../components/BoxSocialMediaProfile";

import styles from '../styles/Profile.module.css';

import Test from '../../public/img/social_medias/gmail.svg';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function Profile() {
	const { user, logout, getReposUserGitHub } = UseAuth();

	const [communities, setCommunities] = useState(true);
	const [projects, setProjects] = useState(false);
	const [socialMedia, setSocialMedia] = useState(false);

	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const openMenu = Boolean(anchorEl);
	const handleClick = (event: any) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	function handleComum() {
		setCommunities(true);
		setProjects(false);
		setSocialMedia(false);
	}

	function handleProjects() {
		setCommunities(false);
		setProjects(true);
		setSocialMedia(false);
	}

	function handleSocialMedia() {
		setCommunities(false);
		setProjects(false);
		setSocialMedia(true);
	}

	useEffect(() => {
		getReposUserGitHub()
	}, [user])

	return (
		<>
			<Header />
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
				<h2>
					{user?.name}
					<HiCog
						style={{ 'cursor': 'pointer' }}
						onClick={handleClick}
					/>
					<Menu
						anchorEl={anchorEl}
						open={openMenu}
						onClose={handleClose}
					>
						<MenuItem
						style={{
							fontFamily: 'Poppins'
						}}
							onClick={() => {
								handleClose()
								route.push('/editProfile')
							}}>
							Edit Profile
						</MenuItem>
						<MenuItem
							style={{
								backgroundColor: '#ec3333',
								fontWeight: 'bolder',
								fontFamily: 'Poppins'
							}}
							onClick={() => {
								handleClose()
								logout()
							}}>
							Logout
						</MenuItem>
					</Menu>
				</h2>
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
					<BoxCommunitiesProfile />
				)}
				{projects && (
					<BoxProjectsProfile />
				)}
				{socialMedia && (
					<BoxSocialMediaProfile />
				)}
			</div>
			<div className={styles.contentOptionUserDesktop}>
				<BoxCommunitiesProfile />
				<BoxProjectsProfile />
				<BoxSocialMediaProfile />
			</div>
		</>
	)
}
