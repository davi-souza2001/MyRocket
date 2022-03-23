import route from "next/router";

import styles from './BoxCommunitiesProfile.module.css'

interface BoxCommunitiesProfileProps{
  comumone?: String
  comumtwo?: String
  comumthree?: String
}

export function BoxCommunitiesProfile(props: BoxCommunitiesProfileProps) {
  return (
    <div className={styles.contentGeral}>
        <p onClick={() => route.push(`/com/${props.comumone}`)}>{props.comumone}</p>
        <p onClick={() => route.push(`/com/${props.comumtwo}`)}>{props?.comumtwo}</p>
        <p onClick={() => route.push(`/com/${props.comumthree}`)}>{props?.comumthree}</p>
    </div>
  )
}