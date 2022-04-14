import Head from 'next/head';

import type { AppProps } from 'next/app';
import { ComumProvider } from '../service/context/CommunitiesContext';
import { AuthProvider } from '../service/context/AuthContext';
import { PostProvider } from '../service/context/PostContext';

import { QueryClientProvider } from 'react-query';
import { queryClient } from '../service/queryClient';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>MyRocket</title>
      </Head>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <ComumProvider>
            <PostProvider>
              <Component {...pageProps} />
            </PostProvider>
          </ComumProvider>
        </AuthProvider>
      </QueryClientProvider>
    </>
  )
}

export default MyApp