import route from 'next/router'
import { createContext, useEffect, useState } from 'react'
import { GoogleAuthProvider, signInWithPopup, GithubAuthProvider } from 'firebase/auth'
import { auth } from '../../firebase/connect'
import axios from 'axios'
import Cookie from 'js-cookie'

import Client from '../../data/client'

interface AuthContextProps {
	email?: string
	avatar?: string
	user?: User
	repos?: Array<any>
	loginGoogle?: () => Promise<void>
	loginGitHub?: () => Promise<void>
	getUserLogged: () => Promise<void>
	setCookieIdUser: (user: User) => void
	getReposUserGitHub: () => Promise<void>
	logout: () => void
	loading?: boolean
	setLoading: (loading: boolean) => void
};

export interface User {
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

const AuthContext = createContext<AuthContextProps>({
	getUserLogged: () => Promise.resolve(),
	setCookieIdUser: () => { },
	getReposUserGitHub: () => Promise.resolve(),
	setLoading: () => { },
	logout: () => { }
});

const providerGoogle = new GoogleAuthProvider()
const providerGithub = new GithubAuthProvider()

function setCookieIdUser(user: any) {
	Cookie.set('Admin-cookie-MyRocket', user.id, {
		expires: 7,
	});
}

export function AuthProvider(props: any) {
	const [loading, setLoading] = useState(false)
	const [email, setEmail] = useState('')
	const [avatar, setAvatar] = useState('')
	const [user, setUser] = useState<User>({
		id: '',
		name: '',
		nickname: '',
		seniority: '',
		area: '',
		comumone: '',
		comumtwo: '',
		comumthree: '',
		description: '',
		linkedin: '',
		github: '',
		youtube: '',
		instagram: '',
		avatar: '',
		email: '',
		gas: 0
	})
	const [repos, setRepos] = useState([])
	const token = Cookie.get('Admin-cookie-MyRocket')

	async function loginGoogle() {
		setLoading(true)
		await signInWithPopup(auth, providerGoogle)
			.then((result) => {
				const user = result.user
				const userFinal: any = {
					name: user.displayName,
					email: user.email,
					photo: user.photoURL,
					id: user.uid,
				};
				setEmail(userFinal.email)
				setAvatar(userFinal.photo)
				route.push('/register')
			})
			.catch((error) => {
				const errorMessage = error.message
				console.log('errou' + errorMessage)
			})
		setLoading(false)
	}

	async function loginGitHub() {
		setLoading(true)
		await signInWithPopup(auth, providerGithub)
			.then((result) => {
				const user = result.user
				const userFinal: any = {
					name: user.displayName,
					email: user.email,
					photo: user.photoURL,
					id: user.uid,
				}
				setEmail(userFinal.email)
				setAvatar(userFinal.photo)
				getUserByEmail()
				route.push('/register')
			})
			.catch((error) => {
				const errorMessage = error.message
				console.log('errou' + errorMessage)
			});
		setLoading(false)
	}

	async function logout() {
		setLoading(true)
		Cookie.remove('Admin-cookie-MyRocket')
		route.replace('/login')
		setLoading(false)
	}

	async function getUserByEmail() {
		const dataSend = { email }
		try {
			const data = await Client.post('/user/getUserByEmail', dataSend).then((res) => {
				setUser(res.data)
				setCookieIdUser(res.data)
				return res.data
			})
		} catch (error: any) {
			console.log(error?.response?.data)
		}
	}

	async function getUserLogged() {
		const sendUser = {
			id: token
		};
		try {
			const data = await Client.post('/user/login', sendUser).then((res) => {
				setUser(res.data)
				return res.data
			})
		} catch (error: any) {
			console.log(error.response)
		}
	}

	async function getReposUserGitHub() {
		try {
			const data = await axios.get(`https://api.github.com/users/${user.github}/repos`).then((res) => {
				setRepos(res.data)
				return res.data
			})
		} catch (error: any) {
			console.log(error.response)
		}
	}

	useEffect(() => {
		setLoading(true)
		if (token) {
			getUserLogged()
		} else {
			route.push('/login')
		}
		setLoading(false)
	}, [token]);

	useEffect(() => {
		setLoading(true)

		getUserByEmail()

		setLoading(false)

	}, [email]);

	return (
		<AuthContext.Provider value={{
			loginGoogle,
			loginGitHub,
			email,
			avatar,
			user,
			logout,
			repos,
			getUserLogged,
			setCookieIdUser,
			getReposUserGitHub,
			loading,
			setLoading
		}}>
			{props.children}
		</AuthContext.Provider>
	);

}

export default AuthContext;
