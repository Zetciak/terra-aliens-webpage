//Imports
import Head from 'next/head';
import dynamic from 'next/dynamic';

//Components
const NavigationBar = dynamic(
  () => import('../components/navigationBar/navigationBar'),
  { ssr: false }
);
import FirstSection from './indexPage/firstSection/firstSection';
import SocialStripe from './indexPage/socialStripe/socialStripe';

//CSS
import useStyles from './indexPage/indexStyle';

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
