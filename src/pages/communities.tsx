import useComum from '../service/hook/useComum'
import styles from '../styles/Communities.module.css'


export default function Comum() {
  const { comumUnic } = useComum()

  return (
    <div className={styles.contentGeral}>
      Principal{comumUnic}
    </div>
  )
}