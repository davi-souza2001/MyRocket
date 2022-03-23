import route from "next/router";
import useAuth from "../../service/hook/useAuth";

import styles from './BoxCommunitiesProfile.module.css'

export function BoxCommunitiesProfile() {
  const {user} = useAuth()

  return (
    <div className={styles.contentGeral}>
        <p onClick={() => route.push(`/com/${user?.comumone}`)}>{user?.comumone}</p>
        <p onClick={() => route.push(`/com/${user?.comumtwo}`)}>{user?.comumtwo}</p>
        <p onClick={() => route.push(`/com/${user?.comumthree}`)}>{user?.comumthree}</p>
    </div>
  )
}