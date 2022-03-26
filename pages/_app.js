//Imports
import { CssBaseline } from '@material-ui/core';
import { useEffect, useState } from 'react';
import PageLoader from '../components/pageLoader/pageLoader';
import Head from 'next/head';

//CSS
import '../styles/globals.css';

//Script
function MyApp({ Component, pageProps }) {
	const [loading, setLoading] = useState(false);
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		const jssStyles = document.querySelector('#jss-server-side');
		if (jssStyles) {
			jssStyles.parentElement.removeChild(jssStyles);
		}

		setLoaded(true);
		setLoading(true);
		setTimeout(() => setLoading(false), 3000);
	}, []);

	return (
		<>
			{!loading ? (
				<div>
					{loaded ? (
						<div>
							<CssBaseline />
							<Component {...pageProps} />
						</div>
					) : (
						<div></div>
					)}
				</div>
			) : (
				<div>
					<Head>
						<title>Terra Aliens NFT</title>
						<meta
							name="description"
							content="Official site of Terra Aliens NFT on Terra! https://discord.gg/terraaliens"
						/>
						<meta
							name="keywords"
							content="LUNA,TERRA,UST,USDT,NFT,NFTPROJECT"
						/>
						<meta name="author" content="Zetty (dc: Zetty#0741)" />
					</Head>
					<PageLoader />
				</div>
			)}
		</>
	);
}

export default MyApp;
