import { useState } from "react";

import UsePosts from "../service/hook/usePosts";
import UseAuth from "../service/hook/useAuth";

import { BoxPostComum } from "../components/BoxPostComum";
import { Header } from "../components/Header";

import styles from '../styles/Feed.module.css'

export default function Feed() {
    const { user } = UseAuth()
    const { posts } = UsePosts()
    const [userComum, setUserComum] = useState<String | undefined>(user?.comumone)

    return (
        <div className={styles.contentGeral}>
            <Header />
            <div className={styles.contentTitle}>
                <h2>Recent Community Posts</h2>
            </div>
            <div className={styles.contentTechs}>
                {user?.comumone != '' && (
                    <div className={styles.techBox} onClick={() => setUserComum(user?.comumone)}>
                        <p>{user?.comumone}</p>
                    </div>
                )}
                {user?.comumtwo != '' && (
                    <div className={styles.techBox} onClick={() => setUserComum(user?.comumtwo)}>
                        <p>{user?.comumtwo}</p>
                    </div>
                )}
                {user?.comumthree != '' && (
                    <div className={styles.techBox} onClick={() => setUserComum(user?.comumthree)}>
                        <p>{user?.comumthree}</p>
                    </div>
                )}
            </div>
            <div className={styles.contentPosts}>
                {posts?.map((posts) => {
                    if (posts.tech === userComum) {
                        return (
                            <BoxPostComum
                                key={posts.idUnic}
                                post={posts.post}
                                userName={posts.userName}
                                userNick={posts.userNick}
                                userPhoto={posts.userPhoto}
                                likes={posts.likes?.length}
                            />
                        )
                    }
                })}
            </div>
        </div>
    )
}