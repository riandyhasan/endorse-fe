'use client';
import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import axios from 'axios';
import Header from '../../components/Layout/Header';
import InfluencerCard from '../../components/Card/InfluencerCard';

export default function ContentBrief() {
  const [briefContent, setBriefContent] = useState('');

  const [influencers, setInfluencers] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const validateBrief = () => {
    if (!briefContent.trim()) {
      setError('Content brief cannot be empty.');
      return false;
    }
    setError('');
    return true;
  };

  const handleSave = async () => {
    if (!validateBrief()) return;
    setIsEditing(false);
  };

  const handleSubmit = async () => {
    if (!validateBrief()) return;
    setIsLoading(true);
    try {
      const response = await axios.post(
        'https://mrfirdauss-endorse-baru.hf.space/similarity',
        { prompt: briefContent },
        {
          headers: {
            accept: 'application/json',
            'Content-Type': 'application/json',
          },
        }
      );
      if (response.status === 200) {
        setInfluencers(response?.data?.data ?? []);
        setIsModalVisible(true);
      }
    } catch (error) {
      console.error('Error creating campaign with AI:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setBriefContent(sessionStorage.getItem('brief') ?? '');
    }
  }, []);

  return (
    <div className='shadow-md overflow-hidden h-full relative pt-[4rem]'>
      <Header back={true} />
      <div className='p-8'>
        <div className='flex items-center justify-between'>
          <h2 className='text-lg font-semibold text-gray-900'>Content Brief</h2>
          {isEditing ? (
            <button
              className='bg-[#0067B4] text-white py-1 px-3 rounded-md'
              onClick={handleSave}
            >
              Save
            </button>
          ) : (
            <button
              className='bg-[#0067B4] text-white py-1 px-3 rounded-md'
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
          )}
        </div>
        <div className='mt-8 w-full'>
          {isEditing ? (
            <textarea
              className='bg-gray-100 rounded-lg p-4 w-full min-h-[60vh] max-h-[60vh]'
              value={briefContent}
              onChange={(e) => setBriefContent(e.target.value)}
            />
          ) : (
            <div className='bg-gray-100 rounded-lg p-4 w-full h-full min-h-[40vh] max-h-[60vh] overflow-y-auto'>
              <ReactMarkdown>{briefContent}</ReactMarkdown>
            </div>
          )}
        </div>
        {error && <p className='text-red-500 mt-2'>{error}</p>}
      </div>

      <div className='fixed bottom-4 right-2 text-end px-4'>
        <button
          className='text-white py-2 px-4 rounded-full'
          style={{
            background:
              'linear-gradient(90deg, rgba(18,194,198,1) 1%, rgba(0,103,180,1) 100%)',
          }}
          onClick={handleSubmit}
          disabled={isLoading}
        >
          <div className='flex gap-2 items-center'>
            {isLoading ? (
              <div className='loader'></div>
            ) : (
              <div>Submit Brief</div>
            )}
          </div>
        </button>
      </div>

      {isModalVisible && (
        <div className='fixed inset-0 flex items-end justify-center bg-black bg-opacity-50'>
          <div className='bg-white w-full rounded-t-lg animate-slide-up'>
            <div className='flex justify-between items-center py-4 px-4'>
              <h3 className='text-lg font-semibold'>Influencer List</h3>
              <button
                onClick={closeModal}
                className='text-gray-500 hover:text-gray-800'
              >
                Close
              </button>
            </div>

            <div className='flex flex-col max-h-[80vh] overflow-y-auto p-8 gap-6'>
              {influencers.map((inf) => (
                <InfluencerCard
                  id={inf['ID ']}
                  name={inf['Nama']}
                  image={inf.image}
                  interest={inf.interest}
                  location={inf.lokasi}
                  instagram={inf.instagram}
                  price={inf.biaya}
                  followers={inf['Totalin ']}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
