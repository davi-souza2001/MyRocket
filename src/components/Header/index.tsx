import { useState } from 'react';
import { HiMenu } from 'react-icons/hi';
import { AiFillRocket, AiOutlineClose } from 'react-icons/ai';
import styles from './Header.module.css'
import Router from 'next/router';

type Header={
    children?: any
}

export function Header(props: Header) {
    const [open, setOpen] = useState(false)
    return (
        <div className={styles.contentGeral}>
            <div onClick={() => Router.push('/')} className={styles.contentLogo}>
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
                    <p onClick={() => Router.push('/')}>Home</p>
                    <p onClick={() => Router.push('/feed')}>Feed</p>
                    <p onClick={() => Router.push('/search')}>Search</p>
                    <p onClick={() => Router.push('/meet')}>Reuniões</p>
                    <p onClick={() => Router.push('/profile/davi-souza2001')}>Profile</p>
                </div>
            </div>
        </div>
    )
}
