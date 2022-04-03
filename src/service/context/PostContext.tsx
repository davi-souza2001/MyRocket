import { createContext, Key, useState } from 'react';
import Client from '../../data/client';

const PostContext = createContext<PostContext>({handleFoundPostsByComum: () => {}});

interface PostContext {
    posts?: PostsProps[]
    handleFoundPostsByComum: () => void
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

export function PostProvider(props: any) {
    const [posts, setPosts] = useState<PostsProps[]>([]);

    async function handleFoundPostsByComum() {
        try {
          const data = await Client.get('/posts/getAllPosts').then((res) => {
            setPosts(res.data)
          })
        } catch (error: any) {
          console.log(error.response.data.error)
        }
      }

    return (
        <PostContext.Provider value={{ posts, handleFoundPostsByComum }}>
            {props.children}
        </PostContext.Provider>
    )
}

export default PostContext;