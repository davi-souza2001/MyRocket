import Image from 'next/image'
import styles from './PostsMoreLiked.module.css'

import Teste from '../../../public/img/social_medias/gmail.svg'

export function PostsMoreLiked() {
  return (
    <div className={styles.contentGeral}>
        <div className={styles.contentTitle}>
            <p>Most relevant posts</p>
        </div>
        <div className={styles.contentPosts}>
            <div className={styles.boxPost}>
                <div>
                    <Image src={Teste} width={30} height={30} alt="User image"/>
                </div>
                <div className={styles.contentNameandPost}>
                    <p>Blablablabalbal</p>
                    <h4>Davi Souza</h4>
                </div>
            </div>
            <div className={styles.boxPost}>
                <div>
                    <Image src={Teste} width={30} height={30} alt="User image"/>
                </div>
                <div className={styles.contentNameandPost}>
                    <p>Blablablabalbal</p>
                    <h4>Davi Souza</h4>
                </div>
            </div>
            <div className={styles.boxPost}>
                <div>
                    <Image src={Teste} width={30} height={30} alt="User image"/>
                </div>
                <div className={styles.contentNameandPost}>
                    <p>Blablablabalbal</p>
                    <h4>Davi Souza</h4>
                </div>
            </div>
            
        </div>
    </div>
  )
}