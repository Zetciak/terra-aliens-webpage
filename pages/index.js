//Imports
import Head from 'next/head';
import dynamic from 'next/dynamic';

//Components
const NavigationBar = dynamic(
	() => import('../components/navigationBar/navigationBar'),
	{ ssr: false }
);
import Footer from '../components/footer/footer';
import FirstSection from '../components/indexPage/firstSection/firstSection';
import SocialStripe from '../components/indexPage/socialStripe/socialStripe';
import Utilities from '../components/indexPage/utilities/utilities';
import Arts from '../components/indexPage/arts/arts';
import Traits from '../components/indexPage/traits/traits';
import GalaxyCommunity from '../components/indexPage/galaxyCommunity/galaxyCommunity';
import Faq from '../components/indexPage/faq/faq';
import Roadmap from '../components/indexPage/roadmap/roadmap';

//CSS
import useStyles from '../components/indexPage/indexStyle';

//Script
function HomePage() {
	const classes = useStyles();
	return (
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
			<NavigationBar />
			<FirstSection />
			<SocialStripe />
			<Arts />
			<Traits />
			<Roadmap />
			<Faq />
			<GalaxyCommunity />
			<Footer />
		</div>
	);
}

//<Utilities />

export default HomePage;
