import React from 'react'
import styles from './BoxStacks.module.css'

type BoxStacks = {}

export function BoxStacks(props: BoxStacks) {
    return (
        <div className={styles.contentGeral}>
            <div className={styles.contentBox}>
                <h4>Front-End</h4>
                <p>Comunidade Front-end, aqui você pode ver encontrar outros passageiros embarcando nas mesmas tecnologias que você. Entre elas, aqui as pessoas a bordo gostam de: React, Angular, Vue</p>
            </div>
            <div>
                <p>Imagem</p>
            </div>
        </div>
    )
}