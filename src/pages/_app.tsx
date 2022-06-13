import Head from 'next/head';

import type { AppProps } from 'next/app';
import { ComumProvider } from '../service/context/CommunitiesContext';
import { AuthProvider } from '../service/context/AuthContext';
import { PostProvider } from '../service/context/PostContext';

import '../styles/globals.css';
import { BoxLoading } from '../components/BoxLoading';

import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useMemo } from 'react';

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
