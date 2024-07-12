import Image from 'next/image';
import { useRouter } from 'next/router';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ICONS from '../../utils/icons';
import Header from '../../components/Layout/Header';

export default function InfluencerDetail() {
  const router = useRouter();
  const [influencer, setInfluencer] = useState(null);

  const proceedPayment = () => {
    sessionStorage.setItem('influencer', JSON.stringify(influencer));
    router.push('/payment');
  };

  useEffect(() => {
    const fetchInfluencer = async (id) => {
      try {
        const response = await axios.get(
          `https://mrfirdauss-endorse-baru.hf.space/influencer/${id}`,
          {
            headers: {
              accept: 'application/json',
            },
          }
        );
        if (response.status === 200) {
          setInfluencer(response.data.influencer);
        }
      } catch (error) {
        console.error('Error fetching influencer data:', error);
      }
    };

    if (router?.query?.id) {
      const influencerID = router.query.id;
      fetchInfluencer(influencerID);
    }
  }, [router?.query?.id]);

  if (!influencer) {
    return <div>Loading...</div>;
  }

  return (
    <div className='shadow-md overflow-hidden h-full relative pt-[3rem]'>
      <Header back={true} />
      <div className='flex flex-col w-full'>
        <div
          className='relative w-full h-[30vh]'
          style={{
            backgroundImage: `url('${influencer.image}')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className='absolute bottom-4 left-4 text-white flex flex-col'>
            <h1 className='text-4xl font-bold m-0 p-0'>{influencer.Nama}</h1>
            <div className='text-md'>
              {influencer.interest} | {influencer.lokasi}
            </div>
            <div className='flex gap-2'>
              {influencer.instagram && (
                <Image
                  src={ICONS.INSTAGRAM}
                  width={20}
                  height={20}
                  alt='Instagram'
                />
              )}
              {influencer.Tiktok && (
                <Image src={ICONS.TIKTOK} width={20} height={20} alt='TikTok' />
              )}
              {influencer.tweeter && (
                <Image
                  src={ICONS.TWITTER}
                  width={20}
                  height={20}
                  alt='Twitter'
                />
              )}
            </div>
          </div>
        </div>
        <div className='p-4'>
          <div className='flex space-x-2 mt-2'></div>
          <div className='mt-4 flex justify-around'>
            <div className='text-center'>
              <p className='text-2xl font-bold'>
                {influencer['Totalin '] ?? '-'}
              </p>
              <p className='text-gray-600'>Total Followers</p>
            </div>
            <div className='text-center'>
              <p className='text-2xl font-bold'>
                {influencer['Engagement Rate'] ?? '-'}
              </p>
              <p className='text-gray-600'>Engagement Rate</p>
            </div>
          </div>
          <div className='mt-4'>
            <h2 className='text-lg font-bold'>Viral Contents</h2>
            <div className='grid grid-cols-2 gap-2 mt-2 max-h-[40vh] overflow-y-auto pb-[8rem]'>
              <div className='relative'>
                <Image
                  src='https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=200&h=200&fit=crop'
                  alt='Viral Content 1'
                  width={200}
                  height={200}
                  className='w-full h-full object-cover rounded'
                />
              </div>
              <div className='relative'>
                <Image
                  src='https://images.unsplash.com/photo-1551218808-94e220e084d2?w=200&h=200&fit=crop'
                  alt='Viral Content 2'
                  width={200}
                  height={200}
                  className='w-full h-full object-cover rounded'
                />
              </div>
              <div className='relative'>
                <Image
                  src='https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=200&h=200&fit=crop'
                  alt='Viral Content 3'
                  width={200}
                  height={200}
                  className='w-full h-full object-cover rounded'
                />
              </div>
              <div className='relative'>
                <Image
                  src='https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=200&h=200&fit=crop'
                  alt='Viral Content 4'
                  width={200}
                  height={200}
                  className='w-full h-full object-cover rounded'
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='fixed bottom-0 left-0 w-full max-w-[1080px] justify-center'>
        ,
        <button
          className='w-full py-3 text-white'
          style={{
            background:
              'linear-gradient(90deg, rgba(18,194,198,1) 1%, rgba(0,103,180,1) 100%)',
          }}
          onClick={proceedPayment}
        >
          Choose Payment
        </button>
      </div>
    </div>
  );
}
