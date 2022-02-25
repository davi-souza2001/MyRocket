import React from 'react';
import styles from './BoxStacks.module.css';

import Image from 'next/image';

type BoxStacks = {
    area: String,
    description: String
    logo: string
    onClick: () => void
};

export function BoxStacks(props: BoxStacks) {
    return (
        <div className={styles.contentGeral} onClick={props.onClick}>
            <div className={styles.contentBox}>
                <h4>{props.area}</h4>
                <p>{props.description}</p>
            </div>
            <div className={styles.contentImage}>
                <Image src={props.logo} alt='Logo area' />
            </div>
        </div>
    )
}