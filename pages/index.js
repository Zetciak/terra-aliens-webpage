//Imports
import Head from 'next/head';
import dynamic from 'next/dynamic';

//Components
const NavigationBar = dynamic(
  () => import('../components/navigationBar/navigationBar'),
  { ssr: false }
);
import FirstSection from '../components/indexPage/firstSection/firstSection';
import SocialStripe from '../components/indexPage/socialStripe/socialStripe';

//CSS
import useStyles from '../components/indexPage/indexStyle';

//Script
function HomePage() {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>Terra Aliens NFT</title>
      </Head>
      <NavigationBar />
      <FirstSection />
      <SocialStripe />
      asdasd
    </div>
  );
}

export default HomePage;
