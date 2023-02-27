import Image from 'next/image';
import { FC, useState } from 'react';
import { Place } from '../types/Place';
import { BsHeart, BsFillHeartFill, BsFillStarFill } from 'react-icons/bs';

interface PropsType {
  place: Place;
}

const InfoCard: FC<PropsType> = ({ place }) => {
  const [like, setLike] = useState(false);
  return (
    <div className='flex flex-wrap p-4 space-x-3 shadow-md hover:shadow-lg cursor-pointer'>
      <div className='h-72 w-full md:w-1/3 relative '>
        <Image
          src={place.img}
          fill
          alt={`${place.title} image`}
          className='object-cover rounded-xl'
        />
      </div>
      <div className='flex justify-between flex-col w-full md:w-3/5 mt-4'>
        <div>
          <div className='flex justify-between'>
            <p className='text-xs text-gray-700'>{place.location}</p>
            <button onClick={() => setLike((prev) => !prev)}>
              {like ? <BsFillHeartFill /> : <BsHeart />}
            </button>
          </div>
          <h3 className='text-xl font-semibold my-2'>{place.title}</h3>
          <p className='text-xs text-gray-700 my-4'>{place.description}</p>
        </div>
        <div>
          <div className='flex justify-end'>
            <h3 className='text-xl font-bold my-2'>{place.price}</h3>
          </div>
          <div className='flex justify-between flex-row'>
            <div className='flex items-center space-x-2'>
              <BsFillStarFill className='text-yellow-700' />
              <span>{place.star}</span>
            </div>
            <p className='text-xs text-gray-700 my-4'>{place.total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default InfoCard;
