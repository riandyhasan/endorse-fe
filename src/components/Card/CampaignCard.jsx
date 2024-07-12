import ICONS from '../../utils/icons';
import Image from 'next/image';

export default function CampaignCard({ key, image, title, influencer, price }) {
  return (
    <div className='bg-[rgba(0,103,180,0.1)] p-8 rounded-lg' key={key}>
      <div className='flex items-center space-x-4'>
        <Image src={image} alt={title} width={200} height={200} />
        <div className='w-full'>
          <div className='flex w-full items-center justify-between'>
            <p className='text-bold text-3xl'>{title}</p>
            <Image src={ICONS.NEXT} alt='Next' width={50} height={50} />
          </div>
          <div className='mt-2'>
            <p className='text-gray-600 text-2xl'>{influencer}</p>
            <div className='flex gap-2'>
              <div className='bg-[#12C2C6] p-2 rounded-full'>
                <Image
                  src={ICONS.INSTAGRAM}
                  alt='Instagram'
                  width={20}
                  height={20}
                />
              </div>
              <div className='bg-[#12C2C6] p-2 rounded-full'>
                <Image src={ICONS.TIKTOK} alt='Tiktok' width={20} height={20} />
              </div>
            </div>
          </div>
          <div className='mt-4'>
            <p className='text-gray-600 text-xl'>Biaya Iklan</p>
            <p className='text-gray-800 font-bold text-2xl'>{price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
