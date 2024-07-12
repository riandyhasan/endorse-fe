import Image from 'next/image';
import { useState } from 'react';
import ICONS from '../../utils/icons';
import Header from '../../components/Layout/Header';
import Link from 'next/link';

export default function Campaign() {
  const [selectedCategory, setSelectedCategory] = useState('FnB (Makanan)');

  const categories = [
    'Entertainment',
    'Gaming',
    'Parenting',
    'Sport & Health',
    'Education',
    'FnB (Makanan)',
    'Beauty & Fashion',
    'Lifestyle & Travel',
  ];

  return (
    <div className='shadow-md overflow-hidden h-full pt-[2rem]'>
      <Header back={true} />
      <div className='p-8'>
        <h2 className='text-xl font-semibold text-gray-900 mt-4'>
          Campaign Data
        </h2>
        <p className='mt-2 text-gray-600'>
          Thank you for trusting Endorse! We need your ad data to connect to
          influencer marketing.
        </p>
        <div className='flex flex-col gap-1'>
          <div className='mt-4'>
            <label className='block text-gray-700 text-md'>Nama Iklan</label>
            <input
              type='text'
              className='mt-1 p-2 w-full border rounded-md bg-[#F5F5F5]'
              placeholder='Video Review Makanan'
              value='Video Review Makanan'
            />
          </div>
          <div className='mt-4'>
            <label className='block text-gray-700 text-md'>Nama Produk</label>
            <input
              type='text'
              className='mt-1 p-2 w-full border rounded-md bg-[#F5F5F5]'
              placeholder='Ayam Geprek Sambal Mata'
              value='Ayam Geprek Sambal Mata'
            />
          </div>
          <div className='mt-4'>
            <label className='block text-gray-700 text-md'>
              Kategori Iklan
            </label>
            <div className='flex flex-wrap mt-2'>
              {categories.map((category) => (
                <span
                  key={category}
                  className={`m-1 px-2 py-1 text-sm rounded-full cursor-pointer ${
                    selectedCategory === category
                      ? 'bg-teal-500 text-white'
                      : 'bg-[#F5F5F5] text-[#D9D9D9]'
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div></div>
        <div className='mt-16 flex flex-col space-y-4'>
          <Link href='/campaign/ai'>
            <button className='bg-[#0067B4] text-white py-2 rounded-full flex w-full justify-center'>
              <div className='flex gap-2 items-center'>
                <Image
                  src={ICONS.MAGIC_WAND}
                  alt='New Campaing'
                  width={25}
                  height={25}
                />
                <div>Buat dengan AI</div>
              </div>
            </button>
          </Link>
          <button className='border border-[#9D9494] text-[#9D9494] py-2 rounded-full'>
            Buat manual
          </button>
        </div>
      </div>
    </div>
  );
}
