//Imports
import { CssBaseline } from '@material-ui/core';
import { useEffect, useState } from 'react';
import PageLoader from '../components/pageLoader/pageLoader';

//CSS
import '../styles/globals.css';

//Script
function MyApp({ Component, pageProps }) {
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		setTimeout(() => setLoading(false), 3000);

		const jssStyles = document.querySelector('#jss-server-side');
		if (jssStyles) {
			jssStyles.parentElement.removeChild(jssStyles);
		}
	}, []);

	return (
		<>
			{!loading ? (
				<div>
					<CssBaseline />
					<Component {...pageProps} />
				</div>
			) : (
				<PageLoader />
			)}
		</>
	);
}

export default MyApp;
