import { useRouter } from 'next/router';
import { Dispatch, FC, SetStateAction, useState } from 'react';
import { DateRangePicker, DateRange } from 'react-date-range';
import { HiUsers } from 'react-icons/hi';

interface PropsType {
  setSearchInput: Dispatch<SetStateAction<string>>;
  searchInput: string;
}

const RangePicker: FC<PropsType> = ({ setSearchInput, searchInput }) => {
  const router = useRouter();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [guests, setGuests] = useState(1);

  const handleSelect = (ranges: any) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };
  const selectionRange = {
    startDate,
    endDate,
    key: 'selection',
  };

  const search = () => {
    router.push({
      pathname: '/search',
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests: guests,
      },
    });
    setSearchInput('');
  };
  return (
    <>
      <div className='flex flex-col col-span-3 mx-auto mt-10 '>
        <div className='hidden md:inline'>
          <DateRangePicker
            ranges={[selectionRange]}
            onChange={handleSelect}
            minDate={new Date()}
            rangeColors={['#FD5861']}
            showMonthAndYearPickers={false}
          />
        </div>
        <div className='md:hidden'>
          <DateRange
            ranges={[selectionRange]}
            rangeColors={['#FD5861']}
            minDate={new Date()}
            onChange={handleSelect}
          />
        </div>
        <div>
          <div className='flex border-b-2 items-center'>
            <h2 className='text-lg font-semibold flex-grow items-center'>
              Number of Guests
            </h2>
            <div className='flex items-center space-x-2'>
              <HiUsers className='w-6 h-6' />
              <input
                type='number'
                className='outline-none'
                min={1}
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
              />
            </div>
          </div>
          <div className='flex mt-2'>
            <button
              className='flex-grow hover:text-gray-700'
              onClick={() => setSearchInput('')}
            >
              Cancel
            </button>
            <button
              className='flex-grow text-red-500 hover:text-red-700'
              onClick={search}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default RangePicker;
