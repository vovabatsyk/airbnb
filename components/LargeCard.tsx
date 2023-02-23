import Image from 'next/image';
import { FC } from 'react';

interface PropsType {
  img: string;
  title: string;
  description: string;
  buttonContext: string;
}

const LargeCard: FC<PropsType> = ({
  img,
  title,
  description,
  buttonContext,
}) => {
  return (
    <section className='relative py16 cursor-pointer my-6'>
      <div className='relative h-96 min-w-[300px] '>
        <Image
          src={img}
          fill
          alt={img}
          style={{ objectFit: 'cover' }}
          className='rounded-2xl'
        />
      </div>
      <div className='absolute top-32 left-12'>
        <h3 className='text-4xl mb-3 w-64'>{title}</h3>
        <p>{description}</p>
        <button
          className='text-sm text-white bg-gray-900 px-4 py-2 mt-5 rounded-lg 
            hover:opacity-80 active:scale-90 transition transform duration-500 ease-out'
        >
          {buttonContext}
        </button>
      </div>
    </section>
  );
};
export default LargeCard;
