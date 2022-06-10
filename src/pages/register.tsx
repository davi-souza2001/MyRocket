import { useEffect, useState } from 'react';
import Image from 'next/image';
import route from "next/router";
import UseAuth from '../service/hook/useAuth';

import Client from '../data/client';

import Rocket from '../../public/rocketRegister.svg';
import styles from '../styles/Register.module.css';
import { BoxError } from '../components/BoxError';

export default function Register() {
	const { email, avatar, user, setCookieIdUser } = UseAuth();
	const [name, setName] = useState('');
	const [nickname, setNickName] = useState('');
	const [seniority, setSeniority] = useState('');
	const [area, setArea] = useState('');
	const [comumone, setComumOne] = useState('');
	const [comumtwo, setComumTwo] = useState('');
	const [comumthree, setComumThree] = useState('');
	const [description, setDescription] = useState('');
	const [linkedin, setLinkedin] = useState('');
	const [github, setGithub] = useState('');
	const [instagram, setInstagram] = useState('');
	const [youtube, setYoutube] = useState('');
	const [checkBox, setCheckBox] = useState('off');

	const [errorSend, setErrorSend] = useState(false);
	const [errorSendMensage, setErrorSendMensage] = useState('');

	useEffect(() => {
		if (email === '') {
			route.replace('/login')
		}

		if (user?.id) {
			route.replace('/')
		}
	}, [])

	const useComplete = {
		area,
		avatar,
		name,
		email,
		github,
		nickname,
		comumone,
		comumtwo,
		comumthree,
		description,
		seniority,
		instagram,
		linkedin,
		youtube
	};

	async function sendUser(e: any) {
		e.preventDefault();
		if (checkBox === 'off') {
			setErrorSend(true);
			setErrorSendMensage('Aceite nossos termos!');
			return
		}

		if (useComplete.github.startsWith('https://github.com/')) {
			useComplete.github = useComplete.github.substr(19, 999)
		}

		try {
			const data = await Client.post('/user/create', useComplete).then((res) => {
				console.log(res.data)
				setCookieIdUser(res.data)
				route.replace('/')
			})
		} catch (error: any) {
			console.log(error.response.data.message)
			setErrorSend(true)
			setErrorSendMensage(error.response.data.message)
		}
	}

	return (
		<div className={styles.contentGeral}>
			<div className={styles.contentPhrase}>
				<p>We are glad you are coming <br />aboard with us!</p>
			</div>
			<div className={styles.contentRegister}>
				<div className={styles.contentImageRocket}>
					<Image src={Rocket} width={650} height={650} alt="rocket logo" />
				</div>

				<form className={styles.formsContent} onSubmit={(e) => sendUser(e)}>
					<h2>Register</h2>
					<input placeholder='Your Name' type="text" onChange={(e) => setName(e.target.value)} />
					<input placeholder='Nickname' type="text" onChange={(e) => setNickName(e.target.value)} />
					<select required onChange={(e) => setSeniority(e.target.value)}>
						<option defaultValue="seniority" >--Seniority--</option>
						<option value="student">Student</option>
						<option value="junior">Junior</option>
						<option value="pleno">Pleno</option>
						<option value="senior">Senior</option>
					</select>

					<p>Choose your area</p>

					<select required onChange={(e) => setArea(e.target.value)}>
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

					<select required onChange={(e) => setComumOne(e.target.value)}>
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

					<select onChange={(e) => setComumTwo(e.target.value)}>
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

					<select onChange={(e) => setComumThree(e.target.value)}>
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

					<textarea className={styles.description} placeholder='Description' onChange={(e) => setDescription(e.target.value)} />

					<p>Optional</p>
					<input placeholder='LinkedIn @' type="text" onChange={(e) => setLinkedin(e.target.value)} />
					<input placeholder='GitHub @' type="text" onChange={(e) => setGithub(e.target.value)} />
					<input placeholder='Instagram @' type="text" onChange={(e) => setInstagram(e.target.value)} />
					<input placeholder='Youtube @' type="text" onChange={(e) => setYoutube(e.target.value)} />

					<div className={styles.checkBoxSend} >
						<input type="checkbox" onChange={(e) => setCheckBox(e.target.value)} />
						<p>Do you agree with the <strong>Terms and Conditions</strong>?</p>
					</div>

					{/* {errorSend && (
						<div className={styles.errorBox}>
							<p>{errorSendMensage}</p>
						</div>
					)} */}

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
