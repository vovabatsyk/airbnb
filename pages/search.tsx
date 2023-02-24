import Head from 'next/head';
import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';
import { Footer, Header, InfoCard } from '../components';
import { format } from 'date-fns';
import { GetServerSideProps } from 'next';
import { Place } from '../types/Place';
import { pl } from 'date-fns/locale';

interface PropsType {
  places: Place[];
}

const Search: FC<PropsType> = ({ places }) => {
  const { query } = useRouter();
  const { push: href } = useRouter();
  const { location, startDate, endDate, noOfGuests } = query;
  const [formattedStartDate, setFormattedStartDate] = useState('');
  const [formattedEndDate, setFormattedEndDate] = useState('');

  const range = `${formattedStartDate} - ${formattedEndDate}`;

  useEffect(() => {
    if (!location) href('/');
    if (typeof startDate == 'string')
      setFormattedStartDate(format(new Date(startDate), 'dd MMMM yyyy'));
    if (typeof endDate == 'string')
      setFormattedEndDate(format(new Date(endDate), 'dd MMMM yyyy'));
  }, []);

  return (
    <>
      <Head>
        <title>Airbnb-Search</title>
        <link
          rel='icon'
          href='/airbnb.ico'
        />
      </Head>
      <Header placeholder={`${location} | ${range} | ${noOfGuests}`} />
      <main className='flex select-none'>
        <section className='flex-grow pt-14 px-6'>
          <p className='text-sm'>
            300+ Stays - {range} - for {noOfGuests} number quest(s)
          </p>
          <h1 className='text-3xl font-semibold mb-6'>Stays in {location}</h1>
          <div className='flex flex-wrap mb-4'>
            <div className='mr-3 mb-2 button'>Cancellation Flexibility</div>
            <div className='mr-3 mb-2 button'>Type of place</div>
            <div className='mr-3 mb-2 button'>Rooms and Beds</div>
            <div className='mr-3 mb-2 button'>More filters</div>
          </div>
          <div className='flex flex-col'>
            {places.map((place) => (
              <InfoCard
                key={place.title}
                place={place}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
export default Search;

export async function getServerSideProps() {
  const searchResult = await fetch('https://www.jsonkeeper.com/b/5NPS').then(
    (res) => res.json()
  );

  return {
    props: {
      places: searchResult,
    },
  };
}
