import Image from 'next/image';
import styles from './PostsMoreLiked.module.css';

import Teste from '../../../public/img/social_medias/gmail.svg';
import { Key, useEffect, useState } from 'react';
import UsePosts from '../../service/hook/usePosts';

interface PostsMoreLikedProps {
    comum?: string | string[];
}

interface PostsProps {
    email?: String,
    post?: String,
    tech?: String,
    likes?: String[],
    userName?: String,
    userNick?: String,
    userPhoto?: String,
    idUnic?: Key | null | undefined
}

export function PostsMoreLiked(props: PostsMoreLikedProps) {
    const { posts } = UsePosts();
    const [postsHaveLike, setPostsHaveLike] = useState<PostsProps[]>([]);

    useEffect(() => {
        const postHaveLike = posts?.map((post: any) => {
            if (post.likes?.length && post.tech === props.comum) {
                return post
            } else {
                return null
            }
        })

        const postsHaveLikeByOrder = postHaveLike?.sort(function (a, b) {
            if (a?.likes?.length > b?.likes?.length) {
                return 1;
            }
            if (a?.likes?.length < b?.likes?.length) {
                return -1;
            }
            return 0;
        });

        const handleItsNotNull = (post: PostsProps) => post != null;

        const finalListPostsNoHaveNull = postsHaveLikeByOrder?.filter(handleItsNotNull);

        if (finalListPostsNoHaveNull) {
            setPostsHaveLike(finalListPostsNoHaveNull);
        }

    }, [posts]);


    return (
        <div className={styles.contentGeral}>
            <div className={styles.contentTitle}>
                <p>Most relevant posts</p>
            </div>
            <div className={styles.contentPosts}>
                {postsHaveLike[0] && (
                    <div className={styles.boxPost}>
                        <div>
                            <Image src={postsHaveLike[0].userPhoto || Teste} width={30} height={30} alt="User image" />
                        </div>
                        <div className={styles.contentNameandPost}>
                            <p>{postsHaveLike[0].post}</p>
                            <h4>{postsHaveLike[0].userName}</h4>
                        </div>
                    </div>
                )}
                {postsHaveLike[1] && (
                    <div className={styles.boxPost}>
                        <div>
                            <Image src={postsHaveLike[1].userPhoto || Teste} width={30} height={30} alt="User image" />
                        </div>
                        <div className={styles.contentNameandPost}>
                            <p>{postsHaveLike[1].post}</p>
                            <h4>{postsHaveLike[1].userName}</h4>
                        </div>
                    </div>
                )}
                {postsHaveLike[2] && (
                    <div className={styles.boxPost}>
                        <div>
                            <Image src={postsHaveLike[2].userPhoto || Teste} width={30} height={30} alt="User image" />
                        </div>
                        <div className={styles.contentNameandPost}>
                            <p>{postsHaveLike[2].post}</p>
                            <h4>{postsHaveLike[2].userName}</h4>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}