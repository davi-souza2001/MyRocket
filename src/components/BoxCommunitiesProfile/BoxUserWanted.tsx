import route from "next/router"

import { HiOutlineGlobe } from "react-icons/hi"

import styles from './BoxCommunitiesProfile.module.css'

interface BoxUserWantedProps {
	comumone?: String
	comumtwo?: String
	comumthree?: String
}

export function BoxUserWanted(props: BoxUserWantedProps) {
	return (
		<div className={styles.contentGeral}>
			<div className={styles.communities}>
				{props?.comumone != '' && (
					<div className={styles.community}>
						<HiOutlineGlobe className={styles.worldIcon} /><p onClick={() => route.push(`/com/${props?.comumone}`)}>{props?.comumone}</p>
					</div>
				)}
				{props?.comumtwo != '' && (
					<div className={styles.community}>
						<HiOutlineGlobe className={styles.worldIcon} /><p onClick={() => route.push(`/com/${props?.comumtwo}`)}>{props?.comumtwo}</p>
					</div>
				)}
				{props?.comumthree != '' && (
					<div className={styles.community}>
						<HiOutlineGlobe className={styles.worldIcon} /><p onClick={() => route.push(`/com/${props?.comumthree}`)}>{props?.comumthree}</p>
					</div>
				)}
			</div>
		</div>
	)
}
