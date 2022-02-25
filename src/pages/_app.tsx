import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ComumProvider } from '../service/context/CommunitiesContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ComumProvider>
      <Component {...pageProps} />
    </ComumProvider>
  )
}

export default MyApp