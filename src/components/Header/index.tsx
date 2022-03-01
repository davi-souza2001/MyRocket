import { useState } from 'react';
import { HiMenu } from 'react-icons/hi';
import { AiFillRocket, AiOutlineClose } from 'react-icons/ai';
import styles from './Header.module.css'

type Header={
    children?: any
}

export function Header(props: Header) {
    const [open, setOpen] = useState(false)
    return (
        <div className={styles.contentGeral}>
            <div className={styles.contentLogo}>
                <AiFillRocket />
                <p>MyRocket</p>
            </div>
            <div className={styles.contentOptions}>
                {props.children}
                <div className={styles.contentToggleMenu}>
                    {open ? (
                        <div className={styles.contentToggleMenuClosed}>
                            <AiOutlineClose onClick={() => setOpen(!open)} />
                        </div>
                    ) : (
                        <HiMenu onClick={() => setOpen(!open)} />
                    )}
                </div>
                <div className={open ? styles.contentToggle : styles.contentToggleInicial}>
                    <p>Inicio</p>
                    <p>Feed</p>
                    <p>Pesquisar</p>
                    <p>Reuniões</p>
                    <p>Foto</p>
                </div>
            </div>
        </div>
    )
}
