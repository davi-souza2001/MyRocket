import styles from './BoxCommunitiesProfile.module.css'

interface BoxCommunitiesProfileProps{
  comumone?: String
  comumtwo?: String
  comumthree?: String
}

export function BoxCommunitiesProfile(props: BoxCommunitiesProfileProps) {
  return (
    <div className={styles.contentGeral}>
        <p>{props.comumone}</p>
        <p>{props?.comumtwo}</p>
        <p>{props?.comumthree}</p>
    </div>
  )
}