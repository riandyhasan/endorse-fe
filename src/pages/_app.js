import '@/styles/globals.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta name='viewport' content='viewport-fit=cover' />
        <meta
          name='description'
          content='Smart Matchmaking Chatbot untuk Menghubungkan Pelaku UMKM dengan Micro-Influencers  menggunakan Artificial Intelligence (AI) '
        />
        <title>Endorse</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
