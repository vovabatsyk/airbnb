import Image from 'next/image';
import { FC, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { FiMenu, FiGlobe } from 'react-icons/fi';
import { FaUserCircle } from 'react-icons/fa';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import RangePicker from './RangePicker';

interface PropsType {}

const Header: FC<PropsType> = () => {
  const [searchInput, setSearchInput] = useState('');

  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-lg p-5 md:px-10'>
      <div className='flex relative items-center h10 cursor-pointer my-auto'>
        <Image
          src='https://links.papareact.com/qd3'
          alt='logo'
          width={100}
          height={100}
        />
      </div>

      <div className='flex items-center md:border-2 rounded-full py-2 md:shadow-sm md:hover:shadow-md'>
        <input
          type='text'
          placeholder='Start your search'
          className='flex-grow outline-none pl-5 bg-transparent text-sm text-gray-400'
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        {searchInput ? (
          <AiOutlineCloseCircle
            className='h-8 w-8 md:mx-2 p-1 bg-red-400 text-white rounded-full cursor-pointer hidden md:inline-flex'
            onClick={() => setSearchInput('')}
          />
        ) : (
          <BsSearch className='h-8 w-8 md:mx-2 p-2 bg-red-400 text-white rounded-full cursor-pointer hidden md:inline-flex' />
        )}
      </div>

      <div className='flex items-center space-x-1 md:space-x-4 justify-end text-gray-500'>
        <p className='hidden md:inline cursor-pointer'>Become a host</p>
        <FiGlobe className='h-6 w-6 cursor-pointer' />
        <div
          className='flex border-2 rounded-full p-2 space-x-1 shadow-sm  cursor-pointer hover:shadow-md active:scale-90
          transition duration-150 ease select-none'
        >
          <FiMenu className='h-6 w-6 ' />
          <FaUserCircle className='h-6 w-6 ' />
        </div>
      </div>
      {searchInput && <RangePicker setSearchInput={setSearchInput} />}
    </header>
  );
};
export default Header;
