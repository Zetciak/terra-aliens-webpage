//Imports
import Head from 'next/head';
import dynamic from 'next/dynamic';

//Components
const NavigationBar = dynamic(
  () => import('../components/NavigationBar/NavigationBar'),
  { ssr: false }
);
import FirstSection from './IndexPage/FirstSection/FirstSection';
import SocialStripe from './IndexPage/SocialStripe/SocialStripe';

//CSS
import useStyles from './IndexPage/IndexStyle';

//Script
function HomePage() {
  const classes = useStyles();
  return (
    <>
      <Head>
        <title>Terra Aliens NFT</title>
      </Head>
      <NavigationBar />
      <FirstSection />
      <SocialStripe />
      asdasd
    </>
  );
}

export default HomePage;
