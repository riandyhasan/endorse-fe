import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Header from '../../components/Layout/Header';
import Link from 'next/link';

export default function SearchResultPage() {
  const router = useRouter();
  const { query } = router.query;
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!query) return;

    const fetchSearchResults = async () => {
      try {
        const response = await axios.get(
          `https://mrfirdauss-endorse-baru.hf.space/search?query=${encodeURIComponent(
            query
          )}`,
          {
            headers: {
              accept: 'application/json',
            },
          }
        );
        if (response.data.message === 'Success') {
          setResults(response.data.data);
        }
      } catch (error) {
        console.error('Error fetching search results:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSearchResults();
  }, [query]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='h-full overflow-hidden'>
      <Header back={true} search={true} />
      <div className='pt-16 px-4'>
        <h1 className='text-2xl font-semibold mb-4'>
          Search Results for "{query}"
        </h1>
        <div className='grid grid-cols-2 gap-4'>
          {results.map((result, index) => (
            <Link
              href={`https://www.tiktok.com/discover/${query}`}
              target='_blank'
            >
              <div
                key={index}
                className='bg-white rounded-lg shadow-md overflow-hidden flex flex-col'
              >
                <div className='relative w-full h-56'>
                  <Image
                    src={result.Link_Image}
                    alt={result.Deskripsi}
                    layout='fill'
                    objectFit='cover'
                  />
                </div>
                <div className='p-4'>
                  <p className='text-sm text-gray-800'>{result.Deskripsi}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
