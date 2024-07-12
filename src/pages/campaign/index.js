// pages/campaign.js

import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import ICONS from '../../utils/icons';
import Header from '../../components/Layout/Header';
import Link from 'next/link';

export default function Campaign() {
  const [formData, setFormData] = useState({
    namaIklan: '',
    namaProduk: '',
    kategoriIklan: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCategorySelect = (category) => {
    setFormData((prevData) => ({
      ...prevData,
      kategoriIklan: category,
    }));
  };

  const handleCreateBrief = async (withAI) => {
    setIsLoading(true);
    try {
      if (withAI) {
        const response = await axios.post(
          'https://mrfirdauss-endorse-rag.hf.space/brief',
          formData,
          {
            headers: {
              accept: 'application/json',
              'Content-Type': 'application/json',
            },
          }
        );

        sessionStorage.setItem('brief', response.data.message);
      } else {
        sessionStorage.removeItem('brief');
      }

      router.push('/campaign/brief');
    } catch (error) {
      console.error('Error creating campaign with AI:', error);
    } finally {
      setIsLoading(false);
    }
  };

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
            <label className='block text-gray-700 text-md'>Campaign Name</label>
            <input
              type='text'
              name='namaIklan'
              className='mt-1 p-2 w-full border rounded-md bg-[#F5F5F5]'
              placeholder='Ex: Food Review Video'
              value={formData.namaIklan}
              onChange={handleChange}
            />
          </div>
          <div className='mt-4'>
            <label className='block text-gray-700 text-md'>Product Name</label>
            <input
              type='text'
              name='namaProduk'
              className='mt-1 p-2 w-full border rounded-md bg-[#F5F5F5]'
              placeholder='Ayam Geprek Sambal Mata'
              value={formData.namaProduk}
              onChange={handleChange}
            />
          </div>
          <div className='mt-4'>
            <label className='block text-gray-700 text-md'>Category</label>
            <div className='flex flex-wrap mt-2'>
              {categories.map((category) => (
                <span
                  key={category}
                  className={`m-1 px-2 py-1 text-sm rounded-full cursor-pointer ${
                    formData.kategoriIklan === category
                      ? 'bg-teal-500 text-white'
                      : 'bg-[#F5F5F5] text-[#D9D9D9]'
                  }`}
                  onClick={() => handleCategorySelect(category)}
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div></div>
        <div className='mt-16 flex flex-col space-y-4'>
          <button
            className='bg-[#0067B4] text-white py-2 rounded-full flex w-full justify-center items-center'
            onClick={() => handleCreateBrief(true)}
            disabled={isLoading}
          >
            {isLoading ? (
              <div className='loader'></div>
            ) : (
              <div className='flex gap-2 items-center'>
                <Image
                  src={ICONS.MAGIC_WAND}
                  alt='New Campaign'
                  width={25}
                  height={25}
                />
                <div>Create with AI</div>
              </div>
            )}
          </button>
          <button
            className='border border-[#9D9494] text-[#9D9494] py-2 rounded-full w-full'
            onClick={() => handleCreateBrief(false)}
            disabled={isLoading}
          >
            Write on my own
          </button>
        </div>
      </div>
    </div>
  );
}
