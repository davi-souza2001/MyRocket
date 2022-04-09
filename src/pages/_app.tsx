import Head from 'next/head';

import type { AppProps } from 'next/app';
import { ComumProvider } from '../service/context/CommunitiesContext';
import { AuthProvider } from '../service/context/AuthContext';
import { PostProvider } from '../service/context/PostContext';

import MyRocketLogoPage from '../../public/MyRocketLogoPage.svg';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>MyRocket</title>
      </Head>
      <AuthProvider>
        <ComumProvider>
          <PostProvider>
            <Component {...pageProps} />
          </PostProvider>
        </ComumProvider>
      </AuthProvider>
    </>
  )
}

export default MyApp