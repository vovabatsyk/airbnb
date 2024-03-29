import Image from 'next/image';
import { FC } from 'react';
import { Explore } from '../types/Explore';

interface PropsType {
  explore: Explore;
}

const SmallCard: FC<PropsType> = ({ explore }) => {
  return (
    <div
      className='flex items-center mb-4 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 select-none hover:scale-105
      transform transition duration-300 ease-out
    '
    >
      <Image
        src={explore.img}
        width={75}
        height={75}
        alt={`${explore.location} image`}
        className='rounded-lg'
      />

      <div
        className='  h-full p-2 flex flex-col justify-center w-full
    transition duration-150 ease cursor-pointer hover:bg-gray-200 rounded-lg mr-2'
      >
        <p className='text-lg font-bold'>{explore.location}</p>
        <p className='text-xs text-gray-500'>{explore.distance}</p>
      </div>
    </div>
  );
};
export default SmallCard;
