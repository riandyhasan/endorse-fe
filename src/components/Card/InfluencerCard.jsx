import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import ICONS from '../../utils/icons';

export default function InfluencerCard({
  id,
  name,
  image,
  interest,
  location,
  instagram,
  tiktok,
  youtube,
  twitter,
  price,
  followers,
  description,
  gender,
}) {
  const router = useRouter();

  const handleEndorseClick = () => {
    const influencerData = {
      'ID ': id,
      Deskripsi: description,
      Nama: name,
      interest: interest,
      instagram: instagram,
      Tiktok: tiktok,
      Youtube: youtube,
      tweeter: twitter,
      Gender: gender,
      image: image,
      'Totalin ': followers,
      biaya: price,
      lokasi: location,
    };
    sessionStorage.setItem('influencer', JSON.stringify(influencerData));
    router.push('/payment');
  };

  return (
    <div
      className='bg-white rounded-lg shadow-md p-4 flex items-center space-x-4 w-full'
      key={id}
    >
      <div className='w-20 h-20'>
        <Image
          src={image}
          alt={name}
          width={80}
          height={80}
          className='w-full object-cover rounded-full'
        />
      </div>
      <div className='flex-1 min-w-0'>
        <h2 className='text-lg font-semibold text-gray-900'>{name}</h2>
        <p className='text-sm text-gray-500'>
          {interest}{' '}
          {location && location !== '' ? (
            <>
              <span className='text-gray-400'>•</span> {location}
            </>
          ) : null}
        </p>
        {instagram && instagram !== '' ? (
          <div className='flex flex-col w-full text-sm text-gray-500 mt-2'>
            <Link
              href={`https://instagram.com/${instagram?.replace('@', '')}`}
              target='_blank'
            >
              <div className='flex items-center gap-2'>
                <div className='p-1 bg-[#0067B4] w-5 h-5 rounded-full'>
                  <Image
                    src={ICONS.INSTAGRAM}
                    alt='Instagram'
                    width={20}
                    height={20}
                  />
                </div>
                <div>{instagram}</div>
              </div>
            </Link>
            <div className=''>Followers: {followers}</div>
          </div>
        ) : null}
        {price && price !== '' ? (
          <p className='text-sm text-gray-600 mt-2'>
            Earn up to <span className='text-blue-500'>Rp{price}</span>
          </p>
        ) : null}
      </div>
      <div className='flex flex-col items-end space-y-2 gap-14'>
        <Link href={`/influencer/${id}`}>
          <div className='text-sm text-blue-500 hover:underline'>Detail</div>
        </Link>
        <button
          className='bg-teal-500 text-white rounded-full px-3 py-1 text-sm'
          onClick={handleEndorseClick}
        >
          Endorse
        </button>
      </div>
    </div>
  );
}
