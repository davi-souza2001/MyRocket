import { useEffect, useState } from "react";

import UsePosts from "../service/hook/usePosts";
import UseAuth from "../service/hook/useAuth";

import { BoxPostComum } from "../components/BoxPostComum";
import { Header } from "../components/Header";

import styles from '../styles/Feed.module.css';

export default function Feed() {
	const { user } = UseAuth();
	const { posts, getPostsByComum } = UsePosts();

	useEffect(() => {
		if (user?.comumone) {
			getPostsByComum(user?.comumone)
		}
	}, [user])

	return (
		<div className={styles.contentGeral}>
			<Header />
			<div className={styles.contentTitle}>
				<h2>Recent Community Posts</h2>
			</div>
			<div className={styles.contentTechs}>
				{user?.comumone != '' && (
					<div className={styles.techBox}
						onClick={() => user?.comumone && getPostsByComum(user?.comumone)}
					>
						<p>{user?.comumone}</p>
					</div>
				)}
				{user?.comumtwo != '' && (
					<div className={styles.techBox}
						onClick={() => user?.comumtwo && getPostsByComum(user?.comumtwo)}
					>
						<p>{user?.comumtwo}</p>
					</div>
				)}
				{user?.comumthree != '' && (
					<div className={styles.techBox}
						onClick={() => user?.comumthree && getPostsByComum(user?.comumthree)}
					>
						<p>{user?.comumthree}</p>
					</div>
				)}
			</div>
			<div className={styles.contentPosts}>
				{posts?.map((posts, index) => {
					return (
						<div key={index}>
							<BoxPostComum
								post={posts.content}
								userName={posts.userName}
								userNick={posts.userNick}
								userPhoto={posts.avatar}
							/>
						</div>
					)
				})}
			</div>
		</div>
	)
}
