import Image from 'next/image';
import ICONS from '../../utils/icons';
import Header from '../../components/Layout/Header';

export default function CampaignAI() {
  return (
    <div className='shadow-md overflow-hidden h-full relative pt-[4rem]'>
      <Header back={true} />

      <div className='p-8'>
        <div className='flex items-center justify-between'>
          <h2 className='text-lg font-semibold text-gray-900'>AI Assistant</h2>
          <button className='bg-[#0067B4] text-white py-1 px-3 rounded-md'>
            Simpan
          </button>
        </div>
        <div className='mt-4 p-4 bg-gray-100 rounded-lg'>
          <p className='text-gray-700'>
            <strong>Target Demografi:</strong>
            <br /> Keluarga Muda (25-40 tahun), Pria dan Wanita.
          </p>
          <p className='mt-2 text-gray-700'>
            <strong>Pesan Pemasaran:</strong> <br /> "Makanan sehat dan praktis
            untuk seluruh keluarga."
          </p>
          <p className='mt-2 text-gray-700'>
            <strong>Lokasi:</strong> <br />
            Perkotaan
          </p>
          <p className='mt-2 text-gray-700'>
            <strong>Saluran Pemasaran:</strong> <br /> Instagram dan Tiktok
          </p>
        </div>
      </div>

      <div className='fixed bottom-0 left-1/2 transform -translate-x-1/2 bg-[#F5F5F5] p-4 shadow-md w-full max-w-[480px]'>
        <div className='relative flex items-center'>
          <input
            type='text'
            className='w-full p-2 pr-10 border rounded-md bg-white'
            placeholder='Send a message.'
          />
          <div className='absolute right-3'>
            <Image src={ICONS.SEND} alt='Send' width={36} height={36} />
          </div>
        </div>
      </div>
    </div>
  );
}
