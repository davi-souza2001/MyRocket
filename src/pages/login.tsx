/* import TopBar from '../components/TopBar' */
import Image from 'next/image'

import Gmail from '../../public/img/social_medias/gmail.svg'
import GitHub from '../../public/img/social_medias/github.svg'
import Logo from '../../public/img/logo.svg'

import styles from '../styles/Login.module.css'

export default function Login() {
    return (
        <div className={styles.contentGeral}>
            <div className={styles.msgIntroduction}>
                <div className={styles.msgTitle}>
                    <h3>
                        WELCOME ABOARD!
                    </h3>
                </div>
                <div className={styles.msgDescription}>
                    <p>Here we guarantee that you take off with the best experience.</p>
                </div>
            </div>
            <div className={styles.loginArea}>
                <div className={styles.loginFields}>
                    <div className={styles.logoArea}>
                        <Image src={Logo} width={350} height={350} alt='astronautLogo'/>
                    </div>

                    <div className={styles.line}></div>

                    <p>Login with</p>
                    <div className={styles.btnField}>
                        <button onClick={() => console.log("Login com Github")}>
                            <Image src={GitHub} width={40} height={40} alt='githubLogo'/>
                        </button>
                        <p>or</p>
                        <button onClick={() => console.log("Login com Google")}>
                            <Image src={Gmail} width={40} height={40} alt='gmailLogo'/>
                        </button>
                    </div>

                    <div className={styles.skipLogin}>
                        <a href=""><strong>Continue without Login</strong></a>
                    </div>
                </div>

                <div className={styles.readMore}>
                    <p>The social network for Devs</p>
                    <a href=""><strong>Read More</strong></a>
                </div>
            </div>
        </div>
    )
}