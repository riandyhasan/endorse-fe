import Image from 'next/image';
import Header from '../components/Layout/Header';
import IMAGES from '../utils/images';

export default function Home() {
  return (
    <div className='shadow-md overflow-x-hidden h-full'>
      <Header notif={true} message={true} />
      <div className='flex flex-col'>
        <div className='flex w-full flex-col px-8'>
          {/* Product Profile */}
          <div className='flex items-center gap-2'>
            <div className='w-20'>
              <Image
                src={IMAGES.PRODUCT_LOGO}
                alt='Ayam Geprek Bebas'
                className='w-full object-cover'
              />
            </div>
            <div>
              <div className='uppercase tracking-wide text-sm text-[#3C3C43] font-semibold'>
                Hi,
              </div>
              <p className='block mt-1 text-2xl leading-tight font-medium text-black'>
                Ayam Geprek Bebas
              </p>
            </div>
          </div>
          <div className='flex flex-col w-full mt-4'>
            <div className='bg-[rgba(0,103,180,0.1)] p-4 rounded-md'>
              <p className='text-[#0067B4]'>Engagement Rate</p>
              <p className='text-2xl font-bold mt-2'>73%</p>
            </div>
            <div className='flex justify-between mt-2'>
              <div className='w-full bg-[rgba(18,194,198,0.1)] p-3'>
                <p className='text-md text-[#12C2C6]'>Like</p>
                <p className='text-lg font-bold mt-2'>1000</p>
              </div>
              <div className='w-full bg-[rgba(18,194,198,0.1)] p-3'>
                <p className='text-md text-[#12C2C6]'>Comment</p>
                <p className='text-lg font-bold mt-2'>12k</p>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-0'>
          <Image
            src={IMAGES.PROMO_BANNER}
            alt='Promotional Banner'
            className='w-full object-cover'
          />
        </div>
        <div className='mt-4'>
          <p className='text-gray-600 font-bold'>Riwayat Campaign</p>
        </div>
        <div className='mt-6 text-center'>
          <button className='bg-blue-500 text-white py-2 px-4 rounded-lg'>
            Buat Iklan Baru
          </button>
        </div>
      </div>
    </div>
  );
}
