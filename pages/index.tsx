import type { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import { Header, Banner, SmallCard, MediumCard } from '../components';
import { Explore } from '../types/Explore';
import { Leave } from '../types/Leave';

interface PropsType {
  exploreData: Explore[];
  leaveData: Leave[];
}

const Home = ({ exploreData, leaveData }: PropsType) => {
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
              <SmallCard
                key={e.location}
                explore={e}
              />
            ))}
          </div>
        </section>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Leave Anywhere</h2>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-2'>
            {leaveData.map((leave) => (
              <MediumCard
                key={leave.title}
                leave={leave}
              />
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

  const leaveData: Leave[] = await fetch(
    'https://www.jsonkeeper.com/b/VHHT'
  ).then((res) => res.json());

  return {
    props: {
      exploreData,
      leaveData,
    },
  };
};

export default Home;
