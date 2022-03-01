import Image from 'next/image'
import styles from './PostsMoreLiked.module.css'

import Teste from '../../../public/img/social_medias/gmail.svg'

export default function PostsMoreLiked() {
  return (
    <div className={styles.contentGeral}>
        <div className={styles.contentTitle}>
            <p>Posts mais relevantes</p>
        </div>
        <div className={styles.contentPosts}>
            <div className={styles.boxPost}>
                <Image src={Teste} width={30} height={30} alt="User image"/>
                <div className={styles.contentNameandPost}>
                    <p>Blablablabalbal</p>
                    <p>Davi Souza</p>
                </div>
            </div>
            <div className={styles.boxPost}>
                <Image src={Teste} width={30} height={30} alt="User image"/>
                <div className={styles.contentNameandPost}>
                    <p>Blablablabalbal</p>
                    <p>Davi Souza</p>
                </div>
            </div>
            <div className={styles.boxPost}>
                <Image src={Teste} width={30} height={30} alt="User image"/>
                <div className={styles.contentNameandPost}>
                    <p>Blablablabalbal</p>
                    <p>Davi Souza</p>
                </div>
            </div>
        </div>
    </div>
  )
}