export default function CampaignCard() {
  return (
    <div className='mt-4 bg-gray-100 p-4 rounded-lg'>
      <div className='flex items-center space-x-4'>
        <Image
          src={image}
          alt={title}
          width={50}
          height={50}
          className='rounded-full'
        />
        <div>
          <p className='text-gray-800'>{title}</p>
          <p className='text-gray-600'>{influencer}</p>
          <p className='text-gray-800 font-bold'>{price}</p>
        </div>
      </div>
    </div>
  );
}
