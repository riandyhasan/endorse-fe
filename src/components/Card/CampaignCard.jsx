import ICONS from '../../utils/icons';
import Image from 'next/image';

export default function CampaignCard({ key, image, title, influencer, price }) {
  return (
    <div className='bg-[rgba(0,103,180,0.1)] p-4 rounded-lg' key={key}>
      <div className='flex items-center space-x-4'>
        <Image src={image} alt={title} width={120} height={120} />
        <div>
          <div className='flex w-full items-center justify-between'>
            <p className='text-bold text-lg'>{title}</p>
            <Image src={ICONS.NEXT} alt='Next' width={12} height={12} />
          </div>
          <div className='mt-2'>
            <p className='text-gray-600 text-sm'>{influencer}</p>
            <div className='flex gap-2'>
              <div className='bg-[#12C2C6] p-1 rounded-full'>
                <Image
                  src={ICONS.INSTAGRAM}
                  alt='Instagram'
                  width={12}
                  height={12}
                />
              </div>
              <div className='bg-[#12C2C6] p-1 rounded-full'>
                <Image src={ICONS.TIKTOK} alt='Tiktok' width={12} height={12} />
              </div>
            </div>
          </div>
          <div className='mt-2'>
            <p className='text-gray-600 text-sm'>Biaya Iklan</p>
            <p className='text-gray-800 font-bold text-sm'>{price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
