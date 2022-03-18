import { BoxUser } from "../components/BoxUser";
import { Header } from "../components/Header";
import styles from '../styles/Search.module.css'

export default function Search() {
    return (
        <>
            <Header />
            <div className={styles.contentTitle}>
                <h2>Choose which modality you want to find other devs!</h2>
            </div>
            <div className={styles.contentSearch}>
                <form>
                    <input type="text" />
                    <button type="submit">Search</button>
                </form>
                <div className={styles.contentResponseUser}>
                    <div className={styles.contentBoxUser}>
                        <BoxUser />
                    </div>
                    <div className={styles.contentBoxUser}>
                        <BoxUser />
                    </div>
                    <div className={styles.contentBoxUser}>
                        <BoxUser />
                    </div>
                    <div className={styles.contentBoxUser}>
                        <BoxUser />
                    </div>
                </div>
            </div>
        </>
    )
}