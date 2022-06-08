import route from 'next/router';
import { createContext, MouseEventHandler, useEffect, useState } from 'react';
import { GoogleAuthProvider, signInWithPopup, GithubAuthProvider } from 'firebase/auth';

import Client from '../../data/client';
import { auth } from '../../firebase/connect';
import Cookie from 'js-cookie';

interface AuthContextProps {
	email?: string,
	avatar?: string,
	user?: User,
	repos?: Array<any>,
	loginGoogle?: () => Promise<void>,
	loginGitHub?: () => Promise<void>,
	getUserLogged: () => Promise<void>,
	setCookieIdUser: (user: User) => void,
	logout?: MouseEventHandler<HTMLParagraphElement>
};

interface User {
	name?: String,
	nickname?: String,
	seniority?: String,
	area?: String,
	comumone?: String,
	comumtwo?: String,
	comumthree?: String,
	description?: String,
	linkedin?: String,
	github?: String,
	youtube?: String,
	instagram?: String,
	avatar?: String,
	email?: String,
	gas?: Number
}

const AuthContext = createContext<AuthContextProps>({
	getUserLogged: () => Promise.resolve(),
	setCookieIdUser: () => {}
});

const providerGoogle = new GoogleAuthProvider();
const providerGithub = new GithubAuthProvider();

function setCookieIdUser(user: any) {
	Cookie.set('Admin-cookie-MyRocket', user.id, {
		expires: 7,
	});
}

export function AuthProvider(props: any) {
	const [email, setEmail] = useState('');
	const [avatar, setAvatar] = useState('');
	const [user, setUser] = useState<User>({});
	const [repos, setRepos] = useState([]);
	const token = Cookie.get('Admin-cookie-MyRocket');

	async function loginGoogle() {
		await signInWithPopup(auth, providerGoogle)
			.then((result) => {
				const user = result.user;
				const userFinal: any = {
					name: user.displayName,
					email: user.email,
					photo: user.photoURL,
					id: user.uid,
				};
				setEmail(userFinal.email);
				setAvatar(userFinal.photo);
				route.push('/register');
			})
			.catch((error) => {
				const errorMessage = error.message;
				console.log('errou' + errorMessage);
			});
	}

	async function loginGitHub() {
		await signInWithPopup(auth, providerGithub)
			.then((result) => {
				const user = result.user;
				const userFinal: any = {
					name: user.displayName,
					email: user.email,
					photo: user.photoURL,
					id: user.uid,
				};
				setEmail(userFinal.email);
				setAvatar(userFinal.photo);
				getUserByEmail()
				route.push('/register');
			})
			.catch((error) => {
				const errorMessage = error.message;
				console.log('errou' + errorMessage);
			});
	}

	async function logout() {
		Cookie.remove('Admin-cookie-MyRocket');
		route.replace('/login');
	}

	async function getUserByEmail() {
		const dataSend = { email }
		try {
			const data = await Client.post('/user/getUserByEmail', dataSend).then((res) => {
				setUser(res.data);
				setCookieIdUser(res.data);
				return res.data
			})
		} catch (error: any) {
			console.log(error.response);
		}
	}

	async function getUserLogged() {
		const sendUser = {
			id: token
		};
		try {
			const data = await Client.post('/user/login', sendUser).then((res) => {
				setUser(res.data);
				return res.data
			})
		} catch (error: any) {
			console.log(error.response);
		}
	}

	async function getReposUserGitHub() {
		const sendUser = {
			emailuser: token
		};
		try {
			const data = await Client.post('/users/getGitHubUser', sendUser).then((res) => {
				setRepos(res.data);
				return res.data
			})
		} catch (error: any) {
			console.log(error.response)
		}
	}

	useEffect(() => {
		if (token) {
			getUserLogged();
		} else {
			route.push('/login');
		}
	}, [token]);

	useEffect(() => {
		getUserByEmail();
		// getReposUserGitHub();
	}, [email]);

	return (
		<AuthContext.Provider value={{ loginGoogle, loginGitHub, email, avatar, user, logout, repos, getUserLogged, setCookieIdUser }}>
			{props.children}
		</AuthContext.Provider>
	);

}

export default AuthContext;
