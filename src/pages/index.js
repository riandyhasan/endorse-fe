import Image from 'next/image';
import Header from '../components/Layout/Header';
import CampaignCard from '../components/Card/CampaignCard';
import IMAGES from '../utils/images';
import ICONS from '../utils/icons';
import Link from 'next/link';

const HISTORIES = [
  {
    image: IMAGES.HISTORY_1,
    title: 'Iklan Video Pakaian Pria',
    influencer: 'Windah Batubara',
    price: 'Rp150.000',
  },
  {
    image: IMAGES.HISTORY_2,
    title: 'Iklan Video Kosmetik',
    influencer: 'Windah Batubara',
    price: 'Rp150.000',
  },
];

export default function Home() {
  return (
    <div className='shadow-md overflow-hidden h-full pt-[4rem]'>
      <Header notif={true} message={true} />
      <div className='flex flex-col'>
        <div className='flex w-full flex-col px-8'>
          {/* Product Profile */}
          <div className='flex items-center gap-2'>
            <div className='w-14'>
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
              <p className='text-xl font-bold mt-2'>73%</p>
            </div>
            <div className='flex justify-between mt-2 gap-4'>
              <div className='w-full bg-[rgba(18,194,198,0.1)] p-3 rounded-md'>
                <p className='text-md text-[#12C2C6]'>Like</p>
                <p className='text-lg font-bold mt-1'>1000k</p>
              </div>
              <div className='w-full bg-[rgba(18,194,198,0.1)] p-3 rounded-md'>
                <p className='text-md text-[#12C2C6]'>Comment</p>
                <p className='text-lg font-bold mt-1'>12k</p>
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
        <div className='mt-2 px-4'>
          <p className='text-xl font-semi'>Campaign History</p>
        </div>
        <div className='flex flex-col gap-4 p-4 max-h-[200px] overflow-y-auto'>
          {HISTORIES.map((ht, idx) => (
            <CampaignCard
              key={idx}
              title={ht.title}
              image={ht.image}
              influencer={ht.influencer}
              price={ht.price}
            />
          ))}
        </div>
        <div className='fixed bottom-5 right-0 text-end px-4'>
          <Link href='/campaign'>
            <button
              className='text-white py-2 px-4 rounded-full'
              style={{
                background:
                  'linear-gradient(90deg, rgba(18,194,198,1) 1%, rgba(0,103,180,1) 100%)',
              }}
            >
              <div className='flex gap-2 items-center'>
                <Image
                  src={ICONS.MAGIC_WAND}
                  alt='New Campaing'
                  width={25}
                  height={25}
                />
                <div>Create Campaign</div>
              </div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
