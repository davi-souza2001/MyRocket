import Image from 'next/image';

import Rocket from '../../public/rocketRegister.svg'
import styles from '../styles/Register.module.css';

export default function Register() {

    return (
        <div className={styles.contentGeral}>
            <div className={styles.contentPhrase}>
                <p>We are glad you are coming <br/>aboard with us!</p>
            </div>
            <div className={styles.contentRegister}>
                <div className={styles.contentImageRocket}>
                    <Image src={Rocket} width={650} height={650} alt="rocket logo"/>
                </div>

                <form className={styles.formsContent}>
                    <h2>Register</h2>
                    <input placeholder='Your Name' type="text" name="" id="" />
                    <input placeholder='Nickname' type="text" name="" id="" />
                    <select required>
                        <option defaultValue="seniority" >--Seniority--</option>
                        <option value="student">Student</option>
                        <option value="junior">Junior</option>
                        <option value="pleno">Pleno</option>
                        <option value="senior">Senior</option>
                    </select>

                    <p>Choose 3 technologies you like</p>

                    <select required>
                        <option defaultValue="ocupation_area" >--Area--</option>
                        <option value="Frontend">Front-End</option>
                        <option value="Backend">Back-End</option>
                        <option value="Fullstack">Full-Stack</option>
                        <option value="Mobile">Mobile</option>
                        <option value="Data">Data</option>
                        <option value="IOS">IOS</option>
                        <option value="Android">Android</option>
                    </select>

                    <select required>
                        <option defaultValue="ocupation_area" >--Area--</option>
                        <option value="Frontend">Front-End</option>
                        <option value="Backend">Back-End</option>
                        <option value="Fullstack">Full-Stack</option>
                        <option value="Mobile">Mobile</option>
                        <option value="Data">Data</option>
                        <option value="IOS">IOS</option>
                        <option value="Android">Android</option>
                    </select>

                    <select required>
                        <option defaultValue="ocupation_area" >--Area--</option>
                        <option value="Frontend">Front-End</option>
                        <option value="Backend">Back-End</option>
                        <option value="Fullstack">Full-Stack</option>
                        <option value="Mobile">Mobile</option>
                        <option value="Data">Data</option>
                        <option value="IOS">IOS</option>
                        <option value="Android">Android</option>
                    </select>

                    <textarea className={styles.description} placeholder='Description' />

                    <p>Optional</p>
                    <input placeholder='LinkedIn @' type="text" name="" id="" />
                    <input placeholder='GitHub @' type="text" name="" id="" />
                    <input placeholder='Instagram @' type="text" name="" id="" />
                    <input placeholder='Youtube @' type="text" name="" id="" />

                    <div className={styles.checkBoxSend}>
                        <input type="checkbox" name="" id="" />
                        <p>Do you agree with the <strong>Terms and Conditions</strong>?</p>
                    </div>

                    <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
    )
}