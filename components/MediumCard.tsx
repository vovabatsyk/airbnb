import Image from 'next/image';
import { FC } from 'react';
import { Leave } from '../types/Leave';

interface PropsType {
  leave: Leave;
}

const MediumCard: FC<PropsType> = ({ leave }) => {
  return (
    <div className='cursor-pointer hover:opacity-90 '>
      <Image
        src={leave.img}
        width={300}
        height={300}
        alt={`${leave.title} image`}
        className='rounded-xl'
      />
      <h3 className='text-md md:font-semibold md:text-lg'>{leave.title}</h3>
    </div>
  );
};
export default MediumCard;
