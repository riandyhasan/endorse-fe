import Image from 'next/image';
import ICONS from '../../utils/icons';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Header({ back, search }) {
  const router = useRouter();
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchClick = () => {
    setIsSearchActive(!isSearchActive);
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    router.push(`/search?query=${encodeURIComponent(searchQuery)}`);
  };

  const handleBackClick = () => {
    setIsSearchActive(false);
    setSearchQuery('');
  };

  return (
    <header
      className='fixed top-0 w-full max-w-[1080px] flex items-center justify-between px-4 py-2 min-h-14'
      style={{
        backgroundImage: 'url(/img/header_bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {back ? (
        <div onClick={() => router.back()} className='cursor-pointer'>
          <Image
            src={ICONS.BACK}
            alt='Back'
            width={30}
            height={30}
            className='text-white'
          />
        </div>
      ) : (
        <div></div>
      )}
      {isSearchActive && (
        <div className='absolute top-0 left-0 flex w-10/12 py-2'>
          <form onSubmit={handleSearchSubmit} className='flex w-full px-4'>
            <input
              type='text'
              value={searchQuery}
              onChange={handleSearchInputChange}
              className='flex-1 p-2 rounded-l-md'
              placeholder='Search...'
            />
            <button
              type='submit'
              className='bg-[#F5F5F5] text-black p-2 rounded-r-md'
            >
              Search
            </button>
          </form>
        </div>
      )}
      <div className='relative flex items-center space-x-4 z-20'>
        {search ? (
          <div
            className='w-10 h-10 rounded-full flex items-center justify-center cursor-pointer'
            onClick={handleSearchClick}
          >
            <Image
              src={!isSearchActive ? ICONS.SEARCH : ICONS.CLOSE}
              alt='Search'
              width={30}
              height={30}
              className='text-white'
            />
          </div>
        ) : null}
      </div>
    </header>
  );
}
