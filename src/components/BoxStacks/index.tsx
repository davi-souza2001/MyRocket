import React from 'react'
import styles from './BoxStacks.module.css'

import Front from '../../../public/areas/FrontIcon.svg'
import Image from 'next/image'

type BoxStacks = {
    area: String,
    description: String
}

export function BoxStacks(props: BoxStacks) {
    return (
        <div className={styles.contentGeral}>
            <div className={styles.contentBox}>
                <h4>{props.area}</h4>
                <p>{props.description}</p>
            </div>
            <div className={styles.contentImage}>
                <Image src={Front} />
            </div>
        </div>
    )
}