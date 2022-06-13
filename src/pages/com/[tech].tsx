import { Key, useEffect, useState } from "react";
import { useRouter } from "next/router";

import UsePosts from "../../service/hook/usePosts";

import { HiOutlineGlobe, HiFire, HiUser } from "react-icons/hi";

import { BoxPostComum } from "../../components/BoxPostComum";
import { Header } from "../../components/Header";
import { MembersComum } from "../../components/MembersComum";
import { PostsMoreLiked } from "../../components/PostsMoreLiked";
import { SendPost } from "../../components/SendPost";
import useAuth from "../../service/hook/useAuth";

import styles from '../../styles/Com.module.css'

interface PostsProps {
	email?: String,
	post?: String,
	tech?: String,
	likes?: String[],
	userName?: String,
	userNick?: String,
	userPhoto?: String,
	idUnic?: Key | null | undefined,
	_id?: String
}

export default function Commun() {
	const { posts, getPostsByComum } = UsePosts();
	const router = useRouter();
	const comumSearch: any = router.query.tech;

	const [membersEnable, setMembersEnable] = useState(false);
	const [postsMoreLiked, setPostsMoreLiked] = useState(false);

	useEffect(() => {
		getPostsByComum(comumSearch)

		window.addEventListener('focus', () => {
			getPostsByComum(comumSearch)
		})
	}, [comumSearch])

	return (
		<>
			<Header>
				<div className={styles.contentMoreOptions}>
					<div className={styles.contentIconOne} onClick={() => setMembersEnable(!membersEnable)}>
						<HiUser />
						<div className={membersEnable ? styles.contentIconEnable : styles.contentIconDisable}>
							<MembersComum communities={comumSearch} />
						</div>
					</div>
					<div onClick={() => setPostsMoreLiked(!postsMoreLiked)}>
						<HiFire />
						<div className={postsMoreLiked ? styles.contentIconEnable : styles.contentIconDisable}>
							<PostsMoreLiked comum={comumSearch} />
						</div>
					</div>
				</div>
			</Header>
			<div className={styles.contentGeral}>
				<div className={styles.titleContent}>
					<div className={styles.title}>
						<h3>Planet</h3>
						<p>{comumSearch}</p>
					</div>
					<HiOutlineGlobe />
				</div>
				<div className={styles.contetBoxes}>
					<div className={styles.contentLeft}>
						<MembersComum communities={comumSearch} />
					</div>
					<div className={styles.contentCenter}>
						<div className={styles.formComment}>
							<SendPost tech={comumSearch} />
						</div>
						<div className={styles.commentsArea}>
							{posts?.map((post, index) => {
								return (
									<div key={index}>
										<BoxPostComum
											post={post.content}
											userName={post.userName}
											userNick={post.userNick}
											userPhoto={post.avatar}
										/>
									</div>
								)
							})}
						</div>
					</div>
					<div className={styles.contentRight}>
						<PostsMoreLiked comum={comumSearch} />
					</div>
				</div>
			</div>
		</>
	)
}
