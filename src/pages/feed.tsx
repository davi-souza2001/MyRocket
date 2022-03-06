import { BoxPostComum } from "../components/BoxPostComum";
import { Header } from "../components/Header";
import styles from '../styles/Feed.module.css'

export default function Feed() {
    return (
        <>
            <Header />
            <div className={styles.contentTitle}>
                <h2>Posts recentes da Comunidade </h2>
            </div>
            <div className={styles.contentTechs}>
                <div className={styles.techBox}>
                    <p>React</p>
                </div>
                <div className={styles.techBox}>
                    <p>Node</p>
                </div>
                <div className={styles.techBox}>
                    <p>Java</p>
                </div>
            </div>
            <div className={styles.contentPosts}>
                <BoxPostComum />
                <BoxPostComum />
                <BoxPostComum />
                <BoxPostComum />
                <BoxPostComum />
            </div>
        </>
    )
}