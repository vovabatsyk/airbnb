import type { NextPage } from 'next';
import Head from 'next/head';
import { Header, Banner } from '../components';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Airbnb</title>
        <link
          rel='icon'
          href='/airbnb.ico'
        />
      </Head>
      <Header />
      <Banner />
    </div>
  );
};

export default Home;
