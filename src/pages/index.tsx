import route from "next/router";
import { HiOutlineGlobe } from "react-icons/hi";

import { Header } from "../components/Header";
import { BoxStacks } from "../components/BoxStacks";

import styles from '../styles/Home.module.css';

import Front from '../../public/areas/FrontIcon.svg';
import Back from '../../public/areas/BackIcon.svg';
import Mobile from '../../public/areas/MobileIcon.svg';
import UseComum from "../service/hook/useComum";

export default function index() {
	const { comumUnic, setComumUnic } = UseComum();

	return (
		<div className={styles.homeGeral}>
			<Header />
			<div className={styles.contentTitle}>
				<div className={styles.contentIcon}>
					<HiOutlineGlobe />
				</div>
				<div className={styles.title}>
					<h2>Choosing a</h2>
					<p>stack</p>
				</div>
			</div>
			<div className={styles.contentBoxes}>
				<BoxStacks onClick={() => {
					setComumUnic('Front')
					route.push('/communities')
				}}
					logo={Front}
					area={'Front-End'}
					description={'Front-end community, here you can see other passengers boarding the same technologies as you. Among them, here people on board like: React, Angular, Vue'} />
				<BoxStacks onClick={() => {
					setComumUnic('Back')
					route.push('/communities')
				}}
					logo={Back}
					area={'Back-End'}
					description={'Back-end community, here you can see other passengers boarding the same technologies as you. Among them, here people on board like: Node, Java'} />
				<BoxStacks onClick={() => {
					setComumUnic('Mobile')
					route.push('/communities')
				}}
					logo={Mobile}
					area={'Mobile'}
					description={'Mobile Community, here you can see other passengers boarding the same technologies as you. Among them, here people on board like: React-Native, Kotlin'} />
			</div>
		</div>
	)
}
