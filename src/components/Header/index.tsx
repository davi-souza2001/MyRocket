import { useState } from 'react';
import { HiMenu } from 'react-icons/hi';
import { AiFillRocket, AiOutlineClose } from 'react-icons/ai';
import styles from './Header.module.css'

export function Header() {
    const [open, setOpen] = useState(false)
    return (
        <div className={styles.contentGeral}>
            <div className={styles.contentLogo}>
                <AiFillRocket />
                <p>MyRocket</p>
            </div>
            <div className={styles.contentOptions}>
                {open ? (
                    <AiOutlineClose onClick={() => setOpen(!open)} />
                ) : (
                    <HiMenu onClick={() => setOpen(!open)} />
                )}
                <div className={open ? styles.contentToggle : styles.contentToggleInicial }>
                    <p>Opcao 1</p>
                    <p>Opcao 2</p>
                </div>
            </div>
        </div>
    )
}
