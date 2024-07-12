import Image from 'next/image';
import Link from 'next/link';
import ICONS from '../../utils/icons';
import { useRouter } from 'next/navigation';

export default function Header({ back, search }) {
  const router = useRouter();
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
      <div className='relative flex items-center space-x-4'>
        {search ? (
          <div className='w-10 h-10 rounded-full flex items-center justify-center'>
            <Image
              src={ICONS.SEARCH}
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
