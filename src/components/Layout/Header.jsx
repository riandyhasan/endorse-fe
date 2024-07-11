import Image from 'next/image';
import Link from 'next/link';
import ICONS from '../../utils/icons';
import { useRouter } from 'next/navigation';

export default function Header({ back, message, notif }) {
  const router = useRouter();
  return (
    <header
      className='flex items-center justify-between px-4 py-2 min-h-14'
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
            width={24}
            height={24}
            className='text-white'
          />
        </div>
      ) : (
        <div></div>
      )}
      <div className='relative flex items-center space-x-4'>
        {message ? (
          <div className='w-10 h-10 rounded-full flex items-center justify-center'>
            <Image
              src={ICONS.MESSAGE}
              alt='Messages'
              width={30}
              height={30}
              className='text-white'
            />
          </div>
        ) : null}
        {notif ? (
          <div className='w-10 h-10 rounded-full flex items-center justify-center'>
            <Image
              src={ICONS.NOTIFICATION}
              alt='Notifications'
              width={24}
              height={24}
              className='text-white'
            />
          </div>
        ) : null}
      </div>
    </header>
  );
}
