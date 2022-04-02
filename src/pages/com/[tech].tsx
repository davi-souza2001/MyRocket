import { useRouter } from "next/router";
import { Key, useEffect, useState } from "react";
import { HiOutlineGlobe, HiFire, HiUser } from "react-icons/hi";
import Client from '../../data/client'

import { BoxPostComum } from "../../components/BoxPostComum";
import { Header } from "../../components/Header";
import { MembersComum } from "../../components/MembersComum";
import { PostsMoreLiked } from "../../components/PostsMoreLiked";
import { SendPost } from "../../components/SendPost";

import styles from '../../styles/Com.module.css'

interface PostsProps {
  email?: String,
  post?: String,
  tech?: String,
  likes?: String[],
  userName?: String,
  userPhoto?: String,
  idUnic?: Key | null | undefined
}

export default function Commun() {
  const router = useRouter();
  const comumSearch = router.query.tech;

  const [posts, setPosts] = useState<PostsProps[]>([])
  const [membersEnable, setMembersEnable] = useState(false)
  const [postsMoreLiked, setPostsMoreLiked] = useState(false)

  async function handleFoundPostsByComum() {
    try {
      const data = await Client.get('/posts/getAllPosts').then((res) => {
        setPosts(res.data)
      })
    } catch (error: any) {
      console.log(error.response.data.error)
    }
  }

  console.log(posts)
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
            <div>
              <SendPost tech={comumSearch} />
              {posts?.map((post) => {
                if (post.tech === comumSearch) {
                  return (
                    <div key={post.idUnic}>
                      <BoxPostComum
                        post={post.post}
                        userName={post.userName}
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