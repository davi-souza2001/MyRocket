import { MantineProvider } from '@mantine/core';
import Image from 'next/image';
import { useEffect } from 'react';

import Teste from '../../../public/img/social_medias/gmail.svg';
import { PostsProps } from '../../service/context/PostContext';
import UsePosts from '../../service/hook/usePosts';
import EditorPost from '../EditorPost';

import styles from './PostsMoreLiked.module.css';

interface PostsMoreLikedProps {
	comum: string | string[];
}

export function PostsMoreLiked(props: PostsMoreLikedProps) {
	const { postsMoreLiked, getPostsMoreLiked } = UsePosts();

	useEffect(() => {
		getPostsMoreLiked(props.comum)
	}, [props.comum])

	return (
		<div className={styles.contentGeral}>
			<div className={styles.contentTitle}>
				<p>Most relevant posts</p>
			</div>
			<div className={styles.contentPosts}>
				{postsMoreLiked?.map((post: PostsProps) => {
					return (
						<div className={styles.boxPost} key={post.id}>
							<div className={styles.contentNameandPost}>
								<MantineProvider theme={{ colorScheme: 'dark' }}>
									<EditorPost
										readOnly
										value={post.content ?? ''}
										onChange={() => 0}
										style={{
											backgroundColor: '#3d3d50',
											border: 'none',
											fontFamily: 'Poppins, sans-serif',
											color: '#fff'
										}}
									/>
								</MantineProvider>
								<div className={styles.contentImage}>
									<Image src={post.avatar} width={35} height={35} alt="User image" />
									<h4>@{post.userNick}</h4>
								</div>
							</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}
