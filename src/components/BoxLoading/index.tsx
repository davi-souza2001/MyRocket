import Image from "next/image"
import { HiOutlineRefresh } from "react-icons/hi"

import UseAuth from "../../service/hook/useAuth"

import RocketLogo from "../../../public/img/logo.svg"
import styles from "./BoxLoading.module.css"

interface BoxLoading {
	children: React.ReactNode
}

export function BoxLoading(props: BoxLoading) {
	const { loading } = UseAuth()
	return (
		<>
			{loading ? (
				<div className={styles.contentGeral}>
					<div className={styles.contentImageLoading}>
						<Image src={RocketLogo} alt="Image Rocket" />
						<HiOutlineRefresh className={styles.contentLoadingImage} />
					</div>
				</div>
			) : props.children}
		</>
	)
}
