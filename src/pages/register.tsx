import Image from 'next/image';

import Astronaut from '../../public/img/astronauts/astronaut_register.svg';

import styles from '../styles/Register.module.css';

export default function Register() {

    return (
        <div className={styles.contentGeral}>
            <div className={styles.registerContent}>
                <div className={styles.astronaut}>
                    <Image src={Astronaut} width={200} height={220} alt='astronautHello'/>
                </div>
                
                <h4>Register</h4>

                <form className={styles.formsContent}>
                    <div className={styles.decidetudo}>
                        <div className={styles.form1}>
                            <input placeholder='Your Name' type="text" name="" id="" />
                            <input placeholder='Nickname' type="text" name="" id="" />

                            <div className={styles.socialMediaContent}>
                                <input placeholder='LinkedIn @' type="text" name="" id="" />
                                <input placeholder='GitHub @' type="text" name="" id="" />
                            </div>

                            <div className={styles.socialMediaContent}>
                                <input placeholder='Instagram @' type="text" name="" id="" />
                                <input placeholder='Youtube @' type="text" name="" id="" />
                            </div>

                            <select required>
                                <option defaultValue="seniority" >--Seniority--</option>
                                <option value="student">Student</option>
                                <option value="junior">Junior</option>
                                <option value="pleno">Pleno</option>
                                <option value="senior">Senior</option>
                            </select>
                        </div>

                        <div className={styles.form2}>
                            <p>Choose 3 technologies you like</p>

                            <div className={styles.ocupationArea}>
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
                            </div>

                            <textarea className={styles.description} placeholder='Description' name="" id="" />
                        </div>
                    </div>
 

                    <div className={styles.form3}>
                        <div className={styles.termsAndConditions}>
                            <input type="checkbox" name="" id="" />
                            <p>Do you agree with the <strong>Terms and Conditions</strong>?</p>
                        </div>

                        <div className={styles.submitSend}>
                            <button type='submit'>Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}