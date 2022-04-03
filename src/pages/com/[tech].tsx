import { useRouter } from "next/router";
import UsePosts from "../../service/hook/usePosts";

import { Key, useEffect, useState } from "react";
import { HiOutlineGlobe, HiFire, HiUser } from "react-icons/hi";

import { BoxPostComum } from "../../components/BoxPostComum";
import { Header } from "../../components/Header";
import { MembersComum } from "../../components/MembersComum";
import { PostsMoreLiked } from "../../components/PostsMoreLiked";
import { SendPost } from "../../components/SendPost";

import styles from '../../styles/Com.module.css'

export default function Commun() {
  const router = useRouter();
  const { posts, handleFoundPostsByComum } = UsePosts();
  const comumSearch = router.query.tech;

  const [membersEnable, setMembersEnable] = useState(false)
  const [postsMoreLiked, setPostsMoreLiked] = useState(false)

  useEffect(() => {
    handleFoundPostsByComum()
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
              <PostsMoreLiked />
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
              {posts?.map((post) => {
                if (post.tech === comumSearch) {
                  return (
                    <div key={post.idUnic}>
                      <BoxPostComum
                        post={post.post}
                        userName={post.userName}
                        userNick={post.userNick}
                        userPhoto={post.userPhoto}
                        likes={post.likes?.length}
                      />
                    </div>
                  )
                }
              })}
            </div>
          </div>
          <div className={styles.contentRight}>
            <PostsMoreLiked />
          </div>
        </div>
      </div>
    </>
  )
}