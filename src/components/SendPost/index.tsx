import Image from "next/image";
import Test from '../../../public/img/social_medias/gmail.svg'
import { HiPaperAirplane } from "react-icons/hi";

import styles from './SendPost.module.css'

export function SendPost() {
  return (
    <div className={styles.contentGeral}>
        <div className={styles.contentImageUser}>
            <Image src={Test} width={30} height={30}/>
        </div>
        <div className={styles.contentFormPost}>
            <form>
                <input type="text" placeholder="Escrever publicação" />
                <button type="submit">
                    <HiPaperAirplane/>
                </button>
            </form>
        </div>
    </div>
  )
}