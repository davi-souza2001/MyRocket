import Head from 'next/head';

import type { AppProps } from 'next/app';
import { ComumProvider } from '../service/context/CommunitiesContext';
import { AuthProvider } from '../service/context/AuthContext';
import { PostProvider } from '../service/context/PostContext';

import '../styles/globals.css';
import { BoxLoading } from '../components/BoxLoading';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>MyRocket</title>
			</Head>
			<AuthProvider>
				<BoxLoading>
					<ComumProvider>
						<PostProvider>
							<Component {...pageProps} />
						</PostProvider>
					</ComumProvider>
				</BoxLoading>
			</AuthProvider>
		</>
	)
}

export default MyApp
