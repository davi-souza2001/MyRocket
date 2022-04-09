import { useEffect, useState } from 'react';
import route from 'next/router';
import Cookie from 'js-cookie';

import Client from '../data/client'

import styles from '../styles/Register.module.css';

export default function Register() {
    const [id, setId] = useState('');
    const [gas, setGas] = useState(0);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [photo, setPhoto] = useState('');
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

    const [errorSend, setErrorSend] = useState(false);
    const [errorSendMensage, setErrorSendMensage] = useState('');

    const token = Cookie.get('Admin-cookie-MyRocket');

    async function getUserLogged() {
        const sendUser = {
            emailuser: token
        };
        try {
            const data = await Client.post('/users/checkuser', sendUser).then((res) => {
                setId(res.data._id)
                setGas(res.data.gas)
                setName(res.data.name)
                setEmail(res.data.email)
                setPhoto(res.data.photo)
                setNickName(res.data.nickname)
                setSeniority(res.data.seniority)
                setArea(res.data.area)
                setComumOne(res.data.comumone)
                setComumTwo(res.data.comumtwo)
                setComumThree(res.data.comumthree)
                setDescription(res.data.description)
                setLinkedin(res.data.linkedin)
                setGithub(res.data.github)
                setInstagram(res.data.instagram)
                setYoutube(res.data.youtube)    
                return res.data
            })
        } catch (error: any) {
            console.log(error.response)
        }
    }

    useEffect(() => {
        getUserLogged();
    }, [])
    
    const userComplete = {
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
        photo
    }

    async function sendUser(e: any) {
        e.preventDefault()
        setErrorSend(false)
        try {
            const data = await Client.patch(`/users/edituser/${id}`, userComplete).then((res) => {
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

    return (
        <div className={styles.contentGeral}>
            <div className={styles.contentPhrase} />
            <div className={styles.contentRegister}>
                <form className={styles.formsContent} onSubmit={sendUser}>
                    <h2>Register</h2>
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

                    {errorSend && (
                        <div className={styles.errorBox}>
                            <p>{errorSendMensage}</p>
                        </div>
                    )}
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
    )
}