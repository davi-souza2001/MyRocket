import { useState } from 'react';
import Router from 'next/router';

import UseAuth from '../../service/hook/useAuth';

import { HiMenu } from 'react-icons/hi';
import { AiFillRocket } from 'react-icons/ai';
import { BiGasPump } from "react-icons/bi";

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import styles from './Header.module.css';

interface Header {
	children?: any
}

export function Header(props: Header) {
	const [open, setOpen] = useState(false)
	const { user } = UseAuth()

	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const openMenu = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div className={styles.contentGeral}>
			<div onClick={() => Router.push('/')} className={styles.contentLogo}>
				<AiFillRocket />
				<p>MyRocket</p>
			</div>

			<div className={styles.gasDiv}>
				<BiGasPump className={styles.gasIcon} />
				<p>x{user?.gas}</p>
			</div>

			<div className={styles.contentOptions}>
				{props.children}
				<div className={styles.contentToggleMenu}>
					<button onClick={handleClick}>
						<HiMenu/>
					</button>
					<Menu
						anchorEl={anchorEl}
						open={openMenu}
						onClose={handleClose}
					>
						<MenuItem
							onClick={() => {
								handleClose()
								Router.push('/')
							}}>
							Home
						</MenuItem>
						<MenuItem onClick={() => {
							handleClose()
							Router.push('/feed')
						}}>
							Feed
						</MenuItem>
						<MenuItem onClick={() => {
							handleClose()
							Router.push('/search')
						}}>
							Search
						</MenuItem>
						<MenuItem onClick={() => {
							handleClose()
							Router.push('/mainprofile')
						}}>
							Profile
						</MenuItem>
					</Menu>
				</div>
				<div className={open ? styles.contentToggle : styles.contentToggleInitial}>
					<p onClick={() => Router.push('/')}>Home</p>
					<p onClick={() => Router.push('/feed')}>Feed</p>
					<p onClick={() => Router.push('/search')}>Search</p>
					<p onClick={() => Router.push('/mainprofile')}>Profile</p>
				</div>
			</div>
		</div>
	)
}
