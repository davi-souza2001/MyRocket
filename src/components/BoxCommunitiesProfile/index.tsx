import route from "next/router";
import useAuth from "../../service/hook/useAuth";

import { HiOutlineGlobe } from "react-icons/hi";

import styles from './BoxCommunitiesProfile.module.css';

export function BoxCommunitiesProfile() {
  const { user } = useAuth();

  return (
    <div className={styles.contentGeral}>
      <div className={styles.communities}>
        {user?.comumone != '' && (
          <div className={styles.community}>
            <HiOutlineGlobe className={styles.worldIcon} /><p onClick={() => route.push(`/com/${user?.comumone}`)}>{user?.comumone}</p>
          </div>
        )}
        {user?.comumtwo != '' && (
          <div className={styles.community}>
            <HiOutlineGlobe className={styles.worldIcon} /><p onClick={() => route.push(`/com/${user?.comumtwo}`)}>{user?.comumtwo}</p>
          </div>
        )}
        {user?.comumthree != '' && (
          <div className={styles.community}>
            <HiOutlineGlobe className={styles.worldIcon} /><p onClick={() => route.push(`/com/${user?.comumthree}`)}>{user?.comumthree}</p>
          </div>
        )}
      </div>
    </div>
  )
}