import type { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import { Header, Banner, SmallCard } from '../components';
import { Explore } from '../types/Explore';

interface PropsType {
  exploreData: Explore[];
}

const Home = ({ exploreData }: PropsType) => {
  return (
    <div className='select-none'>
      <Head>
        <title>Airbnb</title>
        <link
          rel='icon'
          href='/airbnb.ico'
        />
      </Head>
      <Header />
      <Banner />
      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>
          <div className='flex flex-wrap'>
            {exploreData.map((e) => (
              <SmallCard explore={e} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const exploreData: Explore[] = await fetch(
    'https://www.jsonkeeper.com/b/4G1G'
  ).then((res) => res.json());

  return {
    props: {
      exploreData,
    },
  };
};

export default Home;
