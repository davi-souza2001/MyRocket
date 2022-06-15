import { Key, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { HiOutlineGlobe, HiFire, HiUser } from "react-icons/hi";

import UsePosts from "../../service/hook/usePosts";

import { BoxPostComum } from "../../components/BoxPostComum";
import { Header } from "../../components/Header";
import { MembersComum } from "../../components/MembersComum";
import { PostsMoreLiked } from "../../components/PostsMoreLiked";
import { SendPost } from "../../components/SendPost";

import styles from '../../styles/Com.module.css'

interface PostsProps {
	email?: string,
	content?: string,
	tech?: string,
	userName?: string,
	userNick?: string,
	avatar?: string,
	id?: string
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
							{posts?.map((post: PostsProps, index) => {
								return (
									<div key={index}>
										<BoxPostComum
											id={post.id}
											post={post.content}
											userName={post.userName}
											userNick={post.userNick}
											userPhoto={post.avatar}
											emailUser={post.email}
											tech={post.tech}
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
