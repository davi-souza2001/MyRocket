import Image from 'next/image';

import Teste from '../../../public/img/social_medias/gmail.svg';
import UsePosts from '../../service/hook/usePosts';

import styles from './PostsMoreLiked.module.css';

interface PostsMoreLikedProps {
	comum?: string | string[];
}

export function PostsMoreLiked(props: PostsMoreLikedProps) {
	const { posts } = UsePosts();


	return (
		<div className={styles.contentGeral}>
			<div className={styles.contentTitle}>
				<p>Most relevant posts</p>
			</div>
			<div className={styles.contentPosts}>
				<div className={styles.boxPost}>
					<div>
						<Image src={Teste} width={30} height={30} alt="User image" />
					</div>
					<div className={styles.contentNameandPost}>
						<p>Teste</p>
						<h4>Teste</h4>
					</div>
				</div>
				<div className={styles.boxPost}>
					<div>
						<Image src={Teste} width={30} height={30} alt="User image" />
					</div>
					<div className={styles.contentNameandPost}>
						<p>Teste</p>
						<h4>Teste</h4>
					</div>
				</div>
				<div className={styles.boxPost}>
					<div>
						<Image src={Teste} width={30} height={30} alt="User image" />
					</div>
					<div className={styles.contentNameandPost}>
						<p>Teste</p>
						<h4>Teste</h4>
					</div>
				</div>
			</div>
		</div>
	)
}
