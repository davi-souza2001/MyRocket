import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ComumProvider } from '../service/context/CommunitiesContext'
import { AuthProvider } from '../service/context/AuthContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <ComumProvider>
        <Component {...pageProps} />
      </ComumProvider>
    </AuthProvider>
  )
}

export default MyApp