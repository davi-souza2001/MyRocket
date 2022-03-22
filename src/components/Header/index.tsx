import { useState } from 'react';
import Router from 'next/router';

import UseAuth from '../../service/hook/useAuth';

import { HiMenu } from 'react-icons/hi';
import { AiFillRocket, AiOutlineClose } from 'react-icons/ai';
import { BiGasPump } from "react-icons/bi";

import styles from './Header.module.css'

type Header = {
    children?: any
}

export function Header(props: Header) {
    const [open, setOpen] = useState(false)
    const { user } = UseAuth()

    return (
        <div className={styles.contentGeral}>
            <div onClick={() => Router.push('/')} className={styles.contentLogo}>
                <AiFillRocket />
                <p>MyRocket</p>
            </div>

            <div className={styles.gasDiv}>
                <BiGasPump className={styles.gasIcon}/>
                <p>x15</p>
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
                <div className={open ? styles.contentToggle : styles.contentToggleInitial}>
                    <p onClick={() => Router.push('/')}>Home</p>
                    <p onClick={() => Router.push('/feed')}>Feed</p>
                    <p onClick={() => Router.push('/search')}>Search</p>
                    <p onClick={() => Router.push('/mainprofile')}>Profile</p>
                </div>
            </div>
        </div>
    )
}
