import Image from 'next/image';
import { useEffect, useState } from 'react';
import Header from '../../components/Layout/Header';
import { useRouter } from 'next/navigation';
import IMAGES from '../../utils/images';

const formatRupiah = (number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  }).format(number);
};

export default function PaymentPage() {
  const router = useRouter();
  const [influencer, setInfluencer] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState('QRIS');
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const infStr = sessionStorage.getItem('influencer');
      if (!infStr) {
        router.back();
        return;
      }
      const inf = JSON.parse(infStr);
      setInfluencer(inf);
    }
  }, []);

  const handleEndorse = () => {
    setIsModalVisible(true);
  };

  if (!influencer) {
    return <div>Loading...</div>;
  }

  return (
    <div className='shadow-md overflow-hidden h-full relative pt-[4rem]'>
      <Header back={true} />
      <div className='p-8'>
        <div className='flex items-center mb-6 shadow-md p-4 rounded-md'>
          <Image
            src={influencer.image}
            alt={influencer.Nama}
            width={50}
            height={50}
            className='rounded-full'
          />
          <div className='ml-4'>
            <div className='flex items-center space-x-2'>
              <span className='font-semibold'>{influencer.Nama}</span>
            </div>
            <p className='text-gray-500'>{influencer.instagram}</p>
          </div>
        </div>

        <div className='mb-4'>
          <label className='block text-gray-700'>Payment Amount</label>
          <input
            type='text'
            value={formatRupiah(influencer.biaya.replace('K', '000'))}
            className='mt-1 p-2 w-full border rounded-md bg-gray-100'
            placeholder='Rp200.000'
            readOnly
          />
        </div>

        <div className='mb-6'>
          <label className='block text-gray-700 mb-2'>Payment Method</label>
          <div className='bg-gray-100 rounded-lg p-4'>
            <div className='flex items-center mb-4'>
              <input
                type='radio'
                name='paymentMethod'
                value='QRIS'
                checked={paymentMethod === 'QRIS'}
                onChange={() => setPaymentMethod('QRIS')}
                className='form-radio text-blue-500'
              />
              <div className='ml-4'>
                <p className='font-semibold'>QRIS</p>
                <p className='text-sm text-gray-500'>
                  Pay with QRIS: Scan and pay according to the amount you enter.
                </p>
              </div>
            </div>
            <div className='flex items-center'>
              <input
                type='radio'
                name='paymentMethod'
                value='Bank Virtual Account'
                checked={paymentMethod === 'Bank Virtual Account'}
                onChange={() => setPaymentMethod('Bank Virtual Account')}
                className='form-radio text-blue-500'
              />
              <div className='ml-4'>
                <p className='font-semibold'>Bank Virtual Account</p>
                <p className='text-sm text-gray-500'>
                  Pay using a virtual bank account: Fast and secure payment.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='fixed bottom-0 left-0 w-full max-w-[1080px] justify-center'>
          <button
            className='w-full py-3 text-white'
            style={{
              background:
                'linear-gradient(90deg, rgba(18,194,198,1) 1%, rgba(0,103,180,1) 100%)',
            }}
            onClick={handleEndorse}
          >
            Endorse
          </button>
        </div>
      </div>

      {isModalVisible && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='bg-white p-6 rounded-lg shadow-lg'>
            <div className='flex justify-center mb-4'>
              <Image
                src={IMAGES.SUCCESS}
                alt='Success'
                width={100}
                height={100}
              />
            </div>
            <div className='text-center'>
              <h2 className='text-xl font-bold mb-2'>Payment Successful</h2>
              <p className='text-gray-600 mb-4'>
                Your payment transaction was successful.
              </p>
              <button
                className='bg-teal-500 text-white py-2 px-4 rounded-md'
                onClick={() => {
                  router.push('/');
                  setIsModalVisible(false);
                }}
              >
                Ok
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
