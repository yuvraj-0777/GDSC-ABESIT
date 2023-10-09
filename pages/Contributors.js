import Contributors from '@/components/Contributors';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Inter } from 'next/font/google'
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between ${inter.className}`}
    >
      <Head>
        <title>Contributors</title>
      </Head>
      <Navbar />
      <Contributors/>
      <Footer/>
    </main>
  )
}
