import Image from 'next/image';
import { FC } from 'react';
import { Leave } from '../types/Leave';

interface PropsType {
  leave: Leave;
}

const MediumCard: FC<PropsType> = ({ leave }) => {
  return (
    <div className=' cursor-pointer hover:scale-105 transition translate duration-300 ease-out '>
      <div className='relative h-80 w-80'>
        <Image
          src={leave.img}
          fill
          alt={`${leave.title} image`}
          className='rounded-xl'
        />
      </div>
      <h3 className='text-2xl md:font-semibold mt-3'>{leave.title}</h3>
    </div>
  );
};
export default MediumCard;
