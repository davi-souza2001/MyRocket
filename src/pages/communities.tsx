import Router from 'next/router'
import { useEffect } from 'react'
import useComum from '../service/hook/useComum'
import styles from '../styles/Communities.module.css'


export default function Comum() {
  const { comumUnic } = useComum()

  useEffect(() => {
    if(comumUnic === 'Null'){
      Router.replace('/')
    }
  },[])

  return (
    <div className={styles.contentGeral}>
      Principal{comumUnic}
    </div>
  )
}