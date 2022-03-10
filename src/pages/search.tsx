import { BoxUser } from "../components/BoxUser";
import { Header } from "../components/Header";
import styles from '../styles/Search.module.css'

export default function Search() {
    return (
        <>
            <Header />
            <div className={styles.contentTitle}>
                <h2>Escolha qual modalidade você quer procurar outros devs !</h2>
            </div>
            <div className={styles.contentSearch}>
                <form>
                    <input type="text" />
                    <button type="submit">Search</button>
                </form>
                <div className={styles.contentResponseUser}>
                    <BoxUser />
                    <BoxUser />
                    <BoxUser />
                    <BoxUser />
                    <BoxUser />
                    <BoxUser />
                    <BoxUser />
                    <BoxUser />
                    <BoxUser />
                    <BoxUser />
                    <BoxUser />
                </div>
            </div>
        </>
    )
}