import { Key, useEffect, useState } from "react";
import { useRouter } from "next/router";

import UsePosts from "../../service/hook/usePosts";
import Client from '../../data/client'

import { HiOutlineGlobe, HiFire, HiUser } from "react-icons/hi";

import { BoxPostComum } from "../../components/BoxPostComum";
import { Header } from "../../components/Header";
import { MembersComum } from "../../components/MembersComum";
import { PostsMoreLiked } from "../../components/PostsMoreLiked";
import { SendPost } from "../../components/SendPost";

import styles from '../../styles/Com.module.css'
import useAuth from "../../service/hook/useAuth";

interface PostsProps {
  email?: String,
  post?: String,
  tech?: String,
  likes?: String[],
  userName?: String,
  userNick?: String,
  userPhoto?: String,
  idUnic?: Key | null | undefined
  _id?: String
}

export default function Commun() {
  const { posts, handleFoundPostsByComum } = UsePosts();
  const { user } = useAuth();
  const router = useRouter();
  const comumSearch = router.query.tech;

  const [membersEnable, setMembersEnable] = useState(false)
  const [postsMoreLiked, setPostsMoreLiked] = useState(false)

  async function handleGiveLike(test: PostsProps) {
    const sendLike = {
      idPost: test._id,
      emailUser: user?.email
    }
    try {
      const data = await Client.post('/posts/giveLike', sendLike).then((res) => {
        handleFoundPostsByComum()
        return res.data
      })
    } catch (error: any) {
      console.log(error.response.data.message)
    }
  }

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
              {posts?.map((post) => {
                if (post.tech === comumSearch) {
                  return (
                    <div key={post.idUnic}>
                      <BoxPostComum
                        post={post.post}
                        userName={post.userName}
                        userNick={post.userNick}
                        userPhoto={post.userPhoto}
                        likesList={post.likes}
                        likes={post.likes?.length}
                        giveLike={() => handleGiveLike(post)}
                      />
                    </div>
                  )
                }
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