import Image from 'next/image';
import { FC } from 'react';

interface PropsType {}

const Banner: FC<PropsType> = () => {
  return (
    <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[400px]'>
      <Image
        src='https://links.papareact.com/0fm'
        alt='logo'
        fill
        style={{ objectFit: 'cover' }}
      />
      <div className='absolute top-1/2 w-full text-center'>
        <p className='text-sm sm:text-lg'>Not sure where to go? Perfect.</p>
        <button
          className='bg-white px-6 py-2 mt-2 shadow-md hover:shadow-xl 
          rounded-full text-xl text-blue-800 font-bold active:scale-90
          transition duration-150 ease select-none'
        >
          I'm flexible
        </button>
      </div>
    </div>
  );
};
export default Banner;
