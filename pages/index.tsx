import type { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import {
  Header,
  Banner,
  SmallCard,
  MediumCard,
  LargeCard,
  Footer,
} from '../components';
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
            {exploreData?.map((e) => (
              <SmallCard
                key={e.location}
                explore={e}
              />
            ))}
          </div>
        </section>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Leave Anywhere</h2>
          <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 ml-3'>
            {leaveData?.map((leave) => (
              <MediumCard
                key={leave.title}
                leave={leave}
              />
            ))}
          </div>
        </section>
        <LargeCard
          img='https://links.papareact.com/4cj'
          title='The Greatest Outdoors'
          description='Wishlist curated by Airbnb'
          buttonContext='Get Inspired'
        />
      </main>
      <Footer />
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
