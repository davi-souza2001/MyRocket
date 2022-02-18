import { HiMenu } from 'react-icons/hi';
import { AiFillRocket } from 'react-icons/ai';
import styles from './Header.module.css'

export function Header(){
    return (
        <div className={styles.contentGeral}>
            <div className={styles.contentLogo}>
                <AiFillRocket/>
                <p>MyRocket</p>
            </div>
            <div className={styles.contentOptions}>
                <HiMenu/>
            </div>
        </div>
    )
}
