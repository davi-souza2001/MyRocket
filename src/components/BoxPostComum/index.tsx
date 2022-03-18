import Image from 'next/image'
import { HiOutlineThumbUp } from "react-icons/hi";
import Test from '../../../public/img/social_medias/gmail.svg'

import styles from './BoxPostComum.module.css'

export function BoxPostComum() {
  return (
    <div className={styles.contentGeral}>
        <div className={styles.contentPostUser}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, rerum dicta aliquam laboriosam illo fugiat eum quos vitae exercitationem fuga recusandae minima nihil ea animi a inventore odio pariatur optio. 
        </div>
        <div className={styles.contentInfoUser}>
            <div className={styles.contentImageUser}>
                <Image src={Test} width={30} height={30} alt="Image user"/>
                <p>Davi Souza</p>
            </div>
            <div className={styles.contentLikePost}>
                <HiOutlineThumbUp/>
                <p>12</p>
            </div>
        </div>
    </div>
  )
}