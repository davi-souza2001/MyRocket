import { createContext, Dispatch, Key, SetStateAction, useEffect, useState } from 'react';
import Client from '../../data/client';

const PostContext = createContext<PostContext>({ getPostsByComum: () => { }, setLike: () => { } });

interface PostContext {
	posts?: PostsProps[],
	like?: number | null,
	setLike: Dispatch<SetStateAction<number | null>>
	getPostsByComum: (tech: string | string[]) => void
}

interface PostsProps {
	id?: string
	avatar?: string,
	content?: string,
	email?: string,
	tech?: string,
	likes?: string[],
	userName?: string,
	userNick?: string,
}

export function PostProvider(props: any) {
	const [posts, setPosts] = useState<PostsProps[]>([]);
	const [like, setLike] = useState<number | null>(0)

	async function getPostsByComum(tech: string | string[]) {
		try {
			const data = await Client.post('/post/getByComum', { tech }).then((res) => {
				setPosts(res.data);
			})
		} catch (error: any) {
			console.log(error.response.data.error)
		}
	}

	return (
		<PostContext.Provider value={{ posts, getPostsByComum, like, setLike }}>
			{props.children}
		</PostContext.Provider>
	)
}

export default PostContext;
