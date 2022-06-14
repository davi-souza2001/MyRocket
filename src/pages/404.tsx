import Image from 'next/image';
import Router from 'next/router';

import ImageError from '../../public/PageError.svg';

import styles from '../styles/Page404.module.css';

export default function Page404() {
  return (
    <div className={styles.contentGeral}>
        <h1>Page not found :(</h1>
        <Image src={ImageError} width={400} height={400} alt="Image error"/>
        <h2 onClick={() => Router.push('/')}>Back to home</h2>
    </div>
  )
}
