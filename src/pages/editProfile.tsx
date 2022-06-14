import { useEffect, useState } from 'react'
import route from 'next/router'
import Cookie from 'js-cookie'

import Client from '../data/client'

import styles from '../styles/Register.module.css'
import UseAuth from '../service/hook/useAuth'
import { BoxError } from '../components/BoxError'

export default function Register() {
	const [id, setId] = useState<string | undefined>('')
	const [gas, setGas] = useState<number | undefined>(0)
	const [name, setName] = useState<string | undefined>('')
	const [email, setEmail] = useState<string | undefined>('')
	const [avatar, setAvatar] = useState<string | undefined>('')
	const [nickname, setNickName] = useState<string | undefined>('')
	const [seniority, setSeniority] = useState<string | undefined>('')
	const [area, setArea] = useState<string | undefined>('')
	const [comumone, setComumOne] = useState<string | undefined>('')
	const [comumtwo, setComumTwo] = useState<string | undefined>('')
	const [comumthree, setComumThree] = useState<string | undefined>('')
	const [description, setDescription] = useState<string | undefined>('')
	const [linkedin, setLinkedin] = useState<string | undefined>('')
	const [github, setGithub] = useState<string | undefined>('')
	const [instagram, setInstagram] = useState<string | undefined>('')
	const [youtube, setYoutube] = useState<string | undefined>('')

	const [errorSend, setErrorSend] = useState(false)
	const [errorSendMensage, setErrorSendMensage] = useState('')

	const { user } = UseAuth()

	async function sendUser(e: any) {
		e.preventDefault()
		setErrorSend(false)

		const userComplete = {
			id,
			name,
			nickname,
			seniority,
			area,
			comumone,
			comumtwo,
			comumthree,
			description,
			email,
			github,
			linkedin,
			youtube,
			instagram,
			gas,
			avatar
		}

		try {
			const data = await Client.post('/user/update', userComplete).then((res) => {
				return res.data
			}).then(() => {
				route.push('/mainprofile')
			})
		} catch (error: any) {
			console.log(error.response.data.message)
			setErrorSend(true)
			setErrorSendMensage(error.response.data.message)
		}
	}

	useEffect(() => {
		setId(user?.id)
		setGas(user?.gas)
		setName(user?.name)
		setEmail(user?.email)
		setAvatar(user?.avatar)
		setNickName(user?.nickname)
		setSeniority(user?.seniority)
		setArea(user?.area)
		setComumOne(user?.comumone)
		setComumTwo(user?.comumtwo)
		setComumThree(user?.comumthree)
		setDescription(user?.description)
		setLinkedin(user?.linkedin)
		setGithub(user?.github)
		setInstagram(user?.instagram)
		setYoutube(user?.youtube)
	}, [user])

	return (
		<div className={styles.contentGeral}>
			<div className={styles.contentPhrase} />
			<div className={styles.contentRegister}>
				<form className={styles.formsContent} onSubmit={sendUser}>
					<h2>Edition</h2>
					<input placeholder='Your Name' type="text" value={name} onChange={(e) => setName(e.target.value)} />
					<input placeholder='Nickname' type="text" value={nickname} onChange={(e) => setNickName(e.target.value)} />
					<select required value={seniority} onChange={(e) => setSeniority(e.target.value)}>
						<option defaultValue="seniority" >--Seniority--</option>
						<option value="student">Student</option>
						<option value="junior">Junior</option>
						<option value="pleno">Pleno</option>
						<option value="senior">Senior</option>
					</select>

					<p>Choose your area</p>

					<select required value={area} onChange={(e) => setArea(e.target.value)}>
						<option defaultValue="ocupation_area" >--Area--</option>
						<option value="Frontend">Front-End</option>
						<option value="Backend">Back-End</option>
						<option value="Fullstack">Full-Stack</option>
						<option value="Mobile">Mobile</option>
						<option value="Data">Data</option>
						<option value="IOS">IOS</option>
						<option value="Android">Android</option>
					</select>

					<p>Choose 3 technologies you like</p>

					<select required value={comumone} onChange={(e) => setComumOne(e.target.value)}>
						<option value="">--Front-End--</option>
						<option value="React">React</option>
						<option value="Next">Next</option>
						<option value="Angular">Angular</option>
						<option value="Vue">Vue</option>
						<option value="Ember">Ember</option>
						<option value="">--Back-End--</option>
						<option value="Node">Node</option>
						<option value="Java">Java</option>
						<option value="Firebase">Firebase</option>
						<option value="Sql">Sql</option>
						<option value="Mongo">Mongo</option>
						<option value="">--Mobile--</option>
						<option value="Flutter">Flutter</option>
						<option value="ReactNative">React-Native</option>
						<option value="Ionic">Ionic</option>
						<option value="Swift">Swift</option>
					</select>

					<select value={comumtwo} onChange={(e) => setComumTwo(e.target.value)}>
						<option value="">--Front-End--</option>
						<option value="React">React</option>
						<option value="Next">Next</option>
						<option value="Angular">Angular</option>
						<option value="Vue">Vue</option>
						<option value="Ember">Ember</option>
						<option value="">--Back-End--</option>
						<option value="Node">Node</option>
						<option value="Java">Java</option>
						<option value="Firebase">Firebase</option>
						<option value="Sql">Sql</option>
						<option value="Mongo">Mongo</option>
						<option value="">--Mobile--</option>
						<option value="Flutter">Flutter</option>
						<option value="ReactNative">React-Native</option>
						<option value="Ionic">Ionic</option>
						<option value="Swift">Swift</option>
					</select>

					<select value={comumthree} onChange={(e) => setComumThree(e.target.value)}>
						<option value="">--Front-End--</option>
						<option value="React">React</option>
						<option value="Next">Next</option>
						<option value="Angular">Angular</option>
						<option value="Vue">Vue</option>
						<option value="Ember">Ember</option>
						<option value="">--Back-End--</option>
						<option value="Node">Node</option>
						<option value="Java">Java</option>
						<option value="Firebase">Firebase</option>
						<option value="Sql">Sql</option>
						<option value="Mongo">Mongo</option>
						<option value="">--Mobile--</option>
						<option value="Flutter">Flutter</option>
						<option value="ReactNative">React-Native</option>
						<option value="Ionic">Ionic</option>
						<option value="Swift">Swift</option>
					</select>

					<textarea className={styles.description} placeholder='Description' value={description} onChange={(e) => setDescription(e.target.value)} />

					<p>Optional</p>
					<input value={linkedin} placeholder='LinkedIn @' type="text" onChange={(e) => setLinkedin(e.target.value)} />
					<input value={github} placeholder='GitHub @' type="text" onChange={(e) => setGithub(e.target.value)} />
					<input value={instagram} placeholder='Instagram @' type="text" onChange={(e) => setInstagram(e.target.value)} />
					<input value={youtube} placeholder='Youtube @' type="text" onChange={(e) => setYoutube(e.target.value)} />

					<BoxError
						mensageError={errorSendMensage}
						visible={errorSend}
					/>
					<button type='submit'>Submit</button>
				</form>
			</div>
		</div>
	)
}
