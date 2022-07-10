import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useMemo } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles'

import { ComumProvider } from '../service/context/CommunitiesContext'
import { AuthProvider } from '../service/context/AuthContext'
import { PostProvider } from '../service/context/PostContext'

import '../styles/globals.css'
import { BoxLoading } from '../components/BoxLoading'


function MyApp({ Component, pageProps }: AppProps) {
	const theme = useMemo(
		() =>
			createTheme({
				palette: {
					mode: 'dark',
				},
			}),
		[],
	);

	return (
		<>
			<Head>
				<title>MyRocket</title>
			</Head>
			<ThemeProvider theme={theme}>
				<AuthProvider>
					<BoxLoading>
						<ComumProvider>
							<PostProvider>
								<Component {...pageProps} />
							</PostProvider>
						</ComumProvider>
					</BoxLoading>
				</AuthProvider>
			</ThemeProvider>
		</>
	)
}

export default MyApp
