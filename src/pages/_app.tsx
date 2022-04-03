import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ComumProvider } from '../service/context/CommunitiesContext'
import { AuthProvider } from '../service/context/AuthContext'
import { PostProvider } from '../service/context/PostContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <ComumProvider>
        <PostProvider>
          <Component {...pageProps} />
        </PostProvider>
      </ComumProvider>
    </AuthProvider>
  )
}

export default MyApp